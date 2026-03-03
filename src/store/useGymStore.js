// src/store/useGymStore.js
// Persistencia dual: localStorage (inmediato) + Supabase (permanente)
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { supabase } from '../lib/supabase'
import { ROUTINE_ORDER } from '../data/routines'

// ID de usuario anónimo persistente (sin auth)
function getDeviceId() {
  let id = localStorage.getItem('gym-device-id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('gym-device-id', id)
  }
  return id
}

function getNextRoutine(sessions) {
  if (sessions.length === 0) return 'A'
  const last = sessions[sessions.length - 1]
  const lastIdx = ROUTINE_ORDER.indexOf(last.day)
  return ROUTINE_ORDER[(lastIdx + 1) % ROUTINE_ORDER.length]
}

function computeWeekStatuses(sessions) {
  const statuses = Array(10).fill('pending')
  for (let week = 1; week <= 10; week++) {
    const count = sessions.filter(s => s.week === week).length
    if (count >= 2) statuses[week - 1] = 'green'
    else if (count === 1) statuses[week - 1] = 'red'
  }
  return statuses
}

function getCurrentWeek(sessions, programStartDate) {
  if (!programStartDate) return 1
  const start = new Date(programStartDate)
  const now = new Date()
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24))
  return Math.min(Math.floor(diffDays / 7) + 1, 10)
}

const useGymStore = create(
  persist(
    (set, get) => ({
      sessions: [],
      programStartDate: null,
      workoutLogs: {},
      synced: false, // si ya se cargaron datos de Supabase

      // --- Computed ---
      getNextRoutine: () => getNextRoutine(get().sessions),
      getCurrentWeek: () => getCurrentWeek(get().sessions, get().programStartDate),
      getWeekStatuses: () => computeWeekStatuses(get().sessions),
      getLastSessionDate: (routineKey) => {
        const s = get().sessions.filter(s => s.day === routineKey)
        return s.length ? s[s.length - 1].date : null
      },
      getSuggestedWeight: (exerciseId) => {
        const logs = get().workoutLogs[exerciseId] || []
        return logs.length ? logs[logs.length - 1].weight : null
      },
      getExerciseLogs: (exerciseId) => get().workoutLogs[exerciseId] || [],

      // --- Sync: carga datos desde Supabase al abrir la app ---
      loadFromSupabase: async () => {
        const deviceId = getDeviceId()
        try {
          // Cargar sesiones
          const { data: sessionData } = await supabase
            .from('sessions')
            .select('*')
            .eq('device_id', deviceId)
            .order('created_at', { ascending: true })

          // Cargar logs
          const { data: logData } = await supabase
            .from('workout_logs')
            .select('*')
            .eq('device_id', deviceId)
            .order('created_at', { ascending: true })

          if (sessionData) {
            const sessions = sessionData.map(s => ({
              week: s.week,
              day: s.day,
              date: s.created_at,
            }))

            // Reconstruir workoutLogs desde la BD
            const workoutLogs = {}
            if (logData) {
              for (const log of logData) {
                if (!workoutLogs[log.exercise_id]) workoutLogs[log.exercise_id] = []
                workoutLogs[log.exercise_id].push({
                  date: log.created_at,
                  weight: log.weight,
                  rpe: log.rpe,
                  reps: log.reps,
                  notes: log.notes,
                })
              }
            }

            // Usar la fecha del programa de la primera sesión
            const programStartDate = sessions.length > 0 ? sessions[0].date : get().programStartDate

            set({ sessions, workoutLogs, programStartDate, synced: true })
          }
        } catch (err) {
          console.warn('Supabase no disponible, usando datos locales', err)
          set({ synced: true })
        }
      },

      // --- Actions ---
      completeSession: async (routineKey) => {
        const state = get()
        const deviceId = getDeviceId()

        // Si es la primera sesión, guardar fecha de inicio
        if (!state.programStartDate) {
          set({ programStartDate: new Date().toISOString() })
        }

        const currentWeek = getCurrentWeek(state.sessions, state.programStartDate || new Date().toISOString())
        const newSession = { week: currentWeek, day: routineKey, date: new Date().toISOString() }

        // 1. Actualizar local inmediatamente
        set({ sessions: [...state.sessions, newSession] })

        // 2. Guardar en Supabase
        try {
          await supabase.from('sessions').insert({
            device_id: deviceId,
            week: currentWeek,
            day: routineKey,
          })
        } catch (err) {
          console.warn('Error guardando sesión en Supabase:', err)
        }
      },

      logExerciseSet: async (exerciseId, logEntry) => {
        const deviceId = getDeviceId()
        const logs = get().workoutLogs
        const existing = logs[exerciseId] || []
        const entry = { ...logEntry, date: new Date().toISOString() }

        // 1. Actualizar local inmediatamente
        set({ workoutLogs: { ...logs, [exerciseId]: [...existing, entry] } })

        // 2. Guardar en Supabase
        try {
          await supabase.from('workout_logs').insert({
            device_id: deviceId,
            exercise_id: exerciseId,
            weight: logEntry.weight,
            rpe: logEntry.rpe,
            reps: logEntry.reps,
            notes: logEntry.notes || '',
          })
        } catch (err) {
          console.warn('Error guardando log en Supabase:', err)
        }
      },

      resetProgram: async () => {
        const deviceId = getDeviceId()
        set({ sessions: [], programStartDate: null, workoutLogs: {} })
        try {
          await supabase.from('sessions').delete().eq('device_id', deviceId)
          await supabase.from('workout_logs').delete().eq('device_id', deviceId)
        } catch (err) {
          console.warn('Error reseteando en Supabase:', err)
        }
      },
    }),
    { name: 'gym-tracker-storage' }
  )
)

export default useGymStore

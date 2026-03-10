// src/store/useGymStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { supabase } from '../lib/supabase.js'
import { ROUTINE_ORDER } from '../data/routines'

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

function getCurrentWeek(programStartDate) {
  if (!programStartDate) return 1
  const start = new Date(programStartDate)
  const now = new Date()
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24))
  return Math.min(Math.floor(diffDays / 7) + 1, 10)
}

async function syncToSupabase(table, data) {
  try {
    await supabase.from(table).insert(data)
  } catch (err) {
    console.warn(`Supabase ${table} sync failed:`, err)
  }
}

const useGymStore = create(
  persist(
    (set, get) => ({
      sessions: [],
      programStartDate: null,
      workoutLogs: {},

      getNextRoutine: () => getNextRoutine(get().sessions),
      getCurrentWeek: () => getCurrentWeek(get().programStartDate),
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

      // Carga datos desde Supabase con el device_id del móvil
      // Si Supabase tiene más datos que local → usa Supabase
      // Si local tiene datos y Supabase está vacío → migra a Supabase
      loadFromSupabase: async () => {
        const deviceId = getDeviceId()
        const state = get()

        try {
          const { data: sessionData, error: sErr } = await supabase
            .from('sessions')
            .select('*')
            .eq('device_id', deviceId)
            .order('created_at', { ascending: true })

          if (sErr) throw sErr

          const { data: logData } = await supabase
            .from('workout_logs')
            .select('*')
            .eq('device_id', deviceId)
            .order('created_at', { ascending: true })

          if (sessionData && sessionData.length > 0) {
            // Supabase tiene datos → cargarlos
            const sessions = sessionData.map(s => ({
              week: s.week,
              day: s.day,
              date: s.created_at,
            }))

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

            const programStartDate = sessions[0].date
            set({ sessions, workoutLogs, programStartDate })
            console.log(`Cargados ${sessions.length} sesiones desde Supabase`)

          } else if (state.sessions.length > 0) {
            // Supabase vacío pero hay datos locales → migrar
            console.log('Migrando datos locales a Supabase...')

            const sessionRows = state.sessions.map(s => ({
              device_id: deviceId,
              week: s.week,
              day: s.day,
              created_at: s.date,
            }))
            await supabase.from('sessions').insert(sessionRows)

            const logRows = []
            for (const [exerciseId, logs] of Object.entries(state.workoutLogs)) {
              for (const log of logs) {
                logRows.push({
                  device_id: deviceId,
                  exercise_id: exerciseId,
                  weight: log.weight,
                  rpe: log.rpe,
                  reps: log.reps,
                  notes: log.notes || '',
                  created_at: log.date,
                })
              }
            }
            if (logRows.length > 0) {
              await supabase.from('workout_logs').insert(logRows)
            }
            console.log('Migración completada')
          }

        } catch (err) {
          console.warn('Supabase no disponible, usando datos locales:', err)
        }
      },

      completeSession: async (routineKey) => {
        const state = get()
        const deviceId = getDeviceId()

        const startDate = state.programStartDate || new Date().toISOString()
        const currentWeek = getCurrentWeek(startDate)
        const newSession = { week: currentWeek, day: routineKey, date: new Date().toISOString() }

        set({
          programStartDate: startDate,
          sessions: [...state.sessions, newSession],
        })

        syncToSupabase('sessions', {
          device_id: deviceId,
          week: currentWeek,
          day: routineKey,
        })
      },

      logExerciseSet: async (exerciseId, logEntry) => {
        const deviceId = getDeviceId()
        const logs = get().workoutLogs
        const existing = logs[exerciseId] || []
        const entry = { ...logEntry, date: new Date().toISOString() }

        set({ workoutLogs: { ...logs, [exerciseId]: [...existing, entry] } })

        syncToSupabase('workout_logs', {
          device_id: deviceId,
          exercise_id: exerciseId,
          weight: logEntry.weight,
          rpe: logEntry.rpe,
          reps: logEntry.reps,
          notes: logEntry.notes || '',
        })
      },

      resetProgram: async () => {
        const deviceId = getDeviceId()
        set({ sessions: [], programStartDate: null, workoutLogs: {} })
        try {
          await supabase.from('sessions').delete().eq('device_id', deviceId)
          await supabase.from('workout_logs').delete().eq('device_id', deviceId)
        } catch (_) {}
      },
    }),
    { name: 'gym-tracker-storage' }
  )
)

export default useGymStore
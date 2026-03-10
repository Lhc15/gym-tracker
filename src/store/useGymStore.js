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

// CORREGIDO: solo necesita programStartDate, no sessions
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
    console.warn(`Supabase ${table} sync failed (datos guardados en local):`, err)
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

      completeSession: async (routineKey) => {
        const state = get()
        const deviceId = getDeviceId()

        // FIX: calcular startDate primero, antes de cualquier set()
        const startDate = state.programStartDate || new Date().toISOString()
        const currentWeek = getCurrentWeek(startDate)
        const newSession = { week: currentWeek, day: routineKey, date: new Date().toISOString() }

        // Guardar todo en un solo set atómico
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
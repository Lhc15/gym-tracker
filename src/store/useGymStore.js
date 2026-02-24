// src/store/useGymStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ROUTINE_ORDER } from '../data/routines'

// Calcula el siguiente día de rutina dado el historial de sesiones
// sessions: [{ week: number, day: 'A'|'B'|'C', date: string }]
function getNextRoutine(sessions) {
  if (sessions.length === 0) return 'A'

  // Encuentra el último día completado
  const last = sessions[sessions.length - 1]
  const lastIdx = ROUTINE_ORDER.indexOf(last.day)
  return ROUTINE_ORDER[(lastIdx + 1) % ROUTINE_ORDER.length]
}

// Calcula el estado de cada semana (1-10)
// Devuelve array de 10 items: 'green' | 'red' | 'pending'
function computeWeekStatuses(sessions) {
  const statuses = Array(10).fill('pending')

  for (let week = 1; week <= 10; week++) {
    const weekSessions = sessions.filter(s => s.week === week)
    const count = weekSessions.length

    // Si la semana aún no ha empezado (ninguna sesión y hay semanas anteriores incompletas), pending
    if (count === 0) {
      // Si alguna semana anterior tiene datos, esta es pending-future
      statuses[week - 1] = 'pending'
    } else if (count >= 2) {
      statuses[week - 1] = 'green'
    } else {
      // count === 1
      statuses[week - 1] = 'red'
    }
  }

  return statuses
}

// Determina la semana actual basándose en la primera sesión
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
      // --- State ---
      sessions: [],           // historial completo de sesiones completadas
      programStartDate: null, // fecha ISO del primer entrenamiento
      workoutLogs: {},        // { [exerciseId]: [{ date, weight, rpe, notes }] }

      // --- Computed (se calculan al vuelo) ---
      getNextRoutine: () => getNextRoutine(get().sessions),

      getCurrentWeek: () => getCurrentWeek(get().sessions, get().programStartDate),

      getWeekStatuses: () => computeWeekStatuses(get().sessions),

      getLastSessionDate: (routineKey) => {
        const sessions = get().sessions.filter(s => s.day === routineKey)
        if (sessions.length === 0) return null
        return sessions[sessions.length - 1].date
      },

      // --- Actions ---
      startProgram: () => {
        if (!get().programStartDate) {
          set({ programStartDate: new Date().toISOString() })
        }
      },

      completeSession: (routineKey) => {
        const state = get()
        const currentWeek = getCurrentWeek(state.sessions, state.programStartDate)
        const newSession = {
          week: currentWeek,
          day: routineKey,
          date: new Date().toISOString(),
        }
        set({ sessions: [...state.sessions, newSession] })
      },

      logExerciseSet: (exerciseId, logEntry) => {
        // logEntry: { date, weight, rpe, reps, notes }
        const logs = get().workoutLogs
        const existing = logs[exerciseId] || []
        set({
          workoutLogs: {
            ...logs,
            [exerciseId]: [...existing, { ...logEntry, date: new Date().toISOString() }],
          },
        })
      },

      getExerciseLogs: (exerciseId) => {
        return get().workoutLogs[exerciseId] || []
      },

      // Sugiere el peso para este ejercicio basado en el último log
      getSuggestedWeight: (exerciseId) => {
        const logs = get().workoutLogs[exerciseId] || []
        if (logs.length === 0) return null
        return logs[logs.length - 1].weight
      },

      // Reset completo (por si quieres reiniciar el programa)
      resetProgram: () => {
        set({ sessions: [], programStartDate: null, workoutLogs: {} })
      },
    }),
    {
      name: 'gym-tracker-storage',
    }
  )
)

export default useGymStore

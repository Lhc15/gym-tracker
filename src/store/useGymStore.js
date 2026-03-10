// src/store/useGymStore.js
// Sin device_id dinámico — usa un USER_CODE fijo elegido por el usuario
import { create } from 'zustand'
import { supabase } from '../lib/supabase.js'
import { ROUTINE_ORDER } from '../data/routines'

const USER_CODE_KEY = 'gym-user-code'

export function getUserCode() {
  return localStorage.getItem(USER_CODE_KEY)
}

export function setUserCode(code) {
  localStorage.setItem(USER_CODE_KEY, code.toLowerCase().trim())
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

const useGymStore = create((set, get) => ({
  sessions: [],
  programStartDate: null,
  workoutLogs: {},
  loading: true,

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

  // Carga todos los datos desde Supabase usando el user code
  loadData: async () => {
    const code = getUserCode()
    if (!code) { set({ loading: false }); return }

    set({ loading: true })
    try {
      const { data: sessionData } = await supabase
        .from('sessions')
        .select('*')
        .eq('device_id', code)
        .order('created_at', { ascending: true })

      const { data: logData } = await supabase
        .from('workout_logs')
        .select('*')
        .eq('device_id', code)
        .order('created_at', { ascending: true })

      if (sessionData && sessionData.length > 0) {
        const programStartDate = sessionData[0].created_at

        // Recalcular semanas desde la fecha real de inicio
        const sessions = sessionData.map(s => {
          const start = new Date(programStartDate)
          const sessionDate = new Date(s.created_at)
          const diffDays = Math.floor((sessionDate - start) / (1000 * 60 * 60 * 24))
          const week = Math.min(Math.floor(diffDays / 7) + 1, 10)
          return { week, day: s.day, date: s.created_at }
        })

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

        set({ sessions, workoutLogs, programStartDate, loading: false })
      } else {
        set({ sessions: [], workoutLogs: {}, programStartDate: null, loading: false })
      }
    } catch (err) {
      console.warn('Error cargando datos:', err)
      set({ loading: false })
    }
  },

  completeSession: async (routineKey) => {
    const code = getUserCode()
    const state = get()
    const startDate = state.programStartDate || new Date().toISOString()
    const currentWeek = getCurrentWeek(startDate)
    const newSession = { week: currentWeek, day: routineKey, date: new Date().toISOString() }

    set({
      programStartDate: startDate,
      sessions: [...state.sessions, newSession],
    })

    try {
      await supabase.from('sessions').insert({
        device_id: code,
        week: currentWeek,
        day: routineKey,
      })
    } catch (err) {
      console.warn('Error guardando sesión:', err)
    }
  },

  logExerciseSet: async (exerciseId, logEntry) => {
    const code = getUserCode()
    const logs = get().workoutLogs
    const existing = logs[exerciseId] || []
    set({ workoutLogs: { ...logs, [exerciseId]: [...existing, { ...logEntry, date: new Date().toISOString() }] } })

    try {
      await supabase.from('workout_logs').insert({
        device_id: code,
        exercise_id: exerciseId,
        weight: logEntry.weight,
        rpe: logEntry.rpe,
        reps: logEntry.reps,
        notes: logEntry.notes || '',
      })
    } catch (err) {
      console.warn('Error guardando log:', err)
    }
  },

  resetProgram: async () => {
    const code = getUserCode()
    set({ sessions: [], programStartDate: null, workoutLogs: {} })
    try {
      await supabase.from('sessions').delete().eq('device_id', code)
      await supabase.from('workout_logs').delete().eq('device_id', code)
    } catch (_) {}
  },
}))

export default useGymStore
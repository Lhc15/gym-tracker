// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import WeekGrid from '../components/WeekGrid'
import useGymStore from '../store/useGymStore'
import { ROUTINES } from '../data/routines'

const ROUTINE_DESCRIPTIONS = {
  A: 'Prensa · RDL · Jalón · Press · Laterales',
  B: 'Hip thrust · Remo · Búlgara · Femoral · Face pull',
  C: 'Peso muerto · Prensa · Militar · Remo uni · Gemelo',
}

export default function Home() {
  const navigate = useNavigate()
  const getNextRoutine = useGymStore(s => s.getNextRoutine)
  const getLastSessionDate = useGymStore(s => s.getLastSessionDate)
  const startProgram = useGymStore(s => s.startProgram)
  const programStartDate = useGymStore(s => s.programStartDate)

  const nextRoutine = getNextRoutine()

  const handleStart = (key) => {
    if (!programStartDate) startProgram()
    navigate(`/workout/${key}`)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden' }}>
      {/* Week tracker */}
      <WeekGrid />

      {/* Body */}
      <div style={{ flex: 1, overflow: 'auto', padding: '24px 20px' }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: 32 }}
        >
          <h1 style={{
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--text)',
          }}>
            GYM<br />TRACKER
          </h1>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: 13,
            fontFamily: 'var(--font-mono)',
            marginTop: 8,
          }}>
            {programStartDate
              ? `Programa iniciado el ${new Date(programStartDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}`
              : 'Selecciona tu primera rutina para empezar'
            }
          </p>
        </motion.div>

        {/* Routine cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {Object.entries(ROUTINES).map(([key, routine], i) => {
            const isNext = key === nextRoutine
            const lastDate = getLastSessionDate(key)
            const formattedDate = lastDate
              ? new Date(lastDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
              : null

            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleStart(key)}
                style={{
                  width: '100%',
                  padding: '20px',
                  background: isNext ? routine.color : 'var(--surface)',
                  border: isNext ? '2px solid transparent' : '1.5px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: '#111',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {isNext && (
                  <span style={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    fontSize: 10,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    background: 'rgba(0,0,0,0.15)',
                    padding: '3px 8px',
                    borderRadius: 20,
                    letterSpacing: '0.05em',
                  }}>
                    HOY TOCA
                  </span>
                )}

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                  <span style={{
                    fontSize: 42,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    opacity: isNext ? 1 : 0.4,
                  }}>
                    {key}
                  </span>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 600,
                    opacity: 0.7,
                  }}>
                    {routine.name}
                  </span>
                </div>

                <p style={{
                  fontSize: 12,
                  fontFamily: 'var(--font-mono)',
                  opacity: 0.65,
                  lineHeight: 1.4,
                  marginBottom: formattedDate ? 12 : 0,
                }}>
                  {ROUTINE_DESCRIPTIONS[key]}
                </p>

                {formattedDate && (
                  <p style={{
                    fontSize: 11,
                    fontFamily: 'var(--font-mono)',
                    opacity: 0.5,
                    marginTop: 2,
                  }}>
                    Última vez: {formattedDate}
                  </p>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Reset button */}
        {programStartDate && (
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <SyncButton />
            <ResetButton />
          </div>
        )}

        <div style={{ height: 40 }} />
      </div>
    </div>
  )
}

function SyncButton() {
  const [done, setDone] = useState(false)
  const handleSync = () => {
    localStorage.removeItem('gym-tracker-storage')
    setDone(true)
    setTimeout(() => window.location.reload(), 800)
  }
  return (
    <button
      onClick={handleSync}
      style={{
        background: 'transparent',
        color: done ? 'var(--green)' : 'var(--text-muted)',
        fontSize: 12,
        fontFamily: 'var(--font-mono)',
        textDecoration: 'underline',
        display: 'block',
        margin: '0 auto 8px',
      }}
    >
      {done ? '✓ Recargando...' : 'Sincronizar desde Supabase'}
    </button>
  )
}

function ResetButton() {
  const resetProgram = useGymStore(s => s.resetProgram)
  const [confirm, setConfirm] = useState(false)

  return confirm ? (
    <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
      <button
        onClick={() => { resetProgram(); setConfirm(false) }}
        style={{
          padding: '10px 20px',
          background: 'var(--red)',
          color: '#fff',
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        Sí, reiniciar
      </button>
      <button
        onClick={() => setConfirm(false)}
        style={{
          padding: '10px 20px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          borderRadius: 10,
          fontSize: 13,
        }}
      >
        Cancelar
      </button>
    </div>
  ) : (
    <button
      onClick={() => setConfirm(true)}
      style={{
        background: 'transparent',
        color: 'var(--text-muted)',
        fontSize: 12,
        fontFamily: 'var(--font-mono)',
        textDecoration: 'underline',
      }}
    >
      Reiniciar programa
    </button>
  )
}

// Need to import useState for ResetButton
import { useState } from 'react'
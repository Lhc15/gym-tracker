// src/pages/Workout.jsx
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import ExerciseCard from '../components/ExerciseCard'
import useGymStore from '../store/useGymStore'
import { ROUTINES } from '../data/routines'

export default function Workout() {
  const { routineKey } = useParams()
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showFinish, setShowFinish] = useState(false)

  const completeSession = useGymStore(s => s.completeSession)
  const routine = ROUTINES[routineKey]

  if (!routine) return <div>Rutina no encontrada</div>

  const exercises = routine.exercises
  const isLast = currentIndex === exercises.length - 1
  const isFirst = currentIndex === 0

  const goNext = () => {
    if (isLast) {
      setShowFinish(true)
      return
    }
    setDirection(1)
    setCurrentIndex(i => i + 1)
  }

  const goPrev = () => {
    if (isFirst) return
    setDirection(-1)
    setCurrentIndex(i => i - 1)
  }

  const handleFinish = () => {
    completeSession(routineKey)
    navigate('/')
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100dvh',
      overflow: 'hidden',
    }}>
      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'var(--surface2)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            borderRadius: 10,
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowLeft size={18} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: 11,
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}>
            RUTINA
          </div>
          <div style={{
            fontSize: 18,
            fontWeight: 800,
            color: routine.color,
            letterSpacing: '-0.02em',
          }}>
            DÍA {routineKey}
          </div>
        </div>

        {/* Finish button si estamos en el último */}
        {isLast ? (
          <button
            onClick={() => setShowFinish(true)}
            style={{
              background: routine.color,
              border: 'none',
              color: '#000',
              borderRadius: 10,
              padding: '8px 14px',
              fontSize: 12,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <CheckCircle2 size={14} />
            FIN
          </button>
        ) : (
          <div style={{ width: 36 }} />
        )}
      </div>

      {/* Exercise card with AnimatePresence for swipe feel */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <ExerciseCard
            key={exercises[currentIndex].id}
            exercise={exercises[currentIndex]}
            index={currentIndex}
            total={exercises.length}
            accentColor={routine.color}
            onNext={goNext}
            onPrev={goPrev}
          />
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div style={{
        display: 'flex',
        gap: 12,
        padding: '12px 20px 28px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        flexShrink: 0,
      }}>
        <button
          onClick={goPrev}
          disabled={isFirst}
          style={{
            flex: 1,
            padding: '14px',
            borderRadius: 12,
            background: isFirst ? 'var(--surface2)' : 'var(--surface2)',
            border: '1px solid var(--border)',
            color: isFirst ? 'var(--text-muted)' : 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            fontSize: 14,
            fontWeight: 600,
            opacity: isFirst ? 0.3 : 1,
          }}
        >
          <ChevronLeft size={18} />
          Anterior
        </button>
        <button
          onClick={goNext}
          style={{
            flex: 2,
            padding: '14px',
            borderRadius: 12,
            background: isLast ? routine.color : routine.color,
            border: 'none',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          {isLast ? (
            <>
              <CheckCircle2 size={18} />
              Finalizar rutina
            </>
          ) : (
            <>
              Siguiente
              <ChevronRight size={18} />
            </>
          )}
        </button>
      </div>

      {/* Finish modal */}
      <AnimatePresence>
        {showFinish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(240,240,235,0.97)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32,
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: 80,
                fontWeight: 800,
                color: routine.color,
                lineHeight: 1,
                letterSpacing: '-0.05em',
                marginBottom: 16,
              }}>
                DÍA {routineKey}
              </div>
              <p style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>
                ¡Sesión completada!
              </p>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13, marginBottom: 40 }}>
                {exercises.length} ejercicios · {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <button
                  onClick={handleFinish}
                  style={{
                    padding: '16px',
                    borderRadius: 14,
                    background: routine.color,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 700,
                    width: '100%',
                  }}
                >
                  Guardar y volver
                </button>
                <button
                  onClick={() => setShowFinish(false)}
                  style={{
                    padding: '14px',
                    borderRadius: 14,
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Seguir revisando
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

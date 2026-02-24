// src/components/ExerciseCard.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import OptionModal from './OptionModal'
import WorkoutLog from './WorkoutLog'

export default function ExerciseCard({ exercise, index, total, accentColor, dragConstraints, onNext, onPrev }) {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <>
      <motion.div
        key={exercise.id}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragEnd={(e, info) => {
          if (info.offset.x < -60) onNext()
          if (info.offset.x > 60) onPrev()
        }}
        style={{
          flex: 1,
          overflow: 'hidden auto',
          padding: '20px 20px 0',
          userSelect: 'none',
        }}
      >
        {/* Header del ejercicio */}
        <div style={{ marginBottom: 20 }}>
          {/* Número y total */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
            }}>
              EJERCICIO {index + 1} / {total}
            </span>

            {/* Indicadores de progreso */}
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: total }).map((_, i) => (
                <div key={i} style={{
                  width: i === index ? 20 : 6,
                  height: 4,
                  borderRadius: 2,
                  background: i === index ? accentColor : 'var(--border)',
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </div>
          </div>

          {/* Nombre */}
          <h2 style={{
            fontSize: 28,
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
          }}>
            {exercise.name}
          </h2>

          {/* Series × reps badge */}
          <div style={{
            display: 'inline-block',
            marginTop: 10,
            padding: '4px 12px',
            background: accentColor,
            color: '#000',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
          }}>
            {exercise.sets} series × {exercise.reps} reps
          </div>
        </div>

        {/* Nota general */}
        {exercise.notes && (
          <div style={{
            padding: '12px 14px',
            background: 'var(--surface2)',
            borderRadius: 10,
            borderLeft: `3px solid ${accentColor}`,
            marginBottom: 20,
          }}>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-muted)' }}>
              {exercise.notes}
            </p>
          </div>
        )}

        {/* Opciones */}
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontSize: 11,
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            marginBottom: 10,
            letterSpacing: '0.05em',
          }}>
            OPCIONES — TOCA PARA VER
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {exercise.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(opt)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  color: 'var(--text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 14,
                  fontWeight: 500,
                  textAlign: 'left',
                }}
              >
                <span>{opt.label}</span>
                <ChevronRight size={16} color="var(--text-muted)" />
              </button>
            ))}
          </div>
        </div>

        {/* Log de pesos */}
        <WorkoutLog
          exerciseId={exercise.id}
          sets={exercise.sets}
          reps={exercise.reps}
          accentColor={accentColor}
        />

        {/* Spacer para que el último elemento no quede cortado */}
        <div style={{ height: 120 }} />
      </motion.div>

      {/* Modal de opción */}
      {selectedOption && (
        <OptionModal option={selectedOption} onClose={() => setSelectedOption(null)} />
      )}
    </>
  )
}

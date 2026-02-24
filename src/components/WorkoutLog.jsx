// src/components/WorkoutLog.jsx
import { useState } from 'react'
import { ChevronDown, ChevronUp, Plus } from 'lucide-react'
import useGymStore from '../store/useGymStore'

const RPE_LABELS = {
  6: 'Muy fácil',
  7: 'Fácil',
  8: 'Moderado — quedan 2-3 reps',
  9: 'Duro — queda 1 rep',
  10: 'Al fallo',
}

export default function WorkoutLog({ exerciseId, sets, reps, accentColor }) {
  const [expanded, setExpanded] = useState(false)
  const [weight, setWeight] = useState('')
  const [rpe, setRpe] = useState(8)
  const [notes, setNotes] = useState('')

  const logExerciseSet = useGymStore(s => s.logExerciseSet)
  const getExerciseLogs = useGymStore(s => s.getExerciseLogs)
  const getSuggestedWeight = useGymStore(s => s.getSuggestedWeight)

  const logs = getExerciseLogs(exerciseId)
  const suggested = getSuggestedWeight(exerciseId)

  // Último registro para mostrar
  const lastLog = logs.length > 0 ? logs[logs.length - 1] : null
  const lastDate = lastLog
    ? new Date(lastLog.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
    : null

  const handleSave = () => {
    if (!weight) return
    logExerciseSet(exerciseId, { weight: parseFloat(weight), rpe, notes })
    setWeight('')
    setNotes('')
  }

  return (
    <div style={{
      background: 'var(--surface2)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      {/* Header colapsable */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          padding: '14px 16px',
          background: 'transparent',
          color: 'var(--text)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            background: accentColor,
            color: '#000',
            borderRadius: 6,
            padding: '3px 8px',
            fontSize: 12,
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
          }}>
            {sets}×{reps}
          </span>
          <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
            {lastLog ? `Último: ${lastLog.weight}kg — RPE ${lastLog.rpe}` : 'Sin registros aún'}
          </span>
        </div>
        {expanded ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
      </button>

      {expanded && (
        <div style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border)' }}>
          {/* Sugerencia de peso */}
          {suggested && (
            <div style={{
              padding: '10px 12px',
              background: 'rgba(232,255,71,0.06)',
              border: '1px solid rgba(232,255,71,0.2)',
              borderRadius: 8,
              margin: '12px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Peso sugerido</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-a)', fontWeight: 700 }}>
                {suggested} kg
              </span>
            </div>
          )}

          {/* Input peso */}
          <div style={{ marginTop: 12 }}>
            <label style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: 6 }}>
              PESO (KG)
            </label>
            <input
              type="number"
              placeholder={suggested ? `${suggested} kg` : 'ej: 40'}
              value={weight}
              onChange={e => setWeight(e.target.value)}
              inputMode="decimal"
            />
          </div>

          {/* RPE selector */}
          <div style={{ marginTop: 12 }}>
            <label style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: 6 }}>
              INTENSIDAD (RPE {rpe}) — {RPE_LABELS[rpe]}
            </label>
            <div style={{ display: 'flex', gap: 6 }}>
              {[6, 7, 8, 9, 10].map(r => (
                <button
                  key={r}
                  onClick={() => setRpe(r)}
                  style={{
                    flex: 1,
                    padding: '8px 0',
                    borderRadius: 8,
                    background: rpe === r ? accentColor : 'var(--surface)',
                    border: `1px solid ${rpe === r ? accentColor : 'var(--border)'}`,
                    color: rpe === r ? '#000' : 'var(--text-muted)',
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Notas opcionales */}
          <div style={{ marginTop: 12 }}>
            <label style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: 6 }}>
              NOTAS (OPCIONAL)
            </label>
            <input
              type="text"
              placeholder="ej: buena técnica, subir 2.5kg próxima vez"
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          {/* Guardar */}
          <button
            onClick={handleSave}
            disabled={!weight}
            style={{
              marginTop: 14,
              width: '100%',
              padding: '12px',
              borderRadius: 12,
              background: weight ? accentColor : 'var(--surface)',
              color: weight ? '#000' : 'var(--text-muted)',
              fontSize: 14,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              transition: 'all 0.2s',
            }}
          >
            <Plus size={16} />
            Guardar serie
          </button>

          {/* Historial reciente */}
          {logs.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
                HISTORIAL
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[...logs].reverse().slice(0, 5).map((log, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 10px',
                    background: 'var(--surface)',
                    borderRadius: 8,
                    border: '1px solid var(--border)',
                  }}>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {new Date(log.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text)' }}>
                      {log.weight}kg
                    </span>
                    <span style={{
                      fontSize: 11,
                      background: 'var(--surface2)',
                      padding: '2px 6px',
                      borderRadius: 4,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                    }}>
                      RPE {log.rpe}
                    </span>
                    {log.notes && (
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {log.notes}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// src/components/OptionModal.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { X, Image } from 'lucide-react'

export default function OptionModal({ option, onClose }) {
  if (!option) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'flex-end',
          padding: '0',
        }}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          style={{
            width: '100%',
            background: 'var(--surface)',
            borderRadius: '24px 24px 0 0',
            padding: '24px 20px 40px',
            border: '1px solid var(--border)',
            borderBottom: 'none',
          }}
        >
          {/* Handle bar */}
          <div style={{
            width: 40,
            height: 4,
            background: 'var(--border)',
            borderRadius: 2,
            margin: '-8px auto 20px',
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.2, flex: 1, paddingRight: 12 }}>
              {option.label}
            </h3>
            <button
              onClick={onClose}
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Imagen o placeholder */}
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            background: 'var(--surface2)',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
            overflow: 'hidden',
          }}>
            {option.imageUrl ? (
              <img
                src={option.imageUrl}
                alt={option.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <>
                <Image size={32} color="var(--text-muted)" />
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: 12,
                  marginTop: 8,
                  fontFamily: 'var(--font-mono)',
                  textAlign: 'center',
                  padding: '0 20px',
                }}>
                  Añade una URL de imagen en routines.js → imageUrl
                </p>
              </>
            )}
          </div>

          {option.note && (
            <div style={{
              background: 'var(--surface2)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 14px',
              borderLeft: '3px solid var(--accent-a)',
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text)' }}>
                {option.note}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// src/pages/Login.jsx
import { useState } from 'react'
import { setUserCode } from '../store/useGymStore'

export default function Login({ onLogin }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const trimmed = code.trim().toLowerCase()
    if (trimmed.length < 3) {
      setError('Mínimo 3 caracteres')
      return
    }
    setUserCode(trimmed)
    onLogin()
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100dvh',
      padding: '32px 24px',
      background: 'var(--bg)',
    }}>
      <h1 style={{
        fontSize: 40,
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
        color: 'var(--text)',
        textAlign: 'center',
        marginBottom: 8,
      }}>
        GYM<br />TRACKER
      </h1>

      <p style={{
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 48,
      }}>
        Introduce tu código para acceder
      </p>

      <div style={{ width: '100%', maxWidth: 320 }}>
        <input
          type="text"
          placeholder="ej: lolelo"
          value={code}
          onChange={e => { setCode(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          autoCapitalize="none"
          autoCorrect="off"
          style={{
            width: '100%',
            padding: '16px',
            fontSize: 18,
            fontFamily: 'var(--font-mono)',
            borderRadius: 14,
            border: `2px solid ${error ? 'var(--red)' : 'var(--border)'}`,
            background: 'var(--surface)',
            color: 'var(--text)',
            textAlign: 'center',
            outline: 'none',
            boxSizing: 'border-box',
            marginBottom: 8,
          }}
        />
        {error && (
          <p style={{ color: 'var(--red)', fontSize: 12, fontFamily: 'var(--font-mono)', textAlign: 'center', marginBottom: 8 }}>
            {error}
          </p>
        )}
        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: 14,
            background: '#c8f020',
            border: 'none',
            color: '#000',
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Entrar
        </button>
        <p style={{
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          textAlign: 'center',
          marginTop: 16,
          lineHeight: 1.6,
        }}>
          Si ya tienes datos guardados,<br/>
          usa el mismo código que usaste antes.
        </p>
      </div>
    </div>
  )
}

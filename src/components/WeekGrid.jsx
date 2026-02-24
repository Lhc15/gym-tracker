// src/components/WeekGrid.jsx
import useGymStore from '../store/useGymStore'

export default function WeekGrid() {
  const getWeekStatuses = useGymStore(s => s.getWeekStatuses)
  const getCurrentWeek = useGymStore(s => s.getCurrentWeek)

  const statuses = getWeekStatuses()
  const currentWeek = getCurrentWeek()

  return (
    <div style={{
      display: 'flex',
      gap: '6px',
      padding: '16px 20px',
      justifyContent: 'center',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
    }}>
      {statuses.map((status, i) => {
        const week = i + 1
        const isCurrent = week === currentWeek
        const isFuture = week > currentWeek

        let bg = 'var(--surface2)'
        let border = 'var(--border)'
        let textColor = 'var(--text-muted)'

        if (status === 'green') {
          bg = 'var(--green)'
          border = 'var(--green)'
          textColor = '#fff'
        } else if (status === 'red') {
          bg = 'var(--red)'
          border = 'var(--red)'
          textColor = '#fff'
        } else if (isCurrent && status === 'pending') {
          border = '#111'
          textColor = '#111'
        }

        return (
          <div
            key={week}
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              border: `1.5px solid ${border}`,
              background: isFuture && status === 'pending' ? 'transparent' : bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              fontWeight: 700,
              color: isFuture ? 'var(--text-muted)' : textColor,
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.3s ease',
              boxShadow: isCurrent ? '0 0 0 2px rgba(0,0,0,0.2)' : 'none',
              opacity: isFuture ? 0.4 : 1,
            }}
          >
            {week}
          </div>
        )
      })}
    </div>
  )
}

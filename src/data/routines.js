// src/data/routines.js
// Imágenes: Unsplash (libre, sin restricciones CORS)

export const ROUTINES = {
  A: {
    name: 'DÍA A',
    color: '#c8f020',
    exercises: [
      {
        id: 'a1',
        name: 'Prensa / Sentadilla',
        sets: 4,
        reps: '6–8',
        notes: 'Si entrenas sola y quieres seguridad → hack o prensa.',
        options: [
          {
            label: 'Prensa inclinada 45º',
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            note: 'La opción más segura. Controla la bajada.',
          },
          {
            label: 'Sentadilla en multipower',
            imageUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&q=80',
            note: 'Buena para progresión limpia sin necesitar spotter.',
          },
          {
            label: 'Hack squat',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
            note: 'Muy buena opción si la hay. Excelente para cuádriceps.',
          },
        ],
      },
      {
        id: 'a2',
        name: 'Peso muerto rumano',
        sets: 3,
        reps: '6–8',
        notes: 'Si quieres más estabilidad → multipower. Si quieres más estímulo global → barra.',
        options: [
          {
            label: 'Barra libre',
            imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
            note: 'Mayor estímulo global. Ideal si controlas el movimiento.',
          },
          {
            label: 'Mancuernas',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
            note: 'Más fácil de colocar. Buena opción cuando el peso sube.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
            note: 'Más estabilidad. Válido para empezar a cargar.',
          },
        ],
      },
      {
        id: 'a3',
        name: 'Jalón',
        sets: 3,
        reps: '8–10',
        notes: 'Evita tirones con impulso. Controla todo el recorrido.',
        options: [
          {
            label: 'Polea alta agarre ancho',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Clásico y efectivo. Lleva la barra al pecho.',
          },
          {
            label: 'Polea alta agarre neutro',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Menos tensión en el hombro. Buena alternativa.',
          },
        ],
      },
      {
        id: 'a4',
        name: 'Press banca',
        sets: 3,
        reps: '8–10',
        notes: 'Si no progresas en banca libre, usa máquina.',
        options: [
          {
            label: 'Máquina convergente',
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            note: 'Ideal para aislar más el pecho. Muy segura.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            note: 'Progresión limpia y controlada.',
          },
          {
            label: 'Mancuernas',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
            note: 'Mayor rango de movimiento. Requiere más estabilidad.',
          },
        ],
      },
      {
        id: 'a5',
        name: 'Elevaciones laterales',
        sets: 3,
        reps: '15',
        notes: 'Peso ligero, forma perfecta. No balancees el torso.',
        options: [
          {
            label: 'Mancuernas',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
            note: 'La opción clásica. Control total en cada rep.',
          },
          {
            label: 'Máquina de hombro lateral',
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            note: 'Muy buena si existe. Tensión constante en el deltoides.',
          },
        ],
      },
    ],
  },

  B: {
    name: 'DÍA B',
    color: '#ff6b47',
    exercises: [
      {
        id: 'b1',
        name: 'Hip thrust',
        sets: 4,
        reps: '8–10',
        notes: 'Si quieres máxima tensión constante → máquina específica.',
        options: [
          {
            label: 'Barra',
            imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
            note: 'La opción más cargable. Usa pad para la cadera.',
          },
          {
            label: 'Máquina específica de hip thrust',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
            note: 'La mejor opción si existe. Tensión perfecta en glúteo.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
            note: 'Buena alternativa segura.',
          },
        ],
      },
      {
        id: 'b2',
        name: 'Remo',
        sets: 3,
        reps: '8–10',
        notes: 'Evita remar balanceándote. La espalda genera el movimiento.',
        options: [
          {
            label: 'Remo sentado en polea',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'El clásico. Agarre neutro o ancho.',
          },
          {
            label: 'Remo en máquina con pecho apoyado',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Muy buena opción. Elimina el balanceo completamente.',
          },
        ],
      },
      {
        id: 'b3',
        name: 'Búlgara',
        sets: 3,
        reps: '8 por pierna',
        notes: 'Empieza con peso ligero. Foco en el equilibrio antes de cargar.',
        options: [
          {
            label: 'Mancuernas',
            imageUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&q=80',
            note: 'La opción estándar. Flexibilidad de agarre.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&q=80',
            note: 'Más estabilidad lateral. Buena para cargar más.',
          },
        ],
      },
      {
        id: 'b4',
        name: 'Curl femoral',
        sets: 3,
        reps: '10–12',
        notes: 'Ambas máquinas son válidas. Prioriza la que tengas disponible.',
        options: [
          {
            label: 'Curl femoral tumbado',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
            note: 'Mayor rango de movimiento.',
          },
          {
            label: 'Curl femoral sentado',
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            note: 'Tensión en posición de estiramiento. Muy efectivo.',
          },
        ],
      },
      {
        id: 'b5',
        name: 'Face pull',
        sets: 3,
        reps: '15',
        notes: 'Peso muy ligero. Foco en los rotadores externos y deltoides posterior.',
        options: [
          {
            label: 'Polea alta con cuerda',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'La única opción correcta. Tira hacia la cara, codos altos.',
          },
        ],
      },
    ],
  },

  C: {
    name: 'DÍA C',
    color: '#47c8ff',
    exercises: [
      {
        id: 'c1',
        name: 'Peso muerto',
        sets: 3,
        reps: '5–6',
        notes: 'Trap bar sería ideal si el gym la tiene.',
        options: [
          {
            label: 'Barra',
            imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
            note: 'El original. Máximo estímulo de cadena posterior.',
          },
          {
            label: 'Trap bar',
            imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
            note: 'Mejor para ti si la hay. Más segura y cómoda.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
            note: 'Si quieres estabilidad. Válido para aprender.',
          },
        ],
      },
      {
        id: 'c2',
        name: 'Prensa',
        sets: 3,
        reps: '10–12',
        notes: 'La misma máquina del Día A. Más reps, menos peso que en A.',
        options: [
          {
            label: 'Prensa inclinada 45º',
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            note: 'Footprint alto para más cuádriceps, bajo para más glúteo.',
          },
        ],
      },
      {
        id: 'c3',
        name: 'Press militar',
        sets: 3,
        reps: '8–10',
        notes: 'Si quieres progresión limpia → máquina.',
        options: [
          {
            label: 'Máquina de hombro',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
            note: 'La más segura y progresiva.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
            note: 'Buena opción. Controla que no arquees la espalda.',
          },
          {
            label: 'Mancuernas',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
            note: 'Mayor inestabilidad. Útil para identificar desequilibrios.',
          },
        ],
      },
      {
        id: 'c4',
        name: 'Remo unilateral',
        sets: 3,
        reps: '10',
        notes: 'Polea unilateral es muy buena opción.',
        options: [
          {
            label: 'Polea baja unilateral',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Muy buena. Rango completo de movimiento.',
          },
          {
            label: 'Máquina unilateral',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Si existe, cómoda y progresiva.',
          },
          {
            label: 'Mancuerna apoyada en banco',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
            note: 'La clásica. Siempre disponible.',
          },
        ],
      },
      {
        id: 'c5',
        name: 'Gemelo + Core',
        sets: 3,
        reps: '15 / 12',
        notes: 'Superset: gemelo primero, luego core sin descanso.',
        options: [
          {
            label: 'Gemelo — Máquina de pie',
            imageUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&q=80',
            note: 'Mayor carga. Rodilla extendida activa más gastrocnemio.',
          },
          {
            label: 'Gemelo — Máquina sentado',
            imageUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&q=80',
            note: 'Rodilla flexionada activa más sóleo.',
          },
          {
            label: 'Gemelo — En prensa',
            imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            note: 'Válido si no hay máquina específica.',
          },
          {
            label: 'Core — Pallof press en polea',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Antirotación. El mejor core para el gym.',
          },
          {
            label: 'Core — Crunch en polea',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Con carga. Mucho mejor que crunch en suelo.',
          },
          {
            label: 'Core — Plancha con peso',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            note: 'Disco en la espalda. 30–45 segundos.',
          },
        ],
      },
    ],
  },
}

// Orden de rotación de rutinas
export const ROUTINE_ORDER = ['A', 'B', 'C']
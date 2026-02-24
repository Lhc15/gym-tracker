// src/data/routines.js
// Estructura de cada ejercicio:
// {
//   id: string,
//   name: string,
//   sets: number,
//   reps: string,         // e.g. "6-8" | "15"
//   notes: string,        // consejo general
//   options: [
//     {
//       label: string,
//       imageQuery: string,   // texto de búsqueda para la imagen (puedes poner URL directo si tienes)
//       imageUrl: string | null,  // si tienes URL directa, ponla aquí
//       note: string,
//     }
//   ]
// }

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
            imageUrl: null,
            note: 'La opción más segura. Controla la bajada.',
          },
          {
            label: 'Sentadilla en multipower',
            imageUrl: null,
            note: 'Buena para progresión limpia sin necesitar spotter.',
          },
          {
            label: 'Hack squat',
            imageUrl: null,
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
            imageUrl: null,
            note: 'Mayor estímulo global. Ideal si controlas el movimiento.',
          },
          {
            label: 'Mancuernas',
            imageUrl: null,
            note: 'Más fácil de colocar. Buena opción cuando el peso sube.',
          },
          {
            label: 'Multipower',
            imageUrl: null,
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
            imageUrl: null,
            note: 'Clásico y efectivo. Lleva la barra al pecho.',
          },
          {
            label: 'Polea alta agarre neutro',
            imageUrl: null,
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
            imageUrl: null,
            note: 'Ideal para aislar más el pecho. Muy segura.',
          },
          {
            label: 'Multipower',
            imageUrl: null,
            note: 'Progresión limpia y controlada.',
          },
          {
            label: 'Mancuernas',
            imageUrl: null,
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
            imageUrl: null,
            note: 'La opción clásica. Control total en cada rep.',
          },
          {
            label: 'Máquina de hombro lateral',
            imageUrl: null,
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
            imageUrl: null,
            note: 'La opción más cargable. Usa pad para la cadera.',
          },
          {
            label: 'Máquina específica de hip thrust',
            imageUrl: null,
            note: 'La mejor opción si existe. Tensión perfecta en glúteo.',
          },
          {
            label: 'Multipower',
            imageUrl: null,
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
            imageUrl: null,
            note: 'El clásico. Agarre neutro o ancho.',
          },
          {
            label: 'Remo en máquina con pecho apoyado',
            imageUrl: null,
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
            imageUrl: null,
            note: 'La opción estándar. Flexibilidad de agarre.',
          },
          {
            label: 'Multipower',
            imageUrl: null,
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
            imageUrl: null,
            note: 'Mayor rango de movimiento.',
          },
          {
            label: 'Curl femoral sentado',
            imageUrl: null,
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
            imageUrl: null,
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
            imageUrl: null,
            note: 'El original. Máximo estímulo de cadena posterior.',
          },
          {
            label: 'Trap bar',
            imageUrl: null,
            note: 'Mejor para ti si la hay. Más segura y cómoda.',
          },
          {
            label: 'Multipower',
            imageUrl: null,
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
            imageUrl: null,
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
            imageUrl: null,
            note: 'La más segura y progresiva.',
          },
          {
            label: 'Multipower',
            imageUrl: null,
            note: 'Buena opción. Controla que no arquees la espalda.',
          },
          {
            label: 'Mancuernas',
            imageUrl: null,
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
            imageUrl: null,
            note: 'Muy buena. Rango completo de movimiento.',
          },
          {
            label: 'Máquina unilateral',
            imageUrl: null,
            note: 'Si existe, cómoda y progresiva.',
          },
          {
            label: 'Mancuerna apoyada en banco',
            imageUrl: null,
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
            imageUrl: null,
            note: 'Mayor carga. Rodilla extendida activa más gastrocnemio.',
          },
          {
            label: 'Gemelo — Máquina sentado',
            imageUrl: null,
            note: 'Rodilla flexionada activa más sóleo.',
          },
          {
            label: 'Gemelo — En prensa',
            imageUrl: null,
            note: 'Válido si no hay máquina específica.',
          },
          {
            label: 'Core — Pallof press en polea',
            imageUrl: null,
            note: 'Antirotación. El mejor core para el gym.',
          },
          {
            label: 'Core — Crunch en polea',
            imageUrl: null,
            note: 'Con carga. Mucho mejor que crunch en suelo.',
          },
          {
            label: 'Core — Plancha con peso',
            imageUrl: null,
            note: 'Disco en la espalda. 30–45 segundos.',
          },
        ],
      },
    ],
  },
}

// Orden de rotación de rutinas
export const ROUTINE_ORDER = ['A', 'B', 'C']

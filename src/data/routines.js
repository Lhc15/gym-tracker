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

// URLs de imágenes: Wikimedia Commons (dominio público / CC, URLs verificadas)

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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm/320px--Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm.jpg',
            note: 'La opción más segura. Controla la bajada.',
          },
          {
            label: 'Sentadilla en multipower',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Squat_-_exercise_demonstration_video.webm/320px--Squat_-_exercise_demonstration_video.webm.jpg',
            note: 'Buena para progresión limpia sin necesitar spotter.',
          },
          {
            label: 'Hack squat',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm/320px--Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Deadlift_-_exercise_demonstration_video.webm/320px--Deadlift_-_exercise_demonstration_video.webm.jpg',
            note: 'Mayor estímulo global. Ideal si controlas el movimiento.',
          },
          {
            label: 'Mancuernas',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Deadlift_-_exercise_demonstration_video.webm/320px--Deadlift_-_exercise_demonstration_video.webm.jpg',
            note: 'Más fácil de colocar. Buena opción cuando el peso sube.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Deadlift_-_exercise_demonstration_video.webm/320px--Deadlift_-_exercise_demonstration_video.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Common_Lat_Pulldown_Mistakes.webm/320px--Common_Lat_Pulldown_Mistakes.webm.jpg',
            note: 'Clásico y efectivo. Lleva la barra al pecho.',
          },
          {
            label: 'Polea alta agarre neutro',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Common_Lat_Pulldown_Mistakes.webm/320px--Common_Lat_Pulldown_Mistakes.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bench_press_-_exercise_demonstration_video.webm/320px--Bench_press_-_exercise_demonstration_video.webm.jpg',
            note: 'Ideal para aislar más el pecho. Muy segura.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bench_press_-_exercise_demonstration_video.webm/320px--Bench_press_-_exercise_demonstration_video.webm.jpg',
            note: 'Progresión limpia y controlada.',
          },
          {
            label: 'Mancuernas',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bench_press_-_exercise_demonstration_video.webm/320px--Bench_press_-_exercise_demonstration_video.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/How_To_Properly_Dumbbell_Shoulder_Press.webm/320px--How_To_Properly_Dumbbell_Shoulder_Press.webm.jpg',
            note: 'La opción clásica. Control total en cada rep.',
          },
          {
            label: 'Máquina de hombro lateral',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/How_To_Properly_Dumbbell_Shoulder_Press.webm/320px--How_To_Properly_Dumbbell_Shoulder_Press.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/U.S._Air_Force_Senior_Airman_Brandon_Stout_deadlifts.jpg/480px-U.S._Air_Force_Senior_Airman_Brandon_Stout_deadlifts.jpg',
            note: 'La opción más cargable. Usa pad para la cadera.',
          },
          {
            label: 'Máquina específica de hip thrust',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/U.S._Air_Force_Senior_Airman_Brandon_Stout_deadlifts.jpg/480px-U.S._Air_Force_Senior_Airman_Brandon_Stout_deadlifts.jpg',
            note: 'La mejor opción si existe. Tensión perfecta en glúteo.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/U.S._Air_Force_Senior_Airman_Brandon_Stout_deadlifts.jpg/480px-U.S._Air_Force_Senior_Airman_Brandon_Stout_deadlifts.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bent-over_row_-_exercise_demonstration_video.webm/320px--Bent-over_row_-_exercise_demonstration_video.webm.jpg',
            note: 'El clásico. Agarre neutro o ancho.',
          },
          {
            label: 'Remo en máquina con pecho apoyado',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bent-over_row_-_exercise_demonstration_video.webm/320px--Bent-over_row_-_exercise_demonstration_video.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Squat_-_exercise_demonstration_video.webm/320px--Squat_-_exercise_demonstration_video.webm.jpg',
            note: 'La opción estándar. Flexibilidad de agarre.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Squat_-_exercise_demonstration_video.webm/320px--Squat_-_exercise_demonstration_video.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm/320px--Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm.jpg',
            note: 'Mayor rango de movimiento.',
          },
          {
            label: 'Curl femoral sentado',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm/320px--Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Common_Lat_Pulldown_Mistakes.webm/320px--Common_Lat_Pulldown_Mistakes.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Deadlift_-_exercise_demonstration_video.webm/320px--Deadlift_-_exercise_demonstration_video.webm.jpg',
            note: 'El original. Máximo estímulo de cadena posterior.',
          },
          {
            label: 'Trap bar',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Deadlift_-_exercise_demonstration_video.webm/320px--Deadlift_-_exercise_demonstration_video.webm.jpg',
            note: 'Mejor para ti si la hay. Más segura y cómoda.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Deadlift_-_exercise_demonstration_video.webm/320px--Deadlift_-_exercise_demonstration_video.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm/320px--Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shoulder_press_-_exercise_demonstration_video.webm/320px--Shoulder_press_-_exercise_demonstration_video.webm.jpg',
            note: 'La más segura y progresiva.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shoulder_press_-_exercise_demonstration_video.webm/320px--Shoulder_press_-_exercise_demonstration_video.webm.jpg',
            note: 'Buena opción. Controla que no arquees la espalda.',
          },
          {
            label: 'Mancuernas',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/How_To_Properly_Dumbbell_Shoulder_Press.webm/320px--How_To_Properly_Dumbbell_Shoulder_Press.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bent-over_row_-_exercise_demonstration_video.webm/320px--Bent-over_row_-_exercise_demonstration_video.webm.jpg',
            note: 'Muy buena. Rango completo de movimiento.',
          },
          {
            label: 'Máquina unilateral',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bent-over_row_-_exercise_demonstration_video.webm/320px--Bent-over_row_-_exercise_demonstration_video.webm.jpg',
            note: 'Si existe, cómoda y progresiva.',
          },
          {
            label: 'Mancuerna apoyada en banco',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bent-over_row_-_exercise_demonstration_video.webm/320px--Bent-over_row_-_exercise_demonstration_video.webm.jpg',
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
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Squat_-_exercise_demonstration_video.webm/320px--Squat_-_exercise_demonstration_video.webm.jpg',
            note: 'Mayor carga. Rodilla extendida activa más gastrocnemio.',
          },
          {
            label: 'Gemelo — Máquina sentado',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Squat_-_exercise_demonstration_video.webm/320px--Squat_-_exercise_demonstration_video.webm.jpg',
            note: 'Rodilla flexionada activa más sóleo.',
          },
          {
            label: 'Gemelo — En prensa',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm/320px--Hip_Sled_-_How_to_perform_a_45_degree_leg_press.webm.jpg',
            note: 'Válido si no hay máquina específica.',
          },
          {
            label: 'Core — Pallof press en polea',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Common_Lat_Pulldown_Mistakes.webm/320px--Common_Lat_Pulldown_Mistakes.webm.jpg',
            note: 'Antirotación. El mejor core para el gym.',
          },
          {
            label: 'Core — Crunch en poleo',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hanging_crunches_-_exercise_demonstration_video.webm/320px--Hanging_crunches_-_exercise_demonstration_video.webm.jpg',
            note: 'Con carga. Mucho mejor que crunch en suelo.',
          },
          {
            label: 'Core — Plancha con peso',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hanging_crunches_-_exercise_demonstration_video.webm/320px--Hanging_crunches_-_exercise_demonstration_video.webm.jpg',
            note: 'Disco en la espalda. 30–45 segundos.',
          },
        ],
      },
    ],
  },
}

// Orden de rotación de rutinas
export const ROUTINE_ORDER = ['A', 'B', 'C']
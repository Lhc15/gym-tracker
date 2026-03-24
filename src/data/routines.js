// src/data/routines.js
// Imágenes: YouTube thumbnails (máxima calidad, sin restricciones CORS)
// IDs de vídeos verificados de ejercicios en inglés con buena demostración

export const ROUTINES = {
  A: {
    name: 'DÍA A',
    color: '#c8f020',
    exercises: [
      {
        id: 'a1',
        name: 'Prensa 45°',
        sets: 4,
        reps: '10–12',
        notes: 'Footprint alto para más cuádriceps. Controla la bajada sin que las rodillas colapsen.',
        options: [
          {
            label: 'Prensa inclinada 45º',
            imageUrl: 'https://i.ytimg.com/vi/IZxyjW7MPJQ/hqdefault.jpg',
            note: 'La opción principal. Pies altos = más cuádriceps.',
          },
        ],
      },
      {
        id: 'a2',
        name: 'Sentadilla en máquina',
        sets: 3,
        reps: '10–12',
        notes: 'Varía entre hack squat y multipower semana a semana para no estancarte.',
        options: [
          {
            label: 'Hack squat',
            imageUrl: 'https://i.ytimg.com/vi/EdtDBi-FKIY/hqdefault.jpg',
            note: 'Excelente para cuádriceps. Si la hay, úsala.',
          },
          {
            label: 'Sentadilla en multipower',
            imageUrl: 'https://i.ytimg.com/vi/ultWZbUMPL8/hqdefault.jpg',
            note: 'Progresión limpia y controlada.',
          },
        ],
      },
      {
        id: 'a3',
        name: 'Jalón al pecho',
        sets: 4,
        reps: '10–12',
        notes: 'Espalda es el foco del día. 4 series. Evita tirones con impulso.',
        options: [
          {
            label: 'Polea alta agarre ancho',
            imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
            note: 'Clásico y efectivo. Lleva la barra al pecho.',
          },
          {
            label: 'Polea alta agarre neutro',
            imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
            note: 'Menos tensión en el hombro. Buena alternativa.',
          },
        ],
      },
      {
        id: 'a4',
        name: 'Remo en polea',
        sets: 3,
        reps: '10–12',
        notes: 'La espalda genera el movimiento, no los brazos. No te balancees.',
        options: [
          {
            label: 'Remo sentado en polea agarre neutro',
            imageUrl: 'https://i.ytimg.com/vi/GZbfZ033f74/hqdefault.jpg',
            note: 'El clásico. Agarre neutro reduce tensión en el hombro.',
          },
          {
            label: 'Remo en máquina con pecho apoyado',
            imageUrl: 'https://i.ytimg.com/vi/xQNrFHEMhI4/hqdefault.jpg',
            note: 'Elimina el balanceo completamente. Muy efectiva.',
          },
        ],
      },
      {
        id: 'a5',
        name: 'Remo unilateral',
        sets: 3,
        reps: '10–12',
        notes: 'Trabaja cada lado por separado. Ideal para corregir desequilibrios de espalda.',
        options: [
          {
            label: 'Mancuerna apoyada en banco',
            imageUrl: 'https://i.ytimg.com/vi/pYcpY20QaE8/hqdefault.jpg',
            note: 'La clásica. Siempre disponible.',
          },
          {
            label: 'Polea baja unilateral',
            imageUrl: 'https://i.ytimg.com/vi/GZbfZ033f74/hqdefault.jpg',
            note: 'Rango de movimiento completo. Muy buena opción.',
          },
        ],
      },
      {
        id: 'a6',
        name: 'Curl bíceps',
        sets: 3,
        reps: '12',
        notes: 'El bíceps ya ha trabajado asistiendo en el jalón y el remo. Esto es el remate.',
        options: [
          {
            label: 'Curl alterno con mancuernas',
            imageUrl: 'https://i.ytimg.com/vi/sAq_ocpRh_I/hqdefault.jpg',
            note: 'La opción clásica. Supina la muñeca al subir.',
          },
          {
            label: 'Curl martillo',
            imageUrl: 'https://i.ytimg.com/vi/zC3nLlEvin4/hqdefault.jpg',
            note: 'Trabaja más el braquial. Buen complemento.',
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
        reps: '10–12',
        notes: 'El ejercicio rey del día. Aprieta el glúteo arriba y mantén 1 segundo.',
        options: [
          {
            label: 'Barra',
            imageUrl: 'https://i.ytimg.com/vi/SEdqd9DgNho/hqdefault.jpg',
            note: 'La opción más cargable. Usa pad para la cadera.',
          },
          {
            label: 'Máquina específica de hip thrust',
            imageUrl: 'https://i.ytimg.com/vi/SEdqd9DgNho/hqdefault.jpg',
            note: 'La mejor opción si existe. Tensión perfecta en glúteo.',
          },
          {
            label: 'Multipower',
            imageUrl: 'https://i.ytimg.com/vi/SEdqd9DgNho/hqdefault.jpg',
            note: 'Buena alternativa segura.',
          },
        ],
      },
      {
        id: 'b2',
        name: 'Patada de glúteo',
        sets: 3,
        reps: '15 por pierna',
        notes: 'Peso moderado, foco en sentir el glúteo. No balancees la cadera.',
        options: [
          {
            label: 'Polea baja con tobillera',
            imageUrl: 'https://i.ytimg.com/vi/Ex03HmPCCeE/hqdefault.jpg',
            note: 'La opción clásica y más efectiva.',
          },
          {
            label: 'Máquina de patada de glúteo',
            imageUrl: 'https://i.ytimg.com/vi/Ex03HmPCCeE/hqdefault.jpg',
            note: 'Si existe en tu gym, úsala.',
          },
        ],
      },
      {
        id: 'b3',
        name: 'Press militar',
        sets: 3,
        reps: '10–12',
        notes: 'No arquees la espalda baja al empujar. Core activado.',
        options: [
          {
            label: 'Máquina de hombro',
            imageUrl: 'https://i.ytimg.com/vi/qEwKCR5JCog/hqdefault.jpg',
            note: 'La más segura y progresiva.',
          },
          {
            label: 'Mancuernas sentada',
            imageUrl: 'https://i.ytimg.com/vi/qEwKCR5JCog/hqdefault.jpg',
            note: 'Mayor rango de movimiento. Requiere más estabilidad.',
          },
        ],
      },
      {
        id: 'b4',
        name: 'Elevaciones laterales',
        sets: 3,
        reps: '12–15',
        notes: 'Peso ligero, forma perfecta. No balancees el torso.',
        options: [
          {
            label: 'Mancuernas',
            imageUrl: 'https://i.ytimg.com/vi/3VcKaXpzqRo/hqdefault.jpg',
            note: 'La opción clásica. Control total en cada rep.',
          },
          {
            label: 'Máquina de hombro lateral',
            imageUrl: 'https://i.ytimg.com/vi/3VcKaXpzqRo/hqdefault.jpg',
            note: 'Tensión constante en el deltoides. Muy buena si existe.',
          },
        ],
      },
      {
        id: 'b5',
        name: 'Press banca mancuernas',
        sets: 3,
        reps: '10–12',
        notes: 'Pecho nuevo en la rutina. Baja hasta que los codos queden a 90°.',
        options: [
          {
            label: 'Mancuernas en banco plano',
            imageUrl: 'https://i.ytimg.com/vi/VmB1G1K7v94/hqdefault.jpg',
            note: 'Mayor rango de movimiento que la barra. Empieza con poco peso.',
          },
          {
            label: 'Máquina convergente de pecho',
            imageUrl: 'https://i.ytimg.com/vi/xUm0BiZCX_I/hqdefault.jpg',
            note: 'Muy segura. Ideal si no tienes confianza aún con el movimiento.',
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
        name: 'RDL en máquina',
        sets: 3,
        reps: '8–10',
        notes: 'Cuida el lumbar. Mantén la espalda neutra en todo momento, no redondees.',
        options: [
          {
            label: 'Máquina de sentadilla con cinturón (belt squat)',
            imageUrl: 'https://i.ytimg.com/vi/lZRIprPIxlE/hqdefault.jpg',
            note: 'La que ya usas. Enganche abajo, agarre como peso muerto.',
          },
          {
            label: 'Mancuernas',
            imageUrl: 'https://i.ytimg.com/vi/hCDzSR6bW10/hqdefault.jpg',
            note: 'Si la máquina está ocupada. Más fácil de colocar.',
          },
        ],
      },
      {
        id: 'c2',
        name: 'Curl femoral',
        sets: 3,
        reps: '12',
        notes: 'Controla la bajada. La fase excéntrica (bajar) es igual de importante.',
        options: [
          {
            label: 'Curl femoral tumbado',
            imageUrl: 'https://i.ytimg.com/vi/1Tq3QdYUuHs/hqdefault.jpg',
            note: 'Mayor rango de movimiento.',
          },
          {
            label: 'Curl femoral sentado',
            imageUrl: 'https://i.ytimg.com/vi/ELOCsoDSmrg/hqdefault.jpg',
            note: 'Tensión en estiramiento. Muy efectivo.',
          },
        ],
      },
      {
        id: 'c3',
        name: 'Face pull',
        sets: 3,
        reps: '15',
        notes: 'Peso muy ligero. Especialmente importante ahora con el cuello. Codos altos, tira hacia la cara.',
        options: [
          {
            label: 'Polea alta con cuerda',
            imageUrl: 'https://i.ytimg.com/vi/rep-qVOkqgk/hqdefault.jpg',
            note: 'La única opción correcta. Tira hacia la cara, codos altos.',
          },
        ],
      },
      {
        id: 'c4',
        name: 'Butterfly inverso',
        sets: 3,
        reps: '12',
        notes: 'Espalda alta y deltoides posterior. Aprieta las escápulas al final del movimiento.',
        options: [
          {
            label: 'Máquina butterfly inversa',
            imageUrl: 'https://i.ytimg.com/vi/ttvAXDFflH4/hqdefault.jpg',
            note: 'La que ya usas. Muy efectiva para espalda alta.',
          },
          {
            label: 'Pájaros con mancuernas',
            imageUrl: 'https://i.ytimg.com/vi/ttvAXDFflH4/hqdefault.jpg',
            note: 'Si la máquina está ocupada. Peso muy ligero.',
          },
        ],
      },
      {
        id: 'c5',
        name: 'Tríceps polea',
        sets: 3,
        reps: '12',
        notes: 'Codos pegados al cuerpo. Solo se mueve el antebrazo.',
        options: [
          {
            label: 'Polea alta con barra recta',
            imageUrl: 'https://i.ytimg.com/vi/2-LAMcpzODU/hqdefault.jpg',
            note: 'La opción clásica y más cargable.',
          },
          {
            label: 'Polea alta con cuerda',
            imageUrl: 'https://i.ytimg.com/vi/2-LAMcpzODU/hqdefault.jpg',
            note: 'Abre la cuerda al final. Mayor activación.',
          },
        ],
      },
      {
        id: 'c6',
        name: 'Core',
        sets: 3,
        reps: '30–45s / 12',
        notes: 'Superset: plancha primero, luego crunch sin descanso.',
        options: [
          {
            label: 'Plancha frontal',
            imageUrl: 'https://i.ytimg.com/vi/B296mZDhrP4/hqdefault.jpg',
            note: 'Core activado, no dejes caer las caderas. 30–45 segundos.',
          },
          {
            label: 'Crunch en polea',
            imageUrl: 'https://i.ytimg.com/vi/Xyd_fa5zoEU/hqdefault.jpg',
            note: 'Con carga. Mucho mejor que crunch en suelo.',
          },
          {
            label: 'Dead bug',
            imageUrl: 'https://i.ytimg.com/vi/AH_QZLm_0-s/hqdefault.jpg',
            note: 'Excelente para estabilidad lumbar. 12 reps por lado.',
          },
        ],
      },
    ],
  },
}

export const ROUTINE_ORDER = ['A', 'B', 'C']
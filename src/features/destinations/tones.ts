// Словники кольорів винесені в окремий файл, бо вони потрібні ОБОМ карткам
// (малій і великій). Так вони записані один раз, а не скопійовані двічі.
// export — щоб інші файли могли їх імпортувати.

// Назва тону з даних → клас фону картки
export const toneBg = {
  primary: 'bg-primary-soft',
  warm: 'bg-warm-soft',
  success: 'bg-success-soft',
  sky: 'bg-sky-soft',
}

// Назва тону з даних → клас кольору підпису фото
export const toneText = {
  primary: 'text-primary-strong',
  warm: 'text-warm',
  success: 'text-success',
  sky: 'text-sky',
}

export type Tone = keyof typeof toneBg

export function getTone(tone: string): Tone {
  return tone in toneBg ? (tone as Tone) : 'primary'
}

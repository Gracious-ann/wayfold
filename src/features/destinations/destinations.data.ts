export type DestinationData = {
  airport_code: string
  best_months: number[]
  city: string
  country: string | null
  description: string | null
  duration_minutes: number | null
  hotel: string | null
  id: string
  image_path: string | null
  photo: string | null
  price_from: number
  sort_order: number
  stops: number
  tone: string
}

export const budgets = [800, 1500, 2500] as const

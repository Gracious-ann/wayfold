export type DestinationTone = 'primary' | 'warm' | 'success' | 'sky'

export type Destination = {
  id: string
  city: string
  country?: string
  priceFrom: number
  stops: number
  duration: string
  photo: string
  tone: DestinationTone
  featured?: {
    badge: string
    hotel: string
    nights: number
    dates: string
  }
}

export const budgets = [800, 1500, 2500] as const

export const destinations: Destination[] = [
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    priceFrom: 1240,
    stops: 0,
    duration: '11h 20m',
    photo: 'Tokyo street at dusk',
    tone: 'primary',
    featured: {
      badge: 'Best value this month',
      hotel: 'Hotel Shinjuku',
      nights: 5,
      dates: 'Feb 25 – Mar 2',
    },
  },
  {
    id: 'lisbon',
    city: 'Lisbon',
    country: 'Portugal',
    priceFrom: 1090,
    stops: 1,
    duration: '15h 05m',
    photo: 'Lisbon rooftops',
    tone: 'warm',
  },
  {
    id: 'reykjavik',
    city: 'Reykjavík',
    country: 'Iceland',
    priceFrom: 1380,
    stops: 1,
    duration: '12h 40m',
    photo: 'Reykjavík harbour',
    tone: 'success',
  },
  {
    id: 'mexico-city',
    city: 'Mexico City',
    priceFrom: 780,
    stops: 0,
    duration: '4h 25m',
    photo: 'Mexico City plaza',
    tone: 'sky',
  },
]

export const surprise = {
  moreTrips: 42,
}

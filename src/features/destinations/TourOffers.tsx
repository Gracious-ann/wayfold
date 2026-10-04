import CardOffers from './CardOffers'
import { destinations } from './destinations.data'

export default function TourOffers({ value }: { value: number | null }) {
  const data = destinations.filter((info) => {
    if (value === null) {
      return true
    }
    return info.priceFrom <= value
  })

  return <CardOffers data={data} value={value} />
}

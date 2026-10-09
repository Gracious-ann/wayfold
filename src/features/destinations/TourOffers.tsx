import CardOffers from './CardOffers'
import useDestinations from '../../hooks/useDestinations'

export default function TourOffers({ value }: { value: number | null }) {
  const { data } = useDestinations()
  const destinations = data ?? []

  const filteredData = destinations.filter((info) => {
    if (value === null) {
      return true
    }
    return info.price_from <= value
  })

  return <CardOffers data={filteredData} value={value} />
}

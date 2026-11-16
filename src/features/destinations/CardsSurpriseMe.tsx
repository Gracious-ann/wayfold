import useDestinations from '../../hooks/useDestinations'
import BestMonthCards from './BestMonthCards'

const currentMonth = new Date().getMonth() + 1

export default function CardsSurpriseMe({ budget }: { budget: number | null }) {
  const { data: destinations } = useDestinations()
  const filteredDestinations = destinations?.filter(
    (d) => budget === null || d.price_from <= budget,
  )
  const bestMonthDestinations = filteredDestinations?.filter((d) =>
    d.best_months.includes(currentMonth),
  )

  return <BestMonthCards cards={bestMonthDestinations ?? []} />
}

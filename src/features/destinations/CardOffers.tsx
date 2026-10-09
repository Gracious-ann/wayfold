import CardFeatured from './CardFeatured'
import CardSmall from './CardSmall'
import type { DestinationData } from './destinations.data'
import SurpriseCard from './SurpriseCard'

// +1, бо getMonth() рахує з нуля (січень = 0), а в bestMonths січень = 1.
const currentMonth = new Date().getMonth() + 1
const SMALL_CARDS = 3

export default function CardOffers({
  data,
  value,
}: {
  data: DestinationData[]
  value: number | null
}) {
  // 1. Фільтруємо напрямки, які зараз у сезоні (bestMonths включає currentMonth).
  const inSeasonData = data.filter((info) => info.best_months.includes(currentMonth))

  // 2. Велика картка — найдешевший із сезонних.
  //    Якщо сезонних немає, [0] дає undefined, тому «?? null» — щоб явно було «нікого».
  const cheapestSeasonal = inSeasonData.toSorted((a, b) => a.price_from - b.price_from)[0] ?? null

  // 3. Малі картки беремо з УСІХ, що проходять за бюджетом (data), а не лише з сезонних:
  //    прибираємо ту, що вже стала великою, і лишаємо перші три.
  const smallCards = data
    .filter((info) => info.id !== cheapestSeasonal?.id)
    .toSorted((a, b) => b.price_from - a.price_from)
    .slice(0, SMALL_CARDS)

  // 4. Скільки напрямків лишилось «за кадром»: усі мінус показані
  const shownCount = smallCards.length + (cheapestSeasonal ? 1 : 0)
  const moreCount = data.length - shownCount

  return (
    <ul className="grid auto-rows-[200px] grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr_1fr] lg:grid-rows-[300px_300px] lg:gap-5">
      {cheapestSeasonal && <CardFeatured info={cheapestSeasonal} />}
      {smallCards.map((info) => (
        <CardSmall key={info.id} info={info} />
      ))}
      <SurpriseCard value={value} moreCount={moreCount} />
    </ul>
  )
}

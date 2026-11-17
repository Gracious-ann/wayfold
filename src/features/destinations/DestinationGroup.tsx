import type { Tables } from '../../lib/database.types'
import DestinationCard from './DestinationCard'

export default function DestinationGroup({
  title,
  cards,
}: {
  title: string
  cards: Tables<'destinations'>[]
}) {
  if (cards.length === 0) {
    return null
  }

  const cardSortedPrice = [...cards].sort((a, b) => a.price_from - b.price_from)
  return (
    <>
      <h2 className="mb-3 flex items-center gap-3.5 text-sm font-extrabold tracking-[0.5px] text-fg-muted uppercase after:h-px after:flex-1 after:bg-border-soft lg:mb-5">
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-3 pb-8 lg:grid-cols-3 lg:gap-5">
        {cardSortedPrice.map((card) => (
          <DestinationCard key={card.id} card={card} />
        ))}
      </ul>
    </>
  )
}

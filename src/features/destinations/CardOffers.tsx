import CardFeatured from './CardFeatured'
import CardSmall from './CardSmall'
import type { Destination } from './destinations.data'
import SurpriseCard from './SurpriseCard'

export default function CardOffers({ data, value }: { data: Destination[]; value: number | null }) {
  return (
    <ul className="grid auto-rows-[200px] grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr_1fr] lg:grid-rows-[300px_300px] lg:gap-5">
      {data.map((info) =>
        //  є featured → велика картка, немає → мала.
        info.featured ? (
          <CardFeatured key={info.id} info={info} />
        ) : (
          <CardSmall key={info.id} info={info} />
        ),
      )}
      <SurpriseCard value={value} data={data} />
    </ul>
  )
}

import { Link } from 'react-router-dom'
import type { Destination } from './destinations.data'
import { toneBg, toneText } from './tones'

// ВЕЛИКА картка: місто, в якого в даних є featured (зараз це Tokyo).
export default function CardFeatured({ info }: { info: Destination }) {
  const featured = info.featured
  if (!featured) return null

  return (
    <li className="row-span-2">
      <Link
        to={`/flights?to=${info.id}`}
        className={`flex h-full flex-col justify-between rounded-3xl p-7 ${toneBg[info.tone]}`}
      >
        <div className="flex items-center justify-between">
          <p className="rounded-full bg-surface px-3 py-1.5 text-[13px] font-bold">
            {featured.badge}
          </p>
          <p className={`text-[13px] font-bold ${toneText[info.tone]}`}>[photo: {info.photo}]</p>
        </div>

        {/* Додамо фото як додамо їх у базу даних. Зараз у нас немає фото, тому просто виводимо текст [photo: {info.photo}]. */}

        <div className="flex flex-col gap-3.5 rounded-[18px] bg-surface p-[22px]">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-[34px] font-medium">
              {info.city}
              {info.country && `, ${info.country}`}
            </h3>
            <p className="text-[15px] text-fg-muted">
              from{' '}
              <strong className="text-[26px] text-fg">
                ${info.priceFrom.toLocaleString('en-US')}
              </strong>
            </p>
          </div>

          <div className="flex gap-5 text-sm font-semibold text-fg-muted">
            <p>
              {info.duration}
              {info.stops === 0 && ' nonstop'}
              {info.stops === 1 && ' · 1 stop'}
              {info.stops > 1 && ` · ${info.stops} stops`}
            </p>
            <p>
              {featured.hotel} · {featured.nights} nights
            </p>
            <p>{featured.dates}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

import { Link } from 'react-router-dom'
import type { Destination } from './destinations.data'
import { toneBg, toneText } from './tones'

export default function CardSmall({ info }: { info: Destination }) {
  return (
    <li>
      <Link
        to={`/flights?to=${info.id}`}
        className={`flex h-full flex-col justify-between rounded-3xl p-6 ${toneBg[info.tone]}`}
      >
        <p className={`text-[13px] font-bold ${toneText[info.tone]}`}>[photo: {info.photo}]</p>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-[28px] font-medium">
            {info.city}
            {info.country && `, ${info.country}`}
          </h3>

          <p className="text-sm font-semibold text-fg-muted">
            {info.stops === 0 && 'Nonstop'}
            {info.stops === 1 && '1 stop'}
            {info.stops > 1 && `${info.stops} stops`}
            {' · '}
            {info.duration}
            {' · from '}
            <strong className="text-fg">${info.priceFrom.toLocaleString('en-US')}</strong>
          </p>
        </div>
      </Link>
    </li>
  )
}

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { DestinationData } from './destinations.data'
import { getTone, toneBg } from './tones'
import { getPhotoUrl } from '../../lib/api'

export default function CardSmall({ info }: { info: DestinationData }) {
  const { t } = useTranslation()
  return (
    <li>
      <Link
        to={`/flights?to=${info.id}`}
        className={`relative flex h-full flex-col justify-end overflow-hidden rounded-3xl p-3 lg:p-4 ${toneBg[getTone(info.tone)]}`}
      >
        <img
          src={getPhotoUrl(info.image_path)}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />

        <div className="relative flex flex-col gap-1 rounded-[18px] bg-surface p-3.5">
          <h3 className="font-display text-[22px] font-medium lg:text-2xl">
            {info.city}
            {info.country && `, ${info.country}`}
          </h3>

          <p className="text-sm font-semibold text-fg-muted">
            {info.stops === 0 && t('destinations.nonstop')}
            {info.stops === 1 && t('destinations.stops', { count: 1 })}
            {info.stops > 1 && t('destinations.stops', { count: info.stops })}
            {' · '}
            {info.duration_minutes !== null &&
              t('common.duration', {
                hours: Math.floor(info.duration_minutes / 60),
                minutes: info.duration_minutes % 60,
              })}
            {info.duration_minutes !== null && ' · '}
            {t('common.from')}{' '}
            <strong className="text-fg">${info.price_from.toLocaleString('en-US')}</strong>
          </p>
        </div>
      </Link>
    </li>
  )
}

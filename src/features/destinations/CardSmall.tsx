import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { Destination } from './destinations.data'
import { toneBg, toneText } from './tones'

export default function CardSmall({ info }: { info: Destination }) {
  const { t } = useTranslation()
  return (
    <li>
      <Link
        to={`/flights?to=${info.id}`}
        className={`flex h-full flex-col justify-between rounded-3xl p-4 lg:p-6 ${toneBg[info.tone]}`}
      >
        <p className={`text-[13px] font-bold ${toneText[info.tone]}`}>
          [{t('destinations.photo')}: {info.photo}]
        </p>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-[22px] font-medium lg:text-[28px]">
            {info.city}
            {info.country && `, ${info.country}`}
          </h3>

          <p className="text-sm font-semibold text-fg-muted">
            {info.stops === 0 && t('destinations.nonstop')}
            {info.stops === 1 && t('destinations.stops', { count: 1 })}
            {info.stops > 1 && t('destinations.stops', { count: info.stops })}
            {' · '}
            {info.duration}
            {' · '}
            {t('common.from')}{' '}
            <strong className="text-fg">${info.priceFrom.toLocaleString('en-US')}</strong>
          </p>
        </div>
      </Link>
    </li>
  )
}

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { Destination } from './destinations.data'
import { toneBg, toneText } from './tones'

// ВЕЛИКА картка: напрямок, який обрав CardOffers (найдешевший із сезонних).
export default function CardFeatured({ info }: { info: Destination }) {
  const { t } = useTranslation()

  return (
    <li className="lg:row-span-2">
      <Link
        to={`/flights?to=${info.id}`}
        className={`flex h-full flex-col justify-between rounded-3xl p-4 lg:p-7 ${toneBg[info.tone]}`}
      >
        <div className="flex items-start justify-between gap-3 lg:items-center">
          <p className="shrink-0 rounded-full bg-surface px-3 py-1.5 text-[13px] font-bold">
            {t('destinations.bestTime')}
          </p>
          <p className={`pt-1.5 text-right text-[13px] font-bold lg:pt-0 ${toneText[info.tone]}`}>
            [{t('destinations.photo')}: {info.photo}]
          </p>
        </div>

        {/* Додамо фото як додамо їх у базу даних. Зараз у нас немає фото, тому просто виводимо текст [photo: {info.photo}]. */}

        <div className="flex flex-col gap-3.5 rounded-[18px] bg-surface p-3.5 lg:p-[22px]">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-[22px] font-medium lg:text-[34px]">
              {info.city}
              {info.country && `, ${info.country}`}
            </h3>
            <p className="text-[15px] text-fg-muted">
              {t('common.from')}{' '}
              <strong className="text-lg text-fg lg:text-[26px]">
                ${info.priceFrom.toLocaleString('en-US')}
              </strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-fg-muted lg:gap-5">
            <p>
              {info.duration}
              {/* Щоб тривалість перекладалась («11 год 20 хв»), у даних мають лежати окремо hours: 11 і minutes: 20. Це зробимо, коли дані поїдуть у базу. */}
              {' · '}
              {info.stops === 0
                ? t('destinations.nonstop')
                : t('destinations.stops', { count: info.stops })}
            </p>
            <p>
              {info.hotel} · {t('common.nights', { count: 5 })}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

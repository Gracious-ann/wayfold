import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getPhotoUrl } from '../../lib/api'
import type { DestinationData } from './destinations.data'
import { toneBg, getTone } from './tones'

export default function CardFeatured({ info }: { info: DestinationData }) {
  const { t } = useTranslation()

  return (
    <li className="lg:row-span-2">
      <Link
        to={`/flights?to=${info.id}`}
        className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-4 lg:p-7 ${toneBg[getTone(info.tone)]}`}
      >
        {/* Фото стоїть ПЕРШИМ у картці, тому все, що нижче в розмітці, малюється поверх нього.
            absolute — вийняте з потоку: не займає місця у flex і не штовхає бейдж та білий блок.
            inset-0 — прилипає до всіх чотирьох країв картки.
            size-full + object-cover — заповнює картку, зайве обрізається, пропорції не ламаються.
            alt="" — фото декоративне, назва міста вже є в h3. */}
        <img
          src={getPhotoUrl(info.image_path)}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />

        {/* relative — щоб бейдж лежав поверх фото.
            Без нього фото (absolute) накрило б звичайні елементи. */}
        <div className="relative flex items-start">
          <p className="rounded-full bg-surface px-3 py-1.5 text-[13px] font-bold">
            {t('destinations.bestTime')}
          </p>
        </div>

        {/* relative — з тієї ж причини, що й у бейджа. */}
        <div className="relative flex flex-col gap-3.5 rounded-[18px] bg-surface p-3.5 lg:p-[22px]">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-[22px] font-medium lg:text-[34px]">
              {info.city}
              {info.country && `, ${info.country}`}
            </h3>
            <p className="text-[15px] text-fg-muted">
              {t('common.from')}{' '}
              <strong className="text-lg text-fg lg:text-[26px]">
                ${info.price_from.toLocaleString('en-US')}
              </strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-fg-muted lg:gap-5">
            <p>
              {info.duration_minutes !== null &&
                t('common.duration', {
                  hours: Math.floor(info.duration_minutes / 60),
                  minutes: info.duration_minutes % 60,
                })}
              {info.duration_minutes !== null && ' · '}
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

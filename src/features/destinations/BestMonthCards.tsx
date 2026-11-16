import { Link } from 'react-router-dom'
import { getPhotoUrl } from '../../lib/api'
import { getTone, toneBg } from './tones'
import { useTranslation } from 'react-i18next'

export default function BestMonthCards({ cards }: { cards: any[] }) {
  const { t } = useTranslation()
  return (
    <>
      <h2 className="border-t border-border-soft">{t('surprise.inSeason')}</h2>
      <ul className="grid grid-cols-1 gap-3 pb-8 lg:grid-cols-3 lg:gap-5">
        {cards?.map((card) => (
          <li
            key={card.id}
            className="flex flex-col overflow-hidden rounded-[20px] bg-surface shadow-card transition hover:-translate-y-1"
          >
            <Link
              to={`/flights?to=${card.id}`}
              className={`relative flex h-full flex-col justify-end overflow-hidden rounded-3xl p-3 lg:p-4 ${toneBg[getTone(card.tone)]}`}
            >
              <img src={getPhotoUrl(card.image_path)} alt="" className="" />
              <div className="flex flex-1 flex-col gap-2.5 px-[18px] pt-4 pb-[18px] lg:px-[22px] lg:pt-5 lg:pb-[22px]">
                <h3 className="font-display text-[22px] leading-tight font-medium lg:text-2xl">
                  {card.city}
                  {card.country && `, ${card.country}`}
                </h3>
                <p>
                  {t('common.from')}{' '}
                  <strong className="text-fg">${card.price_from.toLocaleString('en-US')}</strong>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 px-[18px] pb-[18px] lg:px-[22px] lg:pb-[22px]">
                <p>
                  {card.duration_minutes !== null &&
                    t('common.duration', {
                      hours: Math.floor(card.duration_minutes / 60),
                      minutes: card.duration_minutes % 60,
                    })}
                  {card.duration_minutes !== null && ' · '}
                </p>
                <p>
                  {card.stops === 0
                    ? t('destinations.nonstop')
                    : t('destinations.stops', { count: card.stops })}{' '}
                  ·
                </p>
                <p>{card.hotel} · </p>
                <p>{t('common.nights', { count: card.nights })}</p>
              </div>
              <p>{card.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// (alias) function useDestinations(): {
//  data: {
//  airport_code: string;
//  best_months: number[];
//  city: string;
//  country: string | null;
//  description: string | null;
//  duration_minutes: number | null;
//  hotel: string | null;
//  id: string;
//  image_path: string | null;
//  photo: string | null;
//  price_from: number;
//  sort_order: number;
//  stops: number;
//  tone: string;
//  }[] | undefined;
//  isPending: boolean;
//  error: Error | null;
// }

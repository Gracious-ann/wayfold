import { Link } from 'react-router-dom'
import { getPhotoUrl } from '../../lib/api'
import { getTone, toneBg } from './tones'
import { useTranslation } from 'react-i18next'
import type { Tables } from '../../lib/database.types'
import useLanguage from '../../hooks/useLanguage'

const currentMonth = new Date().getMonth() + 1

export default function DestinationCard({ card }: { card: Tables<'destinations'> }) {
  const { t } = useTranslation()
  // useLanguage повертає об’єкт { language, changeLanguage }, де language — поточна мова ('en' або 'uk'), а changeLanguage — функція для її зміни. Це глобальний стан, який зберігається в об'єкті i18next і доступний у будь-якому компоненті, що викликає useLanguage().
  const { language } = useLanguage()

  // Intl.DateTimeFormat — це вбудований об’єкт JavaScript, який дозволяє форматувати дати та час відповідно до локалі. Ми створюємо екземпляр Intl.DateTimeFormat з поточною мовою (language) і опцією { month: 'narrow' }, щоб отримати скорочені назви місяців (одна літера). Потім ми генеруємо масив monthLetters, що містить ці скорочені назви місяців для всіх 12 місяців року.
  const letterFormatter = new Intl.DateTimeFormat(language, { month: 'narrow' })
  const longFormatter = new Intl.DateTimeFormat(language, { month: 'long' })
  const monthLetters = Array.from({ length: 12 }, (_, i) =>
    letterFormatter.format(new Date(2026, i, 1)),
  )
  const monthNames = Array.from({ length: 12 }, (_, i) =>
    longFormatter.format(new Date(2026, i, 1)),
  )
  // uk: ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г']
  // en: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

  // Intl.ListFormat склеює масив слів у список за правилами мови:
  // ['березень', 'квітень', 'жовтень'] → 'березень, квітень і жовтень' (uk) / 'March, April, and October' (en).
  // type: 'conjunction' — список через «і» / «and».
  const listFormatter = new Intl.ListFormat(language, { type: 'conjunction' })

  const currentMonthName = monthNames[currentMonth - 1]

  // Якщо мова — українська, беремо українську назву міста/країни (city_uk/country_uk), якщо вона є. Якщо її немає, беремо англійську назву (city/country). Якщо мова — англійська, завжди беремо англійську назву. Це дозволяє відображати назви міст і країн відповідно до обраної мови користувача.
  const city = language === 'uk' ? (card.city_uk ?? card.city) : card.city
  const country = language === 'uk' ? (card.country_uk ?? card.country) : card.country

  // Найкращі місяці саме ЦІЄЇ картки, повними назвами.
  // best_months зберігає номери з 1 ([3, 4, 10]), а monthNames — масив з 0, тому monthNames[m - 1]:
  // 3 → monthNames[2] → 'березень'. Потім listFormatter склеює їх у список.
  const bestMonthNames = listFormatter.format(card.best_months.map((m) => monthNames[m - 1]))

  return (
    <li className="flex flex-col overflow-hidden rounded-[20px] bg-surface shadow-card transition hover:-translate-y-1">
      <div className={`relative aspect-16/10 ${toneBg[getTone(card.tone)]}`}>
        <img
          src={getPhotoUrl(card.image_path)}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        {card.best_months.includes(currentMonth) && (
          <p className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-[13px] font-bold before:size-2 before:rounded-full before:bg-success">
            {t('surprise.bestNow')}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 px-[18px] pt-4 pb-[18px] lg:px-[22px] lg:pt-5 lg:pb-[22px]">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[22px] leading-tight font-extrabold lg:text-2xl">
            {city}
            {country && `, ${country}`}
          </h3>
          <p className="text-[15px] whitespace-nowrap text-fg-muted">
            {t('common.from')}{' '}
            <strong className="text-2xl font-extrabold text-fg">
              ${card.price_from.toLocaleString('en-US')}
            </strong>
          </p>
        </div>

        <p className="text-[13px] font-semibold text-fg-muted">
          {card.duration_minutes !== null &&
            t('common.duration', {
              hours: Math.floor(card.duration_minutes / 60),
              minutes: card.duration_minutes % 60,
            })}
          {card.duration_minutes !== null && ' · '}
          {card.stops === 0
            ? t('destinations.nonstop')
            : t('destinations.stops', { count: card.stops })}
          {' · '}
          {card.hotel}
          {' · '}
          {t('common.nights', { count: card.nights })}
        </p>

        <p className="text-[15px] leading-[1.55] text-fg-muted">
          {language === 'uk' ? (card.description_uk ?? card.description) : card.description}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-1">
          <p className="text-xs font-extrabold tracking-[0.8px] text-fg-muted uppercase">
            {t('surprise.whenToGo')}
          </p>
          <ul aria-hidden="true" className="grid grid-cols-12 gap-[3px]">
            {monthLetters.map((month, index) => (
              <li
                key={index}
                className={`flex h-[34px] flex-col items-center justify-center gap-0.5 rounded-lg border-[1.5px] border-transparent text-[13px] font-semibold text-fg-subtle ${
                  card.best_months.includes(index + 1)
                    ? 'bg-primary-soft font-extrabold text-primary-strong after:size-1 after:rounded-full after:bg-current'
                    : ''
                } ${index + 1 === currentMonth ? 'border-primary-strong' : ''}`}
              >
                {month}
              </li>
            ))}
          </ul>
          {/* Смужку вище скрінрідер пропускає (aria-hidden), бо «С Л Б К…» для нього — набір літер.
              Замість неї він прочитає це речення. sr-only ховає текст з екрана,
              але лишає його для скрінрідера (на відміну від hidden, що ховає від усіх). */}
          <p className="sr-only">
            {t('surprise.bestMonths', {
              months: bestMonthNames,
              current: currentMonthName,
            })}
          </p>
        </div>

        <Link
          to={`/flights?to=${card.id}`}
          className="self-start pt-1.5 text-[15px] font-extrabold text-primary-strong hover:underline"
        >
          {t('surprise.seeFlights')}
        </Link>
      </div>
    </li>
  )
}

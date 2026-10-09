import { useTranslation } from 'react-i18next'
import { LuGlobe } from 'react-icons/lu'
import { Link } from 'react-router-dom'

export default function SurpriseCard({
  value,
  moreCount,
}: {
  value: number | null
  moreCount: number
}) {
  const { t } = useTranslation()

  // moreCount — скільки напрямків за бюджетом НЕ показано в сітці (рахує CardOffers)
  function getSurpriseText() {
    if (value === null) {
      return t('destinations.moreTripsAny', { count: moreCount })
    } else {
      return t('destinations.moreTrips', {
        count: moreCount,
        price: `$${value.toLocaleString('en-US')}`,
      })
    }
  }

  return (
    <li>
      <Link
        to="/flights"
        className="flex h-full flex-col justify-between rounded-3xl bg-fg p-4 text-bg lg:p-6"
      >
        <LuGlobe size={32} strokeWidth={1.8} />
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-[22px] font-medium lg:text-[28px]">
            {t('destinations.surpriseMe')}
          </h3>
          <p className="text-sm font-semibold text-border">{getSurpriseText()}</p>
        </div>
      </Link>
    </li>
  )
}

import { useState } from 'react'
import SearchFields from './SearchFields'
import { useTranslation } from 'react-i18next'

export default function TripSearch() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>('flightStay')

  const typeTrip = [
    { id: 'flightStay', label: t('search.modeFlightStay') },
    { id: 'flightOnly', label: t('search.modeFlightsOnly') },
    { id: 'stayOnly', label: t('search.modeStaysOnly') },
  ]

  return (
    <form className="mt-5 flex flex-col gap-1.5 rounded-[20px] bg-surface p-2 shadow-card lg:mt-10 lg:gap-3 lg:p-3">
      <div className="hidden lg:flex">
        <div className="flex grow gap-1 p-1">
          {typeTrip.map((type) => (
            <button
              key={type.id}
              className="flex h-10 items-center gap-1 rounded-[10px] px-[18px] text-[15px] font-semibold text-fg-muted aria-pressed:bg-primary-soft aria-pressed:font-bold aria-pressed:text-primary-strong"
              type="button"
              aria-pressed={active === type.id}
              onClick={() => setActive(type.id)}
            >
              {type.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2.5 pr-2">
            <input className="size-[18px] accent-primary" type="checkbox" defaultChecked={true} />
            <span className="text-sm font-semibold text-fg-muted">
              {t('search.flexibleDates', { count: 3 })}
            </span>
          </label>
        </div>
      </div>

      <SearchFields />
    </form>
  )
}

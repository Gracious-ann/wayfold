import { useState } from 'react'
import SearchFields from './SearchFields'

const typeTrip = [
  { id: 'flightStay', label: 'Flight + Stay' },
  { id: 'flightOnly', label: 'Flights only' },
  { id: 'stayOnly', label: 'Stays only' },
]

export default function TripSearch() {
  const [active, setActive] = useState<string>('flightStay')

  return (
    <form className="mt-10 flex flex-col gap-3 rounded-[20px] bg-surface p-3 shadow-card">
      <div className="flex">
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
            <span className="text-sm font-semibold text-fg-muted">Flexible dates ±3 days</span>
          </label>
        </div>
      </div>

      <SearchFields />
    </form>
  )
}

import { useState } from 'react'
import Budget from './Budget'
import TourOffers from './TourOffers'

export default function Destination() {
  const def = { night: '5', city: 'San Francisco' }
  const [budget, setBudget] = useState<number | null>(1500)

  return (
    <section className="flex flex-col gap-7 pt-24">
      <div className="flex items-end gap-6">
        <div className="flex grow flex-col gap-2.5">
          <h2 className="font-display text-[44px] font-medium tracking-[-1px]">
            Where can{' '}
            <span className="text-primary italic">
              {budget === null ? 'any budget' : `$${budget.toLocaleString('en-US')}`}
            </span>{' '}
            take you?
          </h2>
          <p className="text-[17px] text-fg-muted">
            Round-trip flight and {def.night} nights in a hotel, from {def.city}, per person.
          </p>
        </div>
        <Budget value={budget} onChange={setBudget} />
      </div>
      <TourOffers value={budget} />
    </section>
  )
}

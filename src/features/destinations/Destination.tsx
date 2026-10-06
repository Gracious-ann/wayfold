import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Budget from './Budget'
import TourOffers from './TourOffers'

export default function Destination() {
  const { t } = useTranslation()
  const def = { night: 5, city: 'San Francisco' }
  const [budget, setBudget] = useState<number | null>(1500)

  return (
    <section className="flex flex-col gap-7 pt-24">
      <div className="flex items-end gap-6">
        <div className="flex grow flex-col gap-2.5">
          <h2 className="font-display text-[44px] font-medium tracking-[-1px]">
            {t('budget.titleBefore')}{' '}
            <span className="text-primary italic">
              {budget === null
                ? t('budget.anyBudgetInTitle')
                : `$${budget.toLocaleString('en-US')}`}
            </span>{' '}
            {t('budget.titleAfter')}
          </h2>
          <p className="text-[17px] text-fg-muted">
            {t('budget.subtitle', { count: def.night, city: def.city })}
          </p>
        </div>
        <Budget value={budget} onChange={setBudget} />
      </div>
      <TourOffers value={budget} />
    </section>
  )
}

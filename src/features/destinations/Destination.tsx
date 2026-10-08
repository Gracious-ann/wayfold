import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Budget from './Budget'
import TourOffers from './TourOffers'

export default function Destination() {
  const { t } = useTranslation()
  const def = { night: 5, city: 'San Francisco' }
  const [budget, setBudget] = useState<number | null>(1500)

  return (
    <section className="flex flex-col gap-7 pt-12 lg:pt-24">
      <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:gap-6">
        <div className="flex grow flex-col gap-2.5">
          <h2 className="font-display text-[28px] font-medium tracking-[-1px] lg:text-[44px]">
            {t('budget.titleBefore')}{' '}
            <span className="text-primary italic">
              {budget === null
                ? t('budget.anyBudgetInTitle')
                : `$${budget.toLocaleString('en-US')}`}
            </span>
            {t('budget.titleAfter')}
          </h2>
          <p className="text-[15px] text-fg-muted lg:text-[17px]">
            {t('budget.subtitle', { count: def.night, city: def.city })}
          </p>
        </div>
        <Budget value={budget} onChange={setBudget} />
      </div>
      <TourOffers value={budget} />
    </section>
  )
}

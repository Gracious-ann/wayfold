import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import Budget from './Budget'
import { budgets } from './destinations.data'
import Button from '../../components/ui/Button'
import { LuGlobe } from 'react-icons/lu'
import useDestinations from '../../hooks/useDestinations'
import CardsSurpriseMe from './CardsSurpriseMe'

export default function Surprise() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: destinations } = useDestinations()

  const budgetParam = searchParams.get('budget')

  const budgetNumber = Number(budgetParam)
  const budget = budgets.find((b) => b === budgetNumber) ?? null

  const numberOfTrips =
    destinations?.filter((d) => budget === null || d.price_from <= budget).length ?? 0

  function changeBudget(newBudget: number | null) {
    setSearchParams((params) => {
      if (newBudget === null) {
        params.delete('budget')
      } else {
        params.set('budget', String(newBudget))
      }
      return params
    })
  }

  return (
    <>
      <section className="mt-4 flex flex-col gap-5 border-t border-border-soft pt-6 pb-5 lg:mt-0 lg:flex-row lg:items-end lg:gap-10 lg:pt-16 lg:pb-8">
        <div className="flex flex-1 flex-col gap-3">
          <h1 className="font-display text-[34px] font-medium tracking-[-0.8px] lg:text-[56px] lg:leading-[1.05] lg:tracking-[-1.5px]">
            {budget === null ? (
              t('surprise.titleAny')
            ) : (
              <>
                {t('surprise.titleBefore')}{' '}
                <em className="font-display font-medium text-primary-strong italic">
                  ${budget.toLocaleString('en-US')}
                </em>
              </>
            )}
          </h1>
          <p className="text-[15px] text-fg-muted lg:text-[17px]">
            {t('surprise.description', { count: numberOfTrips })}
          </p>
        </div>

        <div className="flex flex-col gap-3.5 lg:items-end">
          <Budget value={budget} onChange={changeBudget} />
          <Button variant="dark">
            <LuGlobe size={18} />
            {t('destinations.surpriseMe')}
          </Button>
        </div>
      </section>

      <CardsSurpriseMe budget={budget} />
    </>
  )
}

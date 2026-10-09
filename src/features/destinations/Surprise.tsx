import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import Budget from './Budget'
import { budgets } from './destinations.data'

export default function Surprise() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()

  const budgetParam = searchParams.get('budget')

  const budgetNumber = Number(budgetParam)
  const budget = budgets.find((b) => b === budgetNumber) ?? null

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
    <div>
      <h1>
        {budget === null ? (
          t('surprise.titleAny')
        ) : (
          <>
            {t('surprise.titleBefore')} <em>${budget.toLocaleString('en-US')}</em>
          </>
        )}
      </h1>

      <Budget value={budget} onChange={changeBudget} />
    </div>
  )
}

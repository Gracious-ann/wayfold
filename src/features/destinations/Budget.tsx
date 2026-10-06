import { useTranslation } from 'react-i18next'
import { budgets } from './destinations.data'

type BudgetProps = {
  value: number | null
  onChange: (budget: number | null) => void
}

export default function Budget({ value, onChange }: BudgetProps) {
  const { t } = useTranslation()
  const options = [...budgets, null]

  return (
    <div className="flex gap-2">
      {options.map((budget) => (
        <button
          key={budget ?? 'any'}
          type="button"
          aria-pressed={value === budget}
          onClick={() => onChange(budget)}
          className="h-11 rounded-full border-[1.5px] border-border bg-surface px-[18px] text-[15px] font-bold text-fg aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-bg"
        >
          {budget === null ? t('budget.anyBudget') : `$${budget.toLocaleString('en-US')}`}
        </button>
      ))}
    </div>
  )
}

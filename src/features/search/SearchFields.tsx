import { LuArrowRight } from 'react-icons/lu'
import Button from '../../components/ui/Button'
import { useTranslation } from 'react-i18next'

const fieldBox =
  'flex flex-col gap-1 bg-bg rounded-[14px] py-3.5 px-[18px] text-left focus-within:ring-2 focus-within:ring-primary focus-visible:ring-2 focus-visible:ring-primary outline-none'
const fieldLabel = 'text-xs font-bold tracking-[1px] text-fg-subtle uppercase'
const fieldValue = 'text-lg font-bold'
const fieldInput = 'w-full min-w-0 bg-transparent text-lg font-bold outline-none'

export default function SearchFields() {
  const { t } = useTranslation()
  return (
    <div className="grid grid-cols-[1.1fr_1.1fr_1.3fr_1fr_auto] gap-2">
      <label className={fieldBox}>
        <span className={fieldLabel}>{t('search.from')}</span>
        <input className={fieldInput} type="text" defaultValue="San Francisco SFO" />
      </label>
      <label className={fieldBox}>
        <span className={fieldLabel}>{t('search.to')}</span>
        <input className={fieldInput} type="text" defaultValue="Tokyo NRT" />
      </label>

      <button type="button" className={fieldBox}>
        <span className={fieldLabel}>{t('search.dates')}</span>
        <span className={fieldValue}>
          Feb 25 – Mar 3{' '}
          <span className="font-semibold text-fg-subtle">· {t('common.nights', { count: 5 })}</span>
          {/* Будемо де count: 5 заміняти на змінну, яка буде передаватися в компонент. */}
        </span>
      </button>

      <button type="button" className={fieldBox}>
        <span className={fieldLabel}>{t('search.travelers')}</span>
        <span className={fieldValue}>
          {t('common.adults', { count: 2 })} · {t('common.rooms', { count: 1 })}
        </span>
      </button>

      <Button className="h-auto!" type="submit" variant="primary">
        {t('search.submit')}
        <LuArrowRight size={20} />
      </Button>
    </div>
  )
}

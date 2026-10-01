import { LuArrowRight } from 'react-icons/lu'
import Button from '../../components/ui/Button'

const fieldBox =
  'flex flex-col gap-1 bg-bg rounded-[14px] py-3.5 px-[18px] text-left focus-within:ring-2 focus-within:ring-primary focus-visible:ring-2 focus-visible:ring-primary outline-none'
const fieldLabel = 'text-xs font-bold tracking-[1px] text-fg-subtle uppercase'
const fieldValue = 'text-lg font-bold'
const fieldInput = 'w-full min-w-0 bg-transparent text-lg font-bold outline-none'

export default function SearchFields() {
  return (
    <div className="grid grid-cols-[1.1fr_1.1fr_1.3fr_1fr_auto] gap-2">
      <label className={fieldBox}>
        <span className={fieldLabel}>From</span>
        <input className={fieldInput} type="text" defaultValue="San Francisco SFO" />
      </label>
      <label className={fieldBox}>
        <span className={fieldLabel}>To</span>
        <input className={fieldInput} type="text" defaultValue="Tokyo NRT" />
      </label>

      <button type="button" className={fieldBox}>
        <span className={fieldLabel}>Dates</span>
        <span className={fieldValue}>
          Feb 25 – Mar 3 <span className="font-semibold text-fg-subtle">· 5 nights</span>
        </span>
      </button>

      <button type="button" className={fieldBox}>
        <span className={fieldLabel}>Travelers</span>
        <span className={fieldValue}>2 adults · 1 room</span>
      </button>

      <Button className="h-auto!" type="submit" variant="primary">
        Build my trip
        <LuArrowRight size={20} />
      </Button>
    </div>
  )
}

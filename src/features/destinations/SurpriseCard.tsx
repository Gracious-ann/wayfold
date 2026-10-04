import { LuGlobe } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import type { Destination } from './destinations.data'

export default function SurpriseCard({
  value,
  data,
}: {
  value: number | null
  data: Destination[]
}) {
  // TODO (Етап 2): data.length — це кількість ПОКАЗАНИХ карток, а «more trips» має означати
  // «ще стільки, крім показаних». Коли дані прийдуть із бази, замінити на
  // (усього підходящих напрямків) − (показаних у сітці).
  function getSurpriseText() {
    if (data.length === 1) {
      return `${data.length} more trip under $${value?.toLocaleString('en-US')} →`
    } else if (value === null) {
      return `${data.length} more trips →`
    } else {
      return `${data.length} more trips under $${value?.toLocaleString('en-US')} →`
    }
  }

  return (
    <li>
      <Link
        to="/flights"
        className="flex h-full flex-col justify-between rounded-3xl bg-fg p-6 text-bg"
      >
        <LuGlobe size={32} strokeWidth={1.8} />
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-[28px] font-medium">Surprise me</h3>
          <p className="text-sm font-semibold text-border">{getSurpriseText()}</p>
        </div>
      </Link>
    </li>
  )
}

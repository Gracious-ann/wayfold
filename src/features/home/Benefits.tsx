import { useTranslation } from 'react-i18next'
import { LuBed, LuCalendar, LuShieldCheck } from 'react-icons/lu'

type Benefit = {
  icon: React.ReactNode
  title: string
  description: string
  type: 'primary' | 'warm' | 'success'
}

const benefitStyles = {
  primary: 'bg-primary-soft text-primary',
  warm: 'bg-warm-soft text-warm',
  success: 'bg-success-soft text-success',
}

export default function Benefits() {
  const { t } = useTranslation()

  const benefits: Benefit[] = [
    {
      icon: <LuCalendar size={24} />,
      title: t('benefits.calendarTitle'),
      description: t('benefits.calendarText'),
      type: 'primary',
    },
    {
      icon: <LuBed size={24} />,
      title: t('benefits.staysTitle'),
      description: t('benefits.staysText'),
      type: 'warm',
    },
    {
      icon: <LuShieldCheck size={24} />,
      title: t('benefits.bookingTitle'),
      description: t('benefits.bookingText'),
      type: 'success',
    },
  ]

  return (
    <section className="grid grid-cols-3 gap-5 pt-12 pb-12">
      {benefits.map((benefit) => (
        <div className="flex flex-col gap-3 rounded-[20px] bg-surface p-7" key={benefit.title}>
          <div
            className={`flex size-12 items-center justify-center rounded-[14px] ${benefitStyles[benefit.type]}`}
          >
            {benefit.icon}
          </div>
          <h3 className="text-xl font-extrabold">{benefit.title}</h3>
          <p className="leading-normal text-fg-muted">{benefit.description}</p>
        </div>
      ))}
    </section>
  )
}

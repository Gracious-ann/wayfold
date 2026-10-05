import { LuBed, LuCalendar, LuShieldCheck } from 'react-icons/lu'

type Benefit = {
  icon: React.ReactNode
  title: string
  description: string
  type: 'primary' | 'warm' | 'success'
}

const benefits: Benefit[] = [
  {
    icon: <LuCalendar size={24} />,
    title: 'A price calendar for the whole trip',
    description:
      'Shift your dates and see flight and hotel totals change together, not one at a time.',
    type: 'primary',
  },
  {
    icon: <LuBed size={24} />,
    title: 'Stays matched to your flight',
    description:
      'Landing at 6 am? We surface hotels with early check-in and show the ride time from the airport.',
    type: 'warm',
  },
  {
    icon: <LuShieldCheck size={24} />,
    title: 'One booking, one total',
    description:
      'Seats, bags and nights add up in a single cart, with free cancellation shown before you pay.',
    type: 'success',
  },
]

const benefitStyles = {
  primary: 'bg-primary-soft text-primary',
  warm: 'bg-warm-soft text-warm',
  success: 'bg-success-soft text-success',
}

export default function Benefits() {
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

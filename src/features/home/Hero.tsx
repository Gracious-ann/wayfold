import { LuPlane } from 'react-icons/lu'

function Hero() {
  return (
    <section className="pt-14">
      <div className="flex items-end gap-16">
        <div className="flex grow flex-col gap-5">
          <div className="flex items-center gap-2 text-sm font-bold tracking-[1.5px] text-primary uppercase">
            <LuPlane size={18} />
            Flights and stays, planned together
          </div>
          <h1 className="font-display text-[84px] leading-[0.98] font-medium tracking-[-2px]">
            Plan the whole trip,
            <br />
            <span className="text-primary italic">not just the ticket.</span>
          </h1>
        </div>
        <p className="mb-3 w-[380px] shrink-0 text-lg leading-[1.55] text-fg-muted">
          Pick a flight, a place to stay and your seat in one flow. Wayfold keeps the whole trip on
          a single timeline with one total price.
        </p>
      </div>
    </section>
  )
}

export default Hero

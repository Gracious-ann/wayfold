function Hero() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 px-4 py-16 sm:px-8">
      <span className="font-display text-3xl font-semibold tracking-tight text-primary italic">
        wayfold
      </span>

      <h1 className="font-display text-5xl leading-none font-medium tracking-tight sm:text-7xl">
        Plan the whole trip,
        <br />
        <span className="text-primary italic">not just the ticket.</span>
      </h1>

      <p className="max-w-md text-lg text-fg-muted">
        Hello Wayfold! Каркас на Vite + React + TypeScript + Tailwind готовий.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="h-12 rounded-[14px] bg-primary px-7 font-extrabold text-primary-fg"
        >
          Build my trip
        </button>
        {/* <button
          type="button"
          onClick={toggleTheme}
          className="h-12 rounded-full border-[1.5px] border-border bg-surface px-5 font-bold"
        >
          Світла / темна тема
        </button> */}
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {[
          ['bg-primary-soft text-primary-strong', 'Tokyo, Japan'],
          ['bg-warm-soft text-warm', 'Lisbon, Portugal'],
          ['bg-success-soft text-success', 'Reykjavík, Iceland'],
        ].map(([tone, city]) => (
          <div key={city} className={`rounded-3xl p-6 ${tone}`}>
            <div className="rounded-2xl bg-surface p-5 text-fg shadow-card">
              <span className="font-display text-2xl">{city}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Hero

import { useTranslation } from 'react-i18next'
import { LuPlane } from 'react-icons/lu'

function Hero() {
  const { t } = useTranslation()
  return (
    <section className="pt-14">
      <div className="flex items-end gap-16">
        <div className="flex grow flex-col gap-5">
          <div className="flex items-center gap-2 text-sm font-bold tracking-[1.5px] text-primary uppercase">
            <LuPlane size={18} />
            {t('hero.eyebrow')}
          </div>
          <h1 className="font-display text-[84px] leading-[0.98] font-medium tracking-[-2px]">
            {t('hero.titleStart')}
            <br />
            <span className="text-primary italic">{t('hero.titleAccent')}</span>
          </h1>
        </div>
        <p className="mb-3 w-[380px] shrink-0 text-lg leading-[1.55] text-fg-muted">
          {t('hero.lead')}
        </p>
      </div>
    </section>
  )
}

export default Hero

import { useTranslation } from 'react-i18next'
import { LuPlane } from 'react-icons/lu'

function Hero() {
  const { t } = useTranslation()
  return (
    <section className="pt-6 lg:pt-14">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-end">
        <div className="flex grow flex-col gap-5">
          <div className="hidden items-center gap-2 text-sm font-bold tracking-[1.5px] text-primary uppercase lg:flex">
            <LuPlane size={18} />
            {t('hero.eyebrow')}
          </div>
          <h1 className="font-display text-[40px] leading-none font-medium tracking-[-1px] lg:text-[64px] lg:leading-[0.98] lg:tracking-[-2px] xl:text-[84px]">
            {t('hero.titleStart')} <br className="hidden lg:block" />
            <span className="text-primary italic">{t('hero.titleAccent')}</span>
          </h1>
        </div>
        <p className="mb-3 hidden w-[380px] shrink-0 text-lg leading-[1.55] text-fg-muted lg:block">
          {t('hero.lead')}
        </p>
      </div>
    </section>
  )
}

export default Hero

import { useTranslation } from 'react-i18next'
import Container from './Container'
import FooterNav from './FooterNav'
import Logo from './Logo'

export default function Footer() {
  // КРОК 1. Беремо функцію t з хука. Хуки викликаються на початку компонента,
  // до return, і ніколи всередині if чи циклів.
  const { t } = useTranslation()

  return (
    <footer className="mt-4 border-t border-border-soft py-10 lg:mt-0 lg:py-8">
      <Container className="flex flex-col items-center gap-3 text-center text-sm text-fg-muted lg:flex-row lg:gap-8 lg:text-left">
        <Logo size="sm" />
        {/*
          КРОК 2. Замість тексту — ключ у t().
          'footer.tagline' = шлях у JSON: об'єкт "footer" → поле "tagline".
          t() дивиться, яка мова зараз обрана, і бере текст з en.json або uk.json.
        */}
        <p className="max-w-[30ch] lg:max-w-none lg:grow">{t('footer.tagline')}</p>
        <FooterNav />
      </Container>
    </footer>
  )
}

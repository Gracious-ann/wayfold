import { useTranslation } from 'react-i18next'
import Container from './Container'
import FooterNav from './FooterNav'
import Logo from './Logo'

export default function Footer() {
  // КРОК 1. Беремо функцію t з хука. Хуки викликаються на початку компонента,
  // до return, і ніколи всередині if чи циклів.
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border-soft py-8">
      <Container className="flex items-center gap-8 text-sm text-fg-muted">
        <Logo />
        {/*
          КРОК 2. Замість тексту — ключ у t().
          'footer.tagline' = шлях у JSON: об'єкт "footer" → поле "tagline".
          t() дивиться, яка мова зараз обрана, і бере текст з en.json або uk.json.
        */}
        <p className="grow">{t('footer.tagline')}</p>
        <FooterNav />
      </Container>
    </footer>
  )
}

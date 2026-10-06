import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

// У масиві тепер не текст, а КЛЮЧ перекладу. Сам текст лежить у en.json / uk.json.
// Масив стоїть поза компонентом, а хук useTranslation можна викликати лише
// всередині компонента — тому тут зберігаємо ключ, а t() викликаємо нижче.
//
// «as const» наприкінці — підказка для TypeScript: label — це саме рядок
// 'footer.about', а не будь-який string. Без нього t(link.label) підкреслиться
// помилкою: TypeScript не зможе перевірити, що такий ключ існує в JSON.

export default function FooterNav() {
  const { t } = useTranslation()
  const footerLinks = [
    { to: '/about', label: t('footer.about') },
    { to: '/support', label: t('footer.support') },
    { to: '/privacy', label: t('footer.privacy') },
  ]
  return (
    // aria-label — теж текст (його читає скрінрідер), тому теж через t()
    <nav aria-label={t('footer.navLabel')}>
      <ul className="flex gap-8">
        {footerLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              className={({ isActive }) =>
                `font-light ${isActive ? 'text-primary' : 'text-fg-muted'}`
              }
              to={link.to}
            >
              {/* link.label = 'footer.about' → t() повертає «About» або «Про проєкт» */}
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

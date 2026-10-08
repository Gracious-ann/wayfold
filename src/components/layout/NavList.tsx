import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function NavList() {
  const { t } = useTranslation()

  const navLinks = [
    { to: '/flights', label: t('nav.flights') },
    { to: '/stays', label: t('nav.stays') },
    { to: '/flight-stay', label: t('nav.flightStay') },
    { to: '/trips', label: t('nav.myTrips') },
  ]

  return (
    <nav className="hidden grow lg:block" aria-label={t('nav.label')}>
      <ul className="flex gap-7">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => `font-semibold ${isActive ? 'text-primary' : 'text-fg'}`}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

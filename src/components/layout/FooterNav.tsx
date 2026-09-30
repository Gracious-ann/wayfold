import { NavLink } from 'react-router-dom'

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/support', label: 'Support' },
  { to: '/privacy', label: 'Privacy' },
]

export default function FooterNav() {
  return (
    <nav aria-label="Footer">
      <ul className="flex gap-8">
        {footerLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              className={({ isActive }) =>
                `font-light ${isActive ? 'text-primary' : 'text-fg-muted'}`
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/flights', label: 'Flights' },
  { to: '/stays', label: 'Stays' },
  { to: '/flight-stay', label: 'Flight + Stay' },
  { to: '/trips', label: 'My trips' },
]

export default function NavList() {
  return (
    <nav className="grow">
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

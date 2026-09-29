import { NavLink } from 'react-router-dom'

export default function NavList() {
  return (
    <nav>
      <ul className="flex gap-7">
        <li>
          <NavLink
            to="/flights"
            className={({ isActive }) =>
              `text-base font-semibold ${isActive ? 'text-primary' : 'text-fg'}`
            }
          >
            Flights
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stays"
            className={({ isActive }) =>
              `text-base font-semibold ${isActive ? 'text-primary' : 'text-fg'}`
            }
          >
            Stays
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flight-stay"
            className={({ isActive }) =>
              `text-base font-semibold ${isActive ? 'text-primary' : 'text-fg'}`
            }
          >
            Flight + Stay
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trips"
            className={({ isActive }) =>
              `text-base font-semibold ${isActive ? 'text-primary' : 'text-fg'}`
            }
          >
            My trips
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

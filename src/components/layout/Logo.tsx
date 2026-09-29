import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <span className="font-display text-3xl font-semibold tracking-tight text-primary italic">
        wayfold
      </span>
    </Link>
  )
}

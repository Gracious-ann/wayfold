import { Link } from 'react-router-dom'

// size — необов'язковий проп: 'lg' для шапки (за замовчуванням), 'sm' для футера (24px, як у макеті)
const sizeStyles = {
  lg: 'text-[26px] lg:text-3xl',
  sm: 'text-2xl',
}

export default function Logo({ size = 'lg' }: { size?: 'lg' | 'sm' }) {
  return (
    <Link to="/">
      <span
        className={`font-display font-semibold tracking-tight text-primary italic ${sizeStyles[size]}`}
      >
        wayfold
      </span>
    </Link>
  )
}

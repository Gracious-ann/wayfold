import HeaderActions from './HeaderActions'
import Container from './Container'
import Logo from './Logo'
import NavList from './NavList'

export default function Header() {
  return (
    <header>
      {/*
        Container обмежує ширину і дає бічні відступи (див. Container.tsx).
        Через className додаємо розкладку саме шапки з макета:
        h-22         → height: 88px (22 × 4px)
        flex         → display: flex — лого і меню в один рядок
        items-center → align-items: center — по центру по вертикалі
        gap-10       → gap: 40px — відстань між лого і меню
      */}
      <Container className="flex h-22 items-center gap-10">
        <Logo />
        <NavList />
        <HeaderActions />
      </Container>
    </header>
  )
}

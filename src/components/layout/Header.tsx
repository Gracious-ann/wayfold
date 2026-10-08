import HeaderActions from './HeaderActions'
import Container from './Container'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import NavList from './NavList'

export default function Header() {
  return (
    // sticky top-0 — шапка «прилипає» до верху екрана під час прокрутки, тож меню завжди під рукою.
    // Панель мобільного меню (absolute) рахує позицію від шапки, бо sticky теж «позиціонований» елемент.
    // z-30 — шапка лежить поверх вмісту сторінки; bg-bg — непрозорий фон, щоб вміст не просвічував.
    <header className="sticky top-0 z-30 bg-bg">
      {/*
        Container обмежує ширину і дає бічні відступи (див. Container.tsx).
        Через className додаємо розкладку саме шапки з макета:
        h-22         → height: 88px (22 × 4px)
        flex         → display: flex — лого і меню в один рядок
        items-center → align-items: center — по центру по вертикалі
        gap-10       → gap: 40px — відстань між лого і меню
      */}
      <Container className="flex h-16 items-center gap-3 lg:h-22 lg:gap-10">
        <Logo />
        <NavList />
        <HeaderActions />
        <MobileMenu />
      </Container>
    </header>
  )
}

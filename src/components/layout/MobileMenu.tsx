import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LuMenu, LuX } from 'react-icons/lu'
import { Link, NavLink } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'
import Button from '../ui/Button'

// Видно лише на екранах до 1024px (lg:hidden). На десктопі працює звичайне меню NavList.
export default function MobileMenu() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/flights', label: t('nav.flights') },
    { to: '/stays', label: t('nav.stays') },
    { to: '/flight-stay', label: t('nav.flightStay') },
    { to: '/trips', label: t('nav.myTrips') },
  ]

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    // Поки меню відкрите, сторінка під ним не прокручується
    document.body.style.overflow = 'hidden'

    // Функція, яку повертає useEffect, — це «прибирання».
    // React викличе її, коли меню закриється: знімаємо слухача і повертаємо прокрутку.
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    // lg:hidden → від 1024px увесь цей блок зникає
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? t('header.closeMenu') : t('header.openMenu')}
        className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-border bg-surface"
      >
        {isOpen ? <LuX size={22} /> : <LuMenu size={22} />}
      </button>

      {/*
        Панель малюється ЛИШЕ коли isOpen === true.
        absolute inset-x-0 top-full → «прилипає» під шапкою на всю ширину.
          Працює, бо в <header> стоїть relative (див. Header.tsx):
          absolute рахує позицію від найближчого батька з relative.
        z-20 → панель лежить поверх вмісту сторінки
      */}
      {/*
        Затемнення з розмиттям за панеллю. Малюється разом з панеллю.
        fixed inset-x-0 top-16 bottom-0 → на весь екран, починаючи під шапкою (64px)
        bg-black/30      → чорний з прозорістю 30%
        backdrop-blur-sm → розмиває те, що ЗА елементом (вміст сторінки)
        z-10 → над сторінкою, але під панеллю меню (z-20)
        Клік по затемненню закриває меню. aria-hidden — скрінрідеру це не потрібно.
      */}
      {isOpen && (
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className="fixed inset-x-0 top-16 bottom-0 z-10 bg-black/30 backdrop-blur-sm"
        />
      )}

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-20 border-t border-border-soft bg-surface px-5 pt-2 pb-5 shadow-card"
        >
          <nav aria-label={t('nav.label')}>
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.to} className="border-b border-border-soft">
                  {/* block py-3 → посилання на всю ширину рядка, зручно влучити пальцем */}
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-semibold ${isActive ? 'text-primary' : 'text-fg'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => changeLanguage(language === 'en' ? 'uk' : 'en')}
            >
              USD · {t(`language.${language}`)}
            </Button>
            <Link
              to="/sign-in"
              onClick={closeMenu}
              className="flex h-11 items-center justify-center rounded-[10px] border-[1.5px] border-border font-bold"
            >
              {t('header.signIn')}
            </Link>
            <Link
              to="/sign-in"
              onClick={closeMenu}
              className="flex h-11 items-center justify-center rounded-[10px] bg-fg text-[15px] font-bold text-bg"
            >
              {t('header.createAccount')}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

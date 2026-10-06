import { useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { useTranslation } from 'react-i18next'
import useLanguage from '../../hooks/useLanguage'

export default function HeaderActions() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  // (Якщо змінити лише клас на <html>, React про це не дізнається й іконку не оновить.)
  const [isOnDarkMode, setIsOnDarkMode] = useState(false)

  function handleToggleTheme() {
    const next = !isOnDarkMode
    // 1) Запам'ятовуємо в стані → React перемалює кнопку з новою іконкою.
    setIsOnDarkMode(next)

    // 2) Вмикаємо/вимикаємо темну тему на <html>.
    // Другий аргумент toggle каже прямо: true — ДОДАТИ клас "dark", false — ПРИБРАТИ.
    // Без нього toggle просто «перемикав би навмання» і міг би розійтися зі станом.
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <div className="flex items-center gap-10">
      {/*
        Кнопка ОДНА — змінюється лише іконка всередині.
        onClick={handleToggleTheme} — передаємо саму функцію БЕЗ дужок:
        React викличе її при кліку. З дужками handleToggleTheme() вона
        виконалась би одразу під час рендеру.
        aria-label — текст для скрінрідера, бо на кнопці лише іконка без слів.
      */}
      <button
        type="button"
        onClick={handleToggleTheme}
        aria-label={isOnDarkMode ? t('header.themeToLight') : t('header.themeToDark')}
        className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-border bg-surface"
      >
        {/*
          Показуємо іконку теми, НА ЯКУ перемкнемось:
          зараз темна → сонце (натисни, щоб стало світло),
          зараз світла → місяць (натисни, щоб стало темно).
        */}
        {isOnDarkMode ? <LuSun size={24} /> : <LuMoon size={24} />}
      </button>
      <Button
        onClick={() => changeLanguage(language === 'en' ? 'uk' : 'en')}
        variant="outline"
        type="button"
      >
        USD · {t(`language.${language}`)}
      </Button>
      <Link className="font-bold" to="/sign-in">
        {t('header.signIn')}
      </Link>
      <Link
        className="flex h-11 items-center rounded-[10px] bg-fg px-5 text-[15px] font-bold text-bg"
        to="/sign-in"
      >
        {t('header.createAccount')}
      </Link>
    </div>
  )
}

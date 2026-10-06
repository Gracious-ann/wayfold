import { useTranslation } from 'react-i18next'
import type { Language } from '../i18n'

export default function useLanguage() {
  const { i18n } = useTranslation()

  const language: Language = i18n.resolvedLanguage === 'uk' ? 'uk' : 'en'

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang)
  }

  return { language, changeLanguage }
}

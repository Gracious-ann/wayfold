import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import uk from './uk.json'

export const supportedLanguages = ['uk', 'en'] as const
export type Language = (typeof supportedLanguages)[number]

void i18n
  // Визначає мову: спершу збережений вибір користувача, потім мову браузера
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
    },
    supportedLngs: supportedLanguages,
    // Макет написаний англійською, тож якщо ключа чи мови немає — показуємо en
    fallbackLng: 'en',
    // 'uk-UA' з браузера → 'uk'
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'wayfold-lang',
      caches: ['localStorage'],
    },
    // React сам екранує текст, подвійне екранування не потрібне
    interpolation: { escapeValue: false },
  })

// Тримаємо <html lang="…"> в актуальному стані: це потрібно скрінрідерам і для переносів слів
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})
document.documentElement.lang = i18n.resolvedLanguage ?? 'en'

export default i18n

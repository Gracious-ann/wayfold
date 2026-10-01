// Типізація ключів перекладу: TypeScript підказує ключі в t('…')
// і підкреслює помилкою ключ, якого немає в en.json.
import 'i18next'
import type en from './en.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof en
    }
  }
}

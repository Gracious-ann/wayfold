/// <reference types="vite/client" />

// Типи для змінних з .env: TypeScript знатиме, що вони існують і що це рядки
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_FLIGHTS_PROVIDER: 'mock' | 'duffel'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

// Vite підставляє сюди значення з .env.local під час збірки.
// У фронтенд потрапляють ЛИШЕ змінні з префіксом VITE_, решта лишається на сервері.
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  throw new Error(
    'Supabase: немає VITE_SUPABASE_URL або VITE_SUPABASE_ANON_KEY. Заповни .env.local (локально) або Environment Variables у Vercel.',
  )
}

// Один клієнт на весь застосунок: імпортуй його звідси, а не створюй новий у компонентах.
// anon-ключ публічний: що можна читати чи писати, вирішують RLS-політики в базі, а не ключ.
// <Database> — типи, згенеровані з бази: TypeScript знає назви таблиць і колонок
export const supabase = createClient<Database>(url, anonKey)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
import './i18n'
import App from './app/App.tsx'

// QueryClient — це кеш: одне сховище відповідей сервера на весь застосунок.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Скільки дані вважаються «свіжими». Поки вони свіжі, повторного запиту не буде:
      // головна і «Здивуй мене» візьмуть ті самі напрямки з кешу.
      staleTime: 5 * 60 * 1000,
      // За замовчуванням невдалий запит повторюється 3 рази; нам досить одного повтору.
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Provider кладе кеш у контекст: будь-який компонент усередині дістає його через useQuery */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)

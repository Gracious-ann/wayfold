# Wayfold

Рейс, житло, місця й оплата в одній поїздці. Пет-проєкт на React.

**Демо:** [wayfold-phi.vercel.app](https://wayfold-phi.vercel.app/)

**Стек:** Vite · React 19 · TypeScript · Tailwind CSS v4 · Supabase · Stripe (test mode)

## Запуск

```bash
npm install
cp .env.example .env.local   # і заповнити публічні ключі
npm run dev                  # http://localhost:5173
```

| Команда          | Що робить                                   |
| ---------------- | ------------------------------------------- |
| `npm run dev`    | dev-сервер з HMR                            |
| `npm run build`  | перевірка типів + продакшн-збірка в `dist/` |
| `npm run lint`   | лінтер (oxlint)                             |
| `npm run format` | Prettier для всього проєкту                 |

## Дизайн-токени

Кольори з макета лежать у [`src/styles/tokens.css`](src/styles/tokens.css) як CSS-змінні
(світла тема в `:root`, темна в `.dark`) і доступні як класи Tailwind:
`bg-surface`, `text-fg-muted`, `border-border`, `bg-primary`, `font-display` тощо.

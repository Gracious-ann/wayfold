# Wayfold — контекст проєкту для Claude

Пет-проєкт Анни на React для портфоліо. Відповідай українською. Код, назви файлів, змінних і коміти пиши англійською.

## Що будуємо

Wayfold — сайт, де рейс, житло, місця в літаку й оплата складаються в одну поїздку.
Основний потік: **пошук → рейси → житло → місця → оплата → підтвердження**.

- Бронювати можна гостем, акаунт необов'язковий.
- Вхід через magic link або Google (Supabase Auth).
- Гість знаходить своє бронювання за кодом (наприклад `WF-4K9Q2`) і прізвищем.
- Гроші не списуються, квитки не виписуються: усі зовнішні сервіси працюють у тестовому (sandbox) режимі.

## Дизайн

- **Figma:** https://www.figma.com/design/9QnH72rHRisKyRxgN6oQJ8
- **Дизайн-канвас (усі 17 екранів):** https://claude.ai/artifact/A4Q9WXYvQN8YcU3GzQWNc7
- **Статичні HTML-макети:** `docs/mockups/*.html`. Це головне джерело правди для верстки: відкривай відповідний файл і відтворюй розміри, відступи й кольори з нього.
- **План проєкту:** https://claude.ai/code/artifact/f37a8dda-667a-4e3e-bffd-b0be00df14de

### Екрани → файли макетів

| Екран | Макет | Етап |
|---|---|---|
| Головна | `Main.html` | 1 |
| Мобільна головна (390px) | `Mobile.html` | 1–8 |
| Рейси | `Flights.html` | 2 |
| Календар цін | `SearchCalendar.html` | 2 |
| Завантаження (скелетони) | `FlightsLoading.html` | 2 |
| Помилка / порожній результат | `FlightsError.html` | 2 |
| Житло | `Trip.html` | 3 |
| Карта готелів + погода | `TripMap.html` | 3 |
| Місця | `Seats.html` | 4 |
| Оплата | `Checkout.html` | 4 |
| Підтвердження | `Confirmation.html` | 4 |
| Вхід / реєстрація | `SignIn.html` | 5 |
| Знайти бронювання (гість) | `FindBooking.html` | 5 |
| Мої поїздки + меню акаунта | `MyTrips.html` | 5 |
| Посадковий талон PDF (A4) | `BoardingPass.html` | 6 |
| Темна тема | `FlightsDark.html` | 7 |
| Мобільний квиток офлайн | `MobileTicket.html` | 7 |

### Дизайн-токени

Оголошуй їх як CSS-змінні в `src/styles/tokens.css` і підключай у Tailwind. Хардкод hex-кольорів у компонентах заборонений.

| Токен | Light | Dark |
|---|---|---|
| `--bg` | `#F7F6FB` | `#12121C` |
| `--surface` (картки) | `#FFFFFF` | `#1E1E2E` |
| `--text` | `#27273F` | `#EDEDF7` |
| `--text-muted` | `#5A5F7D` | `#A7ACC7` |
| `--text-subtle` | `#6E7491` | `#8C91AE` |
| `--border` | `#CBD4E6` | `#3A3A52` |
| `--border-soft` | `#E4E3EE` | `#2E2E42` |
| `--primary` | `#524FE0` | `#524FE0` |
| `--primary-hover` | `#3B38B8` | `#B9B7FF` |
| `--primary-soft` (фон чипів) | `#EEEDFD` | `#2A2850` |
| `--success` | `#2C8C66` | `#6FD3A6` |
| `--danger` | `#B42318` | `#F08A7E` |
| `--price-high` | `#C2522B` | `#F0A07E` |
| `--skeleton` | `#E9E8F2` | `#2E2E42` |

- **Шрифти** (Google Fonts):
  - **Fraunces** — заголовки (500), логотип `wayfold` курсивом 600; акцентне слово в заголовку курсивом кольору `--primary`;
  - **Nunito Sans** — усе інше (400 / 600 / 700 / 800).
- **Радіуси:**
  - 8 — дрібні кнопки;
  - 10–14 — кнопки й поля;
  - 18–20 — картки;
  - 24–28 — великі панелі.
- **Тіні:** м'які, наприклад `0 24px 60px rgba(6,47,125,.08)`.

## Стек

- **Фронтенд:** React + Vite + TypeScript (strict), React Router, TanStack Query, Zustand, React Hook Form + Zod, Tailwind CSS.
- **Бекенд:** Supabase (Postgres + RLS, Auth, Edge Functions на Deno, Storage).
- **Рейси:** Duffel (test mode) за інтерфейсом `FlightsProvider`. Спочатку тільки mock-реалізація.
- **Готелі:** LiteAPI sandbox за інтерфейсом `StaysProvider`. Спочатку mock.
- **Оплата і пошта:** Stripe (test mode, Elements + webhook), Resend.
- **Фічі:**
  - react-i18next (uk/en);
  - `Intl.NumberFormat`;
  - курси валют НБУ (bank.gov.ua) через Edge Function `fx-rates`;
  - MapLibre GL (react-map-gl) + тайли OpenStreetMap;
  - Open-Meteo;
  - @react-pdf/renderer + qrcode;
  - `ics`;
  - vite-plugin-pwa + idb-keyval.
- **Тести:** Vitest + Testing Library, Playwright.
- **Деплой:** Vercel.

## Структура

```
src/
  app/            # роутер, провайдери (Query, Auth, Theme, i18n), ErrorBoundary
  components/ui/  # Button, Input, Chip, Card, Skeleton, Modal
  features/
    search/       # TripSearch, PriceCalendar, AirportSelect
    flights/      # FlightList, Filters, PriceInsight
    stays/        # HotelList, StaysMap, WeatherCard
    seats/        # SeatMap, SeatLegend
    checkout/     # PassengerForm, PaymentForm, TripSummary
    trips/        # MyTrips, FindBooking, Confirmation
    tickets/      # BoardingPassPdf, QrCode, addToCalendar, offline cache
    auth/         # SignIn, AccountMenu, useSession
  providers/      # FlightsProvider (mock | duffel), StaysProvider (mock | liteapi)
  i18n/           # uk.json, en.json
  lib/            # supabase client, api-функції, форматтери
  store/          # tripStore (Zustand)
  styles/         # tokens.css
supabase/
  migrations/
  functions/      # search-flights, search-stays, create-booking, stripe-webhook, find-booking, fx-rates
  seed.sql
tests/
docs/mockups/     # статичні HTML-макети
```

## Правила коду

- Усі тексти інтерфейсу — через `t()` з першого дня, ключі в `src/i18n/uk.json` і `en.json`.
- Кольори — тільки через токени; темна тема вмикається класом `dark` на `<html>`.
- Стан фільтрів і пошуку живе в URL (`useSearchParams`) і валідується Zod-схемою.
- Дані з сервера отримуються через TanStack Query. Стани завантаження показуються скелетонами (Suspense), помилки — через error boundary.
- Зовнішні API викликаються **тільки з Edge Functions**. Секретні ключі не потрапляють у фронтенд і в git: у `.env.local`, у `supabase secrets` і в `.env.example` без значень.
- Mock-first: кожен провайдер має mock-реалізацію із затримкою і випадковими помилками; справжній API вмикається змінною середовища.
- Компоненти невеликі, один компонент на файл; доступність з клавіатури і `aria-*` там, де потрібно.

## Як ми працюємо: режим наставника

Анна вчиться й пише основний код **сама**. Твоя роль — наставник і помічник з рутиною.

**Не пиши код компонентів, хуків, сторінок і логіки, доки Анна прямо не попросить** («напиши», «зроби за мене»). Натомість:

- пояснюй концепцію і давай підказки — назву API, посилання на документацію, короткий приклад **не** з нашого коду;
- на прохання «перевір» роби code review її коду: що добре, що виправити і чому. Не переписуй усе;
- якщо Анна застрягла, давай підказки поступово: спершу напрямок, потім конкретніше, і лише в кінці готовий фрагмент;
- помилки лінтера, TypeScript чи білду пояснюй: що означає помилка і де шукати причину.

**Рутину можна робити самому, без дозволу:**

- встановлення пакетів і конфіги (Vite, Tailwind, oxlint, Prettier, TS, vite-plugin-pwa);
- шаблонні файли: `.env.example`, типи з Supabase (`supabase gen types`), SQL-міграції за погодженою схемою;
- mock-дані (рейси, готелі, аеропорти, ціни календаря) і seed-файли;
- заповнення перекладів у `uk.json` / `en.json` за ключами, які створила Анна;
- заготовки тестів і конфіги Vitest / Playwright;
- масові перейменування й рефакторинг, коли Анна його описала.

Перед рутинною зміною скажи одним реченням, що саме змінюєш. Коміти робить Анна.

## Етапи

- [ ] **0. Підготовка:** репо, Vite + React + TS, ESLint + Prettier, Tailwind, Supabase-проєкт, `.env.example`, деплой на Vercel.
- [ ] **1. Каркас і дизайн-система:** токени light/dark, шрифти, UI-кіт, роутинг, Header з кроками, i18n uk/en, Головна зі статичними даними.
- [ ] **2. Рейси на моках:** `FlightsProvider` + mock, форма пошуку, календар цін (власний range-picker), список рейсів, фільтри в URL, скелетони, error boundary, «немає рейсів».
- [ ] **3. Житло, карта, погода:** `search-stays` (спершу mock), список готелів, карта MapLibre з пінами цін і маршрутом, Open-Meteo.
- [ ] **4. Місця і оплата:** схема місць, кошик у Zustand, форма пасажирів (RHF + Zod), Stripe test, `create-booking` + `stripe-webhook`, таблиці bookings/passengers, лист через Resend, підтвердження.
- [ ] **5. Акаунт і гість:** magic link + Google, меню акаунта, «Мої поїздки» + RLS, «Знайти бронювання», прив'язка гостьових бронювань за email.
- [ ] **6. Квитки:** PDF-талон A4 з QR, «додати в календар» (.ics).
- [ ] **7. Реальні API і платформа:** Duffel за прапорцем, перемикач валют (НБУ), темна тема, PWA з офлайн-квитками.
- [ ] **8. Тести і реліз:** Playwright e2e (картка 4242 4242 4242 4242), Lighthouse ≥ 90, README зі скріншотами.

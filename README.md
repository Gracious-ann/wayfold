# Wayfold ✈️

**Flights, stays, seats and payment — combined into one trip.**
A travel booking web application built with React 19, TypeScript and Supabase. Portfolio project, **in progress**.

🔗 **Live Demo:** https://wayfold-phi.vercel.app/

## 🧭 User Flow

**Search → Flights → Stays → Seats → Payment → Confirmation**

- Book as a guest — an account is optional
- Sign in with a magic link or Google (Supabase Auth)
- Guests find their booking by booking code (e.g. `WF-4K9Q2`) and last name
- All external services run in **test / sandbox mode** — no real payments or tickets

## ✨ Features

**Done**

- Responsive home page with mobile menu and sticky header
- Trip search with budget chips
- Destination cards with a budget filter and season-based offers
- "Surprise me" page with a random destination
- Destination data and photos from Supabase (PostgreSQL) via TanStack Query
- Ukrainian / English localization with a language switch
- Light / dark theme based on design tokens
- Info pages (About, Support, Privacy) and 404 page

**Planned**

- Flight results with price calendar, loading skeletons and error states
- Stays with a hotel map and weather
- Seat selection, checkout with Stripe (test mode) and booking confirmation
- Sign in, guest booking lookup and "My trips"
- Boarding pass PDF and offline mobile ticket (PWA)
- E2E tests with Playwright

## 🗺️ Roadmap

| Stage | Scope | Status |
| ----- | ----- | ------ |
| 0 | Setup: Vite + React + TS, linting, Tailwind, Supabase project, Vercel deploy | ✅ Done |
| 1 | Design system (light/dark tokens, UI kit), routing, i18n, home page | ✅ Done |
| 2 | Flights on mock data: search form, URL params, flight list, filters, price calendar, skeletons and error states | 🚧 In progress |
| 3 | Stays, hotel map (MapLibre) with price pins, weather (Open-Meteo) | ⏳ Planned |
| 4 | Seats, passenger form, Stripe checkout (test mode), booking confirmation email | ⏳ Planned |
| 5 | Auth (magic link, Google), "My trips", guest booking lookup | ⏳ Planned |
| 6 | Boarding pass PDF with QR code, add to calendar (.ics) | ⏳ Planned |
| 7 | Real flight API, currency switch, PWA with offline tickets | ⏳ Planned |
| 8 | E2E tests (Playwright), Lighthouse ≥ 90, release | ⏳ Planned |

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4** with design tokens (CSS variables, light and dark theme)
- **React Router**
- **TanStack Query** — server state and caching
- **Supabase** — PostgreSQL database, migrations, seed data, Auth
- **i18next** / react-i18next — Ukrainian and English
- **Stripe** (test mode) — planned for checkout
- **oxlint**, **Prettier**
- Deployed on **Vercel**
- Designs in **Figma** (17 screens)

## 📁 Project Structure

```
src/
├── app/          # App, layout, routing, 404
├── components/   # layout (header, footer, menu) and UI components
├── features/     # home, search, destinations, flights, stays, trips, info
├── hooks/        # useDestinations, useLanguage
├── i18n/         # uk.json, en.json, i18next setup
├── lib/          # Supabase client, API, database types
└── styles/       # design tokens
supabase/
├── migrations/   # database schema
└── seed.sql      # reference data
```


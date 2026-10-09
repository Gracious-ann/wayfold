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

## Photo credits

Фото напрямків взяті з [Unsplash](https://unsplash.com) за [ліцензією Unsplash](https://unsplash.com/license). Дякую авторам:

| Напрямок       | Автор                                                               |
| -------------- | ------------------------------------------------------------------- |
| Vancouver      | [Anthony Maw](https://unsplash.com/photos/GWRuNS8Y0KM)              |
| New York       | [Mike Chavarri](https://unsplash.com/photos/kZokA2VTKn4)            |
| Chicago        | [Zander Betterton](https://unsplash.com/photos/ff6MPtScTQM)         |
| Honolulu       | [Spenser Sembrat](https://unsplash.com/photos/9bl-h_RX8NY)          |
| Cancún         | [Jan Bachor](https://unsplash.com/photos/yHPKC4BdAPY)               |
| Montréal       | [Dmitri M](https://unsplash.com/photos/7SvhuD1wsts)                 |
| San José       | [Christina Victoria Craft](https://unsplash.com/photos/DFfNVwhOIWQ) |
| Mexico City    | [Carlos Aguilar](https://unsplash.com/photos/oGRrpBX2ER4)           |
| London         | [Shane Rounce](https://unsplash.com/photos/YTDATZz_q1M)             |
| Lisbon         | [Louis Droege](https://unsplash.com/photos/8Nd3GY8z-iU)             |
| Amsterdam      | [Adrien Olichon](https://unsplash.com/photos/QRtym77B6xk)           |
| Paris          | [Vinicius Eloy Bailo](https://unsplash.com/photos/xcJiJsgHpFA)      |
| Barcelona      | [Logan Armstrong](https://unsplash.com/photos/hVhfqhDYciU)          |
| Tokyo          | [Jezael Melgoza](https://unsplash.com/photos/alY6_OpdwRQ)           |
| Rome           | [Matteo del Piano](https://unsplash.com/photos/7Y015gklIDg)         |
| Seoul          | [Ping Onganankun](https://unsplash.com/photos/5htrsUUbFGI)          |
| Athens         | [Constantinos Kollias](https://unsplash.com/photos/yqBvJJ8jGBQ)     |
| Reykjavík      | [Einar H. Reynis](https://unsplash.com/photos/geYUKmAKZp0)          |
| Bangkok        | [Anantachai Saothong](https://unsplash.com/photos/0DKDTSFBXc8)      |
| Buenos Aires   | [Ricardo Díaz](https://unsplash.com/photos/6zXclZKqI_8)             |
| Marrakech      | [Paul Macallan](https://unsplash.com/photos/CFKksjYRSQ8)            |
| Hanoi          | [Elliot Andrews](https://unsplash.com/photos/6keOhd7idJo)           |
| Dubai          | [David Rodrigo](https://unsplash.com/photos/Fr6zexbmjmc)            |
| Singapore      | [Hu Chen](https://unsplash.com/photos/__cBlRzLSTg)                  |
| Rio de Janeiro | [Agustin Diaz Gargiulo](https://unsplash.com/photos/7F65HDP0-E0)    |
| Sydney         | [Caleb](https://unsplash.com/photos/JmuyB_LibRo)                    |
| Bali           | [Niklas Weiss](https://unsplash.com/photos/-2WlTWZLnRc)             |
| Cape Town      | [Jaman Asad](https://unsplash.com/photos/FQ03xcur9As)               |
| Queenstown     | [Ömer Faruk Bekdemir](https://unsplash.com/photos/5BuxuWIJF1Q)      |
| Malé           | [Matheen Faiz](https://unsplash.com/photos/iwZqmickJxA)             |

-- Скільки ночей у готелі входить у пакет «рейс + житло» для кожного напрямку.
-- Ціна price_from розрахована саме на цю кількість ночей.

alter table public.destinations
  add column nights smallint not null default 5
    check (nights between 1 and 30);

-- Правило для демо-даних: якщо переліт довший за 15 годин, 5 ночей замало — ставимо 7.
update public.destinations
set nights = 7
where duration_minutes >= 900;

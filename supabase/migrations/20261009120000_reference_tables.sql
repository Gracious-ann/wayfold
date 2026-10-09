-- Довідкові таблиці для Головної та пошуку: аеропорти й популярні напрямки.
-- Читати можуть усі (і гість, і залогінений), писати — лише адмін через service_role.

create table public.airports (
  iata_code char(3) primary key,
  name text not null,
  city text not null,
  country text not null,
  lat double precision not null,
  lng double precision not null
);

comment on table public.airports is 'Аеропорти для автокомпліту «Звідки / Куди» і карти';

create table public.destinations (
  id text primary key,
  city text not null,
  country text,
  airport_code char(3) not null references public.airports (iata_code),
  description text,
  image_url text,
  price_from numeric(10, 2) not null,
  tone text not null default 'primary' check (tone in ('primary', 'warm', 'success', 'sky')),
  sort_order int not null default 0
);

comment on table public.destinations is 'Напрямки для секції «Where can $1,500 take you?» на Головній';

-- Row Level Security: без політик таблиця закрита для всіх, навіть для читання
alter table public.airports enable row level security;
alter table public.destinations enable row level security;

create policy "airports are readable by everyone"
  on public.airports for select
  to anon, authenticated
  using (true);

create policy "destinations are readable by everyone"
  on public.destinations for select
  to anon, authenticated
  using (true);

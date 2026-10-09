-- Фото напрямків у Supabase Storage.

-- Публічний бакет: файли з нього доступні за прямим посиланням без ключа.
-- Завантажувати й видаляти може лише адмін (service_role / CLI) — політик на запис немає.
insert into storage.buckets (id, name, public)
values ('destinations', 'destinations', true)
on conflict (id) do nothing;

-- У базі зберігаємо ШЛЯХ до файлу в бакеті ('tokyo.webp'), а не повну адресу.
-- Повна адреса містить домен проєкту; якщо проєкт чи домен зміниться, дані не доведеться переписувати.
-- Фронтенд сам збирає адресу: supabase.storage.from('destinations').getPublicUrl(image_path)
alter table public.destinations rename column image_url to image_path;

comment on column public.destinations.image_path is 'Шлях до фото в бакеті destinations, напр. tokyo.webp';

update public.destinations set image_path = id || '.webp';

import { supabase } from './supabase'

// Робить із назви файла ('tokyo.webp') повну адресу фото для <img src>.
// У базі лежить лише назва файла, а не готове посилання: якщо проєкт Supabase
// чи bucket зміниться, досить поправити цю функцію, а не 30 рядків у таблиці.
//
// Функція звичайна, без async: getPublicUrl НЕ робить запиту в мережу,
// вона просто склеює рядок «адреса проєкту + назва bucket + назва файла».
export function getPhotoUrl(path: string | null) {
  // У базі image_path може бути порожнім (null). Тоді повертаємо undefined:
  // React не поставить атрибут src узагалі, і браузер нічого не качатиме.
  if (path === null) {
    return undefined
  }

  // supabase.storage — сховище файлів (не плутай із supabase.from('destinations') — це таблиця).
  // .from('destinations') тут — назва bucket, тобто «папки» з фото.
  const { data } = supabase.storage.from('destinations').getPublicUrl(path)

  return data.publicUrl
}

export async function getDestinations() {
  const { data, error } = await supabase.from('destinations').select('*')

  if (error) {
    throw error
  }

  return data
}

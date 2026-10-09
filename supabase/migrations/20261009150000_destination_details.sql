-- Деталі напрямків: пересадки, тривалість, готель, сезон, опис.
-- Плюс аеропорти для нових напрямків і самі 30 напрямків.
-- Дані тут, а не в seed.sql, бо від них залежить застосунок, а міграції застосовуються
-- до кожної бази рівно один раз (Supabase запам'ятовує, які вже виконано).

alter table public.destinations
  add column stops int not null default 0 check (stops >= 0),
  -- хвилини, а не рядок '11h 20m': так тривалість можна перекласти й порівнювати
  add column duration_minutes int check (duration_minutes > 0),
  add column photo text,
  add column hotel text,
  -- 1 = січень … 12 = грудень
  add column best_months int[] not null default '{}'
    check (best_months <@ '{1,2,3,4,5,6,7,8,9,10,11,12}'::int[]);

comment on column public.destinations.best_months is 'Місяці, коли туди найкраще їхати (1–12)';

insert into public.airports (iata_code, name, city, country, lat, lng) values
  ('YVR', 'Vancouver International', 'Vancouver', 'Canada', 49.1967, -123.1815),
  ('HNL', 'Daniel K. Inouye International', 'Honolulu', 'United States', 21.3187, -157.9225),
  ('CUN', 'Cancún International', 'Cancún', 'Mexico', 21.0365, -86.8771),
  ('YUL', 'Montréal–Trudeau International', 'Montréal', 'Canada', 45.4706, -73.7408),
  ('SJO', 'Juan Santamaría International', 'San José', 'Costa Rica', 9.9939, -84.2088),
  ('EZE', 'Ministro Pistarini International', 'Buenos Aires', 'Argentina', -34.8222, -58.5358),
  ('RAK', 'Marrakesh Menara', 'Marrakech', 'Morocco', 31.6069, -8.0363),
  ('HAN', 'Noi Bai International', 'Hanoi', 'Vietnam', 21.2212, 105.8072),
  ('GIG', 'Rio de Janeiro/Galeão International', 'Rio de Janeiro', 'Brazil', -22.809, -43.2506),
  ('DPS', 'Ngurah Rai International', 'Denpasar', 'Indonesia', -8.7482, 115.167),
  ('ZQN', 'Queenstown', 'Queenstown', 'New Zealand', -45.0211, 168.7392),
  ('MLE', 'Velana International', 'Malé', 'Maldives', 4.1918, 73.5291)
on conflict (iata_code) do nothing;

insert into public.destinations
  (id, city, country, airport_code, description, price_from, tone, sort_order,
   stops, duration_minutes, photo, hotel, best_months)
values
  ('vancouver', 'Vancouver', 'Canada', 'YVR', 'Summer is dry and mild — perfect for Stanley Park, kayaking and day trips to Whistler. Stay by the waterfront and get around by SkyTrain and SeaBus.', 520, 'success', 1,
   0, 145, 'Vancouver harbour and mountains', 'Fairmont Waterfront', '{6,7,8,9}'),
  ('new-york', 'New York', 'United States', 'JFK', 'Spring and early autumn bring comfortable walking weather and fewer crowds than summer. Stay in Manhattan or Brooklyn and use the subway.', 560, 'primary', 2,
   0, 340, 'Manhattan skyline', 'The Standard High Line', '{4,5,6,9,10}'),
  ('chicago', 'Chicago', 'United States', 'ORD', 'Late spring to early autumn is festival season by the lake. Start with the river architecture cruise, then explore neighbourhoods on the L train.', 430, 'sky', 3,
   0, 260, 'Chicago river architecture', 'Hotel Chicago Riverwalk', '{5,6,7,8,9}'),
  ('honolulu', 'Honolulu', 'United States', 'HNL', 'April–June and September–October have the best mix of sunshine, calm seas and lower prices. Rent a car for a day to circle the North Shore.', 640, 'sky', 4,
   0, 335, 'Waikiki beach', 'Moana Surfrider', '{4,5,6,9,10}'),
  ('cancun', 'Cancún', 'Mexico', 'CUN', 'December to April is the dry season with calm turquoise water. Base yourself in the Hotel Zone and take the ADO bus to Tulum and the cenotes.', 690, 'sky', 5,
   0, 315, 'Turquoise beach in Cancún', 'Hotel Riu Caribe', '{12,1,2,3,4}'),
  ('montreal', 'Montréal', 'Canada', 'YUL', 'Summer is all jazz and food festivals; December turns the old town into a snowy postcard. The metro covers everything.', 610, 'warm', 6,
   1, 490, 'Old Montréal street', 'Hôtel Nelligan', '{6,7,8,9,12}'),
  ('san-jose', 'San José', 'Costa Rica', 'SJO', 'The dry season from December to April is best for volcano hikes and beaches. Rent a 4×4 — many of the best spots are off paved roads.', 740, 'success', 7,
   1, 525, 'Rainforest canopy', 'Hotel Grano de Oro', '{12,1,2,3,4}'),
  ('mexico-city', 'Mexico City', null, 'MEX', 'Spring is warm and dry, and early November brings Día de Muertos. Stay in Roma or Condesa and use the metro or a taxi app between neighbourhoods.', 780, 'sky', 8,
   0, 265, 'Mexico City plaza', 'Hotel Carlota', '{3,4,5,10,11}'),
  ('london', 'London', 'United Kingdom', 'LHR', 'Late spring and summer have long light evenings for parks and markets. Tap your bank card on the Tube — fares are capped daily.', 1050, 'primary', 9,
   0, 635, 'Thames at dusk', 'The Hoxton Holborn', '{5,6,7,8,9}'),
  ('lisbon', 'Lisbon', 'Portugal', 'LIS', 'Spring and early autumn are sunny without the summer heat and crowds. Ride tram 28 early in the morning and take a day trip to Sintra.', 1090, 'warm', 10,
   1, 905, 'Lisbon rooftops', 'Memmo Alfama', '{4,5,6,9,10}'),
  ('amsterdam', 'Amsterdam', 'Netherlands', 'AMS', 'Mid-April to May is tulip season; September is quieter and still mild. Rent a bike for a day — it is the fastest way across the city.', 1120, 'sky', 11,
   0, 640, 'Amsterdam canals', 'Pulitzer Amsterdam', '{4,5,9}'),
  ('paris', 'Paris', 'France', 'CDG', 'April–June and September–October give soft light, terraces and shorter queues. Book museum time slots in advance and walk along the river.', 1150, 'warm', 12,
   0, 650, 'Paris rooftops at sunset', 'Hôtel des Grands Boulevards', '{4,5,6,9,10}'),
  ('barcelona', 'Barcelona', 'Spain', 'BCN', 'Late spring and early autumn are warm enough for the beach without August crowds. Book Sagrada Família ahead and use a metro travel card.', 1180, 'warm', 13,
   1, 810, 'Barcelona Gothic Quarter', 'Hotel Casa Fuster', '{5,6,9,10}'),
  ('tokyo', 'Tokyo', 'Japan', 'NRT', 'Late March to early April is cherry-blossom season; October–November brings clear skies and autumn colours. Get a Suica card for trains and shops.', 1240, 'primary', 14,
   0, 680, 'Tokyo street at dusk', 'Hotel Shinjuku', '{3,4,10,11}'),
  ('rome', 'Rome', 'Italy', 'FCO', 'Spring and autumn are ideal for walking between ruins without midsummer heat. Book the Colosseum and Vatican online and stay near Monti or Trastevere.', 1260, 'warm', 15,
   1, 890, 'Roman Forum at golden hour', 'Hotel Artemide', '{4,5,6,9,10}'),
  ('seoul', 'Seoul', 'South Korea', 'ICN', 'Spring blossoms and crisp autumn foliage are the highlights. The metro is excellent — load a T-money card and try the night markets.', 1310, 'primary', 16,
   0, 765, 'Seoul at night', 'RYSE Autograph Collection', '{4,5,9,10,11}'),
  ('athens', 'Athens', 'Greece', 'ATH', 'May–June and September–October are warm with calm seas for island hopping. Visit the Acropolis right at opening, then catch a ferry from Piraeus.', 1350, 'sky', 17,
   1, 980, 'Acropolis view', 'Electra Metropolis', '{5,6,9,10}'),
  ('reykjavik', 'Reykjavík', 'Iceland', 'KEF', 'June–August brings the midnight sun and open highland roads; February–March is best for the northern lights. A rental car makes the Golden Circle easy.', 1380, 'success', 18,
   1, 760, 'Reykjavík harbour', 'Center Hotels Plaza', '{2,3,6,7,8}'),
  ('bangkok', 'Bangkok', 'Thailand', 'BKK', 'November to February is the cool, dry season. Use river boats and the Skytrain to avoid traffic, and add a few days on the islands.', 1420, 'warm', 19,
   1, 1150, 'Bangkok temple', 'The Siam', '{11,12,1,2}'),
  ('buenos-aires', 'Buenos Aires', 'Argentina', 'EZE', 'Southern spring and autumn are mild and great for walking. Stay in Palermo or Recoleta and plan dinners late — restaurants fill up after 9 pm.', 1460, 'warm', 20,
   1, 940, 'Colourful La Boca street', 'Palacio Duhau', '{3,4,5,9,10,11}'),
  ('marrakech', 'Marrakech', 'Morocco', 'RAK', 'Spring and autumn avoid the extreme summer heat. Stay in a riad inside the medina and add a night in the Atlas mountains or the desert.', 1560, 'warm', 21,
   1, 1075, 'Marrakech spice market', 'Riad Kniza', '{3,4,5,10,11}'),
  ('hanoi', 'Hanoi', 'Vietnam', 'HAN', 'Spring and autumn are mild and dry. Explore the Old Quarter on foot and book an overnight cruise in Ha Long Bay.', 1590, 'success', 22,
   1, 1110, 'Hanoi Old Quarter', 'Hotel de l''Opera Hanoi', '{3,4,10,11}'),
  ('dubai', 'Dubai', 'United Arab Emirates', 'DXB', 'November to March is warm and sunny rather than scorching. The metro links the main sights; book an evening desert tour for the dunes.', 1640, 'sky', 23,
   0, 950, 'Dubai skyline', 'Address Downtown', '{11,12,1,2,3}'),
  ('singapore', 'Singapore', null, 'SIN', 'February to April is drier between monsoons. Hawker centres are the best-value food in the city, and the MRT goes everywhere.', 1720, 'success', 24,
   0, 1000, 'Gardens by the Bay', 'Parkroyal Collection Pickering', '{2,3,4}'),
  ('rio', 'Rio de Janeiro', 'Brazil', 'GIG', 'December to March is summer and carnival season. Stay in Ipanema or Leblon and use official taxis or a ride app at night.', 1780, 'sky', 25,
   1, 965, 'Sugarloaf Mountain', 'Fasano Rio de Janeiro', '{12,1,2,3}'),
  ('sydney', 'Sydney', 'Australia', 'SYD', 'Southern spring and autumn are warm without peak summer prices. Take the ferry to Manly and walk the Bondi to Coogee coastal path.', 1890, 'sky', 26,
   0, 905, 'Sydney Opera House', 'Ovolo Woolloomooloo', '{3,4,5,9,10,11}'),
  ('bali', 'Bali', 'Indonesia', 'DPS', 'April to October is the dry season. Split your stay between Ubud for rice terraces and the coast for beaches, and hire a driver for day trips.', 1980, 'success', 27,
   1, 1230, 'Rice terraces in Bali', 'COMO Uma Ubud', '{4,5,6,7,8,9,10}'),
  ('cape-town', 'Cape Town', 'South Africa', 'CPT', 'Southern summer is warm and great for beaches and wine country. Hike or take the cable car up Table Mountain on a clear morning.', 2150, 'success', 28,
   1, 1360, 'Table Mountain', 'The Silo Hotel', '{11,12,1,2,3}'),
  ('queenstown', 'Queenstown', 'New Zealand', 'ZQN', 'Summer is for hiking and lake days; June–August is ski season. Rent a car and drive to Milford Sound for a day.', 2290, 'primary', 29,
   1, 1040, 'Lake Wakatipu', 'Eichardt''s Private Hotel', '{12,1,2,3,6,7,8}'),
  ('male', 'Malé', 'Maldives', 'MLE', 'November to April is the dry season with calm, clear water for snorkelling. Choose a resort with the seaplane or speedboat transfer included.', 2420, 'sky', 30,
   1, 1450, 'Overwater villas', 'Kurumba Maldives', '{11,12,1,2,3,4}')
on conflict (id) do update set
  city = excluded.city,
  country = excluded.country,
  airport_code = excluded.airport_code,
  description = excluded.description,
  price_from = excluded.price_from,
  tone = excluded.tone,
  sort_order = excluded.sort_order,
  stops = excluded.stops,
  duration_minutes = excluded.duration_minutes,
  photo = excluded.photo,
  hotel = excluded.hotel,
  best_months = excluded.best_months;

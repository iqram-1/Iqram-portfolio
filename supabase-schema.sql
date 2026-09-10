create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'Update',
  date date not null default current_date,
  caption text not null,
  image_url text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

drop policy if exists "Published posts are public" on public.posts;
create policy "Published posts are public"
  on public.posts for select
  using (published = true);

drop policy if exists "Signed-in users can read posts" on public.posts;
create policy "Signed-in users can read posts"
  on public.posts for select to authenticated
  using (true);

drop policy if exists "Signed-in users can insert posts" on public.posts;
create policy "Signed-in users can insert posts"
  on public.posts for insert to authenticated
  with check (true);

drop policy if exists "Signed-in users can update posts" on public.posts;
create policy "Signed-in users can update posts"
  on public.posts for update to authenticated
  using (true) with check (true);

drop policy if exists "Signed-in users can delete posts" on public.posts;
create policy "Signed-in users can delete posts"
  on public.posts for delete to authenticated
  using (true);

insert into storage.buckets (id, name, public)
values ('portfolio-images', 'portfolio-images', true)
on conflict (id) do nothing;

drop policy if exists "Public can view portfolio images" on storage.objects;
create policy "Public can view portfolio images"
  on storage.objects for select
  using (bucket_id = 'portfolio-images');

drop policy if exists "Signed-in users can upload portfolio images" on storage.objects;
create policy "Signed-in users can upload portfolio images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'portfolio-images');

drop policy if exists "Signed-in users can update portfolio images" on storage.objects;
create policy "Signed-in users can update portfolio images"
  on storage.objects for update to authenticated
  using (bucket_id = 'portfolio-images')
  with check (bucket_id = 'portfolio-images');

drop policy if exists "Signed-in users can delete portfolio images" on storage.objects;
create policy "Signed-in users can delete portfolio images"
  on storage.objects for delete to authenticated
  using (bucket_id = 'portfolio-images');

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  number integer not null,
  group_id text not null,
  media_type text not null default 'image',
  source_path text,
  media_url text,
  title text not null,
  caption text not null,
  visible boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (source_path)
);

alter table public.media_assets enable row level security;

drop policy if exists "Visible media is public" on public.media_assets;
create policy "Visible media is public"
  on public.media_assets for select
  using (visible = true);

drop policy if exists "Signed-in users can read all media" on public.media_assets;
create policy "Signed-in users can read all media"
  on public.media_assets for select to authenticated
  using (true);

drop policy if exists "Signed-in users can insert media" on public.media_assets;
create policy "Signed-in users can insert media"
  on public.media_assets for insert to authenticated
  with check (true);

drop policy if exists "Signed-in users can update media" on public.media_assets;
create policy "Signed-in users can update media"
  on public.media_assets for update to authenticated
  using (true) with check (true);

drop policy if exists "Signed-in users can delete media" on public.media_assets;
create policy "Signed-in users can delete media"
  on public.media_assets for delete to authenticated
  using (true);

insert into public.media_assets (number, group_id, media_type, source_path, title, caption, sort_order)
values
  (1, 'scitech', 'image', '072f9fb8b9e417535567a771e48e0c5f.webp', 'Osikani Farming Solution prototype', 'The Osikani Farming Solution — the prototype we built to win at the Sci-Tech Fair 2024.', 1),
  (2, 'scitech', 'image', '311176_5997d21fe57349bd8c340db373ae2f78~mv2.jpeg', 'Sci-Tech Fair 2024 award win', 'Sci-Tech Fair 2024 award photographs: our team celebrating the awards we won.', 2),
  (17, 'scitech', 'image', 'IMG-20250930-WA0003.jpg', 'Sci-Tech Fair award day', 'A moment from the Sci-Tech Fair 2024 award day with fellow student innovators.', 17),
  (18, 'scitech', 'image', 'IMG-20250930-WA0004.jpg', 'Sci-Tech Fair recognition', 'The award-winning team with mentors and organisers at the Sci-Tech Fair 2024.', 18),
  (3, 'hub', 'image', '63093f77-c0f2-4322-8a69-64416ff795e3.jpg', 'Smart Power Hub prototype', 'A working ESP32 smart extension-board prototype with safety sensing, Wi-Fi control, scheduling, and power monitoring.', 3),
  (10, 'hub', 'image', 'IMG_1968.JPG', 'Smart Power Hub CAD concept', 'Fusion 360 CAD concept for the Smart Power Hub, showing the enclosure, ports, and control layout.', 10),
  (4, 'cad', 'image', 'ABUBAKAR_UEB1216725_MECHANICAL''A''_ASSEMBLY_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_34_55.png', 'Mechanical assembly — angled view', 'Fusion 360 view of a mechanical assembly, showing the base, body, fasteners, and moving features.', 4),
  (5, 'cad', 'image', 'ABUBAKAR_UEB1216725_MECHANICAL''A''_ASSEMBLY_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_34_56.png', 'Mechanical assembly — front view', 'A second Fusion 360 view documenting the front face, opening, and mounting details of the assembly.', 5),
  (19, 'cad', 'image', 'IQRAM ABUBAKAR-UEB1216725_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_35_41.png', 'Hub assembly — coupling view', 'Fusion 360 assembly study of a hub-and-flange component with bolts, shaft, and circular plates.', 19),
  (20, 'cad', 'image', 'IQRAM ABUBAKAR-UEB1216725_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_36_32.png', 'Hub assembly — shaft view', 'Extended assembly view showing paired end plates, the central shaft, and the connection sequence.', 20),
  (13, 'electronics', 'image', 'IMG_2235.jpg', 'Combined circuit layout', 'Final-semester group project: a combined circuit build based on laboratory work. I led the group and created the circuit schematics.', 13),
  (15, 'electronics', 'image', 'IMG_2332.jpg', 'Motor driver lab schematic', 'L293D forward and reverse DC motor driver schematic from laboratory classwork, with control switches and LED status outputs.', 15),
  (6, 'journey', 'image', 'IMG_1048.jpg', 'Portrait of Iqram Abubakar', 'Iqram Abubakar — mechanical engineering student, builder, and project designer.', 6),
  (8, 'journey', 'image', 'IMG_1306.jpg', 'P.O. Lumumba Innovation Club Day reopening', 'P.O. Lumumba Innovation Club Day reopening.', 8),
  (9, 'journey', 'image', 'IMG_1322.jpg', 'Robotics prototype session', 'Hands-on work with a robotics prototype during a practical demonstration session.', 9),
  (16, 'journey', 'image', 'IMG-20250923-WA0150.jpg', 'Auto mechanics practical — final day', 'A group photo taken after our final auto mechanics practical at senior high school, following workshop work as auto mechanics students.', 16),
  (21, 'workshop', 'video', '65946BAB-EE69-46EC-BABB-BEADE3915259 (1).mp4', 'Sunyani Magazine workshop day', 'Our workshop day during my first year at the University of Energy and Natural Resources — the first workshop visit we made at Sunyani Magazine.', 21),
  (23, 'workshop', 'video', 'FB046664-9BEE-4E85-AF77-B67FFEAE6919.mp4', 'Mechanical workshop practical', 'A hands-on mechanical workshop practical, documenting a wheel-removal exercise.', 23),
  (26, 'videos', 'video', 'VID-20251027-WA0008.mp4', 'Mechanical workshop practice — October 2025', 'Me working as a mechanic at the workshop in October 2025.', 26)
on conflict (source_path) do nothing;

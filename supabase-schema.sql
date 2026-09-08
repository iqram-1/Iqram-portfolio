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

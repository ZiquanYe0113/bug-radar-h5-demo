create table if not exists public.bug_reports (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  place text not null,
  bug text not null,
  text text,
  extra jsonb default '[]'::jsonb,
  photos jsonb default '[]'::jsonb,
  latitude double precision,
  longitude double precision,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.bug_reports enable row level security;

create policy "anon can insert bug reports"
on public.bug_reports
for insert
to anon
with check (true);

create policy "anon can read recent approved or pending reports"
on public.bug_reports
for select
to anon
using (created_at > now() - interval '7 days');

-- Migration 001: Create orders table and storage bucket
-- Run this in Supabase Dashboard > SQL Editor

-- ─────────────────────────────────────────
-- Orders table
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id              TEXT         PRIMARY KEY,
  customer_name   TEXT         NOT NULL,
  product_name    TEXT         NOT NULL,
  price           INTEGER      NOT NULL DEFAULT 0,
  image_url       TEXT,
  created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at on every row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS orders_updated_at ON orders;
CREATE TRIGGER orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─────────────────────────────────────────
-- Row Level Security
-- (No auth in this iteration – allow all for anon)
-- ─────────────────────────────────────────
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all for anon"          ON orders;
DROP POLICY IF EXISTS "Allow all for authenticated" ON orders;

CREATE POLICY "Allow all for anon"
  ON orders FOR ALL TO anon
  USING (true) WITH CHECK (true);

CREATE POLICY "Allow all for authenticated"
  ON orders FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- ─────────────────────────────────────────
-- Storage bucket for product images
-- ─────────────────────────────────────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS: allow public read, anon upload
CREATE POLICY "Public read product images"
  ON storage.objects FOR SELECT TO public
  USING (bucket_id = 'product-images');

CREATE POLICY "Anon upload product images"
  ON storage.objects FOR INSERT TO anon
  WITH CHECK (bucket_id = 'product-images');

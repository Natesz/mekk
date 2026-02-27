-- Migration 002: Add quantity, currency, status columns to orders table
-- Run this in Supabase Dashboard > SQL Editor

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS quantity  INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS currency  TEXT    NOT NULL DEFAULT 'HUF',
  ADD COLUMN IF NOT EXISTS status    TEXT    NOT NULL DEFAULT 'assembling';

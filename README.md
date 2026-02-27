# MEKK - Kecskesajt Megrendelés Kezelő

Nuxt 3 PWA alkalmazás kecskesajt megrendelések kezelésére.

## Features

- **Dashboard főoldal** (`/`)
  - Megrendelések listája vízszintes elrendezésben (Supabase-ből töltve)
  - Új megrendelés gomb → navigál az Új megrendelés oldalra
  - Kattintható kék kör logó (visszavisz a dashboardra)

- **Új megrendelés oldal** (`/orders/new`)
  - Érdeklődő adatok: név, hitelfelvevő típusa, kapcsolattartó, telefonszám (+36), email
  - Zod alapú validáció – Tovább gomb csak valid adatoknál navigál tovább

- **Megrendelés részletes oldal** (`/orders/:id`)
  - Ajánlat fejléc: érdeklődő adatai + megrendelés azonosító (K2600001) + státusz
  - Tab rendszer: Általános (read-only) | Megrendelés | Üzenetek (disabled) | Fizetés (disabled)
  - Termék panel: dropdown + placeholder kép
  - Finanszírozás panel: deviza (HUF/EUR/CZK) + darabszám (termék után jelenik meg)

## Stack

- Nuxt 3
- Tailwind CSS
- Pinia (in-memory state)
- Supabase (adatbázis + képtárolás)
- Zod (validáció)
- TypeScript
- Google Fonts (Montserrat)
- PWA (@vite-pwa/nuxt)

## Oldalak / Routes

| Route | Leírás |
|-------|--------|
| `/` | Dashboard |
| `/orders/new` | Új megrendelés form |
| `/orders/:id` | Megrendelés részletes oldal |

## Supabase beállítás

### 1. Projekt létrehozása

[https://supabase.com](https://supabase.com) → New project

### 2. Migrációs script futtatása

A Supabase Dashboard → SQL Editor-ban futtasd:

```
db/migrations/001_create_orders.sql
```

Ez létrehozza:
- `orders` tábla (id, customer_name, product_name, price, image_url, created_at, updated_at)
- `product-images` Storage bucket
- RLS policy-k (anon hozzáférés, auth nélküli iterációhoz)

### 3. Környezeti változók

Másold a `.env.example`-t `.env`-be és töltsd ki:

```bash
cp .env.example .env
```

| Változó | Leírás |
|---------|--------|
| `SUPABASE_URL` | Project URL (Supabase Dashboard → Settings → API) |
| `SUPABASE_KEY` | anon/public key (Supabase Dashboard → Settings → API) |

## Fejlesztés

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

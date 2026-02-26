# MEKK - Kecskesajt Megrendelés Kezelő

Nuxt 3 alapú dashboard alkalmazás kecskesajt megrendelések kezelésére.

## Features

- Dashboard főoldal
- Header logóval és MEKK felirattal
- Új megrendelés gomb (placeholder)
- Megrendelések listája (üres állapot)
- Megrendelés kártya komponens (név, termék, ár)
- LocalStorage alapú perzisztencia (előkészítve)

## Stack

- Nuxt 3
- Tailwind CSS
- Pinia (localStorage perzisztencia)
- Zod
- TypeScript
- Google Fonts (Montserrat)

## Komponensek

- `AppLogo.vue` - Kék kör logó
- `AppHeader.vue` - Header (logó + MEKK + gomb)
- `OrderCard.vue` - Megrendelés kártya
- `OrderList.vue` - Megrendelések listája
- `pages/DashboardPage.vue` - Dashboard page komponens

## Környezeti változók

- `NUXT_PUBLIC_API_URL` - API URL
- `NUXT_PUBLIC_APP_URL` - Alkalmazás URL

## Telepítés


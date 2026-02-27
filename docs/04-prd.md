# Project specifikáció – Migrate Local Storage to Supabase (04-prd.md)

Ez a fájl a Nuxt 3 PWA webapp következő iterációját írja le: **LocalStorage teljes kiváltása Supabase backend perzisztenciával**.
A cél, hogy az alkalmazás kizárólag felhőalapú adattárolást használjon.

---

## 0) Általános irányelvek (MANDATORY)

* TypeScript mindenhol
* Tailwind CSS marad az elsődleges styling megoldás
* Minimalista, kis, jól szeparált komponensek
* Ne generálj tesztfájlokat
* `.env.example` és `README.md` frissítése kötelező, ha konfiguráció változik
* Ha bármely követelmény nem egyértelmű, **kérdezz vissza implementálás előtt**
* Nem használható semmilyen fallback vagy átmeneti storage mechanizmus

---

## 1) Cél (User Perspective)

A felhasználó szempontjából:

* Az adatok ne vesszenek el frissítéskor
* Az adatok több eszközön is elérhetők legyenek
* A feltöltött képek megbízhatóan betöltődjenek
* Az alkalmazás viselkedése ne változzon vizuálisan vagy UX szinten
* Autentikációt ebben az Iterációban még NEM valósítsuk meg

A változás kizárólag a háttérben történik:
**Browser-based storage → Supabase cloud persistence**

---

## 2) Feature Description

Az alkalmazás teljes mértékben kiváltja a `localStorage` használatát.

Supabase lesz az egyetlen adatforrás:

* Strukturált adatok → Supabase Database
* Képek és bináris fájlok → Supabase Storage
* Frontend csak ID-kat és URL-eket tárolhat

Tiltott:

* `localStorage`
* `sessionStorage`
* Bármilyen ideiglenes persistent fallback

---

## 3) Scope

### In Scope

* Minden `localStorage` hívás eltávolítása
* Supabase SDK integráció
* Adatok Supabase Database-ben tárolása
* Képfeltöltés Supabase Storage-be
* JavaScript migrációs script létrehozása

### Out of Scope

* Régi adatok migrálása böngészőből
* Offline mód
* Backup rendszer
* Verziókövetés

---

## 4) Technikai követelmények

### 4.1 Data Persistence

* Minden korábban `localStorage`-ben tárolt entitás Supabase táblába kerüljön
* CRUD műveletek Supabase SDK-n keresztül történjenek
* Minden rekord tartalmazzon:

  * egyedi ID
  * `created_at` timestamp
  * `updated_at` timestamp

Frontend:

* Nem tárolhat teljes adatstruktúrát lokálisan
* Csak ID vagy URL referenciák engedélyezettek

---

### 4.2 Image Storage

* Minden kép Supabase bucket-be kerüljön feltöltésre
* Adatbázisban kizárólag:

  * storage path vagy
  * public URL
* Kép bináris adat NEM tárolható adatbázis mezőben

---

### 4.3 Database Migration Script

Kötelező egy önállóan futtatható JavaScript migrációs script.

Elhelyezés:

```
db/migrations/
```

Feladata:

* Szükséges Supabase táblák definiálása
* Timestamp mezők létrehozása
* Storage referenciákhoz szükséges mezők létrehozása

Követelmény:

* A script reprodukálható adatbázis setupot biztosítson
* Futtatható legyen önállóan

---

## 5) Acceptance Criteria

* Nincs `localStorage.setItem`
* Nincs `localStorage.getItem`
* Nincs `localStorage.removeItem`
* Minden perzisztens adat Supabase Database-ben tárolódik
* Minden kép Supabase Storage-ból töltődik be
* Az adatbázisban csak image reference található
* Az alkalmazás frissítés után is megőrzi az adatokat
* Az alkalmazás több eszközön is konzisztens adatot mutat
* Létezik JavaScript migrációs fájl a `db/migrations` mappában

---

## 6) Definition of Done

A feature akkor tekinthető késznek, ha:

* Az alkalmazás teljes mértékben Supabase backend perzisztenciát használ
* Nincs semmilyen böngésző storage dependency
* A database setup reprodukálható migrációs scripttel
* Az alkalmazás funkcionalitása változatlan marad felhasználói nézőpontból

---

# FELADAT

1. Olvasd el teljesen a 04-prd.md fájlt.
2. Kövesd a mandatorikus szabályokat:

   * TypeScript mindenhol
   * Tailwind CSS elsődleges stílus
   * Minimalista, kis komponensek
   * Ne generálj tesztfájlokat
   * `.env.example` és `README.md` frissítése
3. Távolíts el minden `localStorage` használatot.
4. Integráld a Supabase SDK-t adat- és képtárolásra.
5. Hozd létre a `db/migrations` mappában a JavaScript migrációs scriptet.
6. Biztosítsd, hogy az alkalmazás teljesen működőképes maradjon.
7. Ha bármely döntés nem egyértelmű, állj meg és kérdezz vissza implementálás előtt.

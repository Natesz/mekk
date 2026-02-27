# Project specifikáció – Iteráció 3 (03-prd.md)

Ez a fájl a Nuxt 3 PWA webapp következő iterációját írja le: **Megrendelés részletes oldal (Ajánlat nézet) + Tab rendszer + Termék és Finanszírozás panelek + design finomhangolás**.
Auth és login továbbra sincs.

---

## 0) Általános irányelvek

* Tartsd be a korábbi **Claude Code szabályokat**:

  * TypeScript mindenhol
  * Tailwind CSS elsődleges stílus
  * Minimalista, kis komponensek
  * Ne generálj tesztfájlokat
  * `.env.example` és `README.md` frissítése
  * Ha bizonytalan vagy, **kérdezz vissza, mielőtt kódolnál**
* PWA maradjon működőképes:

  * Manifest és Service Worker változatlanul működjön
  * Offline élmény ne sérüljön
* Design legyen konzisztens az egész alkalmazásban
* Az oldal teljes háttere legyen világos szürke
* A belső panelek világosabb szürke háttérrel jelenjenek meg

---

## 1) Navigáció – Tovább gomb viselkedése

Az `/orders/new` oldalon:

* A **Tovább** gomb:

  1. Lefuttatja a teljes validációt
  2. Ha minden mező valid
  3. Navigál a Megrendelés részletes oldalra

* Az adatok ideiglenesen state-ben vagy store-ban kerüljenek átadásra

* Backend mentés NEM része ennek az iterációnak

---

## 2) Routing

* `/` → Dashboard
* `/orders/new` → Új megrendelés
* `/orders/:id` (vagy hasonló) → Megrendelés részletes oldal (Ajánlat nézet)

Navigáció:

* Logo kattintás → Dashboard
* Breadcrumb → hierarchia mutatása
* URL változzon navigációkor

---

## 3) Layout és felső szekció (Megrendelés oldal)

### 3.1 Logo és méretezés

* Dashboard vizuálisan ~25%-kal nagyobb
* Betűméretek arányosan növelve
* Logo ~40%-kal nagyobb
* Logo kattintásra navigáljon a Dashboardra

---

### 3.2 Breadcrumb

* Elhelyezés: közvetlenül a Logo alatt
* Formátum: „Főoldal > Megrendelés”
* „Főoldal” kattintható
* „Megrendelés” nem kattintható
* Balra igazítva

---

## 4) Ajánlat fejléc panel

Különálló fehér panel, lekerekített sarkokkal.

### Bal oldal

* Cím: **Ajánlat**
* Alatta: Érdeklődő adatai

  * Név
  * Telefonszám
  * Email cím

### Jobb oldal

* Cím: **Megrendelés**
* Azonosító formátum:

  * `K` + aktuális év utolsó két számjegye + 5 jegyű sorszám
  * Példa: `K2600001`
  * K fix
  * Év dinamikus (pl. 2026 → 26)
  * Sorszám 00001-től indul
  * Később adatbázis generálja, most frontend placeholder
* Státusz:

  * „Összeállítás alatt”

Ez a panel vizuálisan különüljön el az alatta lévő tab rendszertől.

---

## 5) Tab rendszer

Tabok sorrendben:

1. Általános
2. Megrendelés (alapértelmezett aktív)
3. Üzenetek (disabled)
4. Fizetés (disabled)

### Viselkedés

* Alapértelmezett aktív tab: **Megrendelés**
* Általános tab:

  * Visszavisz az Új megrendelés nézetbe
  * Minden mező read-only
  * Adatok nem módosíthatók
* Üzenetek és Fizetés:

  * Látható, de nem kattintható
  * Disabled state vizuálisan jelölve

---

## 6) Megrendelés Tab – Tartalom

### 6.1 Termék panel

Panel háttér: világos szürke

Tartalom:

* Dropdown

  * Label: „Termék neve”
  * Ideiglenes terméklista:

    * Friss Kecskesajt Natúr
    * Érlelt Kecskesajt
    * Füstölt Kecskesajt
    * Fűszeres Kecskesajt
    * Kecskesajt Tekercs Mézes

### Viselkedés

* Termék kiválasztása után:

  * A dropdown jobb oldalán jelenjen meg egy placeholder kép
  * Aktiválódjon a Finanszírozás panel tartalma

Megjegyzés:

* Termékek és képek később adatbázisból töltődnek

---

### 6.2 Finanszírozás panel

Alapállapot:

* Csak a „Finanszírozás” cím látható
* Belső mezők rejtve

Termék kiválasztása után:

* Panel tartalma megjelenik

Tartalom:

1. Elszámoló deviza dropdown:

   * HUF
   * EUR
   * CZK

2. Darabszám input:

   * Csak pozitív egész szám
   * Kötelező mező

---

## 7) Design követelmények

### 7.1 Lekerekítés

* Input mezők: erősen lekerekített sarkok
* Gombok: erősen lekerekített
* Panelek: egységes, nagy border-radius
* Design konzisztens az egész alkalmazásban

---

### 7.2 Színek

* Oldal háttér: világos szürke
* Belső panelek (Termék, Finanszírozás): világos szürke
* Ajánlat felső panel: fehér
* Tab tartalom fő panel: fehér
* Kék szín marad akció gomboknál és logónál

---

## 8) Reszponzivitás

Mobil nézetben:

* Panelek egymás alá rendeződnek
* Termékkép a dropdown alá kerül
* Azonosító és státusz blokk egymás alá törik
* Tabok vízszintesen görgethetők
* Inputok és gombok érintőbarát méretűek

---

## 9) Állapotkezelés (Minimum elvárás)

* Megrendelés azonosító ideiglenes frontend generálás
* Érdeklődő adatok state-ben tárolva
* Termék kiválasztás aktiválja Finanszírozás panelt
* Disabled tabok nem interaktívak

---

## 10) Nem része ennek az iterációnak

* Backend integráció
* Adatbázis mentés
* Valós fizetési logika
* Üzenetküldés
* Jogosultságkezelés

---

## 11) README és .env.example

* README frissítése az új Megrendelés oldal leírásával
* Routing és tab rendszer dokumentálása
* `.env.example` csak placeholder értékeket tartalmazzon
* Nincs titkos adat

---

# FELADAT

1. Olvasd el teljesen a 03-prd.md fájlt.
2. Kövesd pontosan a mandatorikus szabályokat:

   * TypeScript mindenhol
   * Tailwind CSS elsődleges stílus
   * Minimalista, kis komponensek
   * Ne generálj tesztfájlokat
   * `.env.example` és `README.md` frissítése
   * Ha bizonytalan vagy, kérdezz vissza
3. Generáld a Megrendelés részletes oldalt a fenti specifikáció szerint.
4. Biztosítsd:

   * Validáció utáni navigáció
   * Breadcrumb működés
   * Tab rendszer logika
   * Termék és Finanszírozás panel viselkedés
   * Reszponzív működés
   * Tailwind használata mindenhol
5. Töröld az összes tiltott / teszt fájlt (`__tests__`, `*.spec.ts`, Vitest/Jest, Playwright, Cypress`).
6. Frissítsd a README.md-t az új funkciókkal.
7. Frissítsd a `.env.example` fájlt placeholder értékekkel.
8. Ha bármely döntés nem egyértelmű, állj meg és kérdezz vissza, mielőtt folytatnád.

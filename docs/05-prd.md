# Project specifikáció – Iteráció 3 (05-prd.md)

Ez a fájl a Nuxt 3 PWA webapp következő iterációját írja le: **Dashboard és Új Megrendelés oldal fejlesztés, valós megrendelések listázása, Termék + Finanszírozás + Cím panel logika**

---

## 0) Általános irányelvek (MANDATORY)

* TypeScript mindenhol
* Tailwind CSS az elsődleges styling megoldás
* Minimalista, kis, jól szeparált komponensek
* Ne generálj tesztfájlokat
* `.env.example` és `README.md` frissítése kötelező
* Ha bármely követelmény nem egyértelmű, **kérdezz vissza implementálás előtt**
* Minden form validáció a létrehozás előtt kötelező

---

## 1) Dashboard

* Megjelenik a **logó** (kék házikó) a felső részen
* Logó alatt nagy felirat: **MEKK Főoldal** (viszonylag nagy betűmérettel)
* Lista a megrendelésekről:

  * Név, termék, darabszám, ár, státusz
  * Státusz badge-ek: Összeállítás alatt / Kiszállítás alatt / Teljesítve
* Új megrendelés gomb:

  * Kék háttér, fehér felirat
  * Nagyon kerekített sarkok, ha összébbnyomod szinte kör alak
  * Kattintás navigál az Új Megrendelés oldalra
* Breadcrumb logó előtt a kék házikó
* Logó alatt ne jelenjen meg a breadcrumb, csak a logó alatt legyen igazítva

---

## 2) Új Megrendelés oldal – Form layout

### Érdeklődő adatok

* Felirat: **Érdeklődő** (ne Ajánlat)
* Input mezők: név, telefon, email
* Telefon input: mobil nézetben nem lóghat ki a képernyőről
* Minden input mező nagyon kerekített, majdnem kör

### Termék panel

* Dropdown a termék kiválasztásához
* 5 db kecskesajt termék, árak 1500–5000 között, kerek számok
* Kiválasztáskor:

  * Megjelenik kép a dropdown alatt
  * Megjelenik az ár
* Dropdown jobb oldalán kék `v` jel, jelezve a lenyithatóságot

### Finanszírozás panel

* Megjelenik a Termék kiválasztása után
* Input mezők:

  * Elszámoló deviza dropdown (HUF, EUR, CZK)
  * Darabszám input
* Nagyon kerekített input mezők és gombok

### Cím panel

* Csak Termék kiválasztása után jelenik meg
* Megjelenés változik **Magánszemély** vs **Vállalkozás** esetén

#### Ország dropdown

* Európai országok listája

#### Magánszemély esetén

* Utca
* Házszám
* Város
* Irányítószám

#### Vállalkozás esetén

* Cégjegyzékszám
* Cégnév
* Székhely
* Kapcsolattartó név

### Megrendelés létrehozása

* Gomb legalul: **Megrendelés**
* Létrehozás előtt validáció:

  * Termék kiválasztva
  * Darabszám megadva
  * Elszámoló deviza kiválasztva
* Létrehozás után a megrendelés bekerül az **order táblába**, státusz: Összeállítás alatt

---

## 3) Routing és Breadcrumb

* Dashboard: `/`
* Új megrendelés: `/orders/new`
* Breadcrumb:

  * Kék házikó + Főoldal felirat
  * Logó alatt igazítva, ne bal oldalon
  * Navigáció rákattintva a Dashboardra

---

## 4) Stílus és layout

* Tailwind CSS + minimal custom CSS
* Nagyon kerekített gombok és input mezők, közel kör alakú szélek
* Dropdown jobb oldalán kék `v` jel
* Mobil nézetben input mezők ne lógjanak ki
* Dashboard logó alatt MEKK Főoldal felirat
* Panelok háttérszíne szürke, fő panel fehér, a belső panelek világos szürke

---

## 5) Acceptance Criteria

* Új megrendelés létrehozása csak érvényes adatokkal
* Termék kiválasztás után megjelenik ár és kép
* Cím panel csak akkor jelenik meg, ha termék kiválasztva
* Magánszemély és Vállalkozás esetén külön panel mezők
* Dashboardon a megrendelések listázása a táblázatban
* Breadcrumb és logó korrekt pozícióban
* Gombok és input mezők kerekítése minden oldalon és viewporton
* Telefon input mobilon nem lóg ki

---

## 6) Definition of Done

* Minden validáció implementálva
* Megrendelések létrehozása DB-be rögzítve
* Dashboardon látszanak a megrendelések
* UI reszponzív, minden input, gomb és dropdown a PRD szerint
* Stílus, breadcrumb és panel layout megfelel az iteráció követelményeinek

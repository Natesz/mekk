# Project specifikáció – Iteráció 4 (06-prd.md)

Ez a dokumentum a Nuxt 3 + Supabase alapú MEKK alkalmazás következő UI/UX és funkcionális iterációját írja le.

---

## 0) Kötelező alapelvek (MANDATORY)

* TypeScript mindenhol
* Tailwind CSS használata
* Komponens-alapú felépítés
* Reszponzív működés (mobil first)
* Ne generálj tesztfájlokat
* Ha bármely pont nem egyértelmű → implementálás előtt kérdezz vissza
* UI konzisztens zöld színrendszerre álljon át (kék teljes megszüntetése)

---

# 1) Globális UI módosítások

## 1.1 Főoldal gomb

* Jobb felső sarokban lévő "Főoldal" gomb TELJES eltávolítása
* Ez végleges eltávolítás, nem redesign

## 1.2 Színrendszer váltás

* Kék → Zöld színrendszer
* Gombok: zöld háttér
* Dropdown keretek: zöld
* Aktív elemek: zöld
* Badge-ek zöld árnyalatokkal

## 1.3 Logó

* Új logó a public/pictures mappából a logo1.png
* Fekete részek zöldre színezve (CSS filter vagy SVG fill megoldás)
* Breadcrumb közvetlenül a logó alatt jelenjen meg, nem bal oldalon

---

# 2) Gombok és input mezők

* Minden gomb nagyon erősen kerekített (szinte kapszula forma)
* Padding növelése az "Új megrendelés" gombon (top + bottom)
* Input mezők szintén kapszula formájúak
* Mobil nézetben ne lógjon ki semmilyen input


---

# 3) Dropdown viselkedés

* Nyitott állapotban is megtartja a lekerekített ívet
* A lista ne négyszög alakban jelenjen meg
* A lenyíló panel vizuálisan folytassa a zöld keretet
* Jobb oldalon zöld "v" ikon
* Lenyitott dropdownban már ne jelenjen meg a ,,Nincs elem kiválasztva,, és a ,,Válassz terméket,, opció
---

# 4) Új Megrendelés oldal – Strukturális átrendezés

## 4.1 Tab rendszer bevezetése

Az "Új Megrendelés" cím alatt tab navigáció jelenjen meg:

### Tab lista:

1. Rendelés (alapértelmezett aktív)
2. Érdeklődő
3. Termelőink
4. TOP
5. Fizetés (disabled)

---

# 5) Rendelés Tab

## 5.1 Termék panel (legfelül)

* Legelső panel
* 5 termék
* Képek public/pictures mappából product1 - első termék, product2 - második termék, product3 - harmadik termék, product4 - negyedik termék, product5 - ötödik termék
* Kiválasztás után megjelenik:

  * kép
  * ár
* Termék ár * darabszám számítás szükséges

(Megjegyzés: eldöntendő, hogy képek DB-ben referenciával vagy csak public mappából töltődnek – implementálás előtt tisztázni.)

## 5.2 Finanszírozás panel

* Csak termék kiválasztás után jelenik meg
* Elszámoló deviza
* Darabszám

## 5.3 Összesítő panel (új)

Panel neve: "Rendelés összesítő"

Tartalom:

* Egységár
* Darabszám
* Végösszeg (szorzat)
* Strukturált, vizuálisan kiemelt végösszeg

---

# 6) Érdeklődő Tab

* Érdeklődő panel ide kerül át
* Név
* Telefon
* Email
* Cím panel (korábbi logika szerint)

---

# 7) Termelőink Tab

## 7.1 Termelő bemutatása

Panel tartalom:

* Rövid történet
* Miért kezdett kecskesajtot készíteni
* Mióta csinálja
* Napi rutin: etetés, fejés kecskefejő géppel

## 7.2 Egészségügyi szabályozás panel

Tartalom:

* Minőségellenőrzés
* Hatósági ellenőrzések
* Élelmiszerbiztonsági előírások

## 7.3 Hazai támogatás szöveg

Szöveg megjelenítése:
"Hazai kistermelők támogatása, (v)egyél magyar terméket."

---

# 8) TOP Tab

Top termékek listázása fantázianevekkel:

* Bűzös Élvezet – fokhagymás kecskesajt
* Gazzabáló – zöldfűszeres kecskesajt
* További 2-3 kreatív név

Vizualizált lista kártyákban

---

# 9) Fizetés Tab

* Disabled állapot
* Nem implementált funkció

---

# 10) Breadcrumb

* "Főoldal > Megrendelés" mindig a logó alatt jelenjen meg
* Ne bal oldalon
* Ne szélső igazítással

---

# 11) Acceptance Criteria

* Főoldal gomb eltávolítva
* Színrendszer teljesen zöld
* Dropdown íves nyitott állapotban
* Tab rendszer működik
* Termék legfelül a Rendelés tabon
* Összesítő panel számol
* TOP tab tartalom megjelenik
* Termelői és szabályozási szöveg megjelenik
* Breadcrumb megfelelő helyen
* Mobil nézet hibamentes

---

# 12) Definition of Done

Az iteráció kész, ha:

* UI teljesen zöld színrendszerű
* Tab navigáció stabilan működik
* Számítás helyes
* Minden panel a megfelelő tab alatt jelenik meg
* Layout konzisztens és reszponzív
* Nincs kék UI elem az alkalmazásban

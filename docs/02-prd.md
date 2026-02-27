# Project specifikáció – Iteráció 2 (02-prd.md)

Ez a fájl a Nuxt 3 PWA webapp következő iterációját írja le: **Új megrendelés oldal + dashboard fejlesztés**, auth és login továbbra sincs.  

---

## 0) Általános irányelvek

- Tartsd be a korábbi **Claude Code szabályokat**:
  - TypeScript mindenhol
  - Tailwind CSS elsődleges stílus
  - Minimalista, kis komponensek
  - Ne generálj tesztfájlokat
  - `.env.example` és `README.md` frissítése
  - Ha bizonytalan vagy, **kérdezz vissza, mielőtt kódolnál**
- **PWA legyen**:
  - Manifest és Service Worker hozzáadva
  - Offline és telepíthető, mobilon app-szerű élmény
- A háttér színe legyen **kicsit szürkébb**, a belső keretek világosabb szürke.

---

## 1) Dashboard

- Bal felső sarok: **kék kör logó**  
- Logó alatt: **MEKK főoldal felirat**, ikon: kis kék ház  
- Lista a megrendelésekről vízszintesen (név, termék, ár) – ugyanaz, mint az Iteration 1  
- Új megrendelés gomb: **kék háttér, fehér szöveg**, kattintás navigáljon az **Új megrendelés oldalra**, URL: `/orders/new`  
- A dashboard és Új megrendelés oldalon is a fő tartalom **jobban középre igazítva** legyen a logó alá

---

## 2) Navigáció és Breadcrumbs (Új megrendelés oldal)

- Főoldal ikon (kék ház) és felirat:
  - Ha az **Új megrendelés oldalon** vagy, a **Főoldal kattintható**, visszavisz a dashboardra
- Breadcrumb:  
  - „Főoldal > Megrendelés”  
  - „> Megrendelés” ne legyen kattintható  
- Új megrendelés oldalon a „Új megrendelés” felirat nagyobb betűmérettel, beljebb, breadcrumb alatt

---

## 3) Új megrendelés oldal – Form layout

### Érdeklődő adatok

- Felirat keretben, világosabb szürke háttér
- **Általános adatok**: alatta, kicsit beljebb, háttér: dashboard színével egyező
- Input mezők:

1. **Érdeklődő**  
   - Ez a **megrendelő neve**  
   - Placeholder szürke, eltűnik fókusznál  
   - Ez a `customerName` mező része az Order típusban

2. **Hitelfelvevő típusa** dropdown:
   - Placeholder: „Nincs elem kiválasztva”
   - Opciók: „Magánszemély”, „Vállalkozás”
   - Alatta vékony vonal
   - Nem kell az Order típushoz adni

3. **Kapcsolattartó** input:
   - Ez egy **másik személy neve**, nem ugyanaz mint az érdeklődő  
   - Placeholder, eltűnik fókusznál  
   - Nem kell az Order típushoz adni

4. **Telefonszám** input:
   - +36 előhívó előre, nem szerkeszthető
   - Csak magyar előhívók: 20, 30, 50, 70
   - Utána **7 számjegy**
   - Azonnali validáció, ha kevesebb szám van
   - Nem kell az Order típushoz adni

5. **Email** input:
   - Standard email validáció
   - Nem kell az Order típushoz adni

### Gombok

- Jobbra alul:
  - **Mégse**: fehér háttér, kék keret → vissza a dashboardra
  - **Tovább**: kék háttér, fehér felirat → **csak validáljon és maradjon az oldalon**  
- Mielőtt tovább navigálna, fusson le **validáció**: minden mező kötelező, telefonszám és email validálva

---

## 4) Stílus és layout

- Tailwind CSS elsődleges, minimal custom CSS
- Jobbra-balra padding minden oldalon, középre igazítás a fő tartalomra (logó alatti részekre)
- Színek:
  - Kék: logó, gombok
  - Világos szürke: belső keretek, input háttér
  - Szürke: oldal háttér
- Inputok, dropdownok és gombok mérete egységes
- Igazítsd a Főoldal > Megrendelés breadcrumb azt igazítsd a Logo alá
- Legyen reszponzív, hogy mobilon is jól nézzek ki, és jól működjön

---

## 5) Routing

- `/` → Dashboard  
- `/orders/new` → Új megrendelés oldal  
- Navigáció:
  - Főoldal kattintással vissza a dashboardra
  - Breadcrumb mutatja a hierarchiát
- URL-ek változnak a navigációval

---

## 6) README és .env.example

- Frissítsd a README-t a dashboard, Új megrendelés oldal és navigáció leírásával  
- `.env.example`: minden placeholder, **nincs titkos adat**


FELADAT:

1. Olvasd el **teljesen** a fent megadott 02-prd.md fájlt.
2. Kövesd **pontosabban a mandatorikus szabályokat**:
   - TypeScript mindenhol
   - Tailwind CSS elsődleges stílus
   - Minimalista, kis komponensek
   - Ne generálj tesztfájlokat
   - `.env.example` és `README.md` frissítése
   - Ha bizonytalan vagy, **kérdezz vissza, mielőtt kódolnál**
3. Generáld a **Nuxt 3 PWA projekt fájlokat**, a dashboardot és az Új megrendelés oldalt a fenti specifikáció szerint.
4. Biztosítsd:
   - Navigáció a `/` → Dashboard, `/orders/new` → Új megrendelés
   - Breadcrumb logika
   - Input mezők + validációk a megadott szabályok szerint
   - Tailwind CSS használata mindenhol
   - Középre igazítás a logó alatti tartalmaknál
5. A generálás után töröld az összes **tiltott / teszt fájlt** (pl. `__tests__`, `*.spec.ts`, Vitest/Jest, Playwright, Cypress)
6. Frissítsd a `README.md`-t a funkciók, oldalak, navigáció és PWA leírásával
7. Frissítsd a `.env.example` fájlt minden placeholder-rel, **nincs titkos adat**
8. Ha bármely döntés nem egyértelmű, **állj meg és kérdezz vissza**, mielőtt folytatnád

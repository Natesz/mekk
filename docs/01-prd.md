# Prompt az Iteration 1 dashboard generálásához

Készíts egy Nuxt 3 alapú PWA webappot (PWA egy következő iterációban lesz) a következő specifikációk alapján.  

**Fő cél:** dashboard, ahol Kecskesajt megrendeléseket lehet majd felvenni (auth és login nélkül, ez az első iteráció).

**Dashboard layout:**
1. **Bal felső sarok:** kék körszerű logó (50x50px), egyszerű mintával.  
2. **Logó alatt:** MEKK felirat, betűtípus ami jól néz ki, 16px, fekete szín.  
3. **Megrendelések listája:** vízszintes elrendezés, minden tétel tartalmazza:
   - Megrendelő neve (balra)  
   - Megrendelt termék neve (középen)  
   - Termék ára (jobbra)  
   - Lista **még üres**, később adhatóak hozzá a megrendelések  

4. **Új megrendelés gomb:** a logótól jobbra, kék háttér, fehér szöveg, 100x40px.  
5. **Stílus:** mindenhol Tailwind CSS-t használj, minimális custom CSS.  
6. **Funkcionalitás:** statikus megjelenítés most, még nincs adatfeltöltés.  

**Project struktúra:**  
- `components/` → újrahasználható komponensek  
- `pages/` → Nuxt file-based routing  
- `composables/`, `stores/`, `services/`, `utils/` → későbbi logikák  
- `.env.example` és `README.md` frissítése a létrehozott komponensekről, layoutról  

**Fontos:**  
- Tartsd be a korábbi Claude Code szabályokat: TypeScript mindenhol, kérdezz, ha bármiben bizonytalan vagy.  
- Ne generálj tesztfájlokat.  
- A design a docs/pics/01-prd.png képre hasonlít, de az alapján csak a leírt elemeket valósítsd meg.  

Kérlek, **kérdezz vissza**, ha valamiben nem egyértelmű, mielőtt kódolnál.  

Header:

Bal felső: kék kör logó

Logó mellett: „Új megrendelés” gomb, kék háttér, fehér szöveg

Main content (Megrendelések):

Vízszintes lista megrendelések kártyái egymás alatt legyenek vízszintesen

Minden tétel tartalmaz: Megrendelő neve, Termék neve, Ár

Egyszerű, minimalista, nincs extra díszítés

Színek / stílus:

Kék logó és gomb: bg-blue-500

Betűk: fekete, Montserrat

Minimal Tailwind CSS, semmi felesleges CSS

Reszponzív:

Mobilon a sidebar alulra kerülhet, lista scrollolható vízszintesen
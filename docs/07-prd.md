# Project specifikáció – Iteráció 5 (07-prd.md)

Ez a dokumentum a MEKK alkalmazás véglegesítő iterációját írja le. Cél: vizuális korrekciók, validációs bug javítás, tab visszajelzések, dashboard mobil optimalizálás.

---

## 0) Kötelező alapelvek (MANDATORY)

* TypeScript mindenhol
* Tailwind CSS használata
* Ne generálj tesztfájlokat
* Ne vezess be új funkciót, csak az itt leírt módosításokat
* Ha bármi nem egyértelmű, implementálás előtt kérdezz vissza

---

# 1) Logó javítás

## 1.1 Logó forrás

* A logó forrása: `public/pictures/logo4.png`
* A korábbi CSS alapú átszínezés teljes eltávolítása
* Nem használható sem filter, sem background overlay

## 1.2 Méretezés

* A logó mérete maradjon pontosan akkora, mint a jelenlegi vizuális méret
* Csak a kép forrása változik
* A logó transzparenciája megmarad

---

# 2) Validációs bug javítás

## 2.1 Probléma

Ha az Érdeklődő tabon kattintunk a "Megrendelés" gombra, és:

* a Rendelés tabon hiányzik termék vagy darabszám

akkor:

* megjelenik a piros validációs hiba
* viszont ha utólag kitöltjük a hiányzó mezőt, a validációs hiba ott marad

## 2.2 Elvárt működés

* Validáció state reaktívan frissüljön
* Ha a hibás mező kitöltésre kerül, a hiba automatikusan eltűnjön
* Ne maradjon beragadt error state

---

# 3) Deviza egyszerűsítés

## 3.1 Rendelés tab módosítás

* Elszámoló deviza dropdown TELJES eltávolítása
* Deviza fixen: HUF
* UI-ban ne jelenjen meg deviza választó

---

# 4) Tab validáció visszajelzés

## 4.1 Követelmény

Ha a Megrendelés gombra kattintáskor:

* az egyik tabon hiányos adat van

akkor:

* az adott tab felirata legyen piros
* vizuálisan jelezze, hogy ott hiba van

Példa:

* Ha Érdeklődő adatai hiányoznak → "Érdeklődő" tab piros
* Ha Rendelés adatai hiányoznak → "Rendelés" tab piros

---

# 5) Sikeres megrendelés flow

## 5.1 Siker esetén

* Megrendelés mentése adatbázisba
* Automatikus navigáció vissza a Dashboard oldalra
* Az új megrendelés azonnal látható legyen a listában

---

# 6) Dashboard kártya mobil optimalizálás

## 6.1 Jelenlegi desktop layout

Desktop nézetben maradhat:

* Bal oldalon: Név
* Alatta: Termék
* Alatta: Státusz
* Jobb felső sarokban: darabszám + ár

## 6.2 Mobil nézet módosítás

Mobilon:

* Ne legyen jobb felső sarokba igazított blokk
* Minden adat egymás alatt jelenjen meg

Sorrend:

1. Név
2. Termék
3. Státusz
4. Végösszeg

## 6.3 Összeg megjelenítés

* Ne jelenjen meg: "5db - 1500 forint HUF"
* Csak a végösszeg jelenjen meg
* Formátum: pl. "7500 Ft"
* Szín: zöld
* Ne szerepeljen a "HUF" szöveg

---

# 7) Acceptance Criteria

* logo4.png használatban van
* Nincs zöld négyzet vagy CSS alapú logó styling
* Validáció reaktívan eltűnik hibajavítás után
* Deviza dropdown teljesen eltávolítva
* Tab cím piros lesz hiány esetén
* Sikeres mentés után dashboardra navigál
* Mobil dashboard layout egymás alatti struktúra
* Végösszeg zöld és "Ft" formátumú

---

# 8) Definition of Done

Az iteráció kész, ha:

* A logó vizuálisan megfelelően jelenik meg
* Nincs beragadt validációs hiba
* Tab hibajelzés működik
* Deviza fix HUF
* Mobil dashboard layout reszponzív és olvasható
* Sikeres rendelés után az új adat azonnal látható

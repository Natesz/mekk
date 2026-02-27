<template>
  <div class="space-y-4">
    <!-- Termelő bemutatása -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        Termelőnk bemutatása
      </h3>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Farmunkat a Zemplén-hegységben, egy kis faluban vezeti Molnár Géza, aki 15 éve kezdett el
          kecskéket tartani. Fiatal korában a nagyapjától tanulta meg a sajtkészítés alapjait, majd
          egy franciaországi utazás során megismerkedett a chèvre-el, a tradicionális
          kecskesajttal – és azonnal tudta, hogy ez lesz az ő útja.
        </p>
        <p>
          2009 óta foglalkozunk kecskesajt-készítéssel, azóta már 40+ kecskeünk van, és szezonálisan
          150–200 kg sajtot állítunk elő gondosan, kézzel.
        </p>
        <div class="bg-green-50 rounded-2xl p-4">
          <h4 class="font-semibold text-green-800 mb-3">Napi rutin</h4>
          <ul class="space-y-2 text-sm text-green-700">
            <li class="flex items-center gap-2">
              <span class="text-base">🐐</span>
              <span><strong>Reggel 6:00</strong> – Etetés és gondozás</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-base">🥛</span>
              <span><strong>Reggel 7:00</strong> – Fejés kecskefejő géppel</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-base">🧀</span>
              <span><strong>Délelőtt</strong> – Sajt-előkészítés, érlelés ellenőrzése</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-base">🐐</span>
              <span><strong>Este 17:00</strong> – Esti fejés és etetés</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Egészségügyi szabályozás -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        Minőség és szabályozás
      </h3>
      <div class="space-y-3">
        <div class="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h5 class="font-medium text-gray-800">Minőségellenőrzés</h5>
            <p class="text-sm text-gray-600 mt-0.5">
              Minden tételünk rendszeres laboratóriumi vizsgálaton esik át, amely garantálja a termék
              biztonságát és minőségét.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h5 class="font-medium text-gray-800">Hatósági ellenőrzések</h5>
            <p class="text-sm text-gray-600 mt-0.5">
              NÉBIH-engedéllyel rendelkező üzem, rendszeres hatósági ellenőrzések alatt működünk.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h5 class="font-medium text-gray-800">Élelmiszerbiztonsági előírások</h5>
            <p class="text-sm text-gray-600 mt-0.5">
              Teljes HACCP-megfelelőség, EU élelmiszerbiztonsági normák szerint működünk.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Hazai támogatás -->
    <div class="bg-green-600 rounded-2xl p-6 text-center shadow-sm">
      <p class="text-white text-lg font-semibold leading-relaxed">
        Hazai kistermelők támogatása, (v)egyél magyar terméket.
      </p>
    </div>
  </div>
</template>

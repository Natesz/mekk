<script setup lang="ts">
import { storeToRefs } from 'pinia'

defineProps<{
  borrowerType: string
}>()

const pendingOrderStore = usePendingOrderStore()
const {
  country,
  street,
  houseNumber,
  city,
  zipCode,
  companyRegNumber,
  companyName,
  headquarters,
  contactName
} = storeToRefs(pendingOrderStore)

const europeanCountries = [
  'Magyarország', 'Ausztria', 'Csehország', 'Lengyelország', 'Románia',
  'Szlovákia', 'Horvátország', 'Szerbia', 'Ukrajna', 'Németország',
  'Franciaország', 'Olaszország', 'Spanyolország', 'Hollandia', 'Belgium',
  'Svájc', 'Svédország', 'Norvégia', 'Dánia', 'Finnország',
  'Görögország', 'Portugália', 'Bulgária', 'Lettország', 'Litvánia',
  'Észtország', 'Szlovénia', 'Bosznia-Hercegovina', 'Montenegró', 'Albánia'
]
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-5">
    <h4 class="text-md font-semibold text-gray-800 mb-4">
      Cím
    </h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col gap-1 md:col-span-2">
        <label class="text-sm font-medium text-gray-700">
          Ország <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select
            v-model="country"
            class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
          >
            <option v-for="c in europeanCountries" :key="c" :value="c">
              {{ c }}
            </option>
          </select>
          <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <template v-if="borrowerType === 'individual'">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Utca</label>
          <input
            v-model="street"
            type="text"
            placeholder="Kossuth utca"
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Házszám</label>
          <input
            v-model="houseNumber"
            type="text"
            placeholder="12/A"
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Város</label>
          <input
            v-model="city"
            type="text"
            placeholder="Budapest"
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Irányítószám</label>
          <input
            v-model="zipCode"
            type="text"
            placeholder="1234"
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
      </template>

      <template v-else-if="borrowerType === 'business'">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Cégjegyzékszám</label>
          <input
            v-model="companyRegNumber"
            type="text"
            placeholder="01-09-123456"
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Cégnév</label>
          <input
            v-model="companyName"
            type="text"
            placeholder="Példa Kft."
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1 md:col-span-2">
          <label class="text-sm font-medium text-gray-700">Székhely</label>
          <input
            v-model="headquarters"
            type="text"
            placeholder="1234 Budapest, Kossuth utca 1."
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1 md:col-span-2">
          <label class="text-sm font-medium text-gray-700">Kapcsolattartó név</label>
          <input
            v-model="contactName"
            type="text"
            placeholder="Kovács János"
            class="px-4 py-2 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
      </template>
    </div>
  </div>
</template>

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

const countryOptions = europeanCountries.map(c => ({ value: c, label: c }))

const inputClass = 'px-4 py-2 border-2 border-green-300 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-colors'
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-5">
    <h4 class="text-md font-semibold text-gray-800 mb-4">
      Cím
    </h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col gap-1 md:col-span-2">
        <FormsSelectField
          v-model="country"
          label="Ország"
          :options="countryOptions"
          placeholder="Válassz országot"
          required
        />
      </div>

      <template v-if="borrowerType === 'individual'">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Utca</label>
          <input v-model="street" type="text" placeholder="Kossuth utca" :class="inputClass" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Házszám</label>
          <input v-model="houseNumber" type="text" placeholder="12/A" :class="inputClass" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Város</label>
          <input v-model="city" type="text" placeholder="Budapest" :class="inputClass" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Irányítószám</label>
          <input v-model="zipCode" type="text" placeholder="1234" :class="inputClass" />
        </div>
      </template>

      <template v-else-if="borrowerType === 'business'">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Cégjegyzékszám</label>
          <input v-model="companyRegNumber" type="text" placeholder="01-09-123456" :class="inputClass" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Cégnév</label>
          <input v-model="companyName" type="text" placeholder="Példa Kft." :class="inputClass" />
        </div>
        <div class="flex flex-col gap-1 md:col-span-2">
          <label class="text-sm font-medium text-gray-700">Székhely</label>
          <input v-model="headquarters" type="text" placeholder="1234 Budapest, Kossuth utca 1." :class="inputClass" />
        </div>
        <div class="flex flex-col gap-1 md:col-span-2">
          <label class="text-sm font-medium text-gray-700">Kapcsolattartó név</label>
          <input v-model="contactName" type="text" placeholder="Kovács János" :class="inputClass" />
        </div>
      </template>
    </div>
  </div>
</template>

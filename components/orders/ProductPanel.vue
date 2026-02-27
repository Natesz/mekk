<script setup lang="ts">
const pendingOrderStore = usePendingOrderStore()

const products = [
  'Friss Kecskesajt Natúr',
  'Érlelt Kecskesajt',
  'Füstölt Kecskesajt',
  'Fűszeres Kecskesajt',
  'Kecskesajt Tekercs Mézes'
]

function handleProductChange(event: Event): void {
  const target = event.target as HTMLSelectElement
  pendingOrderStore.setProduct(target.value)
}
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-5">
    <h4 class="text-md font-semibold text-gray-800 mb-4">
      Termék
    </h4>

    <div class="flex flex-col md:flex-row gap-4 items-start">
      <div class="flex flex-col gap-1 flex-1">
        <label class="text-sm font-medium text-gray-700">
          Termék neve <span class="text-red-500">*</span>
        </label>
        <select
          :value="pendingOrderStore.selectedProduct"
          class="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
          :class="!pendingOrderStore.selectedProduct ? 'text-gray-400' : ''"
          @change="handleProductChange"
        >
          <option value="" disabled>
            Válassz terméket
          </option>
          <option
            v-for="product in products"
            :key="product"
            :value="product"
          >
            {{ product }}
          </option>
        </select>
      </div>

      <div
        v-if="pendingOrderStore.selectedProduct"
        class="w-full md:w-40 h-32 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0"
      >
        <div class="text-center text-gray-400">
          <svg class="w-10 h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="text-xs">Termékkép</span>
        </div>
      </div>
    </div>
  </div>
</template>

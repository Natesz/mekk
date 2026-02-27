<script setup lang="ts">
const pendingOrderStore = usePendingOrderStore()

const products = [
  { name: 'Friss Kecskesajt Natúr', price: 1500 },
  { name: 'Érlelt Kecskesajt', price: 2500 },
  { name: 'Füstölt Kecskesajt', price: 3000 },
  { name: 'Fűszeres Kecskesajt', price: 2000 },
  { name: 'Kecskesajt Tekercs Mézes', price: 5000 }
]

defineProps<{
  error?: string
}>()

function handleProductChange(event: Event): void {
  const target = event.target as HTMLSelectElement
  const product = products.find(p => p.name === target.value)
  pendingOrderStore.setProduct(target.value)
  pendingOrderStore.setProductPrice(product?.price ?? 0)
}

function formatPrice(price: number): string {
  return price.toLocaleString('hu-HU')
}
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-5">
    <h4 class="text-md font-semibold text-gray-800 mb-4">
      Termék
    </h4>

    <div class="flex flex-col md:flex-row gap-4 items-start">
      <div class="flex flex-col gap-1 flex-1 w-full">
        <label class="text-sm font-medium text-gray-700">
          Termék neve <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select
            :value="pendingOrderStore.selectedProduct"
            class="w-full px-4 py-2 pr-10 border rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
            :class="[
              error ? 'border-red-500' : 'border-gray-300',
              !pendingOrderStore.selectedProduct ? 'text-gray-400' : ''
            ]"
            @change="handleProductChange"
          >
            <option value="" disabled>
              Válassz terméket
            </option>
            <option
              v-for="product in products"
              :key="product.name"
              :value="product.name"
            >
              {{ product.name }}
            </option>
          </select>
          <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <span v-if="error" class="text-sm text-red-500">{{ error }}</span>

        <div v-if="pendingOrderStore.selectedProduct" class="mt-2 text-lg font-bold text-blue-600">
          {{ formatPrice(pendingOrderStore.productPrice) }} Ft / db
        </div>
      </div>

      <div
        v-if="pendingOrderStore.selectedProduct"
        class="w-full md:w-40 h-32 bg-gray-200 rounded-2xl flex items-center justify-center shrink-0"
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

<script setup lang="ts">
const pendingOrderStore = usePendingOrderStore()

const total = computed(() => {
  return pendingOrderStore.productPrice * Number(pendingOrderStore.quantity || 0)
})

function formatPrice(price: number): string {
  return price.toLocaleString('hu-HU')
}
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-5">
    <h4 class="text-md font-semibold text-gray-800 mb-4">
      Rendelés összesítő
    </h4>

    <div class="space-y-3">
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600">Egységár</span>
        <span class="font-medium text-gray-900">
          {{ formatPrice(pendingOrderStore.productPrice) }} Ft
        </span>
      </div>

      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600">Darabszám</span>
        <span class="font-medium text-gray-900">
          {{ pendingOrderStore.quantity || 0 }} db
        </span>
      </div>

      <div class="border-t border-gray-200 pt-3 flex justify-between items-center">
        <span class="font-semibold text-gray-800">Végösszeg</span>
        <span class="text-2xl font-bold text-green-600">
          {{ formatPrice(total) }} Ft
        </span>
      </div>
    </div>
  </div>
</template>

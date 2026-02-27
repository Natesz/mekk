<script setup lang="ts">
defineProps<{
  productError?: string
  quantityError?: string
}>()

const pendingOrderStore = usePendingOrderStore()
</script>

<template>
  <div class="space-y-4">
    <!-- Termék panel -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <OrdersProductPanel :error="productError" />
    </div>

    <!-- Finanszírozás + Összesítő: csak termék kiválasztás után -->
    <template v-if="pendingOrderStore.selectedProduct">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <OrdersFinancingPanel :quantity-error="quantityError" />
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <OrdersOrderSummaryPanel />
      </div>
    </template>
  </div>
</template>

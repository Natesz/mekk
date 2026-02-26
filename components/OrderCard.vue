<script setup lang="ts">
import type { Order } from '~/types/order'

defineProps<{
  order: Order
}>()

function formatPrice(price: number): string {
  return `${price.toLocaleString('hu-HU')} Ft`
}
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm min-w-[280px]">
    <div class="flex justify-between items-center gap-4">
      <span class="font-medium text-gray-900">
        {{ order.customerName }}
      </span>
      <span class="text-gray-600">
        {{ order.productName }}
      </span>
      <span class="font-semibold text-gray-900">
        {{ formatPrice(order.price) }}
      </span>
    </div>
  </div>
</template>

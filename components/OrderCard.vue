<script setup lang="ts">
import type { Order } from '~/types/order'
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '~/types/order'

defineProps<{
  order: Order
}>()

function formatPrice(price: number): string {
  return `${price.toLocaleString('hu-HU')} Ft`
}
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
    <div class="flex flex-wrap justify-between items-start gap-3">
      <div class="min-w-0">
        <p class="font-semibold text-gray-900 truncate">
          {{ order.customerName }}
        </p>
        <p class="text-sm text-gray-600 mt-0.5">
          {{ order.productName }}
        </p>
      </div>

      <div class="text-right shrink-0">
        <p class="text-sm text-gray-700 font-medium">
          {{ order.quantity }} db · {{ formatPrice(order.price) }}
        </p>
        <p class="text-xs text-gray-500">
          {{ order.currency }}
        </p>
      </div>
    </div>

    <div class="mt-3">
      <span
        class="inline-block px-3 py-1 text-xs font-medium rounded-full"
        :class="ORDER_STATUS_COLORS[order.status]"
      >
        {{ ORDER_STATUS_LABELS[order.status] }}
      </span>
    </div>
  </div>
</template>

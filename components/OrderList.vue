<script setup lang="ts">
import type { Order } from '~/types/order'

defineProps<{
  orders: Order[]
}>()
</script>

<template>
  <div>
    <div
      v-if="orders.length === 0"
      class="text-gray-500 text-center py-8"
    >
      Még nincsenek megrendelések.
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      <OrderCard
        v-for="order in orders"
        :key="order.id"
        :order="order"
      />
    </div>
  </div>
</template>

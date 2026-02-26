<script setup lang="ts">
import type { Order } from '~/types/order'

const props = defineProps<{
  orders: Order[]
}>()
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      Megrendelések
    </h2>

    <div
      v-if="props.orders.length === 0"
      class="text-gray-500 text-center py-8"
    >
      Még nincsenek megrendelések.
    </div>

    <div
      v-else
      class="flex flex-col gap-3"
    >
      <OrderCard
        v-for="order in props.orders"
        :key="order.id"
        :order="order"
      />
    </div>
  </div>
</template>

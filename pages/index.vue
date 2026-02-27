<script setup lang="ts">
const ordersStore = useOrdersStore()

onMounted(async () => {
  await ordersStore.loadOrders()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader :show-new-order-button="true" :is-home-link-active="false" />

    <main class="max-w-4xl mx-auto py-6 px-4">
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <div v-if="ordersStore.loading" class="text-gray-400 text-center py-8">
          Betöltés...
        </div>
        <div v-else-if="ordersStore.error" class="text-red-500 text-center py-8">
          {{ ordersStore.error }}
        </div>
        <OrderList v-else :orders="ordersStore.orders" />
      </div>
    </main>
  </div>
</template>

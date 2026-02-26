<script setup lang="ts">
const ordersStore = useOrdersStore()

onMounted(() => {
  ordersStore.loadFromLocalStorage()
})

function handleNewOrder(): void {
  // Később implementáljuk - most csak placeholder
  console.log('Új megrendelés gomb megnyomva')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader @new-order="handleNewOrder" />

    <main>
      <OrderList :orders="ordersStore.orders" />
    </main>
  </div>
</template>

<script setup lang="ts">
const breadcrumbItems = [
  { label: 'Főoldal', to: '/' },
  { label: 'Megrendelés' }
]

const pendingOrderStore = usePendingOrderStore()

onMounted(() => {
  pendingOrderStore.resetOrder()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader :show-new-order-button="false" :breadcrumb-items="breadcrumbItems" />

    <main class="max-w-4xl mx-auto px-4 py-4">
      <h1 class="text-2xl font-bold text-gray-900 mb-4 ml-2">
        Új megrendelés
      </h1>

      <OrdersOrderForm />
    </main>
  </div>
</template>

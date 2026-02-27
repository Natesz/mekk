<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pendingOrderStore = usePendingOrderStore()

const orderId = computed(() => String(route.params.id))
const activeTab = ref<'general' | 'order'>('order')

const breadcrumbItems = [
  { label: 'Főoldal', to: '/' },
  { label: 'Megrendelés' }
]

onMounted(() => {
  if (!pendingOrderStore.formData || pendingOrderStore.orderId !== orderId.value) {
    router.replace('/')
  }
})

function setActiveTab(tab: 'general' | 'order'): void {
  activeTab.value = tab
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader :show-new-order-button="false" :breadcrumb-items="breadcrumbItems" />

    <main class="max-w-4xl mx-auto px-4 py-4 space-y-4">
      <OrdersOrderDetailHeader
        :order-id="orderId"
        :form-data="pendingOrderStore.formData"
      />

      <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
        <OrdersOrderTabs
          :active-tab="activeTab"
          @update:active-tab="setActiveTab"
        />

        <div class="p-6">
          <OrdersTabsGeneralTab
            v-if="activeTab === 'general'"
            :form-data="pendingOrderStore.formData"
          />
          <OrdersTabsOrderTab v-else-if="activeTab === 'order'" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const {
  formData,
  errors,
  validateForm,
  validateEmail,
  validatePhone,
  setCustomerName,
  setBorrowerType,
  setPhonePrefix,
  setPhoneNumber,
  setEmail
} = useOrderForm()

const router = useRouter()
const pendingOrderStore = usePendingOrderStore()
const ordersStore = useOrdersStore()

const activeTab = ref('rendeles')
const productError = ref('')
const quantityError = ref('')
const isCreating = ref(false)

const errorTabs = computed(() => {
  const tabs: string[] = []
  if (productError.value || quantityError.value) tabs.push('rendeles')
  if (errors.customerName || errors.borrowerType || errors.phoneNumber || errors.email) tabs.push('erdeklodo')
  return tabs
})

watch(() => pendingOrderStore.selectedProduct, (val) => {
  if (val && productError.value) productError.value = ''
})

watch(() => pendingOrderStore.quantity, (val) => {
  if (val && Number(val) >= 1 && quantityError.value) quantityError.value = ''
})

function handleBorrowerTypeChange(value: string): void {
  setBorrowerType(value as 'individual' | 'business' | '')
}

async function handleCreateOrder(): Promise<void> {
  productError.value = ''
  quantityError.value = ''

  const customerValid = validateForm()

  if (!pendingOrderStore.selectedProduct) {
    productError.value = 'Válassz terméket'
  }
  if (!pendingOrderStore.quantity || Number(pendingOrderStore.quantity) < 1) {
    quantityError.value = 'Add meg a darabszámot'
  }

  if (!customerValid || productError.value || quantityError.value) return

  isCreating.value = true
  try {
    const orderId = generateOrderId(ordersStore.orderCount + 1)
    await ordersStore.addOrder({
      id: orderId,
      customerName: formData.customerName,
      productName: pendingOrderStore.selectedProduct,
      price: pendingOrderStore.productPrice,
      quantity: Number(pendingOrderStore.quantity),
      currency: 'HUF',
      status: 'assembling'
    })
    pendingOrderStore.resetOrder()
    router.push('/')
  } finally {
    isCreating.value = false
  }
}
</script>

<template>
  <div class="space-y-4">
    <!-- Tab navigáció -->
    <OrdersNewOrderTabs
      v-model:active-tab="activeTab"
      :error-tabs="errorTabs"
    />

    <!-- Rendelés tab -->
    <OrdersNewTabsRendelesTab
      v-if="activeTab === 'rendeles'"
      :product-error="productError"
      :quantity-error="quantityError"
    />

    <!-- Érdeklődő tab -->
    <OrdersNewTabsErdeklodoTab
      v-else-if="activeTab === 'erdeklodo'"
      :form-data="formData"
      :errors="errors"
      @update:customer-name="setCustomerName"
      @update:borrower-type="handleBorrowerTypeChange"
      @update:phone-prefix="setPhonePrefix"
      @update:phone-number="setPhoneNumber"
      @update:email="setEmail"
      @validate-phone="validatePhone"
      @validate-email="validateEmail"
    />

    <!-- Termelőink tab -->
    <OrdersNewTabsTermeloinkTab v-else-if="activeTab === 'termeloink'" />

    <!-- TOP tab -->
    <OrdersNewTabsTopTab v-else-if="activeTab === 'top'" />

    <!-- Fizetés tab -->
    <OrdersNewTabsFizetesTab v-else-if="activeTab === 'fizetes'" />

    <!-- Megrendelés gomb -->
    <div
      v-if="activeTab === 'rendeles' || activeTab === 'erdeklodo'"
      class="flex justify-end pt-2"
    >
      <button
        type="button"
        :disabled="isCreating"
        class="px-10 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
        @click="handleCreateOrder"
      >
        {{ isCreating ? 'Mentés...' : 'Megrendelés' }}
      </button>
    </div>
  </div>
</template>

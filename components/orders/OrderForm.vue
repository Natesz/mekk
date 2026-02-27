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

const borrowerTypeOptions = [
  { value: 'individual', label: 'Magánszemély' },
  { value: 'business', label: 'Vállalkozás' }
]

const productError = ref('')
const quantityError = ref('')
const isCreating = ref(false)

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
      currency: pendingOrderStore.currency,
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
    <!-- Érdeklődő adatok -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        Érdeklődő
      </h3>

      <div class="bg-gray-50 rounded-2xl p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormsInputField
            :model-value="formData.customerName"
            label="Érdeklődő neve"
            placeholder="Kovács János"
            :error="errors.customerName"
            required
            @update:model-value="setCustomerName"
          />

          <FormsSelectField
            :model-value="formData.borrowerType"
            label="Hitelfelvevő típusa"
            :options="borrowerTypeOptions"
            placeholder="Nincs elem kiválasztva"
            :error="errors.borrowerType"
            required
            @update:model-value="handleBorrowerTypeChange"
          />

          <FormsPhoneInput
            :phone-prefix="formData.phonePrefix"
            :phone-number="formData.phoneNumber"
            :error="errors.phoneNumber"
            required
            @update:phone-prefix="setPhonePrefix"
            @update:phone-number="setPhoneNumber"
            @blur="validatePhone"
          />

          <FormsInputField
            :model-value="formData.email"
            label="Email"
            type="email"
            placeholder="pelda@email.com"
            :error="errors.email"
            required
            @update:model-value="setEmail"
            @blur="validateEmail"
          />
        </div>
      </div>
    </div>

    <!-- Termék panel -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <OrdersProductPanel :error="productError" />
    </div>

    <!-- Finanszírozás + Cím: csak termék után -->
    <template v-if="pendingOrderStore.selectedProduct">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <OrdersFinancingPanel :quantity-error="quantityError" />
      </div>

      <div
        v-if="formData.borrowerType"
        class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
      >
        <OrdersAddressPanel :borrower-type="formData.borrowerType" />
      </div>
    </template>

    <!-- Megrendelés gomb -->
    <div class="flex justify-end pt-2">
      <button
        type="button"
        :disabled="isCreating"
        class="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        @click="handleCreateOrder"
      >
        {{ isCreating ? 'Mentés...' : 'Megrendelés' }}
      </button>
    </div>
  </div>
</template>

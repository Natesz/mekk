<script setup lang="ts">
const {
  formData,
  errors,
  validateForm,
  validateEmail,
  validatePhone,
  setCustomerName,
  setBorrowerType,
  setContactPerson,
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

function handleCancel(): void {
  router.push('/')
}

function handleSubmit(): void {
  const isValid = validateForm()
  if (isValid) {
    const orderId = generateOrderId(ordersStore.orderCount + 1)
    pendingOrderStore.setOrder({ ...formData }, orderId)
    router.push(`/orders/${orderId}`)
  }
}

function handleBorrowerTypeChange(value: string): void {
  setBorrowerType(value as 'individual' | 'business' | '')
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
      Érdeklődő adatok
    </h3>

    <div class="bg-gray-50 rounded-2xl p-4">
      <h4 class="text-md font-medium text-gray-700 mb-6">
        Általános adatok
      </h4>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormsInputField
          :model-value="formData.customerName"
          label="Érdeklődő"
          placeholder="Érdeklődő"
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

        <FormsInputField
          :model-value="formData.contactPerson"
          label="Kapcsolattartó"
          placeholder="Kapcsolattartó"
          :error="errors.contactPerson"
          required
          @update:model-value="setContactPerson"
        />

        <div class="hidden md:block" />

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

    <div class="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-200">
      <button
        type="button"
        class="px-6 py-2 bg-white border-2 border-blue-500 text-blue-500 font-medium rounded-xl hover:bg-blue-50 transition-colors"
        @click="handleCancel"
      >
        Mégse
      </button>
      <button
        type="button"
        class="px-6 py-2 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
        @click="handleSubmit"
      >
        Tovább
      </button>
    </div>
  </div>
</template>

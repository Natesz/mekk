<script setup lang="ts">
import type { OrderFormData, OrderFormErrors } from '~/types/order-form'

interface Props {
  formData: OrderFormData
  errors: OrderFormErrors
}

defineProps<Props>()

defineEmits<{
  'update:customerName': [value: string]
  'update:borrowerType': [value: string]
  'update:phonePrefix': [value: string]
  'update:phoneNumber': [value: string]
  'update:email': [value: string]
  validatePhone: []
  validateEmail: []
}>()

const borrowerTypeOptions = [
  { value: 'individual', label: 'Magánszemély' },
  { value: 'business', label: 'Vállalkozás' }
]
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
            @update:model-value="$emit('update:customerName', $event)"
          />

          <FormsSelectField
            :model-value="formData.borrowerType"
            label="Hitelfelvevő típusa"
            :options="borrowerTypeOptions"
            placeholder="Nincs elem kiválasztva"
            :error="errors.borrowerType"
            required
            @update:model-value="$emit('update:borrowerType', $event)"
          />

          <FormsPhoneInput
            :phone-prefix="formData.phonePrefix"
            :phone-number="formData.phoneNumber"
            :error="errors.phoneNumber"
            required
            @update:phone-prefix="$emit('update:phonePrefix', $event)"
            @update:phone-number="$emit('update:phoneNumber', $event)"
            @blur="$emit('validatePhone')"
          />

          <FormsInputField
            :model-value="formData.email"
            label="Email"
            type="email"
            placeholder="pelda@email.com"
            :error="errors.email"
            required
            @update:model-value="$emit('update:email', $event)"
            @blur="$emit('validateEmail')"
          />
        </div>
      </div>
    </div>

    <!-- Cím panel -->
    <div
      v-if="formData.borrowerType"
      class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
    >
      <OrdersAddressPanel :borrower-type="formData.borrowerType" />
    </div>
  </div>
</template>

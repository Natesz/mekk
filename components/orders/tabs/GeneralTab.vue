<script setup lang="ts">
import type { OrderFormData } from '~/types/order-form'

defineProps<{
  formData: OrderFormData | null
}>()
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
      Érdeklődő adatok
    </h3>

    <div class="bg-gray-50 rounded-2xl p-4">
      <h4 class="text-md font-medium text-gray-700 mb-6">
        Általános adatok
      </h4>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-gray-700">Érdeklődő</span>
          <div class="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-100 text-gray-700">
            {{ formData?.customerName || '—' }}
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-gray-700">Hitelfelvevő típusa</span>
          <div class="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-100 text-gray-700">
            {{ formData ? borrowerTypeLabel(formData.borrowerType) : '—' }}
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-gray-700">Telefonszám</span>
          <div class="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-100 text-gray-700">
            {{ formData ? formatPhoneDisplay(formData.phonePrefix, formData.phoneNumber) : '—' }}
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-sm font-medium text-gray-700">Email</span>
          <div class="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-100 text-gray-700">
            {{ formData?.email || '—' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

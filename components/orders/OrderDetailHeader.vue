<script setup lang="ts">
import type { OrderFormData } from '~/types/order-form'

defineProps<{
  orderId: string
  formData: OrderFormData | null
}>()
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-6">
    <div class="flex flex-col md:flex-row justify-between gap-6">
      <div>
        <h2 class="text-base font-bold text-gray-500 uppercase tracking-wide mb-3">
          Ajánlat
        </h2>
        <div class="space-y-1">
          <p class="text-lg font-semibold text-gray-900">
            {{ formData?.customerName || '—' }}
          </p>
          <p class="text-sm text-gray-600">
            {{ formData ? formatPhoneDisplay(formData.phonePrefix, formData.phoneNumber) : '—' }}
          </p>
          <p class="text-sm text-gray-600">
            {{ formData?.email || '—' }}
          </p>
        </div>
      </div>

      <div class="md:text-right">
        <h2 class="text-base font-bold text-gray-500 uppercase tracking-wide mb-3">
          Megrendelés
        </h2>
        <p class="text-xl font-bold text-gray-900 font-mono">
          {{ orderId }}
        </p>
        <span class="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-xl">
          Összeállítás alatt
        </span>
      </div>
    </div>
  </div>
</template>

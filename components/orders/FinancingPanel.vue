<script setup lang="ts">
const pendingOrderStore = usePendingOrderStore()

defineProps<{
  quantityError?: string
}>()

const currencyOptions = [
  { value: 'HUF', label: 'HUF' },
  { value: 'EUR', label: 'EUR' },
  { value: 'CZK', label: 'CZK' }
]

function handleCurrencyChange(event: Event): void {
  const target = event.target as HTMLSelectElement
  pendingOrderStore.setCurrency(target.value)
}

function handleQuantityInput(event: Event): void {
  const target = event.target as HTMLInputElement
  const value = target.value.replace(/[^0-9]/g, '')
  pendingOrderStore.setQuantity(value)
}
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-5">
    <h4 class="text-md font-semibold text-gray-800 mb-4">
      Finanszírozás
    </h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-700">
          Elszámoló deviza <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select
            :value="pendingOrderStore.currency"
            class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
            @change="handleCurrencyChange"
          >
            <option v-for="option in currencyOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-700">
          Darabszám <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          inputmode="numeric"
          :value="pendingOrderStore.quantity"
          placeholder="pl. 10"
          class="px-4 py-2 border rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          :class="quantityError ? 'border-red-500' : 'border-gray-300'"
          @input="handleQuantityInput"
        />
        <span v-if="quantityError" class="text-sm text-red-500">{{ quantityError }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pendingOrderStore = usePendingOrderStore()

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

    <div
      v-if="pendingOrderStore.selectedProduct"
      class="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-700">
          Elszámoló deviza <span class="text-red-500">*</span>
        </label>
        <select
          :value="pendingOrderStore.currency"
          class="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
          @change="handleCurrencyChange"
        >
          <option
            v-for="option in currencyOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
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
          class="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          @input="handleQuantityInput"
        />
      </div>
    </div>

    <p
      v-else
      class="text-sm text-gray-400 italic"
    >
      Válassz terméket a finanszírozási adatok megadásához.
    </p>
  </div>
</template>

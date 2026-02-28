<script setup lang="ts">
const pendingOrderStore = usePendingOrderStore()

defineProps<{
  quantityError?: string
}>()

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

    <div class="flex flex-col gap-1">
      <label class="text-sm font-medium text-gray-700">
        Darabszám <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        inputmode="numeric"
        :value="pendingOrderStore.quantity"
        placeholder="pl. 10"
        class="px-4 py-2 border-2 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-colors"
        :class="quantityError ? 'border-red-500' : 'border-green-300'"
        @input="handleQuantityInput"
      />
      <span v-if="quantityError" class="text-sm text-red-500">{{ quantityError }}</span>
    </div>
  </div>
</template>

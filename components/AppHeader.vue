<script setup lang="ts">
const emit = defineEmits<{
  newOrder: []
}>()

function handleNewOrder(): void {
  emit('newOrder')
}
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center">
        <AppLogo />
        <span class="text-base font-semibold text-black mt-1">
          MEKK
        </span>
      </div>

      <button
        type="button"
        class="w-[100px] h-[40px] bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition-colors"
        @click="handleNewOrder"
      >
        Új megrendelés
      </button>
    </div>
  </header>
</template>

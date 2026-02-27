<script setup lang="ts">
type ActiveTab = 'general' | 'order'

defineProps<{
  activeTab: ActiveTab
}>()

const emit = defineEmits<{
  'update:activeTab': [tab: ActiveTab]
}>()

function setTab(tab: ActiveTab): void {
  emit('update:activeTab', tab)
}
</script>

<template>
  <div class="flex overflow-x-auto border-b border-gray-200">
    <button
      type="button"
      class="px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
      :class="activeTab === 'general'
        ? 'border-blue-500 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700'"
      @click="setTab('general')"
    >
      Általános
    </button>

    <button
      type="button"
      class="px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
      :class="activeTab === 'order'
        ? 'border-blue-500 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700'"
      @click="setTab('order')"
    >
      Megrendelés
    </button>

    <button
      type="button"
      disabled
      class="px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent text-gray-300 cursor-not-allowed"
    >
      Üzenetek
    </button>

    <button
      type="button"
      disabled
      class="px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent text-gray-300 cursor-not-allowed"
    >
      Fizetés
    </button>
  </div>
</template>

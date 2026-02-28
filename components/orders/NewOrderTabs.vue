<script setup lang="ts">
interface Tab {
  id: string
  label: string
  disabled?: boolean
}

const tabs: Tab[] = [
  { id: 'rendeles', label: 'Rendelés' },
  { id: 'erdeklodo', label: 'Érdeklődő' },
  { id: 'termeloink', label: 'Termelőink' },
  { id: 'top', label: 'TOP' },
  { id: 'fizetes', label: 'Fizetés', disabled: true }
]

const props = defineProps<{
  activeTab: string
  errorTabs?: string[]
}>()

const emit = defineEmits<{
  'update:activeTab': [tab: string]
}>()

function selectTab(tab: Tab): void {
  if (!tab.disabled) {
    emit('update:activeTab', tab.id)
  }
}
</script>

<template>
  <div class="flex gap-1 bg-gray-100 p-1 rounded-full overflow-x-auto">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      class="flex-1 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap"
      :class="[
        tab.disabled
          ? 'text-gray-400 cursor-not-allowed'
          : props.activeTab === tab.id
            ? 'bg-green-600 text-white shadow-sm'
            : props.errorTabs?.includes(tab.id)
              ? 'text-red-600 hover:bg-red-50 hover:shadow-sm'
              : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
      ]"
      :disabled="tab.disabled"
      @click="selectTab(tab)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

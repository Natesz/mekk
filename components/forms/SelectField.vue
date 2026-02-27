<script setup lang="ts">
interface Option {
  value: string
  label: string
}

interface Props {
  modelValue: string
  label: string
  options: Option[]
  placeholder?: string
  error?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Nincs elem kiválasztva',
  error: '',
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const selectedLabel = computed(() => {
  if (!props.modelValue) return null
  return props.options.find(o => o.value === props.modelValue)?.label ?? null
})

function toggle(): void {
  isOpen.value = !isOpen.value
}

function select(value: string): void {
  emit('update:modelValue', value)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent): void {
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-gray-700">
      {{ props.label }}
      <span v-if="props.required" class="text-red-500">*</span>
    </label>
    <div ref="containerRef" class="relative">
      <button
        type="button"
        class="w-full px-4 py-2 pr-10 border-2 rounded-full bg-white text-left transition-all cursor-pointer focus:outline-none"
        :class="[
          props.error
            ? 'border-red-500'
            : isOpen
              ? 'border-green-500 ring-2 ring-green-100'
              : 'border-green-300',
          !props.modelValue ? 'text-gray-400' : 'text-gray-900'
        ]"
        @click="toggle"
      >
        {{ selectedLabel ?? props.placeholder }}
      </button>
      <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          class="w-4 h-4 text-green-500 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div
        v-if="isOpen"
        class="absolute z-50 w-full mt-1 bg-white border-2 border-green-400 rounded-2xl shadow-lg overflow-hidden"
      >
        <button
          v-for="option in props.options"
          :key="option.value"
          type="button"
          class="w-full px-4 py-2.5 text-left text-gray-900 hover:bg-green-50 transition-colors"
          :class="{ 'bg-green-100 font-medium text-green-800': option.value === props.modelValue }"
          @click="select(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
    <span v-if="props.error" class="text-sm text-red-500">
      {{ props.error }}
    </span>
  </div>
</template>

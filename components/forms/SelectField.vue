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

function handleChange(event: Event): void {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-gray-700">
      {{ props.label }}
      <span v-if="props.required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <select
        :value="props.modelValue"
        class="w-full px-4 py-2 pr-10 border rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
        :class="[
          props.error ? 'border-red-500' : 'border-gray-300',
          !props.modelValue ? 'text-gray-400' : ''
        ]"
        @change="handleChange"
      >
        <option value="" disabled>
          {{ props.placeholder }}
        </option>
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <span v-if="props.error" class="text-sm text-red-500">
      {{ props.error }}
    </span>
  </div>
</template>

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
    <select
      :value="props.modelValue"
      class="w-full px-4 py-2 border rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
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
    <span v-if="props.error" class="text-sm text-red-500">
      {{ props.error }}
    </span>
  </div>
</template>

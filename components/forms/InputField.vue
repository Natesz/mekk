<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  placeholder?: string
  type?: string
  error?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  error: '',
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: []
}>()

function handleInput(event: Event): void {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

function handleBlur(): void {
  emit('blur')
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-gray-700">
      {{ props.label }}
      <span v-if="props.required" class="text-red-500">*</span>
    </label>
    <input
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      class="w-full px-4 py-2 border rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      :class="[props.error ? 'border-red-500' : 'border-gray-300']"
      @input="handleInput"
      @blur="handleBlur"
    />
    <span v-if="props.error" class="text-sm text-red-500">
      {{ props.error }}
    </span>
  </div>
</template>

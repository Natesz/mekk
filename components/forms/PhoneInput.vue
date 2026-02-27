<script setup lang="ts">
interface Props {
  phonePrefix: string
  phoneNumber: string
  error?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  error: '',
  required: false
})

const emit = defineEmits<{
  'update:phonePrefix': [value: string]
  'update:phoneNumber': [value: string]
  blur: []
}>()

const prefixOptions = [
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '50', label: '50' },
  { value: '70', label: '70' }
]

function handlePrefixChange(event: Event): void {
  const target = event.target as HTMLSelectElement
  emit('update:phonePrefix', target.value)
}

function handleNumberInput(event: Event): void {
  const target = event.target as HTMLInputElement
  const digitsOnly = target.value.replace(/\D/g, '').slice(0, 7)
  emit('update:phoneNumber', digitsOnly)
}

function handleBlur(): void {
  emit('blur')
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-gray-700">
      Telefonszám
      <span v-if="props.required" class="text-red-500">*</span>
    </label>
    <div class="flex items-center min-w-0">
      <span class="shrink-0 px-3 py-2 bg-gray-50 border-2 border-r-0 border-green-300 rounded-l-full text-gray-600 font-medium text-sm">
        +36
      </span>
      <select
        :value="props.phonePrefix"
        class="shrink-0 w-16 px-2 py-2 border-2 border-r-0 border-green-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-colors cursor-pointer appearance-none"
        @change="handlePrefixChange"
      >
        <option
          v-for="option in prefixOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <input
        type="tel"
        :value="props.phoneNumber"
        placeholder="1234567"
        maxlength="7"
        class="min-w-0 flex-1 px-4 py-2 border-2 rounded-r-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-colors"
        :class="[props.error ? 'border-red-500' : 'border-green-300']"
        @input="handleNumberInput"
        @blur="handleBlur"
      />
    </div>
    <span v-if="props.error" class="text-sm text-red-500">
      {{ props.error }}
    </span>
  </div>
</template>

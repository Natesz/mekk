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
    <div class="flex items-center">
      <span class="px-3 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl text-gray-600 font-medium">
        +36
      </span>
      <select
        :value="props.phonePrefix"
        class="px-3 py-2 border border-r-0 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer"
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
        class="flex-1 px-4 py-2 border rounded-r-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        :class="[props.error ? 'border-red-500' : 'border-gray-300']"
        @input="handleNumberInput"
        @blur="handleBlur"
      />
    </div>
    <span v-if="props.error" class="text-sm text-red-500">
      {{ props.error }}
    </span>
  </div>
</template>

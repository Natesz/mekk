<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()

const router = useRouter()

function navigate(to?: string): void {
  if (to) {
    router.push(to)
  }
}
</script>

<template>
  <nav class="flex items-center gap-2 text-sm text-gray-600 px-6 py-3">
    <template v-for="(item, index) in items" :key="index">
      <button
        v-if="item.to"
        type="button"
        class="text-green-600 hover:text-green-700 hover:underline"
        @click="navigate(item.to)"
      >
        {{ item.label }}
      </button>
      <span v-else class="text-gray-500">
        {{ item.label }}
      </span>
      <span v-if="index < items.length - 1" class="text-gray-400">
        &gt;
      </span>
    </template>
  </nav>
</template>

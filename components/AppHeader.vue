<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

interface Props {
  showNewOrderButton?: boolean
  breadcrumbItems?: BreadcrumbItem[]
}

const props = withDefaults(defineProps<Props>(), {
  showNewOrderButton: true,
  breadcrumbItems: () => []
})

const router = useRouter()

function handleNewOrder(): void {
  router.push('/orders/new')
}

function navigate(to?: string): void {
  if (to) router.push(to)
}
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div class="max-w-4xl mx-auto flex items-center justify-between gap-6">
      <div class="flex flex-col items-start gap-1">
        <button type="button" class="cursor-pointer" @click="navigate('/')">
          <AppLogo />
        </button>
        <nav
          v-if="props.breadcrumbItems.length"
          class="flex items-center gap-2 text-sm text-gray-600 pl-1"
        >
          <template v-for="(item, index) in props.breadcrumbItems" :key="index">
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
            <span v-if="index < props.breadcrumbItems.length - 1" class="text-gray-400">
              &gt;
            </span>
          </template>
        </nav>
      </div>

      <button
        v-if="props.showNewOrderButton"
        type="button"
        class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors whitespace-nowrap shadow-sm"
        @click="handleNewOrder"
      >
        Új megrendelés
      </button>
    </div>
  </header>
</template>

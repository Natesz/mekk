<script setup lang="ts">
interface Props {
  showNewOrderButton?: boolean
  isHomeLinkActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showNewOrderButton: true,
  isHomeLinkActive: false
})

const router = useRouter()

function handleNewOrder(): void {
  router.push('/orders/new')
}

function goToHome(): void {
  router.push('/')
}
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200 px-6 py-5">
    <div class="max-w-4xl mx-auto flex items-center gap-6">
      <div class="flex items-center gap-4">
        <button type="button" class="cursor-pointer" @click="goToHome">
          <AppLogo />
        </button>
        
        <button
          v-if="props.showNewOrderButton"
          type="button"
          class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors whitespace-nowrap"
          @click="handleNewOrder"
        >
          Új megrendelés
        </button>
      </div>

      <div class="flex items-center gap-2 ml-auto">
        <button
          type="button"
          class="flex items-center gap-1"
          :class="[
            props.isHomeLinkActive
              ? 'text-blue-500 hover:text-blue-600 cursor-pointer'
              : 'text-gray-700 cursor-default'
          ]"
          :disabled="!props.isHomeLinkActive"
          @click="props.isHomeLinkActive ? goToHome() : undefined"
        >
          <svg
            class="w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span class="text-base font-medium">Főoldal</span>
        </button>
      </div>
    </div>
  </header>
</template>

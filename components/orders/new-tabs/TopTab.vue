<script setup lang="ts">
interface TopProduct {
  name: string
  description: string
  emoji: string
  badge: string
}

const topProducts: TopProduct[] = [
  {
    name: 'Bűzös Élvezet',
    description: 'Fokhagymás kecskesajt – az igazi ínyenceknek. Erős, karakteres ízvilág.',
    emoji: '🧄',
    badge: '#1'
  },
  {
    name: 'Gazzabáló',
    description: 'Zöldfűszeres kecskesajt – friss bazsalikommal, kakukkfűvel és oregánóval.',
    emoji: '🌿',
    badge: '#2'
  },
  {
    name: 'Mézes Álom',
    description: 'Kecskesajt tekercs akácmézzel – édes és sós ízek tökéletes harmóniája.',
    emoji: '🍯',
    badge: '#3'
  },
  {
    name: 'Füstös Csábítás',
    description: 'Hidegen füstölt kecskesajt – mélybarnás kéreg, gazdag füstös aromák.',
    emoji: '🔥',
    badge: '#4'
  },
  {
    name: 'Természet Kincse',
    description: 'Natúr friss kecskesajt – a legegyszerűbb forma, a legtisztább íz.',
    emoji: '🤍',
    badge: '#5'
  }
]
</script>

<template>
  <div class="space-y-4">
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        TOP termékek
      </h3>

      <div class="space-y-3">
        <div
          v-for="product in topProducts"
          :key="product.name"
          class="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-green-50 transition-colors"
        >
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl shrink-0">
            {{ product.emoji }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-0.5 flex-wrap">
              <h4 class="font-semibold text-gray-900">{{ product.name }}</h4>
              <span class="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full font-bold shrink-0">
                {{ product.badge }}
              </span>
            </div>
            <p class="text-sm text-gray-600">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

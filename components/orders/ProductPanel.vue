<script setup lang="ts">
const pendingOrderStore = usePendingOrderStore()

interface Product {
  name: string
  price: number
  image: string
}

const products: Product[] = [
  { name: 'Friss Kecskesajt Natúr', price: 1500, image: '/pictures/product1.jpg' },
  { name: 'Érlelt Kecskesajt', price: 2500, image: '/pictures/product2.jpg' },
  { name: 'Füstölt Kecskesajt', price: 3000, image: '/pictures/product3.jpg' },
  { name: 'Fűszeres Kecskesajt', price: 2000, image: '/pictures/product4.jpg' },
  { name: 'Kecskesajt Tekercs Mézes', price: 5000, image: '/pictures/product5.jpg' }
]

defineProps<{
  error?: string
}>()

const productOptions = computed(() =>
  products.map(p => ({ value: p.name, label: p.name }))
)

const selectedProductData = computed(() =>
  products.find(p => p.name === pendingOrderStore.selectedProduct) ?? null
)

function handleProductChange(value: string): void {
  const product = products.find(p => p.name === value)
  pendingOrderStore.setProduct(value)
  pendingOrderStore.setProductPrice(product?.price ?? 0)
}

function formatPrice(price: number): string {
  return price.toLocaleString('hu-HU')
}
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-5">
    <h4 class="text-md font-semibold text-gray-800 mb-4">
      Termék
    </h4>

    <FormsSelectField
      :model-value="pendingOrderStore.selectedProduct"
      label="Termék neve"
      :options="productOptions"
      placeholder="Válassz terméket"
      :error="error"
      required
      @update:model-value="handleProductChange"
    />

    <div
      v-if="selectedProductData"
      class="mt-4 flex flex-col sm:flex-row gap-4 items-start"
    >
      <img
        :src="selectedProductData.image"
        :alt="selectedProductData.name"
        class="w-full sm:w-44 h-36 object-cover rounded-2xl shrink-0"
      />
      <div class="flex flex-col gap-1 justify-center">
        <p class="text-sm text-gray-600">{{ selectedProductData.name }}</p>
        <p class="text-2xl font-bold text-green-600">
          {{ formatPrice(selectedProductData.price) }} Ft / db
        </p>
      </div>
    </div>
  </div>
</template>

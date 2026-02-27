import { defineStore } from 'pinia'
import type { OrderFormData } from '~/types/order-form'

interface PendingOrderState {
  orderId: string
  formData: OrderFormData | null
  selectedProduct: string
  currency: string
  quantity: string
}

export const usePendingOrderStore = defineStore('pendingOrder', {
  state: (): PendingOrderState => ({
    orderId: '',
    formData: null,
    selectedProduct: '',
    currency: 'HUF',
    quantity: ''
  }),

  actions: {
    setOrder(formData: OrderFormData, orderId: string): void {
      this.formData = { ...formData }
      this.orderId = orderId
      this.selectedProduct = ''
      this.currency = 'HUF'
      this.quantity = ''
    },

    setProduct(product: string): void {
      this.selectedProduct = product
      if (!product) {
        this.currency = 'HUF'
        this.quantity = ''
      }
    },

    setCurrency(currency: string): void {
      this.currency = currency
    },

    setQuantity(quantity: string): void {
      this.quantity = quantity
    }
  }
})

import { defineStore } from 'pinia'
import type { OrderFormData } from '~/types/order-form'

interface PendingOrderState {
  orderId: string
  formData: OrderFormData | null
  selectedProduct: string
  productPrice: number
  currency: string
  quantity: string
  country: string
  street: string
  houseNumber: string
  city: string
  zipCode: string
  companyRegNumber: string
  companyName: string
  headquarters: string
  contactName: string
}

export const usePendingOrderStore = defineStore('pendingOrder', {
  state: (): PendingOrderState => ({
    orderId: '',
    formData: null,
    selectedProduct: '',
    productPrice: 0,
    currency: 'HUF',
    quantity: '',
    country: 'Magyarország',
    street: '',
    houseNumber: '',
    city: '',
    zipCode: '',
    companyRegNumber: '',
    companyName: '',
    headquarters: '',
    contactName: ''
  }),

  actions: {
    setOrder(formData: OrderFormData, orderId: string): void {
      this.formData = { ...formData }
      this.orderId = orderId
    },

    setProduct(product: string): void {
      this.selectedProduct = product
      if (!product) {
        this.productPrice = 0
        this.currency = 'HUF'
        this.quantity = ''
      }
    },

    setProductPrice(price: number): void {
      this.productPrice = price
    },

    setCurrency(currency: string): void {
      this.currency = currency
    },

    setQuantity(quantity: string): void {
      this.quantity = quantity
    },

    resetOrder(): void {
      this.orderId = ''
      this.formData = null
      this.selectedProduct = ''
      this.productPrice = 0
      this.currency = 'HUF'
      this.quantity = ''
      this.country = 'Magyarország'
      this.street = ''
      this.houseNumber = ''
      this.city = ''
      this.zipCode = ''
      this.companyRegNumber = ''
      this.companyName = ''
      this.headquarters = ''
      this.contactName = ''
    }
  }
})

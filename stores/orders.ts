import { defineStore } from 'pinia'
import type { Order } from '~/types/order'

interface OrdersState {
  orders: Order[]
}

export const useOrdersStore = defineStore('orders', {
  state: (): OrdersState => ({
    orders: []
  }),

  getters: {
    orderCount: (state): number => state.orders.length,
    isEmpty: (state): boolean => state.orders.length === 0
  },

  actions: {
    addOrder(order: Order): void {
      if (import.meta.client) {
        this.orders.push(order)
        this.saveToLocalStorage()
      }
    },

    removeOrder(id: string): void {
      if (import.meta.client) {
        this.orders = this.orders.filter(order => order.id !== id)
        this.saveToLocalStorage()
      }
    },

    loadFromLocalStorage(): void {
      if (import.meta.client) {
        const stored = localStorage.getItem('mekk-orders')
        if (stored) {
          try {
            this.orders = JSON.parse(stored)
          } catch {
            this.orders = []
          }
        }
      }
    },

    saveToLocalStorage(): void {
      if (import.meta.client) {
        localStorage.setItem('mekk-orders', JSON.stringify(this.orders))
      }
    }
  }
})

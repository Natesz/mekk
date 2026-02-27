import { defineStore } from 'pinia'
import type { Order } from '~/types/order'
import { fetchOrders, insertOrder, deleteOrder } from '~/services/ordersService'

interface OrdersState {
  orders: Order[]
  loading: boolean
  error: string | null
}

export const useOrdersStore = defineStore('orders', {
  state: (): OrdersState => ({
    orders: [],
    loading: false,
    error: null
  }),

  getters: {
    orderCount: (state): number => state.orders.length,
    isEmpty: (state): boolean => state.orders.length === 0
  },

  actions: {
    async loadOrders(): Promise<void> {
      const supabase = useSupabaseClient()
      this.loading = true
      this.error = null
      try {
        this.orders = await fetchOrders(supabase)
      } catch (e) {
        this.error = e instanceof Error ? e.message : 'Nem sikerült betölteni a megrendeléseket'
      } finally {
        this.loading = false
      }
    },

    async addOrder(order: Order): Promise<void> {
      const supabase = useSupabaseClient()
      await insertOrder(supabase, order)
      this.orders.unshift(order)
    },

    async removeOrder(id: string): Promise<void> {
      const supabase = useSupabaseClient()
      await deleteOrder(supabase, id)
      this.orders = this.orders.filter(o => o.id !== id)
    }
  }
})

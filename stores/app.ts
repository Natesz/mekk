import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    initialized: false
  }),

  actions: {
    init() {
      if (import.meta.client) {
        this.initialized = true
      }
    }
  }
})

export type OrderStatus = 'assembling' | 'shipping' | 'delivered'

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  assembling: 'Összeállítás alatt',
  shipping: 'Kiszállítás alatt',
  delivered: 'Teljesítve'
}

export const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  assembling: 'bg-green-100 text-green-700',
  shipping: 'bg-yellow-100 text-yellow-700',
  delivered: 'bg-green-600 text-white'
}

export interface Order {
  id: string
  customerName: string
  productName: string
  price: number
  quantity: number
  currency: string
  status: OrderStatus
}

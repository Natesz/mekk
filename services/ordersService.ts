import type { SupabaseClient } from '@supabase/supabase-js'
import type { Order } from '~/types/order'

interface OrderRow {
  id: string
  customer_name: string
  product_name: string
  price: number
  image_url: string | null
  created_at: string
  updated_at: string
}

function rowToOrder(row: OrderRow): Order {
  return {
    id: row.id,
    customerName: row.customer_name,
    productName: row.product_name,
    price: row.price
  }
}

export async function fetchOrders(client: SupabaseClient): Promise<Order[]> {
  const { data, error } = await client
    .from('orders')
    .select('id, customer_name, product_name, price')
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return ((data as OrderRow[]) ?? []).map(rowToOrder)
}

export async function insertOrder(client: SupabaseClient, order: Order): Promise<void> {
  const { error } = await client.from('orders').insert({
    id: order.id,
    customer_name: order.customerName,
    product_name: order.productName,
    price: order.price
  })

  if (error) throw new Error(error.message)
}

export async function deleteOrder(client: SupabaseClient, id: string): Promise<void> {
  const { error } = await client.from('orders').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

export type BorrowerType = 'individual' | 'business' | ''

export interface OrderFormData {
  customerName: string
  borrowerType: BorrowerType
  phonePrefix: string
  phoneNumber: string
  email: string
}

export interface OrderFormErrors {
  customerName?: string
  borrowerType?: string
  phoneNumber?: string
  email?: string
}

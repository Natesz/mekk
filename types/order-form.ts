export type BorrowerType = 'individual' | 'business' | ''

export interface OrderFormData {
  customerName: string
  borrowerType: BorrowerType
  contactPerson: string
  phonePrefix: string
  phoneNumber: string
  email: string
}

export interface OrderFormErrors {
  customerName?: string
  borrowerType?: string
  contactPerson?: string
  phoneNumber?: string
  email?: string
}

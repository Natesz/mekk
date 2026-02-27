import type { OrderFormData, OrderFormErrors, BorrowerType } from '~/types/order-form'
import { validateOrderForm, validateField, emailSchema, phoneNumberSchema } from '~/utils/validators'

export function useOrderForm() {
  const formData = reactive<OrderFormData>({
    customerName: '',
    borrowerType: '',
    phonePrefix: '20',
    phoneNumber: '',
    email: ''
  })

  const errors = reactive<OrderFormErrors>({})
  const isSubmitting = ref(false)
  const isValid = ref(false)

  function clearErrors(): void {
    errors.customerName = undefined
    errors.borrowerType = undefined
    errors.phoneNumber = undefined
    errors.email = undefined
  }

  function validateEmail(): boolean {
    const result = validateField(emailSchema, formData.email)
    if (!result.success) {
      errors.email = result.error
      return false
    }
    errors.email = undefined
    return true
  }

  function validatePhone(): boolean {
    const result = validateField(phoneNumberSchema, formData.phoneNumber)
    if (!result.success) {
      errors.phoneNumber = result.error
      return false
    }
    errors.phoneNumber = undefined
    return true
  }

  function validateForm(): boolean {
    clearErrors()

    const result = validateOrderForm({
      ...formData,
      borrowerType: formData.borrowerType || undefined
    })

    if (!result.success) {
      Object.assign(errors, result.errors)
      isValid.value = false
      return false
    }

    isValid.value = true
    return true
  }

  function resetForm(): void {
    formData.customerName = ''
    formData.borrowerType = ''
    formData.phonePrefix = '20'
    formData.phoneNumber = ''
    formData.email = ''
    clearErrors()
    isValid.value = false
  }

  function setCustomerName(value: string): void {
    formData.customerName = value
    if (errors.customerName && value.length >= 2) {
      errors.customerName = undefined
    }
  }

  function setBorrowerType(value: BorrowerType): void {
    formData.borrowerType = value
    if (errors.borrowerType && value) {
      errors.borrowerType = undefined
    }
  }

  function setPhonePrefix(value: string): void {
    formData.phonePrefix = value
  }

  function setPhoneNumber(value: string): void {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 7)
    formData.phoneNumber = digitsOnly
    if (errors.phoneNumber && digitsOnly.length === 7) {
      errors.phoneNumber = undefined
    }
  }

  function setEmail(value: string): void {
    formData.email = value
    if (errors.email) {
      const result = validateField(emailSchema, value)
      if (result.success) {
        errors.email = undefined
      }
    }
  }

  return {
    formData: readonly(formData),
    errors: readonly(errors),
    isSubmitting: readonly(isSubmitting),
    isValid: readonly(isValid),
    validateForm,
    validateEmail,
    validatePhone,
    resetForm,
    setCustomerName,
    setBorrowerType,
    setPhonePrefix,
    setPhoneNumber,
    setEmail
  }
}

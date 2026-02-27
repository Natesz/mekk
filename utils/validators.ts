import { z } from 'zod'

export const phoneNumberSchema = z
  .string()
  .length(7, 'A telefonszám pontosan 7 számjegyből kell álljon')
  .regex(/^\d{7}$/, 'A telefonszám csak számokat tartalmazhat')

export const emailSchema = z
  .string()
  .min(1, 'Az email cím megadása kötelező')
  .email('Érvénytelen email formátum')

export const phonePrefixSchema = z
  .enum(['20', '30', '50', '70'], {
    errorMap: () => ({ message: 'Válassz érvényes előhívót' })
  })

export const borrowerTypeSchema = z
  .enum(['individual', 'business'], {
    errorMap: () => ({ message: 'Válassz hitelfelvevő típust' })
  })

export const orderFormSchema = z.object({
  customerName: z
    .string()
    .min(1, 'Az érdeklődő neve kötelező')
    .min(2, 'A név legalább 2 karakter legyen'),
  borrowerType: borrowerTypeSchema,
  phonePrefix: phonePrefixSchema,
  phoneNumber: phoneNumberSchema,
  email: emailSchema
})

export type OrderFormSchema = z.infer<typeof orderFormSchema>

export function validateField<T>(
  schema: z.ZodType<T>,
  value: unknown
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(value)
  if (result.success) {
    return { success: true, data: result.data }
  }
  return { success: false, error: result.error.errors[0]?.message || 'Érvénytelen érték' }
}

export function validateOrderForm(data: unknown): {
  success: boolean
  errors: Record<string, string>
  data?: OrderFormSchema
} {
  const result = orderFormSchema.safeParse(data)
  if (result.success) {
    return { success: true, errors: {}, data: result.data }
  }

  const errors: Record<string, string> = {}
  for (const error of result.error.errors) {
    const path = error.path[0]
    if (path && typeof path === 'string') {
      errors[path] = error.message
    }
  }
  return { success: false, errors }
}

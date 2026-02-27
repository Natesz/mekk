export function generateOrderId(sequence: number = 1): string {
  const year = new Date().getFullYear().toString().slice(-2)
  const serial = String(sequence).padStart(5, '0')
  return `K${year}${serial}`
}

export function formatPhoneDisplay(prefix: string, number: string): string {
  if (!number) return ''
  return `+36 ${prefix} ${number.slice(0, 3)} ${number.slice(3)}`
}

export function borrowerTypeLabel(value: string): string {
  if (value === 'individual') return 'Magánszemély'
  if (value === 'business') return 'Vállalkozás'
  return '—'
}

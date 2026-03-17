export function buildWhatsAppLink(
  phone: string,
  baseMessage: string,
): string {
  const normalizedPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(baseMessage)}`;
}

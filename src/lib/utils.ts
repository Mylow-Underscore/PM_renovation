export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, "").replace(/(\d{2})/g, "$1 ");
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR").format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
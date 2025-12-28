/**
 * Valida formato de email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida email e retorna mensagem de erro
 */
export function validateEmail(email: string): string | null {
  if (!email) return "Email é obrigatório";
  if (!isValidEmail(email)) return "Email inválido";
  return null;
}

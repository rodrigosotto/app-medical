import { User } from "../types/auth.types";

/**
 * Helpers de autenticação
 */

/**
 * Verifica se o usuário tem uma role específica
 */
export function hasRole(user: User | null, role: User["role"]): boolean {
  return user?.role === role;
}

/**
 * Verifica se o usuário é admin
 */
export function isAdmin(user: User | null): boolean {
  return hasRole(user, "admin");
}

/**
 * Verifica se o usuário é médico
 */
export function isDoctor(user: User | null): boolean {
  return hasRole(user, "doctor");
}

/**
 * Verifica se o usuário é paciente
 */
export function isPatient(user: User | null): boolean {
  return hasRole(user, "patient");
}

/**
 * Valida formato de email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida força da senha
 */
export function isStrongPassword(password: string): boolean {
  // Mínimo 8 caracteres, pelo menos uma letra maiúscula, uma minúscula e um número
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return strongPasswordRegex.test(password);
}

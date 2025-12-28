type ValidationRule<T> = (value: T) => string | null;

interface ValidationRules<T> {
  [key: string]: ValidationRule<T[keyof T]>[];
}

/**
 * Validador de formulários genérico
 */
export function validateForm<T extends Record<string, any>>(
  data: T,
  rules: ValidationRules<T>
): Record<string, string> {
  const errors: Record<string, string> = {};

  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field];
    const value = data[field as keyof T];

    for (const rule of fieldRules) {
      const error = rule(value);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  });

  return errors;
}

/**
 * Regras de validação comuns
 */
export const validationRules = {
  required:
    (message = "Campo obrigatório") =>
    (value: any) => {
      if (!value || (typeof value === "string" && !value.trim())) {
        return message;
      }
      return null;
    },

  minLength: (min: number, message?: string) => (value: string) => {
    if (value && value.length < min) {
      return message || `Mínimo de ${min} caracteres`;
    }
    return null;
  },

  maxLength: (max: number, message?: string) => (value: string) => {
    if (value && value.length > max) {
      return message || `Máximo de ${max} caracteres`;
    }
    return null;
  },

  pattern: (regex: RegExp, message: string) => (value: string) => {
    if (value && !regex.test(value)) {
      return message;
    }
    return null;
  },
};

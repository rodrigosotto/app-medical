/**
 * Utilitários para navegação com rotas não configuradas
 * Enquanto as rotas não estão configuradas no router, usamos este helper
 */

import { Link as TanStackLink } from '@tanstack/react-router';
import type { ComponentProps } from 'react';

/**
 * Link wrapper que aceita qualquer rota como string
 * Use apenas enquanto as rotas não estiverem configuradas no router
 */
export function Link(props: Omit<ComponentProps<typeof TanStackLink>, 'to'> & { to: string }) {
  // @ts-expect-error - Rota ainda não configurada no router
  return <TanStackLink {...props} />;
}

/**
 * Navigate helper que aceita qualquer rota como string
 */
export const navigateTo = (to: string) => {
  // @ts-expect-error - Rota ainda não configurada no router
  return { to };
};

import { RouterProvider as TanStackRouterProvider } from "@tanstack/react-router";
import { router } from "@/lib/router";

/**
 * Provider do TanStack Router
 * Gerencia todas as rotas da aplicação
 */
export function RouterProvider() {
  return <TanStackRouterProvider router={router} />;
}

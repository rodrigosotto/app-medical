import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/app/router/routes";
import { routerConfig } from "@/config/router.config";

/**
 * Instância do Router configurada
 */
export const router = createRouter({
  routeTree,
  ...routerConfig,
});

// Type-safe router para TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

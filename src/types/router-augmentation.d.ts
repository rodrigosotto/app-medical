/**
 * Declaração de tipos para TanStack Router
 * Importa as rotas definidas em src/config/routes.ts
 */

import type { AppRoute } from '../config/routes';

declare module '@tanstack/react-router' {
  interface Register {
    // Permite qualquer string como rota válida temporariamente
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router: {
      routeTree: any;
      routePaths: AppRoute;
    };
  }
}

export {};

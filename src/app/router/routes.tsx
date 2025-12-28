import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { LoginForm } from '@/features/auth/components/LoginForm';

/**
 * Rota raiz da aplicação
 */
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

/**
 * Rota inicial (index)
 */
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Página Inicial</div>,
});

/**
 * Rota de login
 */
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginForm,
});

/**
 * Árvore de rotas
 * Adicione novas rotas aqui conforme necessário
 */
export const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);

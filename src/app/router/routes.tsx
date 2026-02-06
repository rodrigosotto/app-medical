import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { ForgotPasswordForm } from '@/features/auth/components/ForgotPasswordForm';

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
  component: () => <div>Página Inicial MEDICAL APLICATIVO</div>,
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
 * Rota de cadastro/registro
 */
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterForm,
});

/**
 * Rota de recuperação de senha
 */
const forgotPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forgot-password',
  component: ForgotPasswordForm,
});

/**
 * Árvore de rotas
 * Adicionar novas rotas aqui conforme necessário
 */
export const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,
]);

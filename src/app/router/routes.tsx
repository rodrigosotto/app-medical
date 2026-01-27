import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { DoctorRegistrationPage, PatientRegistrationPage } from '@/features/auth/pages';

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
 * Rota de cadastro de médico
 */
const doctorRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/doctor',
  component: DoctorRegistrationPage,
});

/**
 * Rota de cadastro de paciente
 */
const patientRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/patient',
  component: PatientRegistrationPage,
});

/**
 * Árvore de rotas
 * Adicione novas rotas aqui conforme necessário
 */
export const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  doctorRegistrationRoute,
  patientRegistrationRoute,
]);

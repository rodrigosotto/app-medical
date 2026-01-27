/**
 * URLs base dos endpoints da API
 */
export const endpoints = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
    profile: '/api/auth/profile',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
  },
  users: {
    base: '/api/users',
    byId: (id: string) => `/api/users/${id}`,
  },
  patients: {
    base: '/api/patients',
    byId: (id: string) => `/api/patients/${id}`,
  },
  appointments: {
    base: '/api/appointments',
    byId: (id: string) => `/api/appointments/${id}`,
  },
} as const;

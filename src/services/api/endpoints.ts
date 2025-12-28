/**
 * URLs base dos endpoints da API
 */
export const endpoints = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    profile: "/auth/profile",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
  users: {
    base: "/users",
    byId: (id: string) => `/users/${id}`,
  },
  patients: {
    base: "/patients",
    byId: (id: string) => `/patients/${id}`,
  },
  appointments: {
    base: "/appointments",
    byId: (id: string) => `/appointments/${id}`,
  },
} as const;

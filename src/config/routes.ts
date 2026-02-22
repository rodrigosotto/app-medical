/**
 * Configuração centralizada de rotas da aplicação
 * Todas as rotas devem ser definidas aqui para garantir type-safety
 */

export const ROUTES = {
  // Rotas públicas
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Rotas de autenticação
  AUTH: {
    VERIFY_EMAIL: '/verify-email',
    DOCTOR_REGISTRATION: '/register/doctor',
    PATIENT_REGISTRATION: '/register/patient',
  },

  // Rotas do Paciente
  PATIENT: {
    DASHBOARD: '/patient/dashboard',
    APPOINTMENTS: '/patient/appointments',
    APPOINTMENT_DETAILS: '/patient/appointments/:id',
    APPOINTMENT_BOOKING: '/patient/appointment-booking',
    MEDICAL_HISTORY: '/patient/medical-history',
    PRESCRIPTIONS: '/patient/prescriptions',
    PRESCRIPTION_DETAIL: '/patient/prescriptions/:id',
    EXAMS: '/patient/exams',
    EXAM_VIEWER: '/patient/exams/:id',
    UPLOAD_EXAM: '/patient/upload-exam',
    TREATMENT_PROGRESS: '/patient/treatment-progress',
    VIDEO_CONSULTATION: '/patient/video-consultation',
    CHAT: '/patient/chat',
    PROFILE: '/patient/profile',
    ORDERS: '/patient/orders',
    BLOG: '/patient/blog',
    BLOG_ARTICLE: '/patient/blog/:id',
  },

  // Rotas do Médico
  DOCTOR: {
    DASHBOARD: '/doctor/dashboard',
    CONSULTATIONS: '/doctor/consultations',
    CONSULTATION_DETAILS: '/doctor/consultations/:id',
    PATIENT_FILE: '/doctor/patients/:id/file',
    PATIENT_HISTORY: '/doctor/patients/:id/history',
    PATIENT_EXAMS: '/doctor/patients/:id/exams',
    VIDEO_ROOM: '/doctor/video-room',
    PRESCRIPTIONS_CREATE: '/doctor/prescriptions/create',
    PRESCRIPTIONS: '/doctor/prescriptions',
    PRESCRIPTION_DETAIL: '/doctor/prescriptions/:id',
    SCHEDULE: '/doctor/schedule',
    AVAILABILITY: '/doctor/availability',
    REPORTS: '/doctor/reports',
    BLOG_CREATE: '/doctor/blog/create',
    BLOG_MANAGEMENT: '/doctor/blog',
    MEDICATIONS: '/doctor/medications',
    PROFILE: '/doctor/profile',
  },

  // Rotas do Admin
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    USER_DETAIL: '/admin/users/:id',
    DOCTORS_APPROVAL: '/admin/doctors-approval',
    REPORTS_FINANCIAL: '/admin/reports/financial',
    REPORTS_OPERATIONAL: '/admin/reports/operational',
    PRODUCTS: '/admin/products',
    PRODUCTS_ADD: '/admin/products/add',
    PRODUCTS_EDIT: '/admin/products/:id/edit',
    INVENTORY: '/admin/inventory',
    ORDERS: '/admin/orders',
    SETTINGS: '/admin/settings',
    PERMISSIONS: '/admin/permissions',
    LOGS: '/admin/logs',
    SPECIALTIES: '/admin/specialties',
    MEDICATIONS: '/admin/medications',
  },

  // Rotas do E-commerce
  ECOMMERCE: {
    PRODUCTS: '/ecommerce/products',
    PRODUCT_DETAIL: '/ecommerce/products/:id',
    CART: '/ecommerce/cart',
    CHECKOUT: '/ecommerce/checkout',
    ORDER_CONFIRMATION: '/ecommerce/order-confirmation',
    ORDER_TRACKING: '/ecommerce/orders/:id/tracking',
    ORDERS: '/ecommerce/orders',
    ORDER_DETAIL: '/ecommerce/orders/:id',
  },
} as const;

/**
 * Função helper para construir rotas com parâmetros
 * @example buildRoute(ROUTES.PATIENT.APPOINTMENT_DETAILS, { id: '123' })
 */
export function buildRoute(route: string, params?: Record<string, string | number>): string {
  if (!params) return route;

  let builtRoute = route;
  Object.entries(params).forEach(([key, value]) => {
    builtRoute = builtRoute.replace(`:${key}`, String(value));
  });

  return builtRoute;
}

/**
 * Extrai todos os valores de rotas de forma recursiva
 */
type ExtractRoutes<T> = T extends string
  ? T
  : T extends Record<string, any>
    ? { [K in keyof T]: ExtractRoutes<T[K]> }[keyof T]
    : never;

/**
 * Tipo que representa todas as rotas válidas da aplicação
 */
export type AppRoute = ExtractRoutes<typeof ROUTES> | '.' | '..';

/**
 * Lista de todas as rotas em formato flat para uso em configurações
 */
export const ALL_ROUTES = Object.values(ROUTES).flatMap((section) => {
  if (typeof section === 'string') return [section];
  return Object.values(section);
});

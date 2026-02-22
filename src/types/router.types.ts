/**
 * Tipos para as rotas da aplicação
 * Este arquivo define os tipos de parâmetros para cada rota
 */

export interface PatientRouteParams {
  appointmentId?: string;
  prescriptionId?: string;
  examId?: string;
  articleId?: string;
}

export interface DoctorRouteParams {
  consultationId?: string;
  patientId?: string;
  prescriptionId?: string;
  postId?: string;
}

export interface AdminRouteParams {
  userId?: string;
  productId?: string;
  orderId?: string;
}

export interface EcommerceRouteParams {
  productId?: string;
  orderId?: string;
}

export interface AuthRouteParams {
  token?: string;
}

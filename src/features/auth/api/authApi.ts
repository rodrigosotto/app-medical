import { apiClient } from '@/services/api/client';
import { LoginCredentials, RegisterData, AuthResponse, User } from '../types/auth.types';

/**
 * Endpoints de autenticação
 */
export const authApi = {
  /**
   * Login de usuário
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/login', credentials);
    return data;
  },

  /**
   * Registro de novo usuário
   */
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/register', userData);
    return data;
  },

  /**
   * Logout de usuário
   */
  logout: async (): Promise<void> => {
    await apiClient.post('/api/auth/logout');
  },

  /**
   * Refresh token
   */
  refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/refresh', {
      refreshToken,
    });
    return data;
  },

  /**
   * Buscar perfil do usuário autenticado
   */
  getProfile: async (): Promise<User> => {
    const { data } = await apiClient.get<User>('/api/auth/profile');
    return data;
  },

  /**
   * Esqueci minha senha
   */
  forgotPassword: async (email: string): Promise<void> => {
    await apiClient.post('/api/auth/forgot-password', { email });
  },

  /**
   * Resetar senha
   */
  resetPassword: async (token: string, newPassword: string): Promise<void> => {
    await apiClient.post('/api/auth/reset-password', {
      token,
      password: newPassword,
    });
  },
};

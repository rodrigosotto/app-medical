import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { env } from '@/config/env';
import { createErrorFromResponse } from '@/types/errors.types';

/**
 * Cliente HTTP configurado
 */
class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: env.apiBaseUrl,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        // Handle 401 Unauthorized - tentar refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
              const response = await axios.post(`${env.apiBaseUrl}/api/auth/refresh`, {
                refreshToken,
              });

              const { token, refreshToken: newRefreshToken } = response.data;
              localStorage.setItem('token', token);
              if (newRefreshToken) {
                localStorage.setItem('refreshToken', newRefreshToken);
              }

              originalRequest.headers.Authorization = `Bearer ${token}`;
              return this.instance(originalRequest);
            }
          } catch (refreshError) {
            // Refresh falhou - limpar tokens e redirecionar
            this.handleAuthFailure();
            return Promise.reject(createErrorFromResponse(refreshError));
          }
        }

        // Se for 401 e já tentou refresh, redirecionar
        if (error.response?.status === 401 && originalRequest._retry) {
          this.handleAuthFailure();
        }

        // Transformar erro em tipo customizado
        return Promise.reject(createErrorFromResponse(error));
      }
    );
  }

  private handleAuthFailure() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    // Evitar loop de redirecionamento
    if (!window.location.pathname.includes('/login')) {
      window.location.href = '/login';
    }
  }

  public getAxiosInstance(): AxiosInstance {
    return this.instance;
  }
}

export const apiClient = new ApiClient().getAxiosInstance();

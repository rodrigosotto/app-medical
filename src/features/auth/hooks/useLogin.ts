import { useLoginMutation } from '../api/authQueries';
import { LoginCredentials } from '../types/auth.types';
import { getErrorMessage, AuthError, ApiError } from '@/types/errors.types';

/**
 * Hook para gerenciar login
 */
export function useLogin() {
  const mutation = useLoginMutation();

  const login = async (credentials: LoginCredentials) => {
    try {
      const result = await mutation.mutateAsync(credentials);
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      let errorMessage = getErrorMessage(error);

      // Mensagens específicas para erros de autenticação
      if (error instanceof AuthError) {
        if (error.statusCode === 401) {
          errorMessage = 'Email ou senha incorretos';
        }
      } else if (error instanceof ApiError) {
        if (error.statusCode === 429) {
          errorMessage = 'Muitas tentativas de login. Tente novamente em alguns minutos';
        } else if (error.statusCode >= 500) {
          errorMessage = 'Erro no servidor. Tente novamente mais tarde';
        }
      }

      return {
        success: false,
        error,
        errorMessage,
      };
    }
  };

  return {
    login,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}

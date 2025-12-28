import { useLoginMutation } from "../api/authQueries";
import { LoginCredentials } from "../types/auth.types";

/**
 * Hook para gerenciar login
 */
export function useLogin() {
  const mutation = useLoginMutation();

  const login = async (credentials: LoginCredentials) => {
    try {
      const result = await mutation.mutateAsync(credentials);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error };
    }
  };

  return {
    login,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}

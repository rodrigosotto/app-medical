import { useRegisterMutation } from "../api/authQueries";
import { RegisterData } from "../types/auth.types";

/**
 * Hook para gerenciar registro
 */
export function useRegister() {
  const mutation = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try {
      const result = await mutation.mutateAsync(data);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error };
    }
  };

  return {
    register,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}

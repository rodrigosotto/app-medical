import { useProfileQuery } from "../api/authQueries";

/**
 * Hook para acessar informações de autenticação
 */
export function useAuth() {
  const { data: user, isLoading, error } = useProfileQuery();

  const isAuthenticated = !!user && !!localStorage.getItem("token");

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
  };
}

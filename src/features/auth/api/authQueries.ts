import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "./authApi";

/**
 * Query keys para cache do TanStack Query
 */
export const authKeys = {
  all: ["auth"] as const,
  profile: () => [...authKeys.all, "profile"] as const,
};

/**
 * Query para buscar perfil do usuário
 */
export function useProfileQuery() {
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: () => authApi.getProfile(),
    retry: false,
  });
}

/**
 * Mutation para login
 */
export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Armazena o token
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);

      // Atualiza o cache do perfil
      queryClient.setQueryData(authKeys.profile(), data.user);
    },
  });
}

/**
 * Mutation para registro
 */
export function useRegisterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      // Armazena o token
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);

      // Atualiza o cache do perfil
      queryClient.setQueryData(authKeys.profile(), data.user);
    },
  });
}

/**
 * Mutation para logout
 */
export function useLogoutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Remove tokens
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      // Limpa o cache
      queryClient.clear();
    },
  });
}

/**
 * Mutation para esqueci minha senha
 */
export function useForgotPasswordMutation() {
  return useMutation({
    mutationFn: (email: string) => authApi.forgotPassword(email),
  });
}

/**
 * Mutation para resetar senha
 */
export function useResetPasswordMutation() {
  return useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) =>
      authApi.resetPassword(token, password),
  });
}

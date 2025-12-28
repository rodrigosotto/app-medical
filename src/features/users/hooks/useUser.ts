import { useUserQuery } from "../api/usersQueries";

export function useUser(id: string) {
  const query = useUserQuery(id);

  return {
    user: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

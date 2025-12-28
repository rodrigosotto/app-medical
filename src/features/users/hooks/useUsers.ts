import { useUsersQuery } from "../api/usersQueries";

export function useUsers() {
  const query = useUsersQuery();

  return {
    users: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

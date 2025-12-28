import { useUsers } from "../hooks/useUsers";
import { UserCard } from "./UserCard";

export function UserList() {
  const { users, isLoading, error } = useUsers();

  if (isLoading) return <div>Carregando usuários...</div>;
  if (error) return <div>Erro ao carregar usuários: {error.message}</div>;

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

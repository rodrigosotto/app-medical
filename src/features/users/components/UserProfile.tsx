import { useUser } from '../hooks/useUser';

interface UserProfileProps {
  userId: string;
}

export function UserProfile({ userId }: UserProfileProps) {
  const { user, isLoading, error } = useUser(userId);

  if (isLoading) return <div>Carregando perfil...</div>;
  if (error) return <div>Erro ao carregar perfil: {error.message}</div>;
  if (!user) return <div>Usuário não encontrado</div>;

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <div>
        <p>
          <strong>Nome:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        {user.phone && (
          <p>
            <strong>Telefone:</strong> {user.phone}
          </p>
        )}
        <p>
          <strong>Criado em:</strong> {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

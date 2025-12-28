import { User } from "../types/user.types";

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (userId: string) => void;
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Role: {user.role}</p>
      {user.phone && <p>Phone: {user.phone}</p>}

      <div style={{ marginTop: "8px" }}>
        {onEdit && <button onClick={() => onEdit(user)}>Editar</button>}
        {onDelete && (
          <button
            onClick={() => onDelete(user.id)}
            style={{ marginLeft: "8px" }}
          >
            Deletar
          </button>
        )}
      </div>
    </div>
  );
}

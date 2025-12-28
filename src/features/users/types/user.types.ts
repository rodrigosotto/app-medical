/**
 * Types relacionados a usuários
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "doctor" | "patient";
  avatar?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: User["role"];
  phone?: string;
}

export interface UpdateUserDto
  extends Partial<Omit<CreateUserDto, "password">> {
  id: string;
}

/**
 * Types relacionados a usuários
 */
export interface User {
  id: number;
  name: string;
  email: string;
  type: 'medico' | 'paciente';
  password?: string;
  createdAt: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  type: 'medico' | 'paciente';
}

export interface UpdateUserDto {
  id: number;
  name?: string;
  email?: string;
  type?: 'medico' | 'paciente';
}

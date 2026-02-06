import { ReactNode } from 'react';

/**
 * Types relacionados a usuários
 */
export interface User {
  role: ReactNode;
  phone: any;
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

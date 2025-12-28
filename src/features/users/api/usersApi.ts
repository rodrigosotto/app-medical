import { apiClient } from "@/services/api/client";
import { User, CreateUserDto, UpdateUserDto } from "../types/user.types";

/**
 * Endpoints de usuários
 */
export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const { data } = await apiClient.get<User[]>("/users");
    return data;
  },

  getById: async (id: string): Promise<User> => {
    const { data } = await apiClient.get<User>(`/users/${id}`);
    return data;
  },

  create: async (user: CreateUserDto): Promise<User> => {
    const { data } = await apiClient.post<User>("/users", user);
    return data;
  },

  update: async ({ id, ...user }: UpdateUserDto): Promise<User> => {
    const { data } = await apiClient.put<User>(`/users/${id}`, user);
    return data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
  },
};

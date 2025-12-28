import { QueryClient } from "@tanstack/react-query";
import { queryClientConfig } from "@/config/queryClient.config";

/**
 * Instância única do QueryClient
 * Usada em toda a aplicação para gerenciar cache e requisições
 */
export const queryClient = new QueryClient(queryClientConfig);

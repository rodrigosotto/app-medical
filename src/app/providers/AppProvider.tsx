import { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";

interface AppProviderProps {
  children: ReactNode;
}

/**
 * Provider principal da aplicação
 * Combina todos os providers necessários em um único componente
 */
export function AppProvider({ children }: AppProviderProps) {
  return <QueryProvider>{children}</QueryProvider>;
}

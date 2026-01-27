import { ReactNode } from 'react';
import { QueryProvider } from './QueryProvider';
import { ToastProvider } from '@/hooks/useToast';
import { ToastContainer } from '@/components/common/ToastContainer';

interface AppProviderProps {
  children: ReactNode;
}

/**
 * Provider principal da aplicação
 * Combina todos os providers necessários em um único componente
 */
export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryProvider>
      <ToastProvider>
        {children}
        <ToastContainer />
      </ToastProvider>
    </QueryProvider>
  );
}

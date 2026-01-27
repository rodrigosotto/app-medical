import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { UserTypeSelectionModal } from './UserTypeSelectionModal';

export interface RegisterFormProps {
  onClose?: () => void;
}

/**
 * Componente de formulário de registro
 */
export function RegisterForm({ onClose }: RegisterFormProps) {
  const [showTypeSelection, setShowTypeSelection] = useState(true);
  const navigate = useNavigate();

  const handleSelectType = (type: 'medico' | 'paciente') => {
    setShowTypeSelection(false);

    // Navegar para a página correspondente
    if (type === 'medico') {
      navigate({ to: '/register/doctor' });
    } else {
      navigate({ to: '/register/patient' });
    }

    // Fechar a modal de registro se existir
    if (onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Se a modal de seleção está aberta, renderiza ela
  if (showTypeSelection) {
    return (
      <UserTypeSelectionModal isOpen={true} onClose={handleClose} onSelectType={handleSelectType} />
    );
  }

  return null;
}

import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { PatientDashboard } from './PatientDashboard';
import { DoctorDashboard } from './DoctorDashboard';

interface User {
  id: number;
  name: string;
  email: string;
  type: 'medico' | 'paciente';
}

export function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      // Redirecionar para login se não estiver autenticado
      navigate({ to: '/login' });
      return;
    }

    try {
      const userData = JSON.parse(userStr);
      setUser(userData);
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
      navigate({ to: '/login' });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <p>Carregando...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Renderizar dashboard específico baseado no tipo de usuário
  if (user.type === 'paciente') {
    return <PatientDashboard />;
  }

  if (user.type === 'medico') {
    return <DoctorDashboard />;
  }

  // Fallback para tipo inválido
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ color: '#ef4444' }}>Erro</h1>
      <p>Tipo de usuário inválido.</p>
    </div>
  );
}

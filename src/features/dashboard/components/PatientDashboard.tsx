import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  type: 'medico' | 'paciente';
}

export function PatientDashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Carregar usuário do localStorage
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const userData = JSON.parse(userStr);
      setUser(userData);
    }
  }, []);

  if (!user) {
    return (
      <div style={{ padding: '24px' }}>
        <p>Carregando...</p>
      </div>
    );
  }

  // Verificar se é paciente
  if (user.type !== 'paciente') {
    return (
      <div style={{ padding: '24px' }}>
        <h1 style={{ color: '#ef4444' }}>Acesso Negado</h1>
        <p>Esta área é exclusiva para pacientes.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '2rem',
        }}
      >
        Seja bem-vindo, paciente {user.name}
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
        {/* Card: Minhas Consultas */}
        <div
          style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            📅 Minhas Consultas
          </h3>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Visualize e gerencie suas consultas agendadas
          </p>
        </div>

        {/* Card: Meus Médicos */}
        <div
          style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            🩺 Meus Médicos
          </h3>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Lista de médicos que você já consultou
          </p>
        </div>

        {/* Card: Meu Perfil */}
        <div
          style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            👤 Meu Perfil
          </h3>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Atualize seus dados pessoais e de contato
          </p>
        </div>

        {/* Card: Histórico Médico */}
        <div
          style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            📋 Histórico Médico
          </h3>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Acesse seu histórico completo de consultas e exames
          </p>
        </div>
      </div>
    </div>
  );
}

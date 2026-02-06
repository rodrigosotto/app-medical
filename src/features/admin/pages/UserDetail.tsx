import { useParams } from '@tanstack/react-router';

export function UserDetail() {
  const { userId } = useParams({ strict: false });
  const user = {
    name: 'Maria Santos',
    email: 'maria@email.com',
    type: 'Paciente',
    status: 'ativo',
    joined: '01/01/2026',
    phone: '(11) 98765-4321',
    cpf: '***. 456.789-**',
    address: 'São Paulo - SP',
    stats: {
      consultations: 12,
      prescriptions: 8,
      orders: 5,
    },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Detalhes do Usuário
        </h1>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
              }}
            >
              👤
            </div>
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.name}
              </h2>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    background: 'rgba(76, 175, 80, 0.2)',
                    color: '#4CAF50',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {user.type}
                </span>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    background:
                      user.status === 'ativo' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
                    color: user.status === 'ativo' ? '#4CAF50' : '#F44336',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Email
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.email}
              </div>
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Telefone
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.phone}
              </div>
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                CPF
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.cpf}
              </div>
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Cadastro
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.joined}
              </div>
            </div>
          </div>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Estatísticas
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div
              style={{
                background: 'rgba(33, 150, 243, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#2196F3',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.stats.consultations}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Consultas
              </div>
            </div>
            <div
              style={{
                background: 'rgba(76, 175, 80, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#4CAF50',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.stats.prescriptions}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Receitas
              </div>
            </div>
            <div
              style={{
                background: 'rgba(255, 193, 7, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#FFC107',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.stats.orders}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Pedidos
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{
              flex: 1,
              padding: '1rem',
              background:
                user.status === 'ativo' ? 'rgba(244, 67, 54, 0.2)' : 'rgba(76, 175, 80, 0.2)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            {user.status === 'ativo' ? '🚫 Desativar Usuário' : '✅ Ativar Usuário'}
          </button>
          <button
            style={{
              flex: 1,
              padding: '1rem',
              background: 'rgba(33, 150, 243, 0.2)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ✏️ Editar Usuário
          </button>
        </div>
      </div>
    </div>
  );
}

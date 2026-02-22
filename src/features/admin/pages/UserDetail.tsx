export function UserDetail() {
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
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Detalhes do Usuário
        </h1>

        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
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
                  color: 'var(--page-text)',
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
                    background: 'var(--color-success-bg)',
                    color: 'var(--color-success)',
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
                      user.status === 'ativo' ? 'var(--badge-active-bg)' : 'var(--badge-expired-bg)',
                    color: user.status === 'ativo' ? 'var(--badge-active-text)' : 'var(--badge-expired-text)',
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
                background: 'var(--glass-shadow)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
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
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.email}
              </div>
            </div>
            <div
              style={{
                background: 'var(--glass-shadow)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
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
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.phone}
              </div>
            </div>
            <div
              style={{
                background: 'var(--glass-shadow)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
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
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.cpf}
              </div>
            </div>
            <div
              style={{
                background: 'var(--glass-shadow)',
                borderRadius: '12px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
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
                  color: 'var(--page-text)',
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
              color: 'var(--page-text)',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Estatísticas
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div
              style={{
                background: 'var(--color-info-bg)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-info)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.stats.consultations}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Consultas
              </div>
            </div>
            <div
              style={{
                background: 'var(--color-success-bg)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-success)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.stats.prescriptions}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Receitas
              </div>
            </div>
            <div
              style={{
                background: 'var(--color-warning-bg)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-warning)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {user.stats.orders}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--page-text)',
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
                user.status === 'ativo' ? 'var(--color-danger-bg)' : 'var(--color-success-bg)',
              border: 'none',
              borderRadius: '12px',
              color: 'var(--page-text)',
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
              background: 'var(--color-info-bg)',
              border: 'none',
              borderRadius: '12px',
              color: 'var(--page-text)',
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

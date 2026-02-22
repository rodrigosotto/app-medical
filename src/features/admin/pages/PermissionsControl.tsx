export function PermissionsControl() {
  const roles = [
    { id: 1, name: 'Administrador', users: 5, permissions: ['Todas as permissões'] },
    {
      id: 2,
      name: 'Médico',
      users: 342,
      permissions: ['Gerenciar pacientes', 'Criar receitas', 'Ver estatísticas'],
    },
    {
      id: 3,
      name: 'Paciente',
      users: 2200,
      permissions: ['Agendar consultas', 'Ver histórico', 'Comprar produtos'],
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Controle de Permissões
        </h1>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {roles.map((role) => (
            <div
              key={role.id}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                padding: '2rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'var(--page-text)',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {role.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {role.users} usuários com esta função
                  </div>
                </div>
                <button
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'var(--color-info-bg)',
                    border: '1px solid rgba(33, 150, 243, 0.5)',
                    borderRadius: '12px',
                    color: 'var(--color-info)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  ✏️ Editar Permissões
                </button>
              </div>

              <div
                style={{
                  background: 'var(--glass-shadow)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                }}
              >
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    marginBottom: '1rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Permissões:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {role.permissions.map((permission, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--color-success-bg)',
                        border: '1px solid rgba(76, 175, 80, 0.5)',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        color: 'var(--color-success)',
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      ✓ {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function UsersManagement() {
  const [filter, setFilter] = useState('todos');
  const [search, setSearch] = useState('');
  const users = [
    {
      id: 1,
      name: 'Maria Santos',
      email: 'maria@email.com',
      type: 'Paciente',
      status: 'ativo',
      joined: '01/01/2026',
    },
    {
      id: 2,
      name: 'Dr. Carlos Mendes',
      email: 'carlos@clinica.com',
      type: 'Médico',
      status: 'ativo',
      joined: '15/12/2025',
    },
    {
      id: 3,
      name: 'João Silva',
      email: 'joao@email.com',
      type: 'Paciente',
      status: 'inativo',
      joined: '10/11/2025',
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
          Gerenciamento de Usuários
        </h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Buscar usuários..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border-strong)',
              borderRadius: '12px',
              color: 'var(--page-text)',
              fontSize: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['todos', 'pacientes', 'medicos', 'ativos', 'inativos'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '0.75rem 1rem',
                  background:
                    filter === f ? 'var(--glass-bg-active)' : 'var(--glass-bg)',
                  border: '1px solid var(--glass-border-strong)',
                  borderRadius: '12px',
                  color: 'var(--page-text)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Nome
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Tipo
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Cadastro
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {user.name}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {user.email}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          background:
                            user.type === 'Médico'
                              ? 'var(--color-info-bg)'
                              : 'var(--color-success-bg)',
                          color: user.type === 'Médico' ? 'var(--color-info)' : 'var(--color-success)',
                        }}
                      >
                        {user.type}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          background:
                            user.status === 'ativo'
                              ? 'var(--badge-active-bg)'
                              : 'var(--badge-expired-bg)',
                          color: user.status === 'ativo' ? 'var(--badge-active-text)' : 'var(--badge-expired-text)',
                        }}
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {user.joined}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                      }}
                    >
                      <Link
                        to="/admin/users/$id"
                        params={{ id: String(user.id) }}
                        style={{ color: 'var(--color-info)', textDecoration: 'none', fontSize: '1.25rem' }}
                      >
                        👁️
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

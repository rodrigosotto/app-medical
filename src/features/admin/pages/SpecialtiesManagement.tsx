import { FormEvent, useState } from 'react';

export function SpecialtiesManagement() {
  const [specialties, setSpecialties] = useState([
    { id: 1, name: 'Cardiologia', doctors: 45, active: true },
    { id: 2, name: 'Dermatologia', doctors: 32, active: true },
    { id: 3, name: 'Pediatria', doctors: 58, active: true },
    { id: 4, name: 'Ortopedia', doctors: 41, active: true },
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Especialidade adicionada com sucesso!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Gerenciar Especialidades
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
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ➕ Adicionar Nova Especialidade
          </h3>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}
          >
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Nome da Especialidade
              </label>
              <input
                type="text"
                placeholder="Ex: Neurologia"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.938rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Adicionar
            </button>
          </form>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            📋 Especialidades Cadastradas
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Especialidade
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Médicos
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
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
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {specialties.map((specialty) => (
                  <tr key={specialty.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {specialty.name}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {specialty.doctors}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          background: specialty.active
                            ? 'rgba(76, 175, 80, 0.2)'
                            : 'rgba(244, 67, 54, 0.2)',
                          color: specialty.active ? '#4CAF50' : '#F44336',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {specialty.active ? 'Ativa' : 'Inativa'}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <button
                        style={{
                          background: 'rgba(33, 150, 243, 0.2)',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '0.5rem',
                          color: '#2196F3',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          marginRight: '0.5rem',
                        }}
                      >
                        ✏️
                      </button>
                      <button
                        style={{
                          background: 'rgba(244, 67, 54, 0.2)',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '0.5rem',
                          color: '#F44336',
                          cursor: 'pointer',
                          fontSize: '1rem',
                        }}
                      >
                        🗑️
                      </button>
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

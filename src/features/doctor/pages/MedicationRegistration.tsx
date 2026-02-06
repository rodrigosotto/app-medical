import { FormEvent, useState } from 'react';

export function MedicationRegistration() {
  const [medications] = useState([
    { id: 1, name: 'Losartana 50mg', category: 'Anti-hipertensivo', stock: 150 },
    { id: 2, name: 'Paracetamol 500mg', category: 'Analgésico', stock: 320 },
    { id: 3, name: 'Omeprazol 20mg', category: 'Antiácido', stock: 89 },
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Medicamento cadastrado com sucesso!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Cadastro de Medicamentos
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '2rem' }}>
          <div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '2rem',
              height: 'fit-content',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Novo Medicamento
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Nome do medicamento"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontSize: '0.938rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Categoria
                </label>
                <select
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontSize: '0.938rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  <option value="">Selecione...</option>
                  <option>Analgésico</option>
                  <option>Antibiótico</option>
                  <option>Anti-hipertensivo</option>
                  <option>Antiácido</option>
                </select>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Dosagem
                </label>
                <input
                  type="text"
                  placeholder="Ex: 50mg"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontSize: '0.938rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Estoque Inicial
                </label>
                <input
                  type="number"
                  placeholder="0"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontSize: '0.938rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--gradient-success)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                ✅ Cadastrar
              </button>
            </form>
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
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Medicamentos Cadastrados
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '0.75rem',
                        textAlign: 'left',
                        borderBottom: '1px solid var(--glass-border)',
                        color: 'var(--page-text)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      Medicamento
                    </th>
                    <th
                      style={{
                        padding: '0.75rem',
                        textAlign: 'left',
                        borderBottom: '1px solid var(--glass-border)',
                        color: 'var(--page-text)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      Categoria
                    </th>
                    <th
                      style={{
                        padding: '0.75rem',
                        textAlign: 'center',
                        borderBottom: '1px solid var(--glass-border)',
                        color: 'var(--page-text)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      Estoque
                    </th>
                    <th
                      style={{
                        padding: '0.75rem',
                        textAlign: 'center',
                        borderBottom: '1px solid var(--glass-border)',
                        color: 'var(--page-text)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {medications.map((med) => (
                    <tr key={med.id}>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--glass-divider)',
                          color: 'var(--page-text)',
                          fontSize: '0.938rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {med.name}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--glass-divider)',
                          color: 'var(--page-text)',
                          fontSize: '0.938rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {med.category}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--glass-divider)',
                          textAlign: 'center',
                          color: 'var(--page-text)',
                          fontSize: '0.938rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        <span
                          style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '8px',
                            background:
                              med.stock < 100 ? 'var(--color-warning-bg)' : 'var(--color-success-bg)',
                            color: med.stock < 100 ? 'var(--color-warning)' : 'var(--color-success)',
                            fontWeight: 600,
                          }}
                        >
                          {med.stock}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--glass-divider)',
                          textAlign: 'center',
                        }}
                      >
                        <button
                          style={{
                            background: 'var(--color-info-bg)',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.5rem',
                            color: 'var(--color-info)',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            marginRight: '0.5rem',
                          }}
                        >
                          ✏️
                        </button>
                        <button
                          style={{
                            background: 'var(--badge-expired-bg)',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.5rem',
                            color: 'var(--badge-expired-text)',
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
    </div>
  );
}

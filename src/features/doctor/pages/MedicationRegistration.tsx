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
          Cadastro de Medicamentos
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '2rem' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              height: 'fit-content',
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
              Novo Medicamento
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
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
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Nome do medicamento"
                  required
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
              <div style={{ marginBottom: '1rem' }}>
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
                  Categoria
                </label>
                <select
                  required
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
                    color: '#ffffff',
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
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
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
                    color: '#ffffff',
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
                  width: '100%',
                  padding: '0.75rem',
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
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
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          fontSize: '0.938rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {med.name}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          fontSize: '0.938rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {med.category}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          textAlign: 'center',
                          color: '#ffffff',
                          fontSize: '0.938rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        <span
                          style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '8px',
                            background:
                              med.stock < 100 ? 'rgba(255, 193, 7, 0.2)' : 'rgba(76, 175, 80, 0.2)',
                            color: med.stock < 100 ? '#FFC107' : '#4CAF50',
                            fontWeight: 600,
                          }}
                        >
                          {med.stock}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
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
    </div>
  );
}

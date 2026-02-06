import { FormEvent, useState } from 'react';

export function MedicationsDatabase() {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      manufacturer: 'Farmacorp',
      category: 'Analgésico',
      active: true,
    },
    {
      id: 2,
      name: 'Amoxicilina 500mg',
      manufacturer: 'Medlab',
      category: 'Antibiótico',
      active: true,
    },
    {
      id: 3,
      name: 'Losartana 50mg',
      manufacturer: 'Cardiopharma',
      category: 'Anti-hipertensivo',
      active: true,
    },
    {
      id: 4,
      name: 'Omeprazol 20mg',
      manufacturer: 'Gastrolab',
      category: 'Protetor gástrico',
      active: true,
    },
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Medicamento adicionado com sucesso!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Banco de Medicamentos
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
            💊 Adicionar Novo Medicamento
          </h3>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
          >
            <div>
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
                Nome do Medicamento
              </label>
              <input
                type="text"
                placeholder="Ex: Dipirona 500mg"
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
            <div>
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
                Fabricante
              </label>
              <input
                type="text"
                placeholder="Ex: Laboratório ABC"
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
            <div>
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
                <option>Analgésico</option>
                <option>Antibiótico</option>
                <option>Anti-hipertensivo</option>
                <option>Antidiabético</option>
                <option>Protetor gástrico</option>
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
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
                Adicionar Medicamento
              </button>
            </div>
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#ffffff',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📋 Medicamentos Cadastrados
            </h3>
            <input
              type="text"
              placeholder="🔍 Buscar medicamento..."
              style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.938rem',
                width: '300px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            />
          </div>

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
                    Medicamento
                  </th>
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
                    Fabricante
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
                    Categoria
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
                {medications.map((med) => (
                  <tr key={med.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {med.name}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {med.manufacturer}
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
                          background: 'rgba(33, 150, 243, 0.2)',
                          color: '#2196F3',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {med.category}
                      </span>
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
                          background: med.active
                            ? 'rgba(76, 175, 80, 0.2)'
                            : 'rgba(244, 67, 54, 0.2)',
                          color: med.active ? '#4CAF50' : '#F44336',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {med.active ? 'Ativo' : 'Inativo'}
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

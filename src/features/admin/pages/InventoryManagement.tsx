export function InventoryManagement() {
  const inventory = [
    {
      id: 1,
      product: 'Termômetro Digital',
      category: 'Equipamentos',
      stock: 45,
      minStock: 20,
      status: 'ok',
    },
    {
      id: 2,
      product: 'Máscara Cirúrgica (50un)',
      category: 'Proteção',
      stock: 120,
      minStock: 50,
      status: 'ok',
    },
    {
      id: 3,
      product: 'Álcool Gel 70%',
      category: 'Higiene',
      stock: 8,
      minStock: 30,
      status: 'baixo',
    },
    {
      id: 4,
      product: 'Oxímetro Digital',
      category: 'Equipamentos',
      stock: 3,
      minStock: 10,
      status: 'critico',
    },
  ];

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
          Gestão de Estoque
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {[
            { label: 'Total de Produtos', value: 156, icon: '📦', color: '#2196F3' },
            { label: 'Estoque Baixo', value: 12, icon: '⚠️', color: '#FFC107' },
            { label: 'Estoque Crítico', value: 3, icon: '🚨', color: '#F44336' },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '1.5rem',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: stat.color,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
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
            Status do Inventário
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
                    Produto
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
                    Estoque Atual
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
                    Estoque Mínimo
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
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {item.product}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {item.category}
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
                      {item.stock}
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
                      {item.minStock}
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
                          background:
                            item.status === 'ok'
                              ? 'rgba(76, 175, 80, 0.2)'
                              : item.status === 'baixo'
                                ? 'rgba(255, 193, 7, 0.2)'
                                : 'rgba(244, 67, 54, 0.2)',
                          color:
                            item.status === 'ok'
                              ? '#4CAF50'
                              : item.status === 'baixo'
                                ? '#FFC107'
                                : '#F44336',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {item.status === 'ok'
                          ? 'OK'
                          : item.status === 'baixo'
                            ? 'Baixo'
                            : 'Crítico'}
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
                          padding: '0.5rem 1rem',
                          background: 'rgba(33, 150, 243, 0.2)',
                          border: '1px solid rgba(33, 150, 243, 0.5)',
                          borderRadius: '8px',
                          color: '#2196F3',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        ➕ Repor
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

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
            { label: 'Total de Produtos', value: 156, icon: '📦', color: 'var(--color-info)' },
            { label: 'Estoque Baixo', value: 12, icon: '⚠️', color: 'var(--color-warning)' },
            { label: 'Estoque Crítico', value: 3, icon: '🚨', color: 'var(--badge-expired-text)' },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                padding: '1.5rem',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {item.product}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {item.category}
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
                      {item.stock}
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
                      {item.minStock}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
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
                              ? 'var(--badge-active-bg)'
                              : item.status === 'baixo'
                                ? 'var(--color-warning-bg)'
                                : 'var(--badge-expired-bg)',
                          color:
                            item.status === 'ok'
                              ? 'var(--badge-active-text)'
                              : item.status === 'baixo'
                                ? 'var(--color-warning)'
                                : 'var(--badge-expired-text)',
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
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                      }}
                    >
                      <button
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'var(--color-info-bg)',
                          border: '1px solid rgba(33, 150, 243, 0.5)',
                          borderRadius: '8px',
                          color: 'var(--color-info)',
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

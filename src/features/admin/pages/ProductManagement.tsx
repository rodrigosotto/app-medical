import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function ProductManagement() {
  const [search, setSearch] = useState('');
  const products = [
    {
      id: 1,
      name: 'Termômetro Digital',
      category: 'Equipamentos',
      price: 45.9,
      stock: 45,
      status: 'ativo',
    },
    {
      id: 2,
      name: 'Máscara Cirúrgica (50un)',
      category: 'Proteção',
      price: 29.9,
      stock: 120,
      status: 'ativo',
    },
    { id: 3, name: 'Álcool Gel 70%', category: 'Higiene', price: 12.9, stock: 8, status: 'ativo' },
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Gerenciar Produtos
          </h1>
          <Link
            to="/admin/products/add"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--gradient-success)',
              border: 'none',
              borderRadius: '12px',
              color: 'var(--page-text)',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ➕ Novo Produto
          </Link>
        </div>

        <input
          type="text"
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            marginBottom: '2rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border-strong)',
            borderRadius: '12px',
            color: 'var(--page-text)',
            fontSize: '1rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        />

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
                    Preço
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
                    Estoque
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
                {products.map((product) => (
                  <tr key={product.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {product.name}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {product.category}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                        color: 'var(--color-success)',
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      R$ {product.price.toFixed(2)}
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
                            product.stock < 10
                              ? 'var(--color-danger-bg)'
                              : 'var(--color-success-bg)',
                          color: product.stock < 10 ? 'var(--color-danger)' : 'var(--color-success)',
                        }}
                      >
                        {product.stock}
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
                          background: 'var(--color-success-bg)',
                          color: 'var(--color-success)',
                        }}
                      >
                        Ativo
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <Link
                          to={'/admin/products/$productId/edit' as string}
                          params={{ productId: String(product.id) } as any}
                          style={{
                            background: 'var(--color-info-bg)',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.5rem',
                            color: 'var(--color-info)',
                            fontSize: '1rem',
                            textDecoration: 'none',
                          }}
                        >
                          ✏️
                        </Link>
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
                      </div>
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

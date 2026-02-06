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
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
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
              color: '#ffffff',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Gerenciar Produtos
          </h1>
          <Link
            to="/admin/products/add"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #4CAF50, #45a049)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
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
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            color: '#ffffff',
            fontSize: '1rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        />

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    Preço
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
                    Estoque
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
                {products.map((product) => (
                  <tr key={product.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {product.name}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {product.category}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                        color: '#4CAF50',
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      R$ {product.price.toFixed(2)}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
                              ? 'rgba(244, 67, 54, 0.2)'
                              : 'rgba(76, 175, 80, 0.2)',
                          color: product.stock < 10 ? '#F44336' : '#4CAF50',
                        }}
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
                          background: 'rgba(76, 175, 80, 0.2)',
                          color: '#4CAF50',
                        }}
                      >
                        Ativo
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <Link
                          to={'/admin/products/$productId/edit' as string}
                          params={{ productId: String(product.id) } as any}
                          style={{
                            background: 'rgba(33, 150, 243, 0.2)',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.5rem',
                            color: '#2196F3',
                            fontSize: '1rem',
                            textDecoration: 'none',
                          }}
                        >
                          ✏️
                        </Link>
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

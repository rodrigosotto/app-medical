import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function ProductCatalog() {
  const [category, setCategory] = useState('todos');
  const products = [
    {
      id: 1,
      name: 'Termômetro Digital',
      price: 45.9,
      image: '🌡️',
      category: 'equipamentos',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Máscara Cirúrgica (50un)',
      price: 29.9,
      image: '😷',
      category: 'protecao',
      rating: 4.8,
    },
    { id: 3, name: 'Álcool Gel 70%', price: 12.9, image: '🧴', category: 'higiene', rating: 4.7 },
    {
      id: 4,
      name: 'Oxímetro Digital',
      price: 89.9,
      image: '📟',
      category: 'equipamentos',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Vitamina C 1000mg',
      price: 35.9,
      image: '💊',
      category: 'suplementos',
      rating: 4.9,
    },
    {
      id: 6,
      name: 'Band-Aid Transparente',
      price: 8.9,
      image: '🩹',
      category: 'primeiros-socorros',
      rating: 4.4,
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
            Loja de Produtos
          </h1>
          <Link
            to="/ecommerce/cart"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              color: '#ffffff',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            🛒 Carrinho (3)
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto' }}>
          {[
            'todos',
            'equipamentos',
            'protecao',
            'higiene',
            'suplementos',
            'primeiros-socorros',
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '0.75rem 1.5rem',
                background:
                  category === cat ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/ecommerce/products/${product.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
              >
                <div style={{ fontSize: '5rem', textAlign: 'center', marginBottom: '1rem' }}>
                  {product.image}
                </div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {product.name}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ color: '#FFC107' }}>⭐</span>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {product.rating}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#4CAF50',
                    marginBottom: '1rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  R$ {product.price.toFixed(2)}
                </div>
                <button
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
                  🛒 Adicionar ao Carrinho
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

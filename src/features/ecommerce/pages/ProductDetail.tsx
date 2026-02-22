import { useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';

export function ProductDetail() {
  const { productId } = useParams({ strict: false });
  const [quantity, setQuantity] = useState(1);
  const product = {
    name: 'Termômetro Digital',
    price: 45.9,
    image: '🌡️',
    rating: 4.5,
    reviews: 127,
    description:
      'Termômetro digital de alta precisão com leitura rápida em 60 segundos. Display LCD de fácil leitura, memória da última medição e desligamento automático.',
    features: [
      'Precisão de ±0.1°C',
      'Leitura em 60 segundos',
      "À prova d'água",
      'Bateria de longa duração',
    ],
    stock: 45,
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
        <Link
          to="/ecommerce/products"
          style={{
            display: 'inline-flex',
            color: 'var(--page-text)',
            textDecoration: 'none',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ← Voltar para Loja
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: '15rem', textAlign: 'center' }}>{product.image}</div>
          </div>

          <div>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                marginBottom: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {product.name}
            </h1>

            <div
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-warning)', fontSize: '1.25rem' }}>⭐</span>
                <span
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {product.rating}
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.938rem',
                  color: 'var(--glass-text-muted)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                ({product.reviews} avaliações)
              </span>
            </div>

            <div
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--color-success)',
                marginBottom: '2rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              R$ {product.price.toFixed(2)}
            </div>

            <div
              style={{
                background: 'var(--glass-bg)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Descrição
              </h3>
              <p
                style={{
                  fontSize: '0.938rem',
                  color: 'var(--glass-text-faint)',
                  lineHeight: 1.6,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {product.description}
              </p>
            </div>

            <div
              style={{
                background: 'var(--glass-bg)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Características
              </h3>
              <ul
                style={{
                  fontSize: '0.938rem',
                  color: 'var(--glass-text-faint)',
                  paddingLeft: '1.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {product.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
            >
              <label
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Quantidade:
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    minWidth: '40px',
                    textAlign: 'center',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {product.stock} disponíveis
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: 'var(--gradient-success)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'var(--page-text)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                🛒 Adicionar ao Carrinho
              </button>
              <Link
                to="/ecommerce/checkout"
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: 'var(--gradient-info)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'var(--page-text)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Comprar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

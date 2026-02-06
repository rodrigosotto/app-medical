import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Termômetro Digital', price: 45.9, image: '🌡️', quantity: 1 },
    { id: 2, name: 'Máscara Cirúrgica (50un)', price: 29.9, image: '😷', quantity: 2 },
    { id: 3, name: 'Álcool Gel 70%', price: 12.9, image: '🧴', quantity: 1 },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setItems(items.filter((item) => item.id !== id));
    } else {
      setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15.0;
  const total = subtotal + shipping;

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
          Carrinho de Compras
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {items.length === 0 ? (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '3rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🛒</div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Seu carrinho está vazio
                </h3>
                <Link
                  to="/ecommerce/products"
                  style={{
                    display: 'inline-block',
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
                  Ir para Loja
                </Link>
              </div>
            ) : (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '2rem',
                }}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                    }}
                  >
                    <div style={{ fontSize: '4rem' }}>{item.image}</div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '0.5rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {item.name}
                      </h3>
                      <div
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#4CAF50',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        R$ {item.price.toFixed(2)}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#ffffff',
                            fontSize: '1rem',
                            cursor: 'pointer',
                          }}
                        >
                          -
                        </button>
                        <span
                          style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#ffffff',
                            minWidth: '30px',
                            textAlign: 'center',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#ffffff',
                            fontSize: '1rem',
                            cursor: 'pointer',
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        style={{
                          color: '#F44336',
                          background: 'none',
                          border: 'none',
                          fontSize: '1.25rem',
                          cursor: 'pointer',
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

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
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Resumo do Pedido
            </h3>

            <div
              style={{
                fontSize: '0.938rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                }}
              >
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                }}
              >
                <span>Frete:</span>
                <span>R$ {shipping.toFixed(2)}</span>
              </div>
              <div
                style={{ height: '1px', background: 'rgba(255, 255, 255, 0.2)', margin: '1rem 0' }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                <span>Total:</span>
                <span style={{ color: '#4CAF50' }}>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/ecommerce/checkout"
              style={{
                display: 'block',
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                border: 'none',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1.125rem',
                fontWeight: 700,
                textAlign: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Finalizar Compra
            </Link>
            <Link
              to="/ecommerce/products"
              style={{
                display: 'block',
                width: '100%',
                padding: '0.75rem',
                marginTop: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 600,
                textAlign: 'center',
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

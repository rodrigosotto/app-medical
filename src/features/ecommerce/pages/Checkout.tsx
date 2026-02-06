import { FormEvent, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

export function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const items = [
    { id: 1, name: 'Termômetro Digital', price: 45.9, quantity: 1 },
    { id: 2, name: 'Máscara Cirúrgica (50un)', price: 29.9, quantity: 2 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15.0;
  const total = subtotal + shipping;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: '/ecommerce/order-confirmation' });
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
          Finalizar Compra
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}
        >
          <div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '1.5rem',
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
                Dados Pessoais
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
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
                    Nome Completo
                  </label>
                  <input
                    type="text"
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
                    CPF
                  </label>
                  <input
                    type="text"
                    placeholder="000.000.000-00"
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
                <div style={{ gridColumn: 'span 2' }}>
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
                    Email
                  </label>
                  <input
                    type="email"
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
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '1.5rem',
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
                Endereço de Entrega
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
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
                    CEP
                  </label>
                  <input
                    type="text"
                    placeholder="00000-000"
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
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
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
                      Rua
                    </label>
                    <input
                      type="text"
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
                      Número
                    </label>
                    <input
                      type="text"
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
                </div>
              </div>
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
                Forma de Pagamento
              </h3>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { id: 'credit-card', label: 'Cartão de Crédito', icon: '💳' },
                  { id: 'pix', label: 'PIX', icon: '📱' },
                  { id: 'boleto', label: 'Boleto', icon: '📄' },
                ].map((method) => (
                  <label
                    key={method.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background:
                        paymentMethod === method.id
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'rgba(255, 255, 255, 0.05)',
                      border: `2px solid ${paymentMethod === method.id ? '#4CAF50' : 'rgba(255, 255, 255, 0.2)'}`,
                      borderRadius: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      style={{ width: '20px', height: '20px' }}
                    />
                    <span style={{ fontSize: '1.5rem' }}>{method.icon}</span>
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {method.label}
                    </span>
                  </label>
                ))}
              </div>

              {paymentMethod === 'credit-card' && (
                <div style={{ display: 'grid', gap: '1rem' }}>
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
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
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
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
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
                        Validade
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
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
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="000"
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
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                position: 'sticky',
                top: '2rem',
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
                Resumo do Pedido
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '0.75rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  height: '1px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  marginBottom: '1rem',
                }}
              />

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
                  style={{
                    height: '1px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    margin: '1rem 0',
                  }}
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

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                ✅ Confirmar Pedido
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

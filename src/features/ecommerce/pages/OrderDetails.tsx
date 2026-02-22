import { Link, useParams } from '@tanstack/react-router';

export function OrderDetails() {
  const { orderId } = useParams({ strict: false });
  const order = {
    id: orderId || '2026021500127',
    date: '15/02/2026 14:30',
    status: 'Em trânsito',
    payment: 'Cartão de Crédito',
    items: [
      { id: 1, name: 'Termômetro Digital', image: '🌡️', quantity: 1, price: 45.9 },
      { id: 2, name: 'Máscara Cirúrgica (50un)', image: '😷', quantity: 2, price: 29.9 },
    ],
    subtotal: 105.7,
    shipping: 15.0,
    total: 120.7,
    address: {
      street: 'Rua das Flores, 123',
      city: 'São Paulo - SP',
      zip: '01234-567',
    },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link
          to="/ecommerce/orders"
          style={{
            display: 'inline-flex',
            color: 'var(--page-text)',
            textDecoration: 'none',
            marginBottom: '1rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ← Voltar para Meus Pedidos
        </Link>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Pedido #{order.id}
            </h1>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--glass-text-soft)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Realizado em {order.date}
            </p>
          </div>
          <span
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'var(--color-info-bg)',
              color: 'var(--color-info)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            {order.status}
          </span>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
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
              Produtos
            </h3>
            {order.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '1rem',
                  background: 'var(--glass-shadow)',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ fontSize: '4rem' }}>{item.image}</div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: 'var(--page-text)',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {item.name}
                  </h4>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Quantidade: {item.quantity}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-success)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div
              style={{ height: '1px', background: 'rgba(255, 255, 255, 0.2)', margin: '1.5rem 0' }}
            />

            <div
              style={{
                fontSize: '0.938rem',
                color: 'var(--glass-text-faint)',
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
                <span>R$ {order.subtotal.toFixed(2)}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                }}
              >
                <span>Frete:</span>
                <span>R$ {order.shipping.toFixed(2)}</span>
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
                  color: 'var(--page-text)',
                }}
              >
                <span>Total:</span>
                <span style={{ color: 'var(--color-success)' }}>R$ {order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
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
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Endereço de Entrega
              </h3>
              <div
                style={{
                  fontSize: '0.938rem',
                  color: 'var(--glass-text-faint)',
                  lineHeight: 1.8,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                <div>{order.address.street}</div>
                <div>{order.address.city}</div>
                <div>CEP: {order.address.zip}</div>
              </div>
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
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Pagamento
              </h3>
              <div
                style={{
                  fontSize: '0.938rem',
                  color: 'var(--glass-text-faint)',
                  lineHeight: 1.8,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                <div>💳 {order.payment}</div>
                <div style={{ color: 'var(--color-success)', fontWeight: 600 }}>✓ Pagamento aprovado</div>
              </div>
            </div>
          </div>

          {order.status === 'Em trânsito' && (
            <Link
              to={`/ecommerce/orders/${order.id}/tracking`}
              style={{
                display: 'block',
                padding: '1rem',
                background: 'var(--gradient-info)',
                border: 'none',
                borderRadius: '12px',
                color: 'var(--page-text)',
                fontSize: '1.125rem',
                fontWeight: 700,
                textAlign: 'center',
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📍 Rastrear Pedido
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

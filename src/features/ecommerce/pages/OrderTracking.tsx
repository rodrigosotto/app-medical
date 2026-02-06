import { Link, useParams } from '@tanstack/react-router';

export function OrderTracking() {
  const { orderId } = useParams({ strict: false });
  const tracking = [
    { status: 'Pedido Confirmado', date: '15/02/2026 14:30', completed: true },
    { status: 'Pagamento Aprovado', date: '15/02/2026 14:35', completed: true },
    { status: 'Separando Produtos', date: '15/02/2026 15:00', completed: true },
    { status: 'Saiu para Entrega', date: '16/02/2026 09:00', completed: false },
    { status: 'Entregue', date: 'Previsão: 18/02/2026', completed: false },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link
          to="/ecommerce/orders"
          style={{
            display: 'inline-flex',
            color: '#ffffff',
            textDecoration: 'none',
            marginBottom: '1rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ← Voltar para Meus Pedidos
        </Link>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.5rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Rastreamento do Pedido
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Pedido #{orderId || '2026021500127'}
        </p>

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
          <div
            style={{
              background: 'rgba(76, 175, 80, 0.2)',
              border: '1px solid rgba(76, 175, 80, 0.5)',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <span style={{ fontSize: '2rem' }}>📦</span>
            <div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Seu pedido está a caminho!
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Previsão de entrega: 18/02/2026
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', paddingLeft: '60px' }}>
            <div
              style={{
                position: 'absolute',
                left: '20px',
                top: '20px',
                bottom: '20px',
                width: '3px',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
            {tracking.map((step, index) => (
              <div key={index} style={{ position: 'relative', marginBottom: '2rem' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '-48px',
                    top: '10px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: step.completed
                      ? 'linear-gradient(135deg, #4CAF50, #45a049)'
                      : 'rgba(255, 255, 255, 0.2)',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}
                >
                  {step.completed && '✓'}
                </div>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: step.completed ? '#4CAF50' : 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {step.status}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {step.date}
                  </div>
                </div>
              </div>
            ))}
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
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Produtos do Pedido
          </h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { name: 'Termômetro Digital', quantity: 1, image: '🌡️' },
              { name: 'Máscara Cirúrgica (50un)', quantity: 2, image: '😷' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ fontSize: '3rem' }}>{item.image}</div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Quantidade: {item.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

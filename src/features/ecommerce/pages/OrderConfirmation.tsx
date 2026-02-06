import { Link } from '@tanstack/react-router';

export function OrderConfirmation() {
  const order = {
    id: '2026021500127',
    date: '15/02/2026',
    total: 105.7,
    paymentMethod: 'Cartão de Crédito',
    items: [
      { name: 'Termômetro Digital', quantity: 1, price: 45.9 },
      { name: 'Máscara Cirúrgica (50un)', quantity: 2, price: 29.9 },
    ],
    shipping: 15.0,
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '600px', width: '100%' }}>
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
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>✅</div>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Pedido Confirmado!
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Seu pedido foi realizado com sucesso e está sendo processado.
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Número do Pedido:
              </span>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                #{order.id}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Data:
              </span>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {order.date}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Total:
              </span>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#4CAF50',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                R$ {order.total.toFixed(2)}
              </span>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(33, 150, 243, 0.1)',
              border: '1px solid rgba(33, 150, 243, 0.3)',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: '#ffffff',
                margin: 0,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📧 Um email de confirmação foi enviado para você com os detalhes do pedido.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link
              to={`/ecommerce/orders/${order.id}`}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'linear-gradient(135deg, #2196F3, #1976D2)',
                border: 'none',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
                textAlign: 'center',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Acompanhar Pedido
            </Link>
            <Link
              to="/ecommerce/products"
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
                textAlign: 'center',
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

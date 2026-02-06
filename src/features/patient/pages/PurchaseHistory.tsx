import { Link } from '@tanstack/react-router';

export function PurchaseHistory() {
  const orders = [
    {
      id: 1,
      date: '10/02/2026',
      total: 'R$ 127,50',
      status: 'Entregue',
      items: 3,
      tracking: 'BR123456789',
    },
    {
      id: 2,
      date: '05/02/2026',
      total: 'R$ 89,90',
      status: 'Em trânsito',
      items: 2,
      tracking: 'BR987654321',
    },
    {
      id: 3,
      date: '25/01/2026',
      total: 'R$ 245,00',
      status: 'Entregue',
      items: 5,
      tracking: 'BR456789123',
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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link
          to="/patient/dashboard"
          style={{
            display: 'inline-flex',
            color: '#ffffff',
            textDecoration: 'none',
            marginBottom: '1rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ← Voltar
        </Link>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Histórico de Compras
        </h1>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Pedido #{order.id.toString().padStart(6, '0')}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    📅 {order.date} | {order.items} {order.items === 1 ? 'item' : 'itens'}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Rastreio: {order.tracking}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {order.total}
                  </div>
                  <span
                    style={{
                      background:
                        order.status === 'Entregue'
                          ? 'rgba(76, 175, 80, 0.2)'
                          : 'rgba(255, 193, 7, 0.2)',
                      border: `1px solid ${order.status === 'Entregue' ? 'rgba(76, 175, 80, 0.5)' : 'rgba(255, 193, 7, 0.5)'}`,
                      borderRadius: '6px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: order.status === 'Entregue' ? '#4CAF50' : '#FFC107',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <Link
                  to="/ecommerce/orders/$orderId"
                  params={{ orderId: String(order.id) }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Ver Detalhes
                </Link>
                {order.status !== 'Entregue' && (
                  <button
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(33, 150, 243, 0.2)',
                      border: '1px solid rgba(33, 150, 243, 0.5)',
                      borderRadius: '8px',
                      color: '#2196F3',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Rastrear Pedido
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

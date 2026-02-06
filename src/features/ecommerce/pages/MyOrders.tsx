import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function MyOrders() {
  const [filter, setFilter] = useState('todos');
  const orders = [
    { id: '2026021500127', date: '15/02/2026', status: 'Em trânsito', total: 105.7, items: 2 },
    { id: '2026020800089', date: '08/02/2026', status: 'Entregue', total: 68.8, items: 3 },
    { id: '2026020100045', date: '01/02/2026', status: 'Entregue', total: 145.9, items: 4 },
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
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Meus Pedidos
        </h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          {['todos', 'em-transito', 'entregues', 'cancelados'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.75rem 1.5rem',
                background: filter === f ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {f
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
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
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Pedido #{order.id}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    📅 {order.date} • {order.items} {order.items === 1 ? 'item' : 'itens'}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      background:
                        order.status === 'Em trânsito'
                          ? 'rgba(33, 150, 243, 0.2)'
                          : order.status === 'Entregue'
                            ? 'rgba(76, 175, 80, 0.2)'
                            : 'rgba(244, 67, 54, 0.2)',
                      color:
                        order.status === 'Em trânsito'
                          ? '#2196F3'
                          : order.status === 'Entregue'
                            ? '#4CAF50'
                            : '#F44336',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#4CAF50',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  R$ {order.total.toFixed(2)}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link
                    to={`/ecommerce/orders/${order.id}`}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(33, 150, 243, 0.2)',
                      border: '1px solid rgba(33, 150, 243, 0.5)',
                      borderRadius: '8px',
                      color: '#2196F3',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Ver Detalhes
                  </Link>
                  {order.status === 'Em trânsito' && (
                    <Link
                      to={`/ecommerce/orders/${order.id}/tracking`}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(76, 175, 80, 0.2)',
                        border: '1px solid rgba(76, 175, 80, 0.5)',
                        borderRadius: '8px',
                        color: '#4CAF50',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      Rastrear
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

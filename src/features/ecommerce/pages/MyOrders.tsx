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
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
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
                background: filter === f ? 'var(--glass-bg-active)' : 'var(--glass-bg)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '12px',
                color: 'var(--page-text)',
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
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
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
                      color: 'var(--page-text)',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Pedido #{order.id}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
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
                          ? 'var(--color-info-bg)'
                          : order.status === 'Entregue'
                            ? 'var(--badge-active-bg)'
                            : 'var(--badge-expired-bg)',
                      color:
                        order.status === 'Em trânsito'
                          ? 'var(--color-info)'
                          : order.status === 'Entregue'
                            ? 'var(--badge-active-text)'
                            : 'var(--badge-expired-text)',
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
                    color: 'var(--color-success)',
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
                      background: 'var(--color-info-bg)',
                      border: '1px solid rgba(33, 150, 243, 0.5)',
                      borderRadius: '8px',
                      color: 'var(--color-info)',
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
                        background: 'var(--color-success-bg)',
                        border: '1px solid rgba(76, 175, 80, 0.5)',
                        borderRadius: '8px',
                        color: 'var(--color-success)',
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

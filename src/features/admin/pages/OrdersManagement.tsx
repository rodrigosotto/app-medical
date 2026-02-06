import { useState } from 'react';

export function OrdersManagement() {
  const [filter, setFilter] = useState('todos');
  const orders = [
    {
      id: '2026021500127',
      customer: 'Maria Santos',
      date: '15/02/2026',
      total: 105.7,
      status: 'em-transito',
      items: 2,
    },
    {
      id: '2026021400089',
      customer: 'João Silva',
      date: '14/02/2026',
      total: 68.8,
      status: 'entregue',
      items: 3,
    },
    {
      id: '2026021300045',
      customer: 'Ana Costa',
      date: '13/02/2026',
      total: 145.9,
      status: 'processando',
      items: 4,
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
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Gerenciar Pedidos
        </h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          {['todos', 'processando', 'em-transito', 'entregues', 'cancelados'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.75rem 1rem',
                background: filter === f ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
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

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Pedido
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Cliente
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Data
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Itens
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Total
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      #{order.id}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {order.customer}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {order.date}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {order.items}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                        color: '#4CAF50',
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      R$ {order.total.toFixed(2)}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          background:
                            order.status === 'em-transito'
                              ? 'rgba(33, 150, 243, 0.2)'
                              : order.status === 'entregue'
                                ? 'rgba(76, 175, 80, 0.2)'
                                : 'rgba(255, 193, 7, 0.2)',
                          color:
                            order.status === 'em-transito'
                              ? '#2196F3'
                              : order.status === 'entregue'
                                ? '#4CAF50'
                                : '#FFC107',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {order.status
                          .split('-')
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(' ')}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <button
                        style={{
                          background: 'rgba(33, 150, 243, 0.2)',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '0.5rem',
                          color: '#2196F3',
                          cursor: 'pointer',
                          fontSize: '1rem',
                        }}
                      >
                        👁️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

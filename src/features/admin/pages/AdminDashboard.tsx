import { Link } from '@tanstack/react-router';

export function AdminDashboard() {
  const stats = [
    { label: 'Usuários Ativos', value: '2,547', icon: '👥', color: '#2196F3', change: '+12%' },
    { label: 'Médicos Cadastrados', value: '342', icon: '👨‍⚕️', color: '#4CAF50', change: '+8%' },
    { label: 'Consultas Hoje', value: '127', icon: '📅', color: '#FFC107', change: '+5%' },
    { label: 'Receita Mensal', value: 'R$ 145K', icon: '💰', color: '#FF5722', change: '+18%' },
  ];

  const recentActivity = [
    {
      type: 'novo-usuario',
      user: 'Maria Santos',
      action: 'se cadastrou na plataforma',
      time: '5 min',
    },
    {
      type: 'aprovacao',
      user: 'Dr. Carlos Mendes',
      action: 'foi aprovado como médico',
      time: '15 min',
    },
    { type: 'consulta', user: 'João Silva', action: 'agendou uma consulta', time: '32 min' },
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
          Dashboard Administrativo
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
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
                <div style={{ fontSize: '3rem' }}>{stat.icon}</div>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    background: 'rgba(76, 175, 80, 0.2)',
                    color: '#4CAF50',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {stat.change}
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: stat.color,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
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
              Atividade Recente
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{ fontSize: '2rem' }}>
                    {activity.type === 'novo-usuario'
                      ? '👤'
                      : activity.type === 'aprovacao'
                        ? '✅'
                        : '📅'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.938rem',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      <strong>{activity.user}</strong> {activity.action}
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginTop: '0.25rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {activity.time} atrás
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
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Ações Rápidas
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <a
                href="/admin/users"
                style={{
                  padding: '1rem',
                  background: 'rgba(33, 150, 243, 0.2)',
                  border: '1px solid rgba(33, 150, 243, 0.5)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                👥 Gerenciar Usuários
              </a>
              <a
                href="/admin/doctors-approval"
                style={{
                  padding: '1rem',
                  background: 'rgba(76, 175, 80, 0.2)',
                  border: '1px solid rgba(76, 175, 80, 0.5)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                ✅ Aprovar Médicos
              </a>
              <a
                href="/admin/products"
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 193, 7, 0.2)',
                  border: '1px solid rgba(255, 193, 7, 0.5)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                📦 Gerenciar Produtos
              </a>
              <a
                href="/admin/reports/financial"
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 87, 34, 0.2)',
                  border: '1px solid rgba(255, 87, 34, 0.5)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                📊 Relatórios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

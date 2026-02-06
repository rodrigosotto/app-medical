import { Link } from '@tanstack/react-router';

export function DoctorDashboard() {
  const stats = [
    { label: 'Consultas Hoje', value: '8', icon: '📅', color: 'var(--color-info)' },
    { label: 'Pacientes Ativos', value: '156', icon: '👥', color: 'var(--color-success)' },
    { label: 'Receita Mensal', value: 'R$ 48.5k', icon: '💰', color: 'var(--color-warning)' },
    { label: 'Avaliação', value: '4.9', icon: '⭐', color: 'var(--color-warning)' },
  ];

  const todayAppointments = [
    { id: 1, patient: 'Maria Santos', time: '09:00', type: 'Retorno', status: 'Confirmado' },
    {
      id: 2,
      patient: 'João Silva',
      time: '10:30',
      type: 'Primeira Consulta',
      status: 'Aguardando',
    },
    { id: 3, patient: 'Ana Costa', time: '14:00', type: 'Telemedicina', status: 'Confirmado' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
            marginBottom: '0.5rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Painel do Médico
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--glass-text-faint)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Bem-vindo, Dr. Ricardo Almeida 👨‍⚕️
        </p>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'var(--glass-bg-hover)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '16px',
                padding: '1.5rem',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--page-text)',
                  marginBottom: '0.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-soft)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Today's Schedule */}
        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Agenda de Hoje
            </h2>
            <Link
              to={'/doctor/consultations' as string}
              style={{
                color: 'var(--page-text)',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Ver todas →
            </Link>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {todayAppointments.map((apt) => (
              <div
                key={apt.id}
                style={{
                  background: 'var(--glass-bg)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: 'var(--page-text)',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {apt.patient}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    🕐 {apt.time} | {apt.type}
                  </div>
                </div>
                <Link
                  to={`/doctor/consultations/${apt.id}` as string}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--gradient-brand)',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Iniciar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

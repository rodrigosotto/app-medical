import { useState } from 'react';
import { Link } from '@tanstack/react-router';

/**
 * Painel do Paciente
 * Dashboard principal com resumo de consultas, receitas e progresso
 */
export function PatientDashboard() {
  const [patientName] = useState('Maria Santos');

  // Dados simulados
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Ricardo Almeida',
      specialty: 'Cardiologia',
      date: '15/02/2026',
      time: '14:30',
      type: 'Consulta de Retorno',
    },
    {
      id: 2,
      doctor: 'Dra. Juliana Costa',
      specialty: 'Dermatologia',
      date: '20/02/2026',
      time: '10:00',
      type: 'Primeira Consulta',
    },
  ];

  const recentPrescriptions = [
    {
      id: 1,
      medication: 'Paracetamol 500mg',
      doctor: 'Dr. Ricardo Almeida',
      date: '10/02/2026',
      status: 'Ativa',
    },
    {
      id: 2,
      medication: 'Ibuprofeno 600mg',
      doctor: 'Dra. Juliana Costa',
      date: '05/02/2026',
      status: 'Ativa',
    },
  ];

  const stats = [
    { label: 'Consultas Realizadas', value: '12', icon: '📅' },
    { label: 'Receitas Ativas', value: '3', icon: '💊' },
    { label: 'Exames Enviados', value: '8', icon: '📋' },
    { label: 'Próxima Consulta', value: '5 dias', icon: '⏰' },
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
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              marginBottom: '0.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Olá, {patientName}! 👋
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--glass-text-faint)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Bem-vindo ao seu painel de saúde
          </p>
        </div>

        {/* Stats Cards */}
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
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
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

        {/* Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Próximas Consultas */}
          <div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
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
                Próximas Consultas
              </h2>
              <Link
                to="/patient/appointments"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--page-text)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Ver todas →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
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
                        {appointment.doctor}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--glass-text-muted)',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {appointment.specialty}
                      </div>
                    </div>
                    <div
                      style={{
                        background: 'var(--badge-active-bg)',
                        border: '1px solid var(--badge-active-border)',
                        borderRadius: '8px',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--badge-active-text)',
                        height: 'fit-content',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      Confirmado
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-soft)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    <span>📅 {appointment.date}</span>
                    <span>🕐 {appointment.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/patient/appointment-booking"
              style={{
                display: 'block',
                width: '100%',
                padding: '1rem',
                marginTop: '1rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                background: 'var(--page-bg)',
                border: 'none',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              + Agendar Nova Consulta
            </Link>
          </div>

          {/* Receitas Recentes */}
          <div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
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
                Receitas Recentes
              </h2>
              <Link
                to="/patient/prescriptions"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--page-text)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Ver todas →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentPrescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '0.75rem',
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
                        {prescription.medication}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--glass-text-muted)',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        Prescrito por {prescription.doctor}
                      </div>
                    </div>
                    <div
                      style={{
                        background: 'var(--color-info-bg)',
                        border: '1px solid rgba(33, 150, 243, 0.5)',
                        borderRadius: '8px',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--color-info)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {prescription.status}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    📅 Emitida em {prescription.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ marginTop: '2rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              marginBottom: '1.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Ações Rápidas
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              { label: 'Meu Histórico Médico', icon: '📜', to: '/patient/medical-history' },
              { label: 'Enviar Exame', icon: '📤', to: '/patient/upload-exam' },
              { label: 'Meus Exames', icon: '📋', to: '/patient/exams' },
              { label: 'Chat com Médico', icon: '💬', to: '/patient/chat' },
            ].map((action, index) => (
              <Link
                key={index}
                to={action.to}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{action.icon}</div>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {action.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

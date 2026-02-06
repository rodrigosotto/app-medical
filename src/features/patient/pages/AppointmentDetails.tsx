import { Link, useParams } from '@tanstack/react-router';
import type { PatientRouteParams } from '../../../types/router.types';

/**
 * Detalhes da Consulta
 * Exibe informações completas sobre uma consulta específica
 */
export function AppointmentDetails() {
  const params = useParams({ strict: false }) as PatientRouteParams;
  const appointmentId = params.appointmentId;

  // Dados simulados
  const appointment = {
    id: appointmentId || '1',
    doctor: {
      name: 'Dr. Ricardo Almeida',
      specialty: 'Cardiologia',
      crm: 'CRM/SP 123456',
      photo: '👨‍⚕️',
    },
    patient: {
      name: 'Maria Santos',
      age: 35,
      cpf: '***. 456.789-**',
    },
    date: '15/02/2026',
    time: '14:30',
    duration: '30 minutos',
    status: 'Confirmada',
    type: 'Consulta de Retorno',
    modality: 'Telemedicina',
    reason: 'Acompanhamento de pressão arterial',
    notes: 'Trazer exames de sangue recentes',
    location: 'Consultório Virtual - Plataforma de Telemedicina',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            to="/patient/appointments"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#ffffff',
              textDecoration: 'none',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ← Voltar para Minhas Consultas
          </Link>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Detalhes da Consulta
          </h1>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Card Principal - Info da Consulta */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '2rem',
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.type}
                </h2>
                <span
                  style={{
                    background: 'rgba(76, 175, 80, 0.2)',
                    border: '1px solid rgba(76, 175, 80, 0.5)',
                    borderRadius: '8px',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#4CAF50',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.status}
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.25rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Data e Horário
                </div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  📅 {appointment.date} às {appointment.time}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.25rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Duração
                </div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  ⏱️ {appointment.duration}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.25rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Modalidade
                </div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  💻 {appointment.modality}
                </div>
              </div>
            </div>
          </div>

          {/* Informações do Médico */}
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
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Informações do Médico
            </h3>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                }}
              >
                {appointment.doctor.photo}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.doctor.name}
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.25rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.doctor.specialty}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.doctor.crm}
                </div>
              </div>
            </div>
          </div>

          {/* Motivo e Observações */}
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
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Detalhes da Consulta
            </h3>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Motivo da Consulta
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.reason}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Observações
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.notes}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Local
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {appointment.location}
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {appointment.modality === 'Telemedicina' && (
              <button
                style={{
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                🎥 Entrar na Videochamada
              </button>
            )}
            <button
              style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📅 Reagendar
            </button>
            <button
              style={{
                padding: '1rem',
                background: 'rgba(244, 67, 54, 0.2)',
                border: '1px solid rgba(244, 67, 54, 0.5)',
                borderRadius: '12px',
                color: '#F44336',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              ❌ Cancelar Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

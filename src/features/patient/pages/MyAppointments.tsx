import { useState } from 'react';
import { Link } from '@tanstack/react-router';

/**
 * Minhas Consultas
 * Lista de todas as consultas do paciente (agendadas, realizadas, canceladas)
 */
export function MyAppointments() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Dados simulados
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Ricardo Almeida',
      specialty: 'Cardiologia',
      date: '15/02/2026',
      time: '14:30',
      status: 'upcoming',
      type: 'Consulta de Retorno',
      location: 'Consultório - Av. Paulista, 1000',
    },
    {
      id: 2,
      doctor: 'Dra. Juliana Costa',
      specialty: 'Dermatologia',
      date: '20/02/2026',
      time: '10:00',
      status: 'upcoming',
      type: 'Primeira Consulta',
      location: 'Telemedicina',
    },
    {
      id: 3,
      doctor: 'Dr. Carlos Oliveira',
      specialty: 'Ortopedia',
      date: '10/02/2026',
      time: '09:00',
      status: 'completed',
      type: 'Consulta de Retorno',
      location: 'Consultório - Rua das Flores, 123',
    },
    {
      id: 4,
      doctor: 'Dra. Ana Paula',
      specialty: 'Pediatria',
      date: '05/02/2026',
      time: '15:30',
      status: 'completed',
      type: 'Consulta de Rotina',
      location: 'Telemedicina',
    },
    {
      id: 5,
      doctor: 'Dr. Fernando Silva',
      specialty: 'Neurologia',
      date: '01/02/2026',
      time: '11:00',
      status: 'cancelled',
      type: 'Primeira Consulta',
      location: 'Consultório - Av. Paulista, 1000',
    },
  ];

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesFilter = filter === 'all' || appointment.status === filter;
    const matchesSearch =
      appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return {
          bg: 'var(--color-info-bg)',
          border: 'var(--color-info-bg-strong)',
          text: 'var(--color-info)',
          label: 'Agendada',
        };
      case 'completed':
        return {
          bg: 'var(--color-success-bg)',
          border: 'var(--color-success-bg-strong)',
          text: 'var(--color-success)',
          label: 'Realizada',
        };
      case 'cancelled':
        return {
          bg: 'var(--badge-expired-bg)',
          border: 'var(--color-danger-bg-strong)',
          text: 'var(--badge-expired-text)',
          label: 'Cancelada',
        };
      default:
        return {
          bg: 'rgba(158, 158, 158, 0.2)',
          border: 'rgba(158, 158, 158, 0.5)',
          text: 'var(--color-gray-400)',
          label: 'Desconhecido',
        };
    }
  };

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
          <Link
            to="/patient/dashboard"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--page-text)',
              textDecoration: 'none',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ← Voltar ao Painel
          </Link>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Minhas Consultas
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--glass-text-faint)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Gerencie todas as suas consultas médicas
          </p>
        </div>

        {/* Barra de Busca e Filtros */}
        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Buscar por médico ou especialidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '0.75rem 1rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '8px',
                color: 'var(--page-text)',
                fontSize: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            />
            <Link
              to="/patient/appointment-booking"
              style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--page-bg)',
                border: 'none',
                borderRadius: '8px',
                color: 'var(--page-text)',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              + Nova Consulta
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { value: 'all', label: 'Todas' },
              { value: 'upcoming', label: 'Agendadas' },
              { value: 'completed', label: 'Realizadas' },
              { value: 'cancelled', label: 'Canceladas' },
            ].map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value as any)}
                style={{
                  padding: '0.5rem 1rem',
                  background:
                    filter === filterOption.value
                      ? 'rgba(255, 255, 255, 0.25)'
                      : 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${filter === filterOption.value ? 'var(--page-text)' : 'rgba(255, 255, 255, 0.2)'}`,
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  fontSize: '0.875rem',
                  fontWeight: filter === filterOption.value ? 600 : 400,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Consultas */}
        <div style={{ display: 'grid', gap: '1rem' }}>
          {filteredAppointments.length === 0 ? (
            <div
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '3rem',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Nenhuma consulta encontrada
              </p>
            </div>
          ) : (
            filteredAppointments.map((appointment) => {
              const statusStyle = getStatusColor(appointment.status);
              return (
                <div
                  key={appointment.id}
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
                      alignItems: 'start',
                      flexWrap: 'wrap',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'var(--page-text)',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          {appointment.doctor}
                        </h3>
                        <span
                          style={{
                            background: statusStyle.bg,
                            border: `1px solid ${statusStyle.border}`,
                            borderRadius: '6px',
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: statusStyle.text,
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          {statusStyle.label}
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                          gap: '0.75rem',
                          fontSize: '0.875rem',
                          color: 'var(--glass-text-soft)',
                        }}
                      >
                        <div>
                          <strong style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                            Especialidade:
                          </strong>{' '}
                          {appointment.specialty}
                        </div>
                        <div>
                          <strong style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                            Data:
                          </strong>{' '}
                          {appointment.date} às {appointment.time}
                        </div>
                        <div>
                          <strong style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                            Tipo:
                          </strong>{' '}
                          {appointment.type}
                        </div>
                        <div>
                          <strong style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                            Local:
                          </strong>{' '}
                          {appointment.location}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <Link
                        to={`/patient/appointments/${appointment.id}`}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'var(--glass-bg)',
                          border: '1px solid var(--glass-border-strong)',
                          borderRadius: '8px',
                          color: 'var(--page-text)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          whiteSpace: 'nowrap',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        Ver Detalhes
                      </Link>
                      {appointment.status === 'upcoming' && (
                        <button
                          style={{
                            padding: '0.5rem 1rem',
                            background: 'var(--badge-expired-bg)',
                            border: '1px solid rgba(244, 67, 54, 0.5)',
                            borderRadius: '8px',
                            color: 'var(--badge-expired-text)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          Cancelar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

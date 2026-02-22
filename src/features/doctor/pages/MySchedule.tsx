import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function MySchedule() {
  const [selectedDate] = useState('2026-02-15');
  const appointments = [
    { id: 1, time: '09:00', patient: 'Maria Santos', type: 'Retorno', duration: '30min' },
    { id: 2, time: '10:00', patient: 'João Silva', type: 'Primeira Consulta', duration: '45min' },
    { id: 3, time: '14:00', patient: 'Ana Costa', type: 'Emergência', duration: '30min' },
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Minha Agenda
          </h1>
          <Link
            to="/" // Temporarily navigate to home until route is defined
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--gradient-light)',
              border: 'none',
              borderRadius: '12px',
              color: 'var(--color-brand)',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ⚙️ Configurar Disponibilidade
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
          <div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '1.5rem',
              height: 'fit-content',
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                marginBottom: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Calendário
            </h3>
            <input
              type="date"
              value={selectedDate}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                color: 'var(--page-text)',
                fontSize: '0.938rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            />
            <div
              style={{
                marginTop: '1.5rem',
                fontSize: '0.938rem',
                color: 'var(--page-text)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <div
                style={{
                  padding: '0.75rem',
                  background: 'var(--color-success-bg)',
                  borderRadius: '8px',
                  marginBottom: '0.5rem',
                }}
              >
                📅 {appointments.length} consultas
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Sábado, 15 de Fevereiro de 2026
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'var(--glass-bg)',
                    borderRadius: '16px',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--page-text)',
                      minWidth: '60px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {apt.time}
                  </div>
                  <div style={{ flex: 1 }}>
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
                      {apt.type} • {apt.duration}
                    </div>
                  </div>
                  <Link
                    to="/"
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--gradient-success)',
                      border: 'none',
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
    </div>
  );
}

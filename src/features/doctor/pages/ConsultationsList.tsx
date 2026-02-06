import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function ConsultationsList() {
  const [filter, setFilter] = useState('today');
  const consultations = [
    {
      id: 1,
      patient: 'Maria Santos',
      date: '15/02/2026',
      time: '14:30',
      type: 'Retorno',
      status: 'Agendada',
    },
    {
      id: 2,
      patient: 'João Silva',
      date: '15/02/2026',
      time: '15:30',
      type: 'Primeira Consulta',
      status: 'Confirmada',
    },
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
        <Link
          to="/doctor/dashboard"
          style={{
            display: 'inline-flex',
            color: 'var(--page-text)',
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
            color: 'var(--page-text)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Minhas Consultas
        </h1>

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
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {['today', 'week', 'month'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '0.5rem 1rem',
                  background:
                    filter === f ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${filter === f ? 'var(--page-text)' : 'rgba(255, 255, 255, 0.2)'}`,
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {f === 'today' ? 'Hoje' : f === 'week' ? 'Semana' : 'Mês'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {consultations.map((c) => (
            <div
              key={c.id}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {c.patient}
                </h3>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--glass-text-soft)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  📅 {c.date} {c.time} | {c.type}
                </div>
              </div>
              <Link
                to={`/doctor/consultations/${c.id}`}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--gradient-brand)',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

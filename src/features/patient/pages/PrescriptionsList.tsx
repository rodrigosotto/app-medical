import { useState } from 'react';
import { Link } from '@tanstack/react-router';

/**
 * Minhas Receitas
 * Lista de todas as receitas médicas do paciente
 */
export function PrescriptionsList() {
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('all');

  const prescriptions = [
    {
      id: 1,
      medication: 'Losartana 50mg',
      doctor: 'Dr. Ricardo Almeida',
      date: '10/02/2026',
      status: 'active',
      dosage: '1x ao dia',
      duration: '30 dias',
    },
    {
      id: 2,
      medication: 'Paracetamol 500mg',
      doctor: 'Dra. Juliana Costa',
      date: '05/02/2026',
      status: 'active',
      dosage: '3x ao dia',
      duration: '7 dias',
    },
    {
      id: 3,
      medication: 'Ibuprofeno 600mg',
      doctor: 'Dr. Carlos Oliveira',
      date: '25/01/2026',
      status: 'expired',
      dosage: '2x ao dia',
      duration: '10 dias',
    },
  ];

  const filtered = prescriptions.filter((p) => filter === 'all' || p.status === filter);

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
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Minhas Receitas
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
            {[
              { value: 'all', label: 'Todas' },
              { value: 'active', label: 'Ativas' },
              { value: 'expired', label: 'Expiradas' },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value as any)}
                style={{
                  padding: '0.5rem 1rem',
                  background:
                    filter === f.value ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${filter === f.value ? 'var(--page-text)' : 'rgba(255, 255, 255, 0.2)'}`,
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  fontSize: '0.875rem',
                  fontWeight: filter === f.value ? 600 : 400,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {filtered.map((prescription) => (
            <div
              key={prescription.id}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem',
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
                      {prescription.medication}
                    </h3>
                    <span
                      style={{
                        background:
                          prescription.status === 'active'
                            ? 'var(--badge-active-bg)'
                            : 'var(--badge-expired-bg)',
                        border: `1px solid ${prescription.status === 'active' ? 'var(--badge-active-border)' : 'var(--badge-expired-border)'}`,
                        borderRadius: '6px',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color:
                          prescription.status === 'active'
                            ? 'var(--badge-active-text)'
                            : 'var(--badge-expired-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {prescription.status === 'active' ? 'Ativa' : 'Expirada'}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      marginBottom: '0.75rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    👨‍⚕️ {prescription.doctor} | 📅 {prescription.date}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-soft)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    <strong>Dosagem:</strong> {prescription.dosage} | <strong>Duração:</strong>{' '}
                    {prescription.duration}
                  </div>
                </div>
                <Link
                  to={'/patient/prescriptions/$prescriptionId' as string}
                  params={{ prescriptionId: String(prescription.id) } as any}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border-strong)',
                    borderRadius: '8px',
                    color: 'var(--page-text)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

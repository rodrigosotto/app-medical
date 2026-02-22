import { Link, useParams } from '@tanstack/react-router';
import type { DoctorRouteParams } from '../../../types/router.types';

export function ConsultationDetails() {
  const params = useParams({ strict: false }) as DoctorRouteParams;
  const consultationId = params.consultationId;
  const consultation = {
    id: consultationId || '1',
    patient: { name: 'Maria Santos', age: 35, cpf: '***. 456.789-**' },
    date: '15/02/2026',
    time: '14:30',
    type: 'Retorno',
    reason: 'Acompanhamento de hipertensão',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link
          to={'/doctor/consultations' as string}
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
          Detalhes da Consulta
        </h1>

        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            {consultation.patient.name}
          </h2>
          <div
            style={{
              fontSize: '1rem',
              color: 'var(--glass-text-faint)',
              marginBottom: '2rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            {consultation.patient.age} anos | CPF: {consultation.patient.cpf}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontSize: '0.875rem',
                color: 'var(--glass-text-muted)',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Data e Horário
            </div>
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📅 {consultation.date} às {consultation.time}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontSize: '0.875rem',
                color: 'var(--glass-text-muted)',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Motivo da Consulta
            </div>
            <div
              style={{
                fontSize: '1rem',
                color: 'var(--page-text)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {consultation.reason}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            <Link
              to={`/doctor/patients/${consultation.id}/file` as string}
              style={{
                padding: '1rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '12px',
                color: 'var(--page-text)',
                textAlign: 'center',
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📋 Ficha do Paciente
            </Link>
            <Link
              to={'/doctor/prescriptions/create' as string}
              style={{
                padding: '1rem',
                background: 'var(--gradient-brand)',
                borderRadius: '12px',
                color: 'var(--page-text)',
                textAlign: 'center',
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              💊 Criar Receita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

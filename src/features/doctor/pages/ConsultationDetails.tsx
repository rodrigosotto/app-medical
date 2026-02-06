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
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link
          to={'/doctor/consultations' as string}
          style={{
            display: 'inline-flex',
            color: '#ffffff',
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
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Detalhes da Consulta
        </h1>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            {consultation.patient.name}
          </h2>
          <div
            style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)',
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
                color: 'rgba(255, 255, 255, 0.7)',
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
                color: '#ffffff',
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
                color: 'rgba(255, 255, 255, 0.7)',
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
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
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
                background: 'linear-gradient(135deg, #88AB8E, #6B9A75)',
                borderRadius: '12px',
                color: '#ffffff',
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

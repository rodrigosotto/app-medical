import { Link, useParams } from '@tanstack/react-router';
import type { PatientRouteParams } from '../../../types/router.types';

/**
 * Detalhes da Receita
 * Visualização completa de uma receita médica com opção de download
 */
export function PrescriptionDetail() {
  const params = useParams({ strict: false }) as PatientRouteParams;
  const prescriptionId = params.prescriptionId;

  const prescription = {
    id: prescriptionId || '1',
    patient: { name: 'Maria Santos', cpf: '***. 456.789-**', birthDate: '15/03/1991' },
    doctor: { name: 'Dr. Ricardo Almeida', crm: 'CRM/SP 123456', specialty: 'Cardiologia' },
    date: '10/02/2026',
    validUntil: '10/03/2026',
    medications: [
      {
        name: 'Losartana Potássica 50mg',
        dosage: '1 comprimido',
        frequency: '1x ao dia',
        duration: '30 dias',
        instructions: 'Tomar pela manhã em jejum',
      },
      {
        name: 'Hidroclorotiazida 25mg',
        dosage: '1 comprimido',
        frequency: '1x ao dia',
        duration: '30 dias',
        instructions: 'Tomar junto com a Losartana',
      },
    ],
    observations:
      'Manter dieta com baixo teor de sódio. Realizar caminhadas de 30 minutos diariamente. Retornar em 30 dias para reavaliação.',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link
          to="/patient/prescriptions"
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
          ← Voltar para Receitas
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
          Receita Médica
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
          {/* Cabeçalho da Receita */}
          <div
            style={{
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '1.5rem',
              marginBottom: '1.5rem',
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
              Dados do Médico
            </h2>
            <div
              style={{
                fontSize: '1rem',
                color: 'var(--page-text)',
                lineHeight: 1.8,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <div>
                <strong>{prescription.doctor.name}</strong>
              </div>
              <div>{prescription.doctor.specialty}</div>
              <div>{prescription.doctor.crm}</div>
            </div>
          </div>

          <div
            style={{
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '1.5rem',
              marginBottom: '1.5rem',
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
              Dados do Paciente
            </h2>
            <div
              style={{
                fontSize: '1rem',
                color: 'var(--page-text)',
                lineHeight: 1.8,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <div>
                <strong>{prescription.patient.name}</strong>
              </div>
              <div>CPF: {prescription.patient.cpf}</div>
              <div>Data de Nascimento: {prescription.patient.birthDate}</div>
            </div>
          </div>

          {/* Medicamentos */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                marginBottom: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Medicamentos Prescritos
            </h2>
            {prescription.medications.map((med, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    marginBottom: '0.75rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {med.name}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '0.75rem',
                    fontSize: '0.875rem',
                    color: 'var(--glass-text-faint)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  <div>
                    <strong>Dosagem:</strong> {med.dosage}
                  </div>
                  <div>
                    <strong>Frequência:</strong> {med.frequency}
                  </div>
                  <div>
                    <strong>Duração:</strong> {med.duration}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontSize: '0.875rem',
                    color: 'var(--glass-text-soft)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  <strong>Instruções:</strong> {med.instructions}
                </div>
              </div>
            ))}
          </div>

          {/* Observações */}
          <div
            style={{
              background: 'rgba(255, 193, 7, 0.1)',
              border: '1px solid rgba(255, 193, 7, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                marginBottom: '0.75rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Observações
            </h3>
            <div
              style={{
                fontSize: '0.875rem',
                color: 'var(--page-text)',
                lineHeight: 1.6,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {prescription.observations}
            </div>
          </div>

          {/* Rodapé */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <div
              style={{
                fontSize: '0.875rem',
                color: 'var(--glass-text-muted)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <div>Data de Emissão: {prescription.date}</div>
              <div>Válida até: {prescription.validUntil}</div>
            </div>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--page-bg)',
                border: 'none',
                borderRadius: '8px',
                color: 'var(--page-text)',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📥 Baixar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

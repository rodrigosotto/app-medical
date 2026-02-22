import { Link, useParams } from '@tanstack/react-router';
import type { PatientRouteParams } from '../../../types/router.types';

export function ExamViewer() {
  const params = useParams({ strict: false }) as PatientRouteParams;
  const examId = params.examId;

  const exam = {
    id: examId || '1',
    name: 'Hemograma Completo',
    category: 'Sangue',
    date: '05/02/2026',
    doctor: 'Dr. Ricardo Almeida',
    fileType: 'PDF',
    results: [
      { parameter: 'Hemoglobina', value: '14.2 g/dL', reference: '12.0-16.0', status: 'normal' },
      { parameter: 'Leucócitos', value: '7.200/mm³', reference: '4.000-11.000', status: 'normal' },
      {
        parameter: 'Plaquetas',
        value: '250.000/mm³',
        reference: '150.000-450.000',
        status: 'normal',
      },
    ],
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
          to="/patient/exams"
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
          {exam.name}
        </h1>

        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Categoria
              </div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {exam.category}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Data
              </div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {exam.date}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Médico
              </div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {exam.doctor}
              </div>
            </div>
          </div>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Resultados
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {exam.results.map((result, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--page-text)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {result.parameter}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Referência: {result.reference}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: 'var(--page-text)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {result.value}
                  </div>
                  <span
                    style={{
                      background: 'var(--color-success-bg)',
                      border: '1px solid rgba(76, 175, 80, 0.5)',
                      borderRadius: '6px',
                      padding: '0.25rem 0.5rem',
                      fontSize: '0.75rem',
                      color: 'var(--color-success)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Normal
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{
              flex: 1,
              padding: '1rem',
              background: 'var(--page-bg)',
              border: 'none',
              borderRadius: '12px',
              color: 'var(--page-text)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            📥 Baixar PDF
          </button>
          <button
            style={{
              flex: 1,
              padding: '1rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border-strong)',
              borderRadius: '12px',
              color: 'var(--page-text)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            🔗 Compartilhar com Médico
          </button>
        </div>
      </div>
    </div>
  );
}

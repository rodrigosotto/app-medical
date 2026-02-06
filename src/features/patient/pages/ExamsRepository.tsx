import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function ExamsRepository() {
  const [filter, setFilter] = useState('all');

  const exams = [
    {
      id: 1,
      name: 'Hemograma Completo',
      category: 'Sangue',
      date: '05/02/2026',
      doctor: 'Dr. Ricardo Almeida',
      status: 'Visualizado',
      fileType: 'PDF',
    },
    {
      id: 2,
      name: 'Raio-X Tórax',
      category: 'Imagem',
      date: '28/01/2026',
      doctor: 'Dra. Ana Paula',
      status: 'Novo',
      fileType: 'DICOM',
    },
    {
      id: 3,
      name: 'Ultrassom Abdominal',
      category: 'Imagem',
      date: '15/01/2026',
      doctor: 'Dr. Carlos Oliveira',
      status: 'Visualizado',
      fileType: 'PDF',
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
          to="/patient/dashboard"
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
          Meus Exames
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['all', 'Sangue', 'Imagem', 'Urina'].map((f) => (
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
                  {f === 'all' ? 'Todos' : f}
                </button>
              ))}
            </div>
            <Link
              to="/patient/upload-exam"
              style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--page-bg)',
                borderRadius: '8px',
                color: 'var(--page-text)',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              + Enviar Exame
            </Link>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {exams.map((exam) => (
            <div
              key={exam.id}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '1.5rem',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>📋</div>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {exam.name}
              </h3>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
                  marginBottom: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                <div>
                  {exam.category} | {exam.fileType}
                </div>
                <div>📅 {exam.date}</div>
                <div>👨‍⚕️ {exam.doctor}</div>
              </div>
              <Link
                to={`/patient/exams/${exam.id}`}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border-strong)',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Visualizar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

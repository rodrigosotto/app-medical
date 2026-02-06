export function PatientExamsViewer() {
  const exams = [
    {
      id: 1,
      name: 'Hemograma Completo',
      date: '05/02/2026',
      category: 'Sangue',
      status: 'disponível',
    },
    { id: 2, name: 'Raio-X Tórax', date: '28/01/2026', category: 'Imagem', status: 'disponível' },
    {
      id: 3,
      name: 'Eletrocardiograma',
      date: '20/01/2026',
      category: 'Cardíaco',
      status: 'disponível',
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
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
            marginBottom: '0.5rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Repositório de Exames
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--glass-text-soft)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Paciente: Maria Santos
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                {exam.category === 'Sangue' ? '🩸' : exam.category === 'Imagem' ? '🔬' : '💓'}
              </div>
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
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                📅 {exam.date}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--glass-text-muted)',
                  marginBottom: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                📂 {exam.category}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    background: 'var(--color-info-bg)',
                    border: '1px solid rgba(33, 150, 243, 0.5)',
                    borderRadius: '8px',
                    color: 'var(--color-info)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  👁️ Visualizar
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    background: 'var(--color-success-bg)',
                    border: '1px solid rgba(76, 175, 80, 0.5)',
                    borderRadius: '8px',
                    color: 'var(--color-success)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  ⬇️ Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

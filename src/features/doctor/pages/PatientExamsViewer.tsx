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
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.5rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Repositório de Exames
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.8)',
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
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {exam.name}
              </h3>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                📅 {exam.date}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
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
                    background: 'rgba(33, 150, 243, 0.2)',
                    border: '1px solid rgba(33, 150, 243, 0.5)',
                    borderRadius: '8px',
                    color: '#2196F3',
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
                    background: 'rgba(76, 175, 80, 0.2)',
                    border: '1px solid rgba(76, 175, 80, 0.5)',
                    borderRadius: '8px',
                    color: '#4CAF50',
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

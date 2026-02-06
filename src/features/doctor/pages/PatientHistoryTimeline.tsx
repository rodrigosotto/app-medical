import { Link, useParams } from '@tanstack/react-router';

export function PatientHistoryTimeline() {
  const { patientId } = useParams({ strict: false });
  const history = [
    {
      date: '10/02/2026',
      type: 'Consulta',
      title: 'Consulta de Cardiologia',
      description: 'Pressão normalizada',
    },
    { date: '25/01/2026', type: 'Receita', title: 'Losartana 50mg', description: '1x ao dia' },
  ];

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
          to={`/doctor/patients/${patientId}/file`}
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
          Histórico do Paciente
        </h1>

        <div style={{ position: 'relative', paddingLeft: '60px' }}>
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '40px',
              bottom: '40px',
              width: '2px',
              background: 'rgba(255, 255, 255, 0.3)',
            }}
          />
          {history.map((item, index) => (
            <div key={index} style={{ position: 'relative', marginBottom: '2rem' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '-48px',
                  top: '20px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(136, 171, 142, 0.5)',
                  border: '2px solid #88AB8E',
                }}
              />
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  📅 {item.date}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link } from '@tanstack/react-router';

export function TreatmentProgress() {
  const metrics = [
    {
      label: 'Pressão Arterial',
      current: '120/80',
      target: '120/80',
      progress: 100,
      unit: 'mmHg',
      trend: 'stable',
    },
    { label: 'Peso', current: '72', target: '70', progress: 85, unit: 'kg', trend: 'down' },
    {
      label: 'Glicemia',
      current: '95',
      target: '100',
      progress: 95,
      unit: 'mg/dL',
      trend: 'stable',
    },
  ];

  const milestones = [
    { date: '10/02/2026', title: 'Pressão normalizada', completed: true },
    { date: '15/02/2026', title: 'Redução de 2kg', completed: true },
    { date: '01/03/2026', title: 'Meta de peso', completed: false },
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
        <Link
          to="/patient/dashboard"
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
          Progresso do Tratamento
        </h1>

        {/* Métricas */}
        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
          {metrics.map((metric, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {metric.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Meta: {metric.target} {metric.unit}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {metric.current}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {metric.unit}
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '999px',
                  height: '8px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    background: 'linear-gradient(90deg, #4CAF50, #8BC34A)',
                    height: '100%',
                    width: `${metric.progress}%`,
                    borderRadius: '999px',
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginTop: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {metric.progress}% da meta
              </div>
            </div>
          ))}
        </div>

        {/* Marcos */}
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
              marginBottom: '1.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Marcos do Tratamento
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: milestone.completed
                      ? 'rgba(76, 175, 80, 0.3)'
                      : 'rgba(255, 255, 255, 0.2)',
                    border: `2px solid ${milestone.completed ? '#4CAF50' : 'rgba(255, 255, 255, 0.5)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: milestone.completed ? '#4CAF50' : '#ffffff',
                    fontSize: '0.75rem',
                  }}
                >
                  {milestone.completed && '✓'}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {milestone.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {milestone.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

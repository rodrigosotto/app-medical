export function OperationalReports() {
  const stats = {
    totalConsultations: 2547,
    activeUsers: 1893,
    averageRating: 4.7,
    responseTime: '12min',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Relatórios Operacionais
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {[
            {
              label: 'Total de Consultas',
              value: stats.totalConsultations,
              icon: '📅',
              color: '#2196F3',
            },
            { label: 'Usuários Ativos', value: stats.activeUsers, icon: '👥', color: '#4CAF50' },
            { label: 'Avaliação Média', value: stats.averageRating, icon: '⭐', color: '#FFC107' },
            {
              label: 'Tempo Médio de Resposta',
              value: stats.responseTime,
              icon: '⏱️',
              color: '#FF5722',
            },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '1.5rem',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: stat.color,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Consultas por Especialidade
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { specialty: 'Cardiologia', count: 847, percentage: 33 },
                { specialty: 'Dermatologia', count: 692, percentage: 27 },
                { specialty: 'Pediatria', count: 509, percentage: 20 },
                { specialty: 'Outras', count: 499, percentage: 20 },
              ].map((item, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                      fontSize: '0.938rem',
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    <span>{item.specialty}</span>
                    <span>
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>
                  <div
                    style={{
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${item.percentage}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #2196F3, #1976D2)',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Taxa de Satisfação
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
              }}
            >
              <div
                style={{
                  fontSize: '5rem',
                  fontWeight: 700,
                  color: '#4CAF50',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                94%
              </div>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Usuários Satisfeitos
              </div>
              <div style={{ marginTop: '1rem', fontSize: '2.5rem' }}>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

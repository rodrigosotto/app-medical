import { useState } from 'react';

export function ReportsStatistics() {
  const [period, setPeriod] = useState('month');
  const stats = {
    totalConsultations: 127,
    totalPatients: 89,
    revenue: 15420,
    averageRating: 4.8,
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Relatórios e Estatísticas
          </h1>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid var(--glass-border-strong)',
              borderRadius: '12px',
              color: 'var(--page-text)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            <option value="week">Última Semana</option>
            <option value="month">Último Mês</option>
            <option value="year">Último Ano</option>
          </select>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {[
            {
              label: 'Total de Consultas',
              value: stats.totalConsultations,
              icon: '📅',
              color: 'var(--color-info)',
            },
            {
              label: 'Pacientes Atendidos',
              value: stats.totalPatients,
              icon: '👥',
              color: 'var(--color-success)',
            },
            {
              label: 'Receita',
              value: `R$ ${stats.revenue.toLocaleString('pt-BR')}`,
              icon: '💰',
              color: 'var(--color-warning)',
            },
            { label: 'Avaliação Média', value: stats.averageRating, icon: '⭐', color: 'var(--color-orange)' },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}
              >
                <div style={{ fontSize: '2.5rem' }}>{stat.icon}</div>
                <div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: stat.color,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Consultas por Tipo
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { type: 'Primeira Consulta', count: 45, percentage: 35 },
                { type: 'Retorno', count: 62, percentage: 49 },
                { type: 'Emergência', count: 20, percentage: 16 },
              ].map((item, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                      fontSize: '0.938rem',
                      color: 'var(--page-text)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    <span>{item.type}</span>
                    <span>
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>
                  <div
                    style={{
                      height: '8px',
                      background: 'var(--glass-bg)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${item.percentage}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #4CAF50, #45a049)',
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
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                marginBottom: '1.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Receita Mensal
            </h3>
            <div
              style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '200px' }}
            >
              {[12, 18, 15, 22, 19, 24].map((value, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: `${(value / 24) * 100}%`,
                      background: 'var(--gradient-success-vertical)',
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--glass-text-muted)',
                      marginTop: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

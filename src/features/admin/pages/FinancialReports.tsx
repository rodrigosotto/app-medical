export function FinancialReports() {
  const stats = {
    totalRevenue: 145320.5,
    consultations: 89450.0,
    products: 55870.5,
    growth: '+18.5%',
  };

  const monthlyData = [
    { month: 'Jan', revenue: 98500 },
    { month: 'Fev', revenue: 125000 },
    { month: 'Mar', revenue: 145320 },
  ];

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
          Relatórios Financeiros
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
              label: 'Receita Total',
              value: `R$ ${stats.totalRevenue.toLocaleString('pt-BR')}`,
              icon: '💰',
              color: '#4CAF50',
            },
            {
              label: 'Consultas',
              value: `R$ ${stats.consultations.toLocaleString('pt-BR')}`,
              icon: '📅',
              color: '#2196F3',
            },
            {
              label: 'Produtos',
              value: `R$ ${stats.products.toLocaleString('pt-BR')}`,
              icon: '📦',
              color: '#FFC107',
            },
            { label: 'Crescimento', value: stats.growth, icon: '📈', color: '#FF5722' },
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
            Receita Mensal (2026)
          </h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '300px' }}>
            {monthlyData.map((data, index) => (
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
                    height: `${(data.revenue / 150000) * 100}%`,
                    background: 'linear-gradient(180deg, #4CAF50, #45a049)',
                    borderRadius: '12px 12px 0 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    R$ {(data.revenue / 1000).toFixed(0)}K
                  </span>
                </div>
                <div
                  style={{
                    marginTop: '1rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {data.month}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

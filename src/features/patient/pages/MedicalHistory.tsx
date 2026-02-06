import { Link } from '@tanstack/react-router';

/**
 * Meu Histórico Médico
 * Timeline com todo o histórico médico do paciente
 */
export function MedicalHistory() {
  // Dados simulados
  const history = [
    {
      id: 1,
      date: '10/02/2026',
      type: 'Consulta',
      title: 'Consulta de Cardiologia',
      doctor: 'Dr. Ricardo Almeida',
      description:
        'Consulta de retorno para acompanhamento de pressão arterial. Paciente apresentou melhora significativa.',
      diagnosis: 'Hipertensão controlada',
      treatment: 'Manutenção da medicação atual',
    },
    {
      id: 2,
      date: '05/02/2026',
      type: 'Exame',
      title: 'Exame de Sangue Completo',
      description: 'Hemograma completo, glicemia, colesterol e triglicerídeos.',
      results: 'Todos os valores dentro da normalidade',
    },
    {
      id: 3,
      date: '25/01/2026',
      type: 'Receita',
      title: 'Prescrição de Medicamentos',
      doctor: 'Dr. Ricardo Almeida',
      description: 'Losartana 50mg - 1 comprimido pela manhã',
    },
    {
      id: 4,
      date: '15/01/2026',
      type: 'Consulta',
      title: 'Consulta de Dermatologia',
      doctor: 'Dra. Juliana Costa',
      description: 'Avaliação de lesões de pele. Realizada biópsia para análise.',
      diagnosis: 'Lesão benigna',
      treatment: 'Acompanhamento semestral',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Consulta':
        return '🩺';
      case 'Exame':
        return '📋';
      case 'Receita':
        return '💊';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Consulta':
        return {
          bg: 'rgba(33, 150, 243, 0.2)',
          border: 'rgba(33, 150, 243, 0.5)',
          text: '#2196F3',
        };
      case 'Exame':
        return {
          bg: 'rgba(156, 39, 176, 0.2)',
          border: 'rgba(156, 39, 176, 0.5)',
          text: '#9C27B0',
        };
      case 'Receita':
        return { bg: 'rgba(76, 175, 80, 0.2)', border: 'rgba(76, 175, 80, 0.5)', text: '#4CAF50' };
      default:
        return {
          bg: 'rgba(158, 158, 158, 0.2)',
          border: 'rgba(158, 158, 158, 0.5)',
          text: '#9E9E9E',
        };
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            to="/patient/dashboard"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#ffffff',
              textDecoration: 'none',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ← Voltar ao Painel
          </Link>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Meu Histórico Médico
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Timeline completa do seu histórico de saúde
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Linha vertical da timeline */}
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

          {/* Items da Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {history.map((item) => {
              const typeStyle = getTypeColor(item.type);
              return (
                <div
                  key={item.id}
                  style={{
                    position: 'relative',
                    paddingLeft: '60px',
                  }}
                >
                  {/* Ponto da timeline */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '20px',
                      width: '26px',
                      height: '26px',
                      background: typeStyle.bg,
                      border: `2px solid ${typeStyle.border}`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                    }}
                  >
                    {getTypeIcon(item.type)}
                  </div>

                  {/* Card do item */}
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
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        marginBottom: '1rem',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <h3
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 600,
                              color: '#ffffff',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            {item.title}
                          </h3>
                          <span
                            style={{
                              background: typeStyle.bg,
                              border: `1px solid ${typeStyle.border}`,
                              borderRadius: '6px',
                              padding: '0.25rem 0.75rem',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: typeStyle.text,
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            {item.type}
                          </span>
                        </div>
                        {'doctor' in item && (
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: 'rgba(255, 255, 255, 0.7)',
                              marginBottom: '0.5rem',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            👨‍⚕️ {item.doctor}
                          </div>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'rgba(255, 255, 255, 0.7)',
                          whiteSpace: 'nowrap',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        📅 {item.date}
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.6,
                        marginBottom: '1rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {item.description}
                    </div>

                    {'diagnosis' in item && (
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '8px',
                          padding: '0.75rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginBottom: '0.25rem',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          DIAGNÓSTICO
                        </div>
                        <div
                          style={{
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          {item.diagnosis}
                        </div>
                      </div>
                    )}

                    {'treatment' in item && (
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '8px',
                          padding: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginBottom: '0.25rem',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          TRATAMENTO
                        </div>
                        <div
                          style={{
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          {item.treatment}
                        </div>
                      </div>
                    )}

                    {'results' in item && (
                      <div
                        style={{
                          background: 'rgba(76, 175, 80, 0.1)',
                          border: '1px solid rgba(76, 175, 80, 0.3)',
                          borderRadius: '8px',
                          padding: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginBottom: '0.25rem',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          RESULTADOS
                        </div>
                        <div
                          style={{
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                          }}
                        >
                          {item.results}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

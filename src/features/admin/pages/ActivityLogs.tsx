import { useState } from 'react';

export function ActivityLogs() {
  const [filter, setFilter] = useState('todos');
  const logs = [
    {
      id: 1,
      user: 'Admin João',
      action: 'Criou novo usuário',
      target: 'Maria Santos (Paciente)',
      timestamp: '15/02/2026 14:32',
      type: 'criacao',
    },
    {
      id: 2,
      user: 'Dr. Pedro Lima',
      action: 'Atualizou receita',
      target: 'Receita #8921',
      timestamp: '15/02/2026 14:15',
      type: 'edicao',
    },
    {
      id: 3,
      user: 'Admin João',
      action: 'Aprovou médico',
      target: 'Dra. Ana Costa',
      timestamp: '15/02/2026 13:47',
      type: 'aprovacao',
    },
    {
      id: 4,
      user: 'Sistema',
      action: 'Backup automático',
      target: 'Banco de dados',
      timestamp: '15/02/2026 03:00',
      type: 'sistema',
    },
    {
      id: 5,
      user: 'Admin João',
      action: 'Removeu produto',
      target: 'Medicamento XYZ',
      timestamp: '14/02/2026 16:22',
      type: 'exclusao',
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
          Logs de Atividade
        </h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['todos', 'criacao', 'edicao', 'exclusao', 'aprovacao', 'sistema'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.75rem 1rem',
                background: filter === f ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
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
          <div style={{ display: 'grid', gap: '1rem' }}>
            {logs.map((log) => (
              <div
                key={log.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background:
                      log.type === 'criacao'
                        ? 'rgba(76, 175, 80, 0.2)'
                        : log.type === 'edicao'
                          ? 'rgba(33, 150, 243, 0.2)'
                          : log.type === 'exclusao'
                            ? 'rgba(244, 67, 54, 0.2)'
                            : log.type === 'aprovacao'
                              ? 'rgba(156, 39, 176, 0.2)'
                              : 'rgba(255, 193, 7, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                  }}
                >
                  {log.type === 'criacao'
                    ? '➕'
                    : log.type === 'edicao'
                      ? '✏️'
                      : log.type === 'exclusao'
                        ? '🗑️'
                        : log.type === 'aprovacao'
                          ? '✅'
                          : '⚙️'}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {log.user} - {log.action}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {log.target}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    🕒 {log.timestamp}
                  </div>
                </div>

                <span
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background:
                      log.type === 'criacao'
                        ? 'rgba(76, 175, 80, 0.2)'
                        : log.type === 'edicao'
                          ? 'rgba(33, 150, 243, 0.2)'
                          : log.type === 'exclusao'
                            ? 'rgba(244, 67, 54, 0.2)'
                            : log.type === 'aprovacao'
                              ? 'rgba(156, 39, 176, 0.2)'
                              : 'rgba(255, 193, 7, 0.2)',
                    color:
                      log.type === 'criacao'
                        ? '#4CAF50'
                        : log.type === 'edicao'
                          ? '#2196F3'
                          : log.type === 'exclusao'
                            ? '#F44336'
                            : log.type === 'aprovacao'
                              ? '#9C27B0'
                              : '#FFC107',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

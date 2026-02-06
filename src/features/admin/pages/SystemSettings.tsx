import { FormEvent } from 'react';

export function SystemSettings() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Configurações salvas com sucesso!');
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
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Configurações do Sistema
        </h1>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '1.5rem',
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
              Informações da Plataforma
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Nome da Plataforma
                </label>
                <input
                  type="text"
                  defaultValue="MedPlus"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.938rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Email de Contato
                </label>
                <input
                  type="email"
                  defaultValue="contato@medplus.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.938rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '1.5rem',
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
              Notificações
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                'Notificar administradores sobre novos cadastros',
                'Enviar email de confirmação para usuários',
                'Alertas de estoque baixo',
                'Relatórios automáticos semanais',
              ].map((option, index) => (
                <label
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    defaultChecked={index < 3}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span
                    style={{
                      fontSize: '0.938rem',
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {option}
                  </span>
                </label>
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
              marginBottom: '1.5rem',
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
              Manutenção
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <span
                  style={{
                    fontSize: '0.938rem',
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Ativar modo de manutenção
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, #4CAF50, #45a049)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ✅ Salvar Configurações
          </button>
        </form>
      </div>
    </div>
  );
}

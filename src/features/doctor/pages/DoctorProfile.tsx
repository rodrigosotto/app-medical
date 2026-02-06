import { FormEvent } from 'react';

export function DoctorProfile() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Meu Perfil
        </h1>

        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                }}
              >
                👨‍⚕️
              </div>
              <button
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--color-success)',
                  border: 'none',
                  color: 'var(--page-text)',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                📷
              </button>
            </div>
            <div>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--page-text)',
                  marginBottom: '0.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Dr. Carlos Mendes
              </h2>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'var(--glass-text-soft)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Cardiologista | CRM: 12345-SP
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-warning)', fontSize: '1.25rem' }}>⭐</span>
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  4.8
                </span>
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--glass-text-muted)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  (89 avaliações)
                </span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
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
            Informações Pessoais
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Nome Completo
              </label>
              <input
                type="text"
                defaultValue="Carlos Mendes"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
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
                  color: 'var(--page-text)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                CRM
              </label>
              <input
                type="text"
                defaultValue="12345-SP"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
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
                  color: 'var(--page-text)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Especialidade
              </label>
              <select
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  fontSize: '0.938rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                <option>Cardiologia</option>
                <option>Dermatologia</option>
                <option>Pediatria</option>
              </select>
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Telefone
              </label>
              <input
                type="tel"
                defaultValue="(11) 98765-4321"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  fontSize: '0.938rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Email
              </label>
              <input
                type="email"
                defaultValue="carlos@clinica.com"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--page-text)',
                  fontSize: '0.938rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              />
            </div>
          </div>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--page-text)',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Sobre
          </h3>
          <textarea
            defaultValue="Cardiologista com mais de 15 anos de experiência..."
            style={{
              width: '100%',
              height: '100px',
              padding: '0.75rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              color: 'var(--page-text)',
              fontSize: '0.938rem',
              resize: 'vertical',
              marginBottom: '1.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'var(--gradient-success)',
              border: 'none',
              borderRadius: '12px',
              color: 'var(--page-text)',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ✅ Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
}

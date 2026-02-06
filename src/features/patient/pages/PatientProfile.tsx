import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function PatientProfile() {
  const [editing, setEditing] = useState(false);
  const [formData] = useState({
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '(11) 98765-4321',
    cpf: '123.456.789-00',
    birthDate: '15/03/1991',
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    bloodType: 'O+',
    allergies: 'Dipirona',
    chronicDiseases: 'Hipertensão',
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link
          to="/patient/dashboard"
          style={{
            display: 'inline-flex',
            color: 'var(--page-text)',
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
          }}
        >
          {/* Foto de Perfil */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
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
                margin: '0 auto 1rem',
              }}
            >
              👤
            </div>
            <button
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '8px',
                color: 'var(--page-text)',
                fontSize: '0.875rem',
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Alterar Foto
            </button>
          </div>

          {/* Dados Pessoais */}
          <div style={{ marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                marginBottom: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Dados Pessoais
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                { label: 'Nome Completo', value: formData.name },
                { label: 'E-mail', value: formData.email },
                { label: 'Telefone', value: formData.phone },
                { label: 'CPF', value: formData.cpf },
                { label: 'Data de Nascimento', value: formData.birthDate },
                { label: 'Tipo Sanguíneo', value: formData.bloodType },
              ].map((field, index) => (
                <div key={index}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--glass-text-soft)',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={field.value}
                    disabled={!editing}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: editing
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border-strong)',
                      borderRadius: '8px',
                      color: 'var(--page-text)',
                      fontSize: '1rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Endereço */}
          <div style={{ marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                marginBottom: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Endereço
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                { label: 'Rua', value: formData.address },
                { label: 'Cidade', value: formData.city },
                { label: 'Estado', value: formData.state },
              ].map((field, index) => (
                <div key={index}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--glass-text-soft)',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={field.value}
                    disabled={!editing}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: editing
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border-strong)',
                      borderRadius: '8px',
                      color: 'var(--page-text)',
                      fontSize: '1rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Informações Médicas */}
          <div style={{ marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                marginBottom: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Informações Médicas
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { label: 'Alergias', value: formData.allergies },
                { label: 'Doenças Crônicas', value: formData.chronicDiseases },
              ].map((field, index) => (
                <div key={index}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--glass-text-soft)',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {field.label}
                  </label>
                  <textarea
                    value={field.value}
                    disabled={!editing}
                    rows={2}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: editing
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border-strong)',
                      borderRadius: '8px',
                      color: 'var(--page-text)',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: 'var(--gradient-brand)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'var(--page-text)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Editar Perfil
              </button>
            ) : (
              <>
                <button
                  onClick={() => setEditing(false)}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    background: 'var(--gradient-brand)',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'var(--page-text)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Salvar Alterações
                </button>
                <button
                  onClick={() => setEditing(false)}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border-strong)',
                    borderRadius: '12px',
                    color: 'var(--page-text)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

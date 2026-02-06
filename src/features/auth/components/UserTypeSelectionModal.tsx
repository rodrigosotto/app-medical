import { useState } from 'react';
import { Link } from '@tanstack/react-router';

interface UserTypeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: 'medico' | 'paciente') => void;
}

export function UserTypeSelectionModal({
  isOpen,
  onClose,
  onSelectType,
}: UserTypeSelectionModalProps) {
  const [selectedType, setSelectedType] = useState<'medico' | 'paciente' | null>(null);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (selectedType) {
      onSelectType(selectedType);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      {/* Modal Card */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          margin: '0 1rem',
          background: '#7A8F80',
          borderRadius: '12px',
          padding: '2.5rem 2rem 2rem 2rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Header Icon */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              background: '#B4C4B8',
              borderRadius: '10px',
              marginBottom: '1rem',
            }}
          >
            <svg
              style={{ width: '28px', height: '28px', color: 'white' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 0.5rem 0',
            }}
          >
            Criar conta
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.875rem',
              margin: 0,
            }}
          >
            Escolha o tipo de registro para continuar
          </p>
        </div>

        {/* Options */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '1.75rem',
          }}
        >
          {/* Médico Option */}
          <button
            onClick={() => setSelectedType('medico')}
            style={{
              padding: '1rem',
              border: 'none',
              borderRadius: '10px',
              background: selectedType === 'medico' ? '#91A697' : '#8E9F93',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              outline: selectedType === 'medico' ? '2px solid rgba(255, 255, 255, 0.4)' : 'none',
              outlineOffset: '-2px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: '#B4C4B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg
                style={{ width: '20px', height: '20px', color: 'white' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.125rem',
                }}
              >
                Sou Médico
              </div>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.8125rem',
                  margin: 0,
                  lineHeight: '1.3',
                }}
              >
                Cadastre-se para gerenciar consultas e pacientes
              </p>
            </div>
          </button>

          {/* Paciente Option */}
          <button
            onClick={() => setSelectedType('paciente')}
            style={{
              padding: '1rem',
              border: 'none',
              borderRadius: '10px',
              background: selectedType === 'paciente' ? '#91A697' : '#8E9F93',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              outline: selectedType === 'paciente' ? '2px solid rgba(255, 255, 255, 0.4)' : 'none',
              outlineOffset: '-2px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: '#B4C4B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg
                style={{ width: '20px', height: '20px', color: 'white' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.125rem',
                }}
              >
                Sou Paciente
              </div>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.8125rem',
                  margin: 0,
                  lineHeight: '1.3',
                }}
              >
                Cadastre-se para agendar consultas e acompanhar seu histórico
              </p>
            </div>
          </button>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
          }}
        >
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '0.75rem 1.25rem',
              background: 'transparent',
              border: '1.5px solid rgba(255, 255, 255, 0.6)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '0.9375rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            style={{
              flex: 1,
              padding: '0.75rem 1.25rem',
              background: selectedType ? '#B4C4B8' : 'rgba(180, 196, 184, 0.5)',
              border: 'none',
              borderRadius: '8px',
              color: selectedType ? 'white' : 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9375rem',
              fontWeight: '600',
              cursor: selectedType ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (selectedType) {
                e.currentTarget.style.background = '#A8B8AC';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedType) {
                e.currentTarget.style.background = '#B4C4B8';
              }
            }}
          >
            Continuar
          </button>
        </div>

        {/* Login Link */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', margin: 0 }}>
            Já tem uma conta?{' '}
            <Link
              to="/login"
              style={{
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

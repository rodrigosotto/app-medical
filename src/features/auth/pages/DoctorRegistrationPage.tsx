import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { DoctorRegistrationForm, DoctorFormData } from '../components/DoctorRegistrationForm';
import { useToast } from '@/hooks/useToast';
import { apiClient } from '@/services/api/client';

export function DoctorRegistrationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { success, error: showError } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (data: DoctorFormData) => {
    if (data.password !== data.confirmPassword) {
      showError('As senhas não coincidem!');
      return;
    }

    setIsLoading(true);
    try {
      const response = await apiClient.post('/api/auth/register/doctor', data);

      success(
        response.data.message ||
          'Cadastro realizado com sucesso! Aguarde aprovação da equipe administrativa.'
      );

      // Redirecionar para login após 3 segundos
      setTimeout(() => {
        navigate({ to: '/login' });
      }, 3000);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Erro ao processar cadastro. Tente novamente.';
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate({ to: '/login' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
      }}
    >
      {/* Animated Background Blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(156, 175, 136, 0.5)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(168, 187, 160, 0.5)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite 2s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '300px',
          height: '300px',
          background: 'rgba(156, 175, 136, 0.5)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite 4s',
        }}
      />

      {/* Form Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '600px',
          margin: '2rem 1rem',
        }}
      >
        <div
          style={{
            backdropFilter: 'blur(20px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            padding: '2.5rem 2rem',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
                borderRadius: '16px',
                marginBottom: '1rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              <svg
                style={{ width: '32px', height: '32px', color: 'white' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem',
              }}
            >
              Cadastro de Médico
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem' }}>
              Preencha os dados abaixo para solicitar seu cadastro
            </p>
            <p
              style={{
                color: '#fcd34d',
                fontSize: '0.75rem',
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <svg
                style={{ width: '14px', height: '14px' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Seu cadastro será analisado pela equipe administrativa
            </p>
          </div>

          {/* Form */}
          <DoctorRegistrationForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

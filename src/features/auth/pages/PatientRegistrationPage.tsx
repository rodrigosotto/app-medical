import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { PatientRegistrationForm, PatientFormData } from '../components/PatientRegistrationForm';
import { useToast } from '@/hooks/useToast';
import { apiClient } from '@/services/api/client';

export function PatientRegistrationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { success, error: showError } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (data: PatientFormData) => {
    if (data.password !== data.confirmPassword) {
      showError('As senhas não coincidem!');
      return;
    }

    setIsLoading(true);
    try {
      // Se houver foto, converter para base64
      let photoBase64: string | undefined;
      if (data.photo) {
        photoBase64 = await fileToBase64(data.photo);
      }

      const payload = {
        ...data,
        photo: photoBase64,
      };

      const response = await apiClient.post('/api/auth/register/patient', payload);

      // Salvar token e dados do usuário
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      success('Cadastro realizado com sucesso!');

      // Redirecionar para dashboard
      setTimeout(() => {
        navigate({ to: '/dashboard' });
      }, 1500);
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

  // Função auxiliar para converter File para base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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
              Cadastro de Paciente
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem' }}>
              Preencha os dados abaixo para criar sua conta
            </p>
          </div>

          {/* Form */}
          <PatientRegistrationForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

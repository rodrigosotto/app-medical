import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import type { AuthRouteParams } from '../../../types/router.types';

/**
 * Página de Verificação de E-mail
 * Exibe status da verificação do e-mail após registro
 */
export function EmailVerification() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false }) as AuthRouteParams;

  // Simular verificação do token
  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams?.token;

      if (!token) {
        setStatus('error');
        return;
      }

      // Simular chamada à API
      setTimeout(() => {
        setStatus('success');
      }, 2000);
    };

    verifyEmail();
  }, [searchParams]);

  const handleResendEmail = async () => {
    setResending(true);
    setTimeout(() => {
      setResending(false);
      alert('E-mail de verificação reenviado com sucesso!');
    }, 1500);
  };

  const handleGoToDashboard = () => {
    const userType = localStorage.getItem('userType') || 'patient';
    if (userType === 'doctor') {
      navigate({ to: '/doctor/dashboard' });
    } else {
      navigate({ to: '/patient/dashboard' });
    }
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

      {/* Glass Morphism Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '500px',
          margin: '0 1rem',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          {/* Header com ícone */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {status === 'loading' && (
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  border: '4px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '4px solid #ffffff',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              />
            )}

            {status === 'success' && (
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  background: 'rgba(76, 175, 80, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}

            {status === 'error' && (
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  background: 'rgba(244, 67, 54, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F44336"
                  strokeWidth="3"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
            )}

            <h1
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {status === 'loading' && 'Verificando E-mail'}
              {status === 'success' && 'E-mail Verificado!'}
              {status === 'error' && 'Falha na Verificação'}
            </h1>

            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
              {status === 'loading' && 'Aguarde enquanto verificamos seu e-mail...'}
              {status === 'success' &&
                'Seu e-mail foi verificado com sucesso! Você já pode acessar sua conta.'}
              {status === 'error' &&
                'Não foi possível verificar seu e-mail. O link pode ter expirado ou é inválido.'}
            </p>
          </div>

          {/* Botões de ação */}
          {status === 'success' && (
            <button
              onClick={handleGoToDashboard}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(136, 171, 142, 0.4)',
              }}
            >
              Ir para o Painel
            </button>
          )}

          {status === 'error' && (
            <>
              <button
                onClick={handleResendEmail}
                disabled={resending}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: resending
                    ? 'rgba(136, 171, 142, 0.5)'
                    : 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: resending ? 'not-allowed' : 'pointer',
                  marginBottom: '1rem',
                }}
              >
                {resending ? 'Reenviando...' : 'Reenviar E-mail de Verificação'}
              </button>

              <Link
                to="/login"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                Voltar para o Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

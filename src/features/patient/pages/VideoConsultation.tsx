import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function VideoConsultation() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--page-text)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Consulta com Dr. Ricardo Almeida
          </div>
          <div
            style={{
              fontSize: '0.875rem',
              color: 'var(--glass-text-muted)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Cardiologia | 15/02/2026 14:30
          </div>
        </div>
        <div
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--color-success)',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ● 23:45
        </div>
      </div>

      {/* Video Area */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          background: 'var(--color-black)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Main Video (Doctor) */}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'var(--gradient-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center', color: 'var(--page-text)' }}>
            <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>👨‍⚕️</div>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Dr. Ricardo Almeida
            </div>
          </div>
        </div>

        {/* Picture-in-Picture (Patient) */}
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            right: '2rem',
            width: '280px',
            height: '210px',
            background: 'var(--gradient-brand)',
            borderRadius: '12px',
            border: '2px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div style={{ textAlign: 'center', color: 'var(--page-text)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👤</div>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Você
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <button
          onClick={() => setIsMicOn(!isMicOn)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: isMicOn ? 'rgba(255, 255, 255, 0.1)' : 'var(--badge-expired-text)',
            border: 'none',
            color: 'var(--page-text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title={isMicOn ? 'Desligar Microfone' : 'Ligar Microfone'}
        >
          {isMicOn ? '🎤' : '🔇'}
        </button>

        <button
          onClick={() => setIsCameraOn(!isCameraOn)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: isCameraOn ? 'rgba(255, 255, 255, 0.1)' : 'var(--badge-expired-text)',
            border: 'none',
            color: 'var(--page-text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title={isCameraOn ? 'Desligar Câmera' : 'Ligar Câmera'}
        >
          {isCameraOn ? '📹' : '📵'}
        </button>

        <button
          onClick={() => setIsScreenSharing(!isScreenSharing)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: isScreenSharing ? 'var(--badge-active-text)' : 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: 'var(--page-text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title="Compartilhar Tela"
        >
          🖥️
        </button>

        <button
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--glass-bg)',
            border: 'none',
            color: 'var(--page-text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title="Chat"
        >
          💬
        </button>

        <Link
          to="/patient/dashboard"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--badge-expired-text)',
            border: 'none',
            color: 'var(--page-text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
          title="Encerrar Chamada"
        >
          📞
        </Link>
      </div>
    </div>
  );
}

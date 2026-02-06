import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function DoctorVideoRoom() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#191919',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
              color: '#ffffff',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Consulta com Maria Santos
          </div>
          <div
            style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Hipertensão | 15/02/2026 14:30
          </div>
        </div>
        <div
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#4CAF50',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ● 23:45
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', background: '#000' }}>
        <div
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center', color: '#ffffff' }}>
            <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>👤</div>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Maria Santos
            </div>
          </div>
        </div>

        <div
          style={{
            width: '350px',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '1.5rem',
            overflowY: 'auto',
          }}
        >
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Anotações
          </h3>
          <textarea
            placeholder="Escreva suas anotações..."
            style={{
              width: '100%',
              height: '200px',
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '0.875rem',
              resize: 'vertical',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          />
          <button
            style={{
              width: '100%',
              padding: '0.75rem',
              marginTop: '1rem',
              background: 'linear-gradient(135deg, #88AB8E, #6B9A75)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            💊 Criar Receita
          </button>
        </div>
      </div>

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
            background: isMicOn ? 'rgba(255, 255, 255, 0.1)' : '#F44336',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          {isMicOn ? '🎤' : '🔇'}
        </button>
        <button
          onClick={() => setIsCameraOn(!isCameraOn)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: isCameraOn ? 'rgba(255, 255, 255, 0.1)' : '#F44336',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          {isCameraOn ? '📹' : '📵'}
        </button>
        <a
          href="/doctor/dashboard"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#F44336',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '1.5rem',
            textDecoration: 'none',
          }}
        >
          📞
        </a>
      </div>
    </div>
  );
}

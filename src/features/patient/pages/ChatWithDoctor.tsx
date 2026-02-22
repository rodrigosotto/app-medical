import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function ChatWithDoctor() {
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'doctor',
      text: 'Olá Maria! Como você está se sentindo hoje?',
      time: '14:30',
      doctor: 'Dr. Ricardo Almeida',
    },
    {
      id: 2,
      sender: 'patient',
      text: 'Olá, Doutor! Estou me sentindo melhor. A pressão normalizou.',
      time: '14:32',
    },
    {
      id: 3,
      sender: 'doctor',
      text: 'Que ótima notícia! Continue com a medicação conforme prescrito.',
      time: '14:33',
      doctor: 'Dr. Ricardo Almeida',
    },
    {
      id: 4,
      sender: 'patient',
      text: 'Sim, estou tomando regularmente. Posso fazer exercícios leves?',
      time: '14:35',
    },
    {
      id: 5,
      sender: 'doctor',
      text: 'Sim, caminhadas de 30min são recomendadas. Evite esforços intensos.',
      time: '14:36',
      doctor: 'Dr. Ricardo Almeida',
    },
  ];

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
          background: 'var(--shadow-overlay, rgba(0, 0, 0, 0.2))',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Link
          to="/patient/dashboard"
          style={{ color: 'var(--page-text)', fontSize: '1.5rem', textDecoration: 'none' }}
        >
          ←
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
            }}
          >
            👨‍⚕️
          </div>
          <div>
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--page-text)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Dr. Ricardo Almeida
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                color: 'var(--glass-text-soft)',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              ● Online
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div
        style={{
          flex: 1,
          padding: '2rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'patient' ? 'flex-end' : 'flex-start',
            }}
          >
            <div style={{ maxWidth: '70%' }}>
              {msg.sender === 'doctor' && (
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--glass-text-soft)',
                    marginBottom: '0.25rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {msg.doctor}
                </div>
              )}
              <div
                style={{
                  background:
                    msg.sender === 'patient'
                      ? 'rgba(255, 255, 255, 0.25)'
                      : 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.75rem 1rem',
                  borderRadius:
                    msg.sender === 'patient' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  color: 'var(--page-text)',
                  fontSize: '0.938rem',
                  lineHeight: 1.5,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {msg.text}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--glass-text-muted)',
                  marginTop: '0.25rem',
                  textAlign: msg.sender === 'patient' ? 'right' : 'left',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div style={{ background: 'var(--shadow-overlay, rgba(0, 0, 0, 0.2))', padding: '1rem 2rem' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              border: 'none',
              color: 'var(--page-text)',
              fontSize: '1.25rem',
              cursor: 'pointer',
            }}
          >
            📎
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              color: 'var(--page-text)',
              fontSize: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          />
          <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--gradient-brand)',
              border: 'none',
              color: 'var(--page-text)',
              fontSize: '1.25rem',
              cursor: 'pointer',
            }}
          >
            📤
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, FormEvent } from 'react';
import { useLogin } from '../hooks/useLogin';

/**
 * Componente de formulário de login com design moderno e glass morphism
 */
export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await login({ email, password });

    if (result.success) {
      console.log('Login realizado com sucesso!');
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
        background: 'linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%)',
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
          background: 'rgba(74, 144, 226, 0.5)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(80, 227, 194, 0.5)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite 2s',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '300px',
          height: '300px',
          background: 'rgba(72, 187, 204, 0.5)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite 4s',
        }}
      ></div>

      {/* Glass Morphism Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '450px',
          margin: '0 1rem',
        }}
      >
        <div
          style={{
            backdropFilter: 'blur(20px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            padding: '2rem',
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%)',
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
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
              Medical App
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem' }}>
              Faça login para acessar sua conta
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid rgba(239, 68, 68, 0.5)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p style={{ color: '#fecaca', fontSize: '0.875rem' }}>{error.message}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                }}
              >
                Email
              </label>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1rem',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                >
                  <svg
                    style={{ width: '20px', height: '20px', color: 'rgba(255, 255, 255, 0.5)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="seu@email.com"
                  style={{
                    width: '100%',
                    paddingLeft: '3rem',
                    paddingRight: '1rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s',
                    backdropFilter: 'blur(10px)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid rgba(255, 255, 255, 0.5)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                }}
              >
                Senha
              </label>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1rem',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                >
                  <svg
                    style={{ width: '20px', height: '20px', color: 'rgba(255, 255, 255, 0.5)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    paddingLeft: '3rem',
                    paddingRight: '1rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s',
                    backdropFilter: 'blur(10px)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid rgba(255, 255, 255, 0.5)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '0.5rem',
                    cursor: 'pointer',
                  }}
                />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Lembrar-me
                </span>
              </label>
              <a
                href="#"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%)',
                color: 'white',
                fontWeight: '600',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.5 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
            >
              {isLoading ? (
                <>
                  <svg
                    style={{
                      animation: 'spin 1s linear infinite',
                      marginRight: '0.75rem',
                      width: '20px',
                      height: '20px',
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      style={{ opacity: 0.25 }}
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      style={{ opacity: 0.75 }}
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
              Não tem uma conta?{' '}
              <a
                href="#"
                style={{
                  color: 'white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Criar conta
              </a>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.75rem',
            marginTop: '1.5rem',
          }}
        >
          © 2025 Medical App. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

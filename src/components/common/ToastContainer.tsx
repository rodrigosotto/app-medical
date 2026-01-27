import { useToast, Toast as ToastType } from '@/hooks/useToast';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        maxWidth: '400px',
      }}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

interface ToastProps {
  toast: ToastType;
  onClose: () => void;
}

function Toast({ toast, onClose }: ToastProps) {
  const colors = {
    success: {
      bg: 'rgba(16, 185, 129, 0.9)',
      border: 'rgba(16, 185, 129, 1)',
      icon: '✓',
    },
    error: {
      bg: 'rgba(239, 68, 68, 0.9)',
      border: 'rgba(239, 68, 68, 1)',
      icon: '✕',
    },
    warning: {
      bg: 'rgba(245, 158, 11, 0.9)',
      border: 'rgba(245, 158, 11, 1)',
      icon: '⚠',
    },
    info: {
      bg: 'rgba(59, 130, 246, 0.9)',
      border: 'rgba(59, 130, 246, 1)',
      icon: 'ℹ',
    },
  };

  const style = colors[toast.type];

  return (
    <div
      style={{
        background: style.bg,
        border: `1px solid ${style.border}`,
        borderRadius: '12px',
        padding: '1rem',
        color: 'white',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        minWidth: '300px',
        animation: 'slideIn 0.3s ease-out',
      }}
    >
      <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{style.icon}</span>
      <p style={{ flex: 1, margin: 0, fontSize: '0.875rem' }}>{toast.message}</p>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '1.25rem',
          padding: '0',
          lineHeight: 1,
          opacity: 0.7,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
      >
        ×
      </button>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

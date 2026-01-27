import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          pointerEvents: 'none',
        }}
      ></div>
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
          pointerEvents: 'none',
        }}
      ></div>
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
          pointerEvents: 'none',
        }}
      ></div>

      {/* Modal Background Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'transparent',
        }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '500px',
          margin: '0 1rem',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
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
          {title && (
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

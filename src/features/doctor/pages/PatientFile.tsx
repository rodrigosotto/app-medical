import { Link, useParams } from '@tanstack/react-router';
import type { DoctorRouteParams } from '../../../types/router.types';

export function PatientFile() {
  const params = useParams({ strict: false }) as DoctorRouteParams;
  const patientId = params.patientId;
  const patient = {
    name: 'Maria Santos',
    age: 35,
    cpf: '***. 456.789-**',
    phone: '(11) 98765-4321',
    email: 'maria@email.com',
    bloodType: 'O+',
    allergies: 'Dipirona',
    chronicDiseases: ['Hipertensão'],
    consultations: 12,
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link
          to={'/doctor/consultations' as string}
          style={{
            display: 'inline-flex',
            color: '#ffffff',
            textDecoration: 'none',
            marginBottom: '1rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ← Voltar
        </Link>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Ficha do Paciente
        </h1>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
              }}
            >
              👤
            </div>
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {patient.name}
              </h2>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {patient.age} anos | Tipo Sanguíneo: {patient.bloodType} | {patient.consultations}{' '}
                consultas
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
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
                Contato
              </h3>
              <div
                style={{
                  fontSize: '0.938rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 2,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                <div>📞 {patient.phone}</div>
                <div>📧 {patient.email}</div>
                <div>🆔 CPF: {patient.cpf}</div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 193, 7, 0.1)',
                border: '1px solid rgba(255, 193, 7, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
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
                Alergias
              </h3>
              <div
                style={{
                  fontSize: '0.938rem',
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {patient.allergies}
              </div>
            </div>

            <div
              style={{
                background: 'rgba(244, 67, 54, 0.1)',
                border: '1px solid rgba(244, 67, 54, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
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
                Doenças Crônicas
              </h3>
              <div
                style={{
                  fontSize: '0.938rem',
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {patient.chronicDiseases.join(', ')}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link
              to={`/doctor/patients/${patientId}/history` as string}
              style={{
                flex: 1,
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                textAlign: 'center',
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📜 Histórico
            </Link>
            <Link
              to={`/doctor/patients/${patientId}/exams` as string}
              style={{
                flex: 1,
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                textAlign: 'center',
                textDecoration: 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              📋 Exames
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

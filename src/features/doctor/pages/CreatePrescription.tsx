import { FormEvent, useState } from 'react';
import { Link, useNavigate, useParams } from '@tanstack/react-router';
import type { DoctorRouteParams } from '../../../types/router.types';

export function CreatePrescription() {
  const navigate = useNavigate();
  const params = useParams({ strict: false }) as DoctorRouteParams;
  const patientId = params.patientId;
  const [medications, setMedications] = useState([
    { id: 1, name: '', dosage: '', frequency: '', duration: '' },
  ]);

  const handleAddMedication = () => {
    setMedications([
      ...medications,
      { id: Date.now(), name: '', dosage: '', frequency: '', duration: '' },
    ]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Receita criada com sucesso!');
    navigate({ to: '/doctor/prescriptions' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link
          // @ts-expect-error - Route will be configured later
          to={`/doctor/patients/${patientId}/file`}
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
          Nova Receita
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.938rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Paciente
            </label>
            <input
              type="text"
              value="Maria Santos"
              disabled
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            />
          </div>

          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Medicamentos
          </h3>
          {medications.map((med) => (
            <div
              key={med.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Medicamento
                  </label>
                  <input
                    type="text"
                    placeholder="Nome do medicamento"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.938rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Dosagem
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 50mg"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.938rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Frequência
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 1x ao dia"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.938rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Duração
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 30 dias"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.938rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMedication}
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px dashed rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              color: '#ffffff',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ➕ Adicionar Medicamento
          </button>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.938rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Observações
            </label>
            <textarea
              placeholder="Orientações adicionais..."
              style={{
                width: '100%',
                height: '100px',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1rem',
                resize: 'vertical',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, #4CAF50, #45a049)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ✅ Criar Receita
          </button>
        </form>
      </div>
    </div>
  );
}

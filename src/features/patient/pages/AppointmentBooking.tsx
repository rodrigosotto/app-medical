import { useState } from 'react';
import { Link } from '@tanstack/react-router';

/**
 * Página de Agendamento de Consulta
 * Permite o paciente agendar uma nova consulta selecionando especialidade, médico, data e horário
 */
export function AppointmentBooking() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Dados simulados
  const specialties = [
    'Cardiologia',
    'Dermatologia',
    'Ortopedia',
    'Pediatria',
    'Neurologia',
    'Clínico Geral',
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Ricardo Almeida',
      specialty: 'Cardiologia',
      rating: 4.9,
      consultations: 230,
    },
    {
      id: 2,
      name: 'Dra. Juliana Costa',
      specialty: 'Dermatologia',
      rating: 4.8,
      consultations: 180,
    },
    { id: 3, name: 'Dr. Carlos Oliveira', specialty: 'Ortopedia', rating: 5.0, consultations: 195 },
  ];

  const availableTimes = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Consulta agendada com sucesso!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            to="/patient/dashboard"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#ffffff',
              textDecoration: 'none',
              marginBottom: '1rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ← Voltar ao Painel
          </Link>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Agendar Consulta
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Escolha um especialista, data e horário para sua consulta
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            {/* Sidebar - Filtros */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                height: 'fit-content',
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Filtrar por Especialidade
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    type="button"
                    onClick={() => setSelectedSpecialty(specialty)}
                    style={{
                      padding: '0.75rem 1rem',
                      background:
                        selectedSpecialty === specialty
                          ? 'rgba(255, 255, 255, 0.25)'
                          : 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${selectedSpecialty === specialty ? '#ffffff' : 'rgba(255, 255, 255, 0.2)'}`,
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      fontWeight: selectedSpecialty === specialty ? 600 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Médicos Disponíveis */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '2rem',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Médicos Disponíveis
                </h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor.name)}
                      style={{
                        background:
                          selectedDoctor === doctor.name
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'rgba(255, 255, 255, 0.1)',
                        border: `1px solid ${selectedDoctor === doctor.name ? '#ffffff' : 'rgba(255, 255, 255, 0.2)'}`,
                        borderRadius: '12px',
                        padding: '1.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 600,
                              color: '#ffffff',
                              marginBottom: '0.25rem',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            {doctor.name}
                          </div>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: 'rgba(255, 255, 255, 0.7)',
                              marginBottom: '0.5rem',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            {doctor.specialty}
                          </div>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            {doctor.consultations} consultas realizadas
                          </div>
                        </div>
                        <div
                          style={{
                            background: 'rgba(255, 193, 7, 0.2)',
                            border: '1px solid rgba(255, 193, 7, 0.5)',
                            borderRadius: '8px',
                            padding: '0.25rem 0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                        >
                          <span style={{ color: '#FFC107', fontSize: '1rem' }}>★</span>
                          <span
                            style={{
                              color: '#FFC107',
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            {doctor.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seleção de Data e Horário */}
              {selectedDoctor && (
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '2rem',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '1.5rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Selecione Data e Horário
                  </h2>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.5rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      Data da Consulta
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '1rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '1rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        Horários Disponíveis
                      </label>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: '0.75rem',
                        }}
                      >
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            style={{
                              padding: '0.75rem',
                              background:
                                selectedTime === time
                                  ? 'rgba(255, 255, 255, 0.25)'
                                  : 'rgba(255, 255, 255, 0.1)',
                              border: `1px solid ${selectedTime === time ? '#ffffff' : 'rgba(255, 255, 255, 0.2)'}`,
                              borderRadius: '8px',
                              color: '#ffffff',
                              fontSize: '0.875rem',
                              fontWeight: selectedTime === time ? 600 : 400,
                              cursor: 'pointer',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Botão de Confirmação */}
              {selectedTime && (
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(136, 171, 142, 0.4)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Confirmar Agendamento
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';

export function DoctorsApproval() {
  const [filter, setFilter] = useState('pendentes');
  const doctors = [
    {
      id: 1,
      name: 'Dr. Pedro Oliveira',
      specialty: 'Cardiologia',
      crm: '54321-SP',
      email: 'pedro@clinica.com',
      status: 'pendente',
      date: '10/02/2026',
    },
    {
      id: 2,
      name: 'Dra. Ana Paula',
      specialty: 'Dermatologia',
      crm: '98765-RJ',
      email: 'ana@clinica.com',
      status: 'pendente',
      date: '08/02/2026',
    },
    {
      id: 3,
      name: 'Dr. Roberto Costa',
      specialty: 'Pediatria',
      crm: '11223-MG',
      email: 'roberto@clinica.com',
      status: 'aprovado',
      date: '01/02/2026',
    },
  ];

  const handleApprove = (id: number) => {
    alert(`Médico ID ${id} aprovado com sucesso!`);
  };

  const handleReject = (id: number) => {
    if (confirm('Tem certeza que deseja rejeitar este médico?')) {
      alert(`Médico ID ${id} rejeitado.`);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Aprovação de Médicos
        </h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          {['pendentes', 'aprovados', 'rejeitados'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.75rem 1.5rem',
                background: filter === f ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Nome
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Especialidade
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    CRM
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.name}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.specialty}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.crm}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.email}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          background:
                            doctor.status === 'pendente'
                              ? 'rgba(255, 193, 7, 0.2)'
                              : doctor.status === 'aprovado'
                                ? 'rgba(76, 175, 80, 0.2)'
                                : 'rgba(244, 67, 54, 0.2)',
                          color:
                            doctor.status === 'pendente'
                              ? '#FFC107'
                              : doctor.status === 'aprovado'
                                ? '#4CAF50'
                                : '#F44336',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      {doctor.status === 'pendente' && (
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                          <button
                            onClick={() => handleApprove(doctor.id)}
                            style={{
                              padding: '0.5rem 1rem',
                              background: 'rgba(76, 175, 80, 0.2)',
                              border: '1px solid rgba(76, 175, 80, 0.5)',
                              borderRadius: '8px',
                              color: '#4CAF50',
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            ✅ Aprovar
                          </button>
                          <button
                            onClick={() => handleReject(doctor.id)}
                            style={{
                              padding: '0.5rem 1rem',
                              background: 'rgba(244, 67, 54, 0.2)',
                              border: '1px solid rgba(244, 67, 54, 0.5)',
                              borderRadius: '8px',
                              color: '#F44336',
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                          >
                            ❌ Rejeitar
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

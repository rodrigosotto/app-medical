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
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
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
                background: filter === f ? 'var(--glass-bg-active)' : 'var(--glass-bg)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '12px',
                color: 'var(--page-text)',
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
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                      borderBottom: '1px solid var(--glass-border)',
                      color: 'var(--page-text)',
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
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.name}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.specialty}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.crm}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {doctor.email}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
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
                              ? 'var(--color-warning-bg)'
                              : doctor.status === 'aprovado'
                                ? 'var(--badge-active-bg)'
                                : 'var(--badge-expired-bg)',
                          color:
                            doctor.status === 'pendente'
                              ? 'var(--color-warning)'
                              : doctor.status === 'aprovado'
                                ? 'var(--badge-active-text)'
                                : 'var(--badge-expired-text)',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                      }}
                    >
                      {doctor.status === 'pendente' && (
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                          <button
                            onClick={() => handleApprove(doctor.id)}
                            style={{
                              padding: '0.5rem 1rem',
                              background: 'var(--color-success-bg)',
                              border: '1px solid rgba(76, 175, 80, 0.5)',
                              borderRadius: '8px',
                              color: 'var(--color-success)',
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
                              background: 'var(--badge-expired-bg)',
                              border: '1px solid rgba(244, 67, 54, 0.5)',
                              borderRadius: '8px',
                              color: 'var(--badge-expired-text)',
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

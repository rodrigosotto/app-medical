import { FormEvent, useState } from 'react';

export function AvailabilitySettings() {
  const [weekDays, setWeekDays] = useState({
    monday: { active: true, start: '09:00', end: '18:00' },
    tuesday: { active: true, start: '09:00', end: '18:00' },
    wednesday: { active: true, start: '09:00', end: '18:00' },
    thursday: { active: true, start: '09:00', end: '18:00' },
    friday: { active: true, start: '09:00', end: '18:00' },
    saturday: { active: false, start: '09:00', end: '13:00' },
    sunday: { active: false, start: '09:00', end: '13:00' },
  });

  const dayNames = {
    monday: 'Segunda-feira',
    tuesday: 'Terça-feira',
    wednesday: 'Quarta-feira',
    thursday: 'Quinta-feira',
    friday: 'Sexta-feira',
    saturday: 'Sábado',
    sunday: 'Domingo',
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Disponibilidade atualizada com sucesso!');
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
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Configurar Disponibilidade
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
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1.5rem',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Horários Semanais
          </h3>

          {Object.entries(weekDays).map(([day, config]) => (
            <div
              key={day}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                marginBottom: '1rem',
              }}
            >
              <input
                type="checkbox"
                checked={config.active}
                onChange={(e) =>
                  setWeekDays({ ...weekDays, [day]: { ...config, active: e.target.checked } })
                }
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <div
                style={{
                  flex: 1,
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {dayNames[day as keyof typeof dayNames]}
              </div>
              {config.active && (
                <>
                  <input
                    type="time"
                    value={config.start}
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                  <span style={{ color: '#ffffff' }}>até</span>
                  <input
                    type="time"
                    value={config.end}
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  />
                </>
              )}
            </div>
          ))}

          <div
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.75rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Duração padrão das consultas
            </label>
            <select
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <option>30 minutos</option>
              <option>45 minutos</option>
              <option>60 minutos</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              marginTop: '2rem',
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
            ✅ Salvar Configurações
          </button>
        </form>
      </div>
    </div>
  );
}

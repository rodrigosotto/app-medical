import { useState } from 'react';

interface PatientRegistrationFormProps {
  onSubmit: (data: PatientFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export interface PatientFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phone: string;
  photo?: File;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  hasInsurance: boolean;
  insuranceName?: string;
}

export function PatientRegistrationForm({
  onSubmit,
  onCancel,
  isLoading = false,
}: PatientRegistrationFormProps) {
  const [formData, setFormData] = useState<PatientFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
    hasInsurance: false,
    insuranceName: '',
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleChange = (field: keyof PatientFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem',
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          maxHeight: '70vh',
          overflowY: 'auto',
          padding: '0.5rem',
        }}
      >
        {/* Dados de acesso */}
        <div
          style={{
            marginBottom: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem',
            }}
          >
            Dados de Acesso
          </h3>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              style={inputStyle}
              placeholder="seu@email.com"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Senha *</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                required
                minLength={6}
                style={inputStyle}
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            <div>
              <label style={labelStyle}>Confirmar Senha *</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                required
                minLength={6}
                style={inputStyle}
                placeholder="Confirme a senha"
              />
            </div>
          </div>
        </div>

        {/* Dados pessoais */}
        <div
          style={{
            marginBottom: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem',
            }}
          >
            Dados Pessoais
          </h3>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Nome Completo *</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              required
              style={inputStyle}
              placeholder="Nome completo"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Telefone *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
              style={inputStyle}
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
          </div>

          {/* Foto */}
          <div>
            <label style={labelStyle}>Foto (opcional)</label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Preview"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #e5e7eb',
                  }}
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                }}
              />
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div
          style={{
            marginBottom: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem',
            }}
          >
            Endereço
          </h3>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>CEP *</label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              required
              style={inputStyle}
              placeholder="00000-000"
              maxLength={9}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Rua *</label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleChange('street', e.target.value)}
              required
              style={inputStyle}
              placeholder="Nome da rua"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Número *</label>
              <input
                type="text"
                value={formData.number}
                onChange={(e) => handleChange('number', e.target.value)}
                required
                style={inputStyle}
                placeholder="Nº"
              />
            </div>

            <div>
              <label style={labelStyle}>Complemento</label>
              <input
                type="text"
                value={formData.complement}
                onChange={(e) => handleChange('complement', e.target.value)}
                style={inputStyle}
                placeholder="Apto, Bloco, etc"
              />
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            <div>
              <label style={labelStyle}>Bairro *</label>
              <input
                type="text"
                value={formData.neighborhood}
                onChange={(e) => handleChange('neighborhood', e.target.value)}
                required
                style={inputStyle}
                placeholder="Bairro"
              />
            </div>

            <div>
              <label style={labelStyle}>Cidade *</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                required
                style={inputStyle}
                placeholder="Cidade"
              />
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <label style={labelStyle}>Estado *</label>
            <select
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              required
              style={inputStyle}
            >
              <option value="">Selecione</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
        </div>

        {/* Plano de saúde */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem',
            }}
          >
            Plano de Saúde
          </h3>

          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={formData.hasInsurance}
                onChange={(e) => handleChange('hasInsurance', e.target.checked)}
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  cursor: 'pointer',
                }}
              />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>Possui plano de saúde</span>
            </label>
          </div>

          {formData.hasInsurance && (
            <div>
              <label style={labelStyle}>Nome do Plano *</label>
              <input
                type="text"
                value={formData.insuranceName}
                onChange={(e) => handleChange('insuranceName', e.target.value)}
                required={formData.hasInsurance}
                style={inputStyle}
                placeholder="Ex: Unimed, Bradesco Saúde"
              />
            </div>
          )}
        </div>
      </div>

      {/* Botões */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1.5rem',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '1.5rem',
        }}
      >
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem',
            background: 'white',
            color: '#374151',
            fontWeight: '500',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.5 : 1,
          }}
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '0.75rem',
            border: 'none',
            borderRadius: '0.5rem',
            background: isLoading ? '#9ca3af' : '#3b82f6',
            color: 'white',
            fontWeight: '500',
            cursor: isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {isLoading ? 'Cadastrando...' : 'Cadastrar Paciente'}
        </button>
      </div>

      <p
        style={{
          marginTop: '1rem',
          fontSize: '0.75rem',
          color: '#6b7280',
          textAlign: 'center',
        }}
      >
        * Campos obrigatórios
      </p>
    </form>
  );
}

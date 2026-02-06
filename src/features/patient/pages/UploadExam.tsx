import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function UploadExam() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Exame enviado com sucesso!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link
          to="/patient/exams"
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
          Enviar Exame
        </h1>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            {/* Drag & Drop Zone */}
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              style={{
                border: `2px dashed ${dragActive ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'}`,
                borderRadius: '12px',
                padding: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                background: dragActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📤</div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {file ? file.name : 'Arraste e solte seu arquivo aqui'}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                ou clique para selecionar
              </div>
              <input
                type="file"
                onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                style={{ display: 'none' }}
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Selecionar Arquivo
              </label>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginTop: '1rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Formatos aceitos: PDF, JPG, PNG, DICOM (máx. 10MB)
              </div>
            </div>

            {/* Categoria */}
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
                Categoria do Exame *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
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
              >
                <option value="">Selecione uma categoria</option>
                <option value="sangue">Exame de Sangue</option>
                <option value="imagem">Exame de Imagem</option>
                <option value="urina">Exame de Urina</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            {/* Observações */}
            <div style={{ marginBottom: '2rem' }}>
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
                Observações
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Adicione observações sobre o exame..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  resize: 'vertical',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              />
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              disabled={!file || !category}
              style={{
                width: '100%',
                padding: '1rem',
                background:
                  !file || !category
                    ? 'rgba(136, 171, 142, 0.3)'
                    : 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
                border: 'none',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1.125rem',
                fontWeight: 600,
                cursor: !file || !category ? 'not-allowed' : 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Enviar Exame
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { FormEvent, useState } from 'react';

export function CreateBlogPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('saude-geral');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Artigo publicado com sucesso!');
    window.location.href = '/doctor/blog-posts';
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
          Criar Novo Artigo
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
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Título do Artigo
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título do artigo..."
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Categoria
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <option value="saude-geral">Saúde Geral</option>
              <option value="nutricao">Nutrição</option>
              <option value="exercicios">Exercícios</option>
              <option value="mental">Saúde Mental</option>
              <option value="prevencao">Prevenção</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Imagem de Capa
            </label>
            <div
              style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px dashed rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📷</div>
              <div
                style={{
                  fontSize: '0.938rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Clique para adicionar uma imagem ou arraste aqui
              </div>
              <input type="file" accept="image/*" style={{ display: 'none' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Conteúdo
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escreva o conteúdo do artigo..."
              required
              style={{
                width: '100%',
                height: '400px',
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

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => window.location.href = '/doctor/blog-posts'}
              style={{
                flex: 1,
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: '1rem',
                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                border: 'none',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              ✅ Publicar Artigo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

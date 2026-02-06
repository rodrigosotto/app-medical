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
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--page-text)',
            marginBottom: '2rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          Criar Novo Artigo
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
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
                color: 'var(--page-text)',
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
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                color: 'var(--page-text)',
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
                color: 'var(--page-text)',
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
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                color: 'var(--page-text)',
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
                color: 'var(--page-text)',
                marginBottom: '0.5rem',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Imagem de Capa
            </label>
            <div
              style={{
                padding: '2rem',
                background: 'var(--glass-shadow)',
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
                  color: 'var(--glass-text-muted)',
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
                color: 'var(--page-text)',
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
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                color: 'var(--page-text)',
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
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border-strong)',
                borderRadius: '12px',
                color: 'var(--page-text)',
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
                background: 'var(--gradient-success)',
                border: 'none',
                borderRadius: '12px',
                color: 'var(--page-text)',
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

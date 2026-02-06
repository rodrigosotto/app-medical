import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function BlogArticles() {
  const [category, setCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: '5 Dicas para Manter a Pressão Arterial Sob Controle',
      category: 'Cardiologia',
      author: 'Dr. Ricardo Almeida',
      date: '10/02/2026',
      image: '❤️',
      excerpt: 'Descubra estratégias eficazes para controlar sua pressão arterial naturalmente...',
    },
    {
      id: 2,
      title: 'Importância dos Exames de Rotina',
      category: 'Saúde Preventiva',
      author: 'Dra. Ana Paula',
      date: '08/02/2026',
      image: '📋',
      excerpt: 'Entenda por que realizar check-ups regulares pode salvar sua vida...',
    },
    {
      id: 3,
      title: 'Alimentação Saudável para o Coração',
      category: 'Nutrição',
      author: 'Dr. Carlos Oliveira',
      date: '05/02/2026',
      image: '🥗',
      excerpt: 'Conheça os alimentos que protegem seu coração e promovem saúde cardiovascular...',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #88AB8E 0%, #6B9A75 100%)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link
          to="/patient/dashboard"
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
          Blog Médico
        </h1>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['all', 'Cardiologia', 'Nutrição', 'Saúde Preventiva'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  background:
                    category === cat ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${category === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.2)'}`,
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: category === cat ? 600 : 400,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {cat === 'all' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/patient/blog/${article.id}`}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  height: '200px',
                  background:
                    'linear-gradient(135deg, rgba(136, 171, 142, 0.3), rgba(107, 154, 117, 0.3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                }}
              >
                {article.image}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span
                  style={{
                    background: 'rgba(136, 171, 142, 0.3)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {article.category}
                </span>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: '1rem 0 0.5rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {article.excerpt}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  <span>👨‍⚕️ {article.author}</span>
                  <span>📅 {article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

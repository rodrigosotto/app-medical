import { Link, useParams } from '@tanstack/react-router';
import type { PatientRouteParams } from '../../../types/router.types';

export function BlogArticle() {
  const params = useParams({ strict: false }) as PatientRouteParams;
  const articleId = params.articleId;

  const article = {
    id: articleId || '1',
    title: '5 Dicas para Manter a Pressão Arterial Sob Controle',
    category: 'Cardiologia',
    author: { name: 'Dr. Ricardo Almeida', specialty: 'Cardiologista', crm: 'CRM/SP 123456' },
    date: '10/02/2026',
    readTime: '8 min',
    image: '❤️',
    content: `
A hipertensão arterial é uma das condições crônicas mais comuns no Brasil, afetando milhões de pessoas. Manter a pressão arterial controlada é essencial para prevenir complicações cardiovasculares graves. Aqui estão 5 dicas fundamentais:

## 1. Reduza o Consumo de Sódio

O excesso de sal na alimentação é um dos principais vilões da hipertensão. Reduza o consumo de alimentos processados e evite adicionar sal às refeições.

## 2. Pratique Exercícios Regularmente

Atividades físicas moderadas, como caminhadas de 30 minutos diários, ajudam a fortalecer o coração e reduzir a pressão arterial.

## 3. Mantenha um Peso Saudável

O sobrepeso está diretamente relacionado ao aumento da pressão arterial. Manter o peso adequado é fundamental.

## 4. Controle o Estresse

O estresse crônico pode elevar a pressão arterial. Pratique técnicas de relaxamento como meditação e yoga.

## 5. Monitore Regularmente

Faça check-ups regulares e monitore sua pressão arterial em casa. O acompanhamento médico é essencial.

Lembre-se: estas dicas complementam, mas não substituem o tratamento médico prescrito. Sempre consulte seu cardiologista.
    `,
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link
          to="/patient/blog"
          style={{
            display: 'inline-flex',
            color: 'var(--page-text)',
            textDecoration: 'none',
            marginBottom: '1rem',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          ← Voltar para o Blog
        </Link>

        <div
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {/* Header Image */}
          <div
            style={{
              height: '300px',
              background:
                'linear-gradient(135deg, rgba(136, 171, 142, 0.4), rgba(107, 154, 117, 0.4))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8rem',
            }}
          >
            {article.image}
          </div>

          {/* Content */}
          <div style={{ padding: '2rem' }}>
            {/* Meta */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  background: 'var(--color-brand-muted)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--page-text)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--page-text)',
                marginBottom: '1rem',
                lineHeight: 1.2,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {article.title}
            </h1>

            {/* Author & Date */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingBottom: '1.5rem',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--glass-border)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                👨‍⚕️
              </div>
              <div>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--page-text)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {article.author.name}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--glass-text-muted)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {article.author.specialty} | {article.date} • {article.readTime} de leitura
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div
              style={{
                fontSize: '1.125rem',
                color: 'var(--page-text)',
                lineHeight: 1.8,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2
                      key={index}
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--page-text)',
                        marginTop: '2rem',
                        marginBottom: '1rem',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  );
                }
                return (
                  <p key={index} style={{ marginBottom: '1.5rem' }}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Author Info */}
            <div
              style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div
                style={{
                  background: 'var(--glass-bg)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    flexShrink: 0,
                  }}
                >
                  👨‍⚕️
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--page-text)',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {article.author.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.938rem',
                      color: 'var(--glass-text-soft)',
                      marginBottom: '0.25rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {article.author.specialty}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--glass-text-muted)',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {article.author.crm}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

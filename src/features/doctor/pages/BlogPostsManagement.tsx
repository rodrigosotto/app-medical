export function BlogPostsManagement() {
  const posts = [
    {
      id: 1,
      title: 'Hipertensão: Prevenção e Tratamento',
      category: 'Saúde Geral',
      date: '10/02/2026',
      status: 'publicado',
      views: 1245,
    },
    {
      id: 2,
      title: 'Importância da Atividade Física',
      category: 'Exercícios',
      date: '05/02/2026',
      status: 'publicado',
      views: 892,
    },
    {
      id: 3,
      title: 'Alimentação Saudável',
      category: 'Nutrição',
      date: '01/02/2026',
      status: 'rascunho',
      views: 0,
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--page-bg)',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--page-text)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Gerenciar Artigos
          </h1>
          <a
            href="/doctor/blog-posts/create"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--gradient-light)',
              border: 'none',
              borderRadius: '12px',
              color: 'var(--color-brand)',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            ➕ Novo Artigo
          </a>
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
                    Título
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
                    Categoria
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
                    Data
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
                    Visualizações
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
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {post.title}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {post.category}
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        color: 'var(--page-text)',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                      }}
                    >
                      {post.date}
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
                      {post.views.toLocaleString('pt-BR')}
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
                            post.status === 'publicado'
                              ? 'var(--badge-active-bg)'
                              : 'var(--color-warning-bg)',
                          color: post.status === 'publicado' ? 'var(--badge-active-text)' : 'var(--color-warning)',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--glass-divider)',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <button
                          style={{
                            background: 'var(--color-info-bg)',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.5rem',
                            color: 'var(--color-info)',
                            cursor: 'pointer',
                            fontSize: '1rem',
                          }}
                        >
                          ✏️
                        </button>
                        <button
                          style={{
                            background: 'var(--badge-expired-bg)',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.5rem',
                            color: 'var(--badge-expired-text)',
                            cursor: 'pointer',
                            fontSize: '1rem',
                          }}
                        >
                          🗑️
                        </button>
                      </div>
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

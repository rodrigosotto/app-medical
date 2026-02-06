import { FormEvent, useState } from 'react';
import { useParams } from '@tanstack/react-router';

export function AddEditProduct() {
  const { productId } = useParams({ strict: false }) as { productId?: string };
  const isEdit = !!productId;

  const [formData, setFormData] = useState({
    name: isEdit ? 'Termômetro Digital' : '',
    category: isEdit ? 'equipamentos' : '',
    price: isEdit ? '45.90' : '',
    stock: isEdit ? '45' : '',
    description: isEdit ? 'Termômetro digital de alta precisão' : '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(isEdit ? 'Produto atualizado com sucesso!' : 'Produto cadastrado com sucesso!');
    window.location.href = '/admin/products';
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
          {isEdit ? 'Editar Produto' : 'Novo Produto'}
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
              Nome do Produto
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div>
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
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
              >
                <option value="">Selecione...</option>
                <option value="equipamentos">Equipamentos</option>
                <option value="protecao">Proteção</option>
                <option value="higiene">Higiene</option>
                <option value="suplementos">Suplementos</option>
              </select>
            </div>
            <div>
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
                Preço (R$)
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
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
              Estoque Inicial
            </label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
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
              Descrição
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              style={{
                width: '100%',
                height: '120px',
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

          <div style={{ marginBottom: '2rem' }}>
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
              Imagem do Produto
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
                Clique para adicionar uma imagem
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => (window.location.href = '/admin/products')}
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
              {isEdit ? '✅ Atualizar' : '✅ Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

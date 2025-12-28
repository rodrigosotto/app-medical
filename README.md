# Medical App

Aplicação médica construída com React, TypeScript, Vite e TanStack (Query + Router).

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── providers/         # Providers (Query, Router)
│   ├── router/           # Configuração de rotas
│   └── App.tsx           # Componente raiz
│
├── features/              # Features modulares (Feature-based Design)
│   ├── auth/             # Autenticação
│   ├── users/            # Gerenciamento de usuários
│   └── dashboard/        # Dashboard
│
├── components/           # Componentes compartilhados
│   ├── ui/              # Componentes UI (Button, Input, Modal, etc)
│   ├── layout/          # Componentes de layout (Header, Footer, Sidebar)
│   └── common/          # Componentes comuns (ErrorBoundary, Loading)
│
├── hooks/               # Custom hooks globais
├── services/            # Serviços (API, Storage, Analytics)
├── utils/               # Utilitários (formatters, validators, helpers)
├── types/               # Types TypeScript globais
├── styles/              # Estilos globais e variáveis CSS
├── config/              # Configurações (env, queryClient, router)
└── lib/                 # Instâncias configuradas (queryClient, router)
```

## 🎯 Padrões Utilizados

### Feature-based Design
Cada feature é um módulo independente contendo:
- **api/**: Chamadas à API e queries do TanStack Query
- **components/**: Componentes específicos da feature
- **hooks/**: Hooks customizados da feature
- **types/**: Types TypeScript da feature
- **utils/**: Utilitários específicos da feature
- **index.ts**: Barrel export para API pública

### TanStack Query
- Configuração centralizada em `config/queryClient.config.ts`
- Queries e mutations organizadas por feature
- Query keys padronizados para cache management

### TanStack Router
- Configuração centralizada em `config/router.config.ts`
- Rotas definidas em `app/router/routes.tsx`
- Type-safe routing

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Testes
```bash
npm test
```

## 📦 Principais Dependências
- React 18
- TypeScript
- Vite
- TanStack Query
- TanStack Router
- Axios

## 🔧 Configuração

1. Copie `.env.example` para `.env.local`
2. Configure suas variáveis de ambiente
3. Ajuste as configurações em `src/config/`

## 📝 Convenções

### Imports
Use path aliases configurados no `tsconfig.json`:
```typescript
import { Button } from '@/components/ui';
import { useAuth } from '@/features/auth';
import { apiClient } from '@/services';
```

### Nomenclatura
- Componentes: PascalCase (`UserCard.tsx`)
- Hooks: camelCase com prefixo `use` (`useAuth.ts`)
- Utilitários: camelCase (`formatDate.ts`)
- Types: PascalCase (`User`, `AuthResponse`)

### Estrutura de Feature
```
feature-name/
├── api/
│   ├── featureApi.ts        # Endpoints
│   └── featureQueries.ts    # TanStack Query hooks
├── components/              # Componentes da feature
├── hooks/                   # Hooks customizados
├── types/                   # Types TypeScript
├── utils/                   # Utilitários específicos
└── index.ts                 # Barrel export
```

## 🎨 Componentes UI

Componentes UI reutilizáveis disponíveis:
- `Button`: Botões com variantes e tamanhos
- `Input`: Inputs com validação e labels
- `Modal`: Modais acessíveis
- `Card`: Cards para conteúdo
- `Table`: Tabelas com tipos genéricos

## 🔐 Autenticação

A autenticação é gerenciada pela feature `auth`:
- Login/Register forms
- Protected routes
- Token management (localStorage)
- Auto-refresh de tokens

## 📊 Estado Global

- **Server State**: TanStack Query (dados da API)
- **Client State**: React hooks locais
- **Storage**: localStorage/sessionStorage services

## 🧪 Testes

Estrutura de testes em `/tests`:
- `setup.ts`: Configuração dos testes
- `utils/`: Utilitários de teste
- `mocks/`: Mocks de API e dados

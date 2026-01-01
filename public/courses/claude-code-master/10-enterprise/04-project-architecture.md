# Arquitetura de Projetos

Claude Code não apenas edita arquivos - ele entende a arquitetura do seu projeto e trabalha de forma consistente com ela.

## Como Claude Code Entende Seu Projeto

### 1. Análise de Estrutura
\`\`\`
src/
├── components/     # UI components
├── services/       # Business logic
├── api/           # API layer
├── models/        # Data models
└── utils/         # Helpers
\`\`\`

Claude Code infere padrões pela estrutura de pastas.

### 2. Análise de Imports
Ao ler imports, Claude entende dependências:
\`\`\`typescript
import { User } from '@/models/User'
import { api } from '@/services/api'
// Claude entende: este arquivo depende de models e services
\`\`\`

### 3. Análise de Configuração
- \`package.json\` → dependências, scripts
- \`tsconfig.json\` → paths, strict mode
- \`.eslintrc\` → padrões de código

## Informando Arquitetura via CLAUDE.md

O melhor jeito de informar sua arquitetura:

\`\`\`markdown
# Arquitetura do Projeto

## Camadas
1. **Presentation** (src/components) - React components
2. **Application** (src/services) - Use cases, business rules
3. **Domain** (src/models) - Entities, value objects
4. **Infrastructure** (src/api) - External services

## Regras
- Components NUNCA acessam API diretamente
- Services são a única camada que faz I/O
- Models são puros (sem side effects)

## Padrões em Uso
- Repository Pattern para data access
- Factory Pattern para criação de objetos
- Observer Pattern para eventos
\`\`\`

## Claude Code Respeita Sua Arquitetura

### Exemplo: Seguindo Camadas

\`\`\`
Você: "Adicione busca de produtos"

Claude (entendendo a arquitetura):
1. Cria ProductRepository em src/repositories/
2. Cria ProductService em src/services/
3. Cria useProducts hook em src/hooks/
4. Usa o hook no ProductList component

❌ NÃO faz fetch direto no component
✅ Segue o fluxo de camadas definido
\`\`\`

### Exemplo: Respeitando Padrões

\`\`\`
Seu projeto usa factories:

// Existente
const user = UserFactory.create({ name: 'João' })

Você pede: "Crie Product model"

Claude cria:
// src/factories/ProductFactory.ts
export const ProductFactory = {
  create(data: ProductData): Product {
    return new Product(data)
  }
}

// Segue o mesmo padrão existente
\`\`\`

## Dica TOP 1%: Arquitetura Explícita

Quanto mais explícita sua arquitetura no CLAUDE.md, melhores os resultados:

\`\`\`markdown
## Estrutura de Features (Feature-Sliced Design)

Cada feature tem:
\`\`\`
features/
└── [feature-name]/
    ├── api/        # API calls
    ├── model/      # Types, stores
    ├── ui/         # Components
    └── lib/        # Utils
\`\`\`

## Quando criar novo código:
1. Identificar a feature
2. Colocar no slice correto
3. Exportar via index.ts
4. Nunca importar de outra feature diretamente
\`\`\`

## Anti-Padrões que Claude Code Evita

| Anti-Padrão | O que Claude Faz |
|-------------|------------------|
| God Component | Sugere split em componentes menores |
| Prop Drilling | Sugere Context ou state management |
| Business logic em UI | Move para services |
| Imports circulares | Alerta e sugere refatoração |

## Trabalhando com Monorepos

Claude Code entende monorepos:

\`\`\`
packages/
├── web/          # Next.js app
├── mobile/       # React Native
├── shared/       # Shared types & utils
└── api/          # Backend
\`\`\`

\`\`\`
Você: "Adicione um novo tipo User compartilhado"

Claude:
1. Cria em packages/shared/types/User.ts
2. Exporta via packages/shared/index.ts
3. Mostra como importar em web e mobile
\`\`\`
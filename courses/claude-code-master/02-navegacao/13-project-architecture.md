# Arquitetura de Projetos com Claude Code

Aprenda a trabalhar com projetos de qualquer tamanho com eficiência máxima.

## O Problema da Escala

\`\`\`
Projeto Pequeno (< 20 arquivos)    Projeto Enterprise (500+ arquivos)
         ↓                                    ↓
   Claude vê tudo                    Claude precisa de guia
   Contexto cabíveis                 Contexto estratégico
\`\`\`

## Estratégias por Tamanho de Projeto

### Pequeno (< 50 arquivos)
- ✅ Claude pode explorar livremente
- ✅ Contexto cabe em uma sessão
- ⚡ Estratégia: Deixe Claude usar Explorer

### Médio (50-200 arquivos)
- ⚠️ Precisa de direcionamento
- 📁 Use CLAUDE.md por pasta
- ⚡ Estratégia: Aponte para áreas relevantes

### Grande (200+ arquivos)
- 🎯 Contexto cirúrgico é essencial
- 📋 Master Context Documents
- ⚡ Estratégia: Subagents especializados + CLAUDE.md robusto

## Anatomia de um Projeto Bem Estruturado

\`\`\`
project/
├── CLAUDE.md              ← Visão geral, convenções
├── src/
│   ├── CLAUDE.md          ← Arquitetura do código
│   ├── api/
│   │   └── CLAUDE.md      ← Padrões de API
│   ├── components/
│   │   └── CLAUDE.md      ← Design system
│   └── services/
│       └── CLAUDE.md      ← Padrões de serviço
├── tests/
│   └── CLAUDE.md          ← Padrões de teste
└── docs/
    └── architecture.md    ← Para @include
\`\`\`

## Técnicas TOP 1%

### 1. Onboarding Document
Crie um documento que Claude possa ler para entender o projeto:

\`\`\`markdown
# PROJECT-GUIDE.md

## Visão Geral
Este é um e-commerce B2B com foco em...

## Stack
- Frontend: Next.js 14, TailwindCSS
- Backend: FastAPI, PostgreSQL
- Deploy: Vercel + Railway

## Arquitetura Chave
- /src/app → Rotas Next.js
- /src/lib → Utilitários compartilhados
- /api → Backend FastAPI

## Decisões Arquiteturais
1. Usamos Server Components por padrão
2. Estado global via Zustand (não Redux)
3. Validação com Zod em ambos lados
\`\`\`

### 2. Navigation Hints
No CLAUDE.md raiz, dê dicas de navegação:

\`\`\`markdown
## Onde Encontrar O Quê

| Funcionalidade | Localização |
|----------------|-------------|
| Autenticação | /src/lib/auth/ |
| Checkout | /src/app/checkout/ + /api/orders/ |
| Notificações | /src/services/notifications/ |
| Testes E2E | /tests/e2e/ |
\`\`\`

### 3. Dependency Map
Para projetos complexos, mapeie dependências:

\`\`\`
CheckoutPage
    └── useCart (hook)
          └── CartService
                └── OrderAPI
                      └── PaymentGateway
\`\`\`

## Comandos Úteis para Navegação

| Comando | Quando Usar |
|---------|-------------|
| \`/init\` | Primeira exploração do projeto |
| Explorer subagent | Mapear estrutura |
| \`tree src -L 2\` | Visualizar hierarquia |
| Plan Mode | Antes de mudanças grandes |

## Anti-Padrões a Evitar

| ❌ Evite | ✅ Prefira |
|----------|-----------|
| "Mude o sistema de auth" (vago) | "Mude /src/lib/auth/session.ts para usar JWT" |
| Deixar Claude explorar 500 arquivos | Apontar para os 5-10 relevantes |
| Um CLAUDE.md gigante | CLAUDE.md por área |
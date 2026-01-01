# A Hierarquia de Contexto do Claude Code

## Por que Hierarquia Importa?

O Claude Code lê múltiplas fontes de contexto. Entender a **ordem de prioridade** é crucial:

\`\`\`
MAIOR PRIORIDADE (sobrescreve)
│
├── 1. System Prompt (sessão atual)
├── 2. .claude/CLAUDE.md (projeto local)
├── 3. CLAUDE.md (raiz do projeto)
├── 4. ~/.claude/CLAUDE.md (global usuário)
├── 5. settings.json (configurações técnicas)
│
MENOR PRIORIDADE (base)
\`\`\`

## Mapa Mental da Hierarquia

\`\`\`
~/.claude/
├── CLAUDE.md              ← Global: suas preferências universais
├── settings.json          ← Configurações técnicas
└── skills/                ← Skills customizadas

~/projeto/
├── CLAUDE.md              ← Projeto: regras deste projeto (prioridade!)
├── .claude/
│   └── CLAUDE.md          ← Alternativa (mesma prioridade)
└── src/
    └── .claude/
        └── CLAUDE.md      ← Per-folder: contexto específico
\`\`\`

## Estratégia TOP 1%: Camadas de Contexto

### Camada 1: Global (~/.claude/CLAUDE.md)
**O que colocar:**
- Suas preferências de estilo de código
- Idioma preferido (Português BR)
- Regras de segurança universais
- Padrões que você SEMPRE quer

\`\`\`markdown
# ~/.claude/CLAUDE.md

## Preferências Globais
- Idioma: Português BR
- Código: TypeScript strict
- NUNCA: deletar sem aprovação

## Meu Contexto Pessoal
- Nome: Dr. Danillo Costa
- Empresas: Costa Law, CLA Digital, AI Spot
\`\`\`

### Camada 2: Projeto (/projeto/CLAUDE.md)
**O que colocar:**
- Stack específica do projeto
- Convenções de código do projeto
- Comandos importantes
- Estrutura de pastas

\`\`\`markdown
# CLAUDE.md - Projeto X

## Stack
- Next.js 14 + App Router
- Tailwind CSS
- Prisma + PostgreSQL

## Comandos
- npm run dev: desenvolvimento
- npm run build: produção
\`\`\`

### Camada 3: Per-Folder (/src/api/.claude/CLAUDE.md)
**O que colocar:**
- Contexto específico daquela pasta
- Padrões de API endpoints
- Regras de módulo específico

## Conflitos: Quem Ganha?

\`\`\`
Global: "Use aspas duplas"
Projeto: "Use aspas simples"

→ RESULTADO: Aspas simples (projeto tem prioridade)
\`\`\`

**Regra de Ouro:** Mais específico sempre ganha.

## Quiz Mental

Antes de criar um CLAUDE.md, pergunte:
1. Isso se aplica a TODOS os meus projetos? → Global
2. Isso é específico DESTE projeto? → Projeto
3. Isso é específico DESTA pasta? → Per-folder
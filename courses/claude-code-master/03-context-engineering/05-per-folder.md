# Per-Folder CLAUDE.md: Contexto Granular

## Quando Usar Per-Folder?

Projetos grandes têm áreas distintas que precisam de contexto específico:

\`\`\`
projeto/
├── CLAUDE.md              ← Regras gerais do projeto
├── src/
│   ├── api/
│   │   └── .claude/
│   │       └── CLAUDE.md  ← Regras específicas para API
│   ├── components/
│   │   └── .claude/
│   │       └── CLAUDE.md  ← Regras para componentes UI
│   └── utils/
│       └── .claude/
│           └── CLAUDE.md  ← Regras para utilities
\`\`\`

## Exemplos Práticos

### API Folder (.claude/CLAUDE.md)
\`\`\`markdown
# Contexto: API Endpoints

## Padrões de Endpoint
- Sempre usar verbos REST corretos
- Validar input com Zod
- Retornar erros padronizados

## Estrutura de Response
\\\`\\\`\\\`typescript
{
  success: boolean;
  data?: T;
  error?: { code: string; message: string; }
}
\\\`\\\`\\\`

## Autenticação
- Todos os endpoints requerem Bearer token
- Exceto: /health, /auth/login
\`\`\`

### Components Folder
\`\`\`markdown
# Contexto: UI Components

## Design System
- Usar Tailwind CSS
- Seguir tokens de design em theme.ts
- Componentes devem ser acessíveis (ARIA)

## Estrutura de Componente
1. Interface/Types no topo
2. Styled components (se houver)
3. Subcomponentes
4. Componente principal
5. Export

## Nomenclatura
- Props: ComponentNameProps
- Container: ComponentName.Container
- Variantes: usar CVA
\`\`\`

## Quando Contexto Per-Folder é Overkill?

\`\`\`
✅ USE quando:
- Pastas têm padrões muito diferentes
- Times diferentes trabalham em áreas distintas
- Tecnologias específicas por área

❌ EVITE quando:
- Projeto pequeno (< 20 arquivos)
- Padrões são uniformes
- Você é o único dev
\`\`\`

## Hierarquia de Prioridade (Revisão)

\`\`\`
Per-folder > Projeto > Global

src/api/.claude/CLAUDE.md  ← Maior prioridade nesta pasta
./CLAUDE.md                ← Base do projeto
~/.claude/CLAUDE.md        ← Fallback global
\`\`\`
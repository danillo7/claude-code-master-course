# Subagents - Especialistas sob Demanda

Subagents são **agentes especializados** que Claude pode invocar para tarefas específicas.

## Conceito

\`\`\`
┌─────────────────────────────────────────┐
│              Claude Principal           │
│                    │                    │
│    ┌───────┬───────┼───────┬───────┐   │
│    ▼       ▼       ▼       ▼       ▼   │
│ Explorer  Plan  Reviewer  Code  Guide  │
│ Subagent Subagent Subagent Subagent    │
└─────────────────────────────────────────┘
\`\`\`

## Subagents Nativos

| Subagent | Especialidade |
|----------|---------------|
| \`Explore\` | Explorar codebases |
| \`Plan\` | Planejar implementações |
| \`code-reviewer\` | Revisar código |
| \`claude-code-guide\` | Documentação |

## Quando Usar

- Tarefas que requerem **expertise específica**
- Operações **paralelas** (múltiplos subagents)
- **Isolamento** de contexto

## Exemplo de Uso

\`\`\`
"Use o subagent Explorer para entender a estrutura deste projeto"
"Lance um Plan subagent para planejar a implementação do sistema de auth"
\`\`\`
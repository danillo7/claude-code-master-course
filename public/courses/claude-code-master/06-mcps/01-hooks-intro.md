# Hooks - Automação Inteligente

Hooks são **scripts que executam automaticamente** em resposta a eventos do Claude Code.

## Conceito

\`\`\`
┌─────────────────┐
│   Claude Code   │
│                 │
│  ┌───────────┐  │     ┌─────────────┐
│  │  Evento   │──┼────▶│    Hook     │
│  │ (trigger) │  │     │  (script)   │
│  └───────────┘  │     └─────────────┘
└─────────────────┘
\`\`\`

## Eventos Disponíveis

| Evento | Quando Dispara | Exemplo de Uso |
|--------|----------------|----------------|
| \`PreToolUse\` | Antes de usar ferramenta | Validar comando |
| \`PostToolUse\` | Depois de usar ferramenta | Lint, format |
| \`Notification\` | Notificações do sistema | Alertas |
| \`Stop\` | Quando Claude para | Cleanup |

## Por que Usar Hooks?

1. **Automação** - Tarefas repetitivas automáticas
2. **Consistência** - Padrões aplicados sempre
3. **Segurança** - Validação antes de ações
4. **Produtividade** - Menos trabalho manual
5. **Qualidade** - Lint, format, test automáticos

## Exemplo Simples

\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": { "tool_name": "Write" },
      "hooks": [{
        "type": "command",
        "command": "echo 'Arquivo criado!'"
      }]
    }]
  }
}
\`\`\`

> **Lembre-se:** Hooks são poderosos mas devem ser usados com cuidado!
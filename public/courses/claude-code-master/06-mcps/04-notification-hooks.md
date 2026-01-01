# Hooks de Notificação

Notification hooks permitem reagir a eventos do sistema.

## Quando Usar

- Tarefa longa completou
- Erro ocorreu
- Decisão precisa de input
- Status mudou

## Configuração Básica

\`\`\`json
{
  "hooks": {
    "Notification": [
      {
        "matcher": {
          "type": ".*"
        },
        "hooks": [{
          "type": "command",
          "command": "osascript -e 'display notification \\"$MESSAGE\\" with title \\"Claude Code\\"'"
        }]
      }
    ]
  }
}
\`\`\`

## Notificações por Tipo

### Sucesso
\`\`\`json
{
  "matcher": { "type": "success" },
  "hooks": [{
    "type": "command",
    "command": "afplay /System/Library/Sounds/Glass.aiff"
  }]
}
\`\`\`

### Erro
\`\`\`json
{
  "matcher": { "type": "error" },
  "hooks": [{
    "type": "command",
    "command": "osascript -e 'display alert \\"Erro no Claude Code\\" message \\"$MESSAGE\\"'"
  }]
}
\`\`\`

## Integrações Populares

### macOS Notification Center
\`\`\`bash
osascript -e 'display notification "Tarefa completa!" with title "Claude"'
\`\`\`

### Slack Webhook
\`\`\`json
{
  "type": "url",
  "url": "https://hooks.slack.com/services/XXX",
  "method": "POST",
  "body": "{\\"text\\": \\"$MESSAGE\\"}"
}
\`\`\`

### Discord Webhook
\`\`\`json
{
  "type": "url",
  "url": "https://discord.com/api/webhooks/XXX",
  "method": "POST",
  "body": "{\\"content\\": \\"$MESSAGE\\"}"
}
\`\`\`

### Terminal Bell
\`\`\`bash
echo -e "\\a"
\`\`\`

### Desktop Notification (Linux)
\`\`\`bash
notify-send "Claude Code" "$MESSAGE"
\`\`\`

## Hook de Stop

Executar ações quando Claude para:

\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [{
          "type": "command",
          "command": "echo 'Sessão finalizada: $(date)' >> ~/.claude/sessions.log"
        }]
      }
    ]
  }
}
\`\`\`

### Casos de Uso Stop

1. **Backup de contexto**
2. **Log de sessão**
3. **Cleanup de arquivos temporários**
4. **Sync de estado**

## Exemplo: Sistema de Alertas Completo

\`\`\`json
{
  "hooks": {
    "Notification": [
      {
        "matcher": { "type": "success" },
        "hooks": [{
          "type": "command",
          "command": "osascript -e 'display notification \\"Tarefa concluída!\\" with title \\"Claude Code\\" sound name \\"Glass\\"'"
        }]
      },
      {
        "matcher": { "type": "error" },
        "hooks": [{
          "type": "command",
          "command": "osascript -e 'display alert \\"Erro\\" message \\"$MESSAGE\\"'"
        }]
      }
    ],
    "Stop": [
      {
        "hooks": [{
          "type": "command",
          "command": "echo '$(date): Sessão encerrada' >> ~/.claude/log.txt"
        }]
      }
    ]
  }
}
\`\`\`
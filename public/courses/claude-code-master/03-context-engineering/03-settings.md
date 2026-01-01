# Configurações Avançadas

## settings.json

Localizado em \`~/.claude/settings.json\`:

\`\`\`json
{
  "model": "claude-sonnet-4-20250514",
  "theme": "dark",
  "permissions": {
    "autoApprove": ["Read", "Glob", "Grep"],
    "alwaysAsk": ["Bash", "Write"],
    "deny": []
  },
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-memory"]
    }
  }
}
\`\`\`

## Níveis de Permissão

| Nível | Comportamento |
|-------|---------------|
| \`autoApprove\` | Executa sem perguntar |
| \`alwaysAsk\` | Sempre pede confirmação |
| \`deny\` | Bloqueia completamente |

## Permissões por Ferramenta

\`\`\`json
{
  "permissions": {
    "autoApprove": [
      "Read",
      "Glob",
      "Grep",
      "WebSearch",
      "Bash(git:*)",
      "Bash(npm:*)"
    ]
  }
}
\`\`\`

## Configurações de Projeto

\`\`\`bash
# Na raiz do projeto
claude config set model opus
claude config set theme light
\`\`\`
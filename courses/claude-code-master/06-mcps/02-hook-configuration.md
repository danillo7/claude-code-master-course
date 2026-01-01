# Configurando Hooks

## Onde Configurar

Hooks são configurados no \`settings.json\`:

\`\`\`bash
# Global (todas as sessões)
~/.claude/settings.json

# Por projeto
./.claude/settings.json
\`\`\`

## Estrutura do settings.json

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": { /* condição */ },
        "hooks": [
          { /* ação */ }
        ]
      }
    ],
    "PostToolUse": [ /* ... */ ],
    "Notification": [ /* ... */ ],
    "Stop": [ /* ... */ ]
  }
}
\`\`\`

## Anatomy de um Hook

\`\`\`json
{
  "matcher": {
    "tool_name": "Write",        // Filtrar por tool
    "tool_input": {              // Filtrar por input
      "file_path": ".*\\\\.ts$"   // Regex
    }
  },
  "hooks": [
    {
      "type": "command",
      "command": "npm run lint",
      "timeout": 30000,
      "working_directory": "/path/to/project"
    }
  ]
}
\`\`\`

## Tipos de Hook

### 1. Command Hook
Executa um comando shell:

\`\`\`json
{
  "type": "command",
  "command": "npm run format",
  "timeout": 10000
}
\`\`\`

### 2. URL Hook
Chama um endpoint HTTP:

\`\`\`json
{
  "type": "url",
  "url": "http://localhost:3000/webhook",
  "method": "POST"
}
\`\`\`

## Variáveis Disponíveis

| Variável | Descrição |
|----------|-----------|
| \`$TOOL_NAME\` | Nome da ferramenta |
| \`$TOOL_INPUT\` | Input JSON da ferramenta |
| \`$TOOL_OUTPUT\` | Output da ferramenta |
| \`$CWD\` | Diretório de trabalho |
| \`$SESSION_ID\` | ID da sessão atual |

## Exemplo Completo

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write",
          "tool_input": {
            "file_path": ".*\\\\.(ts|tsx)$"
          }
        },
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix $TOOL_INPUT_FILE_PATH",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}
\`\`\`

## Validando Configuração

\`\`\`bash
# Verificar sintaxe do settings.json
cat ~/.claude/settings.json | jq .

# Ver hooks ativos
claude config list | grep hooks
\`\`\`
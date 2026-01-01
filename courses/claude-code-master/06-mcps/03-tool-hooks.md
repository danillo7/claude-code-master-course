# Hooks de Ferramentas

Os hooks mais poderosos são os que interceptam o uso de ferramentas.

## PreToolUse - Antes da Execução

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Pedido  │────▶│ PreTool  │────▶│   Tool   │
│          │     │  Hook    │     │ Executa  │
└──────────┘     └──────────┘     └──────────┘
                      │
                      ▼
              [Pode BLOQUEAR]
\`\`\`

### Casos de Uso PreToolUse

1. **Validação de segurança**
\`\`\`json
{
  "matcher": { "tool_name": "Bash" },
  "hooks": [{
    "type": "command",
    "command": "echo \\"$TOOL_INPUT\\" | grep -q 'rm -rf' && exit 1 || exit 0"
  }]
}
\`\`\`

2. **Confirmação para ações destrutivas**
3. **Log de auditoria**
4. **Rate limiting**

## PostToolUse - Depois da Execução

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│   Tool   │────▶│ PostTool │────▶│ Continua │
│ Executa  │     │  Hook    │     │          │
└──────────┘     └──────────┘     └──────────┘
\`\`\`

### Casos de Uso PostToolUse

1. **Lint após Write**
\`\`\`json
{
  "matcher": {
    "tool_name": "Write",
    "tool_input": { "file_path": ".*\\\\.ts$" }
  },
  "hooks": [{
    "type": "command",
    "command": "npx eslint --fix \\"$FILE_PATH\\""
  }]
}
\`\`\`

2. **Format após Edit**
\`\`\`json
{
  "matcher": { "tool_name": "Edit" },
  "hooks": [{
    "type": "command",
    "command": "npx prettier --write \\"$FILE_PATH\\""
  }]
}
\`\`\`

3. **Test após alteração**
\`\`\`json
{
  "matcher": {
    "tool_name": "Write",
    "tool_input": { "file_path": ".*\\\\.test\\\\.ts$" }
  },
  "hooks": [{
    "type": "command",
    "command": "npm test -- --findRelatedTests \\"$FILE_PATH\\""
  }]
}
\`\`\`

## Matchers Avançados

### Por Nome de Tool
\`\`\`json
{ "tool_name": "Write" }
{ "tool_name": "Bash" }
{ "tool_name": "Edit" }
\`\`\`

### Por Padrão de Input (Regex)
\`\`\`json
{
  "tool_input": {
    "file_path": ".*\\\\.tsx?$",
    "command": "^npm.*"
  }
}
\`\`\`

### Combinando Condições
\`\`\`json
{
  "tool_name": "Write",
  "tool_input": {
    "file_path": "src/.*\\\\.ts$"
  }
}
\`\`\`

## Exemplo: Lint + Format + Git Add

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write",
          "tool_input": { "file_path": ".*\\\\.(ts|tsx|js|jsx)$" }
        },
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix \\"$FILE_PATH\\" && npx prettier --write \\"$FILE_PATH\\" && git add \\"$FILE_PATH\\"",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}
\`\`\`

> **Pro Tip:** Combine múltiplas ações em um único comando com \`&&\`
# Hooks Avançados

Leve seus hooks ao próximo nível com técnicas profissionais.

## Pattern: Git Auto-Add Inteligente

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write|Edit",
          "tool_input": { "file_path": "^(?!.*node_modules).*$" }
        },
        "hooks": [{
          "type": "command",
          "command": "git add \\"$FILE_PATH\\" 2>/dev/null || true"
        }]
      }
    ]
  }
}
\`\`\`

## Pattern: Pre-commit Analysis

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": {
          "tool_name": "Bash",
          "tool_input": { "command": "^git commit.*" }
        },
        "hooks": [{
          "type": "command",
          "command": "~/.claude/scripts/pre-commit-check.sh"
        }]
      }
    ]
  }
}
\`\`\`

## Pattern: Contexto Persistente

Salvar contexto automaticamente:

\`\`\`json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "~/.claude/scripts/save-context.sh"
      }]
    }]
  }
}
\`\`\`

Script \`save-context.sh\`:
\`\`\`bash
#!/bin/bash
CONTEXT_DIR=~/.claude/contexts
mkdir -p $CONTEXT_DIR
DATE=$(date +%Y-%m-%d_%H-%M)
# Salva contexto da sessão
echo "Session ended at $DATE" >> $CONTEXT_DIR/sessions.log
\`\`\`

## Pattern: Security Guard

Bloquear comandos perigosos:

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": {
          "tool_name": "Bash"
        },
        "hooks": [{
          "type": "command",
          "command": "~/.claude/scripts/security-check.sh"
        }]
      }
    ]
  }
}
\`\`\`

Script \`security-check.sh\`:
\`\`\`bash
#!/bin/bash
DANGEROUS_PATTERNS=(
  "rm -rf /"
  "rm -rf ~"
  "> /dev/sda"
  "mkfs"
  "dd if="
)

for pattern in "\${DANGEROUS_PATTERNS[@]}"; do
  if echo "$TOOL_INPUT" | grep -q "$pattern"; then
    echo "BLOCKED: Dangerous command detected"
    exit 1
  fi
done
exit 0
\`\`\`

## Pattern: Quality Pipeline

Lint → Format → Test em sequência:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write",
          "tool_input": { "file_path": ".*\\\\.ts$" }
        },
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix \\"$FILE_PATH\\"",
            "timeout": 10000
          },
          {
            "type": "command",
            "command": "npx prettier --write \\"$FILE_PATH\\"",
            "timeout": 5000
          },
          {
            "type": "command",
            "command": "npm test -- --findRelatedTests \\"$FILE_PATH\\" --passWithNoTests",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}
\`\`\`

## Pattern: Logging Completo

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": { "tool_name": ".*" },
        "hooks": [{
          "type": "command",
          "command": "echo '$(date +%Y-%m-%dT%H:%M:%S) | $TOOL_NAME | $FILE_PATH' >> ~/.claude/tool-usage.log"
        }]
      }
    ]
  }
}
\`\`\`

## Debugging Hooks

\`\`\`bash
# Testar comando manualmente
TOOL_INPUT='{"file_path": "test.ts"}' ~/.claude/scripts/my-hook.sh

# Ver logs
tail -f ~/.claude/hook-debug.log

# Modo verbose
claude --debug
\`\`\`

## Boas Práticas

| Prática | Descrição |
|---------|-----------|
| **Timeout** | Sempre definir para evitar travamentos |
| **Fail-safe** | Usar \`\\|\\| true\` para erros não críticos |
| **Logs** | Registrar execuções para debug |
| **Idempotência** | Hooks devem ser seguros para re-execução |
| **Escopo** | Matchers específicos para evitar overhead |
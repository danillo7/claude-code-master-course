# Flags da CLI

O Claude Code oferece mais de 40 flags para customizar seu comportamento.

## Flags Mais Usadas

### Controle de Sessão

\`\`\`bash
claude --continue          # Continuar última sessão
claude --no-continue       # Nova sessão limpa
claude --resume SESSION_ID # Retomar sessão específica
\`\`\`

### Modelo e Performance

\`\`\`bash
claude --model opus        # Usar Opus (mais capaz)
claude --model haiku       # Usar Haiku (mais rápido/barato)
claude --model sonnet      # Usar Sonnet (default, balanceado)
\`\`\`

### Output e Automação

\`\`\`bash
claude --print             # Apenas imprimir, não interativo
claude --output-format json # Saída em JSON
claude --verbose           # Modo verboso
claude --quiet             # Modo silencioso
\`\`\`

### Segurança

\`\`\`bash
claude --dangerously-skip-permissions  # Pular confirmações (⚠️ cuidado!)
claude --allowedTools "Read,Write"      # Limitar ferramentas
\`\`\`

## Combinando Flags

\`\`\`bash
# Automação completa
claude --print --output-format json "Liste os arquivos TypeScript" | jq .

# Sessão limpa com modelo específico
claude --no-continue --model opus "Revise este código crítico"
\`\`\`
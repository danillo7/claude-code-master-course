# Modo Headless

O modo headless permite usar Claude Code de forma não-interativa, perfeito para automação.

## Uso Básico

\`\`\`bash
# Executar comando único
claude --print "Gere um UUID"

# Com entrada via pipe
cat error.log | claude --print "Analise este erro"

# Saída estruturada
claude --print --output-format json "Liste arquivos modificados"
\`\`\`

## Em Scripts Bash

\`\`\`bash
#!/bin/bash

# Gerar commit message automático
DIFF=$(git diff --staged)
MESSAGE=$(echo "$DIFF" | claude --print "Gere uma commit message concisa")
git commit -m "$MESSAGE"
\`\`\`

## Em CI/CD (GitHub Actions)

\`\`\`yaml
- name: Code Review com Claude
  run: |
    REVIEW=$(gh pr diff \${{ github.event.pull_request.number }} | \\
             claude --print "Revise este PR")
    gh pr comment \${{ github.event.pull_request.number }} --body "$REVIEW"
\`\`\`

## Flags para Automação

\`\`\`bash
--print                    # Não interativo
--output-format json       # Saída parseável
--quiet                    # Sem logs extras
--max-tokens N             # Limitar resposta
--dangerously-skip-permissions  # Pular confirmações
\`\`\`

## ⚠️ Cuidados

- Sempre valide saídas antes de usar em produção
- Use \`--allowedTools\` para limitar capacidades
- Mantenha API keys seguras (secrets)
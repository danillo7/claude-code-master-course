# Workflows do Warp

Workflows são **comandos salvos** que você acessa rapidamente via ⌃ + R.

## Por que Usar Workflows?

| Sem Workflow | Com Workflow |
|--------------|--------------|
| Digitar comando completo | ⌃ + R → nome → Enter |
| Lembrar sintaxe | Já está salvo |
| Copiar de notas | Acesso instantâneo |
| Erros de digitação | Sempre correto |

## Anatomia de um Workflow

\`\`\`yaml
name: git-status-full
command: "git status && git log --oneline -5"
description: "Status completo com últimos commits"
tags:
  - git
  - status
\`\`\`

## Seus Workflows Atuais

Baseado na sua configuração:

### Claude Code (6 workflows)
- \`claude-spot\` - Abrir SPOT AI
- \`claude-curso\` - Abrir Curso Claude
- \`claude-sandbox\` - Abrir sandbox
- \`claude-new\` - Nova sessão limpa
- \`claude-continue\` - Continuar última
- \`claude-list\` - Listar projetos

### Git (8 workflows)
- \`git-status-full\` - Status + últimos commits
- \`git-sync\` - Fetch + status
- \`git-log-graph\` - Histórico visual
- \`git-uncommit\` - Desfazer último commit
- \`git-stash-save\` - Guardar alterações
- E mais...

## Acessando Workflows

1. **⌃ + R** - Abre buscador
2. Digite parte do nome
3. Selecione com setas
4. **Enter** para executar

### Exemplo:
\`\`\`
⌃ + R → "spot" → claude-spot → Enter
# Abre Claude Code no projeto SPOT AI
\`\`\`
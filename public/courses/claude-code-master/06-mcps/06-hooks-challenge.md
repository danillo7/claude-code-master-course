# Challenge: Sistema de Hooks TOP 1%

## Objetivo

Criar um sistema completo de hooks que automatize seu workflow de desenvolvimento.

## Requisitos

### Tier 1: Básico (Obrigatório)
- [ ] Hook de lint após Write em arquivos .ts/.tsx
- [ ] Hook de format após Edit
- [ ] Notificação de conclusão de tarefas longas

### Tier 2: Intermediário (Escolha 2+)
- [ ] Git auto-add após alterações
- [ ] Pre-commit analysis
- [ ] Log de todas as ações
- [ ] Notificação de erros

### Tier 3: Avançado (Opcional)
- [ ] Security guard para comandos perigosos
- [ ] Contexto persistente entre sessões
- [ ] Pipeline completo (lint → format → test)
- [ ] Integração com Slack/Discord

## Entregáveis

### 1. settings.json

\`\`\`json
{
  "hooks": {
    "PreToolUse": [ /* ... */ ],
    "PostToolUse": [ /* ... */ ],
    "Notification": [ /* ... */ ],
    "Stop": [ /* ... */ ]
  }
}
\`\`\`

### 2. Scripts de Suporte

\`\`\`
~/.claude/scripts/
├── pre-commit-check.sh
├── security-guard.sh
├── save-context.sh
└── notify.sh
\`\`\`

### 3. Documentação

Criar \`~/.claude/HOOKS.md\`:

\`\`\`markdown
# Meus Hooks

## Hooks Ativos
| Hook | Trigger | Ação |
|------|---------|------|
| ... | ... | ... |

## Scripts
| Script | Função |
|--------|--------|
| ... | ... |
\`\`\`

## Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| 3 hooks Tier 1 | 40 |
| 2+ hooks Tier 2 | 30 |
| Scripts funcionando | 15 |
| Documentação | 15 |
| **Total** | **100** |

## Dicas

1. **Comece simples** - Um hook por vez
2. **Teste cada hook** - Antes de adicionar o próximo
3. **Use timeout** - Evite travamentos
4. **Documente** - Futuro você agradece
5. **Fail-safe** - Use \`|| true\` para não-críticos

## Stack Exemplo

\`\`\`
┌────────────────────────────────────────────┐
│              HOOK SYSTEM                    │
├────────────────────────────────────────────┤
│  PreToolUse                                 │
│  ├── security-guard.sh (Bash)              │
│  └── pre-commit-check.sh (git commit)      │
├────────────────────────────────────────────┤
│  PostToolUse                                │
│  ├── lint + format (Write *.ts)            │
│  ├── git add (Write/Edit)                  │
│  └── log (todas as tools)                  │
├────────────────────────────────────────────┤
│  Notification                               │
│  ├── macOS notification (success)          │
│  └── alert (error)                         │
├────────────────────────────────────────────┤
│  Stop                                       │
│  └── save-context.sh                       │
└────────────────────────────────────────────┘
\`\`\`

## Teste Final

Após configurar, verifique:

\`\`\`bash
# 1. Criar arquivo TS (deve lint + format)
# 2. Editar arquivo (deve format + git add)
# 3. Tentar comando perigoso (deve bloquear)
# 4. Finalizar sessão (deve salvar contexto)
\`\`\`

> **Lembre-se:** Hooks bem configurados = Produtividade 10x!
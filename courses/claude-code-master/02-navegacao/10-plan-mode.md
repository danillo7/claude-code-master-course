# Plan Mode: Pense Antes de Agir

## O que é Plan Mode?

Plan Mode é um comando que transforma Claude de executor em arquiteto. Em vez de implementar diretamente, Claude primeiro planeja a abordagem.

\`\`\`bash
# Ativar Plan Mode
claude --plan "Implementar autenticação OAuth"

# Ou durante a conversa
> /plan
\`\`\`

## Quando Usar Plan Mode?

| Cenário | Plan Mode? |
|---------|:----------:|
| Bug simples e localizado | ❌ |
| Feature nova em projeto existente | ✅ |
| Refatoração de múltiplos arquivos | ✅ |
| Mudança arquitetural | ✅✅ |
| Debugging complexo | ✅ |

## O Ciclo Plan → Execute

\`\`\`
┌─────────────────────────────────────────┐
│ 1. PLAN MODE                            │
│    - Analisar requisitos                │
│    - Identificar arquivos afetados      │
│    - Propor abordagem                   │
│    - Listar riscos e trade-offs         │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│ 2. VOCÊ REVISA                          │
│    - Aprovar plano                      │
│    - Ajustar abordagem                  │
│    - Adicionar constraints              │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│ 3. EXECUTE MODE                         │
│    - Implementar conforme plano         │
│    - Seguir ordem definida              │
│    - Reportar progresso                 │
└─────────────────────────────────────────┘
\`\`\`

## Exemplo Real

\`\`\`bash
> claude --plan "Adicionar dark mode ao app"

📋 PLANO PROPOSTO:

1. Arquivos a modificar:
   - src/styles/theme.ts (criar)
   - src/components/ThemeProvider.tsx (criar)
   - src/App.tsx (modificar)
   - tailwind.config.js (modificar)

2. Abordagem:
   - Usar Tailwind dark: classes
   - Contexto React para toggle
   - Persistir preferência em localStorage
   - Respeitar prefers-color-scheme

3. Riscos:
   - Componentes com cores hardcoded
   - Imagens sem variante dark

Aprovar? [y/n/editar]
\`\`\`

## Comandos de Plan Mode

| Comando | Ação |
|---------|------|
| \`/plan\` | Entrar em Plan Mode |
| \`/exit-plan\` | Sair e executar |
| \`/revise\` | Revisar plano |
| \`--plan "..."\` | Iniciar já em plan mode |

## TOP 1% Pattern: Plan First

\`\`\`
AMADOR:
"Adiciona autenticação" → Claude implementa direto → bugs, retrabalho

PRO (TOP 1%):
"Planeja autenticação" → Revisa plano → Ajusta → Executa → Sucesso
\`\`\`

**Regra de Ouro:** Para qualquer tarefa > 30 min, use Plan Mode primeiro.
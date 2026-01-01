# Skills - Superpoderes para Claude

Skills são **instruções estruturadas** que ensinam Claude a executar tarefas específicas de forma consistente.

## O que são Skills?

- Arquivos \`.md\` com instruções detalhadas
- Podem ser invocadas por Claude automaticamente
- Ou manualmente com \`/skill-name\`

## Tipos de Skills

### 1. Model-Invoked (Automáticas)
Claude decide quando usar baseado no contexto.

### 2. User-Invoked (Manuais)
Você invoca explicitamente com \`/nome\`.

## Estrutura Básica

\`\`\`markdown
---
description: Resumo curto da skill
model-invoked: true  # ou false para manual
---

# Nome da Skill

## Quando Usar
[Contexto de uso]

## Processo
1. Passo 1
2. Passo 2
3. Passo 3

## Output Esperado
[Formato da saída]

## Exemplos
[Exemplos de uso]
\`\`\`

## Localização

\`\`\`
~/.claude/skills/           # Skills globais
~/project/.claude/skills/   # Skills do projeto
\`\`\`
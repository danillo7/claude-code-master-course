# Challenge: Skill Creator

Este é seu desafio final do módulo de Skills. Você vai criar um sistema completo de skills personalizadas.

## O Desafio

Crie uma **biblioteca de 5 skills** que resolva problemas reais do seu contexto:

### Requisitos Mínimos

1. **_index.md** - Catálogo de todas as skills
2. **_router.md** - Router automático
3. **3 Skills Especializadas** - Para seu contexto

### Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Estrutura correta (frontmatter) | 20 |
| Documentação clara | 20 |
| Exemplos de uso | 20 |
| Utilidade prática | 20 |
| Router funcional | 20 |
| **Total** | **100** |

## Template para Cada Skill

\`\`\`markdown
---
description: [Descrição em 1 linha]
model-invoked: [true/false]
---

# [Nome da Skill]

## Quando Usar
[Em quais situações esta skill é útil]

## Processo
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Input Esperado
[O que o usuário deve fornecer]

## Output
[Formato da saída]

## Exemplos

### Exemplo 1
**Input:** [exemplo de entrada]
**Output:** [exemplo de saída]
\`\`\`

## Ideias por Contexto

### Para Desenvolvedores
- /commit-message-generator
- /api-documentation
- /test-generator
- /bug-report-template
- /code-explainer

### Para Jurídico (Costa Law)
- /parecer-juridico
- /analise-clausulas
- /check-lgpd
- /timeline-processual
- /resumo-decisao

### Para Marketing
- /copy-generator
- /social-post
- /email-campaign
- /a-b-test-analyzer
- /competitor-analysis

### Para Gestão
- /okr-tracker
- /1on1-template
- /project-status
- /decision-log
- /risk-assessment

## Entrega

Ao finalizar, sua estrutura deve ser:

\`\`\`
~/.claude/skills/
├── _index.md         ✓ Obrigatório
├── _router.md        ✓ Obrigatório
├── skill-1.md        ✓ Obrigatório
├── skill-2.md        ✓ Obrigatório
└── skill-3.md        ✓ Obrigatório
\`\`\`

## Bônus (+50 XP cada)

- [ ] Adicionar quizzes interativos em uma skill
- [ ] Criar skill que usa MCP (ex: Memory, GitHub)
- [ ] Documentar em repositório Git com README
- [ ] Criar skill que gera outras skills (meta-skill)

## Validação

Teste suas skills com estes comandos:

\`\`\`bash
# Verificar se skills estão carregadas
claude "liste minhas skills disponíveis"

# Testar o router
claude "preciso de ajuda com [contexto da skill]"

# Invocar diretamente
claude "/nome-da-skill"
\`\`\`

## Reflexão Final

Após completar o challenge, responda:

1. Quanto tempo você economiza por dia com suas skills?
2. Qual skill mais usada?
3. O que você automatizaria a seguir?

---

> **Parabéns!** Ao completar este módulo, você domina uma das features mais poderosas do Claude Code. Skills são o que separam usuários comuns dos TOP 1%.
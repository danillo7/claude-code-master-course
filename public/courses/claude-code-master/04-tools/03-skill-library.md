# Biblioteca de Skills TOP 1%

Os melhores usuários do Claude Code têm uma biblioteca de skills bem organizada. Aprenda a construir a sua.

## Categorias de Skills

### 1. Análise & Pesquisa
\`\`\`
/pesquisa-curada     → Pesquisa de alta qualidade com fontes
/analise-3-camadas   → Análise em 3 níveis de profundidade
/briefing-executivo  → Resumo CEO-level
/resumo-estrategico  → Destila insights de documentos longos
\`\`\`

### 2. Produtividade & Comunicação
\`\`\`
/message-polish      → Refina mensagens profissionais
/meeting-script      → Roteiro para reuniões importantes
/traducao-corporativa → Tradução com ajuste de tom
\`\`\`

### 3. Desenvolvimento
\`\`\`
/code-review        → Revisão de código estruturada
/prompt-architect   → Cria prompts de alta performance
/ops-howto          → Guias técnicos passo a passo
\`\`\`

### 4. Jurídico (Costa Law)
\`\`\`
/analise-contrato   → Análise técnica de contratos
/legal-shield       → Blindagem jurídica preventiva
/lgpd-compliance    → Adequação LGPD
/workflow-juridico  → Workflow completo end-to-end
\`\`\`

### 5. Dados & Arquivos
\`\`\`
/data-orchestrator  → Organização inteligente de arquivos
/file-orchestrator  → Gestão avançada multi-cloud
\`\`\`

## Estrutura de Pastas Recomendada

\`\`\`
~/.claude/skills/
├── _index.md           # Índice de todas as skills
├── _router.md          # Router automático
├── analise/
│   ├── analise-3-camadas.md
│   ├── briefing-executivo.md
│   └── resumo-estrategico.md
├── comunicacao/
│   ├── message-polish.md
│   └── meeting-script.md
├── dev/
│   ├── code-review.md
│   └── prompt-architect.md
└── juridico/
    ├── analise-contrato.md
    └── lgpd-compliance.md
\`\`\`

## Skill Index (Obrigatória!)

Crie um \`_index.md\` listando todas as suas skills:

\`\`\`markdown
---
description: Índice de todas as skills disponíveis
model-invoked: true
---

# Skills Disponíveis

| Skill | Descrição | Comando |
|-------|-----------|---------|
| Análise 3 Camadas | Análise estruturada | /analise-3-camadas |
| Briefing Executivo | Resumo CEO-level | /briefing-executivo |
| Message Polish | Refina mensagens | /message-polish |
...
\`\`\`

## Skill Router (Avançado)

Um router decide automaticamente qual skill usar:

\`\`\`markdown
---
description: Router automático de skills
model-invoked: true
---

# Skill Router

## Análise de Intenção
1. Identificar palavras-chave no pedido
2. Mapear para categoria de skill
3. Sugerir skill apropriada

## Mapeamento
- "contrato", "cláusula" → /analise-contrato
- "resumo", "síntese" → /briefing-executivo
- "revisar código" → /code-review
- "reunião", "meeting" → /meeting-script
\`\`\`

## Dica TOP 1%

> Mantenha suas skills em um repositório Git separado. Assim você pode versionar, fazer backup e compartilhar com a equipe.

\`\`\`bash
# Exemplo de setup
cd ~/.claude/skills
git init
git remote add origin git@github.com:seu-user/claude-skills.git
\`\`\`
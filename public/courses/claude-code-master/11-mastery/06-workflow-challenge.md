# Challenge: Workflow de Desenvolvimento TOP 1%

Monte um workflow completo que incorpora todas as best practices aprendidas.

## Objetivo

Criar um sistema de desenvolvimento que garanta qualidade em todas as etapas.

## Requisitos

### 1. Prompting System (20 pontos)
- [ ] Biblioteca de 5+ prompts reutilizáveis
- [ ] Prompts categorizados (review, debug, test, doc)
- [ ] Templates com variáveis

### 2. Code Review Automation (20 pontos)
- [ ] Hook de pre-commit com review
- [ ] Checklist automático
- [ ] Template de feedback

### 3. Debug Toolkit (20 pontos)
- [ ] Scripts de análise de logs
- [ ] Template de bug report
- [ ] Integração com git bisect

### 4. Testing Pipeline (20 pontos)
- [ ] Gerador de testes com Claude
- [ ] Coverage mínima configurada
- [ ] Testes em CI/CD

### 5. Documentation System (20 pontos)
- [ ] README template
- [ ] JSDoc automático
- [ ] Changelog generator

## Template de Entrega

\`\`\`markdown
# Meu Workflow TOP 1%

## 1. Prompting System
\`\`\`
~/.claude/prompts/
├── review/
│   ├── quick-review.md
│   └── deep-review.md
├── debug/
│   └── bug-analysis.md
├── test/
│   └── generate-tests.md
└── docs/
    └── readme-generator.md
\`\`\`

## 2. Code Review
[Configuração de hooks e templates]

## 3. Debug Toolkit
[Scripts e templates]

## 4. Testing Pipeline
[Configuração de CI/CD e geração]

## 5. Documentation
[Templates e automação]

## Demonstração
[GIF ou vídeo do workflow em ação]
\`\`\`

## Critérios de Avaliação

| Critério | Pontos | Descrição |
|----------|--------|-----------|
| Completude | 40 | Todos os 5 componentes implementados |
| Integração | 20 | Componentes funcionam juntos |
| Automação | 20 | Mínima intervenção manual |
| Documentação | 10 | Bem documentado |
| Inovação | 10 | Soluções criativas |

## Dicas

1. **Comece simples** - Um componente de cada vez
2. **Itere** - Melhore cada parte gradualmente
3. **Automatize** - Se faz mais de 2x, automatize
4. **Documente** - Seu "eu futuro" agradecerá
5. **Compartilhe** - Workflows são melhores em equipe

## Recursos

- Prompt patterns: Lição 11-01
- Code review: Lição 11-02
- Debugging: Lição 11-03
- Testing: Lição 11-04
- Documentation: Lição 11-05

> **Meta:** Ao final, você deve ter um workflow que pode ser replicado em qualquer projeto!
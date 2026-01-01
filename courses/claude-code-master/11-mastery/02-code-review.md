# Code Review com Claude

Code review é onde a qualidade acontece. Claude pode ser seu melhor reviewer.

## O Processo de Review TOP 1%

\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Pre-Check  │────▶│   Review    │────▶│   Refine    │
│  (Lint+TS)  │     │  (Claude)   │     │  (Iterate)  │
└─────────────┘     └─────────────┘     └─────────────┘
\`\`\`

## Tipos de Review

### 1. Quick Review (5 min)

\`\`\`bash
# Review rápido focado em issues óbvios
claude "Quick review deste código:
- Bugs óbvios?
- Problemas de segurança?
- Code smells?

$(cat src/feature.ts)"
\`\`\`

### 2. Deep Review (15 min)

\`\`\`bash
# Review completo com múltiplas dimensões
claude "Deep review considerando:

1. **Corretude**: Faz o que deveria?
2. **Performance**: Há otimizações possíveis?
3. **Segurança**: Vulnerabilidades?
4. **Manutenibilidade**: Fácil de entender/modificar?
5. **Testabilidade**: Fácil de testar?

Código:
$(cat src/feature.ts)"
\`\`\`

### 3. Architecture Review

\`\`\`bash
# Review de decisões arquiteturais
claude "Analise a arquitetura deste módulo:

Estrutura atual:
$(find src/module -type f -name '*.ts' | head -20)

Principais arquivos:
$(cat src/module/index.ts)

Avalie:
- Separação de responsabilidades
- Acoplamento entre componentes
- Padrões de design utilizados
- Sugestões de melhoria"
\`\`\`

## Checklist de Review

### Funcionalidade
- [ ] O código faz o que a spec pede?
- [ ] Edge cases tratados?
- [ ] Error handling adequado?

### Qualidade
- [ ] Código limpo e legível?
- [ ] Nomes significativos?
- [ ] Funções pequenas e focadas?

### Segurança
- [ ] Inputs validados?
- [ ] Sem secrets hardcoded?
- [ ] SQL injection protegido?
- [ ] XSS prevenido?

### Performance
- [ ] Queries otimizadas?
- [ ] Sem loops desnecessários?
- [ ] Caching quando apropriado?

## Automação com Hooks

\`\`\`json
// settings.json - Auto-review em commits
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "if [[ \\"$TOOL_INPUT\\" == *\\"git commit\\"* ]]; then echo 'Lembre de fazer review!'; fi"
      }]
    }]
  }
}
\`\`\`

## Template de Feedback

\`\`\`markdown
## Code Review: [Feature Name]

### ✅ Pontos Positivos
- [O que está bom]

### ⚠️ Sugestões
- [Melhorias opcionais]

### 🚨 Crítico
- [Deve ser corrigido antes do merge]

### 📚 Aprendizados
- [Padrões interessantes para compartilhar]
\`\`\`

> **Regra de ouro:** Critique o código, não a pessoa. Sugira, não ordene.
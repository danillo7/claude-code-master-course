# Extended Thinking

Extended Thinking permite que Claude "pense por mais tempo" antes de responder, gerando raciocínios mais profundos e soluções mais elaboradas.

## O que é Extended Thinking?

Extended Thinking é um modo onde Claude pode usar mais tokens internamente para "pensar" sobre um problema antes de gerar a resposta final. É especialmente útil para:

- **Problemas complexos** que requerem múltiplas etapas
- **Análises profundas** de código ou arquitetura
- **Decisões arquiteturais** com trade-offs
- **Debugging** de issues difíceis

## Como Ativar

No Claude Code, você pode ativar o thinking mode de diferentes formas:

\`\`\`bash
# Via flag na CLI
claude --thinking

# Ou usando o modelo Opus 4.5 que tem melhor reasoning
claude --model opus
\`\`\`

## Quando Usar Extended Thinking

| Cenário | Usar Extended Thinking? |
|---------|------------------------|
| Refatoração complexa | ✅ Sim |
| Fix simples de typo | ❌ Não necessário |
| Arquitetura de sistema | ✅ Sim |
| Adicionar um console.log | ❌ Não necessário |
| Debug de race condition | ✅ Sim |
| Formatação de código | ❌ Não necessário |

## Dica TOP 1%

> **Pro Tip:** Combine Extended Thinking com prompts específicos como "Analise profundamente antes de responder" ou "Considere todos os edge cases" para resultados ainda melhores.

## Exemplo Prático

\`\`\`
Prompt SEM Extended Thinking:
"Refatore este código"
→ Resposta rápida, pode perder nuances

Prompt COM Extended Thinking:
"Preciso refatorar este sistema de autenticação.
Considere: segurança, performance, manutenibilidade,
e compatibilidade com o código existente."
→ Análise profunda antes de propor mudanças
\`\`\`
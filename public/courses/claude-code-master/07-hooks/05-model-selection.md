# Model Selection Strategy

Domine a arte de escolher o modelo certo para cada tarefa - um dos segredos TOP 1%.

## Os 3 Modelos Claude

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    CAPACIDADE vs CUSTO                       │
│                                                              │
│   OPUS 4.5    ████████████████████████████  Máxima          │
│   (Premium)   Custo: $$$$$                  Capacidade      │
│               Velocidade: Lenta                              │
│                                                              │
│   SONNET      ███████████████████           Balanceado      │
│   (Standard)  Custo: $$                                     │
│               Velocidade: Média                              │
│                                                              │
│   HAIKU       █████████                     Econômico       │
│   (Fast)      Custo: $                                      │
│               Velocidade: Rápida                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Matriz de Decisão

| Tarefa | Modelo Ideal | Justificativa |
|--------|--------------|---------------|
| **Arquitetura de sistema** | Opus | Requer raciocínio profundo |
| **Code review crítico** | Opus | Precisa pegar nuances sutis |
| **Decisões estratégicas** | Opus | Alto impacto, vale o custo |
| **Análise de segurança** | Opus | Não pode perder nada |
| **Feature complexa** | Sonnet | Bom equilíbrio |
| **Bug fix médio** | Sonnet | Suficiente para maioria |
| **Refatoração padrão** | Sonnet | Economia sem sacrificar qualidade |
| **Formatação de código** | Haiku | Tarefa mecânica |
| **Extração de dados** | Haiku | Não requer reasoning |
| **Traduções simples** | Haiku | Volume alto, custo baixo |
| **Geração de testes** | Haiku | Repetitivo, pattern-based |

## O Framework CRITICO

Use este framework para decidir o modelo:

\`\`\`
C - Complexidade: Alta → Opus, Média → Sonnet, Baixa → Haiku
R - Risco: Alto impacto → Opus, use o melhor
I - Iterações: Muitas → Haiku para economizar
T - Tempo: Urgente → Haiku (mais rápido)
I - Importância: Estratégico → Opus
C - Custo: Limitado → Haiku
O - Output: Criativo → Opus, Mecânico → Haiku
\`\`\`

## Estratégia: Model Cascade

Uma técnica TOP 1%: começar com Haiku e escalar se necessário.

\`\`\`
┌─────────────────────────────────────────┐
│           MODEL CASCADE                  │
│                                          │
│   1. Haiku tenta resolver               │
│        ↓                                 │
│   2. Se falhar → Sonnet tenta           │
│        ↓                                 │
│   3. Se falhar → Opus resolve           │
│                                          │
│   Economia: 70% das tarefas param em 1  │
└─────────────────────────────────────────┘
\`\`\`

### Implementação

\`\`\`typescript
// Conceito de Model Cascade
async function smartQuery(task: Task) {
  // Primeiro: tenta com Haiku (barato/rápido)
  const haikuResult = await query(task, 'haiku');
  if (isGoodEnough(haikuResult)) return haikuResult;

  // Escala: Sonnet
  const sonnetResult = await query(task, 'sonnet');
  if (isGoodEnough(sonnetResult)) return sonnetResult;

  // Último recurso: Opus
  return await query(task, 'opus');
}
\`\`\`

## Model Distillation

Outra técnica avançada: usar Opus para criar, Haiku para executar.

\`\`\`
┌────────────────────────────────────────────────────┐
│              MODEL DISTILLATION                     │
│                                                     │
│   OPUS cria:        HAIKU executa:                 │
│   - Templates       - Aplica templates             │
│   - Padrões         - Segue padrões                │
│   - Prompts         - Usa prompts                  │
│   - Guidelines      - Segue guidelines             │
│                                                     │
│   1x pensamento     1000x execução barata          │
└────────────────────────────────────────────────────┘
\`\`\`

### Exemplo Real

\`\`\`
1. Opus cria: Skill de code review com 50 regras
2. Haiku executa: Roda essa skill em 500 arquivos

Custo se usasse Opus direto: $50
Custo com distillation: $2 (Opus) + $0.50 (Haiku) = $2.50

ECONOMIA: 95%!
\`\`\`

## CLI: Selecionando Modelos

\`\`\`bash
# Usar Opus para tarefa crítica
claude --model opus "Analise a arquitetura deste sistema"

# Usar Haiku para tarefa simples
claude --model haiku "Formate este JSON"

# Default (Sonnet) para maioria
claude "Implemente esta feature"
\`\`\`

## Tabela de Custos (Referência)

| Modelo | Input (1M tokens) | Output (1M tokens) |
|--------|-------------------|-------------------|
| Opus   | ~$15              | ~$75              |
| Sonnet | ~$3               | ~$15              |
| Haiku  | ~$0.25            | ~$1.25            |

> **Pro Tip:** Para tarefas repetitivas, a diferença entre Opus e Haiku pode ser **60x no custo**!
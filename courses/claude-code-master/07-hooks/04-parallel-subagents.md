# Parallel Subagents na Prática

Aprenda a executar subagents em paralelo para **10x mais velocidade**.

## O Parâmetro Mágico

\`\`\`typescript
// Execução em background (paralela)
Task tool: {
  run_in_background: true,  // ← O segredo!
  subagent_type: "Explore",
  prompt: "Encontre todos os arquivos de teste"
}
\`\`\`

## Anatomia da Execução Paralela

\`\`\`
Tempo →

Sequencial:   [A────────][B────────][C────────]  = 30s

Paralelo:     [A────────]
              [B────────]  = 10s (3x mais rápido!)
              [C────────]
\`\`\`

## Quando Usar Paralelo

| ✅ Use Paralelo | ❌ Evite Paralelo |
|----------------|-------------------|
| Tarefas independentes | Tarefas dependentes |
| Análise de múltiplos arquivos | Arquivos que se referenciam |
| Buscas em diferentes diretórios | Operações sequenciais |
| Validações isoladas | Writes no mesmo arquivo |

## Exemplo Prático Completo

\`\`\`
PEDIDO: "Analise a performance de todos os endpoints da API"

Claude paralleliza:

[Background Task 1] → Explore: encontrar todos os endpoints
[Background Task 2] → Analyze: ler métricas do Langfuse
[Background Task 3] → Search: buscar N+1 queries no código

Depois, com TaskOutput, recupera resultados e sintetiza.
\`\`\`

## O Padrão Fork-Join

\`\`\`
          FORK                    JOIN
            │                       │
    ┌───────┼───────┐              │
    ▼       ▼       ▼              ▼
 Task 1  Task 2  Task 3    ──► Síntese
    │       │       │              │
    └───────┴───────┴──────────────┘
         (paralelo)           (aguarda todos)
\`\`\`

### Código Conceitual
\`\`\`typescript
// 1. FORK - Lança em paralelo
const task1 = Task({ run_in_background: true, ... });
const task2 = Task({ run_in_background: true, ... });
const task3 = Task({ run_in_background: true, ... });

// 2. JOIN - Aguarda todos
const result1 = await TaskOutput({ task_id: task1.id });
const result2 = await TaskOutput({ task_id: task2.id });
const result3 = await TaskOutput({ task_id: task3.id });

// 3. SINTETIZA
return synthesize(result1, result2, result3);
\`\`\`

## Limites e Boas Práticas

| Aspecto | Recomendação |
|---------|--------------|
| **Max paralelos** | 3-5 subagents simultâneos |
| **Timeout** | 30s por subagent (ajustável) |
| **Contexto** | Mínimo necessário por task |
| **Fallback** | Plano B se algum falhar |

## Otimizações TOP 1%

### 1. Early Return
\`\`\`
Se Task 1 encontra a resposta → Cancela Task 2 e 3
\`\`\`

### 2. Progressive Results
\`\`\`
Mostra resultado de cada task conforme termina
(não espera todos para começar a mostrar)
\`\`\`

### 3. Priorização
\`\`\`
Tasks críticas: timeout maior
Tasks nice-to-have: timeout curto
\`\`\`

## Caso Real: Refatoração em Massa

\`\`\`
"Migre todos os 50 componentes para TypeScript"

1. Explorer → Lista 50 componentes
2. Divide em 5 batches de 10
3. 5 Subagents paralelos, cada um migra 10 arquivos
4. Reviewer valida no final

Tempo sequencial: ~50 min
Tempo paralelo: ~12 min (4x mais rápido)
\`\`\`
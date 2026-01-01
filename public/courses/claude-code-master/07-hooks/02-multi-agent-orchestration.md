# Orquestração Multi-Agente

Domine a arte de coordenar múltiplos agentes trabalhando em harmonia.

## O Poder da Orquestração

\`\`\`
┌────────────────────────────────────────────────────┐
│                  ORQUESTRADOR                       │
│                       │                             │
│     ┌─────────────────┼─────────────────┐          │
│     ▼                 ▼                 ▼          │
│ ┌───────┐       ┌───────┐       ┌───────┐         │
│ │Agente │       │Agente │       │Agente │         │
│ │  A    │◄─────►│   B   │◄─────►│   C   │         │
│ └───────┘       └───────┘       └───────┘         │
│     │                 │                 │          │
│     ▼                 ▼                 ▼          │
│ [Resultado A]   [Resultado B]   [Resultado C]      │
│     └─────────────────┼─────────────────┘          │
│                       ▼                             │
│              [SÍNTESE FINAL]                        │
└────────────────────────────────────────────────────┘
\`\`\`

## Tipos de Orquestração

### 1. Sequencial
\`\`\`
Agente A → Agente B → Agente C → Resultado Final
\`\`\`
- Cada agente depende do anterior
- Usado para pipelines de transformação

### 2. Paralela
\`\`\`
     ┌─ Agente A ─┐
     │            │
Tarefa ─ Agente B ─┴→ Síntese
     │            │
     └─ Agente C ─┘
\`\`\`
- Agentes independentes executam simultaneamente
- **5-10x mais rápido** para tarefas divisíveis

### 3. Hierárquica
\`\`\`
        Líder
       /     \\
   Coordenador  Coordenador
    /    \\        /    \\
  A1     A2      B1     B2
\`\`\`
- Delegação em níveis
- Para projetos de grande escala

## Caso Prático: Refatoração Multi-Arquivo

\`\`\`bash
# O que você pede:
"Refatore todos os services para usar o novo padrão de error handling"

# Claude orquestra internamente:
1. Explorer Subagent → Encontra todos os services
2. Plan Subagent → Define estratégia de refatoração
3. Code Subagents (paralelos) → Refatoram cada arquivo
4. Reviewer Subagent → Valida consistência
5. Síntese → Apresenta resultado unificado
\`\`\`

## Boas Práticas

| Prática | Descrição |
|---------|-----------|
| **Contexto mínimo** | Passar apenas o necessário para cada subagent |
| **Resultados tipados** | Definir formato esperado de cada agente |
| **Timeouts** | Limitar tempo de execução por agente |
| **Fallbacks** | Ter plano B se um agente falhar |
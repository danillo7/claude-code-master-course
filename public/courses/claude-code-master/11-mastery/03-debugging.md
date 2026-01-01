# Debugging Avançado com Claude

Bugs são inevitáveis. A diferença está em quão rápido você os encontra.

## O Processo de Debug TOP 1%

\`\`\`
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Reproduce│───▶│ Isolate  │───▶│ Identify │───▶│   Fix    │
│  (repro) │    │ (narrow) │    │  (root)  │    │ (verify) │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
\`\`\`

## Técnicas de Debug

### 1. Rubber Duck com Claude

\`\`\`bash
# Explique o problema para Claude "pensar alto"
claude "Estou tendo um bug estranho:

**Comportamento esperado:**
O usuário deveria ver a lista atualizada após salvar.

**Comportamento atual:**
A lista só atualiza após refresh manual.

**O que já tentei:**
- Verificar se o save está funcionando (está)
- Console.log no useEffect (não dispara)

**Código relevante:**
$(cat src/hooks/useItems.ts)

Me ajude a debugar passo a passo."
\`\`\`

### 2. Binary Search Debug

\`\`\`bash
# Encontrar onde o bug foi introduzido
git bisect start
git bisect bad HEAD
git bisect good v1.0.0

# Claude ajuda a testar cada commit
claude "Analise este commit e diga se pode ter introduzido
um bug relacionado a atualização de estado:
$(git show --stat)"
\`\`\`

### 3. Stack Trace Analysis

\`\`\`bash
# Claude interpreta stack traces
claude "Analise este stack trace e identifique:
1. Onde o erro originou
2. A provável causa
3. Como corrigir

Stack trace:
$(cat error.log)"
\`\`\`

### 4. Log Analysis

\`\`\`bash
# Análise de logs com patterns
claude "Analise estes logs procurando:
- Padrões de erro
- Anomalias de timing
- Sequência de eventos suspeita

$(tail -100 app.log | grep -E 'ERROR|WARN|timeout')"
\`\`\`

## Debug por Tipo de Bug

### Race Conditions

\`\`\`bash
claude "Suspeito de race condition neste código.
Identifique potenciais problemas de concorrência:
$(cat src/async-handler.ts)"
\`\`\`

### Memory Leaks

\`\`\`bash
claude "Analise este componente React para memory leaks:
- Event listeners não removidos?
- Subscriptions abertas?
- Timers não limpos?

$(cat src/components/Dashboard.tsx)"
\`\`\`

### Performance Issues

\`\`\`bash
claude "Este código está lento. Identifique:
- Operações O(n²) ou pior
- Renders desnecessários
- Queries não otimizadas

$(cat src/services/dataProcessor.ts)"
\`\`\`

## Ferramentas de Debug

| Ferramenta | Uso | Quando usar |
|------------|-----|-------------|
| console.log | Quick debug | Problemas simples |
| debugger | Breakpoints | Flow complexo |
| React DevTools | Component state | React issues |
| Network tab | API calls | Backend integration |
| Performance tab | Bottlenecks | Lentidão |

## Template de Bug Report

\`\`\`markdown
## Bug Report

**Título:** [Descrição curta]

**Ambiente:**
- OS: [ex: macOS 14.2]
- Node: [ex: 20.10.0]
- Browser: [ex: Chrome 120]

**Reprodução:**
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

**Esperado:** [O que deveria acontecer]

**Atual:** [O que acontece]

**Logs/Screenshots:** [Anexar]

**Investigação inicial:** [O que você já tentou]
\`\`\`

> **Dica:** Sempre crie um caso de teste que reproduz o bug ANTES de tentar corrigir!
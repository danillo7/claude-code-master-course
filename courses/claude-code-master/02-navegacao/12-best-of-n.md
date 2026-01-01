# Best of N: Múltiplas Soluções, Melhor Escolha

## O Conceito

Em vez de aceitar a primeira solução, peça N alternativas e escolha a melhor:

\`\`\`
Solução 1 → Funcional mas verbosa
Solução 2 → Elegante mas complexa
Solução 3 → Simples e performática ← ESCOLHIDA
\`\`\`

## Por que Funciona?

LLMs são probabilísticos. A primeira resposta nem sempre é a melhor. Ao gerar múltiplas:
- Explora diferentes abordagens
- Revela trade-offs
- Você toma decisão informada

## Como Aplicar

### Método 1: Pedido Explícito
\`\`\`bash
> "Dê 3 abordagens diferentes para implementar cache"

📋 ABORDAGEM 1: In-Memory Map
- Prós: Simples, zero dependências
- Contras: Não persiste, limite de memória

📋 ABORDAGEM 2: Redis
- Prós: Distribuído, persistente
- Contras: Dependência externa, config

📋 ABORDAGEM 3: LocalStorage + Service Worker
- Prós: Offline-first, nativo
- Contras: Só browser, limite 5MB
\`\`\`

### Método 2: Iteração Rápida
\`\`\`bash
> "Implemente validação de email"
[Claude implementa versão 1]

> "Dê uma alternativa mais robusta"
[Claude implementa versão 2]

> "Agora uma versão mais simples"
[Claude implementa versão 3]

> "Use a versão 2 mas com a simplicidade da 3"
[Claude combina o melhor]
\`\`\`

### Método 3: Competição
\`\`\`bash
> "Se você fosse 3 desenvolvedores diferentes, como cada um implementaria isso?"

👨‍💻 JUNIOR:
[Solução funcional básica]

👩‍💻 SENIOR:
[Solução com patterns]

🧙‍♂️ PRINCIPAL:
[Solução arquitetural elegante]
\`\`\`

## Quando Usar Best of N

| Cenário | N Sugerido |
|---------|:----------:|
| Feature simples | 1 (normal) |
| Decisão arquitetural | 3 |
| Código crítico/core | 3-5 |
| Otimização performance | 5 |
| Algoritmo complexo | 3 |

## TOP 1% Pattern: Decision Matrix

\`\`\`bash
> "Compare as 3 soluções em uma tabela:
   - Complexidade
   - Performance
   - Manutenibilidade
   - Casos de uso ideais"

| Critério | Sol. 1 | Sol. 2 | Sol. 3 |
|----------|--------|--------|--------|
| Complex. | Baixa  | Alta   | Média  |
| Perform. | Média  | Alta   | Alta   |
| Manuten. | Alta   | Média  | Alta   |
| Ideal    | MVP    | Scale  | Balance|

→ Recomendação: Solução 3 para maioria dos casos
\`\`\`

## Combinando Técnicas

\`\`\`
1. Plan Mode → Define abordagem geral
2. Best of N → Explora implementações
3. Checkpoint → Testa a escolhida
4. Rewind se necessário → Tenta outra

RESULTADO: Solução otimizada com baixo risco
\`\`\`

**Regra de Ouro:** Para decisões importantes, nunca aceite a primeira resposta.
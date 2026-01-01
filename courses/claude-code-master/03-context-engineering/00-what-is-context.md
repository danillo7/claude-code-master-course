# Context Engineering: A Habilidade #1 dos TOP 1%

## O que Separa os Melhores

Simon Willison, um dos maiores especialistas em LLMs do mundo, cunhou o termo **Context Engineering** para descrever a habilidade mais importante de quem trabalha com IA:

> "A arte de fornecer toda a informação relevante que a IA precisa para executar uma tarefa com excelência."

## Por que Isso Importa?

### O Problema do "Prompt Perfeito"
Muitos acreditam que o segredo está em encontrar o "prompt mágico". Mas a verdade é outra:

\`\`\`
❌ "Escreva um código bom"
   → IA não sabe: linguagem, padrões, contexto, objetivo

✅ Contexto completo + prompt simples
   → IA entende: projeto, stack, convenções, objetivo
   → Resultado: código perfeito na primeira tentativa
\`\`\`

### A Matemática do Contexto
\`\`\`
Qualidade do Output = f(Modelo × Contexto × Prompt)

- Modelo: 10x mais potente a cada 1-2 anos
- Prompt: otimização marginal (~10-20%)
- Contexto: multiplicador infinito (0.1x a 100x)
\`\`\`

## Os 3 Pilares do Context Engineering

### 1. 📋 Contexto Declarativo (CLAUDE.md)
Regras, preferências e padrões que nunca mudam.

### 2. 📂 Contexto de Projeto
Estrutura, dependências, arquitetura específica.

### 3. 💬 Contexto Conversacional
O que você está tentando fazer AGORA.

## Claude Code: A Ferramenta de Context Engineering

O Claude Code foi desenhado para Context Engineering:

| Recurso | Função |
|---------|--------|
| CLAUDE.md | Contexto declarativo persistente |
| @file | Incluir arquivos específicos |
| @folder | Incluir estrutura de pastas |
| /init | Gerar contexto automático |
| Memory MCP | Persistência entre sessões |

## A Mentalidade TOP 1%

\`\`\`
ANTES de escrever qualquer prompt, pergunte:

1. Claude tem TODO o contexto necessário?
2. Ele sabe as regras do projeto?
3. Ele entende os padrões que seguimos?
4. Ele conhece os anti-patterns a evitar?
\`\`\`

## Na Prática

**Developer Médio:**
> "Crie um componente de botão"
> → Resultado: código genérico, sem padrões

**TOP 1% (Context Engineer):**
> Setup: CLAUDE.md com design system + padrões de código
> Prompt: "Crie um componente de botão"
> → Resultado: código perfeito, alinhado com todo o projeto
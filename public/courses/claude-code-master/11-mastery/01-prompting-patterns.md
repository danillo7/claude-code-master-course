# Padrões de Prompting TOP 1%

Prompting eficaz é a diferença entre resultados medianos e extraordinários.

## O Framework CLEAR

\`\`\`
C - Context:    Forneça contexto relevante
L - Language:   Use linguagem precisa
E - Examples:   Inclua exemplos quando útil
A - Action:     Seja específico sobre a ação
R - Refinement: Itere e refine
\`\`\`

## Padrões Essenciais

### 1. Persona Pattern

\`\`\`bash
# Definir persona para contexto especializado
claude "Atue como um arquiteto de software sênior.
Revise este código considerando:
- Padrões de design
- Escalabilidade
- Manutenibilidade"
\`\`\`

### 2. Chain of Thought

\`\`\`bash
# Forçar raciocínio passo-a-passo
claude "Analise este problema passo a passo:
1. Identifique o problema principal
2. Liste possíveis causas
3. Proponha soluções
4. Recomende a melhor opção"
\`\`\`

### 3. Few-Shot Pattern

\`\`\`bash
# Fornecer exemplos do output esperado
claude "Converta funções para TypeScript:

Exemplo input:
function add(a, b) { return a + b; }

Exemplo output:
function add(a: number, b: number): number { return a + b; }

Agora converta:
function multiply(x, y) { return x * y; }"
\`\`\`

### 4. Constraint Pattern

\`\`\`bash
# Definir limites claros
claude "Refatore este código com as seguintes restrições:
- Máximo 20 linhas por função
- Sem dependências externas
- Compatível com Node 18+"
\`\`\`

### 5. Template Pattern

\`\`\`bash
# Estrutura consistente
claude "Gere documentação no formato:
## [Nome da Função]
**Descrição:** [breve descrição]
**Parâmetros:** [lista de params]
**Retorno:** [tipo de retorno]
**Exemplo:** [código de exemplo]"
\`\`\`

## Anti-Patterns a Evitar

| Anti-Pattern | Por quê evitar | Alternativa |
|--------------|----------------|-------------|
| Prompts vagos | Resultados imprevisíveis | Seja específico |
| Sem contexto | Claude precisa adivinhar | Forneça background |
| Instruções conflitantes | Confunde o modelo | Uma direção clara |
| Output muito grande | Perde foco | Divida em partes |
| Sem exemplos | Formato inconsistente | Few-shot quando possível |

## Prompt Engineering Avançado

### Meta-Prompting

\`\`\`bash
# Claude ajuda a criar prompts
claude "Crie um prompt otimizado para:
Objetivo: Gerar testes unitários
Linguagem: TypeScript
Framework: Jest
Deve cobrir: edge cases, happy path, error handling"
\`\`\`

### Self-Consistency

\`\`\`bash
# Múltiplas perspectivas
claude "Analise esta arquitetura de 3 formas:
1. Como desenvolvedor junior (simplicidade)
2. Como arquiteto sênior (escalabilidade)
3. Como DevOps (operabilidade)
Depois, sintetize as melhores ideias."
\`\`\`

## Checklist de Qualidade

- [ ] Contexto suficiente fornecido?
- [ ] Ação claramente definida?
- [ ] Formato de output especificado?
- [ ] Restrições mencionadas?
- [ ] Exemplos incluídos se necessário?

> **Dica TOP 1%:** Salve seus melhores prompts em \`~/.claude/prompts/\` para reutilização!
# Criando Skills Customizadas

## Estrutura Completa

\`\`\`markdown
---
description: Análise rápida de código com sugestões
model-invoked: true
---

# Code Review Express

## Contexto
Use quando o usuário pedir para revisar código ou mencionar "review".

## Processo
1. Identificar linguagem e framework
2. Verificar:
   - Bugs potenciais
   - Problemas de segurança
   - Performance
   - Legibilidade
   - Testes faltando
3. Gerar relatório estruturado

## Formato de Saída

\\\`\\\`\\\`markdown
## 🔍 Code Review

### Resumo
[1-2 linhas]

### 🚨 Crítico
- [Lista de issues críticas]

### ⚠️ Atenção
- [Lista de warnings]

### 💡 Sugestões
- [Melhorias opcionais]

### ✅ Pontos Positivos
- [O que está bom]
\\\`\\\`\\\`

## Exemplos

**Input:** "Revise minha função de autenticação"
**Output:** [Relatório estruturado seguindo o formato]
\`\`\`

## Skills para Contextos Específicos

### Para Costa Law (Jurídico)

\`\`\`markdown
---
description: Análise de contratos com foco em riscos
model-invoked: true
---

# Análise de Contrato

## Quando Usar
Quando houver texto de contrato ou menção a "contrato", "cláusula", "acordo".

## Verificar
1. Cláusulas abusivas
2. Riscos para o cliente
3. Prazos e multas
4. Jurisdição
5. Compliance LGPD
\`\`\`
# Warp AI - Técnicas Avançadas

## Explicação de Erros

Quando um comando falha, o Warp AI automaticamente oferece ajuda:

\`\`\`bash
> npm run build
Error: Cannot find module 'react'

# Warp AI aparece: "Parece que falta uma dependência. Deseja executar npm install?"
\`\`\`

## Prompts Eficientes

### ❌ Vago:
"como usar docker"

### ✅ Específico:
"como criar container docker com postgres 15 na porta 5432 com volume persistente"

## Padrões de Pergunta

| Padrão | Exemplo |
|--------|---------|
| "como [ação]" | como listar processos |
| "qual comando para [objetivo]" | qual comando para ver uso de memória |
| "explica [comando]" | explica o que faz chmod 755 |
| "converte [formato]" | converte esse find para fd |

## Contexto do Diretório

Warp AI considera seu diretório atual:

\`\`\`bash
# Em ~/spot-council:
> ⌘ + I: "como rodar os testes"
# Warp analisa package.json e sugere: npm test

# Em um projeto Python:
> ⌘ + I: "como rodar os testes"
# Warp analisa e sugere: pytest
\`\`\`

## Integração com Histórico

Warp AI vê seu histórico recente. Se você executou vários comandos git, ele entende o contexto:

\`\`\`bash
> git status
> git add .
> ⌘ + I: "agora commita"
# Warp sugere: git commit -m ""
\`\`\`
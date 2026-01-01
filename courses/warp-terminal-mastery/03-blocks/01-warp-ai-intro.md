# Warp AI - Sua IA de Linha de Comando

## Ativando Warp AI

Pressione **⌘ + I** a qualquer momento para ativar a IA.

## Como Funciona

1. Pressione ⌘ + I
2. Digite sua pergunta em português ou inglês
3. Warp sugere comandos
4. Pressione Enter para aceitar ou Tab para editar

## Exemplos Práticos

### Pergunta: "como listar arquivos maiores que 100MB"
\`\`\`bash
# Warp sugere:
find . -type f -size +100M
# ou com fd (mais moderno):
fd -S +100M -t f
\`\`\`

### Pergunta: "como matar processo na porta 3000"
\`\`\`bash
# Warp sugere:
kill -9 $(lsof -ti:3000)
\`\`\`

### Pergunta: "como fazer commit com mensagem"
\`\`\`bash
# Warp sugere:
git commit -m "sua mensagem aqui"
\`\`\`

## Diferença para Claude Code

| Aspecto | Warp AI | Claude Code |
|---------|---------|-------------|
| Foco | Comandos shell | Desenvolvimento completo |
| Contexto | Comando atual | Projeto inteiro |
| Execução | Sugere, você executa | Pode executar sozinho |
| Profundidade | Rápido, superficial | Profundo, detalhado |

## Quando Usar Cada Um

- **Warp AI**: "Como faço X no terminal?"
- **Claude Code**: "Implemente feature Y no meu projeto"

### No seu workflow:
- Esqueceu sintaxe de um comando → **Warp AI**
- Precisa criar skill ou analisar código → **Claude Code**
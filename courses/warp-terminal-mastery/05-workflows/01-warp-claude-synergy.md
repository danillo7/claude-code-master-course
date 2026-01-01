# Warp + Claude Code

A combinação de Warp com Claude Code cria um **workflow AI-First completo**.

## Divisão de Responsabilidades

| Tarefa | Ferramenta | Motivo |
|--------|------------|--------|
| Comando rápido | Warp AI | Resposta instantânea |
| Desenvolvimento | Claude Code | Contexto do projeto |
| Navegação | Warp | Blocks e abas |
| Automação complexa | Claude Code | Skills e MCPs |
| Workflows simples | Warp | YAML fácil |

## Setup Recomendado

### Layout de Abas para SPOT AI:
\`\`\`
Aba 1: Claude Code (cc-spot)     → Desenvolvimento
Aba 2: Terminal livre            → Testes manuais
Aba 3: docker ps / logs          → Monitoramento
\`\`\`

### Aliases Configurados:
\`\`\`bash
# Em ~/.zshrc
alias cc-spot='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume spot-ai'
alias cc-curso='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume curso-claude'
alias cc-sandbox='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume sandbox'
\`\`\`

## Fluxo de Trabalho

1. **⌘ + T** - Nova aba no Warp
2. **⌃ + R** → "cc-spot" → Abre Claude Code
3. Trabalha no Claude Code
4. **⌘ + 2** → Aba de testes
5. Executa comandos rápidos
6. **⌘ + I** (Warp AI) se precisar de ajuda
7. **⌘ + 1** → Volta pro Claude Code

## Dica Pro: Split Vertical

Use **⌘ + D** para ter Claude Code e terminal lado a lado:

\`\`\`
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   Claude Code       │   Terminal livre    │
│   (cc-spot)         │   (npm run dev)     │
│                     │                     │
└─────────────────────┴─────────────────────┘
\`\`\`
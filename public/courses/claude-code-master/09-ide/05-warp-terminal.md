# Warp e Terminais Modernos

Terminais modernos como Warp trazem features que multiplicam sua produtividade com Claude.

## Por Que Warp?

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    WARP TERMINAL                         │
│                                                          │
│  ✅ Blocks (comandos agrupados)                         │
│  ✅ AI integrado (Warp AI)                              │
│  ✅ Autocomplete inteligente                            │
│  ✅ Workflows salvos                                     │
│  ✅ Compartilhamento de sessão                          │
│  ✅ Busca em histórico visual                           │
│  ✅ Edição inline de comandos                           │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Instalação

\`\`\`bash
# macOS
brew install --cask warp

# Ou download direto
# https://www.warp.dev/
\`\`\`

## Warp + Claude Code

### Blocks

Cada comando é um "block" que você pode:
- Copiar inteiro
- Reexecutar
- Compartilhar
- Pesquisar

\`\`\`
┌─────────────────────────────────────────┐
│ Block 1: claude "analise o projeto"     │
│ > Análise completa do projeto...        │
│ > [output longo]                        │
│ ┌─────────────────────────────────────┐ │
│ │ Copy │ Retry │ Share │ Bookmark    │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
\`\`\`

### Workflows Salvos

\`\`\`yaml
# ~/.warp/workflows/claude-review.yaml
name: Claude Code Review
command: |
  git diff --staged | claude "revise estas mudanças"
description: Review mudanças staged com Claude
\`\`\`

Acesse com: \`Ctrl+Shift+R\` → pesquisar workflow

### Warp AI + Claude Code

Warp tem IA integrada. Use AMBOS:

\`\`\`
Warp AI: Ajuda com comandos shell
Claude Code: Ajuda com código/projetos

COMBO:
1. Warp AI: "como encontrar arquivos .ts modificados hoje?"
   → find . -name "*.ts" -mtime -1

2. Claude Code: "refatore estes arquivos"
   → [refatoração inteligente]
\`\`\`

## Outras Opções de Terminal

### iTerm2 (macOS)

\`\`\`bash
brew install --cask iterm2

# Features úteis:
# - Split panes
# - Profiles
# - Triggers (automação)
# - tmux integration
\`\`\`

### Alacritty (Cross-platform)

\`\`\`bash
brew install --cask alacritty

# Ultra rápido (GPU-accelerated)
# Configuração via YAML
# Mínimo de features, máximo de performance
\`\`\`

### Kitty

\`\`\`bash
brew install --cask kitty

# GPU-accelerated
# Tabs e windows
# Extensível com Python
# Excelente para imagens no terminal
\`\`\`

## Comparativo

| Terminal | Velocidade | Features | IA |
|----------|------------|----------|---|
| **Warp** | Rápido | Muitas | Sim |
| **iTerm2** | Médio | Muitas | Não |
| **Alacritty** | Ultra-rápido | Mínimas | Não |
| **Kitty** | Rápido | Médias | Não |
| **Terminal.app** | Lento | Básicas | Não |

## Configuração Universal

Independente do terminal, configure:

\`\`\`bash
# ~/.zshrc ou ~/.bashrc

# PATH com ferramentas modernas
export PATH="$HOME/.local/bin:$PATH"

# Aliases universais
alias c="claude"
alias cq="claude --quiet"

# Histórico melhor
HISTSIZE=50000
SAVEHIST=50000
setopt SHARE_HISTORY
\`\`\`

## Dicas de Produtividade

| Dica | Descrição |
|------|-----------|
| **Múltiplos panes** | Claude em um, código em outro |
| **Histórico pesquisável** | Ctrl+R ou fzf para buscar |
| **Bookmarks** | Salve comandos Claude úteis |
| **Profiles** | Config diferente por projeto |
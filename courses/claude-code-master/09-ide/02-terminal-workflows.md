# Terminal Workflows TOP 1%

O terminal é onde Claude Code brilha. Aprenda a maximizar essa integração.

## Shells Recomendados

| Shell | Vantagens | Instalação |
|-------|-----------|------------|
| **Zsh** | Plugins, temas, completions | Default no macOS |
| **Fish** | Auto-sugestões, syntax highlighting | \`brew install fish\` |
| **Bash** | Universal, scripts compatíveis | Default Linux |

## Configuração Zsh + Oh My Zsh

\`\`\`bash
# Instalar Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Plugins essenciais no ~/.zshrc
plugins=(
  git
  z
  zsh-autosuggestions
  zsh-syntax-highlighting
  docker
  npm
)

# Alias para Claude
alias c="claude"
alias cq="claude --quiet"
alias cr="claude 'revise este código'"
\`\`\`

## Ferramentas Modernas de Terminal

\`\`\`bash
# Substitutos modernos para comandos clássicos
brew install eza      # ls moderno com ícones
brew install bat      # cat com syntax highlighting
brew install fd       # find mais rápido
brew install ripgrep  # grep mais rápido
brew install fzf      # fuzzy finder
brew install zoxide   # cd inteligente

# Aliases no ~/.zshrc
alias ls="eza --icons"
alias cat="bat"
alias find="fd"
alias grep="rg"
\`\`\`

## Fluxo de Trabalho Otimizado

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                 TERMINAL WORKFLOW                        │
│                                                          │
│  1. NAVEGAÇÃO (zoxide + fzf)                            │
│     $ z projeto     → Vai para ~/Dev/projeto            │
│     $ fzf           → Busca fuzzy em arquivos           │
│                                                          │
│  2. EXPLORAÇÃO (eza + bat + rg)                         │
│     $ eza -la       → Lista com detalhes e ícones       │
│     $ bat arquivo   → Visualiza com syntax highlight    │
│     $ rg "padrão"   → Busca super rápida               │
│                                                          │
│  3. CLAUDE CODE                                          │
│     $ claude        → Inicia sessão interativa          │
│     $ c "query"     → Query rápida via alias            │
│                                                          │
│  4. GIT (integrado)                                      │
│     $ git status    → Ver mudanças do Claude           │
│     $ git diff      → Ver exatamente o que mudou        │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Pipes e Redirecionamento

\`\`\`bash
# Enviar arquivo para Claude
cat arquivo.ts | claude "explique este código"

# Salvar output de Claude
claude "gere um README" > README.md

# Combinar com outros comandos
rg "TODO" | claude "categorize estes TODOs por prioridade"

# Processar múltiplos arquivos
find . -name "*.ts" | head -5 | xargs -I {} claude "revise {}"
\`\`\`

## Tmux para Multi-tasking

\`\`\`bash
# Instalar tmux
brew install tmux

# Layout produtivo
# ┌─────────────────┬─────────────────┐
# │     CLAUDE      │     EDITOR      │
# │    (terminal)   │   (vim/code)    │
# ├─────────────────┴─────────────────┤
# │             LOGS/TESTES           │
# └───────────────────────────────────┘

# Criar esse layout
tmux new-session -d -s dev
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
\`\`\`

## Scripts de Produtividade

\`\`\`bash
#!/bin/bash
# ~/bin/claude-review
# Revisa todos os arquivos modificados

git diff --name-only | while read file; do
  echo "📝 Revisando: $file"
  claude "revise este arquivo para qualidade" < "$file"
done
\`\`\`

## Starship Prompt (Opcional)

\`\`\`bash
# Prompt bonito e informativo
brew install starship

# Adicionar ao ~/.zshrc
eval "$(starship init zsh)"
\`\`\`
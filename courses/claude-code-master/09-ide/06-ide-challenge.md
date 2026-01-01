# Challenge: Setup IDE TOP 1%

Hora de criar seu ambiente de desenvolvimento definitivo integrando todas as ferramentas.

## Objetivo

Configurar um setup completo que inclua:
1. Editor/IDE principal configurado
2. Terminal otimizado
3. Ferramentas modernas instaladas
4. Integração Claude perfeita
5. Documentação do seu setup

## Seu Stack Personalizado

Escolha seu caminho:

\`\`\`
PATH A: VS Code + Terminal Integrado
PATH B: JetBrains + Terminal Split
PATH C: Vim/Neovim + Tmux
PATH D: Híbrido (mistura de todos)
\`\`\`

## Checklist de Configuração

### 1. Terminal Moderno

\`\`\`bash
# Instalar ferramentas essenciais
brew install eza bat ripgrep fd fzf zoxide starship

# Configurar aliases em ~/.zshrc
alias ls="eza --icons"
alias cat="bat"
alias find="fd"
alias grep="rg"
alias c="claude"

# Ativar zoxide
eval "$(zoxide init zsh)"

# Ativar starship
eval "$(starship init zsh)"
\`\`\`

### 2. Editor Configurado

**VS Code:**
\`\`\`json
{
  "editor.inlineSuggest.enabled": true,
  "terminal.integrated.fontSize": 14,
  "workbench.colorTheme": "One Dark Pro"
}
\`\`\`

**Vim/Neovim:**
\`\`\`vim
" ~/.vimrc
set number relativenumber
set tabstop=2 shiftwidth=2 expandtab
nnoremap <leader>cr :!claude "refatore" < %<CR>
\`\`\`

### 3. Git Hooks para Claude

\`\`\`bash
# .git/hooks/pre-commit
#!/bin/bash
echo "🤖 Claude analyzing staged changes..."
git diff --cached --name-only | while read file; do
  if [[ "$file" == *.ts ]] || [[ "$file" == *.tsx ]]; then
    claude "quick review for issues" < "$file"
  fi
done
\`\`\`

### 4. Workflow Documentado

Crie um arquivo \`MY-SETUP.md\`:

\`\`\`markdown
# Meu Setup TOP 1%

## Editor
- [x] VS Code / IntelliJ / Neovim
- [x] Extensão Claude instalada
- [x] Keybindings configurados

## Terminal
- [x] Warp / iTerm2 / Alacritty
- [x] Zsh + Oh My Zsh
- [x] Ferramentas modernas (eza, bat, rg, fd, fzf)
- [x] Aliases configurados

## Claude Code
- [x] Instalado globalmente
- [x] CLAUDE.md no projeto
- [x] Skills customizadas
- [x] MCPs essenciais

## Workflow Diário
1. Abrir terminal no projeto
2. \`z projeto\` para navegar
3. \`c\` para iniciar Claude
4. Iterar: pedir → revisar → commitar

## Comandos Mais Usados
- \`c "refatore"\` - Refatoração rápida
- \`c "teste"\` - Gerar testes
- \`c "explique"\` - Entender código
\`\`\`

## Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Terminal com ferramentas modernas | 20 |
| Editor configurado para Claude | 20 |
| Aliases e atalhos funcionando | 20 |
| Workflow documentado | 20 |
| Git hooks ou automação | 10 |
| Setup reproduzível (script) | 10 |
| **TOTAL** | **100** |

## Bônus: Script de Setup

Crie um script que reproduz todo seu setup:

\`\`\`bash
#!/bin/bash
# setup-dev-environment.sh

echo "🚀 Instalando ferramentas..."
brew install eza bat ripgrep fd fzf zoxide starship

echo "📝 Configurando zsh..."
cat >> ~/.zshrc << 'EOF'
alias ls="eza --icons"
alias cat="bat"
alias c="claude"
eval "$(zoxide init zsh)"
eval "$(starship init zsh)"
EOF

echo "✅ Setup completo!"
echo "Reinicie o terminal para aplicar."
\`\`\`

**+50 XP Bônus por script funcional!**

## Entrega

1. \`MY-SETUP.md\` documentando seu ambiente
2. Capturas de tela do setup funcionando
3. (Bônus) \`setup-dev-environment.sh\` script

## Reflexão

Ao completar este challenge, você terá:

- ✅ Ambiente de desenvolvimento otimizado
- ✅ Terminal moderno configurado
- ✅ Integração Claude perfeita
- ✅ Workflow documentado e reproduzível
- ✅ Setup que pode compartilhar com outros

**Você agora tem o ambiente que os TOP 1% usam!**
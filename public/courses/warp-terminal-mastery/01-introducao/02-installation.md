# Instalação do Warp

## Download

\`\`\`bash
# Via Homebrew (recomendado)
brew install --cask warp

# Ou baixe direto: https://www.warp.dev/
\`\`\`

## Primeiro Launch

1. Abra o Warp
2. Crie conta (ou use Single Sign-On)
3. Escolha tema (recomendo: **Catppuccin Mocha**)
4. Configure shell (zsh recomendado)

## Estrutura de Arquivos

\`\`\`
~/.warp/
├── prefs.yaml              # Configurações gerais
├── themes/                 # Temas customizados
├── workflows/              # Seus workflows
│   ├── claude-code.yaml
│   ├── git-workflows.yaml
│   └── devops-workflows.yaml
└── launch_configurations/  # Configurações de abas
\`\`\`

## Configuração Recomendada

**~/.warp/prefs.yaml:**
\`\`\`yaml
# Tema e visual
theme: "catppuccin_mocha"
font_family: "JetBrains Mono Nerd Font"
font_size: 15
window_opacity: 0.92

# Cursor
cursor_shape: "block"
cursor_blink: false

# AI
warp_ai_enabled: true

# Blocks
blocks_enabled: true
show_block_timestamps: true

# Input
input_position: "bottom"
\`\`\`

## Verificação

Após instalar, teste:
- **⌘ + K** - Limpar tela
- **⌘ + I** - Abrir Warp AI
- **⌘ + P** - Command Palette
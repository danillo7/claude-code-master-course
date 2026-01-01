# Configuração Completa do Warp

## Arquivo Completo

\`\`\`yaml
# ~/.warp/prefs.yaml
# Configuração TOP 1% - Dr. Danillo Costa

# ═══════════════════════════════════════════════════════
# APARÊNCIA
# ═══════════════════════════════════════════════════════

theme: "catppuccin_mocha"
font_family: "JetBrains Mono Nerd Font"
font_size: 15
window_opacity: 0.92

# Cursor
cursor_shape: "block"
cursor_blink: false

# ═══════════════════════════════════════════════════════
# FUNCIONALIDADES
# ═══════════════════════════════════════════════════════

# Warp AI
warp_ai_enabled: true

# Blocks
blocks_enabled: true
show_block_timestamps: true

# Input
input_position: "bottom"

# ═══════════════════════════════════════════════════════
# COMPORTAMENTO
# ═══════════════════════════════════════════════════════

# Bell
bell_enabled: false

# Scrollback
scrollback_lines: 10000

# Working directory
restore_working_directory: true

# ═══════════════════════════════════════════════════════
# TERMINAL
# ═══════════════════════════════════════════════════════

# Shell
default_shell: "/bin/zsh"

# Environment
inherit_env: true
\`\`\`

## Opções por Categoria

### Aparência
| Opção | Valores | Default |
|-------|---------|---------|
| theme | nome do tema | dracula |
| font_family | nome da fonte | - |
| font_size | número | 13 |
| window_opacity | 0.0-1.0 | 1.0 |

### Cursor
| Opção | Valores | Default |
|-------|---------|---------|
| cursor_shape | block, bar, underline | bar |
| cursor_blink | true/false | true |

### Blocks
| Opção | Valores | Default |
|-------|---------|---------|
| blocks_enabled | true/false | true |
| show_block_timestamps | true/false | true |

## Aplicando Mudanças

Após editar \`prefs.yaml\`:
1. Salve o arquivo
2. **⌘ + Q** (fechar Warp)
3. Abra novamente
4. Configurações aplicadas!
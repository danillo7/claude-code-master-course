# Temas do Warp

## Tema Recomendado

**Catppuccin Mocha** - Usado na sua configuração:

\`\`\`yaml
# ~/.warp/prefs.yaml
theme: "catppuccin_mocha"
\`\`\`

Por que Catppuccin?
- Cores suaves para longas sessões
- Bom contraste
- Popular na comunidade dev

## Outros Temas Populares

- **Dracula** - Clássico, roxo
- **One Dark** - Inspirado no Atom
- **Tokyo Night** - Azul/roxo moderno
- **Nord** - Tons frios, clean

## Configurações Visuais

\`\`\`yaml
# ~/.warp/prefs.yaml

# Fonte
font_family: "JetBrains Mono Nerd Font"
font_size: 15

# Transparência
window_opacity: 0.92

# Cursor
cursor_shape: "block"  # ou "bar", "underline"
cursor_blink: false    # menos distração
\`\`\`

## Temas Custom

Crie seus próprios temas em \`~/.warp/themes/\`:

\`\`\`yaml
# ~/.warp/themes/meu-tema.yaml
name: "Meu Tema Custom"
background: "#1a1b26"
foreground: "#c0caf5"
cursor: "#f7768e"
# ... outras cores
\`\`\`

## Alternando Temas

Para apresentações ou gravações:
1. **⌘ + P** → "theme"
2. Selecione tema claro
3. Apresente
4. Volte ao escuro depois
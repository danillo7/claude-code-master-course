# Dicas Pro do Warp

## 1. Links Clicáveis

Qualquer URL no output é clicável:
- **⌘ + Click** → Abre no browser

Funciona para:
- URLs HTTP/HTTPS
- Paths de arquivo (abre no Finder)
- Referências git (abre no GitHub)

## 2. Arrastar Arquivos

Arraste um arquivo do Finder para o Warp:
- Insere o path completo automaticamente
- Com espaços já escapados!

\`\`\`bash
# Arraste "Meu Arquivo.pdf" do Finder
cat "/Users/danillo/Meu Arquivo.pdf"
\`\`\`

## 3. Autocomplete Inteligente

Warp tem autocomplete contextual:
- Digite parte do comando
- Tab para completar
- Setas para navegar sugestões

## 4. Inline Images

Sim, Warp mostra imagens inline!

\`\`\`bash
# Visualizar imagem no terminal
warp-img show ~/Downloads/screenshot.png
\`\`\`

## 5. SSH com Blocks

Blocks funcionam em sessões SSH também:
- Cada comando remoto = um block
- Navegação igual ao local

## 6. Command Palette (⌘ + P)

Acesso a TUDO:
- Settings
- Launch Configurations
- Workflows
- Ações do Warp
- Temas

## 7. Filtros de Histórico

No histórico (⌃ + R):
- Digite parte do comando
- Use prefixo \`>\` para só workflows
- Use prefixo \`#\` para tags

## 8. Notificações de Comando

Configure notificações para comandos longos:
- Settings > Notifications
- "Notify when command completes"
- Útil para builds e deploys

## 9. Theme Switching Rápido

**⌘ + P** → "theme" → Selecione
- Bom para apresentações (tema claro)
- Volta pro escuro depois
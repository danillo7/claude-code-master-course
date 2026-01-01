# Vim e Neovim Integration

Para desenvolvedores que preferem Vim/Neovim, a integração com Claude é poderosa.

## Por Que Vim + Claude?

\`\`\`
VELOCIDADE MÁXIMA:
- Vim: edição mais rápida possível
- Claude: geração mais inteligente possível
- Juntos: produtividade TOP 1%
\`\`\`

## Método 1: Terminal Split

\`\`\`bash
# Vim em um pane, Claude em outro
tmux split-window -h 'claude'
\`\`\`

\`\`\`
┌─────────────────┬─────────────────┐
│      VIM        │     CLAUDE      │
│                 │                 │
│  [editando]     │  $ claude       │
│                 │  > refatore     │
│                 │                 │
└─────────────────┴─────────────────┘
\`\`\`

## Método 2: Comandos Vim

No seu \`~/.vimrc\` ou \`init.vim\`:

\`\`\`vim
" Enviar seleção visual para Claude
vnoremap <leader>ce :w !claude "explique este código"<CR>

" Refatorar arquivo atual
nnoremap <leader>cr :!claude "refatore" < %<CR>

" Gerar testes
nnoremap <leader>ct :!claude "gere testes para" < % > %:r.test.ts<CR>

" Quick ask (prompt interativo)
nnoremap <leader>cq :!claude ""<Left>
\`\`\`

## Método 3: Plugin para Neovim (Lua)

\`\`\`lua
-- ~/.config/nvim/lua/claude.lua

local M = {}

-- Enviar buffer para Claude
function M.send_buffer(prompt)
  local content = table.concat(vim.api.nvim_buf_get_lines(0, 0, -1, false), "\\n")
  local cmd = string.format('echo %q | claude %q', content, prompt)
  vim.fn.system(cmd)
end

-- Keymaps
vim.keymap.set('n', '<leader>ce', function()
  M.send_buffer("explique este código")
end, { desc = "Claude: Explain" })

vim.keymap.set('n', '<leader>cr', function()
  M.send_buffer("refatore para melhor qualidade")
end, { desc = "Claude: Refactor" })

vim.keymap.set('n', '<leader>ct', function()
  M.send_buffer("gere testes unitários")
end, { desc = "Claude: Tests" })

return M
\`\`\`

## Integração com Telescope (Neovim)

\`\`\`lua
-- Picker customizado para prompts Claude
require('telescope').setup{
  extensions = {
    claude_prompts = {
      prompts = {
        { name = "Explain", cmd = "explique" },
        { name = "Refactor", cmd = "refatore" },
        { name = "Tests", cmd = "gere testes" },
        { name = "Docs", cmd = "documente" },
      }
    }
  }
}

-- Keymap para abrir picker
vim.keymap.set('n', '<leader>cp', ':Telescope claude_prompts<CR>')
\`\`\`

## Workflow Vim + Claude

\`\`\`
1. ABRIR arquivo no Vim
   $ vim arquivo.ts

2. ANALISAR com Claude (split terminal)
   :!claude "analise este código" < %

3. EDITAR baseado nas sugestões
   (comandos vim normais)

4. REFATORAR com Claude
   :!claude "refatore a função X" < %

5. VERIFICAR mudanças
   :!git diff

6. COMMITAR
   :!git commit -am "feat: melhorias"
\`\`\`

## Dicas TOP 1%

| Dica | Comando |
|------|---------|
| **Seleção visual → Claude** | \`:'<,'>!claude "query"\` |
| **Substituir com output** | \`:r !claude "gere código"\` |
| **Diff lado a lado** | \`:vert diffsplit arquivo.bak\` |
| **Undo profundo** | \`:earlier 5m\` (volta 5 min) |

## LSP + Claude

\`\`\`lua
-- nvim-lspconfig com Claude como fallback
vim.keymap.set('n', 'gd', function()
  local ok = pcall(vim.lsp.buf.definition)
  if not ok then
    vim.cmd('!claude "onde está definido o símbolo sob o cursor?"')
  end
end)
\`\`\`

## Macros para Produtividade

\`\`\`vim
" Macro: Adicionar tipo TypeScript na linha
let @t = '0f:lclaude "qual o tipo correto?"\\<CR>'

" Macro: Documentar função
let @d = '[[Oclaude "documente esta função"\\<CR>'
\`\`\`
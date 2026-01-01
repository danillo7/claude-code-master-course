# Interface do Warp

## Anatomia da Tela

\`\`\`
┌─────────────────────────────────────────────────────────┐
│ [Abas]          [Search]              [Settings] [+]    │  ← Tab Bar
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ┌─────────────────────────────────────────────────────┐│
│ │ > git status                           [12:30:45]   ││  ← Block Header
│ │ On branch main                                       ││
│ │ Changes not staged for commit:                       ││  ← Block Body
│ │   modified: src/App.tsx                              ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
│ ┌─────────────────────────────────────────────────────┐│
│ │ > npm run build                        [12:31:02]   ││
│ │ ✓ Built successfully                                 ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
├─────────────────────────────────────────────────────────┤
│ > █                                      [⌘I AI] [↵]   │  ← Input Area
└─────────────────────────────────────────────────────────┘
\`\`\`

## Blocks - O Diferencial

Cada comando cria um **Block** independente:

- **Clicável** - Clique para selecionar todo output
- **Copiável** - ⌘ + ⇧ + C copia output do block
- **Timestamp** - Sabe exatamente quando executou
- **Colapsável** - Minimize outputs longos
- **Navegável** - ⌘ + ↑/↓ entre blocks

## Áreas Interativas

| Área | Interação |
|------|-----------|
| **Tab Bar** | Arrastar, reordenar, fechar |
| **Block Header** | Clique = seleciona tudo |
| **Block Body** | Selecione texto específico |
| **Links** | ⌘ + Click abre no browser |
| **Paths** | ⌘ + Click abre no Finder |
| **Input** | Editor moderno com autocomplete |
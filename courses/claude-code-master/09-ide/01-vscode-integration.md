# Integração com VS Code

O VS Code é o editor mais popular entre desenvolvedores. Veja como maximizar Claude Code nele.

## Extensão Oficial

\`\`\`bash
# Instalar extensão via CLI
code --install-extension anthropic.claude-code
\`\`\`

Ou pesquise "Claude Code" no marketplace do VS Code.

## Configurações Recomendadas

No \`settings.json\` do VS Code:

\`\`\`json
{
  // Claude Code Integration
  "claude-code.enabled": true,
  "claude-code.model": "sonnet",
  "claude-code.autoComplete": true,

  // Terminal integrado
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.fontSize": 14,

  // Editor otimizado para IA
  "editor.inlineSuggest.enabled": true,
  "editor.suggest.showStatusBar": true,

  // Git integrado
  "git.autofetch": true,
  "git.confirmSync": false
}
\`\`\`

## Keybindings TOP 1%

\`\`\`json
{
  // Abrir Claude Code no terminal
  { "key": "cmd+shift+c", "command": "workbench.action.terminal.new" },

  // Quick fix com Claude
  { "key": "cmd+.", "command": "claude.quickFix" },

  // Explain seleção
  { "key": "cmd+shift+e", "command": "claude.explainSelection" }
}
\`\`\`

## Workflow Integrado

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    VS CODE                               │
│  ┌─────────────────┐  ┌────────────────────────────┐   │
│  │   EDITOR        │  │      TERMINAL              │   │
│  │                 │  │                            │   │
│  │  código.ts      │  │  $ claude                  │   │
│  │  ───────────    │  │  > Refatore a função X    │   │
│  │  function X()   │  │                            │   │
│  │    ...          │  │  [Claude edita o arquivo]  │   │
│  │                 │  │                            │   │
│  └─────────────────┘  └────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  SOURCE CONTROL (Git) │ PROBLEMS │ OUTPUT       │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Dicas TOP 1%

| Dica | Descrição |
|------|-----------|
| **Split terminal** | Claude em um lado, testes no outro |
| **Git inline** | Veja mudanças em tempo real |
| **Multi-cursor** | Selecione múltiplos trechos para Claude |
| **Workspace trust** | Permita Claude editar livremente |

## Tasks.json para Automação

\`\`\`json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Claude: Review",
      "type": "shell",
      "command": "claude 'revise este arquivo' < \${file}"
    },
    {
      "label": "Claude: Tests",
      "type": "shell",
      "command": "claude 'gere testes para' < \${file}"
    }
  ]
}
\`\`\`
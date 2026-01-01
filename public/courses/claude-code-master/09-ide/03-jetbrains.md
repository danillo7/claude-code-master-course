# JetBrains IDEs Integration

Se você usa IntelliJ, PyCharm, WebStorm ou outro IDE JetBrains, veja como integrar Claude.

## Plugin Oficial

\`\`\`
1. File → Settings → Plugins
2. Pesquisar "Claude Code"
3. Install
4. Restart IDE
\`\`\`

## Configuração

\`\`\`
Settings → Tools → Claude Code
├── Model: sonnet (default)
├── API Key: [configurar]
├── Auto-suggest: enabled
└── Keyboard shortcuts: customize
\`\`\`

## Atalhos Recomendados

| Ação | Atalho Sugerido |
|------|-----------------|
| Abrir Claude | \`Ctrl+Shift+C\` |
| Quick Fix com Claude | \`Alt+Enter\` → Claude |
| Explain Selection | \`Ctrl+Shift+E\` |
| Generate Tests | \`Ctrl+Shift+T\` → Claude |

## Terminal Integrado

JetBrains tem terminal integrado excelente:

\`\`\`
View → Tool Windows → Terminal
ou
Alt + F12
\`\`\`

No terminal integrado, rode Claude normalmente:

\`\`\`bash
claude "refatore a classe UserService"
\`\`\`

## Run Configurations

Crie Run Configurations para tarefas comuns:

\`\`\`xml
<!-- .idea/runConfigurations/Claude_Review.xml -->
<component name="ProjectRunConfigurationManager">
  <configuration name="Claude Review" type="ShConfigurationType">
    <option name="SCRIPT_TEXT" value="claude 'revise este projeto'" />
    <option name="SCRIPT_WORKING_DIRECTORY" value="$PROJECT_DIR$" />
  </configuration>
</component>
\`\`\`

## Live Templates

Crie templates para prompts comuns:

\`\`\`
Editor → Live Templates → Adicionar:

Abbreviation: clr
Template: // TODO: claude refactor - $REASON$

Abbreviation: clt
Template: // TODO: claude test - $DESCRIPTION$

Abbreviation: cle
Template: // TODO: claude explain - $WHAT$
\`\`\`

## Integração com Git

JetBrains tem a melhor integração Git visual:

\`\`\`
1. Claude faz mudanças via terminal
2. Git → Commit (Ctrl+K)
3. Veja diff visual de todas mudanças
4. Revise antes de commitar
\`\`\`

## Dicas por IDE

### IntelliJ IDEA (Java/Kotlin)

\`\`\`bash
# Claude entende bem anotações Java
claude "adicione @NotNull e @Nullable apropriadamente"
claude "converta para Kotlin idiomático"
\`\`\`

### PyCharm (Python)

\`\`\`bash
# Claude entende type hints
claude "adicione type hints completos"
claude "converta para async/await"
\`\`\`

### WebStorm (JavaScript/TypeScript)

\`\`\`bash
# Claude é excelente com TS
claude "adicione tipos TypeScript estritos"
claude "migre para React hooks"
\`\`\`

## Workflow Recomendado

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                   JETBRAINS IDE                          │
│                                                          │
│  ┌───────────────────────┬─────────────────────────┐   │
│  │      EDITOR           │     PROJECT TREE        │   │
│  │                       │     (Alt+1)             │   │
│  │   [código]            │     📁 src/             │   │
│  │                       │        📄 file.ts       │   │
│  └───────────────────────┴─────────────────────────┘   │
│                                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │  TERMINAL (Alt+F12)                              │   │
│  │  $ claude "implemente feature X"                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │  VERSION CONTROL (Alt+9) │ STRUCTURE │ PROBLEMS  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
\`\`\`
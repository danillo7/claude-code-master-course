# Launch Configurations

Launch Configurations salvam seu **layout de abas** para abrir instantaneamente.

## Criando via GUI

1. Configure suas abas como deseja
2. **⌘ + P** → "Save Launch Configuration"
3. Dê um nome descritivo
4. Pronto!

## Abrindo

**⌘ + P** → "Open Launch Configuration" → Selecione

## Exemplos de Configurações

### SPOT AI Development:
\`\`\`
Nome: "SPOT AI Dev"
Layout:
├── Aba 1: ~/spot-council
│   ├── Pane esquerdo: cc-spot
│   └── Pane direito: npm run dev
├── Aba 2: ~/spot-council
│   └── docker logs -f backend
└── Aba 3: ~/spot-council
    └── git status (livre)
\`\`\`

### Curso Claude:
\`\`\`
Nome: "Curso Claude"
Layout:
├── Aba 1: ~/Developer/claude-code-course
│   └── cc-curso
└── Aba 2: ~/Developer/claude-code-course
    └── npm run dev
\`\`\`

### Costa Law Review:
\`\`\`
Nome: "Costa Law"
Layout:
├── Aba 1: ~/iCloud/20-COSTA-LAW
│   └── cc-sandbox (para análise de contratos)
└── Aba 2: ~/iCloud/20-COSTA-LAW
    └── ls -la (navegação)
\`\`\`

## Workflow Matinal

Configure uma Launch Configuration para seu "Morning Setup":

1. Abra SPOT AI com Claude Code
2. Inicie o servidor de dev
3. Abra logs do Docker
4. Execute agenda do dia

Tudo com **um comando**!
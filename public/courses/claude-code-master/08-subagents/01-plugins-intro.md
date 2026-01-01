# Entendendo o Sistema de Plugins

Plugins são **extensões distribuíveis** que adicionam novas capacidades ao Claude Code. Diferente de Skills (que são locais), plugins podem ser compartilhados e instalados por qualquer usuário.

## Arquitetura de Plugins

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    CLAUDE CODE CORE                     │
├─────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ Plugin  │  │ Plugin  │  │ Plugin  │  │ Plugin  │    │
│  │  Auth   │  │   DB    │  │   API   │  │ Custom  │    │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘    │
│       │            │            │            │          │
│  ┌────▼────────────▼────────────▼────────────▼────┐    │
│  │              PLUGIN RUNTIME                    │    │
│  │  - Lifecycle Management                        │    │
│  │  - Hook System                                 │    │
│  │  - Context Injection                           │    │
│  │  - Sandboxed Execution                         │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Skills vs Plugins vs MCPs

| Aspecto | Skills | Plugins | MCPs |
|---------|--------|---------|------|
| **Escopo** | Usuário local | Distribuível | Protocolo padrão |
| **Formato** | Markdown | Package | JSON-RPC |
| **Instalação** | ~/.claude/skills/ | npm/registry | Configuração |
| **Compartilhamento** | Manual | npm publish | Servidores |
| **Complexidade** | Baixa | Média | Alta |
| **Use case** | Workflows pessoais | Extensões comuns | Integrações enterprise |

## Tipos de Plugins

### 1. Command Plugins
Adicionam novos comandos ao Claude Code:

\`\`\`typescript
// plugin-git-flow/index.ts
export default {
  name: 'git-flow',
  commands: {
    'feature': {
      description: 'Create feature branch with convention',
      handler: async (args, context) => {
        const branchName = \`feature/\${args.name}\`;
        await context.exec(\`git checkout -b \${branchName}\`);
        return \`Created branch: \${branchName}\`;
      }
    }
  }
};
\`\`\`

### 2. Provider Plugins
Integram com serviços externos:

\`\`\`typescript
// plugin-jira/index.ts
export default {
  name: 'jira-integration',
  providers: {
    'issues': {
      fetch: async (query) => {
        // Buscar issues do Jira
        return await jiraClient.search(query);
      }
    }
  }
};
\`\`\`

### 3. Hook Plugins
Interceptam eventos do Claude Code:

\`\`\`typescript
// plugin-security-scan/index.ts
export default {
  name: 'security-scan',
  hooks: {
    'pre-commit': async (files, context) => {
      const results = await scanForSecrets(files);
      if (results.length > 0) {
        throw new Error('Secrets detected in commit!');
      }
    }
  }
};
\`\`\`

### 4. UI Plugins
Adicionam elementos visuais:

\`\`\`typescript
// plugin-dashboard/index.ts
export default {
  name: 'project-dashboard',
  ui: {
    panels: [{
      position: 'sidebar',
      render: (context) => {
        return DashboardComponent({ project: context.project });
      }
    }]
  }
};
\`\`\`

## Estrutura de um Plugin

\`\`\`
my-plugin/
├── package.json          # Manifest e dependências
├── src/
│   ├── index.ts          # Entry point
│   ├── commands/         # Comandos do plugin
│   ├── providers/        # Provedores de dados
│   ├── hooks/            # Event handlers
│   └── ui/               # Componentes UI (opcional)
├── tests/                # Testes
├── README.md             # Documentação
└── LICENSE               # Licença
\`\`\`

## Plugin Manifest (package.json)

\`\`\`json
{
  "name": "@myorg/claude-plugin-example",
  "version": "1.0.0",
  "description": "Example Claude Code plugin",
  "main": "dist/index.js",
  "claude": {
    "type": "plugin",
    "minVersion": "1.0.0",
    "permissions": [
      "filesystem:read",
      "network:fetch",
      "git:read"
    ],
    "provides": {
      "commands": ["my-command"],
      "hooks": ["pre-commit"],
      "providers": ["my-data"]
    }
  },
  "keywords": ["claude-code-plugin"],
  "license": "MIT"
}
\`\`\`

## Instalando Plugins

\`\`\`bash
# Via npm registry
claude plugin install @anthropic/plugin-example

# Via GitHub
claude plugin install github:user/repo

# Via arquivo local
claude plugin install ./my-local-plugin

# Listar plugins instalados
claude plugin list

# Remover plugin
claude plugin remove @anthropic/plugin-example
\`\`\`

## Segurança de Plugins

> **Importante:** Plugins executam código no seu sistema. Sempre verifique a fonte antes de instalar.

### Sistema de Permissões

\`\`\`typescript
// Plugins declaram permissões necessárias
{
  "permissions": [
    "filesystem:read",       // Ler arquivos
    "filesystem:write",      // Escrever arquivos
    "network:fetch",         // Fazer requests HTTP
    "git:read",              // Ler repositório git
    "git:write",             // Modificar git
    "exec:safe",             // Executar comandos safe-listed
    "exec:any"               // Executar qualquer comando (PERIGOSO)
  ]
}
\`\`\`

### Verificação de Plugins

\`\`\`bash
# Verificar assinatura do plugin
claude plugin verify @anthropic/plugin-example

# Ver permissões antes de instalar
claude plugin inspect github:user/repo

# Plugins verificados pela Anthropic
claude plugin search --verified
\`\`\`

## Resumo

| Conceito | Descrição |
|----------|-----------|
| **Plugin** | Extensão distribuível que adiciona funcionalidades |
| **Manifest** | package.json com configuração claude |
| **Permissions** | Declaração de acessos necessários |
| **Commands** | Novos comandos disponíveis |
| **Providers** | Integrações com serviços externos |
| **Hooks** | Interceptação de eventos |
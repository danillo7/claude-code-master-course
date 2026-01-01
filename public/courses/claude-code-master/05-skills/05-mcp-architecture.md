# Arquitetura de MCPs

## Como MCPs Funcionam

\`\`\`
┌─────────────────┐
│   Claude Code   │
│   (Cliente)     │
└────────┬────────┘
         │ JSON-RPC
         ▼
┌─────────────────┐
│   MCP Server    │
│   (Processo)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Serviço Real   │
│  (API, DB, etc) │
└─────────────────┘
\`\`\`

## Anatomia de um MCP

Um MCP expõe 3 tipos de capabilities:

### 1. Tools (Ferramentas)
Ações que podem ser executadas:
\`\`\`json
{
  "name": "create_file",
  "description": "Cria um novo arquivo",
  "inputSchema": {
    "type": "object",
    "properties": {
      "path": { "type": "string" },
      "content": { "type": "string" }
    }
  }
}
\`\`\`

### 2. Resources (Recursos)
Dados que podem ser lidos:
\`\`\`json
{
  "uri": "file:///Users/me/project",
  "name": "Project Directory",
  "mimeType": "application/json"
}
\`\`\`

### 3. Prompts (Templates)
Templates reutilizáveis:
\`\`\`json
{
  "name": "code-review",
  "description": "Template para code review",
  "arguments": [
    { "name": "language", "required": true }
  ]
}
\`\`\`

## Criando um MCP Simples

### 1. Setup do Projeto

\`\`\`bash
mkdir mcp-custom && cd mcp-custom
npm init -y
npm install @modelcontextprotocol/sdk
\`\`\`

### 2. Código Base

\`\`\`typescript
// index.ts
import { Server } from '@modelcontextprotocol/sdk/server';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio';

const server = new Server({
  name: 'mcp-custom',
  version: '1.0.0'
}, {
  capabilities: {
    tools: {}
  }
});

// Registrar uma tool
server.setRequestHandler('tools/list', async () => ({
  tools: [{
    name: 'hello',
    description: 'Diz olá',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' }
      }
    }
  }]
}));

server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'hello') {
    const name = request.params.arguments?.name || 'World';
    return { content: [{ type: 'text', text: \`Hello, \${name}!\` }] };
  }
});

// Iniciar servidor
const transport = new StdioServerTransport();
server.connect(transport);
\`\`\`

### 3. Registrar no Claude

\`\`\`bash
claude mcp add custom -s user -- node /path/to/mcp-custom/index.js
\`\`\`

## Boas Práticas

| Prática | Descrição |
|---------|-----------|
| **Escopo mínimo** | Expor apenas o necessário |
| **Validação** | Validar todos os inputs |
| **Erros claros** | Mensagens de erro úteis |
| **Documentação** | Descriptions completas |
| **Idempotência** | Operações seguras para retry |

## Debug de MCPs

\`\`\`bash
# Ver logs do MCP
claude mcp logs memory

# Testar conexão
claude mcp test github

# Listar capabilities
claude mcp describe filesystem
\`\`\`

## Estrutura de Projeto MCP

\`\`\`
mcp-custom/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts      # Entry point
│   ├── tools/        # Tool handlers
│   ├── resources/    # Resource providers
│   └── prompts/      # Prompt templates
└── README.md
\`\`\`
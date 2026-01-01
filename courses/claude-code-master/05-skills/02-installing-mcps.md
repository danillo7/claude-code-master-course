# Instalando MCPs

## Via CLI

\`\`\`bash
# Sintaxe
claude mcp add <nome> -s <escopo> -- <comando>

# Exemplos
claude mcp add memory -s user -- npx -y @anthropic-ai/mcp-memory
claude mcp add github -s user -- npx -y @anthropic-ai/mcp-github
claude mcp add brave -s user -- npx -y @anthropic-ai/mcp-brave-search
\`\`\`

## Via settings.json

\`\`\`json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-memory"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-github"],
      "env": {
        "GITHUB_TOKEN": "$GITHUB_TOKEN"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://..."
      }
    }
  }
}
\`\`\`

## Escopos

| Escopo | Localização | Uso |
|--------|-------------|-----|
| \`user\` | \`~/.claude/\` | Todas as sessões |
| \`project\` | \`./claude/\` | Este projeto apenas |

## Verificando Instalação

\`\`\`bash
# Listar MCPs
claude mcp list

# Testar MCP
claude mcp test memory
\`\`\`
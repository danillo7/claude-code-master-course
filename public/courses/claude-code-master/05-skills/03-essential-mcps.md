# MCPs Essenciais - O Kit TOP 1%

Estes são os MCPs que transformam Claude Code de uma ferramenta boa para uma **máquina de produtividade**.

## 1. Memory MCP - Persistência Entre Sessões

\`\`\`bash
claude mcp add memory -s user -- npx -y @anthropic-ai/mcp-memory
\`\`\`

**O que faz:**
- Persiste contexto entre sessões
- Lembra preferências, decisões, padrões
- Cria knowledge graph automático

**Uso prático:**
\`\`\`
"Lembre que uso Tailwind com design system custom"
"Consulte o memory sobre minhas preferências de código"
\`\`\`

## 2. GitHub MCP - Operações Git Avançadas

\`\`\`bash
claude mcp add github -s user -- npx -y @anthropic-ai/mcp-github
\`\`\`

**Capabilities:**
- Criar/gerenciar PRs e issues
- Code review automatizado
- Buscar código em repos
- Gerenciar branches

**Uso prático:**
\`\`\`
"Crie um PR para a branch feature/auth"
"Liste as issues abertas com label bug"
"Faça review do PR #42"
\`\`\`

## 3. Filesystem MCP - Acesso Estruturado

\`\`\`bash
claude mcp add filesystem -s user -- npx -y @anthropic-ai/mcp-filesystem ~/Documents ~/Projects
\`\`\`

**O que adiciona:**
- Navegação estruturada de diretórios
- Leitura/escrita com permissões
- Tree view de projetos

## 4. Brave Search MCP - Pesquisa Web

\`\`\`bash
claude mcp add brave-search -s user -- npx -y @anthropic-ai/mcp-brave-search
\`\`\`

**Para que serve:**
- Pesquisar documentação atualizada
- Buscar soluções para erros
- Encontrar APIs e bibliotecas

## Comparativo: Com vs Sem MCPs

| Tarefa | Sem MCPs | Com MCPs |
|--------|----------|----------|
| Lembrar preferências | Repetir toda sessão | Automático |
| Criar PR | Comandos manuais | "Crie um PR" |
| Pesquisar docs | Sair do terminal | Inline |
| Acessar arquivos | Paths manuais | Navegação inteligente |

## Configuração Completa

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
      "env": { "GITHUB_TOKEN": "\${GITHUB_TOKEN}" }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-filesystem", "~"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-brave-search"],
      "env": { "BRAVE_API_KEY": "\${BRAVE_API_KEY}" }
    }
  }
}
\`\`\`

> **Pro Tip:** Configure todos os 4 MCPs essenciais e veja sua produtividade multiplicar!
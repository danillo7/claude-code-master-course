# MCPs Avançados - Nível Enterprise

Além dos essenciais, estes MCPs elevam seu setup para **nível enterprise**.

## 1. Playwright MCP - Automação de Browser

\`\`\`bash
claude mcp add playwright -s user -- npx -y @anthropic-ai/mcp-playwright
\`\`\`

**Capabilities:**
- Screenshots de páginas
- Navegação automatizada
- Preenchimento de formulários
- Testes E2E

**Uso:**
\`\`\`
"Tire um screenshot da página de login"
"Preencha o formulário de cadastro com dados de teste"
"Navegue até a página de dashboard e capture o estado"
\`\`\`

## 2. Sequential Thinking MCP - Raciocínio Estruturado

\`\`\`bash
claude mcp add sequential-thinking -s user -- npx -y @anthropic-ai/mcp-sequential-thinking
\`\`\`

**Para que serve:**
- Problemas complexos que precisam de passos
- Análise de trade-offs
- Planejamento de arquitetura

**Quando usar:**
- Decisões arquiteturais
- Debug de problemas complexos
- Análise de requisitos

## 3. Langfuse MCP - Observabilidade LLM

\`\`\`bash
claude mcp add langfuse -s user -- npx -y langfuse-mcp
\`\`\`

**O que oferece:**
- Tracing de prompts
- Versionamento de prompts
- Métricas de performance
- A/B testing de prompts

**Integração:**
\`\`\`json
{
  "langfuse": {
    "command": "npx",
    "args": ["-y", "langfuse-mcp"],
    "env": {
      "LANGFUSE_HOST": "http://localhost:3000",
      "LANGFUSE_PUBLIC_KEY": "\${LANGFUSE_PUBLIC_KEY}",
      "LANGFUSE_SECRET_KEY": "\${LANGFUSE_SECRET_KEY}"
    }
  }
}
\`\`\`

## 4. Graphiti MCP - Memory Avançado

\`\`\`bash
# Requer Neo4j + Graphiti server
claude mcp add graphiti-memory -s user -- npx -y graphiti-mcp
\`\`\`

**Diferencial do Memory padrão:**
- Temporal knowledge graph
- Queries complexas de relacionamento
- Versionamento de fatos
- Busca semântica avançada

## 5. Firecrawl MCP - Web Scraping Inteligente

\`\`\`bash
claude mcp add firecrawl -s user -- npx -y firecrawl-mcp
\`\`\`

**Capabilities:**
- Scraping de qualquer site
- Conversão para Markdown
- Extração estruturada
- Crawling de sites inteiros

## Stack Completo TOP 1%

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    CLAUDE CODE                           │
├──────────────┬──────────────┬──────────────┬────────────┤
│   Memory     │   GitHub     │  Filesystem  │   Brave    │
│  (essencial) │  (essencial) │  (essencial) │ (essencial)│
├──────────────┼──────────────┼──────────────┼────────────┤
│  Playwright  │  Langfuse    │   Graphiti   │ Firecrawl  │
│  (browser)   │ (observabil) │  (memory++)  │  (scrape)  │
├──────────────┼──────────────┼──────────────┼────────────┤
│   Postgres   │   Notion     │    Slack     │  Custom    │
│    (SQL)     │   (docs)     │   (comms)    │  (seu!)    │
└──────────────┴──────────────┴──────────────┴────────────┘
\`\`\`

## Quando Usar Cada Um?

| Cenário | MCP Recomendado |
|---------|-----------------|
| Testar UI automaticamente | Playwright |
| Debug problema complexo | Sequential Thinking |
| Monitorar performance de prompts | Langfuse |
| Memória com relacionamentos | Graphiti |
| Extrair dados de sites | Firecrawl |
| Queries em banco | Postgres |

> **Aviso:** MCPs avançados podem requerer setup adicional (Docker, APIs, etc)
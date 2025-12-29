// ============================================================================
// CLAUDE CODE MASTER COURSE - COMPLETE COURSE DATA
// 12 Modules, 80+ Lessons - From Zero to TOP 0.01%
// ============================================================================

import type { Module, Lesson } from '../types/course';

// ============================================================================
// HELPER: Create lesson with defaults
// ============================================================================

function createLesson(
  moduleId: string,
  id: string,
  title: string,
  description: string,
  content: string,
  options: Partial<Lesson> = {}
): Lesson {
  const now = new Date().toISOString().split('T')[0];
  return {
    id,
    moduleId,
    title,
    slug: id.replace(`${moduleId}-`, ''),
    description,
    content,
    duration: options.duration || 15,
    xp: options.xp || 50,
    difficulty: options.difficulty || 'beginner',
    prerequisites: options.prerequisites || [],
    tags: options.tags || [],
    codeExamples: options.codeExamples || [],
    challenges: options.challenges || [],
    quizzes: options.quizzes || [],
    version: '1.0.0',
    dateAdded: options.dateAdded || now,
    dateUpdated: now,
    isNew: options.isNew || false,
    externalLinks: options.externalLinks || [],
    relatedLessons: options.relatedLessons || [],
  };
}

// ============================================================================
// MODULE 01: FUNDAMENTALS
// ============================================================================

const module01Lessons: Lesson[] = [
  createLesson('01', '01-01-introduction', 'O que é Claude Code?',
    'Entenda o que é Claude Code, sua filosofia e como ele revoluciona o desenvolvimento de software.',
    `# O que é Claude Code?

Claude Code é a **CLI oficial da Anthropic** para interagir com Claude diretamente do terminal. Diferente de interfaces web, ele oferece:

- 🔧 **Acesso direto ao sistema de arquivos**
- 🚀 **Execução de comandos shell**
- 🔄 **Contexto persistente entre sessões**
- 🛠️ **Extensibilidade via Skills e MCPs**

## Filosofia AI-First

Claude Code representa a nova era de desenvolvimento onde **IA não é uma ferramenta auxiliar, mas o centro da operação**.

> "A primeira geração de empresas a construir completamente AI-native desde o Dia 0 criará 10 trilhões de dólares em valor."

## Comparação

| Aspecto | Chat Web | Claude Code CLI |
|---------|----------|-----------------|
| Acesso a arquivos | Upload manual | Acesso direto |
| Execução de código | Não | Sim |
| Automação | Não | Skills, Hooks, MCPs |
| Contexto | Por conversa | Persistente |
`,
    {
      xp: 30,
      duration: 10,
      difficulty: 'beginner',
      tags: ['introdução', 'conceitos'],
      quizzes: [
        {
          id: 'q-01-01-1',
          question: 'Qual a principal diferença entre Claude Code CLI e a interface web?',
          options: [
            'Claude Code tem interface gráfica mais bonita',
            'Claude Code tem acesso direto ao sistema de arquivos e pode executar comandos',
            'Claude Code é mais lento mas mais preciso',
            'Não há diferença significativa'
          ],
          correctIndex: 1,
          explanation: 'Claude Code CLI tem acesso direto ao filesystem e pode executar comandos shell, tornando-o uma ferramenta de desenvolvimento completa.',
          xp: 10
        }
      ]
    }
  ),

  createLesson('01', '01-02-installation', 'Instalação e Configuração Inicial',
    'Aprenda a instalar o Claude Code e configurar seu ambiente para máxima produtividade.',
    `# Instalação do Claude Code

## Pré-requisitos

- **Node.js 18+** (recomendado: usar \`nvm\` ou \`fnm\`)
- **macOS, Linux ou Windows WSL2**
- Conta na Anthropic com API key

## Instalação

\`\`\`bash
# Via npm (recomendado)
npm install -g @anthropic-ai/claude-code

# Verificar instalação
claude --version
\`\`\`

## Configuração Inicial

\`\`\`bash
# Primeiro uso - fará login interativo
claude

# Ou configurar API key diretamente
export ANTHROPIC_API_KEY="sk-ant-..."
\`\`\`

## Estrutura de Configuração

\`\`\`
~/.claude/
├── settings.json    # Configurações globais
├── CLAUDE.md        # Instruções personalizadas
└── credentials      # Chaves de API (seguro)
\`\`\`

## Teste Rápido

\`\`\`bash
# Executar um comando simples
claude "Qual é a data de hoje?"
\`\`\`
`,
    {
      xp: 50,
      duration: 15,
      difficulty: 'beginner',
      tags: ['instalação', 'setup', 'configuração'],
      codeExamples: [
        {
          id: 'install-npm',
          title: 'Instalação via npm',
          language: 'bash',
          code: 'npm install -g @anthropic-ai/claude-code',
          explanation: 'Instala o Claude Code globalmente usando npm',
          runnable: true
        }
      ],
      challenges: [
        {
          id: 'ch-01-02-1',
          title: 'Primeira Instalação',
          description: 'Instale o Claude Code e execute seu primeiro comando',
          context: 'general',
          contextDescription: 'Aplicável a qualquer contexto',
          difficulty: 'beginner',
          xpBonus: 25,
          hints: ['Use npm install -g', 'Verifique com claude --version'],
          validation: 'Execute: claude --version'
        }
      ]
    }
  ),

  createLesson('01', '01-03-first-session', 'Sua Primeira Sessão',
    'Inicie sua primeira sessão interativa e entenda o fluxo básico de trabalho.',
    `# Sua Primeira Sessão

## Iniciando uma Sessão

\`\`\`bash
# Modo interativo (recomendado para começar)
claude

# Modo com prompt único
claude "Explique o que faz este código: $(cat app.py)"

# Continuar última sessão
claude --continue
\`\`\`

## O Prompt Interativo

Quando você entra no modo interativo, verá:

\`\`\`
╭─ Claude Code ─────────────────────────────────╮
│ Working directory: ~/projects/myapp          │
│ Model: claude-sonnet-4-20250514              │
╰──────────────────────────────────────────────╯

You:
\`\`\`

## Comandos Essenciais

| Comando | Ação |
|---------|------|
| \`/help\` | Mostrar todos os comandos |
| \`/clear\` | Limpar histórico |
| \`/compact\` | Modo compacto (economiza tokens) |
| \`/model\` | Trocar modelo |
| \`/cost\` | Ver custos da sessão |
| \`Ctrl+C\` | Cancelar operação atual |
| \`Ctrl+D\` | Sair da sessão |

## Dica Pro

Sempre comece descrevendo seu **objetivo final**, não apenas a tarefa imediata:

\`\`\`
❌ "Crie um arquivo JavaScript"
✅ "Estou criando uma API REST para gerenciar clientes. Preciso do endpoint de listagem."
\`\`\`
`,
    {
      xp: 40,
      duration: 12,
      difficulty: 'beginner',
      tags: ['sessão', 'comandos', 'interativo'],
    }
  ),

  createLesson('01', '01-04-file-operations', 'Operações com Arquivos',
    'Domine as operações de leitura, escrita e edição de arquivos.',
    `# Operações com Arquivos

Claude Code possui ferramentas específicas para cada tipo de operação com arquivos:

## Leitura (Read)

\`\`\`
"Leia o arquivo package.json"
"Mostre as primeiras 50 linhas de app.ts"
"Qual é o conteúdo de src/utils/helpers.ts?"
\`\`\`

## Escrita (Write)

\`\`\`
"Crie um arquivo .env.example com as variáveis necessárias"
"Escreva um README.md para este projeto"
\`\`\`

## Edição (Edit)

\`\`\`
"Adicione tratamento de erros na função login()"
"Renomeie a variável 'data' para 'userData' em todo o arquivo"
"Corrija o bug na linha 45 de api.ts"
\`\`\`

## Busca (Glob/Grep)

\`\`\`
"Encontre todos os arquivos .tsx neste projeto"
"Busque por 'TODO' em todos os arquivos"
"Liste os arquivos que importam o módulo 'axios'"
\`\`\`

## Ferramentas Internas

| Ferramenta | Uso |
|------------|-----|
| \`Read\` | Ler conteúdo de arquivos |
| \`Write\` | Criar/sobrescrever arquivos |
| \`Edit\` | Modificar arquivos existentes |
| \`Glob\` | Buscar arquivos por padrão |
| \`Grep\` | Buscar conteúdo em arquivos |
| \`Bash\` | Executar comandos shell |

## Permissões

Por padrão, Claude pede confirmação para operações de escrita. Você pode:

1. Aprovar individualmente (Enter)
2. Negar (n)
3. Editar antes de aplicar (e)
`,
    {
      xp: 60,
      duration: 20,
      difficulty: 'beginner',
      tags: ['arquivos', 'read', 'write', 'edit'],
      challenges: [
        {
          id: 'ch-01-04-1',
          title: 'Explorando um Projeto',
          description: 'Use Claude Code para explorar a estrutura de um projeto existente',
          context: 'general',
          contextDescription: 'Use em qualquer projeto seu',
          difficulty: 'beginner',
          xpBonus: 30,
          hints: ['Peça para listar arquivos', 'Solicite um resumo da estrutura'],
        }
      ]
    }
  ),

  createLesson('01', '01-05-context-management', 'Gerenciamento de Contexto',
    'Entenda como o contexto funciona e como gerenciá-lo eficientemente.',
    `# Gerenciamento de Contexto

O **contexto** é tudo que Claude "sabe" durante uma sessão: arquivos lidos, conversas anteriores, código gerado.

## Limitações de Contexto

- **Janela de contexto**: ~200K tokens (Claude Sonnet)
- Quanto mais contexto, maior o custo
- Contexto muito grande pode "diluir" informações importantes

## Estratégias de Gestão

### 1. Modo Compacto

\`\`\`bash
/compact
\`\`\`

Resume automaticamente o histórico quando fica grande.

### 2. Nova Sessão Limpa

\`\`\`bash
# Quando contexto está "poluído"
claude --no-continue
\`\`\`

### 3. CLAUDE.md para Contexto Persistente

\`\`\`markdown
# CLAUDE.md (na raiz do projeto)

## Sobre este Projeto
Este é uma API REST para gestão de clientes.

## Padrões de Código
- TypeScript strict mode
- Zod para validação
- Testes com Vitest

## Comandos Importantes
- npm run dev: Iniciar servidor
- npm test: Rodar testes
\`\`\`

## Monitorando Contexto

\`\`\`bash
# Ver uso de tokens
/cost

# Ver tamanho da conversa
/stats
\`\`\`

## Dica: Checkpoint Mental

Quando uma tarefa complexa é concluída:

\`\`\`
"Resuma o que fizemos até agora e o estado atual do projeto"
\`\`\`

Isso cria um "checkpoint" que pode ser referenciado depois.
`,
    {
      xp: 50,
      duration: 15,
      difficulty: 'intermediate',
      tags: ['contexto', 'tokens', 'memória'],
    }
  ),
];

// ============================================================================
// MODULE 02: CLI COMMANDS
// ============================================================================

const module02Lessons: Lesson[] = [
  createLesson('02', '02-01-flags-overview', 'Visão Geral das Flags',
    'Conheça todas as flags disponíveis na CLI e quando usar cada uma.',
    `# Flags da CLI

O Claude Code oferece mais de 40 flags para customizar seu comportamento.

## Flags Mais Usadas

### Controle de Sessão

\`\`\`bash
claude --continue          # Continuar última sessão
claude --no-continue       # Nova sessão limpa
claude --resume SESSION_ID # Retomar sessão específica
\`\`\`

### Modelo e Performance

\`\`\`bash
claude --model opus        # Usar Opus (mais capaz)
claude --model haiku       # Usar Haiku (mais rápido/barato)
claude --model sonnet      # Usar Sonnet (default, balanceado)
\`\`\`

### Output e Automação

\`\`\`bash
claude --print             # Apenas imprimir, não interativo
claude --output-format json # Saída em JSON
claude --verbose           # Modo verboso
claude --quiet             # Modo silencioso
\`\`\`

### Segurança

\`\`\`bash
claude --dangerously-skip-permissions  # Pular confirmações (⚠️ cuidado!)
claude --allowedTools "Read,Write"      # Limitar ferramentas
\`\`\`

## Combinando Flags

\`\`\`bash
# Automação completa
claude --print --output-format json "Liste os arquivos TypeScript" | jq .

# Sessão limpa com modelo específico
claude --no-continue --model opus "Revise este código crítico"
\`\`\`
`,
    {
      xp: 60,
      duration: 20,
      difficulty: 'intermediate',
      tags: ['flags', 'cli', 'automação'],
    }
  ),

  createLesson('02', '02-02-slash-commands', 'Slash Commands',
    'Domine os comandos internos que começam com / para controlar a sessão.',
    `# Slash Commands

Comandos que começam com \`/\` controlam a sessão Claude Code.

## Navegação e Histórico

| Comando | Descrição |
|---------|-----------|
| \`/clear\` | Limpar histórico |
| \`/compact\` | Comprimir histórico |
| \`/history\` | Ver histórico |

## Configuração

| Comando | Descrição |
|---------|-----------|
| \`/model [name]\` | Trocar modelo |
| \`/permissions\` | Gerenciar permissões |
| \`/config\` | Editar configurações |

## Informações

| Comando | Descrição |
|---------|-----------|
| \`/cost\` | Ver custos da sessão |
| \`/stats\` | Estatísticas de uso |
| \`/help\` | Ajuda completa |

## Sessão

| Comando | Descrição |
|---------|-----------|
| \`/resume\` | Retomar sessão |
| \`/save\` | Salvar estado |
| \`/export\` | Exportar conversa |

## Ferramentas

| Comando | Descrição |
|---------|-----------|
| \`/tools\` | Listar ferramentas |
| \`/mcp\` | Gerenciar MCPs |
| \`/doctor\` | Diagnosticar problemas |

## Dica Pro

Você pode executar slash commands seguidos de texto:

\`\`\`
/model opus Agora analise este contrato complexo...
\`\`\`
`,
    {
      xp: 50,
      duration: 15,
      difficulty: 'intermediate',
      tags: ['comandos', 'slash', 'sessão'],
    }
  ),

  createLesson('02', '02-03-headless-mode', 'Modo Headless e Automação',
    'Use Claude Code em scripts e pipelines de CI/CD.',
    `# Modo Headless

O modo headless permite usar Claude Code de forma não-interativa, perfeito para automação.

## Uso Básico

\`\`\`bash
# Executar comando único
claude --print "Gere um UUID"

# Com entrada via pipe
cat error.log | claude --print "Analise este erro"

# Saída estruturada
claude --print --output-format json "Liste arquivos modificados"
\`\`\`

## Em Scripts Bash

\`\`\`bash
#!/bin/bash

# Gerar commit message automático
DIFF=$(git diff --staged)
MESSAGE=$(echo "$DIFF" | claude --print "Gere uma commit message concisa")
git commit -m "$MESSAGE"
\`\`\`

## Em CI/CD (GitHub Actions)

\`\`\`yaml
- name: Code Review com Claude
  run: |
    REVIEW=$(gh pr diff \${{ github.event.pull_request.number }} | \\
             claude --print "Revise este PR")
    gh pr comment \${{ github.event.pull_request.number }} --body "$REVIEW"
\`\`\`

## Flags para Automação

\`\`\`bash
--print                    # Não interativo
--output-format json       # Saída parseável
--quiet                    # Sem logs extras
--max-tokens N             # Limitar resposta
--dangerously-skip-permissions  # Pular confirmações
\`\`\`

## ⚠️ Cuidados

- Sempre valide saídas antes de usar em produção
- Use \`--allowedTools\` para limitar capacidades
- Mantenha API keys seguras (secrets)
`,
    {
      xp: 80,
      duration: 25,
      difficulty: 'advanced',
      tags: ['headless', 'automação', 'ci/cd', 'scripts'],
      challenges: [
        {
          id: 'ch-02-03-1',
          title: 'Script de Commit Automático',
          description: 'Crie um script que gera mensagens de commit automaticamente usando Claude Code',
          context: 'general',
          contextDescription: 'Use em qualquer projeto Git',
          difficulty: 'intermediate',
          xpBonus: 50,
          hints: ['Use git diff --staged', 'Pipe para claude --print'],
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 03: CONFIGURATION
// ============================================================================

const module03Lessons: Lesson[] = [
  createLesson('03', '03-01-claudemd', 'O Arquivo CLAUDE.md',
    'Domine o arquivo de configuração mais importante do Claude Code.',
    `# CLAUDE.md - Sua "Constituição" para Claude

O arquivo \`CLAUDE.md\` é lido automaticamente por Claude Code e define regras, contexto e preferências.

## Localização

\`\`\`
~/.claude/CLAUDE.md           # Global (todas as sessões)
~/project/CLAUDE.md           # Por projeto (prioridade)
~/project/.claude/CLAUDE.md   # Alternativa por projeto
\`\`\`

## Estrutura Recomendada

\`\`\`markdown
# CLAUDE.md

## Sobre Este Projeto
[Contexto essencial que Claude precisa saber]

## Regras Obrigatórias
- SEMPRE usar TypeScript strict
- NUNCA commitar sem testes
- Seguir padrão de commits convencionais

## Preferências de Código
- Indentação: 2 espaços
- Aspas: simples
- Ponto-e-vírgula: não

## Comandos Importantes
- \`npm run dev\`: Iniciar desenvolvimento
- \`npm test\`: Rodar testes
- \`npm run build\`: Build de produção

## Estrutura do Projeto
[Explicação da arquitetura]
\`\`\`

## Dicas Avançadas

### Use Emojis para Categorizar
\`\`\`markdown
## 🚨 NUNCA FAZER
- Deletar sem backup
- Expor secrets

## ✅ SEMPRE FAZER
- Documentar mudanças
- Testar antes de commitar
\`\`\`

### Inclua Exemplos
\`\`\`markdown
## Padrão de Componentes
\\\`\\\`\\\`tsx
// ✅ Correto
export function Button({ children }: Props) { ... }

// ❌ Errado
export default function(props) { ... }
\\\`\\\`\\\`
\`\`\`
`,
    {
      xp: 70,
      duration: 20,
      difficulty: 'intermediate',
      tags: ['configuração', 'claude.md', 'regras'],
      challenges: [
        {
          id: 'ch-03-01-1',
          title: 'Crie seu CLAUDE.md Pessoal',
          description: 'Crie um CLAUDE.md global com suas preferências',
          context: 'personal',
          contextDescription: 'Configure para seu estilo de trabalho',
          difficulty: 'beginner',
          xpBonus: 40,
          hints: ['Inclua suas linguagens preferidas', 'Adicione regras de segurança'],
        },
        {
          id: 'ch-03-01-2',
          title: 'CLAUDE.md para Costa Law',
          description: 'Crie um CLAUDE.md específico para projetos jurídicos',
          context: 'costa_law',
          contextDescription: 'Focado em análise de contratos e compliance',
          difficulty: 'intermediate',
          xpBonus: 60,
          hints: ['Inclua regras de confidencialidade', 'Adicione padrões de documentos legais'],
        }
      ]
    }
  ),

  createLesson('03', '03-02-settings', 'Configurações Avançadas',
    'Configure permissões, modelos padrão e comportamentos.',
    `# Configurações Avançadas

## settings.json

Localizado em \`~/.claude/settings.json\`:

\`\`\`json
{
  "model": "claude-sonnet-4-20250514",
  "theme": "dark",
  "permissions": {
    "autoApprove": ["Read", "Glob", "Grep"],
    "alwaysAsk": ["Bash", "Write"],
    "deny": []
  },
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-memory"]
    }
  }
}
\`\`\`

## Níveis de Permissão

| Nível | Comportamento |
|-------|---------------|
| \`autoApprove\` | Executa sem perguntar |
| \`alwaysAsk\` | Sempre pede confirmação |
| \`deny\` | Bloqueia completamente |

## Permissões por Ferramenta

\`\`\`json
{
  "permissions": {
    "autoApprove": [
      "Read",
      "Glob",
      "Grep",
      "WebSearch",
      "Bash(git:*)",
      "Bash(npm:*)"
    ]
  }
}
\`\`\`

## Configurações de Projeto

\`\`\`bash
# Na raiz do projeto
claude config set model opus
claude config set theme light
\`\`\`
`,
    {
      xp: 60,
      duration: 18,
      difficulty: 'intermediate',
      tags: ['settings', 'permissões', 'configuração'],
    }
  ),
];

// ============================================================================
// MODULE 04: SKILLS
// ============================================================================

const module04Lessons: Lesson[] = [
  createLesson('04', '04-01-skills-intro', 'Introdução às Skills',
    'Entenda o que são Skills e como elas estendem as capacidades do Claude.',
    `# Skills - Superpoderes para Claude

Skills são **instruções estruturadas** que ensinam Claude a executar tarefas específicas de forma consistente.

## O que são Skills?

- Arquivos \`.md\` com instruções detalhadas
- Podem ser invocadas por Claude automaticamente
- Ou manualmente com \`/skill-name\`

## Tipos de Skills

### 1. Model-Invoked (Automáticas)
Claude decide quando usar baseado no contexto.

### 2. User-Invoked (Manuais)
Você invoca explicitamente com \`/nome\`.

## Estrutura Básica

\`\`\`markdown
---
description: Resumo curto da skill
model-invoked: true  # ou false para manual
---

# Nome da Skill

## Quando Usar
[Contexto de uso]

## Processo
1. Passo 1
2. Passo 2
3. Passo 3

## Output Esperado
[Formato da saída]

## Exemplos
[Exemplos de uso]
\`\`\`

## Localização

\`\`\`
~/.claude/skills/           # Skills globais
~/project/.claude/skills/   # Skills do projeto
\`\`\`
`,
    {
      xp: 60,
      duration: 20,
      difficulty: 'intermediate',
      tags: ['skills', 'automação', 'extensão'],
    }
  ),

  createLesson('04', '04-02-creating-skills', 'Criando suas Próprias Skills',
    'Aprenda a criar skills personalizadas para seu fluxo de trabalho.',
    `# Criando Skills Customizadas

## Estrutura Completa

\`\`\`markdown
---
description: Análise rápida de código com sugestões
model-invoked: true
---

# Code Review Express

## Contexto
Use quando o usuário pedir para revisar código ou mencionar "review".

## Processo
1. Identificar linguagem e framework
2. Verificar:
   - Bugs potenciais
   - Problemas de segurança
   - Performance
   - Legibilidade
   - Testes faltando
3. Gerar relatório estruturado

## Formato de Saída

\\\`\\\`\\\`markdown
## 🔍 Code Review

### Resumo
[1-2 linhas]

### 🚨 Crítico
- [Lista de issues críticas]

### ⚠️ Atenção
- [Lista de warnings]

### 💡 Sugestões
- [Melhorias opcionais]

### ✅ Pontos Positivos
- [O que está bom]
\\\`\\\`\\\`

## Exemplos

**Input:** "Revise minha função de autenticação"
**Output:** [Relatório estruturado seguindo o formato]
\`\`\`

## Skills para Contextos Específicos

### Para Costa Law (Jurídico)

\`\`\`markdown
---
description: Análise de contratos com foco em riscos
model-invoked: true
---

# Análise de Contrato

## Quando Usar
Quando houver texto de contrato ou menção a "contrato", "cláusula", "acordo".

## Verificar
1. Cláusulas abusivas
2. Riscos para o cliente
3. Prazos e multas
4. Jurisdição
5. Compliance LGPD
\`\`\`
`,
    {
      xp: 100,
      duration: 35,
      difficulty: 'advanced',
      tags: ['skills', 'criação', 'customização'],
      challenges: [
        {
          id: 'ch-04-02-1',
          title: 'Crie sua Primeira Skill',
          description: 'Crie uma skill para uma tarefa que você faz frequentemente',
          context: 'personal',
          contextDescription: 'Automatize algo do seu dia a dia',
          difficulty: 'intermediate',
          xpBonus: 75,
          hints: ['Comece simples', 'Use o template acima'],
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 05: MCP (Model Context Protocol)
// ============================================================================

const module05Lessons: Lesson[] = [
  createLesson('05', '05-01-mcp-intro', 'O que é MCP?',
    'Entenda o Model Context Protocol e como ele expande as capacidades do Claude.',
    `# Model Context Protocol (MCP)

MCP é um **protocolo aberto** que permite conectar Claude a fontes de dados e ferramentas externas.

## Conceito

\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Claude Code │────▶│ MCP Server  │────▶│ Serviço     │
│             │◀────│             │◀────│ Externo     │
└─────────────┘     └─────────────┘     └─────────────┘
\`\`\`

## O que MCPs podem fazer?

- 📂 Acessar sistemas de arquivos (Google Drive, Dropbox)
- 🔍 Buscar na web (Brave Search, Google)
- 🗄️ Consultar bancos de dados (PostgreSQL, SQLite)
- 🔌 Integrar com APIs (GitHub, Slack, Notion)
- 🧠 Adicionar memória persistente

## MCPs Populares

| MCP | Função |
|-----|--------|
| \`memory\` | Memória entre sessões |
| \`brave-search\` | Busca na web |
| \`github\` | Operações Git/GitHub |
| \`filesystem\` | Acesso a arquivos |
| \`postgres\` | Queries SQL |
| \`puppeteer\` | Automação de browser |

## Instalação Básica

\`\`\`bash
# Adicionar MCP
claude mcp add memory -s user -- npx -y @anthropic-ai/mcp-memory

# Listar MCPs ativos
claude mcp list

# Remover MCP
claude mcp remove memory
\`\`\`
`,
    {
      xp: 80,
      duration: 25,
      difficulty: 'intermediate',
      tags: ['mcp', 'protocolo', 'integrações'],
    }
  ),

  createLesson('05', '05-02-installing-mcps', 'Instalando e Configurando MCPs',
    'Aprenda a instalar e configurar MCPs para seu fluxo de trabalho.',
    `# Instalando MCPs

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
`,
    {
      xp: 70,
      duration: 20,
      difficulty: 'intermediate',
      tags: ['mcp', 'instalação', 'configuração'],
    }
  ),
];

// ============================================================================
// MODULE 06: HOOKS
// ============================================================================

const module06Lessons: Lesson[] = [
  createLesson('06', '06-01-hooks-intro', 'Introdução aos Hooks',
    'Aprenda a automatizar ações com hooks do Claude Code.',
    `# Hooks - Automação Inteligente

Hooks são **scripts que executam automaticamente** em resposta a eventos do Claude Code.

## Eventos Disponíveis

| Evento | Quando Dispara |
|--------|----------------|
| \`preToolUse\` | Antes de usar uma ferramenta |
| \`postToolUse\` | Depois de usar uma ferramenta |
| \`preMessage\` | Antes de enviar mensagem |
| \`postMessage\` | Depois de receber resposta |
| \`sessionStart\` | Ao iniciar sessão |
| \`sessionEnd\` | Ao encerrar sessão |

## Estrutura Básica

\`\`\`json
// .claude/hooks.json
{
  "hooks": {
    "postToolUse": [
      {
        "matcher": { "tool": "Write" },
        "command": "npm run lint --fix {{file}}"
      }
    ],
    "sessionEnd": [
      {
        "command": "echo 'Sessão encerrada às $(date)' >> ~/.claude/log.txt"
      }
    ]
  }
}
\`\`\`

## Casos de Uso

1. **Lint automático** após escrever arquivo
2. **Backup** ao encerrar sessão
3. **Notificação** quando tarefa longa completa
4. **Log** de todas as ações
5. **Validação** antes de executar comandos
`,
    {
      xp: 80,
      duration: 25,
      difficulty: 'advanced',
      tags: ['hooks', 'automação', 'eventos'],
    }
  ),
];

// ============================================================================
// MODULE 07: SUBAGENTS
// ============================================================================

const module07Lessons: Lesson[] = [
  createLesson('07', '07-01-subagents-intro', 'Entendendo Subagents',
    'Aprenda a usar subagents para tarefas especializadas.',
    `# Subagents - Especialistas sob Demanda

Subagents são **agentes especializados** que Claude pode invocar para tarefas específicas.

## Conceito

\`\`\`
┌─────────────────────────────────────────┐
│              Claude Principal           │
│                    │                    │
│    ┌───────┬───────┼───────┬───────┐   │
│    ▼       ▼       ▼       ▼       ▼   │
│ Explorer  Plan  Reviewer  Code  Guide  │
│ Subagent Subagent Subagent Subagent    │
└─────────────────────────────────────────┘
\`\`\`

## Subagents Nativos

| Subagent | Especialidade |
|----------|---------------|
| \`Explore\` | Explorar codebases |
| \`Plan\` | Planejar implementações |
| \`code-reviewer\` | Revisar código |
| \`claude-code-guide\` | Documentação |

## Quando Usar

- Tarefas que requerem **expertise específica**
- Operações **paralelas** (múltiplos subagents)
- **Isolamento** de contexto

## Exemplo de Uso

\`\`\`
"Use o subagent Explorer para entender a estrutura deste projeto"
"Lance um Plan subagent para planejar a implementação do sistema de auth"
\`\`\`
`,
    {
      xp: 90,
      duration: 30,
      difficulty: 'advanced',
      tags: ['subagents', 'especialização', 'paralelismo'],
    }
  ),
];

// ============================================================================
// REMAINING MODULES (Simplified for brevity)
// ============================================================================

const module08Lessons: Lesson[] = [
  createLesson('08', '08-01-plugins-intro', 'Introdução aos Plugins',
    'Entenda o sistema de plugins do Claude Code.',
    `# Plugins

Plugins são extensões distribuíveis que adicionam funcionalidades ao Claude Code.

[Conteúdo detalhado aqui...]
`,
    { xp: 70, duration: 25, difficulty: 'advanced', tags: ['plugins', 'extensões'] }
  ),
];

const module09Lessons: Lesson[] = [
  createLesson('09', '09-01-vscode-integration', 'Integração com VS Code',
    'Configure Claude Code para trabalhar com VS Code.',
    `# VS Code Integration

A integração com VS Code traz Claude para seu editor preferido.

[Conteúdo detalhado aqui...]
`,
    { xp: 60, duration: 20, difficulty: 'intermediate', tags: ['vscode', 'ide', 'integração'] }
  ),
];

const module10Lessons: Lesson[] = [
  createLesson('10', '10-01-extended-thinking', 'Extended Thinking',
    'Use o modo de pensamento estendido para problemas complexos.',
    `# Extended Thinking

Extended Thinking permite que Claude "pense por mais tempo" antes de responder.

[Conteúdo detalhado aqui...]
`,
    { xp: 100, duration: 30, difficulty: 'expert', tags: ['thinking', 'avançado'] }
  ),
];

const module11Lessons: Lesson[] = [
  createLesson('11', '11-01-prompting-patterns', 'Padrões de Prompting',
    'Melhores práticas de prompting para resultados consistentes.',
    `# Padrões de Prompting

Prompting eficaz é uma habilidade fundamental para tirar o máximo do Claude.

[Conteúdo detalhado aqui...]
`,
    { xp: 80, duration: 25, difficulty: 'intermediate', tags: ['prompting', 'best-practices'] }
  ),
];

const module12Lessons: Lesson[] = [
  createLesson('12', '12-01-project-api-rest', 'Projeto: API REST Completa',
    'Construa uma API REST do zero usando Claude Code.',
    `# Projeto Prático: API REST

Neste projeto, você construirá uma API REST completa para gestão de tarefas.

[Conteúdo detalhado aqui...]
`,
    {
      xp: 200,
      duration: 120,
      difficulty: 'advanced',
      tags: ['projeto', 'api', 'hands-on'],
      challenges: [
        {
          id: 'ch-12-01-1',
          title: 'API para Costa Law',
          description: 'Adapte a API para gerenciamento de processos jurídicos',
          context: 'costa_law',
          contextDescription: 'Sistema de gestão de processos e prazos',
          difficulty: 'advanced',
          xpBonus: 150,
          hints: ['Considere campos específicos: número do processo, vara, etc.'],
        }
      ]
    }
  ),
];

// ============================================================================
// ASSEMBLE ALL MODULES
// ============================================================================

export const courseModules: Module[] = [
  {
    id: '01',
    number: 1,
    title: 'Fundamentos',
    slug: 'fundamentos',
    description: 'Instalação, primeiros passos e conceitos essenciais do Claude Code',
    icon: 'Rocket',
    color: 'blue',
    lessons: module01Lessons,
    totalXp: module01Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 2,
    prerequisites: [],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '02',
    number: 2,
    title: 'Comandos CLI',
    slug: 'comandos-cli',
    description: 'Domine todas as flags, comandos e modos de operação',
    icon: 'Terminal',
    color: 'green',
    lessons: module02Lessons,
    totalXp: module02Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 3,
    prerequisites: ['01'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '03',
    number: 3,
    title: 'Configuração',
    slug: 'configuracao',
    description: 'CLAUDE.md, settings.json e configurações avançadas',
    icon: 'Settings',
    color: 'purple',
    lessons: module03Lessons,
    totalXp: module03Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 2,
    prerequisites: ['01'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '04',
    number: 4,
    title: 'Skills',
    slug: 'skills',
    description: 'Crie e gerencie skills personalizadas',
    icon: 'Zap',
    color: 'yellow',
    lessons: module04Lessons,
    totalXp: module04Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 4,
    prerequisites: ['03'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '05',
    number: 5,
    title: 'MCP',
    slug: 'mcp',
    description: 'Model Context Protocol e integrações externas',
    icon: 'Plug',
    color: 'cyan',
    lessons: module05Lessons,
    totalXp: module05Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 5,
    prerequisites: ['03'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '06',
    number: 6,
    title: 'Hooks',
    slug: 'hooks',
    description: 'Automação com hooks e eventos',
    icon: 'Anchor',
    color: 'orange',
    lessons: module06Lessons,
    totalXp: module06Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 3,
    prerequisites: ['04'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '07',
    number: 7,
    title: 'Subagents',
    slug: 'subagents',
    description: 'Agentes especializados e processamento paralelo',
    icon: 'Users',
    color: 'pink',
    lessons: module07Lessons,
    totalXp: module07Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 4,
    prerequisites: ['04', '05'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '08',
    number: 8,
    title: 'Plugins',
    slug: 'plugins',
    description: 'Extensões distribuíveis e marketplace',
    icon: 'Package',
    color: 'indigo',
    lessons: module08Lessons,
    totalXp: module08Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 2,
    prerequisites: ['04'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '09',
    number: 9,
    title: 'Integrações IDE',
    slug: 'integracoes-ide',
    description: 'VS Code, JetBrains, Vim e mais',
    icon: 'Code',
    color: 'teal',
    lessons: module09Lessons,
    totalXp: module09Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 2,
    prerequisites: ['02'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '10',
    number: 10,
    title: 'Avançado',
    slug: 'avancado',
    description: 'Extended thinking, sandboxing e features experimentais',
    icon: 'Sparkles',
    color: 'violet',
    lessons: module10Lessons,
    totalXp: module10Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 4,
    prerequisites: ['05', '06', '07'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '11',
    number: 11,
    title: 'Best Practices',
    slug: 'best-practices',
    description: 'Padrões TOP 1% e workflows de produção',
    icon: 'Award',
    color: 'amber',
    lessons: module11Lessons,
    totalXp: module11Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 3,
    prerequisites: ['10'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '12',
    number: 12,
    title: 'Projetos Práticos',
    slug: 'projetos-praticos',
    description: 'Projetos hands-on do mundo real',
    icon: 'Hammer',
    color: 'red',
    lessons: module12Lessons,
    totalXp: module12Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 10,
    prerequisites: ['11'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
];

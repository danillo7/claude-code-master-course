// ============================================================================
// WARP TERMINAL MASTERY - COMPLETE COURSE DATA
// 8 Modules, 45+ Lessons - O Terminal AI-Native do TOP 1%
// Baseado na configuração real de Dr. Danillo Costa
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
    duration: options.duration || 10,
    xp: options.xp || 40,
    difficulty: options.difficulty || 'beginner',
    prerequisites: options.prerequisites || [],
    tags: options.tags || [],
    codeExamples: options.codeExamples || [],
    challenges: options.challenges || [],
    quizzes: options.quizzes || [],
    version: '1.0.0',
    dateAdded: options.dateAdded || now,
    dateUpdated: now,
    isNew: options.isNew ?? true,
    externalLinks: options.externalLinks || [],
    relatedLessons: options.relatedLessons || [],
  };
}

// ============================================================================
// MODULE 01: INTRODUÇÃO AO WARP
// ============================================================================

const module01Lessons: Lesson[] = [
  createLesson('w01', 'w01-01-what-is-warp', 'O que é Warp?',
    'Entenda porque Warp é o terminal escolhido pelo TOP 1% de desenvolvedores.',
    `# O que é Warp?

Warp é um **terminal moderno e AI-native** que revoluciona a experiência de linha de comando. Diferente de terminais tradicionais (Terminal.app, iTerm2), o Warp foi construído do zero com IA integrada.

## Por que TOP 1% escolhe Warp?

| Aspecto | Terminal Tradicional | Warp |
|---------|---------------------|------|
| **IA** | Não tem | Integrada (⌘ + I) |
| **Organização** | Scroll infinito | Blocks organizados |
| **Edição** | Básica | Editor moderno |
| **Workflows** | Shell scripts | YAML amigável |
| **Performance** | Varia | GPU-accelerated |

## Filosofia AI-First

> "Se você ainda usa iTerm, está vivendo no passado. Warp é o que um terminal deveria ser em 2025."

Warp representa a mesma filosofia que você aplica com Claude Code: **IA não é ferramenta auxiliar, é o centro da operação**.

## Principais Features

1. **Warp AI (⌘ + I)** - Pergunte qualquer coisa em linguagem natural
2. **Blocks** - Cada comando é um bloco organizável
3. **Workflows** - Automatize comandos frequentes
4. **Launch Configurations** - Abra múltiplas abas configuradas
5. **Modern Editor** - Edição de texto como em IDE
`,
    {
      xp: 30,
      duration: 8,
      tags: ['introdução', 'conceitos', 'ai-first'],
      quizzes: [
        {
          id: 'q-w01-01-1',
          question: 'Qual é o principal diferencial do Warp em relação a terminais tradicionais?',
          options: [
            'Interface mais bonita',
            'IA integrada nativamente',
            'Mais cores no terminal',
            'Suporte a mais shells'
          ],
          correctIndex: 1,
          explanation: 'Warp é AI-native, tendo IA integrada como parte fundamental da experiência.',
          xp: 10
        }
      ]
    }
  ),

  createLesson('w01', 'w01-02-installation', 'Instalação e Setup Inicial',
    'Instale o Warp e configure seu ambiente para máxima produtividade.',
    `# Instalação do Warp

## Download

\`\`\`bash
# Via Homebrew (recomendado)
brew install --cask warp

# Ou baixe direto: https://www.warp.dev/
\`\`\`

## Primeiro Launch

1. Abra o Warp
2. Crie conta (ou use Single Sign-On)
3. Escolha tema (recomendo: **Catppuccin Mocha**)
4. Configure shell (zsh recomendado)

## Estrutura de Arquivos

\`\`\`
~/.warp/
├── prefs.yaml              # Configurações gerais
├── themes/                 # Temas customizados
├── workflows/              # Seus workflows
│   ├── claude-code.yaml
│   ├── git-workflows.yaml
│   └── devops-workflows.yaml
└── launch_configurations/  # Configurações de abas
\`\`\`

## Configuração Recomendada

**~/.warp/prefs.yaml:**
\`\`\`yaml
# Tema e visual
theme: "catppuccin_mocha"
font_family: "JetBrains Mono Nerd Font"
font_size: 15
window_opacity: 0.92

# Cursor
cursor_shape: "block"
cursor_blink: false

# AI
warp_ai_enabled: true

# Blocks
blocks_enabled: true
show_block_timestamps: true

# Input
input_position: "bottom"
\`\`\`

## Verificação

Após instalar, teste:
- **⌘ + K** - Limpar tela
- **⌘ + I** - Abrir Warp AI
- **⌘ + P** - Command Palette
`,
    {
      xp: 50,
      duration: 12,
      tags: ['instalação', 'setup', 'configuração'],
      challenges: [
        {
          id: 'ch-w01-02-1',
          title: 'Configure seu Warp',
          description: 'Crie o arquivo ~/.warp/prefs.yaml com a configuração recomendada',
          context: 'general',
          contextDescription: 'Configuração base para qualquer desenvolvedor',
          difficulty: 'beginner',
          xpBonus: 25,
          hints: ['Use mkdir -p ~/.warp para criar a pasta', 'Copie o YAML da lição'],
        }
      ]
    }
  ),

  createLesson('w01', 'w01-03-interface', 'Conhecendo a Interface',
    'Domine cada elemento da interface do Warp.',
    `# Interface do Warp

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
`,
    {
      xp: 40,
      duration: 10,
      tags: ['interface', 'blocks', 'navegação'],
    }
  ),
];

// ============================================================================
// MODULE 02: ATALHOS ESSENCIAIS
// ============================================================================

const module02Lessons: Lesson[] = [
  createLesson('w02', 'w02-01-shortcuts-essential', 'TOP 10 Atalhos Obrigatórios',
    'Os 10 atalhos que você DEVE decorar para máxima produtividade.',
    `# TOP 10 Atalhos do Warp

## Símbolos das Teclas (macOS)

\`\`\`
⌘ = Command    ⌥ = Option    ⌃ = Control    ⇧ = Shift
\`\`\`

## 🔥 Decore Estes AGORA!

| # | Atalho | Ação | Quando Usar |
|---|--------|------|-------------|
| 1 | **⌃ + R** | Buscar histórico/workflows | Encontrar QUALQUER comando |
| 2 | **⌘ + K** | Limpar terminal | Tela limpa, mente limpa |
| 3 | **⌘ + P** | Command Palette | Acesso a TUDO |
| 4 | **⌘ + I** | Warp AI | Perguntar à IA |
| 5 | **⌘ + D** | Split vertical | Dividir tela |
| 6 | **⌘ + T** | Nova aba | Novo contexto |
| 7 | **⌘ + ↑/↓** | Navegar blocks | Ver histórico |
| 8 | **⌥ + ←/→** | Pular palavras | Edição rápida |
| 9 | **⌘ + .** | Cancelar comando | Parar execução |
| 10 | **⇧ + Enter** | Nova linha | Comando multiline |

## O Atalho Mais Importante

> **⌃ + R é seu melhor amigo**

Este atalho abre o buscador universal que encontra:
- Histórico de comandos
- Workflows salvos
- Scripts recentes
- Tudo que você já digitou

### Exemplo Prático

1. Execute vários comandos git
2. Pressione **⌃ + R**
3. Digite "git"
4. Veja todos comandos git filtrados

## Dica Pro

Quando você pressiona **⌃ + R**, o Warp mostra seus workflows primeiro. Configure workflows para comandos frequentes e acesse-os instantaneamente!

### No seu workflow Costa Law:
\`\`\`
⌃ + R → "claude" → Vê cc-spot, cc-curso, cc-sandbox
⌃ + R → "git" → Vê git-status-full, git-sync, git-log-graph
\`\`\`
`,
    {
      xp: 60,
      duration: 15,
      difficulty: 'beginner',
      tags: ['atalhos', 'produtividade', 'essencial'],
      quizzes: [
        {
          id: 'q-w02-01-1',
          question: 'Qual atalho é considerado o mais importante no Warp?',
          options: [
            '⌘ + K (limpar)',
            '⌃ + R (buscar histórico)',
            '⌘ + T (nova aba)',
            '⌘ + I (Warp AI)'
          ],
          correctIndex: 1,
          explanation: '⌃ + R busca em histórico E workflows, sendo o caminho mais rápido para qualquer comando.',
          xp: 15
        }
      ]
    }
  ),

  createLesson('w02', 'w02-02-shortcuts-navigation', 'Navegação Avançada',
    'Navegue entre abas, panes e blocks como um profissional.',
    `# Navegação no Warp

## Navegação entre Abas

| Atalho | Ação |
|--------|------|
| ⌘ + T | Nova aba |
| ⌘ + W | Fechar aba |
| ⌘ + 1-9 | Ir para aba N |
| ⌘ + ⇧ + [ | Aba anterior |
| ⌘ + ⇧ + ] | Próxima aba |

## Navegação entre Panes

Panes são divisões dentro de uma aba:

| Atalho | Ação |
|--------|------|
| ⌘ + D | Split vertical |
| ⌘ + ⇧ + D | Split horizontal |
| ⌘ + [ | Pane anterior |
| ⌘ + ] | Próximo pane |
| ⌘ + ⇧ + Enter | Maximizar pane |

## Navegação entre Blocks

| Atalho | Ação |
|--------|------|
| ⌘ + ↑ | Block anterior |
| ⌘ + ↓ | Próximo block |
| ⌘ + ⇧ + C | Copiar output do block |

## Caso de Uso: Setup SPOT AI

Imagine seu workflow diário:

\`\`\`
Tab 1: ~/spot-council → cc-spot (Claude Code)
Tab 2: ~/spot-council → terminal livre
Tab 3: ~/spot-council → docker ps (monitoramento)
\`\`\`

### Navegação Rápida:
- **⌘ + 1** → Claude Code
- **⌘ + 2** → Terminal livre para testes
- **⌘ + 3** → Monitoramento Docker
`,
    {
      xp: 50,
      duration: 12,
      tags: ['navegação', 'atalhos', 'panes', 'abas'],
    }
  ),

  createLesson('w02', 'w02-03-shortcuts-editing', 'Edição de Texto',
    'Domine a edição de comandos com atalhos de IDE.',
    `# Edição de Texto no Warp

O Warp tem um **editor moderno** no input, não uma linha de comando tradicional.

## Movimentação do Cursor

| Atalho | Ação |
|--------|------|
| ⌥ + Click | Posicionar cursor em qualquer lugar |
| ⌘ + ← | Início da linha |
| ⌘ + → | Fim da linha |
| ⌥ + ← | Pular palavra à esquerda |
| ⌥ + → | Pular palavra à direita |

## Deleção

| Atalho | Ação |
|--------|------|
| ⌘ + Backspace | Deletar até início da linha |
| ⌥ + Backspace | Deletar palavra anterior |
| ⌃ + K | Deletar até fim da linha |

## Seleção

| Atalho | Ação |
|--------|------|
| ⌘ + A | Selecionar tudo |
| ⇧ + ⌥ + ← | Selecionar palavra anterior |
| ⇧ + ⌥ + → | Selecionar próxima palavra |
| ⇧ + ⌘ + ← | Selecionar até início |
| ⇧ + ⌘ + → | Selecionar até fim |

## Comandos Multiline

Use **⇧ + Enter** para criar comandos em múltiplas linhas:

\`\`\`bash
docker run -d \\
  --name graphiti \\
  -p 8000:8000 \\
  -e NEO4J_URI=bolt://localhost:7687 \\
  graphiti-image
\`\`\`

## Dica Pro: Option + Click

A feature mais subestimada! Com **⌥ + Click** você pode:

1. Clicar no MEIO de um path longo
2. Editar exatamente onde precisa
3. Não precisa usar setas até chegar lá

### Exemplo:
\`\`\`bash
# Comando longo:
curl -X POST https://api.example.com/v1/users/123/profile -H "Authorization: Bearer token"
                                                    ^
                                              ⌥ + Click aqui!
\`\`\`
`,
    {
      xp: 45,
      duration: 10,
      tags: ['edição', 'atalhos', 'cursor'],
    }
  ),
];

// ============================================================================
// MODULE 03: WARP AI
// ============================================================================

const module03Lessons: Lesson[] = [
  createLesson('w03', 'w03-01-warp-ai-intro', 'Introdução ao Warp AI',
    'Aprenda a usar a IA integrada do Warp para resolver problemas.',
    `# Warp AI - Sua IA de Linha de Comando

## Ativando Warp AI

Pressione **⌘ + I** a qualquer momento para ativar a IA.

## Como Funciona

1. Pressione ⌘ + I
2. Digite sua pergunta em português ou inglês
3. Warp sugere comandos
4. Pressione Enter para aceitar ou Tab para editar

## Exemplos Práticos

### Pergunta: "como listar arquivos maiores que 100MB"
\`\`\`bash
# Warp sugere:
find . -type f -size +100M
# ou com fd (mais moderno):
fd -S +100M -t f
\`\`\`

### Pergunta: "como matar processo na porta 3000"
\`\`\`bash
# Warp sugere:
kill -9 $(lsof -ti:3000)
\`\`\`

### Pergunta: "como fazer commit com mensagem"
\`\`\`bash
# Warp sugere:
git commit -m "sua mensagem aqui"
\`\`\`

## Diferença para Claude Code

| Aspecto | Warp AI | Claude Code |
|---------|---------|-------------|
| Foco | Comandos shell | Desenvolvimento completo |
| Contexto | Comando atual | Projeto inteiro |
| Execução | Sugere, você executa | Pode executar sozinho |
| Profundidade | Rápido, superficial | Profundo, detalhado |

## Quando Usar Cada Um

- **Warp AI**: "Como faço X no terminal?"
- **Claude Code**: "Implemente feature Y no meu projeto"

### No seu workflow:
- Esqueceu sintaxe de um comando → **Warp AI**
- Precisa criar skill ou analisar código → **Claude Code**
`,
    {
      xp: 50,
      duration: 12,
      tags: ['warp-ai', 'ia', 'comandos'],
    }
  ),

  createLesson('w03', 'w03-02-warp-ai-advanced', 'Warp AI Avançado',
    'Técnicas avançadas para extrair máximo valor do Warp AI.',
    `# Warp AI - Técnicas Avançadas

## Explicação de Erros

Quando um comando falha, o Warp AI automaticamente oferece ajuda:

\`\`\`bash
> npm run build
Error: Cannot find module 'react'

# Warp AI aparece: "Parece que falta uma dependência. Deseja executar npm install?"
\`\`\`

## Prompts Eficientes

### ❌ Vago:
"como usar docker"

### ✅ Específico:
"como criar container docker com postgres 15 na porta 5432 com volume persistente"

## Padrões de Pergunta

| Padrão | Exemplo |
|--------|---------|
| "como [ação]" | como listar processos |
| "qual comando para [objetivo]" | qual comando para ver uso de memória |
| "explica [comando]" | explica o que faz chmod 755 |
| "converte [formato]" | converte esse find para fd |

## Contexto do Diretório

Warp AI considera seu diretório atual:

\`\`\`bash
# Em ~/spot-council:
> ⌘ + I: "como rodar os testes"
# Warp analisa package.json e sugere: npm test

# Em um projeto Python:
> ⌘ + I: "como rodar os testes"
# Warp analisa e sugere: pytest
\`\`\`

## Integração com Histórico

Warp AI vê seu histórico recente. Se você executou vários comandos git, ele entende o contexto:

\`\`\`bash
> git status
> git add .
> ⌘ + I: "agora commita"
# Warp sugere: git commit -m ""
\`\`\`
`,
    {
      xp: 55,
      duration: 14,
      difficulty: 'intermediate',
      tags: ['warp-ai', 'avançado', 'prompts'],
    }
  ),
];

// ============================================================================
// MODULE 04: WORKFLOWS
// ============================================================================

const module04Lessons: Lesson[] = [
  createLesson('w04', 'w04-01-workflows-intro', 'Introdução aos Workflows',
    'Entenda o que são Workflows e como eles multiplicam sua produtividade.',
    `# Workflows do Warp

Workflows são **comandos salvos** que você acessa rapidamente via ⌃ + R.

## Por que Usar Workflows?

| Sem Workflow | Com Workflow |
|--------------|--------------|
| Digitar comando completo | ⌃ + R → nome → Enter |
| Lembrar sintaxe | Já está salvo |
| Copiar de notas | Acesso instantâneo |
| Erros de digitação | Sempre correto |

## Anatomia de um Workflow

\`\`\`yaml
name: git-status-full
command: "git status && git log --oneline -5"
description: "Status completo com últimos commits"
tags:
  - git
  - status
\`\`\`

## Seus Workflows Atuais

Baseado na sua configuração:

### Claude Code (6 workflows)
- \`claude-spot\` - Abrir SPOT AI
- \`claude-curso\` - Abrir Curso Claude
- \`claude-sandbox\` - Abrir sandbox
- \`claude-new\` - Nova sessão limpa
- \`claude-continue\` - Continuar última
- \`claude-list\` - Listar projetos

### Git (8 workflows)
- \`git-status-full\` - Status + últimos commits
- \`git-sync\` - Fetch + status
- \`git-log-graph\` - Histórico visual
- \`git-uncommit\` - Desfazer último commit
- \`git-stash-save\` - Guardar alterações
- E mais...

## Acessando Workflows

1. **⌃ + R** - Abre buscador
2. Digite parte do nome
3. Selecione com setas
4. **Enter** para executar

### Exemplo:
\`\`\`
⌃ + R → "spot" → claude-spot → Enter
# Abre Claude Code no projeto SPOT AI
\`\`\`
`,
    {
      xp: 55,
      duration: 12,
      tags: ['workflows', 'automação', 'produtividade'],
    }
  ),

  createLesson('w04', 'w04-02-workflows-creating', 'Criando Seus Workflows',
    'Aprenda a criar workflows customizados para suas necessidades.',
    `# Criando Workflows

## Estrutura do Arquivo

Crie arquivos em \`~/.warp/workflows/\`:

\`\`\`yaml
# ~/.warp/workflows/meus-workflows.yaml

---
name: nome-do-workflow
command: "comando a executar"
description: "Descrição do que faz"
tags:
  - tag1
  - tag2

---
name: outro-workflow
command: "outro comando"
description: "Outra descrição"
\`\`\`

## Workflows com Argumentos

Use \`{{nome}}\` para criar parâmetros:

\`\`\`yaml
name: port-check
command: "lsof -i :{{port}}"
description: "Ver o que usa uma porta"
arguments:
  - name: port
    description: "Número da porta"
    default_value: "3000"
\`\`\`

### Uso:
\`\`\`
⌃ + R → "port-check" → Enter
# Warp pergunta: "Número da porta: [3000]"
# Digite 8080 ou Enter para usar default
\`\`\`

## Exemplos Práticos para Você

### Para Costa Law (contratos):
\`\`\`yaml
name: costa-contracts
command: "cd ~/Library/Mobile\\ Documents/com~apple~CloudDocs/20-COSTA-LAW && ls -la"
description: "Ir para pasta de contratos Costa Law"
tags:
  - costa-law
  - contratos
\`\`\`

### Para SPOT AI:
\`\`\`yaml
name: spot-logs
command: "docker logs -f --tail 100 spot-council-backend"
description: "Ver logs do SPOT Council"
tags:
  - spot
  - docker
  - logs
\`\`\`

### Para Produtividade:
\`\`\`yaml
name: morning-setup
command: "cc-spot && open -a 'Google Chrome' && gcalcli agenda today tomorrow"
description: "Setup matinal: SPOT + Chrome + Agenda"
tags:
  - produtividade
  - morning
\`\`\`

## Importando Workflows

1. Crie o arquivo YAML
2. Warp > Settings > Workflows
3. Import from YAML
4. Selecione seu arquivo
5. Pronto! Acesse via ⌃ + R
`,
    {
      xp: 70,
      duration: 18,
      difficulty: 'intermediate',
      tags: ['workflows', 'yaml', 'automação'],
      challenges: [
        {
          id: 'ch-w04-02-1',
          title: 'Crie seu primeiro Workflow',
          description: 'Crie um workflow que abre seu projeto favorito',
          context: 'personal',
          contextDescription: 'Personalize para seu caso de uso',
          difficulty: 'intermediate',
          xpBonus: 40,
          hints: [
            'Comece com um comando que você usa frequentemente',
            'Use {{argumento}} para parâmetros variáveis'
          ],
        }
      ]
    }
  ),

  createLesson('w04', 'w04-03-workflows-library', 'Biblioteca de Workflows Prontos',
    'Workflows testados e aprovados para diversas situações.',
    `# Biblioteca de Workflows

Coleção curada de workflows para diferentes casos de uso.

## 🔧 DevOps & Sistema

\`\`\`yaml
---
name: port-kill
command: "kill -9 $(lsof -ti:{{port}})"
description: "Matar processo em uma porta"
arguments:
  - name: port
    default_value: "3000"

---
name: docker-cleanup
command: "docker system prune -af && docker volume prune -f"
description: "Limpar Docker completamente"

---
name: disk-usage
command: "du -sh {{path}}/* | sort -hr | head -20"
description: "Ver uso de disco (top 20)"
arguments:
  - name: path
    default_value: "."
\`\`\`

## 📁 Navegação

\`\`\`yaml
---
name: icloud-go
command: "cd ~/Library/Mobile\\\\ Documents/com~apple~CloudDocs && ls"
description: "Ir para iCloud"

---
name: dev-go
command: "cd ~/Developer && ls"
description: "Ir para Developer"

---
name: find-large
command: "fd -S +{{size}}M -t f . {{path}}"
description: "Encontrar arquivos grandes"
arguments:
  - name: size
    default_value: "100"
  - name: path
    default_value: "."
\`\`\`

## 🚀 AI Stack

\`\`\`yaml
---
name: ai-stack-start
command: "~/Developer/stack-automation/scripts/start-ai-stack.sh"
description: "Iniciar Graphiti, Neo4j, Langfuse"

---
name: ai-stack-health
command: "~/Developer/stack-automation/scripts/health-check.sh"
description: "Verificar saúde do stack AI"

---
name: ai-stack-stop
command: "~/Developer/stack-automation/scripts/stop-ai-stack.sh"
description: "Parar stack AI"
\`\`\`

## 📅 Produtividade

\`\`\`yaml
---
name: agenda-hoje
command: "gcalcli agenda today tomorrow"
description: "Ver agenda de hoje"

---
name: weather
command: "curl -s 'wttr.in/{{city}}?format=3'"
description: "Ver clima"
arguments:
  - name: city
    default_value: "Sao+Paulo"

---
name: backup-check
command: "tmutil latestbackup && tmutil listbackups | tail -5"
description: "Verificar Time Machine"
\`\`\`

## 💡 Dica

Organize seus workflows em arquivos separados por categoria:
- \`claude-code.yaml\`
- \`git-workflows.yaml\`
- \`devops-workflows.yaml\`
- \`productivity-workflows.yaml\`
`,
    {
      xp: 50,
      duration: 15,
      tags: ['workflows', 'biblioteca', 'templates'],
    }
  ),
];

// ============================================================================
// MODULE 05: INTEGRAÇÃO COM CLAUDE CODE
// ============================================================================

const module05Lessons: Lesson[] = [
  createLesson('w05', 'w05-01-warp-claude-synergy', 'Warp + Claude Code: Sinergia Perfeita',
    'Como usar Warp e Claude Code juntos para produtividade máxima.',
    `# Warp + Claude Code

A combinação de Warp com Claude Code cria um **workflow AI-First completo**.

## Divisão de Responsabilidades

| Tarefa | Ferramenta | Motivo |
|--------|------------|--------|
| Comando rápido | Warp AI | Resposta instantânea |
| Desenvolvimento | Claude Code | Contexto do projeto |
| Navegação | Warp | Blocks e abas |
| Automação complexa | Claude Code | Skills e MCPs |
| Workflows simples | Warp | YAML fácil |

## Setup Recomendado

### Layout de Abas para SPOT AI:
\`\`\`
Aba 1: Claude Code (cc-spot)     → Desenvolvimento
Aba 2: Terminal livre            → Testes manuais
Aba 3: docker ps / logs          → Monitoramento
\`\`\`

### Aliases Configurados:
\`\`\`bash
# Em ~/.zshrc
alias cc-spot='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume spot-ai'
alias cc-curso='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume curso-claude'
alias cc-sandbox='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume sandbox'
\`\`\`

## Fluxo de Trabalho

1. **⌘ + T** - Nova aba no Warp
2. **⌃ + R** → "cc-spot" → Abre Claude Code
3. Trabalha no Claude Code
4. **⌘ + 2** → Aba de testes
5. Executa comandos rápidos
6. **⌘ + I** (Warp AI) se precisar de ajuda
7. **⌘ + 1** → Volta pro Claude Code

## Dica Pro: Split Vertical

Use **⌘ + D** para ter Claude Code e terminal lado a lado:

\`\`\`
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   Claude Code       │   Terminal livre    │
│   (cc-spot)         │   (npm run dev)     │
│                     │                     │
└─────────────────────┴─────────────────────┘
\`\`\`
`,
    {
      xp: 60,
      duration: 15,
      tags: ['claude-code', 'integração', 'workflow'],
    }
  ),

  createLesson('w05', 'w05-02-launch-configs', 'Launch Configurations',
    'Crie configurações que abrem seu ambiente completo com um comando.',
    `# Launch Configurations

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
`,
    {
      xp: 55,
      duration: 12,
      difficulty: 'intermediate',
      tags: ['launch-config', 'automação', 'setup'],
    }
  ),
];

// ============================================================================
// MODULE 06: PRODUTIVIDADE AVANÇADA
// ============================================================================

const module06Lessons: Lesson[] = [
  createLesson('w06', 'w06-01-blocks-mastery', 'Dominando Blocks',
    'Use Blocks para organizar e navegar seu histórico como um pro.',
    `# Mastery de Blocks

Blocks são o recurso mais subestimado do Warp.

## O que são Blocks?

Cada comando executado cria um "block" - uma unidade organizacional com:

- **Header**: Comando + timestamp
- **Body**: Output do comando
- **Actions**: Copiar, compartilhar, etc.

## Navegação por Blocks

| Ação | Atalho |
|------|--------|
| Block anterior | ⌘ + ↑ |
| Próximo block | ⌘ + ↓ |
| Primeiro block | ⌘ + Home |
| Último block | ⌘ + End |

## Ações em Blocks

### Copiar Output
- Clique no block header → Seleciona tudo
- **⌘ + ⇧ + C** → Copia output completo

### Compartilhar Block
- Clique direito → "Share Block"
- Gera link compartilhável

### Re-executar
- Clique no comando no header
- Aparece no input
- Enter para executar novamente

## Timestamps

Cada block mostra QUANDO foi executado:

\`\`\`
> git push origin main                    [14:32:15]
\`\`\`

Útil para:
- Debug ("quando isso aconteceu?")
- Auditoria ("que horas fiz deploy?")
- Histórico ("o que fiz às 10h?")

## Colapsar Blocks

Outputs muito longos podem ser colapsados:
- Clique no ícone de collapse
- Ou configure para auto-collapse

## Dica: Block como Evidência

Para documentação ou troubleshooting:
1. Execute o comando
2. Clique no block
3. **⌘ + ⇧ + C** para copiar
4. Cole no documento/ticket

Inclui comando, output E timestamp!
`,
    {
      xp: 50,
      duration: 12,
      tags: ['blocks', 'organização', 'navegação'],
    }
  ),

  createLesson('w06', 'w06-02-tips-tricks', 'Dicas e Truques Pro',
    'Técnicas avançadas que poucos conhecem.',
    `# Dicas Pro do Warp

## 1. Links Clicáveis

Qualquer URL no output é clicável:
- **⌘ + Click** → Abre no browser

Funciona para:
- URLs HTTP/HTTPS
- Paths de arquivo (abre no Finder)
- Referências git (abre no GitHub)

## 2. Arrastar Arquivos

Arraste um arquivo do Finder para o Warp:
- Insere o path completo automaticamente
- Com espaços já escapados!

\`\`\`bash
# Arraste "Meu Arquivo.pdf" do Finder
cat "/Users/danillo/Meu Arquivo.pdf"
\`\`\`

## 3. Autocomplete Inteligente

Warp tem autocomplete contextual:
- Digite parte do comando
- Tab para completar
- Setas para navegar sugestões

## 4. Inline Images

Sim, Warp mostra imagens inline!

\`\`\`bash
# Visualizar imagem no terminal
warp-img show ~/Downloads/screenshot.png
\`\`\`

## 5. SSH com Blocks

Blocks funcionam em sessões SSH também:
- Cada comando remoto = um block
- Navegação igual ao local

## 6. Command Palette (⌘ + P)

Acesso a TUDO:
- Settings
- Launch Configurations
- Workflows
- Ações do Warp
- Temas

## 7. Filtros de Histórico

No histórico (⌃ + R):
- Digite parte do comando
- Use prefixo \`>\` para só workflows
- Use prefixo \`#\` para tags

## 8. Notificações de Comando

Configure notificações para comandos longos:
- Settings > Notifications
- "Notify when command completes"
- Útil para builds e deploys

## 9. Theme Switching Rápido

**⌘ + P** → "theme" → Selecione
- Bom para apresentações (tema claro)
- Volta pro escuro depois
`,
    {
      xp: 60,
      duration: 15,
      difficulty: 'intermediate',
      tags: ['dicas', 'produtividade', 'truques'],
    }
  ),
];

// ============================================================================
// MODULE 07: CUSTOMIZAÇÃO
// ============================================================================

const module07Lessons: Lesson[] = [
  createLesson('w07', 'w07-01-themes', 'Temas e Aparência',
    'Personalize o visual do Warp para seu gosto.',
    `# Temas do Warp

## Tema Recomendado

**Catppuccin Mocha** - Usado na sua configuração:

\`\`\`yaml
# ~/.warp/prefs.yaml
theme: "catppuccin_mocha"
\`\`\`

Por que Catppuccin?
- Cores suaves para longas sessões
- Bom contraste
- Popular na comunidade dev

## Outros Temas Populares

- **Dracula** - Clássico, roxo
- **One Dark** - Inspirado no Atom
- **Tokyo Night** - Azul/roxo moderno
- **Nord** - Tons frios, clean

## Configurações Visuais

\`\`\`yaml
# ~/.warp/prefs.yaml

# Fonte
font_family: "JetBrains Mono Nerd Font"
font_size: 15

# Transparência
window_opacity: 0.92

# Cursor
cursor_shape: "block"  # ou "bar", "underline"
cursor_blink: false    # menos distração
\`\`\`

## Temas Custom

Crie seus próprios temas em \`~/.warp/themes/\`:

\`\`\`yaml
# ~/.warp/themes/meu-tema.yaml
name: "Meu Tema Custom"
background: "#1a1b26"
foreground: "#c0caf5"
cursor: "#f7768e"
# ... outras cores
\`\`\`

## Alternando Temas

Para apresentações ou gravações:
1. **⌘ + P** → "theme"
2. Selecione tema claro
3. Apresente
4. Volte ao escuro depois
`,
    {
      xp: 35,
      duration: 10,
      tags: ['temas', 'customização', 'aparência'],
    }
  ),

  createLesson('w07', 'w07-02-prefs-complete', 'Configuração Completa',
    'Todas as opções de configuração do prefs.yaml.',
    `# Configuração Completa do Warp

## Arquivo Completo

\`\`\`yaml
# ~/.warp/prefs.yaml
# Configuração TOP 1% - Dr. Danillo Costa

# ═══════════════════════════════════════════════════════
# APARÊNCIA
# ═══════════════════════════════════════════════════════

theme: "catppuccin_mocha"
font_family: "JetBrains Mono Nerd Font"
font_size: 15
window_opacity: 0.92

# Cursor
cursor_shape: "block"
cursor_blink: false

# ═══════════════════════════════════════════════════════
# FUNCIONALIDADES
# ═══════════════════════════════════════════════════════

# Warp AI
warp_ai_enabled: true

# Blocks
blocks_enabled: true
show_block_timestamps: true

# Input
input_position: "bottom"

# ═══════════════════════════════════════════════════════
# COMPORTAMENTO
# ═══════════════════════════════════════════════════════

# Bell
bell_enabled: false

# Scrollback
scrollback_lines: 10000

# Working directory
restore_working_directory: true

# ═══════════════════════════════════════════════════════
# TERMINAL
# ═══════════════════════════════════════════════════════

# Shell
default_shell: "/bin/zsh"

# Environment
inherit_env: true
\`\`\`

## Opções por Categoria

### Aparência
| Opção | Valores | Default |
|-------|---------|---------|
| theme | nome do tema | dracula |
| font_family | nome da fonte | - |
| font_size | número | 13 |
| window_opacity | 0.0-1.0 | 1.0 |

### Cursor
| Opção | Valores | Default |
|-------|---------|---------|
| cursor_shape | block, bar, underline | bar |
| cursor_blink | true/false | true |

### Blocks
| Opção | Valores | Default |
|-------|---------|---------|
| blocks_enabled | true/false | true |
| show_block_timestamps | true/false | true |

## Aplicando Mudanças

Após editar \`prefs.yaml\`:
1. Salve o arquivo
2. **⌘ + Q** (fechar Warp)
3. Abra novamente
4. Configurações aplicadas!
`,
    {
      xp: 45,
      duration: 12,
      tags: ['configuração', 'prefs.yaml', 'personalização'],
    }
  ),
];

// ============================================================================
// MODULE 08: PROJETO FINAL
// ============================================================================

const module08Lessons: Lesson[] = [
  createLesson('w08', 'w08-01-final-project', 'Projeto Final: Setup TOP 1%',
    'Configure seu ambiente Warp completo como os TOP 1%.',
    `# Projeto Final: Setup TOP 1%

## Objetivo

Criar uma configuração completa do Warp que:
1. ✅ Tenha tema e aparência profissional
2. ✅ Inclua workflows para suas tarefas frequentes
3. ✅ Integre com Claude Code
4. ✅ Tenha Launch Configurations para cada projeto

## Checklist de Implementação

### 1. Estrutura de Arquivos
\`\`\`bash
mkdir -p ~/.warp/workflows ~/.warp/themes
\`\`\`

### 2. Configuração Base
Crie \`~/.warp/prefs.yaml\` com configurações recomendadas.

### 3. Workflows por Categoria
Crie os arquivos:
- \`claude-code.yaml\`
- \`git-workflows.yaml\`
- \`devops-workflows.yaml\`
- \`productivity-workflows.yaml\`

### 4. Launch Configurations
Configure via GUI:
- Projeto principal (SPOT AI)
- Projeto secundário (Curso)
- Setup de monitoramento

### 5. Integração .zshrc
\`\`\`bash
# Adicione ao ~/.zshrc
alias cc-spot='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume spot-ai'
alias cc-curso='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume curso-claude'
alias cc-sandbox='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume sandbox'
\`\`\`

## Validação

Teste cada componente:

| Teste | Comando | Esperado |
|-------|---------|----------|
| Workflows | ⌃ + R → "claude" | Ver cc-spot, etc |
| Git | ⌃ + R → "git" | Ver git-status-full, etc |
| DevOps | ⌃ + R → "docker" | Ver docker-cleanup, etc |
| AI | ⌘ + I → "teste" | Resposta da IA |
| Launch | ⌘ + P → "open launch" | Ver configs salvas |

## Resultado Final

Com este setup você tem:
- **31 workflows** prontos para uso
- **Atalhos** decorados
- **Launch configs** para cada contexto
- **Integração** perfeita com Claude Code
- **Produtividade** de TOP 1%

🎉 **Parabéns! Você dominou o Warp Terminal!**
`,
    {
      xp: 100,
      duration: 30,
      difficulty: 'intermediate',
      tags: ['projeto-final', 'setup', 'top1'],
      challenges: [
        {
          id: 'ch-w08-01-1',
          title: 'Setup Completo',
          description: 'Implemente todo o setup descrito nesta lição',
          context: 'personal',
          contextDescription: 'Personalize para seus projetos',
          difficulty: 'intermediate',
          xpBonus: 100,
          hints: [
            'Siga o checklist passo a passo',
            'Valide cada componente antes de prosseguir',
            'Use os workflows como templates'
          ],
        }
      ]
    }
  ),
];

// ============================================================================
// EXPORT ALL MODULES
// ============================================================================

export const warpCourseModules: Module[] = [
  {
    id: 'w01',
    courseId: 'warp-terminal',
    number: 1,
    title: 'Introdução ao Warp',
    slug: 'introducao',
    description: 'Entenda o que é Warp e por que ele é o terminal do TOP 1%',
    icon: 'Zap',
    color: 'emerald',
    lessons: module01Lessons,
    totalXp: module01Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 0.5,
    prerequisites: [],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
  {
    id: 'w02',
    courseId: 'warp-terminal',
    number: 2,
    title: 'Atalhos Essenciais',
    slug: 'atalhos',
    description: 'Domine os atalhos que multiplicam sua produtividade',
    icon: 'Zap',
    color: 'cyan',
    lessons: module02Lessons,
    totalXp: module02Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 0.75,
    prerequisites: ['w01'],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
  {
    id: 'w03',
    courseId: 'warp-terminal',
    number: 3,
    title: 'Warp AI',
    slug: 'warp-ai',
    description: 'Use a IA integrada para resolver problemas rapidamente',
    icon: 'Sparkles',
    color: 'violet',
    lessons: module03Lessons,
    totalXp: module03Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 0.5,
    prerequisites: ['w02'],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
  {
    id: 'w04',
    courseId: 'warp-terminal',
    number: 4,
    title: 'Workflows',
    slug: 'workflows',
    description: 'Automatize comandos frequentes com workflows',
    icon: 'Settings',
    color: 'orange',
    lessons: module04Lessons,
    totalXp: module04Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 1,
    prerequisites: ['w02'],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
  {
    id: 'w05',
    courseId: 'warp-terminal',
    number: 5,
    title: 'Integração com Claude Code',
    slug: 'claude-code',
    description: 'Configure a sinergia perfeita entre Warp e Claude Code',
    icon: 'Terminal',
    color: 'indigo',
    lessons: module05Lessons,
    totalXp: module05Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 0.75,
    prerequisites: ['w04'],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
  {
    id: 'w06',
    courseId: 'warp-terminal',
    number: 6,
    title: 'Produtividade Avançada',
    slug: 'produtividade',
    description: 'Técnicas avançadas de blocks, dicas e truques',
    icon: 'Rocket',
    color: 'pink',
    lessons: module06Lessons,
    totalXp: module06Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 0.5,
    prerequisites: ['w03', 'w04'],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
  {
    id: 'w07',
    courseId: 'warp-terminal',
    number: 7,
    title: 'Customização',
    slug: 'customizacao',
    description: 'Personalize temas e configurações do Warp',
    icon: 'Palette',
    color: 'purple',
    lessons: module07Lessons,
    totalXp: module07Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 0.5,
    prerequisites: ['w01'],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
  {
    id: 'w08',
    courseId: 'warp-terminal',
    number: 8,
    title: 'Projeto Final',
    slug: 'projeto-final',
    description: 'Configure seu ambiente completo como TOP 1%',
    icon: 'Trophy',
    color: 'yellow',
    lessons: module08Lessons,
    totalXp: module08Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 0.5,
    prerequisites: ['w06', 'w07'],
    version: '1.0.0',
    dateUpdated: '2025-12-29',
  },
];

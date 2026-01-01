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
  createLesson('w01', 'w01-01-what-is-warp', '01. O que é Warp?',
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

## Comparativo de Performance

\`\`\`
Benchmark: Renderização de 10.000 linhas
─────────────────────────────────────────
Terminal.app:  ~800ms
iTerm2:        ~600ms
Alacritty:     ~200ms
Warp:          ~150ms (GPU-accelerated)
\`\`\`

## História do Warp

- **2020**: Fundação por Zach Lloyd (ex-Google)
- **2022**: Launch público
- **2023**: Warp AI integrado
- **2024**: Teams e Enterprise
- **2025**: Ambient Agents (beta)

## Quem Usa Warp?

Empresas como **Figma**, **Vercel**, **Linear** e milhares de desenvolvedores individuais escolhem Warp pela produtividade.
`,
    {
      xp: 40,
      duration: 10,
      tags: ['introdução', 'conceitos', 'ai-first'],
      codeExamples: [
        {
          id: 'ce-w01-01-1',
          title: 'Verificando versão do Warp',
          language: 'bash',
          code: `# Ver versão instalada
warp --version

# Ver informações do sistema
warp --info`,
          explanation: 'Comandos básicos para verificar sua instalação do Warp',
          runnable: true
        }
      ],
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
        },
        {
          id: 'q-w01-01-2',
          question: 'O que são "Blocks" no Warp?',
          options: [
            'Blocos de código para copiar',
            'Cada comando executado vira uma unidade organizável',
            'Extensões do terminal',
            'Atalhos de teclado'
          ],
          correctIndex: 1,
          explanation: 'Blocks transformam cada comando em uma unidade com header, output e timestamp, facilitando navegação e organização.',
          xp: 10
        },
        {
          id: 'q-w01-01-3',
          question: 'Por que o Warp é mais rápido que terminais tradicionais?',
          options: [
            'Usa menos memória',
            'É escrito em Python',
            'Usa aceleração de GPU',
            'Comprime o output'
          ],
          correctIndex: 2,
          explanation: 'Warp utiliza GPU-acceleration (Rust + Metal no Mac) para renderização ultrarrápida.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w01-01-1',
          title: 'Explore o Warp',
          description: 'Abra o Warp e experimente pressionar ⌘ + I para ativar a IA. Pergunte "como listar arquivos ordenados por tamanho".',
          context: 'general' as const,
          contextDescription: 'Primeiro contato com Warp AI',
          difficulty: 'beginner' as const,
          xpBonus: 20,
          hints: ['Pressione ⌘ + I', 'Digite sua pergunta em português', 'Pressione Enter para aceitar a sugestão'],
        }
      ]
    }
  ),

  createLesson('w01', 'w01-02-installation', '02. Instalação e Setup Inicial',
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
      codeExamples: [
        {
          id: 'ce-w01-02-1',
          title: 'Instalação via Homebrew',
          language: 'bash',
          code: `# Instalar Warp via Homebrew (recomendado)
brew install --cask warp

# Verificar instalação
ls -la /Applications/Warp.app`,
          explanation: 'Método mais fácil de instalar o Warp no macOS',
          runnable: true
        },
        {
          id: 'ce-w01-02-2',
          title: 'Estrutura de configuração',
          language: 'bash',
          code: `# Criar estrutura de pastas
mkdir -p ~/.warp/workflows
mkdir -p ~/.warp/themes
mkdir -p ~/.warp/launch_configurations

# Verificar estrutura
tree ~/.warp`,
          explanation: 'Estrutura de pastas para configurações do Warp',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w01-02-1',
          question: 'Qual é o método recomendado para instalar o Warp no macOS?',
          options: [
            'Download direto do site',
            'brew install --cask warp',
            'App Store',
            'npm install warp'
          ],
          correctIndex: 1,
          explanation: 'Homebrew é o método recomendado pois facilita atualizações e gerenciamento.',
          xp: 10
        },
        {
          id: 'q-w01-02-2',
          question: 'Onde ficam armazenadas as configurações do Warp?',
          options: [
            '/etc/warp/',
            '~/Library/Warp/',
            '~/.warp/',
            '/usr/local/warp/'
          ],
          correctIndex: 2,
          explanation: 'Todas as configurações do Warp ficam em ~/.warp/ incluindo prefs.yaml, workflows e temas.',
          xp: 10
        },
        {
          id: 'q-w01-02-3',
          question: 'Qual shell é recomendado para usar com Warp?',
          options: [
            'bash',
            'sh',
            'zsh',
            'fish'
          ],
          correctIndex: 2,
          explanation: 'Zsh é recomendado por ser o shell padrão do macOS e ter melhor integração com Warp.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w01-02-1',
          title: 'Configure seu Warp',
          description: 'Crie o arquivo ~/.warp/prefs.yaml com a configuração recomendada',
          context: 'general' as const,
          contextDescription: 'Configuração base para qualquer desenvolvedor',
          difficulty: 'beginner' as const,
          xpBonus: 25,
          hints: ['Use mkdir -p ~/.warp para criar a pasta', 'Copie o YAML da lição'],
        },
        {
          id: 'ch-w01-02-2',
          title: 'Instale uma Nerd Font',
          description: 'Instale a JetBrains Mono Nerd Font via Homebrew e configure no Warp',
          context: 'general' as const,
          contextDescription: 'Fontes com ícones para terminal moderno',
          difficulty: 'beginner' as const,
          xpBonus: 20,
          hints: ['brew tap homebrew/cask-fonts', 'brew install font-jetbrains-mono-nerd-font'],
        }
      ]
    }
  ),

  createLesson('w01', 'w01-03-interface', '03. Conhecendo a Interface',
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
      xp: 50,
      duration: 12,
      tags: ['interface', 'blocks', 'navegação'],
      codeExamples: [
        {
          id: 'ce-w01-03-1',
          title: 'Navegação entre Blocks',
          language: 'bash',
          code: `# Execute vários comandos para criar blocks
ls -la
pwd
echo "Navegue com ⌘ + ↑/↓"

# Dica: ⌘ + ⇧ + C copia output do block selecionado`,
          explanation: 'Demonstração de como blocks funcionam na prática',
          runnable: true
        },
        {
          id: 'ce-w01-03-2',
          title: 'Links clicáveis no terminal',
          language: 'bash',
          code: `# URLs são clicáveis (⌘ + Click)
echo "Documentação: https://docs.warp.dev"

# Paths também são clicáveis
echo "Config: ~/.warp/prefs.yaml"

# ⌘ + Click abre no browser ou Finder`,
          explanation: 'Warp detecta links e paths automaticamente',
          runnable: true
        }
      ],
      quizzes: [
        {
          id: 'q-w01-03-1',
          question: 'O que é um Block no Warp?',
          options: [
            'Uma extensão do terminal',
            'Uma unidade organizacional com comando, output e timestamp',
            'Um arquivo de configuração',
            'Um tipo de workflow'
          ],
          correctIndex: 1,
          explanation: 'Cada comando executado cria um Block independente com header (comando + timestamp) e body (output).',
          xp: 10
        },
        {
          id: 'q-w01-03-2',
          question: 'Como copiar o output completo de um block?',
          options: [
            '⌘ + C',
            '⌘ + V',
            '⌘ + ⇧ + C',
            '⌃ + C'
          ],
          correctIndex: 2,
          explanation: '⌘ + ⇧ + C (Command + Shift + C) copia o output inteiro do block selecionado.',
          xp: 10
        },
        {
          id: 'q-w01-03-3',
          question: 'Qual atalho navega entre blocks?',
          options: [
            '⌘ + Tab',
            '⌘ + ↑/↓',
            'Page Up/Down',
            '⌃ + ↑/↓'
          ],
          correctIndex: 1,
          explanation: '⌘ + ↑ vai para o block anterior e ⌘ + ↓ vai para o próximo block.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w01-03-1',
          title: 'Domine a navegação por Blocks',
          description: 'Execute 5 comandos diferentes e navegue entre os blocks usando ⌘ + ↑/↓. Depois, copie o output do terceiro comando usando ⌘ + ⇧ + C.',
          context: 'general' as const,
          contextDescription: 'Prática de navegação no Warp',
          difficulty: 'beginner' as const,
          xpBonus: 25,
          hints: ['Execute comandos como ls, pwd, whoami, date, echo', 'Use ⌘ + ↑ várias vezes para subir nos blocks'],
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 02: ATALHOS ESSENCIAIS
// ============================================================================

const module02Lessons: Lesson[] = [
  createLesson('w02', 'w02-00-your-shortcuts', '🎯 SEUS Atalhos Personalizados',
    'Todos os atalhos configurados no SEU Warp (prefs.yaml real).',
    `# Seus Atalhos Pessoais - Dr. Danillo Costa

Estes são os atalhos REAIS extraídos do seu \`~/.warp/prefs.yaml\`.

## 📚 Referência de Teclas (macOS)

\`\`\`
⌘ = Command    ⌥ = Option    ⌃ = Control    ⇧ = Shift
\`\`\`

---

## ⭐ TOP 10 ESSENCIAIS (Decorar!)

| # | Atalho | Ação | Frequência |
|---|--------|------|------------|
| 1 | **⌃ + R** | Buscar histórico/workflows | 🔥🔥🔥 |
| 2 | **⌘ + K** | Limpar terminal | 🔥🔥🔥 |
| 3 | **⌘ + P** | Command Palette | 🔥🔥🔥 |
| 4 | **⌘ + I** | Warp AI inline | 🔥🔥 |
| 5 | **⌘ + D** | Split vertical | 🔥🔥 |
| 6 | **⌘ + T** | Nova aba | 🔥🔥 |
| 7 | **⌘ + ↑/↓** | Navegar blocks | 🔥🔥 |
| 8 | **⌥ + ←/→** | Pular palavras | 🔥🔥 |
| 9 | **⌘ + .** | Cancelar comando (SIGINT) | 🔥 |
| 10 | **⇧ + Enter** | Nova linha (multiline) | 🔥 |

---

## 🧭 NAVEGAÇÃO

| Atalho | Ação |
|--------|------|
| ⌘ + ↑ | Block anterior |
| ⌘ + ↓ | Próximo block |
| ⌘ + [ | Pane anterior |
| ⌘ + ] | Próximo pane |
| ⌘ + 1-9 | Ir para aba N |
| ⌘ + W | Fechar aba |
| ⌘ + ⇧ + [ | Aba anterior |
| ⌘ + ⇧ + ] | Próxima aba |

---

## ✂️ SPLITS

| Atalho | Ação |
|--------|------|
| ⌘ + D | Split vertical |
| ⇧ + ⌘ + D | Split horizontal |
| ⌘ + W | Fechar pane |

---

## ✏️ EDIÇÃO

| Atalho | Ação |
|--------|------|
| ⌥ + Click | Posicionar cursor |
| ⌥ + ←/→ | Pular palavra |
| ⌘ + ←/→ | Início/fim da linha |
| ⌘ + Backspace | Deletar até início |
| ⌥ + Backspace | Deletar palavra |

---

## ▶️ EXECUÇÃO

| Atalho | Ação |
|--------|------|
| ⌘ + Enter | Executar comando |
| ⌘ + . | Cancelar (SIGINT) |
| ⇧ + Enter | Nova linha |

---

## 📋 COPIAR/COLAR

| Atalho | Ação |
|--------|------|
| ⌘ + C | Copiar |
| ⌘ + V | Colar |
| ⌘ + ⇧ + C | Copiar output do block |

---

## 🤖 WARP AI

| Atalho | Ação |
|--------|------|
| ⌘ + I | Ativar AI inline |
| ⌃ + \` | AI chat panel |

---

## 💎 Build Plan Features (Seu Plano)

✅ 1,500 AI Credits/month
✅ Ambient Agents (beta)
✅ Unlimited Warp Drive objects
✅ 40 Indexed Codebases
✅ BYOK (OpenAI/Anthropic)
✅ GitHub, Slack, Linear integrations
✅ Session Sharing
✅ Team Features

---

## 🎯 Dica: Imprima Esta Página!

Cole estes atalhos ao lado do monitor por uma semana.
Após isso, estarão na memória muscular.
`,
    {
      xp: 60,
      duration: 10,
      difficulty: 'beginner',
      tags: ['atalhos', 'personalizado', 'referência'],
      isNew: true,
      codeExamples: [
        {
          id: 'ce-w02-00-1',
          title: 'Praticar navegação entre blocks',
          language: 'bash',
          code: `# Execute estes comandos para praticar ⌘ + ↑/↓
ls -la
pwd
date
whoami
echo "Agora use ⌘ + ↑ para voltar aos comandos anteriores"`,
          explanation: 'Sequência de comandos para praticar navegação',
          runnable: true
        }
      ],
      quizzes: [
        {
          id: 'q-w02-00-1',
          question: 'Qual atalho abre o buscador universal de histórico e workflows?',
          options: [
            '⌘ + F',
            '⌃ + R',
            '⌘ + H',
            '⌃ + H'
          ],
          correctIndex: 1,
          explanation: '⌃ + R (Control + R) abre o buscador que pesquisa tanto histórico quanto workflows.',
          xp: 10
        },
        {
          id: 'q-w02-00-2',
          question: 'Qual atalho ativa o Warp AI inline?',
          options: [
            '⌘ + A',
            '⌃ + I',
            '⌘ + I',
            '⌥ + I'
          ],
          correctIndex: 2,
          explanation: '⌘ + I (Command + I) ativa a IA do Warp para responder perguntas sobre comandos.',
          xp: 10
        },
        {
          id: 'q-w02-00-3',
          question: 'Qual atalho cria um split vertical?',
          options: [
            '⌘ + D',
            '⌘ + V',
            '⌘ + S',
            '⌘ + ⇧ + D'
          ],
          correctIndex: 0,
          explanation: '⌘ + D cria split vertical. Para horizontal, use ⌘ + ⇧ + D.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w02-00-1',
          title: 'Memorize os TOP 10',
          description: 'Pratique os 10 atalhos essenciais: ⌃ + R, ⌘ + K, ⌘ + P, ⌘ + I, ⌘ + D, ⌘ + T, ⌘ + ↑/↓, ⌥ + ←/→, ⌘ + ., ⇧ + Enter',
          context: 'general' as const,
          contextDescription: 'Prática deliberada de atalhos',
          difficulty: 'beginner' as const,
          xpBonus: 30,
          hints: ['Pratique cada atalho 5 vezes seguidas', 'Imprima a lista e cole ao lado do monitor'],
        }
      ]
    }
  ),

  createLesson('w02', 'w02-01-shortcuts-essential', '01. TOP 10 Atalhos Obrigatórios',
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
      codeExamples: [
        {
          id: 'ce-w02-01-1',
          title: 'Comando multiline com ⇧ + Enter',
          language: 'bash',
          code: `# Use ⇧ + Enter para criar comando em múltiplas linhas
docker run -d \\
  --name meu-container \\
  -p 8080:80 \\
  -v $(pwd):/app \\
  nginx:latest`,
          explanation: 'Shift + Enter permite criar comandos legíveis em múltiplas linhas',
          runnable: true
        },
        {
          id: 'ce-w02-01-2',
          title: 'Fluxo de busca com ⌃ + R',
          language: 'bash',
          code: `# Fluxo de uso do ⌃ + R:
# 1. Pressione ⌃ + R
# 2. Digite parte do comando (ex: "git")
# 3. Use ↑/↓ para navegar resultados
# 4. Enter para executar

# Dica: workflows aparecem primeiro!`,
          explanation: 'Passo a passo do buscador universal',
          runnable: false
        }
      ],
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
        },
        {
          id: 'q-w02-01-2',
          question: 'Como criar um comando em múltiplas linhas?',
          options: [
            'Enter normal',
            '⌘ + Enter',
            '⇧ + Enter',
            '⌥ + Enter'
          ],
          correctIndex: 2,
          explanation: '⇧ + Enter (Shift + Enter) cria uma nova linha sem executar o comando.',
          xp: 12
        },
        {
          id: 'q-w02-01-3',
          question: 'Qual atalho cancela um comando em execução?',
          options: [
            '⌘ + C',
            '⌃ + C',
            '⌘ + .',
            '⌘ + Q'
          ],
          correctIndex: 2,
          explanation: 'No Warp, ⌘ + . é o atalho para cancelar (SIGINT). ⌃ + C também funciona tradicionalmente.',
          xp: 12
        }
      ],
      challenges: [
        {
          id: 'ch-w02-01-1',
          title: 'Domine o ⌃ + R',
          description: 'Execute 10 comandos git variados, depois use ⌃ + R para encontrar e re-executar 3 deles.',
          context: 'general' as const,
          contextDescription: 'Prática do buscador universal',
          difficulty: 'beginner' as const,
          xpBonus: 25,
          hints: ['Execute: git status, git log, git diff, git branch, etc.', 'Depois use ⌃ + R e digite "git"'],
        },
        {
          id: 'ch-w02-01-2',
          title: 'Comando Docker multiline',
          description: 'Crie um comando docker run com pelo menos 5 flags usando ⇧ + Enter para cada linha.',
          context: 'general' as const,
          contextDescription: 'Prática de comandos multiline',
          difficulty: 'intermediate' as const,
          xpBonus: 30,
          hints: ['Flags comuns: -d, --name, -p, -v, -e', 'Use \\ no final de cada linha'],
        }
      ]
    }
  ),

  createLesson('w02', 'w02-02-shortcuts-navigation', '02. Navegação Avançada',
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
      xp: 55,
      duration: 14,
      tags: ['navegação', 'atalhos', 'panes', 'abas'],
      codeExamples: [
        {
          id: 'ce-w02-02-1',
          title: 'Layout de desenvolvimento',
          language: 'bash',
          code: `# Setup ideal para desenvolvimento:
# Aba 1: Projeto principal
cd ~/spot-council && claude

# Aba 2: Servidor de dev (⌘ + T para nova aba)
npm run dev

# Aba 3: Logs e monitoramento
docker logs -f backend`,
          explanation: 'Layout de 3 abas para desenvolvimento eficiente',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w02-02-1',
          question: 'Qual atalho cria uma nova aba?',
          options: [
            '⌘ + N',
            '⌘ + T',
            '⌃ + T',
            '⌥ + T'
          ],
          correctIndex: 1,
          explanation: '⌘ + T (Command + T) cria uma nova aba, similar aos browsers.',
          xp: 10
        },
        {
          id: 'q-w02-02-2',
          question: 'Como ir diretamente para a aba 3?',
          options: [
            '⌘ + ⇧ + 3',
            '⌘ + 3',
            '⌃ + 3',
            '⌥ + 3'
          ],
          correctIndex: 1,
          explanation: '⌘ + número (1-9) vai diretamente para a aba correspondente.',
          xp: 10
        },
        {
          id: 'q-w02-02-3',
          question: 'Qual atalho alterna entre panes em uma mesma aba?',
          options: [
            '⌘ + Tab',
            '⌘ + [ ou ]',
            '⌃ + Tab',
            '⌥ + Tab'
          ],
          correctIndex: 1,
          explanation: '⌘ + [ vai para o pane anterior e ⌘ + ] vai para o próximo pane.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w02-02-1',
          title: 'Setup de 3 abas',
          description: 'Crie 3 abas e configure cada uma para um propósito diferente usando ⌘ + T.',
          context: 'general' as const,
          contextDescription: 'Organização de workspace',
          difficulty: 'beginner' as const,
          xpBonus: 25,
          hints: ['⌘ + T cria nova aba', '⌘ + 1/2/3 navega entre elas'],
        },
        {
          id: 'ch-w02-02-2',
          title: 'Split vertical e horizontal',
          description: 'Em uma aba, crie um split vertical (⌘ + D) e depois um horizontal (⌘ + ⇧ + D).',
          context: 'general' as const,
          contextDescription: 'Layout de panes',
          difficulty: 'intermediate' as const,
          xpBonus: 30,
          hints: ['⌘ + D = split vertical', '⌘ + ⇧ + D = split horizontal', 'Use ⌘ + W para fechar um pane'],
        }
      ]
    }
  ),

  createLesson('w02', 'w02-03-shortcuts-editing', '03. Edição de Texto',
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
      codeExamples: [
        {
          id: 'ce-w02-03-1',
          title: 'Edição rápida com ⌥',
          language: 'bash',
          code: `# Comando longo para praticar edição:
curl -X POST https://api.github.com/repos/user/repo/issues \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Bug report", "body": "Description here"}'

# Pratique:
# 1. ⌥ + Click no "YOUR_TOKEN" para editar
# 2. ⌥ + ← para pular entre palavras
# 3. ⌥ + Backspace para deletar palavra`,
          explanation: 'Comando real para praticar navegação e edição',
          runnable: true
        },
        {
          id: 'ce-w02-03-2',
          title: 'Multiline com ⇧ + Enter',
          language: 'bash',
          code: `# Digite este comando multiline:
# (Use ⇧ + Enter após cada \\)

find /Users/danillocosta/Developer \\
  -name "*.ts" \\
  -type f \\
  -mtime -7 \\
  -exec wc -l {} \\;

# Resultado: arquivos .ts modificados nos últimos 7 dias`,
          explanation: 'Comandos multiline organizados e legíveis',
          runnable: true
        }
      ],
      quizzes: [
        {
          id: 'q-w02-03-1',
          question: 'Como deletar a palavra ANTERIOR ao cursor no Warp?',
          options: ['⌘ + Backspace', '⌥ + Backspace', 'Ctrl + W', 'Delete'],
          correctIndex: 1,
          explanation: '⌥ + Backspace deleta a palavra anterior. ⌘ + Backspace deleta até o início da linha.',
          xp: 10
        },
        {
          id: 'q-w02-03-2',
          question: 'Qual a forma mais rápida de posicionar o cursor no MEIO de um comando longo?',
          options: ['Usar setas ← até chegar', '⌥ + Click onde deseja', 'Home e depois setas', '⌘ + G'],
          correctIndex: 1,
          explanation: '⌥ + Click é a forma mais rápida! Basta clicar exatamente onde quer editar.',
          xp: 12
        },
        {
          id: 'q-w02-03-3',
          question: 'Como criar um comando em MÚLTIPLAS LINHAS no Warp?',
          options: ['Enter normal', '⇧ + Enter', '⌘ + Enter', '⌥ + Enter'],
          correctIndex: 1,
          explanation: '⇧ + Enter cria uma nova linha sem executar o comando, permitindo comandos multiline.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w02-03-1',
          title: 'Corrija o comando sem usar setas',
          description: 'Você tem um comando com erro no meio. Use APENAS ⌥ + Click e ⌥ + Backspace para corrigir.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `git clone https://github.com/usario/repo-errado.git
# Erro: "usario" deveria ser "usuario"
# Desafio: Corrija sem usar setas ← ou →`,
          solution: `# 1. ⌥ + Click em "usario"
# 2. ⌥ + Backspace (deleta "usario")
# 3. Digite "usuario"
git clone https://github.com/usuario/repo-errado.git`,
          hints: ['Use ⌥ + Click para posicionar cursor direto na palavra errada', 'Use ⌥ + Backspace para deletar a palavra inteira'],
          difficulty: 'beginner' as const,
          xpBonus: 25
        },
        {
          id: 'ch-w02-03-2',
          title: 'Comando multiline organizado',
          description: 'Transforme um comando gigante em formato multiline legível.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `docker run -d --name myapp -p 8080:8080 -e NODE_ENV=production -e DB_HOST=localhost -v /data:/app/data myimage:latest`,
          solution: `docker run -d \\
  --name myapp \\
  -p 8080:8080 \\
  -e NODE_ENV=production \\
  -e DB_HOST=localhost \\
  -v /data:/app/data \\
  myimage:latest`,
          hints: ['Use ⇧ + Enter após cada \\\\', 'Agrupe flags similares', 'Use indentação de 2 espaços'],
          difficulty: 'intermediate' as const,
          xpBonus: 35
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 03: WARP AI
// ============================================================================

const module03Lessons: Lesson[] = [
  createLesson('w03', 'w03-01-warp-ai-intro', '01. Introdução ao Warp AI',
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
      codeExamples: [
        {
          id: 'ce-w03-01-1',
          title: 'Warp AI para Docker',
          language: 'bash',
          code: `# ⌘ + I: "criar container postgres com volume persistente"

# Warp AI sugere:
docker run -d \\
  --name postgres-local \\
  -e POSTGRES_PASSWORD=secret \\
  -p 5432:5432 \\
  -v postgres_data:/var/lib/postgresql/data \\
  postgres:15

# Aceite com Enter ou Tab para editar`,
          explanation: 'Exemplo real de como Warp AI gera comandos complexos',
          runnable: false
        },
        {
          id: 'ce-w03-01-2',
          title: 'Warp AI vs Claude Code',
          language: 'bash',
          code: `# WARP AI (⌘ + I):
# "como encontrar arquivos grandes"
# → find . -type f -size +100M

# CLAUDE CODE:
# "analise os arquivos grandes deste projeto,
#  identifique o que pode ser removido ou
#  movido para .gitignore"
# → Análise detalhada + sugestões + execução

# Use cada um para o propósito certo!`,
          explanation: 'Entenda quando usar cada IA',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w03-01-1',
          question: 'Qual o atalho para ativar o Warp AI?',
          options: ['⌘ + A', '⌘ + I', '⌃ + I', '⌘ + W'],
          correctIndex: 1,
          explanation: '⌘ + I (Command + I) ativa o Warp AI. "I" de Intelligence!',
          xp: 10
        },
        {
          id: 'q-w03-01-2',
          question: 'Após Warp AI sugerir um comando, como você EDITA antes de executar?',
          options: ['Enter', 'Tab', 'Esc', '⌘ + E'],
          correctIndex: 1,
          explanation: 'Tab transfere o comando para edição. Enter executa diretamente.',
          xp: 12
        },
        {
          id: 'q-w03-01-3',
          question: 'Qual é o FOCO principal do Warp AI comparado ao Claude Code?',
          options: ['Análise de projeto', 'Comandos shell rápidos', 'Refatoração de código', 'Code review'],
          correctIndex: 1,
          explanation: 'Warp AI foca em comandos shell rápidos. Claude Code é para desenvolvimento completo.',
          xp: 12
        }
      ],
      challenges: [
        {
          id: 'ch-w03-01-1',
          title: 'Sua primeira pergunta ao Warp AI',
          description: 'Use Warp AI para descobrir como verificar uso de memória de processos.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Pressione ⌘ + I e pergunte:
# "como ver processos usando mais memória"`,
          solution: `# Warp AI deve sugerir algo como:
ps aux --sort=-%mem | head -10

# ou no macOS:
top -o mem

# Execute e veja os resultados!`,
          hints: ['⌘ + I abre o Warp AI', 'Seja específico: "mais memória" ajuda', 'Tab para editar, Enter para executar'],
          difficulty: 'beginner' as const,
          xpBonus: 25
        },
        {
          id: 'ch-w03-01-2',
          title: 'Warp AI para problema real',
          description: 'Use Warp AI para descobrir como matar um processo que está travando a porta 8080.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Cenário: npm start falhou dizendo "porta 8080 já em uso"
# Use ⌘ + I para resolver`,
          solution: `# Warp AI sugere:
lsof -ti:8080 | xargs kill -9

# ou separado:
lsof -i :8080  # ver qual processo
kill -9 PID    # matar processo`,
          hints: ['Pergunte: "matar processo na porta 8080"', 'lsof mostra quem usa a porta', 'kill -9 força a parada'],
          difficulty: 'beginner' as const,
          xpBonus: 30
        }
      ]
    }
  ),

  createLesson('w03', 'w03-02-warp-ai-advanced', '02. Warp AI Avançado',
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
      codeExamples: [
        {
          id: 'ce-w03-02-1',
          title: 'Prompts específicos vs vagos',
          language: 'bash',
          code: `# ❌ VAGO - resultado genérico:
# ⌘ + I: "como usar git"

# ✅ ESPECÍFICO - resultado útil:
# ⌘ + I: "como fazer squash dos últimos 3 commits em 1"
# Warp sugere:
git rebase -i HEAD~3
# (usar 'squash' ou 's' nas linhas do editor)

# ✅ AINDA MELHOR - com contexto:
# ⌘ + I: "squash últimos 3 commits mantendo primeira mensagem"`,
          explanation: 'Quanto mais específico, melhor o resultado',
          runnable: false
        },
        {
          id: 'ce-w03-02-2',
          title: 'Explicação de erros',
          language: 'bash',
          code: `# Execute um comando com erro:
npm run buil  # typo proposital

# Error: Missing script: "buil"

# Warp AI aparece automaticamente:
# "Você quis dizer 'npm run build'?"

# Aceite a correção ou pergunte:
# ⌘ + I: "quais scripts disponíveis"
# → npm run (lista scripts do package.json)`,
          explanation: 'Warp AI ajuda a corrigir erros automaticamente',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w03-02-1',
          question: 'Qual padrão de pergunta é MAIS EFICIENTE para Warp AI?',
          options: [
            '"como usar docker"',
            '"docker help"',
            '"criar container postgres 15 porta 5432 com volume"',
            '"me ajuda com docker"'
          ],
          correctIndex: 2,
          explanation: 'Perguntas específicas com detalhes (versão, porta, opções) geram comandos prontos para usar.',
          xp: 12
        },
        {
          id: 'q-w03-02-2',
          question: 'O Warp AI considera qual contexto ao sugerir comandos?',
          options: ['Apenas a pergunta', 'Diretório atual + histórico recente', 'Apenas o histórico', 'Nenhum contexto'],
          correctIndex: 1,
          explanation: 'Warp AI analisa seu diretório atual (detecta package.json, pyproject.toml, etc) E seu histórico recente.',
          xp: 12
        },
        {
          id: 'q-w03-02-3',
          question: 'Quando Warp AI oferece ajuda AUTOMATICAMENTE?',
          options: ['Sempre que você digita', 'Após cada comando', 'Quando um comando falha com erro', 'Nunca automaticamente'],
          correctIndex: 2,
          explanation: 'Quando um comando falha, Warp AI analisa o erro e oferece sugestões de correção.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w03-02-1',
          title: 'Prompt engineering para Warp AI',
          description: 'Crie prompts específicos para obter comandos úteis.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Tarefa: Você quer encontrar todos os arquivos .ts
# modificados nos últimos 3 dias no diretório Developer

# Escreva um prompt ESPECÍFICO para o Warp AI:
# ⌘ + I: "..."`,
          solution: `# Prompt ideal:
# ⌘ + I: "encontrar arquivos .ts modificados últimos 3 dias em ~/Developer"

# Warp sugere:
find ~/Developer -name "*.ts" -type f -mtime -3

# Ou com fd (mais moderno):
fd -e ts --changed-within 3d . ~/Developer`,
          hints: ['Inclua a extensão (.ts)', 'Especifique o tempo (3 dias)', 'Mencione o diretório'],
          difficulty: 'intermediate' as const,
          xpBonus: 35
        },
        {
          id: 'ch-w03-02-2',
          title: 'Debug com Warp AI',
          description: 'Use Warp AI para entender e corrigir um erro.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Execute este comando (vai dar erro):
git push origin main

# Se der erro "rejected", use Warp AI para entender
# ⌘ + I: "por que git push foi rejeitado"`,
          solution: `# Warp AI explica:
# "O push foi rejeitado porque há commits no remoto que você não tem."

# E sugere:
git pull --rebase origin main
# ou
git fetch origin && git rebase origin/main

# Depois: git push origin main`,
          hints: ['Leia a mensagem de erro', 'Pergunte "por que" ao Warp AI', 'Geralmente precisa de pull/rebase antes'],
          difficulty: 'intermediate' as const,
          xpBonus: 40
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 04: WORKFLOWS
// ============================================================================

const module04Lessons: Lesson[] = [
  createLesson('w04', 'w04-00-your-workflows', '🚀 SEUS 57 Workflows Reais',
    'Catálogo completo de TODOS os seus workflows configurados.',
    `# Seus Workflows - Dr. Danillo Costa

Você tem **57 workflows** organizados em **6 arquivos YAML**. Aqui está o catálogo completo!

---

## 📁 Estrutura dos Arquivos

\`\`\`
~/.warp/workflows/
├── claude-code.yaml        # 6 workflows
├── git-workflows.yaml      # 8 workflows
├── devops-workflows.yaml   # 9 workflows
├── productivity-workflows.yaml  # 10 workflows
├── stack-synergies.yaml    # 23 workflows
└── ambient-agents.yaml     # (Ambient Agents beta)
\`\`\`

---

## 🤖 CLAUDE CODE (6 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`claude-spot\` | \`cc-spot\` | Abrir SPOT AI |
| \`claude-curso\` | \`cc-curso\` | Abrir Curso Claude |
| \`claude-sandbox\` | \`cc-sandbox\` | Abrir sandbox |
| \`claude-new\` | \`claude --new\` | Nova sessão limpa |
| \`claude-continue\` | \`claude --continue\` | Continuar última |
| \`claude-list\` | \`cc-list\` | Listar projetos |

**Acesso rápido:** \`⌃ + R\` → "claude"

---

## 📊 GIT (8 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`git-status-full\` | \`git status && git log -5\` | Status + commits |
| \`git-sync\` | \`git fetch --all && git status\` | Sincronizar |
| \`git-log-graph\` | \`git log --graph -20\` | Histórico visual |
| \`git-uncommit\` | \`git reset --soft HEAD~1\` | Desfazer commit |
| \`git-amend\` | \`git commit --amend\` | Alterar último |
| \`git-stash-save\` | \`git stash push -m '{{msg}}'\` | Guardar WIP |
| \`git-stash-pop\` | \`git stash pop\` | Recuperar stash |
| \`git-branch-clean\` | Deleta branches mergeadas | Limpeza |

**Acesso rápido:** \`⌃ + R\` → "git"

---

## 🔧 DEVOPS (9 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`port-check\` | \`lsof -i :{{port}}\` | Ver porta |
| \`port-kill\` | \`kill -9 $(lsof -ti:{{port}})\` | Matar porta |
| \`docker-cleanup\` | Prune total | Limpar Docker |
| \`docker-ps\` | Formato limpo | Listar containers |
| \`docker-logs\` | \`docker logs -f {{container}}\` | Ver logs |
| \`ai-stack-start\` | Script start | Iniciar stack |
| \`ai-stack-health\` | Health check | Verificar saúde |
| \`ai-stack-stop\` | Script stop | Parar stack |

**Acesso rápido:** \`⌃ + R\` → "docker" ou "port"

---

## ⚡ PRODUTIVIDADE (10 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`icloud-go\` | \`cd ~/iCloud\` | Ir para iCloud |
| \`dev-go\` | \`cd ~/Developer\` | Ir para Developer |
| \`find-large\` | \`fd -S +{{size}}M\` | Arquivos grandes |
| \`find-recent\` | \`fd --changed-within {{time}}\` | Arquivos recentes |
| \`disk-usage\` | \`du -sh | sort -hr\` | Uso de disco |
| \`backup-check\` | \`tmutil latestbackup\` | Time Machine |
| \`weather\` | \`wttr.in/{{city}}\` | Ver clima |
| \`ip-public\` | \`curl ifconfig.me\` | IP público |
| \`agenda-hoje\` | \`gcalcli agenda\` | Agenda do dia |

**Acesso rápido:** \`⌃ + R\` → "find" ou "agenda"

---

## 🚀 STACK SYNERGIES (23 workflows)

### AI Stack
| Workflow | Descrição |
|----------|-----------|
| \`ai-stack-start\` | 🚀 Iniciar Graphiti, Neo4j, Ollama |
| \`ai-stack-stop\` | 🛑 Parar stack |
| \`ai-stack-health\` | 💚 Health check completo |
| \`neo4j-ui\` | 🔗 Abrir Neo4j Browser |
| \`langfuse-ui\` | 📊 Abrir Langfuse |
| \`graphiti-logs\` | 📋 Logs do Graphiti MCP |

### Ollama (Local LLM)
| Workflow | Descrição |
|----------|-----------|
| \`ollama-models\` | 🦙 Listar modelos |
| \`ollama-pull\` | 📥 Baixar modelo |

### Claude Code Projects
| Workflow | Descrição |
|----------|-----------|
| \`cc-spot\` | 🤖 SPOT AI Council |
| \`cc-curso\` | 📚 Curso Claude |
| \`cc-sandbox\` | 🧪 Sandbox |
| \`cc-new\` | ✨ Novo projeto |

### Memory & MCP
| Workflow | Descrição |
|----------|-----------|
| \`memory-view\` | 🧠 Ver Memory MCP |
| \`memory-search\` | 🔍 Buscar no Memory |
| \`mcp-status\` | 🔌 Status MCPs |

### Dashboard & Status
| Workflow | Descrição |
|----------|-----------|
| \`stack-dashboard\` | 📊 Dashboard completo |
| \`backup-status\` | 💾 Status backup 3-2-1 |
| \`dev-projects\` | 📁 Listar projetos |
| \`icloud-stats\` | ☁️ Stats iCloud |
| \`quick-sync\` | 🔄 Sync rápido |

### Google Calendar
| Workflow | Descrição |
|----------|-----------|
| \`gcal-hoje\` | 📅 Agenda de hoje |
| \`gcal-semana\` | 📅 Calendário semana |
| \`gcal-adicionar\` | ➕ Adicionar evento |

---

## ⚡ Workflows Favoritos (Mais Usados)

\`\`\`bash
# Morning routine
⌃ + R → "stack-dashboard"  # Ver status de tudo
⌃ + R → "gcal-hoje"        # Agenda do dia
⌃ + R → "cc-spot"          # Abrir projeto principal

# Durante desenvolvimento
⌃ + R → "git-status-full"  # Status completo
⌃ + R → "docker-logs"      # Ver logs
⌃ + R → "port-check"       # Verificar porta

# Final do dia
⌃ + R → "quick-sync"       # Verificar pendências
⌃ + R → "backup-status"    # Confirmar backups
\`\`\`

---

## 💡 Dica Pro

Use tags para encontrar workflows relacionados:
- \`⌃ + R\` → "#git" → Vê todos com tag git
- \`⌃ + R\` → "#docker" → Vê todos com tag docker
- \`⌃ + R\` → "#stack" → Vê todos do AI stack
`,
    {
      xp: 80,
      duration: 15,
      difficulty: 'beginner',
      tags: ['workflows', 'catálogo', 'personalizado'],
      isNew: true,
      codeExamples: [
        {
          id: 'ce-w04-00-1',
          title: 'Acessando seus workflows',
          language: 'bash',
          code: `# Pressione ⌃ + R para abrir a busca de workflows

# Digite parte do nome:
# ⌃ + R → "docker" → encontra docker-cleanup, docker-ps, etc.
# ⌃ + R → "git" → encontra git-sync, git-uncommit, etc.
# ⌃ + R → "claude" → encontra todos os cc-* workflows

# Dica: Use ↑/↓ para navegar e Enter para executar`,
          explanation: 'Como acessar rapidamente qualquer workflow',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w04-00-1',
          question: 'Quantos workflows você tem configurados no total?',
          options: ['23 workflows', '45 workflows', '57 workflows', '100+ workflows'],
          correctIndex: 2,
          explanation: 'Você tem 57 workflows organizados em 6 arquivos YAML em ~/.warp/workflows/',
          xp: 10
        },
        {
          id: 'q-w04-00-2',
          question: 'Qual é o atalho para acessar a busca de workflows?',
          options: ['⌘ + R', '⌃ + R', '⌘ + W', '⌃ + W'],
          correctIndex: 1,
          explanation: '⌃ + R (Control + R) abre a busca de workflows no Warp.',
          xp: 10
        },
        {
          id: 'q-w04-00-3',
          question: 'Qual arquivo contém o MAIOR número de workflows?',
          options: ['claude-code.yaml', 'git-workflows.yaml', 'stack-synergies.yaml', 'devops-workflows.yaml'],
          correctIndex: 2,
          explanation: 'stack-synergies.yaml tem 23 workflows - o maior arquivo do seu catálogo!',
          xp: 12
        }
      ],
      challenges: [
        {
          id: 'ch-w04-00-1',
          title: 'Encontre um workflow por categoria',
          description: 'Use ⌃ + R e encontre workflows para Docker, Git e Claude.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Desafio: Execute 3 workflows diferentes

# 1. ⌃ + R → "docker" → escolha docker-ps
# 2. ⌃ + R → "git" → escolha git-status-full
# 3. ⌃ + R → "claude" → escolha cc-list`,
          solution: `# Resultados esperados:

# docker-ps → Lista containers formatada
# git-status-full → Status + últimos 5 commits
# cc-list → Lista projetos Claude Code`,
          hints: ['⌃ + R abre a busca', 'Digite parte do nome para filtrar', 'Enter executa o workflow selecionado'],
          difficulty: 'beginner' as const,
          xpBonus: 25
        }
      ]
    }
  ),

  createLesson('w04', 'w04-01-workflows-intro', '01. Introdução aos Workflows',
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
      codeExamples: [
        {
          id: 'ce-w04-01-1',
          title: 'Workflow com argumentos',
          language: 'yaml',
          code: `# Workflow com variável de entrada
---
name: git-commit-msg
command: git commit -m "{{message}}"
description: "Commit com mensagem personalizada"
arguments:
  - name: message
    description: "Mensagem do commit"
    default_value: "fix: correção"`,
          explanation: 'Workflows podem receber argumentos dinâmicos',
          runnable: false
        },
        {
          id: 'ce-w04-01-2',
          title: 'Workflow com múltiplos comandos',
          language: 'yaml',
          code: `# Workflow encadeado
---
name: git-sync-all
command: "git fetch --all && git status && git log --oneline -5"
description: "Sincroniza e mostra status completo"
tags:
  - git
  - sync`,
          explanation: 'Use && para encadear comandos no mesmo workflow',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w04-01-1',
          question: 'Qual símbolo é usado para criar argumentos em workflows?',
          options: ['${arg}', '{{arg}}', '[arg]', '<arg>'],
          correctIndex: 1,
          explanation: 'Warp usa {{nome_do_argumento}} para variáveis nos workflows.',
          xp: 10
        },
        {
          id: 'q-w04-01-2',
          question: 'Onde ficam armazenados os workflows no sistema?',
          options: ['~/.warp/commands/', '~/.warp/workflows/', '~/.config/warp/', '/etc/warp/'],
          correctIndex: 1,
          explanation: 'Todos os workflows ficam em ~/.warp/workflows/ como arquivos .yaml',
          xp: 10
        },
        {
          id: 'q-w04-01-3',
          question: 'Qual atalho abre a busca de workflows?',
          options: ['⌘ + R', '⌃ + R', '⌘ + P', '⌃ + Space'],
          correctIndex: 1,
          explanation: '⌃ + R (Control + R) abre o painel de busca de workflows.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w04-01-1',
          title: 'Execute um workflow com argumento',
          description: 'Use o workflow git-stash-save que requer uma mensagem.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Faça uma alteração qualquer em um arquivo
echo "teste" >> arquivo-teste.txt

# Use ⌃ + R → "stash-save"
# Warp vai pedir: "msg: ?"
# Digite: "WIP feature X"`,
          solution: `# Resultado:
git stash push -m "WIP feature X"

# Verificar:
git stash list
# stash@{0}: On main: WIP feature X`,
          hints: ['⌃ + R para abrir workflows', 'Digite "stash" para filtrar', 'O workflow pede a mensagem automaticamente'],
          difficulty: 'beginner' as const,
          xpBonus: 25
        }
      ]
    }
  ),

  createLesson('w04', 'w04-02-workflows-creating', '02. Criando Seus Workflows',
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
      codeExamples: [
        {
          id: 'ce-w04-02-1',
          title: 'Estrutura completa de workflow',
          language: 'yaml',
          code: `# ~/.warp/workflows/meu-workflow.yaml

---
name: projeto-rapido
command: "cd {{path}} && code . && npm run dev"
description: "Abre projeto no VSCode e inicia dev server"
tags:
  - dev
  - projeto
arguments:
  - name: path
    description: "Caminho do projeto"
    default_value: "~/Developer/spot-council"`,
          explanation: 'Template completo para criar seus próprios workflows',
          runnable: false
        },
        {
          id: 'ce-w04-02-2',
          title: 'Múltiplos workflows no mesmo arquivo',
          language: 'yaml',
          code: `# Arquivo com múltiplos workflows (separados por ---)

---
name: docker-up
command: "docker compose up -d"
description: "Subir containers"
tags:
  - docker

---
name: docker-down
command: "docker compose down"
description: "Parar containers"
tags:
  - docker

---
name: docker-logs
command: "docker compose logs -f {{service}}"
arguments:
  - name: service
    default_value: ""`,
          explanation: 'Agrupe workflows relacionados no mesmo arquivo',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w04-02-1',
          question: 'Qual é a estrutura correta para um argumento em workflow?',
          options: [
            'args: [name, default]',
            'arguments: [{ name, default_value }]',
            'params: { name: value }',
            'input: { name: default }'
          ],
          correctIndex: 1,
          explanation: 'Warp usa "arguments" como array de objetos com "name" e opcionalmente "default_value".',
          xp: 12
        },
        {
          id: 'q-w04-02-2',
          question: 'Como separar múltiplos workflows no mesmo arquivo YAML?',
          options: ['===', '---', '***', '...'],
          correctIndex: 1,
          explanation: 'Use "---" (três hifens) para separar documentos YAML, permitindo múltiplos workflows por arquivo.',
          xp: 10
        },
        {
          id: 'q-w04-02-3',
          question: 'Após criar um arquivo de workflow, como fazê-lo aparecer no Warp?',
          options: [
            'Reiniciar o Warp',
            'Warp > Settings > Workflows > Import',
            'warp reload',
            'Aparece automaticamente'
          ],
          correctIndex: 3,
          explanation: 'Warp detecta automaticamente novos arquivos em ~/.warp/workflows/!',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w04-02-1',
          title: 'Crie seu primeiro Workflow',
          description: 'Crie um workflow que abre seu projeto favorito no editor.',
          context: 'general' as const,
          contextDescription: 'Personalize para seu caso de uso',
          starterCode: `# Crie o arquivo:
# ~/.warp/workflows/meu-projeto.yaml

# Com a estrutura:
# ---
# name: open-meu-projeto
# command: "cd ~/Developer/PROJETO && code ."
# description: "Abre meu projeto no VSCode"`,
          solution: `# ~/.warp/workflows/meu-projeto.yaml

---
name: open-meu-projeto
command: "cd ~/Developer/spot-council && code . && npm run dev"
description: "Abre SPOT Council no VSCode e inicia dev"
tags:
  - projeto
  - spot

# Teste: ⌃ + R → "open-meu"`,
          hints: [
            'Comece com um comando que você usa frequentemente',
            'Use && para encadear múltiplos comandos',
            'Adicione tags para encontrar mais fácil depois'
          ],
          difficulty: 'intermediate' as const,
          xpBonus: 40
        }
      ]
    }
  ),

  createLesson('w04', 'w04-03-workflows-library', '03. Biblioteca de Workflows Prontos',
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
      codeExamples: [
        {
          id: 'ce-w04-03-1',
          title: 'Workflows para Git avançado',
          language: 'yaml',
          code: `# git-avancado.yaml

---
name: git-sync-rebase
command: "git fetch origin && git rebase origin/main"
description: "Sincronizar branch com main via rebase"
tags:
  - git
  - sync

---
name: git-squash-last
command: "git rebase -i HEAD~{{n}}"
description: "Squash últimos N commits"
arguments:
  - name: n
    description: "Número de commits"
    default_value: "3"`,
          explanation: 'Workflows para operações Git que você sempre esquece',
          runnable: false
        },
        {
          id: 'ce-w04-03-2',
          title: 'Workflows para Claude Code',
          language: 'yaml',
          code: `# claude-projetos.yaml

---
name: cc-spot
command: "cd ~/Developer/spot-council && claude"
description: "Claude no SPOT Council"
tags:
  - claude
  - projeto

---
name: cc-curso
command: "cd ~/Developer/claude-code-master-course && claude"
description: "Claude no Curso"
tags:
  - claude
  - curso

---
name: cc-continue
command: "claude --continue"
description: "Continuar última sessão Claude"`,
          explanation: 'Workflows para acessar projetos com Claude Code rapidamente',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w04-03-1',
          question: 'Qual é a melhor prática para organizar muitos workflows?',
          options: [
            'Colocar todos em um arquivo só',
            'Separar por categoria em arquivos diferentes',
            'Criar um arquivo por workflow',
            'Não usar tags'
          ],
          correctIndex: 1,
          explanation: 'Organize por categoria (git-workflows.yaml, devops-workflows.yaml) para fácil manutenção.',
          xp: 10
        },
        {
          id: 'q-w04-03-2',
          question: 'Como encontrar workflows por categoria no Warp?',
          options: ['⌃ + R → nome', '⌃ + R → #tag', '⌘ + F → categoria', '⌃ + T → tag'],
          correctIndex: 1,
          explanation: 'Use # seguido da tag para filtrar. Ex: ⌃ + R → "#docker" mostra todos workflows tagueados com docker.',
          xp: 12
        },
        {
          id: 'q-w04-03-3',
          question: 'Qual workflow é ideal para iniciar o dia de trabalho?',
          options: ['git-sync', 'morning-setup', 'docker-cleanup', 'port-kill'],
          correctIndex: 1,
          explanation: 'morning-setup combina múltiplas ações: abre projeto, browser, mostra agenda.',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w04-03-1',
          title: 'Crie sua biblioteca personalizada',
          description: 'Crie um arquivo com 3+ workflows para seu caso de uso.',
          context: 'general' as const,
          contextDescription: 'Seu ambiente de trabalho',
          starterCode: `# Crie: ~/.warp/workflows/minha-biblioteca.yaml

# Inclua pelo menos:
# 1. Um workflow para abrir projeto favorito
# 2. Um workflow para operação git frequente
# 3. Um workflow com argumento dinâmico`,
          solution: `# minha-biblioteca.yaml

---
name: meu-projeto
command: "cd ~/Developer/meu-projeto && code ."
description: "Abrir meu projeto principal"
tags:
  - projeto

---
name: git-quick-commit
command: "git add . && git commit -m '{{msg}}'"
description: "Add all e commit rápido"
arguments:
  - name: msg
    default_value: "wip"
tags:
  - git

---
name: npm-start-port
command: "PORT={{port}} npm start"
description: "Iniciar npm em porta específica"
arguments:
  - name: port
    default_value: "3001"
tags:
  - npm`,
          hints: [
            'Use tags consistentes para organização',
            'Adicione default_value úteis',
            'Teste cada workflow após criar'
          ],
          difficulty: 'intermediate' as const,
          xpBonus: 50
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 05: INTEGRAÇÃO COM CLAUDE CODE
// ============================================================================

const module05Lessons: Lesson[] = [
  createLesson('w05', 'w05-01-warp-claude-synergy', '01. Warp + Claude Code: Sinergia Perfeita',
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
      codeExamples: [
        {
          id: 'ce-w05-01-1',
          title: 'Workflow combo Warp + Claude',
          language: 'yaml',
          code: `# workflow para sinergia perfeita
---
name: dev-session
command: |
  cd ~/Developer/spot-council &&
  warp-cli split-pane horizontal &&
  claude --continue
description: "Abre projeto + split + Claude"
tags:
  - dev
  - claude`,
          explanation: 'Combine Warp e Claude Code no mesmo workflow',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w05-01-1',
          question: 'Qual é a principal vantagem de usar Warp + Claude Code juntos?',
          options: [
            'Warp substitui Claude Code',
            'Claude roda dentro do Warp (mesmo terminal)',
            'Só funciona com iTerm2',
            'Não há vantagem'
          ],
          correctIndex: 1,
          explanation: 'Claude Code roda DENTRO do Warp, aproveitando blocks, histórico, AI e todos os recursos!',
          xp: 12
        },
        {
          id: 'q-w05-01-2',
          question: 'Como copiar rapidamente o output de um Claude Code para usar em outro comando?',
          options: ['Selecionar manualmente', '⌘ + ⇧ + C (copy block)', 'Ctrl+C', 'Não é possível'],
          correctIndex: 1,
          explanation: '⌘ + ⇧ + C copia o output inteiro do block, perfeito para usar em outros comandos!',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w05-01-1',
          title: 'Sessão de desenvolvimento integrada',
          description: 'Configure uma sessão que combina Warp splits com Claude Code.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Objetivo: Criar setup de desenvolvimento com:
# - Aba 1: Claude Code no projeto
# - Aba 2: npm run dev
# - Aba 3: git/logs`,
          solution: `# Crie workflow:
# ~/.warp/workflows/dev-setup.yaml

---
name: dev-full-setup
command: "cd ~/Developer/spot-council && claude"
description: "Setup completo de dev"

# Depois manualmente:
# ⌘ + T para nova aba → npm run dev
# ⌘ + T para nova aba → git log --oneline -10`,
          hints: ['Use ⌘ + T para novas abas', 'Claude Code roda perfeitamente no Warp', 'Blocks separam cada output'],
          difficulty: 'intermediate' as const,
          xpBonus: 35
        }
      ]
    }
  ),

  createLesson('w05', 'w05-02-launch-configs', '02. Launch Configurations',
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
      codeExamples: [
        {
          id: 'ce-w05-02-1',
          title: 'Launch Config completo',
          language: 'json',
          code: `// Exemplo de Launch Configuration
// Warp > Settings > Launch Configurations

{
  "name": "Dev SPOT Council",
  "tabs": [
    {
      "title": "Claude",
      "commands": ["cd ~/Developer/spot-council", "claude"]
    },
    {
      "title": "Dev Server",
      "commands": ["cd ~/Developer/spot-council/frontend", "npm run dev"]
    },
    {
      "title": "Backend",
      "commands": ["cd ~/Developer/spot-council/backend", "uv run uvicorn app.main:app --reload"]
    }
  ]
}`,
          explanation: 'Launch Configuration abre múltiplas abas configuradas',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w05-02-1',
          question: 'Onde são criadas as Launch Configurations no Warp?',
          options: ['~/.warp/launch/', '~/.warp/workflows/', 'Warp > Settings > Launch Configurations', 'package.json'],
          correctIndex: 2,
          explanation: 'Launch Configurations são criadas via GUI em Warp > Settings > Launch Configurations.',
          xp: 10
        },
        {
          id: 'q-w05-02-2',
          question: 'Qual é a diferença entre Launch Config e Workflow?',
          options: [
            'São iguais',
            'Launch Config abre múltiplas abas, Workflow executa comando único',
            'Workflow é mais rápido',
            'Launch Config só funciona no macOS'
          ],
          correctIndex: 1,
          explanation: 'Launch Configs salvam layout de abas; Workflows executam comandos. Complementares!',
          xp: 12
        }
      ],
      challenges: [
        {
          id: 'ch-w05-02-1',
          title: 'Crie seu Launch Config de desenvolvimento',
          description: 'Configure um Launch Config que abre seu ambiente completo.',
          context: 'general' as const,
          contextDescription: 'Configurações do Warp',
          starterCode: `# Vá em: Warp > Settings > Launch Configurations
# Clique em "+" para criar nova

# Configure:
# - Nome: "Meu Dev Setup"
# - Tab 1: Claude no projeto
# - Tab 2: npm run dev
# - Tab 3: terminal livre`,
          solution: `# Após criar via GUI, você pode acessar com:
# ⌘ + ⇧ + O → selecionar "Meu Dev Setup"

# Resultado: 3 abas abertas automaticamente
# cada uma no diretório e comando certos`,
          hints: ['Use a GUI para criar (mais fácil)', 'Nomeie de forma descritiva', 'Teste após criar'],
          difficulty: 'beginner' as const,
          xpBonus: 30
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 06: PRODUTIVIDADE AVANÇADA
// ============================================================================

const module06Lessons: Lesson[] = [
  createLesson('w06', 'w06-01-blocks-mastery', '01. Dominando Blocks',
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
      quizzes: [
        {
          id: 'q-w06-01-1',
          question: 'O que é um Block no Warp?',
          options: [
            'Uma aba separada',
            'Comando + output agrupados visualmente',
            'Um tipo de workflow',
            'Configuração de tema'
          ],
          correctIndex: 1,
          explanation: 'Cada Block agrupa comando + output, facilitando navegação e cópia.',
          xp: 10
        },
        {
          id: 'q-w06-01-2',
          question: 'Como navegar entre Blocks rapidamente?',
          options: ['Page Up/Down', '⌘ + ↑/↓', 'Tab', 'Ctrl + Tab'],
          correctIndex: 1,
          explanation: '⌘ + ↑ vai para o block anterior, ⌘ + ↓ para o próximo.',
          xp: 10
        },
        {
          id: 'q-w06-01-3',
          question: 'Como copiar TODO o output de um Block de uma vez?',
          options: ['Selecionar com mouse', '⌘ + C', '⌘ + ⇧ + C', '⌘ + A e depois ⌘ + C'],
          correctIndex: 2,
          explanation: '⌘ + ⇧ + C copia o output inteiro do block selecionado!',
          xp: 12
        }
      ],
      challenges: [
        {
          id: 'ch-w06-01-1',
          title: 'Navegação por Blocks',
          description: 'Execute 3 comandos e navegue entre eles usando atalhos.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Execute estes comandos:
ls -la
pwd
echo "Agora navegue com ⌘ + ↑/↓"`,
          solution: `# Após executar os 3:
# ⌘ + ↑ → vai para pwd
# ⌘ + ↑ → vai para ls -la
# ⌘ + ↓ → volta para pwd
# ⌘ + ⇧ + C → copia output do block atual`,
          hints: ['⌘ + ↑ sobe um block', '⌘ + ↓ desce um block', 'O block selecionado fica destacado'],
          difficulty: 'beginner' as const,
          xpBonus: 25
        }
      ]
    }
  ),

  createLesson('w06', 'w06-02-tips-tricks', '02. Dicas e Truques Pro',
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
      quizzes: [
        {
          id: 'q-w06-02-1',
          question: 'URLs no output do Warp são clicáveis?',
          options: ['Não', 'Sim, com ⌘ + Click', 'Só em alguns casos', 'Precisa de plugin'],
          correctIndex: 1,
          explanation: '⌘ + Click em qualquer URL no output abre no browser automaticamente!',
          xp: 10
        },
        {
          id: 'q-w06-02-2',
          question: 'Como acessar rapidamente um diretório mostrado no output?',
          options: ['Copiar e colar', '⌘ + Click no path', 'Não é possível', 'Arrastar para a linha'],
          correctIndex: 1,
          explanation: 'Paths são clicáveis! ⌘ + Click abre no Finder, ⌘ + ⇧ + Click cd para o diretório.',
          xp: 12
        },
        {
          id: 'q-w06-02-3',
          question: 'Como repetir o último comando rapidamente?',
          options: ['Digitar novamente', '↑ e Enter', '⌘ + R', 'Tab'],
          correctIndex: 1,
          explanation: 'Seta ↑ mostra o comando anterior, Enter executa. Simples e rápido!',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w06-02-1',
          title: 'Use 3 truques Pro',
          description: 'Demonstre domínio dos truques avançados do Warp.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# 1. Execute: echo "Visite https://github.com"
# 2. ⌘ + Click na URL (deve abrir browser)
# 3. Execute: ls ~/Developer
# 4. ⌘ + Click em um diretório (deve abrir Finder)`,
          solution: `# Verificação:
# 1. URL abriu no browser ✓
# 2. Diretório abriu no Finder ✓
# 3. Experimente também:
#    - ⌘ + ⇧ + Click em path para cd
#    - ⌘ + K para limpar terminal`,
          hints: ['⌘ + Click é seu melhor amigo', 'Paths também são clicáveis', 'Combine com ⇧ para ações extras'],
          difficulty: 'beginner' as const,
          xpBonus: 25
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 07: CUSTOMIZAÇÃO
// ============================================================================

const module07Lessons: Lesson[] = [
  createLesson('w07', 'w07-01-themes', '01. Temas e Aparência',
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
      xp: 50,
      duration: 12,
      difficulty: 'beginner',
      tags: ['temas', 'customização', 'aparência'],
      codeExamples: [
        {
          id: 'ce-w07-01-1',
          title: 'prefs.yaml - Configuração Visual',
          language: 'yaml',
          code: `# ~/.warp/prefs.yaml
theme: "catppuccin_mocha"
font_family: "JetBrains Mono Nerd Font"
font_size: 15
window_opacity: 0.92
cursor_shape: "block"
cursor_blink: false`,
          explanation: 'Configuração visual completa do Warp com tema Catppuccin',
          runnable: false
        },
        {
          id: 'ce-w07-01-2',
          title: 'Tema Customizado',
          language: 'yaml',
          code: `# ~/.warp/themes/meu-tema.yaml
name: "Meu Tema Custom"
background: "#1a1b26"
foreground: "#c0caf5"
cursor: "#f7768e"
selection: "#33467c"
# Cores ANSI
black: "#15161e"
red: "#f7768e"
green: "#9ece6a"
yellow: "#e0af68"
blue: "#7aa2f7"
magenta: "#bb9af7"
cyan: "#7dcfff"
white: "#c0caf5"`,
          explanation: 'Estrutura de tema personalizado para o Warp',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w07-01-1',
          question: 'Qual tema é recomendado para longas sessões de código?',
          options: ['Tema claro do sistema', 'Catppuccin Mocha (escuro, suave)', 'High contrast', 'Qualquer um'],
          correctIndex: 1,
          explanation: 'Catppuccin Mocha tem cores suaves que reduzem cansaço visual em sessões longas!',
          xp: 10
        },
        {
          id: 'q-w07-01-2',
          question: 'Onde ficam os temas customizados do Warp?',
          options: ['~/.config/warp/', '~/.warp/themes/', '/usr/local/warp/', '~/Library/Warp/'],
          correctIndex: 1,
          explanation: 'Temas personalizados ficam em ~/.warp/themes/ com extensão .yaml!',
          xp: 10
        },
        {
          id: 'q-w07-01-3',
          question: 'Como trocar tema rapidamente para apresentações?',
          options: ['Editar prefs.yaml', '⌘ + P → theme', 'Reinstalar Warp', 'Preferences > Themes'],
          correctIndex: 1,
          explanation: '⌘ + P abre Command Palette, digite "theme" para trocar rapidamente!',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w07-01-1',
          title: 'Personalize seu Warp',
          description: 'Configure o visual do Warp do seu jeito.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# 1. Veja os temas disponíveis:
⌘ + P → digite "theme"

# 2. Escolha um tema e aplique

# 3. Configure sua fonte preferida em:
cat ~/.warp/prefs.yaml | grep font`,
          solution: `# Verificação:
# 1. Tema alterado com sucesso ✓
# 2. Verificar configuração:
cat ~/.warp/prefs.yaml

# Deve mostrar:
# theme: "seu_tema_escolhido"
# font_family: "sua_fonte"
# font_size: 14-16`,
          hints: ['Catppuccin é ótimo para quem programa muito', 'JetBrains Mono tem ligatures', 'Teste opacidade entre 0.85 e 0.95'],
          difficulty: 'beginner' as const,
          xpBonus: 25
        }
      ]
    }
  ),

  createLesson('w07', 'w07-02-prefs-complete', '02. Configuração Completa',
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
      xp: 70,
      duration: 15,
      difficulty: 'intermediate',
      tags: ['configuração', 'prefs.yaml', 'personalização'],
      codeExamples: [
        {
          id: 'ce-w07-02-1',
          title: 'prefs.yaml Completo TOP 1%',
          language: 'yaml',
          code: `# ~/.warp/prefs.yaml - Config TOP 1%
# ═══ APARÊNCIA ═══
theme: "catppuccin_mocha"
font_family: "JetBrains Mono Nerd Font"
font_size: 15
window_opacity: 0.92
cursor_shape: "block"
cursor_blink: false

# ═══ FUNCIONALIDADES ═══
warp_ai_enabled: true
blocks_enabled: true
show_block_timestamps: true
input_position: "bottom"

# ═══ COMPORTAMENTO ═══
bell_enabled: false
scrollback_lines: 10000
restore_working_directory: true

# ═══ TERMINAL ═══
default_shell: "/bin/zsh"
inherit_env: true`,
          explanation: 'Configuração completa do Warp com todas as categorias',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w07-02-1',
          question: 'Como aplicar mudanças após editar prefs.yaml?',
          options: ['Automático', 'Reiniciar o computador', 'Fechar e abrir Warp (⌘ + Q)', 'Rodar warp --reload'],
          correctIndex: 2,
          explanation: 'Após editar prefs.yaml, feche o Warp com ⌘ + Q e abra novamente para aplicar!',
          xp: 10
        },
        {
          id: 'q-w07-02-2',
          question: 'Qual a configuração recomendada para scrollback_lines?',
          options: ['100 (mínimo)', '1000 (padrão)', '10000 (recomendado)', 'Infinito'],
          correctIndex: 2,
          explanation: '10000 linhas dá bastante histórico sem consumir muita memória!',
          xp: 10
        },
        {
          id: 'q-w07-02-3',
          question: 'Por que desabilitar cursor_blink e bell_enabled?',
          options: ['Performance', 'Menos distrações visuais/sonoras', 'Obrigatório no Warp', 'Não faz diferença'],
          correctIndex: 1,
          explanation: 'Cursor piscando e sons são distrações. TOP devs preferem ambiente limpo!',
          xp: 10
        }
      ],
      challenges: [
        {
          id: 'ch-w07-02-1',
          title: 'Configure seu prefs.yaml TOP 1%',
          description: 'Aplique todas as configurações recomendadas no seu Warp.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# 1. Abra o arquivo de configuração:
code ~/.warp/prefs.yaml
# ou
nano ~/.warp/prefs.yaml

# 2. Adicione as configurações TOP 1%
# (veja o code example acima)

# 3. Salve e reinicie o Warp`,
          solution: `# Verificação:
cat ~/.warp/prefs.yaml

# Deve conter (mínimo):
# - theme definido
# - font_family definida
# - cursor_blink: false
# - bell_enabled: false
# - scrollback_lines: 10000

# Teste: ⌘ + Q para fechar, reabra e veja as mudanças`,
          hints: ['Copie o code example como base', 'Ajuste font_size para seu monitor', 'Test window_opacity entre 0.9 e 1.0'],
          difficulty: 'beginner' as const,
          xpBonus: 30
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 08: PROJETO FINAL
// ============================================================================

const module08Lessons: Lesson[] = [
  createLesson('w08', 'w08-01-final-project', '01. Projeto Final: Setup TOP 1%',
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
      xp: 150,
      duration: 45,
      difficulty: 'advanced',
      tags: ['projeto-final', 'setup', 'top1'],
      codeExamples: [
        {
          id: 'ce-w08-01-1',
          title: 'Setup Completo - Script de Inicialização',
          language: 'bash',
          code: `#!/bin/bash
# setup-warp-top1.sh - Setup automático TOP 1%

echo "🚀 Configurando Warp TOP 1%..."

# 1. Criar estrutura
mkdir -p ~/.warp/workflows ~/.warp/themes

# 2. Verificar prefs.yaml
if [ -f ~/.warp/prefs.yaml ]; then
  echo "✅ prefs.yaml existe"
else
  echo "⚠️  Crie ~/.warp/prefs.yaml"
fi

# 3. Contar workflows
WF_COUNT=$(find ~/.warp/workflows -name "*.yaml" 2>/dev/null | wc -l)
echo "📁 Workflows encontrados: $WF_COUNT"

# 4. Verificar fonte
if fc-list | grep -q "JetBrains Mono"; then
  echo "✅ JetBrains Mono instalada"
else
  echo "⚠️  Instale: brew install --cask font-jetbrains-mono-nerd-font"
fi

echo "🎉 Setup verificado!"`,
          explanation: 'Script para verificar e configurar ambiente Warp completo',
          runnable: false
        },
        {
          id: 'ce-w08-01-2',
          title: 'Aliases Claude Code no .zshrc',
          language: 'bash',
          code: `# ~/.zshrc - Aliases TOP 1%

# ═══ CLAUDE CODE ALIASES ═══
alias cc='claude'
alias cc-spot='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume spot-ai'
alias cc-curso='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume curso-claude'
alias cc-sandbox='CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000 claude --resume sandbox'

# ═══ WARP HELPERS ═══
alias warp-workflows='ls -la ~/.warp/workflows/*.yaml | wc -l'
alias warp-edit='code ~/.warp/prefs.yaml'
alias warp-theme='cat ~/.warp/prefs.yaml | grep theme'

# ═══ GIT + WARP ═══
alias gs='git status'
alias gd='git diff'
alias glog='git log --oneline -10'`,
          explanation: 'Aliases para integrar Claude Code e Warp no terminal',
          runnable: false
        }
      ],
      quizzes: [
        {
          id: 'q-w08-01-1',
          question: 'Qual o primeiro passo para setup TOP 1% do Warp?',
          options: ['Instalar temas', 'Criar estrutura de pastas (~/.warp/workflows)', 'Configurar Claude', 'Editar .zshrc'],
          correctIndex: 1,
          explanation: 'mkdir -p ~/.warp/workflows ~/.warp/themes é o primeiro passo para organização!',
          xp: 15
        },
        {
          id: 'q-w08-01-2',
          question: 'Quantos workflows você deve ter para ser TOP 1%?',
          options: ['5-10', '10-20', '20-30+', 'Quanto menos melhor'],
          correctIndex: 2,
          explanation: 'TOP 1% tem 20-30+ workflows cobrindo todas as tarefas repetitivas!',
          xp: 15
        },
        {
          id: 'q-w08-01-3',
          question: 'Qual integração é essencial no setup TOP 1%?',
          options: ['Apenas Git', 'Apenas Docker', 'Claude Code + Git + DevOps', 'Nenhuma integração'],
          correctIndex: 2,
          explanation: 'Setup TOP 1% integra Claude Code, Git, DevOps e produtividade!',
          xp: 15
        },
        {
          id: 'q-w08-01-4',
          question: 'Para que servem Launch Configurations?',
          options: ['Temas', 'Iniciar terminal em diretório/projeto específico', 'Atalhos de teclado', 'Instalar plugins'],
          correctIndex: 1,
          explanation: 'Launch Configs abrem terminal já no diretório do projeto com variáveis configuradas!',
          xp: 15
        }
      ],
      challenges: [
        {
          id: 'ch-w08-01-1',
          title: 'Setup Completo TOP 1%',
          description: 'Implemente todo o setup descrito nesta lição e valide cada componente.',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# PROJETO FINAL - Setup TOP 1%

# 1. Criar estrutura:
mkdir -p ~/.warp/workflows ~/.warp/themes

# 2. Verificar prefs.yaml:
cat ~/.warp/prefs.yaml

# 3. Contar workflows:
ls ~/.warp/workflows/*.yaml | wc -l

# 4. Testar Claude Code alias:
echo "alias cc='claude'" >> ~/.zshrc
source ~/.zshrc

# 5. Validar tudo:
echo "✅ Estrutura criada"
echo "✅ Prefs configurado"
echo "✅ Workflows: $(ls ~/.warp/workflows/*.yaml 2>/dev/null | wc -l)"`,
          solution: `# Verificação completa:

# 1. Estrutura
ls -la ~/.warp/
# Deve mostrar: workflows/, themes/, prefs.yaml

# 2. Workflows (mínimo 20+)
ls ~/.warp/workflows/*.yaml | wc -l
# Deve ser >= 20

# 3. Aliases funcionando
which cc  # ou: alias | grep cc

# 4. Launch Configs
# ⌘ + P → "open launch" → deve mostrar configs

# 🎉 Se tudo passou: VOCÊ É TOP 1%!`,
          hints: [
            'Siga o checklist passo a passo',
            'Use os code examples como template',
            'Valide cada componente antes de prosseguir',
            'O script setup-warp-top1.sh ajuda na verificação'
          ],
          difficulty: 'intermediate' as const,
          xpBonus: 100
        },
        {
          id: 'ch-w08-01-2',
          title: 'Crie 5 workflows personalizados',
          description: 'Crie workflows para SUAS tarefas mais frequentes (não copie, adapte!).',
          context: 'general' as const,
          contextDescription: 'Terminal Warp',
          starterCode: `# Identifique suas 5 tarefas mais repetitivas:
# 1. _________________
# 2. _________________
# 3. _________________
# 4. _________________
# 5. _________________

# Crie um workflow para cada:
cat > ~/.warp/workflows/meu-workflow-1.yaml << 'EOF'
name: Minha Tarefa 1
command: |
  # comandos aqui
description: O que faz
tags: [pessoal, produtividade]
EOF`,
          solution: `# Exemplo de 5 workflows personalizados:

# 1. Backup diário
# 2. Deploy do meu projeto
# 3. Limpeza de Docker
# 4. Update de dependências
# 5. Verificação de saúde do sistema

# Teste: ⌃ + R → busque pelo nome
# Todos devem aparecer e executar corretamente!`,
          hints: [
            'Pense nas tarefas que você repete TODO DIA',
            'Workflows economizam segundos que viram horas',
            'Inclua comentários para lembrar o que faz'
          ],
          difficulty: 'intermediate' as const,
          xpBonus: 75
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
    title: '01. Introdução ao Warp',
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
    title: '02. Atalhos Essenciais',
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
    title: '03. Warp AI',
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
    title: '04. Workflows',
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
    title: '05. Integração com Claude Code',
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
    title: '06. Produtividade Avançada',
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
    title: '07. Customização',
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
    title: '08. Projeto Final',
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

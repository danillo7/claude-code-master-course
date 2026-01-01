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
// MODULE 00: MINDSET - A MENTALIDADE DOS TOP 1%
// ============================================================================

const module00Lessons: Lesson[] = [
  createLesson('00', '00-01-paradigm-shift', '01. A Mudança de Paradigma',
    'Entenda a transformação fundamental: de executor de código para orquestrador de IA.',
    `# A Grande Mudança de Paradigma

## De Executor para Orquestrador

O maior salto mental que um desenvolvedor pode fazer não é aprender uma nova linguagem ou framework. É **mudar fundamentalmente seu papel**:

\`\`\`
ANTES (Desenvolvedor Tradicional):
├── Você escreve cada linha de código
├── Você debugga manualmente
├── Você pesquisa Stack Overflow
└── Você é o executor

DEPOIS (Desenvolvedor AI-First):
├── Você define O QUE precisa ser feito
├── Você valida e refina outputs da IA
├── Você orquestra múltiplos agentes
└── Você é o maestro
\`\`\`

## O Novo Papel do Desenvolvedor

> "O desenvolvedor do futuro não será medido por quantas linhas de código escreve, mas por quão bem ele orquestra agentes de IA para resolver problemas complexos."

### Habilidades que Importam Agora

| Antes | Agora |
|-------|-------|
| Memorizar sintaxe | Definir contexto claro |
| Debuggar linha a linha | Verificar outputs de IA |
| Escrever tudo do zero | Orquestrar e refinar |
| Trabalhar sozinho | Liderar equipes de agentes |

## Por que Isso Importa?

Estudos mostram que desenvolvedores AI-First são **10x mais produtivos** não porque trabalham mais rápido, mas porque:

1. **Delegam tarefas repetitivas** para IA
2. **Focam em decisões de alto nível** que requerem julgamento humano
3. **Iteram rapidamente** com feedback de IA
4. **Escalam seu impacto** usando múltiplos agentes

## Sua Jornada Começa Aqui

Este curso vai transformar sua mentalidade de:
- ❌ "Eu preciso escrever tudo isso"
- ✅ "Como posso orquestrar IA para resolver isso?"

A mudança de paradigma não é opcional - é survival. Os desenvolvedores que não se adaptarem serão substituídos não pela IA, mas por desenvolvedores que sabem usar IA.
`,
    {
      xp: 50,
      duration: 15,
      difficulty: 'beginner',
      isNew: true,
      tags: ['mindset', 'paradigma', 'ai-first', 'fundamentos'],
      quizzes: [
        {
          id: 'q-00-01-1',
          question: 'Qual é a principal mudança de paradigma para desenvolvedores AI-First?',
          options: [
            'Aprender mais linguagens de programação',
            'Transformar-se de executor de código para orquestrador de IA',
            'Trabalhar mais horas por dia',
            'Memorizar mais comandos e sintaxes'
          ],
          correctIndex: 1,
          explanation: 'O desenvolvedor AI-First não escreve cada linha de código - ele define o que precisa ser feito e orquestra agentes de IA para executar, focando em decisões de alto nível.',
          xp: 15
        }
      ]
    }
  ),

  createLesson('00', '00-02-ai-first-principles', '02. Os 10 Princípios AI-FIRST',
    'Domine os 10 princípios que separam os TOP 1% dos desenvolvedores comuns.',
    `# Os 10 Princípios AI-FIRST dos Top 1%

Estes princípios foram destilados de observações de centenas de desenvolvedores de elite. São os **fundamentos inegociáveis** de quem realmente domina IA no desenvolvimento.

## Princípio 1: Delegação Máxima 🎯

> "Se a IA pode fazer, a IA faz."

Não é preguiça - é **alavancagem**. Cada tarefa delegada para IA libera seu cérebro para decisões que realmente importam.

\`\`\`
❌ ERRADO: "Vou escrever esse CRUD na mão"
✅ CERTO: "Claude, crie um CRUD completo para User com validação"
\`\`\`

## Princípio 2: Context is King 👑

> "A qualidade do output é diretamente proporcional à qualidade do contexto."

CLAUDE.md não é opcional. É a diferença entre outputs genéricos e outputs que parecem ter sido feitos por você.

## Princípio 3: Big Prompts Philosophy 📝

> "Um prompt de 200 palavras bem estruturado vale mais que 10 prompts de 20 palavras."

TOP 1% investem tempo no prompt inicial. Os 90% ficam corrigindo outputs ruins de prompts vagos.

## Princípio 4: Verify, Don't Trust 🔍

> "Confiar cegamente na IA é tão perigoso quanto ignorá-la."

Sempre revise outputs críticos. A IA é poderosa, mas não infalível.

## Princípio 5: Iteração Rápida 🔄

> "Prefira 5 iterações de 1 minuto a 1 tentativa de 5 minutos pensando."

O custo de um prompt é praticamente zero. Use isso a seu favor.

## Princípio 6: Safety Nets Automáticos 🛡️

> "Backups, checkpoints e /undo são seus melhores amigos."

Desenvolvedores TOP 1% nunca têm medo de experimentar porque sempre podem voltar atrás.

## Princípio 7: Multi-Agent Thinking 🤖

> "Um agente faz tarefas. Múltiplos agentes resolvem problemas."

Subagents, parallel processing, especialização - pense em termos de **orquestração**.

## Princípio 8: Observabilidade Total 📊

> "O que não é medido não é melhorado."

Langfuse, logs, métricas - os TOP 1% sabem exatamente o que está funcionando.

## Princípio 9: Knowledge Graphs 🧠

> "Memória persistente é superpoder."

Graphiti, Memory MCP - a IA que lembra contexto é exponencialmente mais útil.

## Princípio 10: Continuous Learning 📚

> "A IA de ontem é obsoleta amanhã."

Os TOP 1% dedicam tempo toda semana para aprender novas técnicas e ferramentas.

---

## Checklist de Aplicação

- [ ] Delego tarefas repetitivas para IA?
- [ ] Meu CLAUDE.md está completo e atualizado?
- [ ] Invisto tempo em prompts bem estruturados?
- [ ] Verifico outputs críticos antes de usar?
- [ ] Itero rapidamente em vez de planejar demais?
- [ ] Tenho backups e checkpoints configurados?
- [ ] Uso subagents para tarefas especializadas?
- [ ] Monitoro métricas dos meus outputs de IA?
- [ ] Uso memória persistente entre sessões?
- [ ] Dedico tempo para aprender novas técnicas?
`,
    {
      xp: 100,
      duration: 25,
      difficulty: 'beginner',
      isNew: true,
      tags: ['princípios', 'ai-first', 'top-1%', 'fundamentos'],
      quizzes: [
        {
          id: 'q-00-02-1',
          question: 'Qual princípio afirma que "A qualidade do output é proporcional à qualidade do contexto"?',
          options: [
            'Delegação Máxima',
            'Context is King',
            'Big Prompts Philosophy',
            'Verify, Don\'t Trust'
          ],
          correctIndex: 1,
          explanation: 'O princípio "Context is King" enfatiza que CLAUDE.md e contexto bem definido são a diferença entre outputs genéricos e outputs personalizados.',
          xp: 15
        },
        {
          id: 'q-00-02-2',
          question: 'O que significa "Big Prompts Philosophy"?',
          options: [
            'Enviar o máximo de prompts possível',
            'Investir em prompts bem estruturados ao invés de vários prompts vagos',
            'Usar apenas prompts longos, nunca curtos',
            'Copiar prompts de outros desenvolvedores'
          ],
          correctIndex: 1,
          explanation: 'Big Prompts Philosophy significa investir tempo em um prompt inicial bem estruturado, ao invés de ficar corrigindo outputs ruins de prompts vagos.',
          xp: 15
        }
      ]
    }
  ),

  createLesson('00', '00-03-four-eras', '03. As 4 Eras do Desenvolvedor',
    'Entenda a evolução histórica e por que a Era AI-First exige uma nova mentalidade.',
    `# A Evolução das 4 Eras do Desenvolvedor

A história do desenvolvimento de software pode ser dividida em 4 eras distintas. Entender de onde viemos ajuda a entender para onde vamos.

## Era 1: Artesanal (1960-1990) 🔨

**Características:**
- Programação em baixo nível (Assembly, C)
- Cada projeto era único, feito do zero
- Poucos frameworks, muita reinvenção da roda
- Desenvolvedores eram "gênios solitários"

**Mentalidade da época:**
> "Um bom programador é aquele que escreve código eficiente na mão."

---

## Era 2: Frameworks (1990-2010) 🏗️

**Características:**
- Surgimento de Java, .NET, Ruby on Rails
- Padrões de design (GoF, MVC)
- DRY (Don't Repeat Yourself) vira mantra
- Componentização e reuso de código

**Mentalidade da época:**
> "Um bom programador é aquele que conhece os melhores frameworks."

---

## Era 3: Cloud/DevOps (2010-2022) ☁️

**Características:**
- Microserviços, containers, Kubernetes
- CI/CD, infraestrutura como código
- AWS, GCP, Azure dominam
- O desenvolvedor vira também "ops"

**Mentalidade da época:**
> "Um bom programador é aquele que sabe deployar e escalar."

---

## Era 4: AI-First (2022-Atual) 🤖

**Características:**
- IA como copiloto e executor
- Agentes autônomos e orquestração
- Context Engineering como disciplina
- O desenvolvedor vira orquestrador

**Mentalidade da era atual:**
> "Um bom programador é aquele que sabe orquestrar IA para resolver problemas."

---

## Comparativo Visual

\`\`\`
ERA 1 (Artesanal):     [Dev] → [Código] → [Produto]
ERA 2 (Frameworks):    [Dev] → [Framework] → [Código] → [Produto]
ERA 3 (Cloud):         [Dev] → [Plataforma] → [Deploy] → [Produto]
ERA 4 (AI-First):      [Dev] → [IA/Agentes] → [Produto]
\`\`\`

## O Que Cada Era Exigia

| Era | Habilidade Core | Ferramenta Principal |
|-----|-----------------|---------------------|
| Artesanal | Algoritmos | Editor de texto |
| Frameworks | Padrões de Design | IDE |
| Cloud | Infraestrutura | Terminal + Cloud Console |
| AI-First | Orquestração de IA | Claude Code + MCPs |

## Por Que Isso Importa Pra Você

Desenvolvedores que ainda operam com mentalidade da Era 3 (ou anterior) estão em **desvantagem competitiva**. Não é sobre abandonar conhecimentos anteriores - é sobre **adicionar a camada AI-First** em cima de tudo.

> "O desenvolvedor do futuro usa IA não como muleta, mas como multiplicador de força."

---

## Exercício de Reflexão

Em qual era você opera hoje? Marque as que se aplicam:

- [ ] Ainda escrevo todo código na mão sem assistência de IA
- [ ] Uso GitHub Copilot mas apenas para autocomplete básico
- [ ] Tenho Claude Code instalado mas uso esporadicamente
- [ ] Delego ativamente tarefas para IA e foco em orquestração
- [ ] Uso múltiplos agentes e tenho workflow AI-First estruturado
`,
    {
      xp: 75,
      duration: 20,
      difficulty: 'beginner',
      isNew: true,
      tags: ['história', 'evolução', 'eras', 'ai-first'],
      quizzes: [
        {
          id: 'q-00-03-1',
          question: 'Qual é a principal característica da Era AI-First (2022-atual)?',
          options: [
            'Programação em baixo nível com Assembly',
            'Uso de frameworks como Rails e Django',
            'Microserviços e Kubernetes',
            'IA como copiloto e orquestração de agentes'
          ],
          correctIndex: 3,
          explanation: 'A Era AI-First é caracterizada pelo uso de IA como copiloto e executor, agentes autônomos, Context Engineering e o desenvolvedor como orquestrador.',
          xp: 15
        }
      ]
    }
  ),

  createLesson('00', '00-04-five-traps', '04. Por que 90% Ficam Estagnados',
    'Identifique e evite as 5 armadilhas que prendem a maioria dos desenvolvedores.',
    `# Por que 90% dos Desenvolvedores Ficam Estagnados

Após observar centenas de desenvolvedores tentando adotar IA, identificamos **5 armadilhas** que impedem 90% deles de evoluir para o nível TOP 1%.

## Armadilha 1: O Autocompletar 🔄

**O que é:**
Usar IA apenas como "autocomplete glorificado" - aceitar sugestões linha a linha sem visão de contexto.

**Por que é problemático:**
- Você ainda pensa em termos de linhas de código
- Não aproveita a capacidade de gerar arquivos completos
- Fica preso no modo "executor"

**Solução:**
> Peça features completas, não linhas de código. "Crie o sistema de autenticação completo" > "Complete essa linha".

---

## Armadilha 2: Contexto Zero 📭

**O que é:**
Não configurar CLAUDE.md, não dar contexto do projeto, esperar que a IA adivinhe tudo.

**Por que é problemático:**
- Outputs genéricos que não servem
- Retrabalho constante para adaptar
- Frustração com "IA burra"

**Solução:**
> Invista 30 minutos configurando CLAUDE.md completo. O ROI é exponencial.

---

## Armadilha 3: Agente Único 🤖

**O que é:**
Usar apenas um fluxo linear: você → Claude → output. Sem subagents, sem paralelismo, sem especialização.

**Por que é problemático:**
- Não escala para projetos complexos
- Sobrecarrega contexto único
- Perde especialização de agentes

**Solução:**
> Use subagents: Explorer para entender código, Plan para arquitetar, code-reviewer para revisar.

---

## Armadilha 4: Não-Verificação 🙈

**O que é:**
Aceitar todo output de IA sem verificar, confiar cegamente.

**Por que é problemático:**
- Bugs sutis passam despercebidos
- Código inseguro entra em produção
- Você perde o controle do que está sendo feito

**Solução:**
> Sempre revise código crítico. Use /review, peça explicações, questione decisões.

---

## Armadilha 5: Setup Único ⚙️

**O que é:**
Configurar uma vez e nunca mais evoluir. Mesmos prompts de meses atrás, mesmo CLAUDE.md básico.

**Por que é problemático:**
- IA evolui toda semana
- Novas features não são aproveitadas
- Você estagna enquanto outros avançam

**Solução:**
> Dedique 1h por semana para aprender algo novo. Atualize seu CLAUDE.md mensalmente.

---

## Auto-Diagnóstico: Em Quantas Você Está?

| Armadilha | Você Faz Isso? | Severidade |
|-----------|----------------|------------|
| 1. Autocompletar | ☐ Sim ☐ Não | 🔴 Alta |
| 2. Contexto Zero | ☐ Sim ☐ Não | 🔴 Alta |
| 3. Agente Único | ☐ Sim ☐ Não | 🟡 Média |
| 4. Não-Verificação | ☐ Sim ☐ Não | 🔴 Alta |
| 5. Setup Único | ☐ Sim ☐ Não | 🟡 Média |

## Resultado do Diagnóstico

- **0 armadilhas:** Você está no TOP 1%! 🏆
- **1-2 armadilhas:** Quase lá, ajustes simples 🎯
- **3-4 armadilhas:** Potencial não aproveitado 📈
- **5 armadilhas:** Hora de repensar sua abordagem 🚨

---

## Plano de Escape

### Semana 1: Resolva Armadilhas 1 e 2
- Configure CLAUDE.md completo
- Pratique fazer pedidos de features completas

### Semana 2: Resolva Armadilha 3
- Aprenda sobre subagents
- Use Explorer, Plan e code-reviewer

### Semana 3: Resolva Armadilha 4
- Implemente rotina de verificação
- Use hooks de pre-commit

### Semana 4: Resolva Armadilha 5
- Agende 1h/semana para aprendizado
- Atualize seu setup
`,
    {
      xp: 100,
      duration: 25,
      difficulty: 'beginner',
      isNew: true,
      tags: ['armadilhas', 'diagnóstico', 'evolução', 'mindset'],
      quizzes: [
        {
          id: 'q-00-04-1',
          question: 'Qual armadilha descreve usar IA apenas como "autocomplete glorificado"?',
          options: [
            'Contexto Zero',
            'O Autocompletar',
            'Agente Único',
            'Não-Verificação'
          ],
          correctIndex: 1,
          explanation: 'A armadilha "O Autocompletar" é usar IA apenas para completar linhas ao invés de pedir features completas e pensar em termos de orquestração.',
          xp: 15
        },
        {
          id: 'q-00-04-2',
          question: 'Qual é a solução para a armadilha "Contexto Zero"?',
          options: [
            'Usar mais subagents',
            'Investir tempo configurando CLAUDE.md completo',
            'Verificar todo código gerado',
            'Atualizar setup semanalmente'
          ],
          correctIndex: 1,
          explanation: 'A solução para Contexto Zero é investir 30 minutos configurando um CLAUDE.md completo, pois o ROI é exponencial em termos de qualidade de outputs.',
          xp: 15
        }
      ],
      challenges: [
        {
          id: 'ch-00-04-1',
          title: 'Auto-Avaliação de Mindset',
          description: 'Complete o diagnóstico das 5 armadilhas e crie um plano de escape personalizado para as armadilhas que se aplicam a você.',
          context: 'general',
          contextDescription: 'Aplicável a qualquer desenvolvedor',
          difficulty: 'beginner',
          xpBonus: 50,
          hints: ['Seja honesto no diagnóstico', 'Foque em uma armadilha por semana'],
          validation: 'Compartilhe seu plano de escape no fórum do curso'
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 01: FUNDAMENTALS
// ============================================================================

const module01Lessons: Lesson[] = [
  createLesson('01', '01-01-introduction', '01. O que é Claude Code?',
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

  createLesson('01', '01-02-installation', '02. Instalação e Configuração Inicial',
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

  createLesson('01', '01-03-first-session', '03. Sua Primeira Sessão',
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

  createLesson('01', '01-04-file-operations', '04. Operações com Arquivos',
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

  createLesson('01', '01-05-context-management', '05. Gerenciamento de Contexto',
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
  createLesson('02', '02-01-flags-overview', '01. Visão Geral das Flags',
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

  createLesson('02', '02-02-slash-commands', '02. Slash Commands',
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

  createLesson('02', '02-03-headless-mode', '03. Modo Headless e Automação',
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

  createLesson('02', '02-10-plan-mode', '04. Plan Mode: O Segredo dos TOP 1%',
    'Domine o modo de planejamento para arquitetar soluções antes de implementar.',
    `# Plan Mode: Pense Antes de Agir

## O que é Plan Mode?

Plan Mode é um comando que transforma Claude de executor em arquiteto. Em vez de implementar diretamente, Claude primeiro planeja a abordagem.

\`\`\`bash
# Ativar Plan Mode
claude --plan "Implementar autenticação OAuth"

# Ou durante a conversa
> /plan
\`\`\`

## Quando Usar Plan Mode?

| Cenário | Plan Mode? |
|---------|:----------:|
| Bug simples e localizado | ❌ |
| Feature nova em projeto existente | ✅ |
| Refatoração de múltiplos arquivos | ✅ |
| Mudança arquitetural | ✅✅ |
| Debugging complexo | ✅ |

## O Ciclo Plan → Execute

\`\`\`
┌─────────────────────────────────────────┐
│ 1. PLAN MODE                            │
│    - Analisar requisitos                │
│    - Identificar arquivos afetados      │
│    - Propor abordagem                   │
│    - Listar riscos e trade-offs         │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│ 2. VOCÊ REVISA                          │
│    - Aprovar plano                      │
│    - Ajustar abordagem                  │
│    - Adicionar constraints              │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│ 3. EXECUTE MODE                         │
│    - Implementar conforme plano         │
│    - Seguir ordem definida              │
│    - Reportar progresso                 │
└─────────────────────────────────────────┘
\`\`\`

## Exemplo Real

\`\`\`bash
> claude --plan "Adicionar dark mode ao app"

📋 PLANO PROPOSTO:

1. Arquivos a modificar:
   - src/styles/theme.ts (criar)
   - src/components/ThemeProvider.tsx (criar)
   - src/App.tsx (modificar)
   - tailwind.config.js (modificar)

2. Abordagem:
   - Usar Tailwind dark: classes
   - Contexto React para toggle
   - Persistir preferência em localStorage
   - Respeitar prefers-color-scheme

3. Riscos:
   - Componentes com cores hardcoded
   - Imagens sem variante dark

Aprovar? [y/n/editar]
\`\`\`

## Comandos de Plan Mode

| Comando | Ação |
|---------|------|
| \`/plan\` | Entrar em Plan Mode |
| \`/exit-plan\` | Sair e executar |
| \`/revise\` | Revisar plano |
| \`--plan "..."\` | Iniciar já em plan mode |

## TOP 1% Pattern: Plan First

\`\`\`
AMADOR:
"Adiciona autenticação" → Claude implementa direto → bugs, retrabalho

PRO (TOP 1%):
"Planeja autenticação" → Revisa plano → Ajusta → Executa → Sucesso
\`\`\`

**Regra de Ouro:** Para qualquer tarefa > 30 min, use Plan Mode primeiro.
`,
    {
      xp: 100,
      duration: 20,
      difficulty: 'intermediate',
      tags: ['plan-mode', 'arquitetura', 'top-1-percent'],
      isNew: true,
      quizzes: [
        {
          question: 'Quando você NÃO deveria usar Plan Mode?',
          options: [
            'Implementando feature nova complexa',
            'Corrigindo um typo no README',
            'Fazendo refatoração de múltiplos arquivos',
            'Mudando a arquitetura do projeto'
          ],
          correctIndex: 1,
          explanation: 'Para tarefas simples e localizadas (como corrigir um typo), Plan Mode é overkill. Use direto.'
        },
        {
          question: 'Qual é a principal vantagem do Plan Mode?',
          options: [
            'O código fica mais rápido',
            'Você revisa a abordagem ANTES de implementar',
            'Claude usa menos tokens',
            'Funciona offline'
          ],
          correctIndex: 1,
          explanation: 'Plan Mode permite revisar e ajustar a estratégia antes de escrever código, evitando retrabalho.'
        }
      ]
    }
  ),

  createLesson('02', '02-11-checkpoints', '05. Checkpoints e /rewind',
    'Navegue pelo histórico de mudanças e volte no tempo quando necessário.',
    `# Checkpoints: Seu Ctrl+Z Turbinado

## O Problema

Você está no meio de uma implementação complexa e Claude faz uma mudança que quebra tudo. O que fazer?

❌ Desfazer manualmente (trabalhoso)
❌ Recomeçar do zero (perda de tempo)
✅ Usar Checkpoints (inteligente)

## Como Funcionam Checkpoints

Claude Code cria automaticamente checkpoints a cada mudança significativa:

\`\`\`
Checkpoint #1 → Criou AuthService
Checkpoint #2 → Adicionou login()
Checkpoint #3 → Adicionou logout()
Checkpoint #4 → Refatorou para hooks ← AQUI DEU RUIM
\`\`\`

## Comandos de Navegação

| Comando | Ação |
|---------|------|
| \`/rewind\` | Ver lista de checkpoints |
| \`/rewind 3\` | Voltar para checkpoint #3 |
| \`/diff\` | Ver diferença atual |
| \`/history\` | Histórico de mudanças |

## Exemplo Prático

\`\`\`bash
> /rewind

📍 CHECKPOINTS DISPONÍVEIS:

#4 [15:32] Refatorou AuthService para hooks
#3 [15:28] Adicionou método logout()
#2 [15:25] Adicionou método login()
#1 [15:20] Criou AuthService inicial

Voltar para qual? [1-4/cancel]

> 3

✅ Revertido para checkpoint #3
   Arquivos restaurados: src/services/AuthService.ts
\`\`\`

## Quando Usar /rewind

\`\`\`
✅ USE quando:
- Refatoração quebrou algo
- Quer testar abordagem diferente
- Claude entendeu errado o pedido
- Mudança causou bugs inesperados

❌ EVITE quando:
- Você fez commits git no meio
- Outros arquivos dependem das mudanças
- Já passou muito tempo (sessão longa)
\`\`\`

## Checkpoints vs Git

| Aspecto | Checkpoints | Git |
|---------|-------------|-----|
| Escopo | Sessão Claude | Projeto todo |
| Granularidade | Cada ação | Seus commits |
| Persistência | Até fechar | Permanente |
| Uso ideal | Experimentação | Histórico oficial |

## TOP 1% Pattern: Checkpoint Strategy

\`\`\`
ANTES de mudança arriscada:

1. Confirmar que checkpoint foi criado
2. Testar mudança
3. Se OK → Seguir
4. Se RUIM → /rewind

DICA: Verbalize "crie um checkpoint antes" para mudanças críticas
\`\`\`

## Combinando com Plan Mode

\`\`\`bash
> /plan "Refatorar todo o módulo de auth"

[Claude apresenta plano em 5 etapas]

> Execute etapa 1

[Checkpoint #1 criado automaticamente]

> Execute etapa 2

[Se der errado: /rewind 1]
\`\`\`
`,
    {
      xp: 80,
      duration: 15,
      difficulty: 'intermediate',
      tags: ['checkpoints', 'rewind', 'navegacao', 'undo'],
      isNew: true,
      quizzes: [
        {
          question: 'Qual comando você usa para voltar ao estado anterior?',
          options: [
            '/undo',
            '/back',
            '/rewind',
            '/restore'
          ],
          correctIndex: 2,
          explanation: 'O comando /rewind permite navegar pelos checkpoints e voltar a estados anteriores.'
        }
      ]
    }
  ),

  createLesson('02', '02-12-best-of-n', '06. Padrão Best of N',
    'Gere múltiplas soluções e escolha a melhor - técnica dos especialistas.',
    `# Best of N: Múltiplas Soluções, Melhor Escolha

## O Conceito

Em vez de aceitar a primeira solução, peça N alternativas e escolha a melhor:

\`\`\`
Solução 1 → Funcional mas verbosa
Solução 2 → Elegante mas complexa
Solução 3 → Simples e performática ← ESCOLHIDA
\`\`\`

## Por que Funciona?

LLMs são probabilísticos. A primeira resposta nem sempre é a melhor. Ao gerar múltiplas:
- Explora diferentes abordagens
- Revela trade-offs
- Você toma decisão informada

## Como Aplicar

### Método 1: Pedido Explícito
\`\`\`bash
> "Dê 3 abordagens diferentes para implementar cache"

📋 ABORDAGEM 1: In-Memory Map
- Prós: Simples, zero dependências
- Contras: Não persiste, limite de memória

📋 ABORDAGEM 2: Redis
- Prós: Distribuído, persistente
- Contras: Dependência externa, config

📋 ABORDAGEM 3: LocalStorage + Service Worker
- Prós: Offline-first, nativo
- Contras: Só browser, limite 5MB
\`\`\`

### Método 2: Iteração Rápida
\`\`\`bash
> "Implemente validação de email"
[Claude implementa versão 1]

> "Dê uma alternativa mais robusta"
[Claude implementa versão 2]

> "Agora uma versão mais simples"
[Claude implementa versão 3]

> "Use a versão 2 mas com a simplicidade da 3"
[Claude combina o melhor]
\`\`\`

### Método 3: Competição
\`\`\`bash
> "Se você fosse 3 desenvolvedores diferentes, como cada um implementaria isso?"

👨‍💻 JUNIOR:
[Solução funcional básica]

👩‍💻 SENIOR:
[Solução com patterns]

🧙‍♂️ PRINCIPAL:
[Solução arquitetural elegante]
\`\`\`

## Quando Usar Best of N

| Cenário | N Sugerido |
|---------|:----------:|
| Feature simples | 1 (normal) |
| Decisão arquitetural | 3 |
| Código crítico/core | 3-5 |
| Otimização performance | 5 |
| Algoritmo complexo | 3 |

## TOP 1% Pattern: Decision Matrix

\`\`\`bash
> "Compare as 3 soluções em uma tabela:
   - Complexidade
   - Performance
   - Manutenibilidade
   - Casos de uso ideais"

| Critério | Sol. 1 | Sol. 2 | Sol. 3 |
|----------|--------|--------|--------|
| Complex. | Baixa  | Alta   | Média  |
| Perform. | Média  | Alta   | Alta   |
| Manuten. | Alta   | Média  | Alta   |
| Ideal    | MVP    | Scale  | Balance|

→ Recomendação: Solução 3 para maioria dos casos
\`\`\`

## Combinando Técnicas

\`\`\`
1. Plan Mode → Define abordagem geral
2. Best of N → Explora implementações
3. Checkpoint → Testa a escolhida
4. Rewind se necessário → Tenta outra

RESULTADO: Solução otimizada com baixo risco
\`\`\`

**Regra de Ouro:** Para decisões importantes, nunca aceite a primeira resposta.
`,
    {
      xp: 90,
      duration: 18,
      difficulty: 'advanced',
      tags: ['best-of-n', 'multiplas-solucoes', 'decisao', 'top-1-percent'],
      isNew: true,
      quizzes: [
        {
          question: 'Por que a técnica Best of N funciona?',
          options: [
            'LLMs são determinísticos',
            'A primeira resposta é sempre errada',
            'LLMs são probabilísticos e explorar alternativas revela trade-offs',
            'É mais rápido que pedir uma vez'
          ],
          correctIndex: 2,
          explanation: 'LLMs são probabilísticos, então gerar múltiplas soluções explora diferentes caminhos e revela trade-offs para decisão informada.'
        },
        {
          question: 'Para uma decisão arquitetural, quantas alternativas você deveria pedir?',
          options: [
            '1 (a primeira é suficiente)',
            '2 (para comparar)',
            '3 (padrão recomendado)',
            '10+ (quanto mais melhor)'
          ],
          correctIndex: 2,
          explanation: 'Para decisões arquiteturais, 3 alternativas é o sweet spot - suficiente para comparar sem overwhelm.'
        }
      ],
      challenges: [
        {
          id: 'ch-02-12-1',
          title: 'Decision Matrix na Prática',
          description: 'Peça 3 soluções para um problema real e crie uma decision matrix para escolher',
          context: 'personal',
          contextDescription: 'Use em qualquer projeto seu',
          difficulty: 'intermediate',
          xpBonus: 60,
          hints: ['Escolha um problema real do seu projeto', 'Peça análise em tabela', 'Documente a decisão'],
        }
      ]
    }
  ),

  createLesson('02', '02-13-project-architecture', '07. Arquitetura de Projetos com Claude',
    'Domine como estruturar e navegar projetos complexos com Claude Code.',
    `# Arquitetura de Projetos com Claude Code

Aprenda a trabalhar com projetos de qualquer tamanho com eficiência máxima.

## O Problema da Escala

\`\`\`
Projeto Pequeno (< 20 arquivos)    Projeto Enterprise (500+ arquivos)
         ↓                                    ↓
   Claude vê tudo                    Claude precisa de guia
   Contexto cabíveis                 Contexto estratégico
\`\`\`

## Estratégias por Tamanho de Projeto

### Pequeno (< 50 arquivos)
- ✅ Claude pode explorar livremente
- ✅ Contexto cabe em uma sessão
- ⚡ Estratégia: Deixe Claude usar Explorer

### Médio (50-200 arquivos)
- ⚠️ Precisa de direcionamento
- 📁 Use CLAUDE.md por pasta
- ⚡ Estratégia: Aponte para áreas relevantes

### Grande (200+ arquivos)
- 🎯 Contexto cirúrgico é essencial
- 📋 Master Context Documents
- ⚡ Estratégia: Subagents especializados + CLAUDE.md robusto

## Anatomia de um Projeto Bem Estruturado

\`\`\`
project/
├── CLAUDE.md              ← Visão geral, convenções
├── src/
│   ├── CLAUDE.md          ← Arquitetura do código
│   ├── api/
│   │   └── CLAUDE.md      ← Padrões de API
│   ├── components/
│   │   └── CLAUDE.md      ← Design system
│   └── services/
│       └── CLAUDE.md      ← Padrões de serviço
├── tests/
│   └── CLAUDE.md          ← Padrões de teste
└── docs/
    └── architecture.md    ← Para @include
\`\`\`

## Técnicas TOP 1%

### 1. Onboarding Document
Crie um documento que Claude possa ler para entender o projeto:

\`\`\`markdown
# PROJECT-GUIDE.md

## Visão Geral
Este é um e-commerce B2B com foco em...

## Stack
- Frontend: Next.js 14, TailwindCSS
- Backend: FastAPI, PostgreSQL
- Deploy: Vercel + Railway

## Arquitetura Chave
- /src/app → Rotas Next.js
- /src/lib → Utilitários compartilhados
- /api → Backend FastAPI

## Decisões Arquiteturais
1. Usamos Server Components por padrão
2. Estado global via Zustand (não Redux)
3. Validação com Zod em ambos lados
\`\`\`

### 2. Navigation Hints
No CLAUDE.md raiz, dê dicas de navegação:

\`\`\`markdown
## Onde Encontrar O Quê

| Funcionalidade | Localização |
|----------------|-------------|
| Autenticação | /src/lib/auth/ |
| Checkout | /src/app/checkout/ + /api/orders/ |
| Notificações | /src/services/notifications/ |
| Testes E2E | /tests/e2e/ |
\`\`\`

### 3. Dependency Map
Para projetos complexos, mapeie dependências:

\`\`\`
CheckoutPage
    └── useCart (hook)
          └── CartService
                └── OrderAPI
                      └── PaymentGateway
\`\`\`

## Comandos Úteis para Navegação

| Comando | Quando Usar |
|---------|-------------|
| \`/init\` | Primeira exploração do projeto |
| Explorer subagent | Mapear estrutura |
| \`tree src -L 2\` | Visualizar hierarquia |
| Plan Mode | Antes de mudanças grandes |

## Anti-Padrões a Evitar

| ❌ Evite | ✅ Prefira |
|----------|-----------|
| "Mude o sistema de auth" (vago) | "Mude /src/lib/auth/session.ts para usar JWT" |
| Deixar Claude explorar 500 arquivos | Apontar para os 5-10 relevantes |
| Um CLAUDE.md gigante | CLAUDE.md por área |
`,
    {
      xp: 110,
      duration: 35,
      difficulty: 'advanced',
      tags: ['arquitetura', 'projetos-grandes', 'navegacao', 'top-1-percent'],
      isNew: true,
      quizzes: [
        {
          id: 'q-02-13-1',
          question: 'Para projetos com 200+ arquivos, qual estratégia é mais eficiente?',
          options: ['Deixar Claude explorar tudo livremente', 'Usar contexto cirúrgico + CLAUDE.md por pasta', 'Ler todos os arquivos em uma sessão', 'Não usar Claude para projetos grandes'],
          correctIndex: 1,
          explanation: 'Projetos grandes requerem contexto cirúrgico - apontar para os arquivos relevantes e usar CLAUDE.md por área para guiar a navegação.',
        },
        {
          id: 'q-02-13-2',
          question: 'O que deve conter um "Onboarding Document" para Claude?',
          options: ['Apenas o código mais importante', 'Visão geral, stack, arquitetura e decisões técnicas', 'Lista de todos os arquivos', 'Histórico de commits'],
          correctIndex: 1,
          explanation: 'O Onboarding Document dá contexto estratégico: visão geral do projeto, stack tecnológico, arquitetura principal e decisões que guiam o desenvolvimento.',
        },
      ],
    }
  ),

  createLesson('02', '02-14-multifile-editing', '08. Multi-file Editing Avançado',
    'Técnicas para editar múltiplos arquivos de forma coordenada e eficiente.',
    `# Multi-file Editing: O Superpoder do Claude Code

Aprenda a coordenar edições em múltiplos arquivos como um profissional.

## O Desafio

\`\`\`
Uma feature nova pode tocar:
├── 3 componentes
├── 2 serviços
├── 1 hook
├── 4 testes
├── 2 tipos
└── 1 migração

= 13 arquivos para manter consistentes!
\`\`\`

## Estratégias de Multi-file Editing

### 1. Atomic Changes (Mudanças Atômicas)
\`\`\`
PEDIDO: "Renomeie userId para customerId em todo o projeto"

Claude deve:
1. Encontrar todos os arquivos que usam userId
2. Verificar tipos/interfaces relacionados
3. Atualizar tudo em sequência lógica
4. Validar que nada quebrou
\`\`\`

### 2. Feature-based Editing
\`\`\`
PEDIDO: "Adicione campo de telefone ao usuário"

Ordem de edição:
1. types/user.ts        → Adiciona campo no tipo
2. api/users.ts         → Atualiza endpoint
3. db/migrations/       → Cria migration
4. components/UserForm  → Adiciona input
5. tests/user.test.ts   → Atualiza testes
\`\`\`

### 3. Refactoring Coordenado
\`\`\`
PEDIDO: "Extraia a lógica de validação para um módulo separado"

Claude:
1. Cria novo arquivo /lib/validation.ts
2. Move funções de validação
3. Atualiza imports em todos os consumidores
4. Verifica que tudo compila
\`\`\`

## Técnicas Avançadas

### TodoWrite para Tracking
Claude usa TodoWrite internamente para rastrear:

\`\`\`
[x] Atualizar types/user.ts
[x] Atualizar api/users.ts
[ ] Atualizar components/UserForm
[ ] Atualizar tests
\`\`\`

### O Padrão "Verify After Each"
\`\`\`
Para cada arquivo editado:
1. Edita arquivo
2. Verifica tipos (se TypeScript)
3. Se erro, corrige antes de prosseguir
4. Só avança se consistente
\`\`\`

### Checkpoints Estratégicos
\`\`\`
Antes de multi-file edit grande:
1. Commit do estado atual
2. Executa as mudanças
3. Se falhar: git checkout . para reverter
4. Se sucesso: commit atômico
\`\`\`

## Comandos para Multi-file

| Técnica | Comando/Ação |
|---------|--------------|
| Listar arquivos afetados | "Primeiro, liste todos os arquivos que precisam mudar" |
| Ordem de edição | "Qual a ordem correta de edição para manter consistência?" |
| Validação | "Após cada edição, verifique se o TypeScript compila" |
| Rollback | "Se der erro, reverta as últimas 3 edições" |

## Caso Prático: Adicionar Nova Entidade

\`\`\`markdown
PEDIDO: "Adicione uma entidade 'Product' completa ao sistema"

Claude cria (em ordem):

1. src/types/product.ts
   → interface Product { id, name, price, ... }

2. src/api/products.ts
   → CRUD endpoints

3. src/services/productService.ts
   → Lógica de negócio

4. src/hooks/useProducts.ts
   → React hook

5. src/components/ProductCard.tsx
   → Componente de exibição

6. src/components/ProductForm.tsx
   → Formulário de criação/edição

7. tests/products.test.ts
   → Testes unitários

8. Atualiza index exports em cada pasta
\`\`\`

## Anti-Padrões

| ❌ Evite | ✅ Prefira |
|----------|-----------|
| Editar arquivos aleatoriamente | Seguir ordem de dependências |
| Não verificar entre edições | Validar após cada mudança |
| Mudanças que quebram temporariamente | Mudanças atômicas que compilam |
| Editar sem planejar | Plan Mode antes de multi-file |
`,
    {
      xp: 100,
      duration: 30,
      difficulty: 'advanced',
      tags: ['multi-file', 'refactoring', 'coordenacao', 'atomicidade'],
      isNew: true,
      quizzes: [
        {
          id: 'q-02-14-1',
          question: 'Qual a ordem correta para adicionar um novo campo a uma entidade?',
          options: ['Componente → API → Tipo', 'Tipo → API → Componente', 'Teste → Tipo → API', 'Qualquer ordem funciona'],
          correctIndex: 1,
          explanation: 'A ordem correta é: Tipo (define o contrato) → API (implementa) → Componente (consome). Isso garante que cada camada tem o que precisa quando for editada.',
        },
        {
          id: 'q-02-14-2',
          question: 'O que é uma "mudança atômica" em multi-file editing?',
          options: ['Editar apenas arquivos pequenos', 'Editar todos os arquivos relacionados de forma que o projeto sempre compile', 'Editar um arquivo por vez com pausa', 'Fazer backup antes de cada edição'],
          correctIndex: 1,
          explanation: 'Mudança atômica significa que todas as edições relacionadas são feitas juntas, mantendo o projeto em estado consistente. Nunca quebra temporariamente.',
        },
      ],
      challenges: [
        {
          id: 'ch-02-14-1',
          title: 'Multi-file Refactoring Challenge',
          description: 'Peça ao Claude para extrair um serviço de validação de 3 arquivos diferentes para um módulo centralizado. Observe a ordem e consistência.',
          context: 'personal',
          contextDescription: 'Use um projeto seu com validações duplicadas',
          difficulty: 'advanced',
          xpBonus: 80,
          hints: ['Comece pedindo para listar onde há validação duplicada', 'Peça um plano de extração antes de executar', 'Verifique se tudo compila ao final'],
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 03: CONFIGURATION
// ============================================================================

const module03Lessons: Lesson[] = [
  createLesson('03', '03-00-what-is-context', '01. O que é Context Engineering',
    'Descubra por que fornecer o contexto certo para IA é a habilidade mais valiosa da era AI.',
    `# Context Engineering: A Habilidade #1 dos TOP 1%

## O que Separa os Melhores

Simon Willison, um dos maiores especialistas em LLMs do mundo, cunhou o termo **Context Engineering** para descrever a habilidade mais importante de quem trabalha com IA:

> "A arte de fornecer toda a informação relevante que a IA precisa para executar uma tarefa com excelência."

## Por que Isso Importa?

### O Problema do "Prompt Perfeito"
Muitos acreditam que o segredo está em encontrar o "prompt mágico". Mas a verdade é outra:

\`\`\`
❌ "Escreva um código bom"
   → IA não sabe: linguagem, padrões, contexto, objetivo

✅ Contexto completo + prompt simples
   → IA entende: projeto, stack, convenções, objetivo
   → Resultado: código perfeito na primeira tentativa
\`\`\`

### A Matemática do Contexto
\`\`\`
Qualidade do Output = f(Modelo × Contexto × Prompt)

- Modelo: 10x mais potente a cada 1-2 anos
- Prompt: otimização marginal (~10-20%)
- Contexto: multiplicador infinito (0.1x a 100x)
\`\`\`

## Os 3 Pilares do Context Engineering

### 1. 📋 Contexto Declarativo (CLAUDE.md)
Regras, preferências e padrões que nunca mudam.

### 2. 📂 Contexto de Projeto
Estrutura, dependências, arquitetura específica.

### 3. 💬 Contexto Conversacional
O que você está tentando fazer AGORA.

## Claude Code: A Ferramenta de Context Engineering

O Claude Code foi desenhado para Context Engineering:

| Recurso | Função |
|---------|--------|
| CLAUDE.md | Contexto declarativo persistente |
| @file | Incluir arquivos específicos |
| @folder | Incluir estrutura de pastas |
| /init | Gerar contexto automático |
| Memory MCP | Persistência entre sessões |

## A Mentalidade TOP 1%

\`\`\`
ANTES de escrever qualquer prompt, pergunte:

1. Claude tem TODO o contexto necessário?
2. Ele sabe as regras do projeto?
3. Ele entende os padrões que seguimos?
4. Ele conhece os anti-patterns a evitar?
\`\`\`

## Na Prática

**Developer Médio:**
> "Crie um componente de botão"
> → Resultado: código genérico, sem padrões

**TOP 1% (Context Engineer):**
> Setup: CLAUDE.md com design system + padrões de código
> Prompt: "Crie um componente de botão"
> → Resultado: código perfeito, alinhado com todo o projeto
`,
    {
      xp: 100,
      duration: 15,
      difficulty: 'beginner',
      tags: ['context-engineering', 'fundamentos', 'top-1-percent'],
      isNew: true,
      quizzes: [
        {
          question: 'Segundo Simon Willison, o que é Context Engineering?',
          options: [
            'Escrever prompts mais longos',
            'Usar modelos mais caros',
            'A arte de fornecer toda informação relevante para a IA',
            'Memorizar comandos do terminal'
          ],
          correctIndex: 2,
          explanation: 'Context Engineering é sobre dar à IA todo o contexto necessário, não sobre o tamanho do prompt ou poder do modelo.'
        },
        {
          question: 'Qual fator tem o maior multiplicador na qualidade do output?',
          options: [
            'Modelo (mais potente)',
            'Prompt (mais elaborado)',
            'Contexto (mais completo)',
            'Velocidade (mais rápido)'
          ],
          correctIndex: 2,
          explanation: 'O contexto é um multiplicador de 0.1x a 100x, enquanto modelo e prompt têm impacto mais limitado.'
        }
      ]
    }
  ),

  createLesson('03', '03-01-hierarchy', '02. Hierarquia de Contexto TOP 1%',
    'Entenda como os arquivos de contexto se organizam e priorizam.',
    `# A Hierarquia de Contexto do Claude Code

## Por que Hierarquia Importa?

O Claude Code lê múltiplas fontes de contexto. Entender a **ordem de prioridade** é crucial:

\`\`\`
MAIOR PRIORIDADE (sobrescreve)
│
├── 1. System Prompt (sessão atual)
├── 2. .claude/CLAUDE.md (projeto local)
├── 3. CLAUDE.md (raiz do projeto)
├── 4. ~/.claude/CLAUDE.md (global usuário)
├── 5. settings.json (configurações técnicas)
│
MENOR PRIORIDADE (base)
\`\`\`

## Mapa Mental da Hierarquia

\`\`\`
~/.claude/
├── CLAUDE.md              ← Global: suas preferências universais
├── settings.json          ← Configurações técnicas
└── skills/                ← Skills customizadas

~/projeto/
├── CLAUDE.md              ← Projeto: regras deste projeto (prioridade!)
├── .claude/
│   └── CLAUDE.md          ← Alternativa (mesma prioridade)
└── src/
    └── .claude/
        └── CLAUDE.md      ← Per-folder: contexto específico
\`\`\`

## Estratégia TOP 1%: Camadas de Contexto

### Camada 1: Global (~/.claude/CLAUDE.md)
**O que colocar:**
- Suas preferências de estilo de código
- Idioma preferido (Português BR)
- Regras de segurança universais
- Padrões que você SEMPRE quer

\`\`\`markdown
# ~/.claude/CLAUDE.md

## Preferências Globais
- Idioma: Português BR
- Código: TypeScript strict
- NUNCA: deletar sem aprovação

## Meu Contexto Pessoal
- Nome: Dr. Danillo Costa
- Empresas: Costa Law, CLA Digital, AI Spot
\`\`\`

### Camada 2: Projeto (/projeto/CLAUDE.md)
**O que colocar:**
- Stack específica do projeto
- Convenções de código do projeto
- Comandos importantes
- Estrutura de pastas

\`\`\`markdown
# CLAUDE.md - Projeto X

## Stack
- Next.js 14 + App Router
- Tailwind CSS
- Prisma + PostgreSQL

## Comandos
- npm run dev: desenvolvimento
- npm run build: produção
\`\`\`

### Camada 3: Per-Folder (/src/api/.claude/CLAUDE.md)
**O que colocar:**
- Contexto específico daquela pasta
- Padrões de API endpoints
- Regras de módulo específico

## Conflitos: Quem Ganha?

\`\`\`
Global: "Use aspas duplas"
Projeto: "Use aspas simples"

→ RESULTADO: Aspas simples (projeto tem prioridade)
\`\`\`

**Regra de Ouro:** Mais específico sempre ganha.

## Quiz Mental

Antes de criar um CLAUDE.md, pergunte:
1. Isso se aplica a TODOS os meus projetos? → Global
2. Isso é específico DESTE projeto? → Projeto
3. Isso é específico DESTA pasta? → Per-folder
`,
    {
      xp: 80,
      duration: 12,
      difficulty: 'intermediate',
      tags: ['hierarquia', 'claude.md', 'prioridade'],
      isNew: true,
      quizzes: [
        {
          question: 'Qual arquivo tem MAIOR prioridade quando há conflito?',
          options: [
            '~/.claude/CLAUDE.md (global)',
            '/projeto/CLAUDE.md (projeto)',
            'settings.json',
            'Nenhum, são iguais'
          ],
          correctIndex: 1,
          explanation: 'O CLAUDE.md do projeto tem prioridade sobre o global. Mais específico sempre ganha.'
        },
        {
          question: 'Onde você colocaria uma regra que se aplica a TODOS os seus projetos?',
          options: [
            'Em cada projeto individualmente',
            'No ~/.claude/CLAUDE.md (global)',
            'No settings.json',
            'Em um arquivo .env'
          ],
          correctIndex: 1,
          explanation: 'O CLAUDE.md global (~/.claude/) é ideal para preferências universais que você quer em todos os projetos.'
        }
      ]
    }
  ),

  createLesson('03', '03-02-claudemd', '03. O Arquivo CLAUDE.md',
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
      tags: ['configuração', 'claude.md', 'regras', 'context-engineering'],
      isNew: true,
      quizzes: [
        {
          question: 'Qual é a localização padrão do CLAUDE.md global?',
          options: [
            '/etc/claude/CLAUDE.md',
            '~/.claude/CLAUDE.md',
            '~/CLAUDE.md',
            '/usr/local/claude/config.md'
          ],
          correctIndex: 1,
          explanation: 'O CLAUDE.md global fica em ~/.claude/CLAUDE.md e é lido em todas as sessões.'
        },
        {
          question: 'O que acontece quando você tem um CLAUDE.md global E um de projeto?',
          options: [
            'Apenas o global é lido',
            'Apenas o do projeto é lido',
            'O do projeto tem prioridade, mas ambos são lidos',
            'Gera um erro de conflito'
          ],
          correctIndex: 2,
          explanation: 'Ambos são lidos, mas o CLAUDE.md do projeto tem prioridade em caso de conflito.'
        }
      ],
      challenges: [
        {
          id: 'ch-03-02-1',
          title: 'Crie seu CLAUDE.md Pessoal',
          description: 'Crie um CLAUDE.md global com suas preferências',
          context: 'personal',
          contextDescription: 'Configure para seu estilo de trabalho',
          difficulty: 'beginner',
          xpBonus: 40,
          hints: ['Inclua suas linguagens preferidas', 'Adicione regras de segurança'],
        },
        {
          id: 'ch-03-02-2',
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

  createLesson('03', '03-03-settings', '04. Configurações Avançadas',
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

  createLesson('03', '03-04-master-context', '05. Master Context Documents',
    'Crie documentos de contexto de nível profissional usados pelos TOP 1%.',
    `# Master Context Documents

## O que os TOP 1% Fazem Diferente

Enquanto a maioria cria CLAUDE.md genéricos, os profissionais de elite criam **Master Context Documents** - documentos vivos que evoluem com o projeto.

## Anatomia de um Master Context Document

### Seção 1: Identidade do Projeto
\`\`\`markdown
# 🎯 [NOME DO PROJETO]

**Missão:** Uma frase que define o propósito
**Stack:** Tecnologias principais
**Status:** Fase atual (MVP/Beta/Produção)
**Última atualização:** [Data]
\`\`\`

### Seção 2: Regras Absolutas (Inegociáveis)
\`\`\`markdown
## 🚨 REGRAS ABSOLUTAS

### NUNCA (Proibições)
- ❌ Deletar dados de produção
- ❌ Expor secrets ou tokens
- ❌ Modificar schema sem migration
- ❌ Push direto na main

### SEMPRE (Obrigações)
- ✅ Testar antes de commitar
- ✅ Documentar breaking changes
- ✅ Usar tipos explícitos
- ✅ Seguir convenções do projeto
\`\`\`

### Seção 3: Padrões de Código
\`\`\`markdown
## 📐 PADRÕES DE CÓDIGO

### Nomenclatura
- Componentes: PascalCase
- Funções: camelCase
- Constantes: UPPER_SNAKE_CASE
- Arquivos: kebab-case

### Exemplos de Referência
\\\`\\\`\\\`typescript
// ✅ Padrão correto
export function useUserData(userId: string): UserData {
  // implementação
}

// ❌ Evitar
export default function(id) {
  // sem tipos, export default anônimo
}
\\\`\\\`\\\`
\`\`\`

### Seção 4: Arquitetura
\`\`\`markdown
## 🏗️ ARQUITETURA

\\\`\\\`\\\`
src/
├── components/     # UI components
│   ├── ui/         # Primitivos (Button, Input)
│   └── features/   # Específicos de feature
├── hooks/          # Custom hooks
├── services/       # Comunicação externa
├── utils/          # Helpers puros
└── types/          # TypeScript types
\\\`\\\`\\\`

### Fluxo de Dados
[API] → [Service] → [Hook] → [Component]
\`\`\`

### Seção 5: Comandos Essenciais
\`\`\`markdown
## ⚡ COMANDOS

| Comando | Ação |
|---------|------|
| npm run dev | Desenvolvimento local |
| npm test | Rodar testes |
| npm run build | Build produção |
| npm run lint | Verificar código |
\`\`\`

## Templates TOP 1%

### Template: Projeto TypeScript
\`\`\`markdown
# CLAUDE.md - [Projeto]

## Stack
- TypeScript 5.x (strict mode)
- [Framework]
- [Database]

## Regras Absolutas
- SEMPRE usar tipos explícitos
- NUNCA usar any (preferir unknown)
- Exports nomeados > default
- Paths aliases via @/

## Padrões
- ESLint + Prettier configurados
- Commits convencionais
- PRs com descrição completa
\`\`\`

### Template: Projeto Jurídico (Costa Law)
\`\`\`markdown
# CLAUDE.md - Costa Law

## Contexto
Escritório de advocacia especializado em direito empresarial

## Regras de Confidencialidade
- NUNCA expor nomes de clientes
- NUNCA armazenar dados sensíveis em logs
- Usar pseudônimos em exemplos

## Padrões de Documentos
- Petições: modelo padrão OAB
- Contratos: cláusulas padrão Costa Law
- Pareceres: estrutura formal

## Linguagem
- Tom: Formal jurídico
- Referências: Legislação brasileira atual
\`\`\`

## Evolução Contínua

\`\`\`
Semana 1: Criar CLAUDE.md básico
Semana 2: Adicionar exemplos de código
Mês 1: Documentar padrões emergentes
Mês 3: Refatorar baseado em aprendizados
Ongoing: Atualizar com cada mudança significativa
\`\`\`

**Regra de Ouro:** Um Master Context Document nunca está "pronto" - ele evolui com o projeto.
`,
    {
      xp: 120,
      duration: 25,
      difficulty: 'advanced',
      tags: ['master-context', 'templates', 'top-1-percent', 'context-engineering'],
      isNew: true,
      quizzes: [
        {
          question: 'O que diferencia um Master Context Document de um CLAUDE.md básico?',
          options: [
            'É mais curto e objetivo',
            'É um documento vivo que evolui com o projeto',
            'Só pode ser usado em projetos grandes',
            'Requer aprovação da Anthropic'
          ],
          correctIndex: 1,
          explanation: 'Master Context Documents são documentos vivos que evoluem continuamente com o projeto, não arquivos estáticos.'
        },
        {
          question: 'Qual seção é MAIS importante em um Master Context Document?',
          options: [
            'Comandos do terminal',
            'Regras Absolutas (NUNCA/SEMPRE)',
            'Lista de dependências',
            'Histórico de commits'
          ],
          correctIndex: 1,
          explanation: 'As Regras Absolutas são críticas porque definem os limites inegociáveis do projeto - erros aqui têm alto impacto.'
        }
      ]
    }
  ),

  createLesson('03', '03-05-per-folder', '06. Per-Folder CLAUDE.md',
    'Contexto granular por pasta para projetos complexos.',
    `# Per-Folder CLAUDE.md: Contexto Granular

## Quando Usar Per-Folder?

Projetos grandes têm áreas distintas que precisam de contexto específico:

\`\`\`
projeto/
├── CLAUDE.md              ← Regras gerais do projeto
├── src/
│   ├── api/
│   │   └── .claude/
│   │       └── CLAUDE.md  ← Regras específicas para API
│   ├── components/
│   │   └── .claude/
│   │       └── CLAUDE.md  ← Regras para componentes UI
│   └── utils/
│       └── .claude/
│           └── CLAUDE.md  ← Regras para utilities
\`\`\`

## Exemplos Práticos

### API Folder (.claude/CLAUDE.md)
\`\`\`markdown
# Contexto: API Endpoints

## Padrões de Endpoint
- Sempre usar verbos REST corretos
- Validar input com Zod
- Retornar erros padronizados

## Estrutura de Response
\\\`\\\`\\\`typescript
{
  success: boolean;
  data?: T;
  error?: { code: string; message: string; }
}
\\\`\\\`\\\`

## Autenticação
- Todos os endpoints requerem Bearer token
- Exceto: /health, /auth/login
\`\`\`

### Components Folder
\`\`\`markdown
# Contexto: UI Components

## Design System
- Usar Tailwind CSS
- Seguir tokens de design em theme.ts
- Componentes devem ser acessíveis (ARIA)

## Estrutura de Componente
1. Interface/Types no topo
2. Styled components (se houver)
3. Subcomponentes
4. Componente principal
5. Export

## Nomenclatura
- Props: ComponentNameProps
- Container: ComponentName.Container
- Variantes: usar CVA
\`\`\`

## Quando Contexto Per-Folder é Overkill?

\`\`\`
✅ USE quando:
- Pastas têm padrões muito diferentes
- Times diferentes trabalham em áreas distintas
- Tecnologias específicas por área

❌ EVITE quando:
- Projeto pequeno (< 20 arquivos)
- Padrões são uniformes
- Você é o único dev
\`\`\`

## Hierarquia de Prioridade (Revisão)

\`\`\`
Per-folder > Projeto > Global

src/api/.claude/CLAUDE.md  ← Maior prioridade nesta pasta
./CLAUDE.md                ← Base do projeto
~/.claude/CLAUDE.md        ← Fallback global
\`\`\`
`,
    {
      xp: 80,
      duration: 15,
      difficulty: 'intermediate',
      tags: ['per-folder', 'contexto-granular', 'projetos-grandes'],
      isNew: true,
      quizzes: [
        {
          question: 'Quando você deveria usar Per-Folder CLAUDE.md?',
          options: [
            'Sempre, em todo projeto',
            'Quando diferentes áreas do projeto têm padrões muito diferentes',
            'Apenas em projetos com mais de 100 arquivos',
            'Nunca, é uma prática deprecada'
          ],
          correctIndex: 1,
          explanation: 'Per-folder é útil quando áreas distintas do projeto precisam de contexto específico, como API vs Components.'
        }
      ]
    }
  ),

  createLesson('03', '03-06-include-system', '07. Sistema @include',
    'Modularize e reutilize contexto entre arquivos.',
    `# Sistema @include: Modularização de Contexto

## O Problema da Duplicação

Sem @include:
\`\`\`markdown
# Projeto A - CLAUDE.md
[100 linhas de regras comuns...]
[Regras específicas do projeto A]

# Projeto B - CLAUDE.md
[As mesmas 100 linhas de regras comuns...]
[Regras específicas do projeto B]
\`\`\`

## A Solução: @include

\`\`\`markdown
# Projeto A - CLAUDE.md
@include ~/.claude/modules/regras-base.md
@include ~/.claude/modules/typescript-strict.md

## Regras Específicas do Projeto A
[Apenas o que é único]
\`\`\`

## Estrutura Modular Recomendada

\`\`\`
~/.claude/
├── CLAUDE.md              ← Seu arquivo principal
└── modules/
    ├── regras-base.md     ← Regras universais
    ├── typescript.md      ← Padrões TypeScript
    ├── react.md           ← Padrões React
    ├── seguranca.md       ← Regras de segurança
    └── juridico.md        ← Padrões Costa Law
\`\`\`

## Exemplos de Módulos

### regras-base.md
\`\`\`markdown
## Regras Universais

### Segurança
- NUNCA expor secrets
- NUNCA deletar sem confirmação
- SEMPRE fazer backup

### Qualidade
- Código limpo e legível
- Comentários em português
- Testes antes de commit
\`\`\`

### typescript.md
\`\`\`markdown
## Padrões TypeScript

- strict mode sempre
- Evitar any (usar unknown)
- Interfaces > Types para objetos
- Exports nomeados
- Paths aliases (@/)
\`\`\`

## Benefícios da Modularização

| Antes | Depois |
|-------|--------|
| Duplicação em N projetos | Single source of truth |
| Atualizar 10 arquivos | Atualizar 1 módulo |
| CLAUDE.md de 500+ linhas | CLAUDE.md enxuto + @includes |
| Inconsistências entre projetos | Consistência garantida |

## Combinando com Per-Folder

\`\`\`markdown
# src/api/.claude/CLAUDE.md

@include ~/.claude/modules/regras-base.md
@include ~/.claude/modules/api-patterns.md

## Regras Específicas desta API
[Contexto local]
\`\`\`

## Setup Rápido

\`\`\`bash
# Criar estrutura de módulos
mkdir -p ~/.claude/modules

# Criar módulo base
cat > ~/.claude/modules/regras-base.md << 'EOF'
## Regras Universais
- NUNCA deletar sem aprovação
- SEMPRE fazer backup antes
EOF
\`\`\`
`,
    {
      xp: 90,
      duration: 18,
      difficulty: 'advanced',
      tags: ['include', 'modularizacao', 'reuso', 'dry'],
      isNew: true,
      quizzes: [
        {
          question: 'Qual é o principal benefício do sistema @include?',
          options: [
            'Deixar o CLAUDE.md mais bonito',
            'Evitar duplicação e ter single source of truth',
            'Fazer o Claude responder mais rápido',
            'Permitir usar múltiplos modelos de IA'
          ],
          correctIndex: 1,
          explanation: '@include permite modularizar regras comuns, eliminando duplicação e garantindo consistência entre projetos.'
        }
      ],
      challenges: [
        {
          id: 'ch-03-06-1',
          title: 'Crie seu Sistema de Módulos',
          description: 'Crie uma estrutura ~/.claude/modules/ com pelo menos 3 módulos reutilizáveis',
          context: 'personal',
          contextDescription: 'Configure módulos para suas necessidades',
          difficulty: 'advanced',
          xpBonus: 100,
          hints: ['Comece com regras-base.md', 'Adicione um módulo por stack', 'Teste incluindo em um projeto real'],
        }
      ]
    }
  ),

  createLesson('03', '03-07-challenge-final', '08. Challenge: CLAUDE.md TOP 1%',
    'Aplique tudo que aprendeu criando um CLAUDE.md de nível profissional.',
    `# 🏆 CHALLENGE FINAL: Crie seu CLAUDE.md TOP 1%

## Objetivo

Criar um sistema completo de Context Engineering para seu ambiente de trabalho, aplicando todos os conceitos do módulo.

## Requisitos Mínimos

### 1. CLAUDE.md Global (~/.claude/CLAUDE.md)
- [ ] Suas preferências universais
- [ ] Regras de segurança (NUNCA/SEMPRE)
- [ ] Informações pessoais relevantes
- [ ] Idioma e tom preferidos

### 2. Estrutura de Módulos
\`\`\`
~/.claude/modules/
├── regras-base.md      ← Regras universais
├── [sua-stack].md      ← Padrões da sua stack
└── [contexto].md       ← Contexto específico (ex: juridico.md)
\`\`\`

### 3. CLAUDE.md de Projeto
Criar um CLAUDE.md para um projeto real usando:
- @include para módulos
- Seção de arquitetura
- Exemplos de código correto/incorreto
- Comandos essenciais

## Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Global CLAUDE.md completo | 25 |
| Pelo menos 3 módulos reutilizáveis | 25 |
| Projeto com @includes funcionando | 25 |
| Regras NUNCA/SEMPRE claras | 15 |
| Exemplos de código | 10 |

## Templates de Partida

### Template: Global
\`\`\`markdown
# CLAUDE.md - [Seu Nome]

## Sobre Mim
[Quem você é, o que faz, contexto profissional]

## Preferências Universais
- Idioma: Português BR
- Tom: [Seu estilo preferido]
- Código: [Suas preferências]

## 🚨 Regras Absolutas
### NUNCA
- [Suas proibições]

### SEMPRE
- [Suas obrigações]
\`\`\`

### Template: Módulo
\`\`\`markdown
# Módulo: [Nome]

## Contexto
[Quando usar este módulo]

## Padrões
[Regras específicas]

## Exemplos
[Código correto/incorreto]
\`\`\`

## Entrega

Após completar:
1. Tire um screenshot da sua estrutura
2. Teste com Claude Code em um projeto real
3. Anote o que funcionou/não funcionou
4. Itere e melhore

**Lembre-se:** Um CLAUDE.md TOP 1% nunca está "pronto" - ele evolui continuamente!

---

> 🎉 Parabéns! Ao completar este challenge, você terá um sistema de Context Engineering de nível profissional!
`,
    {
      xp: 200,
      duration: 60,
      difficulty: 'advanced',
      tags: ['challenge', 'context-engineering', 'master', 'top-1-percent'],
      isNew: true,
      challenges: [
        {
          id: 'ch-03-07-1',
          title: 'CLAUDE.md Global Completo',
          description: 'Crie seu CLAUDE.md global com todas as seções recomendadas',
          context: 'personal',
          contextDescription: 'Seu contexto pessoal universal',
          difficulty: 'intermediate',
          xpBonus: 50,
          hints: ['Inclua NUNCA/SEMPRE', 'Adicione preferências de idioma', 'Mencione suas empresas/projetos'],
        },
        {
          id: 'ch-03-07-2',
          title: 'Sistema de Módulos',
          description: 'Crie pelo menos 3 módulos reutilizáveis em ~/.claude/modules/',
          context: 'personal',
          contextDescription: 'Modularize suas regras',
          difficulty: 'advanced',
          xpBonus: 75,
          hints: ['regras-base.md é obrigatório', 'Adicione um por stack', 'Teste os @includes'],
        },
        {
          id: 'ch-03-07-3',
          title: 'CLAUDE.md Costa Law',
          description: 'Crie um CLAUDE.md profissional para projetos da Costa Law',
          context: 'costa_law',
          contextDescription: 'Contexto jurídico profissional',
          difficulty: 'advanced',
          xpBonus: 100,
          hints: ['Regras de confidencialidade', 'Padrões de documentos legais', 'Linguagem formal jurídica'],
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 04: SKILLS
// ============================================================================

const module04Lessons: Lesson[] = [
  createLesson('04', '04-01-skills-intro', '01. Introdução às Skills',
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

  createLesson('04', '04-02-creating-skills', '02. Criando suas Próprias Skills',
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

  createLesson('04', '04-03-skill-library', '03. Biblioteca de Skills TOP 1%',
    'Conheça as skills mais poderosas e como organizá-las.',
    `# Biblioteca de Skills TOP 1%

Os melhores usuários do Claude Code têm uma biblioteca de skills bem organizada. Aprenda a construir a sua.

## Categorias de Skills

### 1. Análise & Pesquisa
\`\`\`
/pesquisa-curada     → Pesquisa de alta qualidade com fontes
/analise-3-camadas   → Análise em 3 níveis de profundidade
/briefing-executivo  → Resumo CEO-level
/resumo-estrategico  → Destila insights de documentos longos
\`\`\`

### 2. Produtividade & Comunicação
\`\`\`
/message-polish      → Refina mensagens profissionais
/meeting-script      → Roteiro para reuniões importantes
/traducao-corporativa → Tradução com ajuste de tom
\`\`\`

### 3. Desenvolvimento
\`\`\`
/code-review        → Revisão de código estruturada
/prompt-architect   → Cria prompts de alta performance
/ops-howto          → Guias técnicos passo a passo
\`\`\`

### 4. Jurídico (Costa Law)
\`\`\`
/analise-contrato   → Análise técnica de contratos
/legal-shield       → Blindagem jurídica preventiva
/lgpd-compliance    → Adequação LGPD
/workflow-juridico  → Workflow completo end-to-end
\`\`\`

### 5. Dados & Arquivos
\`\`\`
/data-orchestrator  → Organização inteligente de arquivos
/file-orchestrator  → Gestão avançada multi-cloud
\`\`\`

## Estrutura de Pastas Recomendada

\`\`\`
~/.claude/skills/
├── _index.md           # Índice de todas as skills
├── _router.md          # Router automático
├── analise/
│   ├── analise-3-camadas.md
│   ├── briefing-executivo.md
│   └── resumo-estrategico.md
├── comunicacao/
│   ├── message-polish.md
│   └── meeting-script.md
├── dev/
│   ├── code-review.md
│   └── prompt-architect.md
└── juridico/
    ├── analise-contrato.md
    └── lgpd-compliance.md
\`\`\`

## Skill Index (Obrigatória!)

Crie um \`_index.md\` listando todas as suas skills:

\`\`\`markdown
---
description: Índice de todas as skills disponíveis
model-invoked: true
---

# Skills Disponíveis

| Skill | Descrição | Comando |
|-------|-----------|---------|
| Análise 3 Camadas | Análise estruturada | /analise-3-camadas |
| Briefing Executivo | Resumo CEO-level | /briefing-executivo |
| Message Polish | Refina mensagens | /message-polish |
...
\`\`\`

## Skill Router (Avançado)

Um router decide automaticamente qual skill usar:

\`\`\`markdown
---
description: Router automático de skills
model-invoked: true
---

# Skill Router

## Análise de Intenção
1. Identificar palavras-chave no pedido
2. Mapear para categoria de skill
3. Sugerir skill apropriada

## Mapeamento
- "contrato", "cláusula" → /analise-contrato
- "resumo", "síntese" → /briefing-executivo
- "revisar código" → /code-review
- "reunião", "meeting" → /meeting-script
\`\`\`

## Dica TOP 1%

> Mantenha suas skills em um repositório Git separado. Assim você pode versionar, fazer backup e compartilhar com a equipe.

\`\`\`bash
# Exemplo de setup
cd ~/.claude/skills
git init
git remote add origin git@github.com:seu-user/claude-skills.git
\`\`\`
`,
    {
      xp: 110,
      duration: 35,
      difficulty: 'advanced',
      tags: ['skills', 'biblioteca', 'organização'],
      quizzes: [
        {
          question: 'Qual é a função do arquivo _index.md na pasta de skills?',
          options: [
            'Apenas decoração',
            'Listar todas as skills disponíveis para Claude consultar',
            'Configurar o tema do terminal',
            'Armazenar senhas'
          ],
          correctIndex: 1,
          explanation: 'O _index.md serve como catálogo de skills, permitindo que Claude saiba quais skills existem e quando usar cada uma.'
        },
        {
          question: 'O que faz um Skill Router?',
          options: [
            'Instala novas skills automaticamente',
            'Decide automaticamente qual skill usar baseado no contexto',
            'Remove skills antigas',
            'Faz backup das skills'
          ],
          correctIndex: 1,
          explanation: 'O Router analisa o pedido do usuário e sugere/invoca a skill mais apropriada automaticamente.'
        }
      ]
    }
  ),

  createLesson('04', '04-04-productivity-skills', '04. Skills para Produtividade',
    'Skills que multiplicam sua produtividade no dia a dia.',
    `# Skills para Produtividade

Estas skills transformam tarefas repetitivas em operações de um comando.

## 1. Message Polish

Refina qualquer mensagem profissional:

\`\`\`markdown
---
description: Polimento de mensagens profissionais
model-invoked: true
---

# Message Polish

## Quando Usar
Quando o usuário disser "polir", "melhorar", "refinar" + mensagem.

## Processo
1. Identificar tom desejado (formal, casual, assertivo)
2. Corrigir gramática e ortografia
3. Melhorar clareza e fluxo
4. Ajustar tom
5. Manter a essência original

## Output
- Mensagem polida
- Changelog das mudanças (opcional)
\`\`\`

**Exemplo:**
\`\`\`
Input: "polir: oi pessoal, preciso do relatório pra ontem ok?"

Output: "Olá equipe, preciso do relatório com urgência.
Podem me enviar até o final do dia? Agradeço a atenção."
\`\`\`

## 2. Meeting Script

Cria roteiro estruturado para reuniões:

\`\`\`markdown
---
description: Roteiro para reuniões importantes
model-invoked: true
---

# Meeting Script

## Processo
1. Definir objetivo da reunião
2. Criar agenda com tempos
3. Preparar talking points
4. Antecipar objeções
5. Definir próximos passos

## Output
\\\`\\\`\\\`
📋 ROTEIRO: [Nome da Reunião]
⏱️ Duração: X min

1. Abertura (2 min)
   - Contextualização

2. Pauta Principal (X min)
   - Talking point 1
   - Talking point 2

3. Discussão (X min)
   - Perguntas preparadas

4. Fechamento (3 min)
   - Próximos passos
   - Responsáveis
\\\`\\\`\\\`
\`\`\`

## 3. Context Saver

Salva contexto da sessão para retomar depois:

\`\`\`markdown
---
description: Salva contexto da sessão atual
model-invoked: false
---

# Context Saver

## Processo
1. Identificar decisões tomadas
2. Listar arquivos modificados
3. Resumir estado atual
4. Próximos passos pendentes
5. Salvar em Memory MCP

## Output
Arquivo \`session-YYYY-MM-DD.md\` com contexto completo.
\`\`\`

## 4. Quick Audit

Health check rápido do ambiente Claude Code:

\`\`\`markdown
---
description: Auditoria rápida do ambiente
model-invoked: false
---

# Quick Audit

## Verificar
- [ ] MCPs ativos e funcionando
- [ ] Skills carregadas
- [ ] Memory MCP respondendo
- [ ] Configurações corretas
- [ ] Hooks ativos

## Output
Score de saúde: X/10 com recomendações.
\`\`\`

## 5. Tradução Corporativa

Tradução com ajuste de contexto cultural:

\`\`\`markdown
---
description: Tradução corporativa de alta qualidade
model-invoked: true
---

# Tradução Corporativa

## Processo
1. Identificar idioma origem/destino
2. Analisar contexto e tom
3. Traduzir mantendo nuances
4. Adaptar expressões culturais
5. Revisar terminologia técnica

## Diferencial
- Não é tradução literal
- Ajusta tom para cultura destino
- Mantém terminologia do setor
\`\`\`

## Fluxo de Produtividade

\`\`\`
Dia Típico com Skills:

07:30 - /quick-audit (check do ambiente)
09:00 - /meeting-script para call com cliente
10:00 - /message-polish em emails importantes
14:00 - /briefing-executivo para relatório
17:00 - /context-saver para salvar o dia
\`\`\`
`,
    {
      xp: 120,
      duration: 40,
      difficulty: 'intermediate',
      tags: ['skills', 'produtividade', 'automação'],
      quizzes: [
        {
          question: 'Qual skill você usaria para preparar uma reunião importante?',
          options: [
            '/message-polish',
            '/meeting-script',
            '/context-saver',
            '/quick-audit'
          ],
          correctIndex: 1,
          explanation: '/meeting-script cria roteiros estruturados com agenda, talking points e próximos passos para reuniões.'
        }
      ],
      challenges: [
        {
          id: 'ch-04-04-1',
          title: 'Crie 3 Skills de Produtividade',
          description: 'Crie 3 skills que automatizem tarefas do seu dia a dia. Documente o tempo economizado.',
          context: 'personal',
          contextDescription: 'Suas tarefas repetitivas',
          difficulty: 'intermediate',
          xpBonus: 100,
          hints: [
            'Pense em emails, relatórios, documentação',
            'Comece pelas tarefas mais frequentes'
          ]
        }
      ]
    }
  ),

  createLesson('04', '04-05-skill-creator-challenge', '05. Challenge: Skill Creator',
    'Desafio final: crie um sistema completo de skills.',
    `# Challenge: Skill Creator

Este é seu desafio final do módulo de Skills. Você vai criar um sistema completo de skills personalizadas.

## O Desafio

Crie uma **biblioteca de 5 skills** que resolva problemas reais do seu contexto:

### Requisitos Mínimos

1. **_index.md** - Catálogo de todas as skills
2. **_router.md** - Router automático
3. **3 Skills Especializadas** - Para seu contexto

### Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Estrutura correta (frontmatter) | 20 |
| Documentação clara | 20 |
| Exemplos de uso | 20 |
| Utilidade prática | 20 |
| Router funcional | 20 |
| **Total** | **100** |

## Template para Cada Skill

\`\`\`markdown
---
description: [Descrição em 1 linha]
model-invoked: [true/false]
---

# [Nome da Skill]

## Quando Usar
[Em quais situações esta skill é útil]

## Processo
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Input Esperado
[O que o usuário deve fornecer]

## Output
[Formato da saída]

## Exemplos

### Exemplo 1
**Input:** [exemplo de entrada]
**Output:** [exemplo de saída]
\`\`\`

## Ideias por Contexto

### Para Desenvolvedores
- /commit-message-generator
- /api-documentation
- /test-generator
- /bug-report-template
- /code-explainer

### Para Jurídico (Costa Law)
- /parecer-juridico
- /analise-clausulas
- /check-lgpd
- /timeline-processual
- /resumo-decisao

### Para Marketing
- /copy-generator
- /social-post
- /email-campaign
- /a-b-test-analyzer
- /competitor-analysis

### Para Gestão
- /okr-tracker
- /1on1-template
- /project-status
- /decision-log
- /risk-assessment

## Entrega

Ao finalizar, sua estrutura deve ser:

\`\`\`
~/.claude/skills/
├── _index.md         ✓ Obrigatório
├── _router.md        ✓ Obrigatório
├── skill-1.md        ✓ Obrigatório
├── skill-2.md        ✓ Obrigatório
└── skill-3.md        ✓ Obrigatório
\`\`\`

## Bônus (+50 XP cada)

- [ ] Adicionar quizzes interativos em uma skill
- [ ] Criar skill que usa MCP (ex: Memory, GitHub)
- [ ] Documentar em repositório Git com README
- [ ] Criar skill que gera outras skills (meta-skill)

## Validação

Teste suas skills com estes comandos:

\`\`\`bash
# Verificar se skills estão carregadas
claude "liste minhas skills disponíveis"

# Testar o router
claude "preciso de ajuda com [contexto da skill]"

# Invocar diretamente
claude "/nome-da-skill"
\`\`\`

## Reflexão Final

Após completar o challenge, responda:

1. Quanto tempo você economiza por dia com suas skills?
2. Qual skill mais usada?
3. O que você automatizaria a seguir?

---

> **Parabéns!** Ao completar este módulo, você domina uma das features mais poderosas do Claude Code. Skills são o que separam usuários comuns dos TOP 1%.
`,
    {
      xp: 200,
      duration: 60,
      difficulty: 'expert',
      tags: ['skills', 'challenge', 'criação'],
      challenges: [
        {
          id: 'ch-04-05-1',
          title: 'Sistema Completo de Skills',
          description: 'Crie uma biblioteca de 5 skills: _index.md, _router.md, e 3 skills especializadas para seu contexto.',
          context: 'general',
          contextDescription: 'Seu contexto profissional ou pessoal',
          difficulty: 'expert',
          xpBonus: 200,
          hints: [
            'Comece pelo _index.md',
            'O router é o mais importante para automação',
            'Teste cada skill individualmente'
          ]
        },
        {
          id: 'ch-04-05-2',
          title: 'Skill para Costa Law',
          description: 'Se você é advogado ou trabalha com jurídico, crie uma skill completa de análise de contratos.',
          context: 'costa_law',
          contextDescription: 'Contexto jurídico',
          difficulty: 'expert',
          xpBonus: 150,
          hints: [
            'Inclua verificação de cláusulas abusivas',
            'Adicione check de LGPD',
            'Considere diferentes tipos de contrato'
          ]
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 05: MCP (Model Context Protocol)
// ============================================================================

const module05Lessons: Lesson[] = [
  createLesson('05', '05-01-mcp-intro', '01. O que é MCP?',
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

  createLesson('05', '05-02-installing-mcps', '02. Instalando e Configurando MCPs',
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
      quizzes: [
        {
          question: 'Qual flag define o escopo de um MCP?',
          options: ['-e (environment)', '-s (scope)', '-l (local)', '-g (global)'],
          correctIndex: 1,
          explanation: 'A flag -s define o escopo: user (global) ou project (local ao projeto).'
        },
        {
          question: 'Onde ficam os MCPs de escopo "user"?',
          options: ['./claude/', '~/.claude/', '/etc/claude/', '~/.config/claude/'],
          correctIndex: 1,
          explanation: 'MCPs de escopo user ficam em ~/.claude/ e são acessíveis em todas as sessões.'
        }
      ]
    }
  ),

  createLesson('05', '05-03-essential-mcps', '03. MCPs Essenciais',
    'Os MCPs que todo profissional TOP 1% deve ter configurados.',
    `# MCPs Essenciais - O Kit TOP 1%

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
`,
    {
      xp: 100,
      duration: 30,
      difficulty: 'intermediate',
      tags: ['mcp', 'memory', 'github', 'filesystem', 'brave-search'],
      quizzes: [
        {
          question: 'Qual MCP permite persistir contexto entre sessões?',
          options: ['github', 'filesystem', 'memory', 'brave-search'],
          correctIndex: 2,
          explanation: 'O Memory MCP cria um knowledge graph que persiste informações entre sessões.'
        },
        {
          question: 'Para criar PRs diretamente do Claude Code, qual MCP é necessário?',
          options: ['git', 'github', 'gitlab', 'vcs'],
          correctIndex: 1,
          explanation: 'O GitHub MCP permite operações completas de Git/GitHub incluindo PRs, issues e reviews.'
        },
        {
          question: 'O Brave Search MCP é útil para:',
          options: ['Salvar arquivos', 'Pesquisar documentação atualizada', 'Gerenciar containers', 'Criar databases'],
          correctIndex: 1,
          explanation: 'Brave Search permite pesquisar na web diretamente do Claude Code para docs atualizadas.'
        }
      ],
      challenges: [
        {
          id: 'ch-install-essential-mcps',
          title: 'Configure os 4 MCPs Essenciais',
          description: 'Instale e configure memory, github, filesystem e brave-search no seu ambiente.',
          context: 'general',
          contextDescription: 'Configuração padrão para qualquer desenvolvedor',
          difficulty: 'intermediate',
          xpBonus: 40,
          hints: [
            'Use escopo "user" para disponibilidade global',
            'Configure as variáveis de ambiente necessárias',
            'Teste cada MCP após instalação com "claude mcp list"'
          ]
        }
      ]
    }
  ),

  createLesson('05', '05-04-advanced-mcps', '04. MCPs Avançados',
    'MCPs especializados para casos de uso profissionais.',
    `# MCPs Avançados - Nível Enterprise

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
`,
    {
      xp: 120,
      duration: 35,
      difficulty: 'advanced',
      tags: ['mcp', 'playwright', 'langfuse', 'graphiti', 'enterprise'],
      quizzes: [
        {
          question: 'Qual MCP permite automação de browser e screenshots?',
          options: ['selenium', 'playwright', 'puppeteer', 'cypress'],
          correctIndex: 1,
          explanation: 'O Playwright MCP oferece automação completa de browser com screenshots, navegação e forms.'
        },
        {
          question: 'Para observabilidade e tracing de prompts, qual MCP usar?',
          options: ['datadog', 'langfuse', 'prometheus', 'grafana'],
          correctIndex: 1,
          explanation: 'Langfuse é especializado em observabilidade de LLMs com tracing e versionamento de prompts.'
        },
        {
          question: 'Graphiti MCP diferencia-se do Memory padrão por:',
          options: ['Ser mais rápido', 'Usar temporal knowledge graph', 'Ser gratuito', 'Não precisar de setup'],
          correctIndex: 1,
          explanation: 'Graphiti usa temporal knowledge graph com versionamento de fatos e queries complexas.'
        }
      ]
    }
  ),

  createLesson('05', '05-05-mcp-architecture', '05. Arquitetura de MCPs',
    'Entenda como MCPs funcionam internamente e como criar o seu.',
    `# Arquitetura de MCPs

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
`,
    {
      xp: 140,
      duration: 45,
      difficulty: 'expert',
      tags: ['mcp', 'arquitetura', 'custom', 'sdk'],
      quizzes: [
        {
          question: 'Quais são os 3 tipos de capabilities que um MCP pode expor?',
          options: ['Tools, Resources, Prompts', 'Read, Write, Execute', 'Input, Output, Transform', 'Get, Post, Delete'],
          correctIndex: 0,
          explanation: 'MCPs expõem Tools (ações), Resources (dados) e Prompts (templates).'
        },
        {
          question: 'Qual protocolo MCPs usam para comunicação?',
          options: ['REST', 'GraphQL', 'JSON-RPC', 'gRPC'],
          correctIndex: 2,
          explanation: 'MCPs usam JSON-RPC para comunicação entre cliente (Claude) e servidor (MCP).'
        }
      ],
      challenges: [
        {
          id: 'ch-create-simple-mcp',
          title: 'Crie um MCP Personalizado',
          description: 'Crie um MCP simples que expõe uma tool para gerar UUIDs ou timestamps.',
          context: 'general',
          contextDescription: 'Prática de desenvolvimento de MCPs',
          difficulty: 'expert',
          xpBonus: 60,
          hints: [
            'Use o SDK @modelcontextprotocol/sdk',
            'Comece com uma única tool simples',
            'Teste com "claude mcp test"'
          ]
        }
      ]
    }
  ),

  createLesson('05', '05-06-mcp-challenge', '06. Challenge: Stack MCP TOP 1%',
    'Monte sua stack completa de MCPs e documente.',
    `# Challenge: Stack MCP TOP 1%

## Objetivo

Configurar uma stack completa de MCPs que te coloque no TOP 1% de produtividade.

## Requisitos Mínimos

### Tier 1: Essenciais (Obrigatório)
- [ ] Memory MCP configurado
- [ ] GitHub MCP com token
- [ ] Filesystem MCP com paths
- [ ] Um MCP de busca (Brave ou similar)

### Tier 2: Produtividade (Escolha 2+)
- [ ] Playwright para automação
- [ ] Sequential Thinking para análise
- [ ] Postgres/SQLite para dados
- [ ] Slack/Discord para comunicação

### Tier 3: Enterprise (Opcional)
- [ ] Langfuse para observabilidade
- [ ] Graphiti para memory avançado
- [ ] Custom MCP próprio

## Entregáveis

### 1. settings.json Completo

\`\`\`json
{
  "mcpServers": {
    // Seu setup aqui
  }
}
\`\`\`

### 2. Documentação

Criar \`~/.claude/MCP-STACK.md\`:

\`\`\`markdown
# Minha Stack MCP

## MCPs Ativos
| MCP | Versão | Uso Principal |
|-----|--------|---------------|
| ... | ... | ... |

## Variáveis de Ambiente Necessárias
- GITHUB_TOKEN: ...
- BRAVE_API_KEY: ...

## Comandos Úteis
- claude mcp list
- ...
\`\`\`

### 3. Teste de Integração

Demonstrar que todos os MCPs funcionam:

\`\`\`bash
# Script de verificação
claude mcp list
claude mcp test memory
claude mcp test github
# ... etc
\`\`\`

## Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| 4 MCPs essenciais | 40 |
| 2+ MCPs de produtividade | 30 |
| Documentação completa | 20 |
| Variáveis seguras (.env) | 10 |
| **Total** | **100** |

## Dicas

1. **Comece pelos essenciais** - Memory, GitHub, Filesystem
2. **Adicione gradualmente** - Um MCP por vez
3. **Documente tudo** - Futuro você agradece
4. **Use .env** - Nunca hardcode tokens
5. **Teste sempre** - \`claude mcp test <name>\`

## Exemplo de Stack Completa

\`\`\`
┌──────────────────────────────────────────┐
│            MINHA STACK MCP               │
├──────────┬──────────┬──────────┬─────────┤
│  memory  │  github  │filesystem│  brave  │
│    ✓     │    ✓     │    ✓     │    ✓    │
├──────────┼──────────┼──────────┼─────────┤
│playwright│ langfuse │ postgres │ custom  │
│    ✓     │    ✓     │    ○     │    ○    │
└──────────┴──────────┴──────────┴─────────┘
✓ = Configurado  ○ = Planejado
\`\`\`

## Bônus: Compartilhe

Após completar, considere:
- Criar um gist com sua config
- Escrever um post sobre sua stack
- Ajudar outros a configurar

> **Lembre-se:** A melhor stack é a que você realmente usa!
`,
    {
      xp: 200,
      duration: 60,
      difficulty: 'expert',
      tags: ['mcp', 'challenge', 'stack', 'configuração'],
      challenges: [
        {
          id: 'ch-mcp-stack-complete',
          title: 'Stack MCP Completa',
          description: 'Configure todos os MCPs essenciais e pelo menos 2 avançados, com documentação.',
          context: 'general',
          contextDescription: 'Challenge final do módulo MCPs',
          difficulty: 'expert',
          xpBonus: 100,
          hints: [
            'Use o checklist do lesson como guia',
            'Crie o arquivo MCP-STACK.md com sua documentação',
            'Guarde tokens em variáveis de ambiente, nunca no código'
          ]
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 06: HOOKS
// ============================================================================

const module06Lessons: Lesson[] = [
  createLesson('06', '06-01-hooks-intro', '01. Introdução aos Hooks',
    'Aprenda a automatizar ações com hooks do Claude Code.',
    `# Hooks - Automação Inteligente

Hooks são **scripts que executam automaticamente** em resposta a eventos do Claude Code.

## Conceito

\`\`\`
┌─────────────────┐
│   Claude Code   │
│                 │
│  ┌───────────┐  │     ┌─────────────┐
│  │  Evento   │──┼────▶│    Hook     │
│  │ (trigger) │  │     │  (script)   │
│  └───────────┘  │     └─────────────┘
└─────────────────┘
\`\`\`

## Eventos Disponíveis

| Evento | Quando Dispara | Exemplo de Uso |
|--------|----------------|----------------|
| \`PreToolUse\` | Antes de usar ferramenta | Validar comando |
| \`PostToolUse\` | Depois de usar ferramenta | Lint, format |
| \`Notification\` | Notificações do sistema | Alertas |
| \`Stop\` | Quando Claude para | Cleanup |

## Por que Usar Hooks?

1. **Automação** - Tarefas repetitivas automáticas
2. **Consistência** - Padrões aplicados sempre
3. **Segurança** - Validação antes de ações
4. **Produtividade** - Menos trabalho manual
5. **Qualidade** - Lint, format, test automáticos

## Exemplo Simples

\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": { "tool_name": "Write" },
      "hooks": [{
        "type": "command",
        "command": "echo 'Arquivo criado!'"
      }]
    }]
  }
}
\`\`\`

> **Lembre-se:** Hooks são poderosos mas devem ser usados com cuidado!
`,
    {
      xp: 80,
      duration: 25,
      difficulty: 'intermediate',
      tags: ['hooks', 'automação', 'eventos'],
      quizzes: [
        {
          question: 'O que são Hooks no Claude Code?',
          options: ['Plugins de terceiros', 'Scripts que executam em resposta a eventos', 'Atalhos de teclado', 'Comandos do terminal'],
          correctIndex: 1,
          explanation: 'Hooks são scripts que executam automaticamente em resposta a eventos específicos do Claude Code.'
        },
        {
          question: 'Qual evento dispara ANTES de usar uma ferramenta?',
          options: ['PostToolUse', 'PreToolUse', 'BeforeTool', 'ToolStart'],
          correctIndex: 1,
          explanation: 'PreToolUse dispara antes de usar uma ferramenta, permitindo validação ou modificação.'
        }
      ]
    }
  ),

  createLesson('06', '06-02-hook-configuration', '02. Configurando Hooks',
    'Aprenda a estrutura e configuração de hooks no settings.json.',
    `# Configurando Hooks

## Onde Configurar

Hooks são configurados no \`settings.json\`:

\`\`\`bash
# Global (todas as sessões)
~/.claude/settings.json

# Por projeto
./.claude/settings.json
\`\`\`

## Estrutura do settings.json

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": { /* condição */ },
        "hooks": [
          { /* ação */ }
        ]
      }
    ],
    "PostToolUse": [ /* ... */ ],
    "Notification": [ /* ... */ ],
    "Stop": [ /* ... */ ]
  }
}
\`\`\`

## Anatomy de um Hook

\`\`\`json
{
  "matcher": {
    "tool_name": "Write",        // Filtrar por tool
    "tool_input": {              // Filtrar por input
      "file_path": ".*\\\\.ts$"   // Regex
    }
  },
  "hooks": [
    {
      "type": "command",
      "command": "npm run lint",
      "timeout": 30000,
      "working_directory": "/path/to/project"
    }
  ]
}
\`\`\`

## Tipos de Hook

### 1. Command Hook
Executa um comando shell:

\`\`\`json
{
  "type": "command",
  "command": "npm run format",
  "timeout": 10000
}
\`\`\`

### 2. URL Hook
Chama um endpoint HTTP:

\`\`\`json
{
  "type": "url",
  "url": "http://localhost:3000/webhook",
  "method": "POST"
}
\`\`\`

## Variáveis Disponíveis

| Variável | Descrição |
|----------|-----------|
| \`$TOOL_NAME\` | Nome da ferramenta |
| \`$TOOL_INPUT\` | Input JSON da ferramenta |
| \`$TOOL_OUTPUT\` | Output da ferramenta |
| \`$CWD\` | Diretório de trabalho |
| \`$SESSION_ID\` | ID da sessão atual |

## Exemplo Completo

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write",
          "tool_input": {
            "file_path": ".*\\\\.(ts|tsx)$"
          }
        },
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix $TOOL_INPUT_FILE_PATH",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}
\`\`\`

## Validando Configuração

\`\`\`bash
# Verificar sintaxe do settings.json
cat ~/.claude/settings.json | jq .

# Ver hooks ativos
claude config list | grep hooks
\`\`\`
`,
    {
      xp: 90,
      duration: 30,
      difficulty: 'intermediate',
      tags: ['hooks', 'configuração', 'settings'],
      quizzes: [
        {
          question: 'Onde os hooks são configurados?',
          options: ['hooks.json', 'package.json', 'settings.json', 'config.yaml'],
          correctIndex: 2,
          explanation: 'Hooks são configurados no settings.json, seja global (~/.claude/) ou por projeto (./.claude/).'
        },
        {
          question: 'Qual propriedade define a condição para um hook executar?',
          options: ['condition', 'filter', 'matcher', 'trigger'],
          correctIndex: 2,
          explanation: 'O "matcher" define a condição (tool_name, tool_input) que precisa ser satisfeita.'
        }
      ],
      challenges: [
        {
          id: 'ch-basic-hook-config',
          title: 'Configure Seu Primeiro Hook',
          description: 'Crie um hook que imprime uma mensagem quando qualquer arquivo é escrito.',
          context: 'general',
          contextDescription: 'Primeiro contato com configuração de hooks',
          difficulty: 'intermediate',
          xpBonus: 30,
          hints: [
            'Use PostToolUse com matcher para Write',
            'O comando pode ser um simples echo',
            'Coloque no ~/.claude/settings.json'
          ]
        }
      ]
    }
  ),

  createLesson('06', '06-03-tool-hooks', '03. Hooks de Ferramentas',
    'Automatize ações antes e depois do uso de ferramentas.',
    `# Hooks de Ferramentas

Os hooks mais poderosos são os que interceptam o uso de ferramentas.

## PreToolUse - Antes da Execução

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Pedido  │────▶│ PreTool  │────▶│   Tool   │
│          │     │  Hook    │     │ Executa  │
└──────────┘     └──────────┘     └──────────┘
                      │
                      ▼
              [Pode BLOQUEAR]
\`\`\`

### Casos de Uso PreToolUse

1. **Validação de segurança**
\`\`\`json
{
  "matcher": { "tool_name": "Bash" },
  "hooks": [{
    "type": "command",
    "command": "echo \\"$TOOL_INPUT\\" | grep -q 'rm -rf' && exit 1 || exit 0"
  }]
}
\`\`\`

2. **Confirmação para ações destrutivas**
3. **Log de auditoria**
4. **Rate limiting**

## PostToolUse - Depois da Execução

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│   Tool   │────▶│ PostTool │────▶│ Continua │
│ Executa  │     │  Hook    │     │          │
└──────────┘     └──────────┘     └──────────┘
\`\`\`

### Casos de Uso PostToolUse

1. **Lint após Write**
\`\`\`json
{
  "matcher": {
    "tool_name": "Write",
    "tool_input": { "file_path": ".*\\\\.ts$" }
  },
  "hooks": [{
    "type": "command",
    "command": "npx eslint --fix \\"$FILE_PATH\\""
  }]
}
\`\`\`

2. **Format após Edit**
\`\`\`json
{
  "matcher": { "tool_name": "Edit" },
  "hooks": [{
    "type": "command",
    "command": "npx prettier --write \\"$FILE_PATH\\""
  }]
}
\`\`\`

3. **Test após alteração**
\`\`\`json
{
  "matcher": {
    "tool_name": "Write",
    "tool_input": { "file_path": ".*\\\\.test\\\\.ts$" }
  },
  "hooks": [{
    "type": "command",
    "command": "npm test -- --findRelatedTests \\"$FILE_PATH\\""
  }]
}
\`\`\`

## Matchers Avançados

### Por Nome de Tool
\`\`\`json
{ "tool_name": "Write" }
{ "tool_name": "Bash" }
{ "tool_name": "Edit" }
\`\`\`

### Por Padrão de Input (Regex)
\`\`\`json
{
  "tool_input": {
    "file_path": ".*\\\\.tsx?$",
    "command": "^npm.*"
  }
}
\`\`\`

### Combinando Condições
\`\`\`json
{
  "tool_name": "Write",
  "tool_input": {
    "file_path": "src/.*\\\\.ts$"
  }
}
\`\`\`

## Exemplo: Lint + Format + Git Add

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write",
          "tool_input": { "file_path": ".*\\\\.(ts|tsx|js|jsx)$" }
        },
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix \\"$FILE_PATH\\" && npx prettier --write \\"$FILE_PATH\\" && git add \\"$FILE_PATH\\"",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}
\`\`\`

> **Pro Tip:** Combine múltiplas ações em um único comando com \`&&\`
`,
    {
      xp: 110,
      duration: 35,
      difficulty: 'advanced',
      tags: ['hooks', 'pretooluse', 'posttooluse', 'automação'],
      quizzes: [
        {
          question: 'PreToolUse pode bloquear a execução de uma ferramenta?',
          options: ['Não, apenas observa', 'Sim, se retornar exit code != 0', 'Apenas para Bash', 'Apenas no modo debug'],
          correctIndex: 1,
          explanation: 'PreToolUse pode bloquear a execução se o hook retornar um código de saída diferente de 0.'
        },
        {
          question: 'Qual hook é ideal para rodar lint após criar um arquivo?',
          options: ['PreToolUse', 'PostToolUse', 'Notification', 'Stop'],
          correctIndex: 1,
          explanation: 'PostToolUse executa após a ferramenta, perfeito para lint, format e outras ações pós-criação.'
        },
        {
          question: 'O matcher usa qual sintaxe para patterns?',
          options: ['Glob', 'Regex', 'SQL LIKE', 'XPath'],
          correctIndex: 1,
          explanation: 'Matchers usam regex (expressões regulares) para filtrar por patterns.'
        }
      ]
    }
  ),

  createLesson('06', '06-04-notification-hooks', '04. Hooks de Notificação',
    'Receba alertas e notificações inteligentes.',
    `# Hooks de Notificação

Notification hooks permitem reagir a eventos do sistema.

## Quando Usar

- Tarefa longa completou
- Erro ocorreu
- Decisão precisa de input
- Status mudou

## Configuração Básica

\`\`\`json
{
  "hooks": {
    "Notification": [
      {
        "matcher": {
          "type": ".*"
        },
        "hooks": [{
          "type": "command",
          "command": "osascript -e 'display notification \\"$MESSAGE\\" with title \\"Claude Code\\"'"
        }]
      }
    ]
  }
}
\`\`\`

## Notificações por Tipo

### Sucesso
\`\`\`json
{
  "matcher": { "type": "success" },
  "hooks": [{
    "type": "command",
    "command": "afplay /System/Library/Sounds/Glass.aiff"
  }]
}
\`\`\`

### Erro
\`\`\`json
{
  "matcher": { "type": "error" },
  "hooks": [{
    "type": "command",
    "command": "osascript -e 'display alert \\"Erro no Claude Code\\" message \\"$MESSAGE\\"'"
  }]
}
\`\`\`

## Integrações Populares

### macOS Notification Center
\`\`\`bash
osascript -e 'display notification "Tarefa completa!" with title "Claude"'
\`\`\`

### Slack Webhook
\`\`\`json
{
  "type": "url",
  "url": "https://hooks.slack.com/services/XXX",
  "method": "POST",
  "body": "{\\"text\\": \\"$MESSAGE\\"}"
}
\`\`\`

### Discord Webhook
\`\`\`json
{
  "type": "url",
  "url": "https://discord.com/api/webhooks/XXX",
  "method": "POST",
  "body": "{\\"content\\": \\"$MESSAGE\\"}"
}
\`\`\`

### Terminal Bell
\`\`\`bash
echo -e "\\a"
\`\`\`

### Desktop Notification (Linux)
\`\`\`bash
notify-send "Claude Code" "$MESSAGE"
\`\`\`

## Hook de Stop

Executar ações quando Claude para:

\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [{
          "type": "command",
          "command": "echo 'Sessão finalizada: $(date)' >> ~/.claude/sessions.log"
        }]
      }
    ]
  }
}
\`\`\`

### Casos de Uso Stop

1. **Backup de contexto**
2. **Log de sessão**
3. **Cleanup de arquivos temporários**
4. **Sync de estado**

## Exemplo: Sistema de Alertas Completo

\`\`\`json
{
  "hooks": {
    "Notification": [
      {
        "matcher": { "type": "success" },
        "hooks": [{
          "type": "command",
          "command": "osascript -e 'display notification \\"Tarefa concluída!\\" with title \\"Claude Code\\" sound name \\"Glass\\"'"
        }]
      },
      {
        "matcher": { "type": "error" },
        "hooks": [{
          "type": "command",
          "command": "osascript -e 'display alert \\"Erro\\" message \\"$MESSAGE\\"'"
        }]
      }
    ],
    "Stop": [
      {
        "hooks": [{
          "type": "command",
          "command": "echo '$(date): Sessão encerrada' >> ~/.claude/log.txt"
        }]
      }
    ]
  }
}
\`\`\`
`,
    {
      xp: 100,
      duration: 30,
      difficulty: 'intermediate',
      tags: ['hooks', 'notificações', 'alertas', 'stop'],
      quizzes: [
        {
          question: 'Qual hook é usado para ações quando Claude para de executar?',
          options: ['End', 'Finish', 'Stop', 'Complete'],
          correctIndex: 2,
          explanation: 'O hook "Stop" é disparado quando Claude para de executar.'
        },
        {
          question: 'Para enviar notificação para Slack, qual tipo de hook usar?',
          options: ['command com curl', 'url com webhook', 'Ambos funcionam', 'Não é possível'],
          correctIndex: 2,
          explanation: 'Tanto command (com curl) quanto url (webhook direto) funcionam para Slack.'
        }
      ]
    }
  ),

  createLesson('06', '06-05-advanced-hooks', '05. Hooks Avançados',
    'Técnicas avançadas e patterns profissionais de hooks.',
    `# Hooks Avançados

Leve seus hooks ao próximo nível com técnicas profissionais.

## Pattern: Git Auto-Add Inteligente

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write|Edit",
          "tool_input": { "file_path": "^(?!.*node_modules).*$" }
        },
        "hooks": [{
          "type": "command",
          "command": "git add \\"$FILE_PATH\\" 2>/dev/null || true"
        }]
      }
    ]
  }
}
\`\`\`

## Pattern: Pre-commit Analysis

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": {
          "tool_name": "Bash",
          "tool_input": { "command": "^git commit.*" }
        },
        "hooks": [{
          "type": "command",
          "command": "~/.claude/scripts/pre-commit-check.sh"
        }]
      }
    ]
  }
}
\`\`\`

## Pattern: Contexto Persistente

Salvar contexto automaticamente:

\`\`\`json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "~/.claude/scripts/save-context.sh"
      }]
    }]
  }
}
\`\`\`

Script \`save-context.sh\`:
\`\`\`bash
#!/bin/bash
CONTEXT_DIR=~/.claude/contexts
mkdir -p $CONTEXT_DIR
DATE=$(date +%Y-%m-%d_%H-%M)
# Salva contexto da sessão
echo "Session ended at $DATE" >> $CONTEXT_DIR/sessions.log
\`\`\`

## Pattern: Security Guard

Bloquear comandos perigosos:

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": {
          "tool_name": "Bash"
        },
        "hooks": [{
          "type": "command",
          "command": "~/.claude/scripts/security-check.sh"
        }]
      }
    ]
  }
}
\`\`\`

Script \`security-check.sh\`:
\`\`\`bash
#!/bin/bash
DANGEROUS_PATTERNS=(
  "rm -rf /"
  "rm -rf ~"
  "> /dev/sda"
  "mkfs"
  "dd if="
)

for pattern in "\${DANGEROUS_PATTERNS[@]}"; do
  if echo "$TOOL_INPUT" | grep -q "$pattern"; then
    echo "BLOCKED: Dangerous command detected"
    exit 1
  fi
done
exit 0
\`\`\`

## Pattern: Quality Pipeline

Lint → Format → Test em sequência:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": {
          "tool_name": "Write",
          "tool_input": { "file_path": ".*\\\\.ts$" }
        },
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix \\"$FILE_PATH\\"",
            "timeout": 10000
          },
          {
            "type": "command",
            "command": "npx prettier --write \\"$FILE_PATH\\"",
            "timeout": 5000
          },
          {
            "type": "command",
            "command": "npm test -- --findRelatedTests \\"$FILE_PATH\\" --passWithNoTests",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}
\`\`\`

## Pattern: Logging Completo

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": { "tool_name": ".*" },
        "hooks": [{
          "type": "command",
          "command": "echo '$(date +%Y-%m-%dT%H:%M:%S) | $TOOL_NAME | $FILE_PATH' >> ~/.claude/tool-usage.log"
        }]
      }
    ]
  }
}
\`\`\`

## Debugging Hooks

\`\`\`bash
# Testar comando manualmente
TOOL_INPUT='{"file_path": "test.ts"}' ~/.claude/scripts/my-hook.sh

# Ver logs
tail -f ~/.claude/hook-debug.log

# Modo verbose
claude --debug
\`\`\`

## Boas Práticas

| Prática | Descrição |
|---------|-----------|
| **Timeout** | Sempre definir para evitar travamentos |
| **Fail-safe** | Usar \`\\|\\| true\` para erros não críticos |
| **Logs** | Registrar execuções para debug |
| **Idempotência** | Hooks devem ser seguros para re-execução |
| **Escopo** | Matchers específicos para evitar overhead |
`,
    {
      xp: 130,
      duration: 40,
      difficulty: 'expert',
      tags: ['hooks', 'avançado', 'patterns', 'segurança'],
      quizzes: [
        {
          question: 'Para evitar travamentos, qual propriedade é essencial?',
          options: ['priority', 'timeout', 'async', 'retry'],
          correctIndex: 1,
          explanation: 'O timeout é essencial para evitar que hooks lentos travem a sessão.'
        },
        {
          question: 'O que significa "|| true" no final de um comando hook?',
          options: ['Forçar sucesso', 'Ignorar erros', 'Ambos', 'Nenhum'],
          correctIndex: 2,
          explanation: '|| true ignora erros e força código de saída 0, evitando bloqueios por falhas não críticas.'
        }
      ]
    }
  ),

  createLesson('06', '06-06-hooks-challenge', '06. Challenge: Sistema de Hooks',
    'Crie um sistema completo de automação com hooks.',
    `# Challenge: Sistema de Hooks TOP 1%

## Objetivo

Criar um sistema completo de hooks que automatize seu workflow de desenvolvimento.

## Requisitos

### Tier 1: Básico (Obrigatório)
- [ ] Hook de lint após Write em arquivos .ts/.tsx
- [ ] Hook de format após Edit
- [ ] Notificação de conclusão de tarefas longas

### Tier 2: Intermediário (Escolha 2+)
- [ ] Git auto-add após alterações
- [ ] Pre-commit analysis
- [ ] Log de todas as ações
- [ ] Notificação de erros

### Tier 3: Avançado (Opcional)
- [ ] Security guard para comandos perigosos
- [ ] Contexto persistente entre sessões
- [ ] Pipeline completo (lint → format → test)
- [ ] Integração com Slack/Discord

## Entregáveis

### 1. settings.json

\`\`\`json
{
  "hooks": {
    "PreToolUse": [ /* ... */ ],
    "PostToolUse": [ /* ... */ ],
    "Notification": [ /* ... */ ],
    "Stop": [ /* ... */ ]
  }
}
\`\`\`

### 2. Scripts de Suporte

\`\`\`
~/.claude/scripts/
├── pre-commit-check.sh
├── security-guard.sh
├── save-context.sh
└── notify.sh
\`\`\`

### 3. Documentação

Criar \`~/.claude/HOOKS.md\`:

\`\`\`markdown
# Meus Hooks

## Hooks Ativos
| Hook | Trigger | Ação |
|------|---------|------|
| ... | ... | ... |

## Scripts
| Script | Função |
|--------|--------|
| ... | ... |
\`\`\`

## Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| 3 hooks Tier 1 | 40 |
| 2+ hooks Tier 2 | 30 |
| Scripts funcionando | 15 |
| Documentação | 15 |
| **Total** | **100** |

## Dicas

1. **Comece simples** - Um hook por vez
2. **Teste cada hook** - Antes de adicionar o próximo
3. **Use timeout** - Evite travamentos
4. **Documente** - Futuro você agradece
5. **Fail-safe** - Use \`|| true\` para não-críticos

## Stack Exemplo

\`\`\`
┌────────────────────────────────────────────┐
│              HOOK SYSTEM                    │
├────────────────────────────────────────────┤
│  PreToolUse                                 │
│  ├── security-guard.sh (Bash)              │
│  └── pre-commit-check.sh (git commit)      │
├────────────────────────────────────────────┤
│  PostToolUse                                │
│  ├── lint + format (Write *.ts)            │
│  ├── git add (Write/Edit)                  │
│  └── log (todas as tools)                  │
├────────────────────────────────────────────┤
│  Notification                               │
│  ├── macOS notification (success)          │
│  └── alert (error)                         │
├────────────────────────────────────────────┤
│  Stop                                       │
│  └── save-context.sh                       │
└────────────────────────────────────────────┘
\`\`\`

## Teste Final

Após configurar, verifique:

\`\`\`bash
# 1. Criar arquivo TS (deve lint + format)
# 2. Editar arquivo (deve format + git add)
# 3. Tentar comando perigoso (deve bloquear)
# 4. Finalizar sessão (deve salvar contexto)
\`\`\`

> **Lembre-se:** Hooks bem configurados = Produtividade 10x!
`,
    {
      xp: 200,
      duration: 60,
      difficulty: 'expert',
      tags: ['hooks', 'challenge', 'automação', 'sistema'],
      challenges: [
        {
          id: 'ch-hooks-system-complete',
          title: 'Sistema de Hooks Completo',
          description: 'Configure um sistema completo de hooks com lint, format, segurança e notificações.',
          context: 'general',
          contextDescription: 'Challenge final do módulo Hooks',
          difficulty: 'expert',
          xpBonus: 100,
          hints: [
            'Comece pelos hooks de PostToolUse para lint/format',
            'Adicione scripts em ~/.claude/scripts/',
            'Teste cada hook individualmente antes de combinar',
            'Documente tudo em HOOKS.md'
          ]
        }
      ]
    }
  ),
];

// ============================================================================
// MODULE 07: SUBAGENTS
// ============================================================================

const module07Lessons: Lesson[] = [
  createLesson('07', '07-01-subagents-intro', '01. Entendendo Subagents',
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

  createLesson('07', '07-02-multi-agent-orchestration', '02. Orquestração Multi-Agente',
    'Aprenda a coordenar múltiplos subagents para resolver problemas complexos.',
    `# Orquestração Multi-Agente

Domine a arte de coordenar múltiplos agentes trabalhando em harmonia.

## O Poder da Orquestração

\`\`\`
┌────────────────────────────────────────────────────┐
│                  ORQUESTRADOR                       │
│                       │                             │
│     ┌─────────────────┼─────────────────┐          │
│     ▼                 ▼                 ▼          │
│ ┌───────┐       ┌───────┐       ┌───────┐         │
│ │Agente │       │Agente │       │Agente │         │
│ │  A    │◄─────►│   B   │◄─────►│   C   │         │
│ └───────┘       └───────┘       └───────┘         │
│     │                 │                 │          │
│     ▼                 ▼                 ▼          │
│ [Resultado A]   [Resultado B]   [Resultado C]      │
│     └─────────────────┼─────────────────┘          │
│                       ▼                             │
│              [SÍNTESE FINAL]                        │
└────────────────────────────────────────────────────┘
\`\`\`

## Tipos de Orquestração

### 1. Sequencial
\`\`\`
Agente A → Agente B → Agente C → Resultado Final
\`\`\`
- Cada agente depende do anterior
- Usado para pipelines de transformação

### 2. Paralela
\`\`\`
     ┌─ Agente A ─┐
     │            │
Tarefa ─ Agente B ─┴→ Síntese
     │            │
     └─ Agente C ─┘
\`\`\`
- Agentes independentes executam simultaneamente
- **5-10x mais rápido** para tarefas divisíveis

### 3. Hierárquica
\`\`\`
        Líder
       /     \\
   Coordenador  Coordenador
    /    \\        /    \\
  A1     A2      B1     B2
\`\`\`
- Delegação em níveis
- Para projetos de grande escala

## Caso Prático: Refatoração Multi-Arquivo

\`\`\`bash
# O que você pede:
"Refatore todos os services para usar o novo padrão de error handling"

# Claude orquestra internamente:
1. Explorer Subagent → Encontra todos os services
2. Plan Subagent → Define estratégia de refatoração
3. Code Subagents (paralelos) → Refatoram cada arquivo
4. Reviewer Subagent → Valida consistência
5. Síntese → Apresenta resultado unificado
\`\`\`

## Boas Práticas

| Prática | Descrição |
|---------|-----------|
| **Contexto mínimo** | Passar apenas o necessário para cada subagent |
| **Resultados tipados** | Definir formato esperado de cada agente |
| **Timeouts** | Limitar tempo de execução por agente |
| **Fallbacks** | Ter plano B se um agente falhar |
`,
    {
      xp: 120,
      duration: 35,
      difficulty: 'advanced',
      tags: ['subagents', 'orquestração', 'multi-agent', 'top-1-percent'],
      isNew: true,
      quizzes: [
        {
          id: 'q-07-02-1',
          question: 'Qual tipo de orquestração é mais rápido para tarefas divisíveis?',
          options: ['Sequencial', 'Paralela', 'Hierárquica', 'Todas têm o mesmo tempo'],
          correctIndex: 1,
          explanation: 'Orquestração paralela pode ser 5-10x mais rápida porque múltiplos agentes trabalham simultaneamente em partes independentes da tarefa.',
        },
        {
          id: 'q-07-02-2',
          question: 'Por que devemos passar "contexto mínimo" para cada subagent?',
          options: ['Para economizar tokens e focar o agente na tarefa específica', 'Porque subagents não aceitam contexto grande', 'Para esconder informações sensíveis', 'Não há motivo real'],
          correctIndex: 0,
          explanation: 'Contexto mínimo reduz custos de tokens e mantém o subagent focado na sua tarefa específica, evitando distrações ou confusão.',
        },
      ],
    }
  ),

  createLesson('07', '07-03-master-clone-lead-specialist', '03. Padrões: Master-Clone vs Lead-Specialist',
    'Entenda os dois padrões fundamentais de arquitetura multi-agente.',
    `# Master-Clone vs Lead-Specialist

Os dois padrões arquiteturais mais importantes para sistemas multi-agente.

## Padrão 1: Master-Clone

\`\`\`
┌─────────────────────────────────────────┐
│              MASTER                      │
│         (Define template)                │
│              │                           │
│   ┌──────────┼──────────┐               │
│   ▼          ▼          ▼               │
│ Clone 1   Clone 2   Clone 3             │
│ (mesma     (mesma     (mesma            │
│  tarefa)    tarefa)    tarefa)          │
│   │          │          │               │
│   ▼          ▼          ▼               │
│ Arquivo 1 Arquivo 2 Arquivo 3           │
└─────────────────────────────────────────┘
\`\`\`

### Quando Usar Master-Clone
- ✅ Tarefas **idênticas** em múltiplos arquivos
- ✅ Aplicar mesmo padrão em vários lugares
- ✅ Batch processing homogêneo
- ✅ Testes em paralelo

### Exemplo Real
\`\`\`
"Adicione tratamento de erro try-catch em todos os controllers"

Master define:
- Padrão de try-catch a usar
- Formato do erro
- Logging esperado

Clones executam:
- Cada um modifica um controller
- Mesma lógica, diferentes arquivos
\`\`\`

---

## Padrão 2: Lead-Specialist

\`\`\`
┌─────────────────────────────────────────┐
│               LEAD                       │
│         (Coordena time)                  │
│              │                           │
│   ┌──────────┼──────────┐               │
│   ▼          ▼          ▼               │
│ Security  Backend   Frontend            │
│ Specialist Specialist Specialist        │
│ (analisa   (implementa (cria           │
│  vuln)      API)       UI)             │
│   │          │          │               │
│   ▼          ▼          ▼               │
│ Report    Código    Componentes         │
└─────────────────────────────────────────┘
\`\`\`

### Quando Usar Lead-Specialist
- ✅ Tarefas **heterogêneas** que requerem expertise diferente
- ✅ Problemas multi-disciplinares
- ✅ Feature completa (back + front + testes)
- ✅ Análise de diferentes perspectivas

### Exemplo Real
\`\`\`
"Implemente sistema de autenticação completo"

Lead coordena:
- Security Specialist → Analisa vulnerabilidades, define padrões
- Backend Specialist → Implementa API, JWT, sessions
- Frontend Specialist → Cria formulários, validações
- Test Specialist → Cria testes unitários e E2E

Cada especialista tem seu próprio contexto e expertise.
\`\`\`

---

## Comparativo

| Aspecto | Master-Clone | Lead-Specialist |
|---------|--------------|-----------------|
| **Tarefas** | Homogêneas | Heterogêneas |
| **Contexto** | Idêntico para todos | Específico por especialista |
| **Coordenação** | Simples | Complexa |
| **Síntese** | Merge direto | Integração necessária |
| **Caso de uso** | Refatoração em massa | Feature completa |

## Híbrido: Lead com Clones

\`\`\`
          Lead
            │
    ┌───────┼───────┐
    ▼       ▼       ▼
Backend  Frontend  Tests
    │               │
 ┌──┴──┐         ┌──┴──┐
Clone Clone   Clone Clone
(API) (API)  (unit) (e2e)
\`\`\`

Na prática, você pode combinar os padrões!
`,
    {
      xp: 100,
      duration: 30,
      difficulty: 'advanced',
      tags: ['subagents', 'arquitetura', 'patterns', 'master-clone', 'lead-specialist'],
      isNew: true,
      quizzes: [
        {
          id: 'q-07-03-1',
          question: 'Qual padrão é ideal para "adicionar logging em 50 arquivos"?',
          options: ['Lead-Specialist (cada arquivo precisa análise diferente)', 'Master-Clone (mesma tarefa replicada)', 'Nenhum (fazer manualmente)', 'Depende do tamanho do arquivo'],
          correctIndex: 1,
          explanation: 'Master-Clone é perfeito para tarefas homogêneas. O Master define o padrão de logging e os Clones aplicam em paralelo em cada arquivo.',
        },
        {
          id: 'q-07-03-2',
          question: 'Para "implementar checkout com pagamento", qual padrão usar?',
          options: ['Master-Clone', 'Lead-Specialist', 'Sequencial simples', 'Nenhum padrão'],
          correctIndex: 1,
          explanation: 'Lead-Specialist pois requer expertise heterogênea: backend (API de pagamento), frontend (UX), security (validações), tests (cobertura).',
        },
      ],
      challenges: [
        {
          id: 'ch-07-03-1',
          title: 'Arquitete um Sistema Multi-Agente',
          description: 'Projete a arquitetura de agentes para: "Migrar 100 componentes React de Class para Function components"',
          context: 'general',
          contextDescription: 'Migração em massa de código',
          difficulty: 'advanced',
          xpBonus: 80,
          hints: ['Pense: a tarefa é homogênea ou heterogênea?', 'Cada componente recebe o mesmo tratamento?', 'Considere um híbrido: Lead para análise + Clones para execução'],
        }
      ],
    }
  ),

  createLesson('07', '07-04-parallel-subagents', '04. Parallel Subagents na Prática',
    'Execute múltiplos subagents simultaneamente para máxima velocidade.',
    `# Parallel Subagents na Prática

Aprenda a executar subagents em paralelo para **10x mais velocidade**.

## O Parâmetro Mágico

\`\`\`typescript
// Execução em background (paralela)
Task tool: {
  run_in_background: true,  // ← O segredo!
  subagent_type: "Explore",
  prompt: "Encontre todos os arquivos de teste"
}
\`\`\`

## Anatomia da Execução Paralela

\`\`\`
Tempo →

Sequencial:   [A────────][B────────][C────────]  = 30s

Paralelo:     [A────────]
              [B────────]  = 10s (3x mais rápido!)
              [C────────]
\`\`\`

## Quando Usar Paralelo

| ✅ Use Paralelo | ❌ Evite Paralelo |
|----------------|-------------------|
| Tarefas independentes | Tarefas dependentes |
| Análise de múltiplos arquivos | Arquivos que se referenciam |
| Buscas em diferentes diretórios | Operações sequenciais |
| Validações isoladas | Writes no mesmo arquivo |

## Exemplo Prático Completo

\`\`\`
PEDIDO: "Analise a performance de todos os endpoints da API"

Claude paralleliza:

[Background Task 1] → Explore: encontrar todos os endpoints
[Background Task 2] → Analyze: ler métricas do Langfuse
[Background Task 3] → Search: buscar N+1 queries no código

Depois, com TaskOutput, recupera resultados e sintetiza.
\`\`\`

## O Padrão Fork-Join

\`\`\`
          FORK                    JOIN
            │                       │
    ┌───────┼───────┐              │
    ▼       ▼       ▼              ▼
 Task 1  Task 2  Task 3    ──► Síntese
    │       │       │              │
    └───────┴───────┴──────────────┘
         (paralelo)           (aguarda todos)
\`\`\`

### Código Conceitual
\`\`\`typescript
// 1. FORK - Lança em paralelo
const task1 = Task({ run_in_background: true, ... });
const task2 = Task({ run_in_background: true, ... });
const task3 = Task({ run_in_background: true, ... });

// 2. JOIN - Aguarda todos
const result1 = await TaskOutput({ task_id: task1.id });
const result2 = await TaskOutput({ task_id: task2.id });
const result3 = await TaskOutput({ task_id: task3.id });

// 3. SINTETIZA
return synthesize(result1, result2, result3);
\`\`\`

## Limites e Boas Práticas

| Aspecto | Recomendação |
|---------|--------------|
| **Max paralelos** | 3-5 subagents simultâneos |
| **Timeout** | 30s por subagent (ajustável) |
| **Contexto** | Mínimo necessário por task |
| **Fallback** | Plano B se algum falhar |

## Otimizações TOP 1%

### 1. Early Return
\`\`\`
Se Task 1 encontra a resposta → Cancela Task 2 e 3
\`\`\`

### 2. Progressive Results
\`\`\`
Mostra resultado de cada task conforme termina
(não espera todos para começar a mostrar)
\`\`\`

### 3. Priorização
\`\`\`
Tasks críticas: timeout maior
Tasks nice-to-have: timeout curto
\`\`\`

## Caso Real: Refatoração em Massa

\`\`\`
"Migre todos os 50 componentes para TypeScript"

1. Explorer → Lista 50 componentes
2. Divide em 5 batches de 10
3. 5 Subagents paralelos, cada um migra 10 arquivos
4. Reviewer valida no final

Tempo sequencial: ~50 min
Tempo paralelo: ~12 min (4x mais rápido)
\`\`\`
`,
    {
      xp: 130,
      duration: 40,
      difficulty: 'expert',
      tags: ['subagents', 'parallel', 'performance', 'fork-join', 'top-1-percent'],
      isNew: true,
      quizzes: [
        {
          id: 'q-07-04-1',
          question: 'Qual parâmetro ativa a execução paralela de subagents?',
          options: ['parallel: true', 'run_in_background: true', 'async: true', 'concurrent: true'],
          correctIndex: 1,
          explanation: 'O parâmetro run_in_background: true faz o subagent executar em background, permitindo lançar múltiplos simultaneamente.',
        },
        {
          id: 'q-07-04-2',
          question: 'Quantos subagents paralelos são recomendados simultaneamente?',
          options: ['1-2', '3-5', '10-15', 'Sem limite'],
          correctIndex: 1,
          explanation: '3-5 subagents é o ideal. Mais que isso pode sobrecarregar o sistema e aumentar chance de erros sem ganho proporcional de velocidade.',
        },
      ],
      challenges: [
        {
          id: 'ch-07-04-1',
          title: 'Paralelize uma Análise de Codebase',
          description: 'Projete como analisar um projeto com 200 arquivos usando parallel subagents. Defina: quantos batches, quantos paralelos, estratégia de síntese.',
          context: 'general',
          contextDescription: 'Análise em larga escala',
          difficulty: 'expert',
          xpBonus: 100,
          hints: ['Divida 200 arquivos em batches de ~40', '5 paralelos analisando 40 cada', 'Síntese progressiva: mostra resultados parciais'],
        }
      ],
    }
  ),

  createLesson('07', '07-05-model-selection', '05. Model Selection Strategy',
    'Escolha o modelo certo para cada tarefa: Opus, Sonnet ou Haiku.',
    `# Model Selection Strategy

Domine a arte de escolher o modelo certo para cada tarefa - um dos segredos TOP 1%.

## Os 3 Modelos Claude

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    CAPACIDADE vs CUSTO                       │
│                                                              │
│   OPUS 4.5    ████████████████████████████  Máxima          │
│   (Premium)   Custo: $$$$$                  Capacidade      │
│               Velocidade: Lenta                              │
│                                                              │
│   SONNET      ███████████████████           Balanceado      │
│   (Standard)  Custo: $$                                     │
│               Velocidade: Média                              │
│                                                              │
│   HAIKU       █████████                     Econômico       │
│   (Fast)      Custo: $                                      │
│               Velocidade: Rápida                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Matriz de Decisão

| Tarefa | Modelo Ideal | Justificativa |
|--------|--------------|---------------|
| **Arquitetura de sistema** | Opus | Requer raciocínio profundo |
| **Code review crítico** | Opus | Precisa pegar nuances sutis |
| **Decisões estratégicas** | Opus | Alto impacto, vale o custo |
| **Análise de segurança** | Opus | Não pode perder nada |
| **Feature complexa** | Sonnet | Bom equilíbrio |
| **Bug fix médio** | Sonnet | Suficiente para maioria |
| **Refatoração padrão** | Sonnet | Economia sem sacrificar qualidade |
| **Formatação de código** | Haiku | Tarefa mecânica |
| **Extração de dados** | Haiku | Não requer reasoning |
| **Traduções simples** | Haiku | Volume alto, custo baixo |
| **Geração de testes** | Haiku | Repetitivo, pattern-based |

## O Framework CRITICO

Use este framework para decidir o modelo:

\`\`\`
C - Complexidade: Alta → Opus, Média → Sonnet, Baixa → Haiku
R - Risco: Alto impacto → Opus, use o melhor
I - Iterações: Muitas → Haiku para economizar
T - Tempo: Urgente → Haiku (mais rápido)
I - Importância: Estratégico → Opus
C - Custo: Limitado → Haiku
O - Output: Criativo → Opus, Mecânico → Haiku
\`\`\`

## Estratégia: Model Cascade

Uma técnica TOP 1%: começar com Haiku e escalar se necessário.

\`\`\`
┌─────────────────────────────────────────┐
│           MODEL CASCADE                  │
│                                          │
│   1. Haiku tenta resolver               │
│        ↓                                 │
│   2. Se falhar → Sonnet tenta           │
│        ↓                                 │
│   3. Se falhar → Opus resolve           │
│                                          │
│   Economia: 70% das tarefas param em 1  │
└─────────────────────────────────────────┘
\`\`\`

### Implementação

\`\`\`typescript
// Conceito de Model Cascade
async function smartQuery(task: Task) {
  // Primeiro: tenta com Haiku (barato/rápido)
  const haikuResult = await query(task, 'haiku');
  if (isGoodEnough(haikuResult)) return haikuResult;

  // Escala: Sonnet
  const sonnetResult = await query(task, 'sonnet');
  if (isGoodEnough(sonnetResult)) return sonnetResult;

  // Último recurso: Opus
  return await query(task, 'opus');
}
\`\`\`

## Model Distillation

Outra técnica avançada: usar Opus para criar, Haiku para executar.

\`\`\`
┌────────────────────────────────────────────────────┐
│              MODEL DISTILLATION                     │
│                                                     │
│   OPUS cria:        HAIKU executa:                 │
│   - Templates       - Aplica templates             │
│   - Padrões         - Segue padrões                │
│   - Prompts         - Usa prompts                  │
│   - Guidelines      - Segue guidelines             │
│                                                     │
│   1x pensamento     1000x execução barata          │
└────────────────────────────────────────────────────┘
\`\`\`

### Exemplo Real

\`\`\`
1. Opus cria: Skill de code review com 50 regras
2. Haiku executa: Roda essa skill em 500 arquivos

Custo se usasse Opus direto: $50
Custo com distillation: $2 (Opus) + $0.50 (Haiku) = $2.50

ECONOMIA: 95%!
\`\`\`

## CLI: Selecionando Modelos

\`\`\`bash
# Usar Opus para tarefa crítica
claude --model opus "Analise a arquitetura deste sistema"

# Usar Haiku para tarefa simples
claude --model haiku "Formate este JSON"

# Default (Sonnet) para maioria
claude "Implemente esta feature"
\`\`\`

## Tabela de Custos (Referência)

| Modelo | Input (1M tokens) | Output (1M tokens) |
|--------|-------------------|-------------------|
| Opus   | ~$15              | ~$75              |
| Sonnet | ~$3               | ~$15              |
| Haiku  | ~$0.25            | ~$1.25            |

> **Pro Tip:** Para tarefas repetitivas, a diferença entre Opus e Haiku pode ser **60x no custo**!
`,
    {
      xp: 110,
      duration: 35,
      difficulty: 'advanced',
      tags: ['models', 'opus', 'sonnet', 'haiku', 'cost', 'optimization', 'top-1-percent'],
      isNew: true,
      quizzes: [
        {
          id: 'q-07-05-1',
          question: 'Para "formatar 100 arquivos JSON", qual modelo usar?',
          options: ['Opus (máxima qualidade)', 'Sonnet (equilíbrio)', 'Haiku (tarefa mecânica)', 'Qualquer um, não faz diferença'],
          correctIndex: 2,
          explanation: 'Haiku é ideal para tarefas mecânicas e repetitivas como formatação. Economiza significativamente sem perda de qualidade.',
        },
        {
          id: 'q-07-05-2',
          question: 'O que é "Model Distillation"?',
          options: ['Comprimir modelos para rodar local', 'Usar Opus para criar, Haiku para executar em escala', 'Misturar outputs de múltiplos modelos', 'Treinar um modelo custom'],
          correctIndex: 1,
          explanation: 'Model Distillation: Opus cria templates/padrões/skills uma vez, Haiku executa milhares de vezes. Economia de 90%+ em tarefas repetitivas.',
        },
        {
          id: 'q-07-05-3',
          question: 'Qual a economia aproximada de usar Haiku vs Opus para tarefas repetitivas?',
          options: ['10%', '30%', '50%', '90%+'],
          correctIndex: 3,
          explanation: 'A diferença de custo entre Opus e Haiku pode chegar a 60x, resultando em economia de 90%+ para tarefas repetitivas.',
        },
      ],
      challenges: [
        {
          id: 'ch-07-05-1',
          title: 'Crie uma Estratégia de Model Selection',
          description: 'Para um projeto com: 50 code reviews, 200 testes a gerar, 5 decisões arquiteturais - defina qual modelo usar em cada tarefa e calcule o custo estimado.',
          context: 'general',
          contextDescription: 'Otimização de custos',
          difficulty: 'advanced',
          xpBonus: 80,
          hints: ['Code reviews críticos = Opus', 'Testes repetitivos = Haiku', 'Calcule: (tokens × preço) para cada modelo'],
        }
      ],
    }
  ),

  createLesson('07', '07-06-enterprise-challenge', '06. Challenge: Sistema Enterprise',
    'Monte um sistema completo de orquestração enterprise-grade.',
    `# Challenge: Sistema Enterprise TOP 1%

Hora de aplicar TUDO que você aprendeu em um sistema de produção real.

## Objetivo

Criar um sistema de orquestração multi-agente completo para um cenário real de empresa.

## O Cenário

\`\`\`
SUA MISSÃO:
Você é o Tech Lead de uma empresa que precisa:

1. Migrar 100 componentes React de JavaScript para TypeScript
2. Adicionar testes para cada componente (cobertura 80%)
3. Documentar todos os componentes
4. Garantir que nada quebre em produção

TEMPO DISPONÍVEL: 1 sprint (2 semanas)
EQUIPE: Apenas você + Claude Code
\`\`\`

## Requisitos do Sistema

### 1. Arquitetura Multi-Agente

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    ORCHESTRATOR                          │
│              (Você controlando Claude)                   │
│                         │                                │
│     ┌───────────────────┼───────────────────┐           │
│     ▼                   ▼                   ▼           │
│  ┌──────┐          ┌──────┐          ┌──────┐          │
│  │PLAN  │          │EXECUTE│         │REVIEW │          │
│  │Agent │          │ Team  │         │ Agent │          │
│  └──────┘          └──────┘          └──────┘          │
│     │                  │                  │             │
│     ▼                  ▼                  ▼             │
│  Strategy         ┌────┴────┐         Quality          │
│  Document         │         │         Report           │
│               Clone 1   Clone 2                         │
│               Clone 3   Clone 4                         │
│               Clone 5                                   │
└─────────────────────────────────────────────────────────┘
\`\`\`

### 2. Model Selection

| Fase | Modelo | Justificativa |
|------|--------|---------------|
| Planejamento | Opus | Estratégia crítica |
| Migração TS | Sonnet | Equilíbrio |
| Geração Testes | Haiku | Repetitivo |
| Code Review | Opus | Qualidade |
| Documentação | Haiku | Volume |

### 3. Parallel Execution

\`\`\`
Batch 1 (20 componentes): [Clone 1-5 em paralelo]
Batch 2 (20 componentes): [Clone 1-5 em paralelo]
...
Batch 5 (20 componentes): [Clone 1-5 em paralelo]

Total: 5 batches × 5 paralelos = 25 execuções
vs 100 execuções sequenciais

SPEEDUP: 4x
\`\`\`

## Sua Entrega

### Arquivo: ENTERPRISE-SYSTEM.md

\`\`\`markdown
# Sistema de Orquestração Enterprise

## 1. Visão Geral
[Diagrama da arquitetura]

## 2. Fase de Planejamento
- Agent: Plan (Opus)
- Output: Lista de componentes, ordem de migração, riscos

## 3. Fase de Execução
- Pattern: Master-Clone
- Parallelism: 5 clones simultâneos
- Batches: 5 de 20 componentes

### 3.1 Migração TypeScript
- Model: Sonnet
- Input: Componente JS
- Output: Componente TS + tipos

### 3.2 Geração de Testes
- Model: Haiku
- Input: Componente TS
- Output: Arquivo de teste (80% coverage)

### 3.3 Documentação
- Model: Haiku
- Input: Componente TS
- Output: JSDoc + README

## 4. Fase de Validação
- Agent: Reviewer (Opus)
- Checklist: tipos corretos, testes passando, docs completas

## 5. Custos Estimados
| Fase | Tokens | Modelo | Custo |
|------|--------|--------|-------|
| ... | ... | ... | ... |

Total estimado: $X.XX

## 6. Timeline
- Dia 1-2: Planejamento (Opus)
- Dia 3-8: Migração + Testes (Sonnet/Haiku paralelo)
- Dia 9-10: Review e fixes (Opus)

## 7. Rollback Plan
Em caso de problemas:
1. Git revert do batch problemático
2. Re-executar com parâmetros ajustados
3. Fallback para migração manual se crítico
\`\`\`

## Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Arquitetura clara e documentada | 20 |
| Model selection justificado | 20 |
| Parallel execution bem planejado | 20 |
| Estimativa de custos realista | 15 |
| Rollback plan definido | 15 |
| Timeline factível | 10 |
| **TOTAL** | **100** |

## Dicas TOP 1%

1. **Comece pequeno**: Teste com 5 componentes antes de escalar
2. **Monitore custos**: Use Langfuse para tracking real-time
3. **Tenha checkpoints**: Commit após cada batch bem-sucedido
4. **Documente tudo**: Decisões, problemas, soluções
5. **Automate validation**: Scripts que verificam se cada componente migrou corretamente

## Bônus: Automação Completa

Se você criar scripts que automatizam todo o fluxo:

\`\`\`bash
./migrate.sh --batch-size 20 --parallelism 5 --dry-run
./migrate.sh --batch-size 20 --parallelism 5 --execute
./validate.sh --coverage-threshold 80
./report.sh --output enterprise-report.md
\`\`\`

**+50 XP Bônus!**

## Reflexão Final

Ao completar este challenge, você terá:

- ✅ Projetado arquitetura multi-agente
- ✅ Aplicado model selection strategy
- ✅ Usado parallel execution
- ✅ Criado sistema enterprise-grade
- ✅ Documentado tudo profissionalmente

**Você agora pensa como um Tech Lead que usa IA como multiplicador de força!**
`,
    {
      xp: 200,
      duration: 60,
      difficulty: 'expert',
      tags: ['enterprise', 'challenge', 'multi-agent', 'orchestration', 'top-1-percent'],
      isNew: true,
      challenges: [
        {
          id: 'ch-07-06-final',
          title: 'Sistema Enterprise Completo',
          description: 'Crie o documento ENTERPRISE-SYSTEM.md completo com todos os componentes: arquitetura, model selection, parallelism, custos, timeline e rollback plan.',
          context: 'general',
          contextDescription: 'Challenge final do módulo Enterprise',
          difficulty: 'expert',
          xpBonus: 150,
          hints: [
            'Use o template fornecido como base',
            'Justifique CADA escolha de modelo',
            'Calcule custos reais baseado na tabela de preços',
            'O rollback plan é crítico - não pule!'
          ]
        }
      ]
    }
  ),
];

// ============================================================================
// REMAINING MODULES (Simplified for brevity)
// ============================================================================

const module08Lessons: Lesson[] = [
  createLesson('08', '08-01-plugins-intro', '01. Introdução aos Plugins',
    'Entenda o sistema de plugins do Claude Code.',
    `# Plugins

Plugins são extensões distribuíveis que adicionam funcionalidades ao Claude Code.

[Conteúdo detalhado aqui...]
`,
    { xp: 70, duration: 25, difficulty: 'advanced', tags: ['plugins', 'extensões'] }
  ),
];

const module09Lessons: Lesson[] = [
  createLesson('09', '09-01-vscode-integration', '01. Integração com VS Code',
    'Configure Claude Code para funcionar perfeitamente com VS Code.',
    `# Integração com VS Code

O VS Code é o editor mais popular entre desenvolvedores. Veja como maximizar Claude Code nele.

## Extensão Oficial

\`\`\`bash
# Instalar extensão via CLI
code --install-extension anthropic.claude-code
\`\`\`

Ou pesquise "Claude Code" no marketplace do VS Code.

## Configurações Recomendadas

No \`settings.json\` do VS Code:

\`\`\`json
{
  // Claude Code Integration
  "claude-code.enabled": true,
  "claude-code.model": "sonnet",
  "claude-code.autoComplete": true,

  // Terminal integrado
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.fontSize": 14,

  // Editor otimizado para IA
  "editor.inlineSuggest.enabled": true,
  "editor.suggest.showStatusBar": true,

  // Git integrado
  "git.autofetch": true,
  "git.confirmSync": false
}
\`\`\`

## Keybindings TOP 1%

\`\`\`json
{
  // Abrir Claude Code no terminal
  { "key": "cmd+shift+c", "command": "workbench.action.terminal.new" },

  // Quick fix com Claude
  { "key": "cmd+.", "command": "claude.quickFix" },

  // Explain seleção
  { "key": "cmd+shift+e", "command": "claude.explainSelection" }
}
\`\`\`

## Workflow Integrado

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    VS CODE                               │
│  ┌─────────────────┐  ┌────────────────────────────┐   │
│  │   EDITOR        │  │      TERMINAL              │   │
│  │                 │  │                            │   │
│  │  código.ts      │  │  $ claude                  │   │
│  │  ───────────    │  │  > Refatore a função X    │   │
│  │  function X()   │  │                            │   │
│  │    ...          │  │  [Claude edita o arquivo]  │   │
│  │                 │  │                            │   │
│  └─────────────────┘  └────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  SOURCE CONTROL (Git) │ PROBLEMS │ OUTPUT       │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Dicas TOP 1%

| Dica | Descrição |
|------|-----------|
| **Split terminal** | Claude em um lado, testes no outro |
| **Git inline** | Veja mudanças em tempo real |
| **Multi-cursor** | Selecione múltiplos trechos para Claude |
| **Workspace trust** | Permita Claude editar livremente |

## Tasks.json para Automação

\`\`\`json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Claude: Review",
      "type": "shell",
      "command": "claude 'revise este arquivo' < \${file}"
    },
    {
      "label": "Claude: Tests",
      "type": "shell",
      "command": "claude 'gere testes para' < \${file}"
    }
  ]
}
\`\`\`
`,
    {
      xp: 80,
      duration: 25,
      difficulty: 'intermediate',
      tags: ['vscode', 'ide', 'integração', 'editor'],
      quizzes: [
        {
          id: 'q-09-01-1',
          question: 'Qual configuração ativa sugestões inline no VS Code?',
          options: ['editor.autoComplete', 'editor.inlineSuggest.enabled', 'claude.suggestions', 'vscode.inline'],
          correctIndex: 1,
          explanation: 'editor.inlineSuggest.enabled: true ativa as sugestões inline que funcionam bem com Claude Code.',
        },
      ],
    }
  ),

  createLesson('09', '09-02-terminal-workflows', '02. Terminal Workflows',
    'Domine o terminal para máxima produtividade com Claude.',
    `# Terminal Workflows TOP 1%

O terminal é onde Claude Code brilha. Aprenda a maximizar essa integração.

## Shells Recomendados

| Shell | Vantagens | Instalação |
|-------|-----------|------------|
| **Zsh** | Plugins, temas, completions | Default no macOS |
| **Fish** | Auto-sugestões, syntax highlighting | \`brew install fish\` |
| **Bash** | Universal, scripts compatíveis | Default Linux |

## Configuração Zsh + Oh My Zsh

\`\`\`bash
# Instalar Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Plugins essenciais no ~/.zshrc
plugins=(
  git
  z
  zsh-autosuggestions
  zsh-syntax-highlighting
  docker
  npm
)

# Alias para Claude
alias c="claude"
alias cq="claude --quiet"
alias cr="claude 'revise este código'"
\`\`\`

## Ferramentas Modernas de Terminal

\`\`\`bash
# Substitutos modernos para comandos clássicos
brew install eza      # ls moderno com ícones
brew install bat      # cat com syntax highlighting
brew install fd       # find mais rápido
brew install ripgrep  # grep mais rápido
brew install fzf      # fuzzy finder
brew install zoxide   # cd inteligente

# Aliases no ~/.zshrc
alias ls="eza --icons"
alias cat="bat"
alias find="fd"
alias grep="rg"
\`\`\`

## Fluxo de Trabalho Otimizado

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                 TERMINAL WORKFLOW                        │
│                                                          │
│  1. NAVEGAÇÃO (zoxide + fzf)                            │
│     $ z projeto     → Vai para ~/Dev/projeto            │
│     $ fzf           → Busca fuzzy em arquivos           │
│                                                          │
│  2. EXPLORAÇÃO (eza + bat + rg)                         │
│     $ eza -la       → Lista com detalhes e ícones       │
│     $ bat arquivo   → Visualiza com syntax highlight    │
│     $ rg "padrão"   → Busca super rápida               │
│                                                          │
│  3. CLAUDE CODE                                          │
│     $ claude        → Inicia sessão interativa          │
│     $ c "query"     → Query rápida via alias            │
│                                                          │
│  4. GIT (integrado)                                      │
│     $ git status    → Ver mudanças do Claude           │
│     $ git diff      → Ver exatamente o que mudou        │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Pipes e Redirecionamento

\`\`\`bash
# Enviar arquivo para Claude
cat arquivo.ts | claude "explique este código"

# Salvar output de Claude
claude "gere um README" > README.md

# Combinar com outros comandos
rg "TODO" | claude "categorize estes TODOs por prioridade"

# Processar múltiplos arquivos
find . -name "*.ts" | head -5 | xargs -I {} claude "revise {}"
\`\`\`

## Tmux para Multi-tasking

\`\`\`bash
# Instalar tmux
brew install tmux

# Layout produtivo
# ┌─────────────────┬─────────────────┐
# │     CLAUDE      │     EDITOR      │
# │    (terminal)   │   (vim/code)    │
# ├─────────────────┴─────────────────┤
# │             LOGS/TESTES           │
# └───────────────────────────────────┘

# Criar esse layout
tmux new-session -d -s dev
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
\`\`\`

## Scripts de Produtividade

\`\`\`bash
#!/bin/bash
# ~/bin/claude-review
# Revisa todos os arquivos modificados

git diff --name-only | while read file; do
  echo "📝 Revisando: $file"
  claude "revise este arquivo para qualidade" < "$file"
done
\`\`\`

## Starship Prompt (Opcional)

\`\`\`bash
# Prompt bonito e informativo
brew install starship

# Adicionar ao ~/.zshrc
eval "$(starship init zsh)"
\`\`\`
`,
    {
      xp: 100,
      duration: 35,
      difficulty: 'intermediate',
      tags: ['terminal', 'zsh', 'workflow', 'produtividade'],
      isNew: true,
      quizzes: [
        {
          id: 'q-09-02-1',
          question: 'Qual comando é o substituto moderno do grep com melhor performance?',
          options: ['fd', 'rg (ripgrep)', 'eza', 'bat'],
          correctIndex: 1,
          explanation: 'ripgrep (rg) é o substituto moderno do grep, com performance muito superior e syntax highlighting.',
        },
        {
          id: 'q-09-02-2',
          question: 'Como enviar um arquivo para Claude via pipe?',
          options: ['claude < arquivo', 'cat arquivo | claude "query"', 'claude --file arquivo', 'Todas as anteriores'],
          correctIndex: 1,
          explanation: 'cat arquivo | claude "query" usa pipe para enviar o conteúdo do arquivo como input para Claude.',
        },
      ],
      challenges: [
        {
          id: 'ch-09-02-1',
          title: 'Configure seu Terminal TOP 1%',
          description: 'Instale: eza, bat, ripgrep, fzf, zoxide. Configure aliases no ~/.zshrc para usar com Claude.',
          context: 'general',
          contextDescription: 'Setup de terminal moderno',
          difficulty: 'intermediate',
          xpBonus: 50,
          hints: ['brew install eza bat ripgrep fzf zoxide', 'Adicione aliases ao ~/.zshrc', 'Teste cada ferramenta antes de integrar'],
        }
      ],
    }
  ),

  createLesson('09', '09-03-jetbrains', '03. JetBrains IDEs',
    'Integre Claude Code com IntelliJ, PyCharm, WebStorm e mais.',
    `# JetBrains IDEs Integration

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
`,
    {
      xp: 90,
      duration: 30,
      difficulty: 'intermediate',
      tags: ['jetbrains', 'intellij', 'pycharm', 'webstorm', 'ide'],
      isNew: true,
      quizzes: [
        {
          id: 'q-09-03-1',
          question: 'Qual atalho abre o terminal integrado em JetBrains IDEs?',
          options: ['Ctrl+T', 'Alt+F12', 'Ctrl+Shift+T', 'Alt+T'],
          correctIndex: 1,
          explanation: 'Alt+F12 abre o terminal integrado em todos os IDEs JetBrains.',
        },
      ],
    }
  ),

  createLesson('09', '09-04-vim-neovim', '04. Vim e Neovim',
    'Integre Claude Code com Vim/Neovim para o workflow mais rápido.',
    `# Vim e Neovim Integration

Para desenvolvedores que preferem Vim/Neovim, a integração com Claude é poderosa.

## Por Que Vim + Claude?

\`\`\`
VELOCIDADE MÁXIMA:
- Vim: edição mais rápida possível
- Claude: geração mais inteligente possível
- Juntos: produtividade TOP 1%
\`\`\`

## Método 1: Terminal Split

\`\`\`bash
# Vim em um pane, Claude em outro
tmux split-window -h 'claude'
\`\`\`

\`\`\`
┌─────────────────┬─────────────────┐
│      VIM        │     CLAUDE      │
│                 │                 │
│  [editando]     │  $ claude       │
│                 │  > refatore     │
│                 │                 │
└─────────────────┴─────────────────┘
\`\`\`

## Método 2: Comandos Vim

No seu \`~/.vimrc\` ou \`init.vim\`:

\`\`\`vim
" Enviar seleção visual para Claude
vnoremap <leader>ce :w !claude "explique este código"<CR>

" Refatorar arquivo atual
nnoremap <leader>cr :!claude "refatore" < %<CR>

" Gerar testes
nnoremap <leader>ct :!claude "gere testes para" < % > %:r.test.ts<CR>

" Quick ask (prompt interativo)
nnoremap <leader>cq :!claude ""<Left>
\`\`\`

## Método 3: Plugin para Neovim (Lua)

\`\`\`lua
-- ~/.config/nvim/lua/claude.lua

local M = {}

-- Enviar buffer para Claude
function M.send_buffer(prompt)
  local content = table.concat(vim.api.nvim_buf_get_lines(0, 0, -1, false), "\\n")
  local cmd = string.format('echo %q | claude %q', content, prompt)
  vim.fn.system(cmd)
end

-- Keymaps
vim.keymap.set('n', '<leader>ce', function()
  M.send_buffer("explique este código")
end, { desc = "Claude: Explain" })

vim.keymap.set('n', '<leader>cr', function()
  M.send_buffer("refatore para melhor qualidade")
end, { desc = "Claude: Refactor" })

vim.keymap.set('n', '<leader>ct', function()
  M.send_buffer("gere testes unitários")
end, { desc = "Claude: Tests" })

return M
\`\`\`

## Integração com Telescope (Neovim)

\`\`\`lua
-- Picker customizado para prompts Claude
require('telescope').setup{
  extensions = {
    claude_prompts = {
      prompts = {
        { name = "Explain", cmd = "explique" },
        { name = "Refactor", cmd = "refatore" },
        { name = "Tests", cmd = "gere testes" },
        { name = "Docs", cmd = "documente" },
      }
    }
  }
}

-- Keymap para abrir picker
vim.keymap.set('n', '<leader>cp', ':Telescope claude_prompts<CR>')
\`\`\`

## Workflow Vim + Claude

\`\`\`
1. ABRIR arquivo no Vim
   $ vim arquivo.ts

2. ANALISAR com Claude (split terminal)
   :!claude "analise este código" < %

3. EDITAR baseado nas sugestões
   (comandos vim normais)

4. REFATORAR com Claude
   :!claude "refatore a função X" < %

5. VERIFICAR mudanças
   :!git diff

6. COMMITAR
   :!git commit -am "feat: melhorias"
\`\`\`

## Dicas TOP 1%

| Dica | Comando |
|------|---------|
| **Seleção visual → Claude** | \`:'<,'>!claude "query"\` |
| **Substituir com output** | \`:r !claude "gere código"\` |
| **Diff lado a lado** | \`:vert diffsplit arquivo.bak\` |
| **Undo profundo** | \`:earlier 5m\` (volta 5 min) |

## LSP + Claude

\`\`\`lua
-- nvim-lspconfig com Claude como fallback
vim.keymap.set('n', 'gd', function()
  local ok = pcall(vim.lsp.buf.definition)
  if not ok then
    vim.cmd('!claude "onde está definido o símbolo sob o cursor?"')
  end
end)
\`\`\`

## Macros para Produtividade

\`\`\`vim
" Macro: Adicionar tipo TypeScript na linha
let @t = '0f:lclaude "qual o tipo correto?"\\<CR>'

" Macro: Documentar função
let @d = '[[Oclaude "documente esta função"\\<CR>'
\`\`\`
`,
    {
      xp: 110,
      duration: 35,
      difficulty: 'advanced',
      tags: ['vim', 'neovim', 'terminal', 'produtividade'],
      isNew: true,
      quizzes: [
        {
          id: 'q-09-04-1',
          question: 'Qual comando Vim envia o buffer atual para um comando externo?',
          options: [':!comando', ':w !comando', ':r !comando', ':e !comando'],
          correctIndex: 1,
          explanation: ':w !comando escreve o buffer como input para o comando. :!comando apenas executa.',
        },
        {
          id: 'q-09-04-2',
          question: 'Para inserir output de Claude no buffer Vim, use:',
          options: [':!claude', ':w !claude', ':r !claude', 'Nenhuma'],
          correctIndex: 2,
          explanation: ':r !claude lê (read) o output do comando e insere no buffer atual.',
        },
      ],
      challenges: [
        {
          id: 'ch-09-04-1',
          title: 'Configure Vim + Claude',
          description: 'Adicione 3 keymaps no seu vimrc: um para explain, um para refactor, um para tests. Teste com um arquivo real.',
          context: 'general',
          contextDescription: 'Integração Vim',
          difficulty: 'advanced',
          xpBonus: 70,
          hints: ['Use vnoremap para seleção visual', 'Use nnoremap para modo normal', 'O comando :w ! envia o buffer'],
        }
      ],
    }
  ),

  createLesson('09', '09-05-warp-terminal', '05. Warp e Terminais Modernos',
    'Use terminais de nova geração como Warp para máxima produtividade.',
    `# Warp e Terminais Modernos

Terminais modernos como Warp trazem features que multiplicam sua produtividade com Claude.

## Por Que Warp?

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    WARP TERMINAL                         │
│                                                          │
│  ✅ Blocks (comandos agrupados)                         │
│  ✅ AI integrado (Warp AI)                              │
│  ✅ Autocomplete inteligente                            │
│  ✅ Workflows salvos                                     │
│  ✅ Compartilhamento de sessão                          │
│  ✅ Busca em histórico visual                           │
│  ✅ Edição inline de comandos                           │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Instalação

\`\`\`bash
# macOS
brew install --cask warp

# Ou download direto
# https://www.warp.dev/
\`\`\`

## Warp + Claude Code

### Blocks

Cada comando é um "block" que você pode:
- Copiar inteiro
- Reexecutar
- Compartilhar
- Pesquisar

\`\`\`
┌─────────────────────────────────────────┐
│ Block 1: claude "analise o projeto"     │
│ > Análise completa do projeto...        │
│ > [output longo]                        │
│ ┌─────────────────────────────────────┐ │
│ │ Copy │ Retry │ Share │ Bookmark    │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
\`\`\`

### Workflows Salvos

\`\`\`yaml
# ~/.warp/workflows/claude-review.yaml
name: Claude Code Review
command: |
  git diff --staged | claude "revise estas mudanças"
description: Review mudanças staged com Claude
\`\`\`

Acesse com: \`Ctrl+Shift+R\` → pesquisar workflow

### Warp AI + Claude Code

Warp tem IA integrada. Use AMBOS:

\`\`\`
Warp AI: Ajuda com comandos shell
Claude Code: Ajuda com código/projetos

COMBO:
1. Warp AI: "como encontrar arquivos .ts modificados hoje?"
   → find . -name "*.ts" -mtime -1

2. Claude Code: "refatore estes arquivos"
   → [refatoração inteligente]
\`\`\`

## Outras Opções de Terminal

### iTerm2 (macOS)

\`\`\`bash
brew install --cask iterm2

# Features úteis:
# - Split panes
# - Profiles
# - Triggers (automação)
# - tmux integration
\`\`\`

### Alacritty (Cross-platform)

\`\`\`bash
brew install --cask alacritty

# Ultra rápido (GPU-accelerated)
# Configuração via YAML
# Mínimo de features, máximo de performance
\`\`\`

### Kitty

\`\`\`bash
brew install --cask kitty

# GPU-accelerated
# Tabs e windows
# Extensível com Python
# Excelente para imagens no terminal
\`\`\`

## Comparativo

| Terminal | Velocidade | Features | IA |
|----------|------------|----------|---|
| **Warp** | Rápido | Muitas | Sim |
| **iTerm2** | Médio | Muitas | Não |
| **Alacritty** | Ultra-rápido | Mínimas | Não |
| **Kitty** | Rápido | Médias | Não |
| **Terminal.app** | Lento | Básicas | Não |

## Configuração Universal

Independente do terminal, configure:

\`\`\`bash
# ~/.zshrc ou ~/.bashrc

# PATH com ferramentas modernas
export PATH="$HOME/.local/bin:$PATH"

# Aliases universais
alias c="claude"
alias cq="claude --quiet"

# Histórico melhor
HISTSIZE=50000
SAVEHIST=50000
setopt SHARE_HISTORY
\`\`\`

## Dicas de Produtividade

| Dica | Descrição |
|------|-----------|
| **Múltiplos panes** | Claude em um, código em outro |
| **Histórico pesquisável** | Ctrl+R ou fzf para buscar |
| **Bookmarks** | Salve comandos Claude úteis |
| **Profiles** | Config diferente por projeto |
`,
    {
      xp: 80,
      duration: 25,
      difficulty: 'intermediate',
      tags: ['warp', 'terminal', 'iterm', 'alacritty', 'produtividade'],
      isNew: true,
      quizzes: [
        {
          id: 'q-09-05-1',
          question: 'Qual feature do Warp agrupa comandos e seus outputs?',
          options: ['Tabs', 'Blocks', 'Profiles', 'Workflows'],
          correctIndex: 1,
          explanation: 'Blocks no Warp agrupam cada comando com seu output, permitindo copiar, reexecutar ou compartilhar facilmente.',
        },
      ],
    }
  ),

  createLesson('09', '09-06-ide-challenge', '06. Challenge: Setup IDE TOP 1%',
    'Configure seu ambiente de desenvolvimento ideal com Claude Code.',
    `# Challenge: Setup IDE TOP 1%

Hora de criar seu ambiente de desenvolvimento definitivo integrando todas as ferramentas.

## Objetivo

Configurar um setup completo que inclua:
1. Editor/IDE principal configurado
2. Terminal otimizado
3. Ferramentas modernas instaladas
4. Integração Claude perfeita
5. Documentação do seu setup

## Seu Stack Personalizado

Escolha seu caminho:

\`\`\`
PATH A: VS Code + Terminal Integrado
PATH B: JetBrains + Terminal Split
PATH C: Vim/Neovim + Tmux
PATH D: Híbrido (mistura de todos)
\`\`\`

## Checklist de Configuração

### 1. Terminal Moderno

\`\`\`bash
# Instalar ferramentas essenciais
brew install eza bat ripgrep fd fzf zoxide starship

# Configurar aliases em ~/.zshrc
alias ls="eza --icons"
alias cat="bat"
alias find="fd"
alias grep="rg"
alias c="claude"

# Ativar zoxide
eval "$(zoxide init zsh)"

# Ativar starship
eval "$(starship init zsh)"
\`\`\`

### 2. Editor Configurado

**VS Code:**
\`\`\`json
{
  "editor.inlineSuggest.enabled": true,
  "terminal.integrated.fontSize": 14,
  "workbench.colorTheme": "One Dark Pro"
}
\`\`\`

**Vim/Neovim:**
\`\`\`vim
" ~/.vimrc
set number relativenumber
set tabstop=2 shiftwidth=2 expandtab
nnoremap <leader>cr :!claude "refatore" < %<CR>
\`\`\`

### 3. Git Hooks para Claude

\`\`\`bash
# .git/hooks/pre-commit
#!/bin/bash
echo "🤖 Claude analyzing staged changes..."
git diff --cached --name-only | while read file; do
  if [[ "$file" == *.ts ]] || [[ "$file" == *.tsx ]]; then
    claude "quick review for issues" < "$file"
  fi
done
\`\`\`

### 4. Workflow Documentado

Crie um arquivo \`MY-SETUP.md\`:

\`\`\`markdown
# Meu Setup TOP 1%

## Editor
- [x] VS Code / IntelliJ / Neovim
- [x] Extensão Claude instalada
- [x] Keybindings configurados

## Terminal
- [x] Warp / iTerm2 / Alacritty
- [x] Zsh + Oh My Zsh
- [x] Ferramentas modernas (eza, bat, rg, fd, fzf)
- [x] Aliases configurados

## Claude Code
- [x] Instalado globalmente
- [x] CLAUDE.md no projeto
- [x] Skills customizadas
- [x] MCPs essenciais

## Workflow Diário
1. Abrir terminal no projeto
2. \`z projeto\` para navegar
3. \`c\` para iniciar Claude
4. Iterar: pedir → revisar → commitar

## Comandos Mais Usados
- \`c "refatore"\` - Refatoração rápida
- \`c "teste"\` - Gerar testes
- \`c "explique"\` - Entender código
\`\`\`

## Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Terminal com ferramentas modernas | 20 |
| Editor configurado para Claude | 20 |
| Aliases e atalhos funcionando | 20 |
| Workflow documentado | 20 |
| Git hooks ou automação | 10 |
| Setup reproduzível (script) | 10 |
| **TOTAL** | **100** |

## Bônus: Script de Setup

Crie um script que reproduz todo seu setup:

\`\`\`bash
#!/bin/bash
# setup-dev-environment.sh

echo "🚀 Instalando ferramentas..."
brew install eza bat ripgrep fd fzf zoxide starship

echo "📝 Configurando zsh..."
cat >> ~/.zshrc << 'EOF'
alias ls="eza --icons"
alias cat="bat"
alias c="claude"
eval "$(zoxide init zsh)"
eval "$(starship init zsh)"
EOF

echo "✅ Setup completo!"
echo "Reinicie o terminal para aplicar."
\`\`\`

**+50 XP Bônus por script funcional!**

## Entrega

1. \`MY-SETUP.md\` documentando seu ambiente
2. Capturas de tela do setup funcionando
3. (Bônus) \`setup-dev-environment.sh\` script

## Reflexão

Ao completar este challenge, você terá:

- ✅ Ambiente de desenvolvimento otimizado
- ✅ Terminal moderno configurado
- ✅ Integração Claude perfeita
- ✅ Workflow documentado e reproduzível
- ✅ Setup que pode compartilhar com outros

**Você agora tem o ambiente que os TOP 1% usam!**
`,
    {
      xp: 200,
      duration: 60,
      difficulty: 'advanced',
      tags: ['challenge', 'setup', 'ide', 'terminal', 'produtividade', 'top-1-percent'],
      isNew: true,
      challenges: [
        {
          id: 'ch-09-06-final',
          title: 'Setup IDE TOP 1% Completo',
          description: 'Configure seu ambiente completo: terminal moderno, editor otimizado, ferramentas instaladas, workflow documentado.',
          context: 'general',
          contextDescription: 'Challenge final do módulo IDE',
          difficulty: 'advanced',
          xpBonus: 100,
          hints: [
            'Comece pelo terminal - é a base de tudo',
            'Instale eza, bat, ripgrep, fd, fzf primeiro',
            'Configure aliases no ~/.zshrc',
            'Documente tudo no MY-SETUP.md'
          ]
        }
      ]
    }
  ),
];

const module10Lessons: Lesson[] = [
  createLesson('10', '10-01-extended-thinking', '01. Extended Thinking',
    'Use o modo de pensamento estendido para problemas complexos.',
    `# Extended Thinking

Extended Thinking permite que Claude "pense por mais tempo" antes de responder, gerando raciocínios mais profundos e soluções mais elaboradas.

## O que é Extended Thinking?

Extended Thinking é um modo onde Claude pode usar mais tokens internamente para "pensar" sobre um problema antes de gerar a resposta final. É especialmente útil para:

- **Problemas complexos** que requerem múltiplas etapas
- **Análises profundas** de código ou arquitetura
- **Decisões arquiteturais** com trade-offs
- **Debugging** de issues difíceis

## Como Ativar

No Claude Code, você pode ativar o thinking mode de diferentes formas:

\`\`\`bash
# Via flag na CLI
claude --thinking

# Ou usando o modelo Opus 4.5 que tem melhor reasoning
claude --model opus
\`\`\`

## Quando Usar Extended Thinking

| Cenário | Usar Extended Thinking? |
|---------|------------------------|
| Refatoração complexa | ✅ Sim |
| Fix simples de typo | ❌ Não necessário |
| Arquitetura de sistema | ✅ Sim |
| Adicionar um console.log | ❌ Não necessário |
| Debug de race condition | ✅ Sim |
| Formatação de código | ❌ Não necessário |

## Dica TOP 1%

> **Pro Tip:** Combine Extended Thinking com prompts específicos como "Analise profundamente antes de responder" ou "Considere todos os edge cases" para resultados ainda melhores.

## Exemplo Prático

\`\`\`
Prompt SEM Extended Thinking:
"Refatore este código"
→ Resposta rápida, pode perder nuances

Prompt COM Extended Thinking:
"Preciso refatorar este sistema de autenticação.
Considere: segurança, performance, manutenibilidade,
e compatibilidade com o código existente."
→ Análise profunda antes de propor mudanças
\`\`\`
`,
    {
      xp: 100,
      duration: 30,
      difficulty: 'expert',
      tags: ['thinking', 'avançado', 'reasoning'],
      quizzes: [
        {
          question: 'Quando você DEVE usar Extended Thinking?',
          options: [
            'Para qualquer tarefa, sempre',
            'Para problemas complexos que requerem análise profunda',
            'Apenas para correção de typos',
            'Nunca, é desnecessário'
          ],
          correctIndex: 1,
          explanation: 'Extended Thinking é ideal para problemas complexos como refatoração, arquitetura e debugging difícil. Para tarefas simples, não é necessário.'
        }
      ]
    }
  ),

  createLesson('10', '10-02-plan-mode', '02. Plan Mode',
    'Planeje antes de executar - o segredo dos projetos bem-sucedidos.',
    `# Plan Mode

O Plan Mode é uma funcionalidade poderosa que permite planejar mudanças complexas antes de executá-las.

## Por Que Planejar?

> "Weeks of coding can save you hours of planning" - Ditado de desenvolvedor

O Plan Mode resolve um problema comum: fazer mudanças grandes sem entender o impacto completo.

## Como Funciona

1. **Claude analisa** todo o contexto do projeto
2. **Cria um plano** detalhado das mudanças necessárias
3. **Você revisa** o plano antes de aprovar
4. **Executa** com confiança sabendo o que vai mudar

## Ativando Plan Mode

\`\`\`bash
# Usando flag --plan
claude --plan "Adicionar sistema de autenticação"

# Ou via prompt
claude "Quero implementar cache Redis. Me mostre um plano primeiro."
\`\`\`

## Anatomia de um Bom Plano

Um plano bem estruturado inclui:

\`\`\`markdown
## 1. Análise do Estado Atual
- Arquivos que serão modificados
- Dependências existentes
- Possíveis conflitos

## 2. Mudanças Propostas
- [ ] Criar novo arquivo X
- [ ] Modificar arquivo Y (linhas 10-50)
- [ ] Atualizar configuração Z

## 3. Ordem de Execução
1. Primeiro: criar interfaces
2. Depois: implementar lógica
3. Por fim: atualizar imports

## 4. Riscos e Mitigações
- Risco: Quebrar testes existentes
- Mitigação: Rodar testes após cada etapa
\`\`\`

## Quando Usar Plan Mode

| Cenário | Recomendação |
|---------|--------------|
| Nova feature grande | ✅ Sempre planejar |
| Refatoração de múltiplos arquivos | ✅ Sempre planejar |
| Bug fix simples | ❌ Ir direto |
| Mudança em 1 arquivo | ❌ Ir direto |
| Migração de dependência | ✅ Sempre planejar |

## Workflow TOP 1%

\`\`\`
1. "Planeje a implementação de [feature]"
   ↓
2. Revise o plano, peça ajustes se necessário
   ↓
3. "Execute o plano, etapa por etapa"
   ↓
4. Valide cada etapa antes de continuar
   ↓
5. "Resuma as mudanças feitas"
\`\`\`

## Exemplo Real: Adicionando Autenticação

\`\`\`
Você: "Planeje a adição de autenticação JWT ao projeto"

Claude:
## Plano: Implementação de Autenticação JWT

### Fase 1: Setup (30 min)
- [ ] Instalar dependências: jsonwebtoken, bcrypt
- [ ] Criar pasta src/auth/

### Fase 2: Modelos (20 min)
- [ ] Criar User model com password hash
- [ ] Criar migrations

### Fase 3: Middleware (30 min)
- [ ] Criar authMiddleware.ts
- [ ] Implementar verificação de token

### Fase 4: Rotas (40 min)
- [ ] POST /auth/register
- [ ] POST /auth/login
- [ ] GET /auth/me

### Fase 5: Testes (30 min)
- [ ] Testes unitários para auth
- [ ] Testes de integração

Deseja que eu execute este plano?
\`\`\`
`,
    {
      xp: 120,
      duration: 35,
      difficulty: 'advanced',
      tags: ['plan-mode', 'planejamento', 'workflow'],
      quizzes: [
        {
          question: 'Qual é a principal vantagem do Plan Mode?',
          options: [
            'Escrever código mais rápido',
            'Evitar usar o terminal',
            'Visualizar e aprovar mudanças antes de executar',
            'Reduzir o consumo de tokens'
          ],
          correctIndex: 2,
          explanation: 'O Plan Mode permite ver todo o plano de mudanças antes de executar, dando controle total sobre o que será modificado no projeto.'
        },
        {
          question: 'Quando você NÃO precisa usar Plan Mode?',
          options: [
            'Refatoração de múltiplos arquivos',
            'Nova feature complexa',
            'Fix simples de um bug em um arquivo',
            'Migração de banco de dados'
          ],
          correctIndex: 2,
          explanation: 'Para mudanças simples e localizadas (como um bug fix em um único arquivo), ir direto é mais eficiente que criar um plano elaborado.'
        }
      ],
      challenges: [
        {
          id: 'ch-10-02-1',
          title: 'Planeje um Sistema de Notificações',
          description: 'Use o Plan Mode para planejar a adição de um sistema de notificações push a um projeto existente. Documente o plano gerado.',
          context: 'general',
          contextDescription: 'Qualquer projeto web/mobile',
          difficulty: 'advanced',
          xpBonus: 80,
          hints: [
            'Considere: banco de dados, filas, serviço de push',
            'Pense em rate limiting e retry logic'
          ]
        }
      ]
    }
  ),

  createLesson('10', '10-03-multi-file-editing', '03. Multi-File Editing',
    'Edite múltiplos arquivos de forma coordenada e segura.',
    `# Multi-File Editing

Uma das capacidades mais poderosas do Claude Code é editar múltiplos arquivos de forma coordenada, mantendo consistência e evitando quebras.

## O Desafio

Mudanças em projetos reais raramente afetam apenas um arquivo:

- Renomear uma função → atualizar todos os imports
- Adicionar um campo → model, migration, API, frontend
- Refatorar um módulo → dezenas de arquivos

## Como Claude Code Lida com Isso

O Claude Code mantém contexto de múltiplos arquivos e pode:

1. **Ler** vários arquivos para entender o contexto
2. **Planejar** mudanças coordenadas
3. **Editar** em sequência lógica
4. **Validar** que as mudanças são consistentes

## Técnicas para Multi-File Editing

### 1. Dar Contexto Completo

\`\`\`bash
# Adicione arquivos relevantes ao contexto
claude "Olhe estes arquivos: src/models/user.ts,
src/api/users.ts, src/types/user.ts.
Preciso adicionar um campo 'avatar' em todos."
\`\`\`

### 2. Usar Referências Explícitas

\`\`\`
"No arquivo src/models/user.ts, adicione o campo avatar.
Depois, atualize src/api/users.ts para aceitar avatar.
Por fim, adicione o tipo em src/types/user.ts."
\`\`\`

### 3. Pedir Confirmação Entre Arquivos

\`\`\`
"Edite o model primeiro e me mostre. Depois de aprovado,
continue com os outros arquivos."
\`\`\`

## Padrão: Renomear Símbolo

Um dos casos mais comuns - renomear uma função/classe:

\`\`\`
Você: "Renomeie a função 'getUserData' para 'fetchUserProfile'
em todo o projeto"

Claude:
Encontrei 'getUserData' em 12 arquivos:
- src/services/user.ts (definição)
- src/api/users.ts (2 usos)
- src/components/Profile.tsx (1 uso)
... [lista completa]

Procedendo com a renomeação:
1. ✅ src/services/user.ts - definição atualizada
2. ✅ src/api/users.ts - 2 imports atualizados
3. ✅ src/components/Profile.tsx - 1 uso atualizado
...

Todas as 12 ocorrências foram atualizadas.
\`\`\`

## Padrão: Adicionar Feature Cross-Cutting

\`\`\`
Você: "Adicione logging a todas as funções de API"

Claude analisa:
- src/api/users.ts - 5 funções
- src/api/products.ts - 8 funções
- src/api/orders.ts - 6 funções

E adiciona logging consistente em todas.
\`\`\`

## Ordem de Edição Importa

O Claude Code é inteligente sobre a ordem:

| Tipo de Mudança | Ordem Correta |
|-----------------|---------------|
| Adicionar campo | Types → Model → API → Frontend |
| Remover campo | Frontend → API → Model → Types |
| Renomear | Definição → Usos |
| Nova dependência | package.json → imports → uso |

## Dicas TOP 1%

### Use Glob Patterns para Contexto
\`\`\`
"Edite todos os arquivos em src/api/*.ts para
adicionar rate limiting"
\`\`\`

### Peça Resumo no Final
\`\`\`
"Após todas as edições, me dê um resumo das mudanças
em cada arquivo"
\`\`\`

### Valide com Build/Test
\`\`\`
"Após editar, rode o build e me diga se há erros"
\`\`\`

## Exemplo Completo: Adicionar Soft Delete

\`\`\`
Você: "Adicione soft delete ao model User.
Preciso do campo deletedAt, atualizar queries para
ignorar deletados, e adicionar endpoint de restore."

Claude:
## Plano de Mudanças (5 arquivos)

1. **src/models/User.ts**
   - Adicionar campo \`deletedAt: Date | null\`

2. **src/migrations/xxx-add-soft-delete.ts**
   - Criar migration para novo campo

3. **src/repositories/UserRepository.ts**
   - Modificar queries para filtrar deletedAt

4. **src/api/users.ts**
   - Modificar DELETE para soft delete
   - Adicionar POST /users/:id/restore

5. **src/types/user.ts**
   - Adicionar deletedAt ao tipo

Executando mudanças...
[edições coordenadas em todos os arquivos]

✅ Todas as mudanças aplicadas. Build passou.
\`\`\`
`,
    {
      xp: 130,
      duration: 40,
      difficulty: 'advanced',
      tags: ['multi-file', 'refactoring', 'editing'],
      quizzes: [
        {
          question: 'Qual é a ordem correta para ADICIONAR um novo campo?',
          options: [
            'Frontend → API → Model → Types',
            'Types → Model → API → Frontend',
            'Qualquer ordem funciona',
            'Model → Types → Frontend → API'
          ],
          correctIndex: 1,
          explanation: 'Para adicionar, começamos pela definição (Types, Model) e vamos para os consumidores (API, Frontend). Para remover, é o contrário.'
        },
        {
          question: 'O que você deve fazer após edições multi-arquivo?',
          options: [
            'Nada, Claude garante que está tudo certo',
            'Fechar o terminal',
            'Pedir para rodar build/testes e verificar erros',
            'Deletar os arquivos originais'
          ],
          correctIndex: 2,
          explanation: 'Sempre valide com build e testes após mudanças multi-arquivo para garantir que não há erros de tipagem ou runtime.'
        }
      ],
      challenges: [
        {
          id: 'ch-10-03-1',
          title: 'Refatoração Multi-Arquivo',
          description: 'Renomeie uma entidade principal do seu projeto (ex: User → Account) usando Claude Code. Documente quantos arquivos foram modificados.',
          context: 'general',
          contextDescription: 'Qualquer projeto com múltiplos arquivos',
          difficulty: 'advanced',
          xpBonus: 100,
          hints: [
            'Use Plan Mode primeiro para ver o impacto',
            'Peça confirmação arquivo por arquivo se necessário'
          ]
        }
      ]
    }
  ),

  createLesson('10', '10-04-project-architecture', '04. Arquitetura de Projetos',
    'Como Claude Code entende e trabalha com arquiteturas complexas.',
    `# Arquitetura de Projetos

Claude Code não apenas edita arquivos - ele entende a arquitetura do seu projeto e trabalha de forma consistente com ela.

## Como Claude Code Entende Seu Projeto

### 1. Análise de Estrutura
\`\`\`
src/
├── components/     # UI components
├── services/       # Business logic
├── api/           # API layer
├── models/        # Data models
└── utils/         # Helpers
\`\`\`

Claude Code infere padrões pela estrutura de pastas.

### 2. Análise de Imports
Ao ler imports, Claude entende dependências:
\`\`\`typescript
import { User } from '@/models/User'
import { api } from '@/services/api'
// Claude entende: este arquivo depende de models e services
\`\`\`

### 3. Análise de Configuração
- \`package.json\` → dependências, scripts
- \`tsconfig.json\` → paths, strict mode
- \`.eslintrc\` → padrões de código

## Informando Arquitetura via CLAUDE.md

O melhor jeito de informar sua arquitetura:

\`\`\`markdown
# Arquitetura do Projeto

## Camadas
1. **Presentation** (src/components) - React components
2. **Application** (src/services) - Use cases, business rules
3. **Domain** (src/models) - Entities, value objects
4. **Infrastructure** (src/api) - External services

## Regras
- Components NUNCA acessam API diretamente
- Services são a única camada que faz I/O
- Models são puros (sem side effects)

## Padrões em Uso
- Repository Pattern para data access
- Factory Pattern para criação de objetos
- Observer Pattern para eventos
\`\`\`

## Claude Code Respeita Sua Arquitetura

### Exemplo: Seguindo Camadas

\`\`\`
Você: "Adicione busca de produtos"

Claude (entendendo a arquitetura):
1. Cria ProductRepository em src/repositories/
2. Cria ProductService em src/services/
3. Cria useProducts hook em src/hooks/
4. Usa o hook no ProductList component

❌ NÃO faz fetch direto no component
✅ Segue o fluxo de camadas definido
\`\`\`

### Exemplo: Respeitando Padrões

\`\`\`
Seu projeto usa factories:

// Existente
const user = UserFactory.create({ name: 'João' })

Você pede: "Crie Product model"

Claude cria:
// src/factories/ProductFactory.ts
export const ProductFactory = {
  create(data: ProductData): Product {
    return new Product(data)
  }
}

// Segue o mesmo padrão existente
\`\`\`

## Dica TOP 1%: Arquitetura Explícita

Quanto mais explícita sua arquitetura no CLAUDE.md, melhores os resultados:

\`\`\`markdown
## Estrutura de Features (Feature-Sliced Design)

Cada feature tem:
\`\`\`
features/
└── [feature-name]/
    ├── api/        # API calls
    ├── model/      # Types, stores
    ├── ui/         # Components
    └── lib/        # Utils
\`\`\`

## Quando criar novo código:
1. Identificar a feature
2. Colocar no slice correto
3. Exportar via index.ts
4. Nunca importar de outra feature diretamente
\`\`\`

## Anti-Padrões que Claude Code Evita

| Anti-Padrão | O que Claude Faz |
|-------------|------------------|
| God Component | Sugere split em componentes menores |
| Prop Drilling | Sugere Context ou state management |
| Business logic em UI | Move para services |
| Imports circulares | Alerta e sugere refatoração |

## Trabalhando com Monorepos

Claude Code entende monorepos:

\`\`\`
packages/
├── web/          # Next.js app
├── mobile/       # React Native
├── shared/       # Shared types & utils
└── api/          # Backend
\`\`\`

\`\`\`
Você: "Adicione um novo tipo User compartilhado"

Claude:
1. Cria em packages/shared/types/User.ts
2. Exporta via packages/shared/index.ts
3. Mostra como importar em web e mobile
\`\`\`
`,
    {
      xp: 140,
      duration: 45,
      difficulty: 'expert',
      tags: ['arquitetura', 'patterns', 'design'],
      quizzes: [
        {
          question: 'Como você informa sua arquitetura ao Claude Code?',
          options: [
            'Não precisa, ele adivinha',
            'Via comentários em cada arquivo',
            'Documentando no CLAUDE.md do projeto',
            'Enviando diagrama UML'
          ],
          correctIndex: 2,
          explanation: 'O CLAUDE.md do projeto é o lugar ideal para documentar arquitetura, padrões e regras. Claude Code lê e respeita essas diretrizes.'
        },
        {
          question: 'O que Claude Code faz se você tem business logic em um component?',
          options: [
            'Ignora e mantém assim',
            'Sugere mover para a camada de services',
            'Deleta o código',
            'Adiciona mais business logic'
          ],
          correctIndex: 1,
          explanation: 'Claude Code entende separação de concerns e sugere mover lógica de negócio para a camada apropriada (services/use cases).'
        }
      ],
      challenges: [
        {
          id: 'ch-10-04-1',
          title: 'Documente Sua Arquitetura',
          description: 'Crie uma seção de Arquitetura no CLAUDE.md do seu projeto. Inclua: camadas, padrões usados e regras. Depois, peça ao Claude para criar um novo módulo e veja se ele segue as regras.',
          context: 'general',
          contextDescription: 'Qualquer projeto pessoal ou profissional',
          difficulty: 'expert',
          xpBonus: 120,
          hints: [
            'Seja específico sobre onde cada tipo de código deve ficar',
            'Inclua exemplos de import paths corretos'
          ]
        }
      ]
    }
  ),
];

const module11Lessons: Lesson[] = [
  // ==================== LESSON 11-01: Padrões de Prompting ====================
  createLesson('11', '11-01-prompting-patterns', '01. Padrões de Prompting',
    'Melhores práticas de prompting para resultados consistentes.',
    `# Padrões de Prompting TOP 1%

Prompting eficaz é a diferença entre resultados medianos e extraordinários.

## O Framework CLEAR

\`\`\`
C - Context:    Forneça contexto relevante
L - Language:   Use linguagem precisa
E - Examples:   Inclua exemplos quando útil
A - Action:     Seja específico sobre a ação
R - Refinement: Itere e refine
\`\`\`

## Padrões Essenciais

### 1. Persona Pattern

\`\`\`bash
# Definir persona para contexto especializado
claude "Atue como um arquiteto de software sênior.
Revise este código considerando:
- Padrões de design
- Escalabilidade
- Manutenibilidade"
\`\`\`

### 2. Chain of Thought

\`\`\`bash
# Forçar raciocínio passo-a-passo
claude "Analise este problema passo a passo:
1. Identifique o problema principal
2. Liste possíveis causas
3. Proponha soluções
4. Recomende a melhor opção"
\`\`\`

### 3. Few-Shot Pattern

\`\`\`bash
# Fornecer exemplos do output esperado
claude "Converta funções para TypeScript:

Exemplo input:
function add(a, b) { return a + b; }

Exemplo output:
function add(a: number, b: number): number { return a + b; }

Agora converta:
function multiply(x, y) { return x * y; }"
\`\`\`

### 4. Constraint Pattern

\`\`\`bash
# Definir limites claros
claude "Refatore este código com as seguintes restrições:
- Máximo 20 linhas por função
- Sem dependências externas
- Compatível com Node 18+"
\`\`\`

### 5. Template Pattern

\`\`\`bash
# Estrutura consistente
claude "Gere documentação no formato:
## [Nome da Função]
**Descrição:** [breve descrição]
**Parâmetros:** [lista de params]
**Retorno:** [tipo de retorno]
**Exemplo:** [código de exemplo]"
\`\`\`

## Anti-Patterns a Evitar

| Anti-Pattern | Por quê evitar | Alternativa |
|--------------|----------------|-------------|
| Prompts vagos | Resultados imprevisíveis | Seja específico |
| Sem contexto | Claude precisa adivinhar | Forneça background |
| Instruções conflitantes | Confunde o modelo | Uma direção clara |
| Output muito grande | Perde foco | Divida em partes |
| Sem exemplos | Formato inconsistente | Few-shot quando possível |

## Prompt Engineering Avançado

### Meta-Prompting

\`\`\`bash
# Claude ajuda a criar prompts
claude "Crie um prompt otimizado para:
Objetivo: Gerar testes unitários
Linguagem: TypeScript
Framework: Jest
Deve cobrir: edge cases, happy path, error handling"
\`\`\`

### Self-Consistency

\`\`\`bash
# Múltiplas perspectivas
claude "Analise esta arquitetura de 3 formas:
1. Como desenvolvedor junior (simplicidade)
2. Como arquiteto sênior (escalabilidade)
3. Como DevOps (operabilidade)
Depois, sintetize as melhores ideias."
\`\`\`

## Checklist de Qualidade

- [ ] Contexto suficiente fornecido?
- [ ] Ação claramente definida?
- [ ] Formato de output especificado?
- [ ] Restrições mencionadas?
- [ ] Exemplos incluídos se necessário?

> **Dica TOP 1%:** Salve seus melhores prompts em \`~/.claude/prompts/\` para reutilização!
`,
    {
      xp: 90,
      duration: 30,
      difficulty: 'intermediate',
      tags: ['prompting', 'best-practices', 'patterns'],
      isNew: true,
      quizzes: [
        {
          id: 'q-11-01-1',
          question: 'O que significa o "C" no framework CLEAR?',
          options: ['Command', 'Context', 'Code', 'Claude'],
          correctIndex: 1,
          explanation: 'C = Context. Fornecer contexto relevante é fundamental para bons resultados.',
        },
        {
          id: 'q-11-01-2',
          question: 'Qual padrão força o Claude a explicar seu raciocínio?',
          options: ['Persona Pattern', 'Few-Shot Pattern', 'Chain of Thought', 'Template Pattern'],
          correctIndex: 2,
          explanation: 'Chain of Thought força raciocínio passo-a-passo, melhorando a qualidade das análises.',
        },
      ],
      challenges: [
        {
          id: 'ch-11-01-1',
          title: 'Prompt Library',
          description: 'Crie uma biblioteca de 5 prompts reutilizáveis para seu workflow diário',
          context: 'general' as const,
          contextDescription: 'Aplicável a qualquer projeto de desenvolvimento',
          difficulty: 'intermediate' as const,
          xpBonus: 40,
          hints: ['Considere: code review, debugging, documentação, testes, refatoração'],
        },
      ],
    }
  ),

  // ==================== LESSON 11-02: Code Review com Claude ====================
  createLesson('11', '11-02-code-review', '02. Code Review com Claude',
    'Transforme code reviews em oportunidades de aprendizado e melhoria.',
    `# Code Review com Claude

Code review é onde a qualidade acontece. Claude pode ser seu melhor reviewer.

## O Processo de Review TOP 1%

\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Pre-Check  │────▶│   Review    │────▶│   Refine    │
│  (Lint+TS)  │     │  (Claude)   │     │  (Iterate)  │
└─────────────┘     └─────────────┘     └─────────────┘
\`\`\`

## Tipos de Review

### 1. Quick Review (5 min)

\`\`\`bash
# Review rápido focado em issues óbvios
claude "Quick review deste código:
- Bugs óbvios?
- Problemas de segurança?
- Code smells?

$(cat src/feature.ts)"
\`\`\`

### 2. Deep Review (15 min)

\`\`\`bash
# Review completo com múltiplas dimensões
claude "Deep review considerando:

1. **Corretude**: Faz o que deveria?
2. **Performance**: Há otimizações possíveis?
3. **Segurança**: Vulnerabilidades?
4. **Manutenibilidade**: Fácil de entender/modificar?
5. **Testabilidade**: Fácil de testar?

Código:
$(cat src/feature.ts)"
\`\`\`

### 3. Architecture Review

\`\`\`bash
# Review de decisões arquiteturais
claude "Analise a arquitetura deste módulo:

Estrutura atual:
$(find src/module -type f -name '*.ts' | head -20)

Principais arquivos:
$(cat src/module/index.ts)

Avalie:
- Separação de responsabilidades
- Acoplamento entre componentes
- Padrões de design utilizados
- Sugestões de melhoria"
\`\`\`

## Checklist de Review

### Funcionalidade
- [ ] O código faz o que a spec pede?
- [ ] Edge cases tratados?
- [ ] Error handling adequado?

### Qualidade
- [ ] Código limpo e legível?
- [ ] Nomes significativos?
- [ ] Funções pequenas e focadas?

### Segurança
- [ ] Inputs validados?
- [ ] Sem secrets hardcoded?
- [ ] SQL injection protegido?
- [ ] XSS prevenido?

### Performance
- [ ] Queries otimizadas?
- [ ] Sem loops desnecessários?
- [ ] Caching quando apropriado?

## Automação com Hooks

\`\`\`json
// settings.json - Auto-review em commits
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "if [[ \\"$TOOL_INPUT\\" == *\\"git commit\\"* ]]; then echo 'Lembre de fazer review!'; fi"
      }]
    }]
  }
}
\`\`\`

## Template de Feedback

\`\`\`markdown
## Code Review: [Feature Name]

### ✅ Pontos Positivos
- [O que está bom]

### ⚠️ Sugestões
- [Melhorias opcionais]

### 🚨 Crítico
- [Deve ser corrigido antes do merge]

### 📚 Aprendizados
- [Padrões interessantes para compartilhar]
\`\`\`

> **Regra de ouro:** Critique o código, não a pessoa. Sugira, não ordene.
`,
    {
      xp: 100,
      duration: 35,
      difficulty: 'intermediate',
      tags: ['code-review', 'quality', 'best-practices'],
      isNew: true,
      quizzes: [
        {
          id: 'q-11-02-1',
          question: 'Qual tipo de review é mais apropriado para um hotfix urgente?',
          options: ['Architecture Review', 'Deep Review', 'Quick Review', 'Nenhum review'],
          correctIndex: 2,
          explanation: 'Quick Review é ideal para hotfixes - rápido mas ainda verifica bugs óbvios e segurança.',
        },
      ],
      challenges: [
        {
          id: 'ch-11-02-1',
          title: 'Review Template',
          description: 'Crie um template de code review personalizado para seu projeto',
          context: 'general' as const,
          contextDescription: 'Aplicável a projetos de qualquer linguagem',
          difficulty: 'intermediate' as const,
          xpBonus: 50,
          hints: ['Inclua seções para: segurança, performance, estilo, testes'],
        },
      ],
    }
  ),

  // ==================== LESSON 11-03: Debugging Avançado ====================
  createLesson('11', '11-03-debugging', '03. Debugging Avançado',
    'Técnicas de debugging que economizam horas de frustração.',
    `# Debugging Avançado com Claude

Bugs são inevitáveis. A diferença está em quão rápido você os encontra.

## O Processo de Debug TOP 1%

\`\`\`
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Reproduce│───▶│ Isolate  │───▶│ Identify │───▶│   Fix    │
│  (repro) │    │ (narrow) │    │  (root)  │    │ (verify) │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
\`\`\`

## Técnicas de Debug

### 1. Rubber Duck com Claude

\`\`\`bash
# Explique o problema para Claude "pensar alto"
claude "Estou tendo um bug estranho:

**Comportamento esperado:**
O usuário deveria ver a lista atualizada após salvar.

**Comportamento atual:**
A lista só atualiza após refresh manual.

**O que já tentei:**
- Verificar se o save está funcionando (está)
- Console.log no useEffect (não dispara)

**Código relevante:**
$(cat src/hooks/useItems.ts)

Me ajude a debugar passo a passo."
\`\`\`

### 2. Binary Search Debug

\`\`\`bash
# Encontrar onde o bug foi introduzido
git bisect start
git bisect bad HEAD
git bisect good v1.0.0

# Claude ajuda a testar cada commit
claude "Analise este commit e diga se pode ter introduzido
um bug relacionado a atualização de estado:
$(git show --stat)"
\`\`\`

### 3. Stack Trace Analysis

\`\`\`bash
# Claude interpreta stack traces
claude "Analise este stack trace e identifique:
1. Onde o erro originou
2. A provável causa
3. Como corrigir

Stack trace:
$(cat error.log)"
\`\`\`

### 4. Log Analysis

\`\`\`bash
# Análise de logs com patterns
claude "Analise estes logs procurando:
- Padrões de erro
- Anomalias de timing
- Sequência de eventos suspeita

$(tail -100 app.log | grep -E 'ERROR|WARN|timeout')"
\`\`\`

## Debug por Tipo de Bug

### Race Conditions

\`\`\`bash
claude "Suspeito de race condition neste código.
Identifique potenciais problemas de concorrência:
$(cat src/async-handler.ts)"
\`\`\`

### Memory Leaks

\`\`\`bash
claude "Analise este componente React para memory leaks:
- Event listeners não removidos?
- Subscriptions abertas?
- Timers não limpos?

$(cat src/components/Dashboard.tsx)"
\`\`\`

### Performance Issues

\`\`\`bash
claude "Este código está lento. Identifique:
- Operações O(n²) ou pior
- Renders desnecessários
- Queries não otimizadas

$(cat src/services/dataProcessor.ts)"
\`\`\`

## Ferramentas de Debug

| Ferramenta | Uso | Quando usar |
|------------|-----|-------------|
| console.log | Quick debug | Problemas simples |
| debugger | Breakpoints | Flow complexo |
| React DevTools | Component state | React issues |
| Network tab | API calls | Backend integration |
| Performance tab | Bottlenecks | Lentidão |

## Template de Bug Report

\`\`\`markdown
## Bug Report

**Título:** [Descrição curta]

**Ambiente:**
- OS: [ex: macOS 14.2]
- Node: [ex: 20.10.0]
- Browser: [ex: Chrome 120]

**Reprodução:**
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

**Esperado:** [O que deveria acontecer]

**Atual:** [O que acontece]

**Logs/Screenshots:** [Anexar]

**Investigação inicial:** [O que você já tentou]
\`\`\`

> **Dica:** Sempre crie um caso de teste que reproduz o bug ANTES de tentar corrigir!
`,
    {
      xp: 110,
      duration: 40,
      difficulty: 'advanced',
      tags: ['debugging', 'troubleshooting', 'best-practices'],
      isNew: true,
      quizzes: [
        {
          id: 'q-11-03-1',
          question: 'Qual técnica é melhor para encontrar quando um bug foi introduzido?',
          options: ['Rubber Duck', 'Binary Search (git bisect)', 'Stack Trace Analysis', 'Log Analysis'],
          correctIndex: 1,
          explanation: 'Git bisect faz busca binária no histórico de commits para encontrar exatamente onde o bug começou.',
        },
        {
          id: 'q-11-03-2',
          question: 'O que você deve fazer ANTES de tentar corrigir um bug?',
          options: ['Deletar o código problemático', 'Criar um teste que reproduz o bug', 'Reiniciar o computador', 'Ignorar e seguir em frente'],
          correctIndex: 1,
          explanation: 'Um teste que reproduz o bug garante que você saberá quando o fix funcionou e previne regressões.',
        },
      ],
      challenges: [
        {
          id: 'ch-11-03-1',
          title: 'Debug Session',
          description: 'Documente uma sessão de debug real usando as técnicas aprendidas',
          context: 'general' as const,
          contextDescription: 'Use um bug real do seu projeto atual',
          difficulty: 'advanced' as const,
          xpBonus: 60,
          hints: ['Use o template de bug report', 'Inclua todos os passos até a solução'],
        },
      ],
    }
  ),

  // ==================== LESSON 11-04: Testing com IA ====================
  createLesson('11', '11-04-testing', '04. Testing Assistido por IA',
    'Gere testes abrangentes e descubra edge cases automaticamente.',
    `# Testing Assistido por IA

Testes são a rede de segurança do código. Claude ajuda a criar testes melhores e mais rápido.

## Estratégia de Testing TOP 1%

\`\`\`
                    ┌─────────────┐
                    │     E2E     │  ← Poucos, críticos
                   ─┴─────────────┴─
                  ┌─────────────────┐
                  │   Integration   │  ← Moderados
                 ─┴─────────────────┴─
                ┌─────────────────────┐
                │       Unit         │  ← Muitos, rápidos
               ─┴─────────────────────┴─
\`\`\`

## Geração de Testes com Claude

### Unit Tests

\`\`\`bash
# Gerar testes unitários completos
claude "Gere testes unitários para esta função:

$(cat src/utils/validator.ts)

Requisitos:
- Framework: Jest
- Cobrir: happy path, edge cases, error cases
- Mocking quando necessário
- Descrições claras em português"
\`\`\`

### Integration Tests

\`\`\`bash
# Testes de integração
claude "Crie testes de integração para este endpoint:

Endpoint: POST /api/users
Controller: $(cat src/controllers/userController.ts)
Service: $(cat src/services/userService.ts)

Testar:
- Criação com sucesso
- Validação de campos
- Conflito de email
- Erros de banco"
\`\`\`

### E2E Tests

\`\`\`bash
# Testes end-to-end com Playwright
claude "Gere testes E2E com Playwright para o fluxo de login:

Página: $(cat src/pages/Login.tsx)
Passos:
1. Navegar para /login
2. Preencher credenciais
3. Clicar em submit
4. Verificar redirecionamento para /dashboard"
\`\`\`

## Descoberta de Edge Cases

\`\`\`bash
# Claude encontra casos que você não pensou
claude "Analise esta função e liste TODOS os edge cases possíveis:

$(cat src/utils/dateParser.ts)

Considere:
- Inputs inválidos
- Limites (min/max)
- Formatos inesperados
- Timezone issues
- Null/undefined
- Tipos errados"
\`\`\`

## Test Patterns

### AAA Pattern (Arrange, Act, Assert)

\`\`\`typescript
describe('UserService', () => {
  it('should create user with valid data', async () => {
    // Arrange
    const userData = { name: 'João', email: 'joao@test.com' };

    // Act
    const user = await userService.create(userData);

    // Assert
    expect(user.id).toBeDefined();
    expect(user.name).toBe(userData.name);
  });
});
\`\`\`

### Given-When-Then (BDD)

\`\`\`typescript
describe('Cart', () => {
  describe('given an empty cart', () => {
    describe('when adding a product', () => {
      it('then cart should have 1 item', () => {
        // ...
      });
    });
  });
});
\`\`\`

## Coverage Strategy

| Tipo de código | Coverage alvo | Prioridade |
|----------------|---------------|------------|
| Business logic | 90%+ | Alta |
| Utilities | 80%+ | Alta |
| Controllers | 70%+ | Média |
| UI Components | 60%+ | Média |
| Config/Setup | 30%+ | Baixa |

## Automação de Testes

\`\`\`json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --reporters=default"
  }
}
\`\`\`

## Checklist de Qualidade de Testes

- [ ] Testes são independentes?
- [ ] Testes são determinísticos?
- [ ] Nomes descrevem o comportamento?
- [ ] Edge cases cobertos?
- [ ] Mocks são simples e focados?
- [ ] Coverage adequada para o tipo de código?

> **Regra:** Testes devem ser tão importantes quanto o código de produção!
`,
    {
      xp: 120,
      duration: 45,
      difficulty: 'advanced',
      tags: ['testing', 'jest', 'quality', 'automation'],
      isNew: true,
      quizzes: [
        {
          id: 'q-11-04-1',
          question: 'Na pirâmide de testes, qual tipo deve ter MAIS testes?',
          options: ['E2E', 'Integration', 'Unit', 'Manual'],
          correctIndex: 2,
          explanation: 'Unit tests formam a base da pirâmide - muitos, rápidos e baratos de manter.',
        },
        {
          id: 'q-11-04-2',
          question: 'O que significa AAA em testes?',
          options: ['Always Assert All', 'Arrange Act Assert', 'Assert After Action', 'All About Assertions'],
          correctIndex: 1,
          explanation: 'AAA = Arrange (preparar), Act (executar), Assert (verificar) - estrutura padrão de testes.',
        },
      ],
      challenges: [
        {
          id: 'ch-11-04-1',
          title: 'Test Suite Completa',
          description: 'Use Claude para gerar uma suite de testes completa para um módulo existente',
          context: 'general' as const,
          contextDescription: 'Escolha um módulo crítico do seu projeto',
          difficulty: 'advanced' as const,
          xpBonus: 70,
          hints: ['Inclua unit, integration e pelo menos um E2E', 'Busque 80%+ coverage'],
        },
      ],
    }
  ),

  // ==================== LESSON 11-05: Documentação Automatizada ====================
  createLesson('11', '11-05-documentation', '05. Documentação Automatizada',
    'Gere e mantenha documentação de alta qualidade sem esforço.',
    `# Documentação Automatizada com Claude

Documentação desatualizada é pior que nenhuma. Automatize para manter sempre atual.

## Tipos de Documentação

| Tipo | Audiência | Atualização |
|------|-----------|-------------|
| README | Novos devs | A cada release |
| API Docs | Consumidores | A cada mudança de API |
| Code Comments | Devs internos | Junto com código |
| Architecture | Tech leads | Mudanças estruturais |
| Changelog | Todos | Cada PR/release |

## Geração com Claude

### README Completo

\`\`\`bash
# Gerar README profissional
claude "Gere um README.md completo para este projeto:

package.json: $(cat package.json)
Estrutura: $(find src -type f -name '*.ts' | head -20)

Incluir seções:
- Badges (build, coverage, version)
- Descrição e features
- Quick start
- Instalação detalhada
- Uso/Exemplos
- API reference (principais exports)
- Contributing
- License"
\`\`\`

### API Documentation

\`\`\`bash
# Documentar API automaticamente
claude "Gere documentação OpenAPI/Swagger para:

$(cat src/routes/index.ts)

Para cada endpoint incluir:
- Descrição
- Parâmetros
- Request body (se houver)
- Responses possíveis
- Exemplos"
\`\`\`

### JSDoc/TSDoc

\`\`\`bash
# Adicionar documentação ao código
claude "Adicione JSDoc completo a estas funções:

$(cat src/utils/helpers.ts)

Incluir:
- @description
- @param com tipos e descrições
- @returns
- @throws
- @example"
\`\`\`

## Documentação como Código

### Markdown + Git

\`\`\`bash
# Estrutura de docs versionada
docs/
├── README.md           # Overview
├── getting-started.md  # Quick start
├── architecture/
│   ├── overview.md
│   └── decisions/      # ADRs
├── api/
│   └── reference.md
└── guides/
    ├── deployment.md
    └── contributing.md
\`\`\`

### Architecture Decision Records (ADR)

\`\`\`bash
claude "Crie um ADR para esta decisão:

Contexto: Precisamos de um sistema de filas
Opções consideradas: Redis, RabbitMQ, SQS
Decisão: Redis com BullMQ

Formato ADR padrão com:
- Status
- Context
- Decision
- Consequences"
\`\`\`

## Automação de Changelog

\`\`\`bash
# Gerar changelog de commits
claude "Gere um CHANGELOG.md a partir destes commits:

$(git log --oneline --since='2024-01-01')

Formato:
## [Version] - Date
### Added
### Changed
### Fixed
### Removed"
\`\`\`

## Diagramas com Mermaid

\`\`\`bash
claude "Crie um diagrama Mermaid para este fluxo:

$(cat src/services/orderService.ts)

Tipo: Sequence diagram
Mostrar: Interações entre User, API, OrderService, PaymentService, Database"
\`\`\`

Resultado:
\`\`\`mermaid
sequenceDiagram
    User->>API: POST /orders
    API->>OrderService: createOrder()
    OrderService->>PaymentService: processPayment()
    PaymentService-->>OrderService: paymentResult
    OrderService->>Database: save(order)
    Database-->>OrderService: savedOrder
    OrderService-->>API: order
    API-->>User: 201 Created
\`\`\`

## Checklist de Documentação

- [ ] README atualizado?
- [ ] Funções públicas documentadas?
- [ ] Exemplos de uso incluídos?
- [ ] Changelog mantido?
- [ ] Diagramas atualizados?
- [ ] Links funcionando?

> **Dica TOP 1%:** Configure um hook para verificar se a documentação foi atualizada junto com mudanças de código!
`,
    {
      xp: 100,
      duration: 35,
      difficulty: 'intermediate',
      tags: ['documentation', 'readme', 'automation', 'best-practices'],
      isNew: true,
      quizzes: [
        {
          id: 'q-11-05-1',
          question: 'O que é um ADR?',
          options: ['Automated Documentation Report', 'Architecture Decision Record', 'API Documentation Reference', 'Advanced Developer Resource'],
          correctIndex: 1,
          explanation: 'ADR = Architecture Decision Record - documenta decisões arquiteturais importantes e seu contexto.',
        },
      ],
      challenges: [
        {
          id: 'ch-11-05-1',
          title: 'Documentation Suite',
          description: 'Use Claude para gerar documentação completa para um projeto seu',
          context: 'general' as const,
          contextDescription: 'Escolha um projeto que precisa de melhor documentação',
          difficulty: 'intermediate' as const,
          xpBonus: 50,
          hints: ['README, API docs, pelo menos 1 ADR, e um diagrama Mermaid'],
        },
      ],
    }
  ),

  // ==================== LESSON 11-06: Challenge Workflow TOP 1% ====================
  createLesson('11', '11-06-workflow-challenge', '06. Challenge: Workflow TOP 1%',
    'Monte um workflow de desenvolvimento completo usando todas as best practices.',
    `# Challenge: Workflow de Desenvolvimento TOP 1%

Monte um workflow completo que incorpora todas as best practices aprendidas.

## Objetivo

Criar um sistema de desenvolvimento que garanta qualidade em todas as etapas.

## Requisitos

### 1. Prompting System (20 pontos)
- [ ] Biblioteca de 5+ prompts reutilizáveis
- [ ] Prompts categorizados (review, debug, test, doc)
- [ ] Templates com variáveis

### 2. Code Review Automation (20 pontos)
- [ ] Hook de pre-commit com review
- [ ] Checklist automático
- [ ] Template de feedback

### 3. Debug Toolkit (20 pontos)
- [ ] Scripts de análise de logs
- [ ] Template de bug report
- [ ] Integração com git bisect

### 4. Testing Pipeline (20 pontos)
- [ ] Gerador de testes com Claude
- [ ] Coverage mínima configurada
- [ ] Testes em CI/CD

### 5. Documentation System (20 pontos)
- [ ] README template
- [ ] JSDoc automático
- [ ] Changelog generator

## Template de Entrega

\`\`\`markdown
# Meu Workflow TOP 1%

## 1. Prompting System
\`\`\`
~/.claude/prompts/
├── review/
│   ├── quick-review.md
│   └── deep-review.md
├── debug/
│   └── bug-analysis.md
├── test/
│   └── generate-tests.md
└── docs/
    └── readme-generator.md
\`\`\`

## 2. Code Review
[Configuração de hooks e templates]

## 3. Debug Toolkit
[Scripts e templates]

## 4. Testing Pipeline
[Configuração de CI/CD e geração]

## 5. Documentation
[Templates e automação]

## Demonstração
[GIF ou vídeo do workflow em ação]
\`\`\`

## Critérios de Avaliação

| Critério | Pontos | Descrição |
|----------|--------|-----------|
| Completude | 40 | Todos os 5 componentes implementados |
| Integração | 20 | Componentes funcionam juntos |
| Automação | 20 | Mínima intervenção manual |
| Documentação | 10 | Bem documentado |
| Inovação | 10 | Soluções criativas |

## Dicas

1. **Comece simples** - Um componente de cada vez
2. **Itere** - Melhore cada parte gradualmente
3. **Automatize** - Se faz mais de 2x, automatize
4. **Documente** - Seu "eu futuro" agradecerá
5. **Compartilhe** - Workflows são melhores em equipe

## Recursos

- Prompt patterns: Lição 11-01
- Code review: Lição 11-02
- Debugging: Lição 11-03
- Testing: Lição 11-04
- Documentation: Lição 11-05

> **Meta:** Ao final, você deve ter um workflow que pode ser replicado em qualquer projeto!
`,
    {
      xp: 200,
      duration: 90,
      difficulty: 'expert',
      tags: ['challenge', 'workflow', 'automation', 'best-practices'],
      isNew: true,
      challenges: [
        {
          id: 'ch-11-06-1',
          title: 'Workflow Completo',
          description: 'Implemente o workflow TOP 1% com todos os 5 componentes',
          context: 'general' as const,
          contextDescription: 'Aplique ao projeto mais importante do seu portfólio',
          difficulty: 'expert' as const,
          xpBonus: 100,
          hints: ['Use o template fornecido', 'Documente cada decisão'],
        },
      ],
    }
  ),
];

const module12Lessons: Lesson[] = [
  // ==================== LESSON 12-01: Projeto API REST ====================
  createLesson('12', '12-01-project-api-rest', '01. Projeto: API REST Completa',
    'Construa uma API REST do zero usando Claude Code.',
    `# Projeto Prático: API REST Completa

Construa uma API REST production-ready do zero usando Claude Code como seu pair programmer.

## Objetivo do Projeto

Criar uma API de gerenciamento de tarefas com:
- CRUD completo
- Autenticação JWT
- Validação de dados
- Documentação Swagger
- Testes automatizados

## Stack Tecnológica

| Componente | Tecnologia |
|------------|------------|
| Runtime | Node.js 20+ |
| Framework | Express ou Fastify |
| Linguagem | TypeScript |
| Banco | PostgreSQL |
| ORM | Prisma |
| Auth | JWT |
| Docs | Swagger/OpenAPI |
| Testes | Jest + Supertest |

## Fase 1: Setup do Projeto (30 min)

\`\`\`bash
# Criar projeto com Claude
claude "Crie a estrutura inicial para uma API REST:

Stack: Node.js + TypeScript + Express + Prisma + PostgreSQL

Estrutura:
src/
├── controllers/
├── services/
├── repositories/
├── middleware/
├── routes/
├── utils/
├── types/
└── app.ts

Incluir:
- tsconfig.json configurado
- package.json com scripts
- .env.example
- docker-compose.yml para PostgreSQL"
\`\`\`

## Fase 2: Modelo de Dados (20 min)

\`\`\`bash
claude "Crie o schema Prisma para um sistema de tarefas:

Entidades:
- User (id, email, password, name, createdAt)
- Task (id, title, description, status, priority, dueDate, userId)
- Tag (id, name, color)
- TaskTag (taskId, tagId) - many-to-many

Incluir:
- Enums para status e priority
- Índices necessários
- Relações corretas"
\`\`\`

## Fase 3: Autenticação (40 min)

\`\`\`bash
claude "Implemente autenticação JWT:

Endpoints:
- POST /auth/register - criar usuário
- POST /auth/login - obter token
- POST /auth/refresh - renovar token
- GET /auth/me - dados do usuário logado

Requisitos:
- Hash de senha com bcrypt
- JWT com expiração
- Refresh token
- Middleware de autenticação
- Tipos TypeScript completos"
\`\`\`

## Fase 4: CRUD de Tarefas (45 min)

\`\`\`bash
claude "Implemente CRUD completo de tarefas:

Endpoints:
- GET /tasks - listar (com filtros e paginação)
- GET /tasks/:id - detalhe
- POST /tasks - criar
- PUT /tasks/:id - atualizar
- DELETE /tasks/:id - remover
- PATCH /tasks/:id/status - mudar status

Requisitos:
- Validação com Zod
- Paginação
- Filtros por status, priority, tag
- Ordenação
- Soft delete opcional"
\`\`\`

## Fase 5: Documentação (20 min)

\`\`\`bash
claude "Adicione documentação Swagger:

- Descrição de todos endpoints
- Schemas de request/response
- Exemplos
- Autenticação Bearer
- Tags organizadas

Usar: swagger-jsdoc + swagger-ui-express"
\`\`\`

## Fase 6: Testes (30 min)

\`\`\`bash
claude "Crie testes para a API:

Unit tests:
- Services de autenticação
- Validadores

Integration tests:
- Endpoints de auth
- CRUD de tasks
- Filtros e paginação

Requisitos:
- Jest + Supertest
- Banco de teste separado
- Fixtures/factories
- Coverage > 80%"
\`\`\`

## Checklist de Entrega

- [ ] API rodando localmente
- [ ] Todos endpoints funcionando
- [ ] Swagger acessível em /docs
- [ ] Testes passando
- [ ] README com instruções
- [ ] Docker compose funcionando

## Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| Funcionalidade | 40 |
| Qualidade do código | 20 |
| Documentação | 15 |
| Testes | 15 |
| Docker setup | 10 |

> **Dica:** Use Claude para cada fase. Peça explicações quando não entender algo!
`,
    {
      xp: 250,
      duration: 180,
      difficulty: 'advanced',
      tags: ['projeto', 'api', 'rest', 'typescript', 'hands-on'],
      isNew: true,
      challenges: [
        {
          id: 'ch-12-01-1',
          title: 'API para Costa Law',
          description: 'Adapte a API para gerenciamento de processos jurídicos',
          context: 'costa_law',
          contextDescription: 'Sistema de gestão de processos e prazos',
          difficulty: 'expert',
          xpBonus: 150,
          hints: ['Inclua campos: número do processo, vara, comarca, prazos'],
        },
      ],
    }
  ),

  // ==================== LESSON 12-02: Projeto CLI Tool ====================
  createLesson('12', '12-02-project-cli', '02. Projeto: CLI Tool Automatizado',
    'Crie uma ferramenta de linha de comando profissional.',
    `# Projeto: CLI Tool Automatizado

Desenvolva uma CLI profissional que automatiza tarefas do seu workflow.

## Objetivo

Criar uma CLI para automação de desenvolvimento com:
- Geração de código (scaffolding)
- Execução de tarefas comuns
- Configuração interativa
- Output formatado e colorido

## Stack

| Componente | Tecnologia |
|------------|------------|
| Framework | Commander.js ou Yargs |
| Prompts | Inquirer.js |
| Output | Chalk + Ora |
| Linguagem | TypeScript |
| Build | tsup |

## Funcionalidades da CLI

### 1. Scaffold de Componentes

\`\`\`bash
mycli generate component Button
# Gera: Button.tsx, Button.test.tsx, Button.stories.tsx
\`\`\`

### 2. Setup de Projeto

\`\`\`bash
mycli init
# Configura: ESLint, Prettier, Husky, etc.
\`\`\`

### 3. Automações

\`\`\`bash
mycli db:migrate    # Roda migrations
mycli test:watch    # Testes em watch mode
mycli deploy:staging # Deploy para staging
\`\`\`

## Implementação com Claude

### Setup Inicial

\`\`\`bash
claude "Crie a estrutura de uma CLI com:

Nome: devtool
Stack: TypeScript + Commander.js + Inquirer

Estrutura:
src/
├── commands/
│   ├── generate.ts
│   ├── init.ts
│   └── deploy.ts
├── templates/
│   └── component/
├── utils/
│   ├── logger.ts
│   └── file.ts
└── index.ts

Incluir:
- package.json com bin configurado
- tsconfig para CLI
- Build com tsup"
\`\`\`

### Comando Generate

\`\`\`bash
claude "Implemente o comando generate:

\`\`\`bash
devtool generate <type> <name> [options]
\`\`\`

Types: component, hook, service, test
Options: --typescript, --with-test, --with-story

Features:
- Templates com variáveis
- Detecção automática de pasta
- Confirmação antes de sobrescrever
- Output colorido com sucesso/erro"
\`\`\`

### Comando Init

\`\`\`bash
claude "Implemente o comando init interativo:

Perguntas:
1. Nome do projeto
2. Framework (React, Vue, Node)
3. TypeScript? (Y/n)
4. Configurar ESLint? (Y/n)
5. Configurar Prettier? (Y/n)
6. Configurar Husky? (Y/n)

Ações:
- Criar arquivos de config
- Adicionar scripts ao package.json
- Instalar dependências
- Mostrar progresso com spinner"
\`\`\`

## Testes da CLI

\`\`\`bash
claude "Crie testes para a CLI:

- Testar parsing de argumentos
- Testar geração de arquivos
- Testar output
- Mock de filesystem

Framework: Jest + mock-fs"
\`\`\`

## Publicação no npm

\`\`\`bash
# Build
npm run build

# Test localmente
npm link
devtool --help

# Publicar
npm publish
\`\`\`

## Checklist

- [ ] CLI instalável globalmente
- [ ] Help text para todos comandos
- [ ] Tratamento de erros gracioso
- [ ] Output colorido e formatado
- [ ] Testes cobrindo comandos principais
- [ ] README com exemplos de uso

> **Bônus:** Adicione auto-update e telemetria anônima!
`,
    {
      xp: 220,
      duration: 150,
      difficulty: 'advanced',
      tags: ['projeto', 'cli', 'automacao', 'typescript'],
      isNew: true,
      challenges: [
        {
          id: 'ch-12-02-1',
          title: 'CLI para seu Workflow',
          description: 'Adapte a CLI para automatizar tarefas específicas do seu dia-a-dia',
          context: 'personal' as const,
          contextDescription: 'Personalize para seu workflow único',
          difficulty: 'advanced' as const,
          xpBonus: 100,
          hints: ['Identifique 3 tarefas repetitivas que você faz toda semana'],
        },
      ],
    }
  ),

  // ==================== LESSON 12-03: Projeto Refatoração ====================
  createLesson('12', '12-03-project-refactoring', '03. Projeto: Refatoração de Legacy Code',
    'Modernize código legado com assistência de IA.',
    `# Projeto: Refatoração de Legacy Code

Transforme código legado em código moderno, limpo e testável.

## O Desafio

Você recebeu um projeto legado com:
- JavaScript ES5 sem tipos
- Callbacks aninhados (callback hell)
- Funções monolíticas de 500+ linhas
- Sem testes
- Documentação desatualizada

Sua missão: modernizá-lo com Claude.

## Estratégia de Refatoração

\`\`\`
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│   Analyze     │────▶│   Plan        │────▶│   Execute     │
│   (Understand)│     │   (Strategy)  │     │   (Iterate)   │
└───────────────┘     └───────────────┘     └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
   Map codebase         Define phases         Test after
   Identify risks       Set priorities        each change
   Find patterns        Create tasks          Document
\`\`\`

## Fase 1: Análise (1-2h)

\`\`\`bash
claude "Analise este código legado e crie um relatório:

$(cat src/legacy/userManager.js)

Identificar:
1. Code smells presentes
2. Complexidade ciclomática
3. Acoplamento entre módulos
4. Pontos de risco
5. Prioridades de refatoração
6. Estimativa de esforço"
\`\`\`

## Fase 2: Adicionar Testes (2-3h)

\`\`\`bash
# ANTES de refatorar, adicione testes que capturam comportamento atual
claude "Crie testes de caracterização para este código:

$(cat src/legacy/userManager.js)

Objetivo: Capturar o comportamento ATUAL (mesmo com bugs)
Isso garante que a refatoração não quebra nada.

Framework: Jest
Abordagem: Black-box testing"
\`\`\`

## Fase 3: Conversão para TypeScript (1-2h)

\`\`\`bash
claude "Converta este JavaScript para TypeScript:

$(cat src/legacy/userManager.js)

Requisitos:
- Inferir tipos automaticamente
- Criar interfaces para objetos
- Manter compatibilidade
- Adicionar strict mode
- Marcar any's para revisão futura"
\`\`\`

## Fase 4: Eliminar Callback Hell (1h)

\`\`\`bash
claude "Converta callbacks para async/await:

$(cat src/legacy/dataFetcher.js)

Antes:
function getData(id, callback) {
  fetchUser(id, (err, user) => {
    if (err) callback(err);
    fetchOrders(user.id, (err, orders) => {
      callback(null, { user, orders });
    });
  });
}

Depois:
async function getData(id) {
  const user = await fetchUser(id);
  const orders = await fetchOrders(user.id);
  return { user, orders };
}"
\`\`\`

## Fase 5: Quebrar Funções Monolíticas (2h)

\`\`\`bash
claude "Refatore esta função de 500 linhas:

$(cat src/legacy/processOrder.js)

Aplicar:
- Single Responsibility Principle
- Extract Method
- Funções de no máximo 20 linhas
- Nomes descritivos
- Separar: validação, processamento, persistência"
\`\`\`

## Fase 6: Aplicar Padrões Modernos (1-2h)

\`\`\`bash
claude "Aplique padrões modernos a este módulo:

$(cat src/legacy/emailService.js)

Considerar:
- Dependency Injection
- Repository Pattern
- Factory Pattern
- Error handling centralizado
- Configuração via environment"
\`\`\`

## Métricas de Sucesso

| Antes | Depois | Melhoria |
|-------|--------|----------|
| 0 tipos | 100% tipado | ✅ |
| 0 testes | 80%+ coverage | ✅ |
| Callbacks | async/await | ✅ |
| Funções 500 LOC | < 20 LOC | ✅ |
| Docs desatualizadas | JSDoc completo | ✅ |

## Checklist

- [ ] Testes de caracterização escritos
- [ ] Código convertido para TypeScript
- [ ] Callbacks eliminados
- [ ] Funções pequenas e focadas
- [ ] Padrões modernos aplicados
- [ ] Documentação atualizada
- [ ] Todos testes passando

> **Regra de ouro:** Nunca refatore sem testes. Se não tem testes, adicione primeiro!
`,
    {
      xp: 230,
      duration: 180,
      difficulty: 'expert',
      tags: ['projeto', 'refatoracao', 'legacy', 'typescript'],
      isNew: true,
      challenges: [
        {
          id: 'ch-12-03-1',
          title: 'Refatore seu Legado',
          description: 'Aplique as técnicas em um código legado real do seu trabalho',
          context: 'general' as const,
          contextDescription: 'Use um projeto legado que você precisa manter',
          difficulty: 'expert' as const,
          xpBonus: 120,
          hints: ['Comece pequeno - escolha um módulo isolado', 'Adicione testes ANTES de mudar'],
        },
      ],
    }
  ),

  // ==================== LESSON 12-04: Projeto Documentação ====================
  createLesson('12', '12-04-project-documentation', '04. Projeto: Sistema de Documentação',
    'Crie um sistema de documentação automatizado e sempre atualizado.',
    `# Projeto: Sistema de Documentação Automatizado

Construa um sistema que mantém documentação sempre sincronizada com o código.

## Objetivo

Criar um sistema que:
- Gera documentação do código automaticamente
- Detecta quando docs estão desatualizadas
- Publica em site estático
- Integra com CI/CD

## Arquitetura

\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Source    │────▶│  Generator  │────▶│    Site     │
│   Code      │     │  (Claude)   │     │   (Docs)    │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │                   │
       │            ┌──────┴──────┐           │
       │            │             │           │
       ▼            ▼             ▼           ▼
   JSDoc        TypeDoc       Mermaid    Docusaurus
\`\`\`

## Componentes

### 1. Extrator de Documentação

\`\`\`bash
claude "Crie um script que extrai documentação do código:

Input: Pasta src/
Output: docs/api/

Funcionalidades:
- Parse de JSDoc/TSDoc
- Extração de tipos TypeScript
- Exemplos de uso dos testes
- Links entre módulos relacionados"
\`\`\`

### 2. Gerador de Diagramas

\`\`\`bash
claude "Crie um gerador de diagramas Mermaid:

Analisar código e gerar:
- Diagrama de classes
- Diagrama de sequência para flows principais
- Diagrama de arquitetura
- ERD do banco de dados

Output: docs/diagrams/"
\`\`\`

### 3. Verificador de Freshness

\`\`\`bash
claude "Crie um verificador de documentação:

Detectar:
- Funções sem JSDoc
- Docs desatualizadas (diff code vs docs)
- Links quebrados
- Exemplos que não compilam

Output: relatório de problemas
Integrar: pre-commit hook"
\`\`\`

### 4. Site com Docusaurus

\`\`\`bash
claude "Configure Docusaurus para a documentação:

Estrutura:
docs/
├── intro.md
├── getting-started/
├── api/
├── guides/
└── diagrams/

Features:
- Versioning
- Search
- Dark mode
- Algolia integration
- Deploy automático"
\`\`\`

## Pipeline CI/CD

\`\`\`yaml
# .github/workflows/docs.yml
name: Documentation

on:
  push:
    branches: [main]
    paths:
      - 'src/**'
      - 'docs/**'

jobs:
  build-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Generate API docs
        run: npm run docs:generate

      - name: Check freshness
        run: npm run docs:check

      - name: Build site
        run: npm run docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/build
\`\`\`

## Automação com Claude

\`\`\`bash
# Hook pre-commit que documenta automaticamente
claude "Para cada arquivo modificado, atualize a documentação:

Arquivo: $(git diff --name-only HEAD~1)

Ações:
1. Atualizar JSDoc se função mudou
2. Atualizar README se export mudou
3. Regenerar diagrama se estrutura mudou
4. Avisar se breaking change"
\`\`\`

## Checklist

- [ ] Extrator funcionando
- [ ] Diagramas gerando corretamente
- [ ] Site Docusaurus configurado
- [ ] CI/CD publicando automaticamente
- [ ] Pre-commit hook ativo
- [ ] Search funcionando
- [ ] Versioning configurado

> **Meta:** Documentação que se atualiza sozinha = desenvolvedores felizes!
`,
    {
      xp: 200,
      duration: 150,
      difficulty: 'advanced',
      tags: ['projeto', 'documentacao', 'automacao', 'docusaurus'],
      isNew: true,
      challenges: [
        {
          id: 'ch-12-04-1',
          title: 'Docs para seu Projeto',
          description: 'Implemente o sistema de documentação em um projeto real',
          context: 'general' as const,
          contextDescription: 'Escolha um projeto open source ou do trabalho',
          difficulty: 'advanced' as const,
          xpBonus: 100,
          hints: ['Comece com o extrator, depois adicione o site'],
        },
      ],
    }
  ),

  // ==================== LESSON 12-05: Projeto CI/CD ====================
  createLesson('12', '12-05-project-cicd', '05. Projeto: Pipeline CI/CD Completo',
    'Configure um pipeline de CI/CD enterprise-grade.',
    `# Projeto: Pipeline CI/CD Enterprise-Grade

Configure um pipeline completo de integração e deploy contínuo.

## Objetivo

Criar um pipeline que:
- Testa automaticamente a cada push
- Faz análise de código (lint, types, security)
- Gera preview deploys para PRs
- Deploy automático para staging/production
- Notifica equipe de status

## Arquitetura do Pipeline

\`\`\`
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Commit  │───▶│  Test    │───▶│  Build   │───▶│  Deploy  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
                     │               │               │
              ┌──────┴──────┐       │         ┌─────┴─────┐
              │             │       │         │           │
           Lint          Types   Docker   Staging    Prod
           Tests         Security          (auto)    (manual)
           Coverage
\`\`\`

## Jobs do Pipeline

### 1. Quality Gate

\`\`\`bash
claude "Crie o job de quality gate:

Checks:
- ESLint sem erros
- TypeScript sem erros
- Prettier formatado
- Testes passando
- Coverage > 80%

Se falhar: bloquear merge"
\`\`\`

### 2. Security Scan

\`\`\`bash
claude "Configure security scanning:

Tools:
- npm audit (dependências)
- CodeQL (código)
- Trivy (containers)
- SAST scan

Output: relatório de vulnerabilidades
Ação: falhar se crítico, warning se médio"
\`\`\`

### 3. Build e Artifact

\`\`\`bash
claude "Configure build com artifacts:

Steps:
1. Install dependencies
2. Run build
3. Create Docker image
4. Push to registry
5. Save artifact for deploy

Cache:
- node_modules (hash de package-lock)
- Docker layers"
\`\`\`

### 4. Preview Deploy

\`\`\`bash
claude "Configure preview deploys para PRs:

Trigger: PR aberta/atualizada
Ação:
- Deploy em URL única (pr-123.preview.app)
- Comentar URL na PR
- Rodar smoke tests
- Cleanup após merge"
\`\`\`

### 5. Production Deploy

\`\`\`bash
claude "Configure deploy para produção:

Trigger: merge para main
Strategy: Blue-Green deployment

Steps:
1. Deploy para blue (novo)
2. Run health checks
3. Run smoke tests
4. Switch traffic (blue -> green)
5. Keep green como rollback
6. Notify equipe"
\`\`\`

## Workflow Completo

\`\`\`yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run test -- --coverage
      - uses: codecov/codecov-action@v3

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm audit --audit-level=high
      - uses: github/codeql-action/analyze@v2

  build:
    needs: [quality, security]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: myapp:\${{ github.sha }}

  deploy-preview:
    if: github.event_name == 'pull_request'
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to preview
        run: # deploy logic
      - name: Comment PR
        uses: actions/github-script@v6

  deploy-staging:
    if: github.ref == 'refs/heads/develop'
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to staging
        run: # deploy logic

  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: build
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to production
        run: # deploy logic
\`\`\`

## Monitoramento

- **Slack notifications:** status de builds
- **Datadog/New Relic:** performance do pipeline
- **GitHub Status checks:** PR requirements

## Checklist

- [ ] Quality gate configurado
- [ ] Security scan ativo
- [ ] Preview deploys funcionando
- [ ] Deploy automático staging
- [ ] Deploy manual/aprovado prod
- [ ] Notifications configuradas
- [ ] Rollback testado

> **Dica:** Pipeline lento = developers frustrados. Otimize para < 10min!
`,
    {
      xp: 240,
      duration: 180,
      difficulty: 'expert',
      tags: ['projeto', 'cicd', 'devops', 'github-actions'],
      isNew: true,
      challenges: [
        {
          id: 'ch-12-05-1',
          title: 'Pipeline para seu Projeto',
          description: 'Implemente o pipeline CI/CD em um projeto real',
          context: 'general' as const,
          contextDescription: 'Use um projeto que precisa de automação de deploy',
          difficulty: 'expert' as const,
          xpBonus: 130,
          hints: ['Comece com quality gate, depois adicione deploys'],
        },
      ],
    }
  ),

  // ==================== LESSON 12-06: Capstone Project ====================
  createLesson('12', '12-06-capstone', '06. Capstone: Projeto Enterprise',
    'Projeto final integrando todas as habilidades do curso.',
    `# Capstone: Projeto Enterprise

Projeto final que integra TODAS as habilidades aprendidas no curso.

## O Desafio

Construir um sistema completo de ponta a ponta usando Claude Code como seu co-piloto.

## Opções de Projeto

### Opção A: SaaS Dashboard

Sistema de analytics com:
- Backend API (REST ou GraphQL)
- Frontend React
- Autenticação multi-tenant
- Dashboard com gráficos
- Exportação de relatórios

### Opção B: Plataforma de Automação

Sistema de workflows com:
- Builder visual de workflows
- Executor de tarefas
- Integração com APIs externas
- Scheduling
- Logs e monitoramento

### Opção C: Sistema de Gestão (sua escolha)

Escolha um domínio relevante para você:
- Gestão jurídica (Costa Law)
- E-commerce
- CRM
- Project management
- Outro (aprove com mentor)

## Requisitos Obrigatórios

### Arquitetura
- [ ] Documentação de arquitetura (ADRs)
- [ ] Diagramas (C4 model ou similar)
- [ ] Setup com Docker Compose

### Backend
- [ ] API tipada (TypeScript)
- [ ] Autenticação/autorização
- [ ] Validação de dados
- [ ] Error handling centralizado
- [ ] Logging estruturado

### Frontend
- [ ] React + TypeScript
- [ ] State management
- [ ] Responsive design
- [ ] Acessibilidade básica
- [ ] Loading/error states

### Qualidade
- [ ] Testes (unit + integration)
- [ ] Coverage > 70%
- [ ] Linting configurado
- [ ] CI/CD pipeline

### Documentação
- [ ] README completo
- [ ] API documentation
- [ ] Setup guide
- [ ] Deployment guide

## Timeline Sugerida

| Semana | Foco | Entrega |
|--------|------|---------|
| 1 | Planejamento | PRD + Arquitetura |
| 2 | Backend | API + Auth + Tests |
| 3 | Frontend | UI + Integração |
| 4 | Polish | CI/CD + Docs + Deploy |

## Usando Claude Code

\`\`\`bash
# Semana 1: Planejamento
claude "Ajude a criar um PRD para [seu projeto]:
- Problema a resolver
- Personas
- User stories
- MVP features
- Arquitetura inicial"

# Semana 2: Backend
claude "Implemente [feature] com:
- Endpoint REST
- Validação
- Testes
- Documentação"

# Semana 3: Frontend
claude "Crie o componente [X] com:
- Props tipadas
- Estados (loading, error, success)
- Testes
- Storybook story"

# Semana 4: Polish
claude "Revise o projeto completo:
- Code review geral
- Otimizações
- Documentação final
- Checklist de deploy"
\`\`\`

## Critérios de Avaliação

| Critério | Pontos | Descrição |
|----------|--------|-----------|
| Funcionalidade | 30 | Features funcionando |
| Qualidade de código | 20 | Clean code, patterns |
| Testes | 15 | Coverage, qualidade |
| Documentação | 15 | Completa, clara |
| DevOps | 10 | CI/CD, deploy |
| Uso de Claude | 10 | Eficiência, prompts |

## Entrega

1. **Repositório GitHub**
   - Código completo
   - README detalhado
   - CI/CD configurado

2. **Demo**
   - Vídeo de 5min mostrando o projeto
   - Deploy funcionando (Vercel, Railway, etc.)

3. **Retrospectiva**
   - O que aprendeu
   - Desafios enfrentados
   - Como Claude ajudou

## Certificação

Ao completar o Capstone com nota >= 70%:

\`\`\`
┌────────────────────────────────────────────┐
│                                            │
│     CLAUDE CODE MASTER                     │
│     CERTIFICATION                          │
│                                            │
│     [Seu Nome]                             │
│     completou com sucesso o curso          │
│     Claude Code TOP 1%                     │
│                                            │
│     Data: ___________                      │
│                                            │
└────────────────────────────────────────────┘
\`\`\`

> **Você chegou até aqui!** Parabéns por completar a jornada. Agora você faz parte do TOP 1% de desenvolvedores que dominam Claude Code!
`,
    {
      xp: 500,
      duration: 480,
      difficulty: 'expert',
      tags: ['capstone', 'projeto-final', 'enterprise', 'fullstack'],
      isNew: true,
      challenges: [
        {
          id: 'ch-12-06-1',
          title: 'Capstone Completo',
          description: 'Complete o projeto Capstone seguindo todos os requisitos',
          context: 'general' as const,
          contextDescription: 'Projeto que demonstra domínio completo do Claude Code',
          difficulty: 'expert' as const,
          xpBonus: 300,
          hints: ['Planeje bem antes de codar', 'Use Claude em TODAS as etapas'],
        },
      ],
    }
  ),
];

// ============================================================================
// ASSEMBLE ALL MODULES
// ============================================================================

export const courseModules: Module[] = [
  {
    id: '00',
    courseId: 'claude-code',
    number: 0,
    title: '00. Mindset TOP 1%',
    slug: 'mindset',
    description: 'A mentalidade que separa os desenvolvedores de elite - princípios AI-First fundamentais',
    icon: 'Brain',
    color: 'gold',
    lessons: module00Lessons,
    totalXp: module00Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 1.5,
    prerequisites: [],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
    isNew: true,
  },
  {
    id: '01',
    courseId: 'claude-code',
    number: 1,
    title: '01. Fundamentos',
    slug: 'fundamentos',
    description: 'Instalação, primeiros passos e conceitos essenciais do Claude Code',
    icon: 'Rocket',
    color: 'blue',
    lessons: module01Lessons,
    totalXp: module01Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 2,
    prerequisites: ['00'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '02',
    courseId: 'claude-code',
    number: 2,
    title: '02. Comandos CLI',
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
    courseId: 'claude-code',
    number: 3,
    title: '03. Context Engineering',
    slug: 'context-engineering',
    description: 'Domine a arte de fornecer contexto perfeito para IA - a habilidade #1 dos TOP 1%',
    icon: 'Brain',
    color: 'purple',
    isNew: true,
    lessons: module03Lessons,
    totalXp: module03Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 2,
    prerequisites: ['01'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '04',
    courseId: 'claude-code',
    number: 4,
    title: '04. Skills',
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
    courseId: 'claude-code',
    number: 5,
    title: '05. MCP',
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
    courseId: 'claude-code',
    number: 6,
    title: '06. Hooks',
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
    courseId: 'claude-code',
    number: 7,
    title: '07. Enterprise',
    slug: 'enterprise',
    description: 'Subagents, orquestração e estratégias multi-modelo',
    icon: 'Building2',
    color: 'pink',
    lessons: module07Lessons,
    totalXp: module07Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 5,
    prerequisites: ['04', '05'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
    isNew: true,
  },
  {
    id: '08',
    courseId: 'claude-code',
    number: 8,
    title: '08. Plugins',
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
    courseId: 'claude-code',
    number: 9,
    title: '09. Integrações IDE',
    slug: 'integracoes-ide',
    description: 'VS Code, JetBrains, Vim, Warp e Terminal Workflows',
    icon: 'Code',
    color: 'teal',
    lessons: module09Lessons,
    totalXp: module09Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 5,
    prerequisites: ['02'],
    isNew: true,
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '10',
    courseId: 'claude-code',
    number: 10,
    title: '10. Técnicas Avançadas',
    slug: 'tecnicas-avancadas',
    description: 'Plan Mode, Multi-File Editing, Extended Thinking e Arquitetura de Projetos',
    icon: 'Sparkles',
    color: 'violet',
    isNew: true,
    lessons: module10Lessons,
    totalXp: module10Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 3,
    prerequisites: ['03', '05'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '11',
    courseId: 'claude-code',
    number: 11,
    title: '11. Best Practices',
    slug: 'best-practices',
    description: 'Padrões TOP 1% e workflows de produção',
    icon: 'Award',
    color: 'amber',
    isNew: true,
    lessons: module11Lessons,
    totalXp: module11Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 6,
    prerequisites: ['10'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
  {
    id: '12',
    courseId: 'claude-code',
    number: 12,
    title: '12. Projetos Práticos',
    slug: 'projetos-praticos',
    description: 'Projetos hands-on do mundo real',
    icon: 'Hammer',
    color: 'red',
    isNew: true,
    lessons: module12Lessons,
    totalXp: module12Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 20,
    prerequisites: ['11'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
];

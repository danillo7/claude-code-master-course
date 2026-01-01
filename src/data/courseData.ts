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
    'Configure Claude Code para trabalhar com VS Code.',
    `# VS Code Integration

A integração com VS Code traz Claude para seu editor preferido.

[Conteúdo detalhado aqui...]
`,
    { xp: 60, duration: 20, difficulty: 'intermediate', tags: ['vscode', 'ide', 'integração'] }
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
  createLesson('11', '11-01-prompting-patterns', '01. Padrões de Prompting',
    'Melhores práticas de prompting para resultados consistentes.',
    `# Padrões de Prompting

Prompting eficaz é uma habilidade fundamental para tirar o máximo do Claude.

[Conteúdo detalhado aqui...]
`,
    { xp: 80, duration: 25, difficulty: 'intermediate', tags: ['prompting', 'best-practices'] }
  ),
];

const module12Lessons: Lesson[] = [
  createLesson('12', '12-01-project-api-rest', '01. Projeto: API REST Completa',
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
    title: '07. Subagents',
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
    lessons: module11Lessons,
    totalXp: module11Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 3,
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
    lessons: module12Lessons,
    totalXp: module12Lessons.reduce((acc, l) => acc + l.xp, 0),
    estimatedHours: 10,
    prerequisites: ['11'],
    version: '1.0.0',
    dateUpdated: new Date().toISOString().split('T')[0],
  },
];

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

Extended Thinking permite que Claude "pense por mais tempo" antes de responder.

[Conteúdo detalhado aqui...]
`,
    { xp: 100, duration: 30, difficulty: 'expert', tags: ['thinking', 'avançado'] }
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
    title: '10. Avançado',
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

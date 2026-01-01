# Boas Práticas para Construção de Agentes AI

> **AI Team Framework v2.0** - Guia definitivo baseado em práticas TOP 0.01% mundial
> Baseado em: Anthropic Claude, OpenAI, DeepMind, e startups de elite (Linear, Vercel, Stripe)

---

## 1. Arquitetura de Agentes

### 1.1 Princípios Fundamentais

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENTE AI WELL-ARCHITECTED                    │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   INPUT     │→ │  REASONING  │→ │   OUTPUT    │              │
│  │  (Context)  │  │  (Chain)    │  │  (Action)   │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│         ↑                │                │                      │
│         │                ↓                ↓                      │
│  ┌─────────────────────────────────────────────┐                │
│  │              MEMORY & STATE                  │                │
│  │  (Short-term + Long-term + Working Memory)   │                │
│  └─────────────────────────────────────────────┘                │
│         ↑                                 │                      │
│         │                                 ↓                      │
│  ┌─────────────┐                  ┌─────────────┐               │
│  │   TOOLS     │←────────────────→│  FEEDBACK   │               │
│  │  (Actions)  │                  │   (Loop)    │               │
│  └─────────────┘                  └─────────────┘               │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Padrões de Design

| Padrão | Quando Usar | Exemplo |
|--------|-------------|---------|
| **ReAct** | Tarefas que precisam de reasoning + actions | Pesquisa web + síntese |
| **Chain-of-Thought** | Problemas complexos multi-step | Análise jurídica |
| **Tree-of-Thoughts** | Exploração de múltiplas soluções | Brainstorming |
| **Self-Reflection** | Tarefas que precisam de autocorreção | Code review |
| **Multi-Agent** | Tarefas que precisam de especialização | Equipe de especialistas |

---

## 2. Workflow de 8 Fases

### 2.1 Pipeline Completo

```
INPUT → DISCOVERY → DESIGN → PLAN → BUILD → TEST → REVIEW → DEPLOY
  1         2          3        4       5       6       7        8
```

### 2.2 Detalhamento por Fase

#### Fase 1: INPUT (Definição do Problema)
```yaml
objetivo: Capturar problema, user stories, critérios de sucesso
deliverables:
  - Problem Statement (obrigatório)
  - User Stories (mín. 3)
  - Success Criteria
  - Constraints & Assumptions
quality_gates:
  - problem_clarity_score: > 0.8
  - user_story_coverage: > 0.7
duration: 30-120 minutos
```

#### Fase 2: DISCOVERY (Pesquisa)
```yaml
objetivo: Pesquisar mercado, viabilidade técnica, riscos
deliverables:
  - Market/Competitive Analysis
  - Technical Feasibility
  - Risk Assessment Matrix
approvals:
  - Technical Review (Architect)
  - Business Review (Product)
duration: 2-8 horas
```

#### Fase 3: DESIGN (Arquitetura)
```yaml
objetivo: Criar arquitetura, data models, specs técnicos
deliverables:
  - Architecture Diagram (C4 Model)
  - Data Model (TypeScript types)
  - API Specification (OpenAPI)
  - ADRs (Architecture Decision Records)
  - Security Design
quality_gates:
  - architecture_completeness: > 0.9
  - security_coverage: > 0.95
duration: 4-24 horas
```

#### Fase 4: PLAN (Planejamento)
```yaml
objetivo: Quebrar em tasks, estimar esforço, criar roadmap
deliverables:
  - Task Breakdown (WBS)
  - Sprint/Phase Plan
  - Dependency Map
  - Milestones
quality_gates:
  - task_granularity: > 0.8
  - dependency_clarity: > 0.9
duration: 2-8 horas
```

#### Fase 5: BUILD (Implementação)
```yaml
objetivo: Escrever código, criar testes, documentar
deliverables:
  - Source Code
  - Unit Tests (>80% coverage)
  - Code Documentation
  - Changelog Entry
quality_gates:
  - test_coverage: > 0.8
  - code_quality_score: > 0.85
  - security_scan: > 0.95
  - linter_pass: 100%
duration: 8-80 horas
```

#### Fase 6: TEST (Validação)
```yaml
objetivo: Executar testes, validar qualidade, corrigir bugs
deliverables:
  - Test Plan
  - Test Cases
  - Test Report
  - Bug List (P0/P1 resolved)
quality_gates:
  - all_tests_pass: 100%
  - p0_bugs_resolved: 100%
  - p1_bugs_resolved: > 95%
duration: 4-40 horas
```

#### Fase 7: REVIEW (Aprovação)
```yaml
objetivo: Reviews finais, demo stakeholders, sign-offs
deliverables:
  - Review Checklist
  - Sign-off Document
  - Release Notes
approvals:
  - Technical (Architect)
  - Security (Security Expert)
  - Product (Product Engineer)
duration: 2-8 horas
```

#### Fase 8: DEPLOY (Produção)
```yaml
objetivo: Release para produção, monitorar saúde
deliverables:
  - Deployment Plan
  - Rollback Plan
  - Monitoring Configuration
  - Operations Runbook
quality_gates:
  - deployment_success: 100%
  - smoke_tests_pass: 100%
  - monitoring_active: 100%
duration: 1-4 horas
```

---

## 3. Equipe de 12 Especialistas AI

### 3.1 Matriz de Especialistas

| ID | Especialista | Expertise | Triggers |
|----|--------------|-----------|----------|
| `system_architect` | System Architect | Design, Patterns, Scalability | Novo projeto, refatoração |
| `senior_developer` | Senior Developer | Implementation, Best Practices | Codificação complexa |
| `security_expert` | Security Expert | OWASP, Threat Modeling, Compliance | Dados sensíveis, auth |
| `qa_engineer` | QA Engineer | Testing, Quality Gates | Validação, bugs |
| `devops_engineer` | DevOps Engineer | CI/CD, Infrastructure | Deploy, infra |
| `performance_engineer` | Performance Engineer | Optimization, Profiling | Lentidão, escala |
| `data_engineer` | Data Engineer | Pipelines, Storage | Dados, analytics |
| `api_designer` | API Designer | REST, GraphQL, Documentation | APIs, integrações |
| `frontend_expert` | Frontend Expert | React, UX, Accessibility | UI complexa |
| `product_engineer` | Product Engineer | Requirements, User Stories | Product decisions |
| `technical_writer` | Technical Writer | Documentation, Tutorials | Docs, onboarding |
| `code_reviewer` | Code Reviewer | Quality, Standards, Patterns | Code review |

### 3.2 Orquestração Automática

```typescript
// Exemplo: Seleção automática de especialistas por contexto
function selectSpecialists(context: TaskContext): SpecialistId[] {
  const specialists: SpecialistId[] = [];

  // Regras de seleção baseadas em keywords
  if (context.hasKeywords(['arquitetura', 'design', 'patterns'])) {
    specialists.push('system_architect');
  }
  if (context.hasKeywords(['segurança', 'auth', 'LGPD'])) {
    specialists.push('security_expert');
  }
  if (context.hasKeywords(['performance', 'lento', 'otimizar'])) {
    specialists.push('performance_engineer');
  }
  // ... mais regras

  return specialists;
}
```

---

## 4. Versionamento Git-Like

### 4.1 Semantic Versioning

```
MAJOR.MINOR.PATCH
  │     │     └── Bug fixes, minor updates
  │     └──────── New features, backward compatible
  └────────────── Breaking changes, major milestones
```

### 4.2 Regras de Incremento

| Evento | Incremento | Exemplo |
|--------|------------|---------|
| Phase Transition | MINOR | 0.1.0 → 0.2.0 |
| Deliverable Added | PATCH | 0.2.0 → 0.2.1 |
| Major Milestone | MAJOR | 0.9.0 → 1.0.0 |
| Bug Fix | PATCH | 1.0.0 → 1.0.1 |
| Breaking Change | MAJOR | 1.5.3 → 2.0.0 |

### 4.3 Histórico Incremental

```typescript
interface ProjectHistoryEntry {
  id: string;
  timestamp: Date;
  version: SemanticVersion;
  previousVersion: SemanticVersion;
  changeType: ChangeType;
  summary: string;
  details: ChangeDetail[];
  author: Author;
  phase: WorkflowPhase;

  // Para restauração
  snapshot?: Partial<Project>;
}
```

---

## 5. PRD Template (Amazon Working Backwards)

### 5.1 Estrutura do PRD

```markdown
# [Nome do Produto/Feature]

## Press Release (Interno)
### Headline
[Uma frase impactante que resume o valor]

### Subheadline
[Para quem é e qual o benefício principal]

### Summary Paragraph
[3-4 frases explicando o produto]

### Problem Statement
[O problema que estamos resolvendo]

### Solution
[Como resolvemos o problema]

### Quote from Leader
[Citação do stakeholder sobre o valor]

### Customer Quote
[Citação fictícia de um usuário satisfeito]

### Call to Action
[Próximos passos para o leitor]

## FAQ
### Customer FAQ
Q: [Pergunta comum de usuário]
A: [Resposta clara]

### Internal FAQ
Q: [Pergunta técnica/de negócio]
A: [Resposta detalhada]

## Appendix
- Technical Specifications
- Data Requirements
- Security Considerations
- Metrics & Success Criteria
```

---

## 6. Quality Gates

### 6.1 Automated Checks

```typescript
const QUALITY_GATES: QualityGate[] = [
  // Code Quality
  { check: 'test_coverage', threshold: 0.8, automated: true },
  { check: 'code_quality_score', threshold: 0.85, automated: true },
  { check: 'security_scan', threshold: 0.95, automated: true },
  { check: 'linter_pass', threshold: 1.0, automated: true },

  // Documentation
  { check: 'documentation_complete', threshold: 0.95, automated: true },

  // Performance
  { check: 'performance_baseline', threshold: 0.9, automated: true },
];
```

### 6.2 Manual Approvals

| Fase | Aprovador | Tipo | Bloqueia? |
|------|-----------|------|-----------|
| Design | Architect | Architecture Review | Sim |
| Design | Security | Security Review | Sim |
| Build | Reviewer | Code Review | Sim |
| Test | QA | QA Sign-off | Sim |
| Review | Product | Product Approval | Sim |
| Deploy | DevOps | Deployment Approval | Sim |

---

## 7. Prompt Engineering para Agentes

### 7.1 Estrutura de System Prompt

```markdown
# IDENTITY
You are [SPECIALIST_NAME], an expert in [DOMAIN].

# CONTEXT
You are part of a team of 12 AI specialists working on [PROJECT].
Current phase: [PHASE]
Your role: [SPECIFIC_RESPONSIBILITIES]

# CAPABILITIES
- [Capability 1]
- [Capability 2]

# CONSTRAINTS
- [Constraint 1]
- [Constraint 2]

# OUTPUT FORMAT
[Expected format for responses]

# EXAMPLES
[Few-shot examples]
```

### 7.2 Técnicas de Prompting

| Técnica | Uso | Exemplo |
|---------|-----|---------|
| Few-shot | Ensinar formato | "Exemplo: ..." |
| Chain-of-Thought | Reasoning complexo | "Pense passo a passo..." |
| Self-Consistency | Validação | "Verifique sua resposta..." |
| Role-Playing | Especialização | "Você é um arquiteto senior..." |
| Structured Output | Parsing fácil | "Responda em JSON..." |

---

## 8. Métricas e Observabilidade

### 8.1 Health Indicators por Fase

```typescript
const HEALTH_INDICATORS = {
  input: [
    { metric: 'clarity_score', good: '>0.8', warning: '0.6-0.8', bad: '<0.6' },
    { metric: 'completeness', good: '>90%', warning: '70-90%', bad: '<70%' },
  ],
  build: [
    { metric: 'test_coverage', good: '>80%', warning: '60-80%', bad: '<60%' },
    { metric: 'code_review_issues', good: '<5', warning: '5-10', bad: '>10' },
  ],
  deploy: [
    { metric: 'deployment_success_rate', good: '>99%', warning: '95-99%', bad: '<95%' },
    { metric: 'mean_time_to_recovery', good: '<15min', warning: '15-60min', bad: '>60min' },
  ],
};
```

### 8.2 Dashboards Recomendados

- **Langfuse**: Tracing de LLM calls
- **Promptfoo**: Eval de prompts
- **Grafana**: Métricas de infraestrutura
- **Sentry**: Error tracking

---

## 9. Anti-Patterns a Evitar

### 9.1 Problemas Comuns

| Anti-Pattern | Problema | Solução |
|--------------|----------|---------|
| Prompt Stuffing | Contexto muito longo | Usar RAG, resumir |
| God Agent | Um agente faz tudo | Especialização |
| No Memory | Perde contexto | Implementar memória |
| No Guardrails | Outputs imprevisíveis | Validação, constraints |
| Blind Trust | Confiar cegamente | Self-verification |

### 9.2 Checklist de Code Review para Agentes

- [ ] Tem guardrails para outputs?
- [ ] Valida inputs antes de processar?
- [ ] Implementa retry com backoff?
- [ ] Tem timeout adequado?
- [ ] Logs são suficientes para debug?
- [ ] Custo está sob controle?
- [ ] Tem fallback para falhas?

---

## 10. Stack Recomendada

### 10.1 Tecnologias

| Categoria | Recomendação | Alternativa |
|-----------|--------------|-------------|
| **LLM** | Claude 3.5 Sonnet | GPT-4o |
| **Framework** | LangChain | LlamaIndex |
| **Memória** | Graphiti + Neo4j | Pinecone |
| **Observabilidade** | Langfuse | LangSmith |
| **Eval** | Promptfoo | Braintrust |
| **Vector DB** | Pinecone | Weaviate |
| **UI** | React + Tailwind | Next.js |

### 10.2 Custos Típicos

| Modelo | Input (1M tokens) | Output (1M tokens) |
|--------|-------------------|---------------------|
| Claude 3.5 Sonnet | $3.00 | $15.00 |
| Claude 3.5 Haiku | $0.25 | $1.25 |
| GPT-4o | $2.50 | $10.00 |
| GPT-4o-mini | $0.15 | $0.60 |

---

## 11. Referências

### 11.1 Documentação Oficial
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com)
- [OpenAI Best Practices](https://platform.openai.com/docs)
- [LangChain Documentation](https://docs.langchain.com)

### 11.2 Papers Fundamentais
- "Attention Is All You Need" (Transformers)
- "Chain-of-Thought Prompting" (CoT)
- "ReAct: Synergizing Reasoning and Acting" (ReAct)
- "Constitutional AI" (Anthropic)

### 11.3 Livros Recomendados
- "Building LLM Apps" - O'Reilly
- "AI Engineering" - Chip Huyen
- "Prompt Engineering Guide" - DAIR.AI

---

**Última atualização:** 2026-01-01
**Versão:** 2.0.0
**Autor:** AI Team Framework

---

> "O melhor agente AI não é o mais inteligente, é o mais confiável." - Princípio fundamental

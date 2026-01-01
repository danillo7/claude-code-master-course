# Master-Clone vs Lead-Specialist

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
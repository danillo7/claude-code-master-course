# Documentação Automatizada com Claude

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
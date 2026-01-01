# Plan Mode

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
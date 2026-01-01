# Testing Assistido por IA

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
# Multi-file Editing: O Superpoder do Claude Code

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
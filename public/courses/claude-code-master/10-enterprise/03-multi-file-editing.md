# Multi-File Editing

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
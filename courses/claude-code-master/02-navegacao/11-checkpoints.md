# Checkpoints: Seu Ctrl+Z Turbinado

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
# Gerenciamento de Contexto

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
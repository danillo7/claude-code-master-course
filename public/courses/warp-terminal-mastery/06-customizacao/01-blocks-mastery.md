# Mastery de Blocks

Blocks são o recurso mais subestimado do Warp.

## O que são Blocks?

Cada comando executado cria um "block" - uma unidade organizacional com:

- **Header**: Comando + timestamp
- **Body**: Output do comando
- **Actions**: Copiar, compartilhar, etc.

## Navegação por Blocks

| Ação | Atalho |
|------|--------|
| Block anterior | ⌘ + ↑ |
| Próximo block | ⌘ + ↓ |
| Primeiro block | ⌘ + Home |
| Último block | ⌘ + End |

## Ações em Blocks

### Copiar Output
- Clique no block header → Seleciona tudo
- **⌘ + ⇧ + C** → Copia output completo

### Compartilhar Block
- Clique direito → "Share Block"
- Gera link compartilhável

### Re-executar
- Clique no comando no header
- Aparece no input
- Enter para executar novamente

## Timestamps

Cada block mostra QUANDO foi executado:

\`\`\`
> git push origin main                    [14:32:15]
\`\`\`

Útil para:
- Debug ("quando isso aconteceu?")
- Auditoria ("que horas fiz deploy?")
- Histórico ("o que fiz às 10h?")

## Colapsar Blocks

Outputs muito longos podem ser colapsados:
- Clique no ícone de collapse
- Ou configure para auto-collapse

## Dica: Block como Evidência

Para documentação ou troubleshooting:
1. Execute o comando
2. Clique no block
3. **⌘ + ⇧ + C** para copiar
4. Cole no documento/ticket

Inclui comando, output E timestamp!
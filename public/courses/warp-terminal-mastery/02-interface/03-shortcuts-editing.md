# Edição de Texto no Warp

O Warp tem um **editor moderno** no input, não uma linha de comando tradicional.

## Movimentação do Cursor

| Atalho | Ação |
|--------|------|
| ⌥ + Click | Posicionar cursor em qualquer lugar |
| ⌘ + ← | Início da linha |
| ⌘ + → | Fim da linha |
| ⌥ + ← | Pular palavra à esquerda |
| ⌥ + → | Pular palavra à direita |

## Deleção

| Atalho | Ação |
|--------|------|
| ⌘ + Backspace | Deletar até início da linha |
| ⌥ + Backspace | Deletar palavra anterior |
| ⌃ + K | Deletar até fim da linha |

## Seleção

| Atalho | Ação |
|--------|------|
| ⌘ + A | Selecionar tudo |
| ⇧ + ⌥ + ← | Selecionar palavra anterior |
| ⇧ + ⌥ + → | Selecionar próxima palavra |
| ⇧ + ⌘ + ← | Selecionar até início |
| ⇧ + ⌘ + → | Selecionar até fim |

## Comandos Multiline

Use **⇧ + Enter** para criar comandos em múltiplas linhas:

\`\`\`bash
docker run -d \\
  --name graphiti \\
  -p 8000:8000 \\
  -e NEO4J_URI=bolt://localhost:7687 \\
  graphiti-image
\`\`\`

## Dica Pro: Option + Click

A feature mais subestimada! Com **⌥ + Click** você pode:

1. Clicar no MEIO de um path longo
2. Editar exatamente onde precisa
3. Não precisa usar setas até chegar lá

### Exemplo:
\`\`\`bash
# Comando longo:
curl -X POST https://api.example.com/v1/users/123/profile -H "Authorization: Bearer token"
                                                    ^
                                              ⌥ + Click aqui!
\`\`\`
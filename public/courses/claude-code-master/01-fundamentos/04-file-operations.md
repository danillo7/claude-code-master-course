# Operações com Arquivos

Claude Code possui ferramentas específicas para cada tipo de operação com arquivos:

## Leitura (Read)

\`\`\`
"Leia o arquivo package.json"
"Mostre as primeiras 50 linhas de app.ts"
"Qual é o conteúdo de src/utils/helpers.ts?"
\`\`\`

## Escrita (Write)

\`\`\`
"Crie um arquivo .env.example com as variáveis necessárias"
"Escreva um README.md para este projeto"
\`\`\`

## Edição (Edit)

\`\`\`
"Adicione tratamento de erros na função login()"
"Renomeie a variável 'data' para 'userData' em todo o arquivo"
"Corrija o bug na linha 45 de api.ts"
\`\`\`

## Busca (Glob/Grep)

\`\`\`
"Encontre todos os arquivos .tsx neste projeto"
"Busque por 'TODO' em todos os arquivos"
"Liste os arquivos que importam o módulo 'axios'"
\`\`\`

## Ferramentas Internas

| Ferramenta | Uso |
|------------|-----|
| \`Read\` | Ler conteúdo de arquivos |
| \`Write\` | Criar/sobrescrever arquivos |
| \`Edit\` | Modificar arquivos existentes |
| \`Glob\` | Buscar arquivos por padrão |
| \`Grep\` | Buscar conteúdo em arquivos |
| \`Bash\` | Executar comandos shell |

## Permissões

Por padrão, Claude pede confirmação para operações de escrita. Você pode:

1. Aprovar individualmente (Enter)
2. Negar (n)
3. Editar antes de aplicar (e)
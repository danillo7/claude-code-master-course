# Criando Workflows

## Estrutura do Arquivo

Crie arquivos em \`~/.warp/workflows/\`:

\`\`\`yaml
# ~/.warp/workflows/meus-workflows.yaml

---
name: nome-do-workflow
command: "comando a executar"
description: "Descrição do que faz"
tags:
  - tag1
  - tag2

---
name: outro-workflow
command: "outro comando"
description: "Outra descrição"
\`\`\`

## Workflows com Argumentos

Use \`{{nome}}\` para criar parâmetros:

\`\`\`yaml
name: port-check
command: "lsof -i :{{port}}"
description: "Ver o que usa uma porta"
arguments:
  - name: port
    description: "Número da porta"
    default_value: "3000"
\`\`\`

### Uso:
\`\`\`
⌃ + R → "port-check" → Enter
# Warp pergunta: "Número da porta: [3000]"
# Digite 8080 ou Enter para usar default
\`\`\`

## Exemplos Práticos para Você

### Para Costa Law (contratos):
\`\`\`yaml
name: costa-contracts
command: "cd ~/Library/Mobile\\ Documents/com~apple~CloudDocs/20-COSTA-LAW && ls -la"
description: "Ir para pasta de contratos Costa Law"
tags:
  - costa-law
  - contratos
\`\`\`

### Para SPOT AI:
\`\`\`yaml
name: spot-logs
command: "docker logs -f --tail 100 spot-council-backend"
description: "Ver logs do SPOT Council"
tags:
  - spot
  - docker
  - logs
\`\`\`

### Para Produtividade:
\`\`\`yaml
name: morning-setup
command: "cc-spot && open -a 'Google Chrome' && gcalcli agenda today tomorrow"
description: "Setup matinal: SPOT + Chrome + Agenda"
tags:
  - produtividade
  - morning
\`\`\`

## Importando Workflows

1. Crie o arquivo YAML
2. Warp > Settings > Workflows
3. Import from YAML
4. Selecione seu arquivo
5. Pronto! Acesse via ⌃ + R
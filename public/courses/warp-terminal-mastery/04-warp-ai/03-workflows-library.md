# Biblioteca de Workflows

Coleção curada de workflows para diferentes casos de uso.

## 🔧 DevOps & Sistema

\`\`\`yaml
---
name: port-kill
command: "kill -9 $(lsof -ti:{{port}})"
description: "Matar processo em uma porta"
arguments:
  - name: port
    default_value: "3000"

---
name: docker-cleanup
command: "docker system prune -af && docker volume prune -f"
description: "Limpar Docker completamente"

---
name: disk-usage
command: "du -sh {{path}}/* | sort -hr | head -20"
description: "Ver uso de disco (top 20)"
arguments:
  - name: path
    default_value: "."
\`\`\`

## 📁 Navegação

\`\`\`yaml
---
name: icloud-go
command: "cd ~/Library/Mobile\\\\ Documents/com~apple~CloudDocs && ls"
description: "Ir para iCloud"

---
name: dev-go
command: "cd ~/Developer && ls"
description: "Ir para Developer"

---
name: find-large
command: "fd -S +{{size}}M -t f . {{path}}"
description: "Encontrar arquivos grandes"
arguments:
  - name: size
    default_value: "100"
  - name: path
    default_value: "."
\`\`\`

## 🚀 AI Stack

\`\`\`yaml
---
name: ai-stack-start
command: "~/Developer/stack-automation/scripts/start-ai-stack.sh"
description: "Iniciar Graphiti, Neo4j, Langfuse"

---
name: ai-stack-health
command: "~/Developer/stack-automation/scripts/health-check.sh"
description: "Verificar saúde do stack AI"

---
name: ai-stack-stop
command: "~/Developer/stack-automation/scripts/stop-ai-stack.sh"
description: "Parar stack AI"
\`\`\`

## 📅 Produtividade

\`\`\`yaml
---
name: agenda-hoje
command: "gcalcli agenda today tomorrow"
description: "Ver agenda de hoje"

---
name: weather
command: "curl -s 'wttr.in/{{city}}?format=3'"
description: "Ver clima"
arguments:
  - name: city
    default_value: "Sao+Paulo"

---
name: backup-check
command: "tmutil latestbackup && tmutil listbackups | tail -5"
description: "Verificar Time Machine"
\`\`\`

## 💡 Dica

Organize seus workflows em arquivos separados por categoria:
- \`claude-code.yaml\`
- \`git-workflows.yaml\`
- \`devops-workflows.yaml\`
- \`productivity-workflows.yaml\`
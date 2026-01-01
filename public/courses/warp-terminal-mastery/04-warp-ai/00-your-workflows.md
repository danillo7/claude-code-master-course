# Seus Workflows - Dr. Danillo Costa

Você tem **57 workflows** organizados em **6 arquivos YAML**. Aqui está o catálogo completo!

---

## 📁 Estrutura dos Arquivos

\`\`\`
~/.warp/workflows/
├── claude-code.yaml        # 6 workflows
├── git-workflows.yaml      # 8 workflows
├── devops-workflows.yaml   # 9 workflows
├── productivity-workflows.yaml  # 10 workflows
├── stack-synergies.yaml    # 23 workflows
└── ambient-agents.yaml     # (Ambient Agents beta)
\`\`\`

---

## 🤖 CLAUDE CODE (6 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`claude-spot\` | \`cc-spot\` | Abrir SPOT AI |
| \`claude-curso\` | \`cc-curso\` | Abrir Curso Claude |
| \`claude-sandbox\` | \`cc-sandbox\` | Abrir sandbox |
| \`claude-new\` | \`claude --new\` | Nova sessão limpa |
| \`claude-continue\` | \`claude --continue\` | Continuar última |
| \`claude-list\` | \`cc-list\` | Listar projetos |

**Acesso rápido:** \`⌃ + R\` → "claude"

---

## 📊 GIT (8 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`git-status-full\` | \`git status && git log -5\` | Status + commits |
| \`git-sync\` | \`git fetch --all && git status\` | Sincronizar |
| \`git-log-graph\` | \`git log --graph -20\` | Histórico visual |
| \`git-uncommit\` | \`git reset --soft HEAD~1\` | Desfazer commit |
| \`git-amend\` | \`git commit --amend\` | Alterar último |
| \`git-stash-save\` | \`git stash push -m '{{msg}}'\` | Guardar WIP |
| \`git-stash-pop\` | \`git stash pop\` | Recuperar stash |
| \`git-branch-clean\` | Deleta branches mergeadas | Limpeza |

**Acesso rápido:** \`⌃ + R\` → "git"

---

## 🔧 DEVOPS (9 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`port-check\` | \`lsof -i :{{port}}\` | Ver porta |
| \`port-kill\` | \`kill -9 $(lsof -ti:{{port}})\` | Matar porta |
| \`docker-cleanup\` | Prune total | Limpar Docker |
| \`docker-ps\` | Formato limpo | Listar containers |
| \`docker-logs\` | \`docker logs -f {{container}}\` | Ver logs |
| \`ai-stack-start\` | Script start | Iniciar stack |
| \`ai-stack-health\` | Health check | Verificar saúde |
| \`ai-stack-stop\` | Script stop | Parar stack |

**Acesso rápido:** \`⌃ + R\` → "docker" ou "port"

---

## ⚡ PRODUTIVIDADE (10 workflows)

| Workflow | Comando | Descrição |
|----------|---------|-----------|
| \`icloud-go\` | \`cd ~/iCloud\` | Ir para iCloud |
| \`dev-go\` | \`cd ~/Developer\` | Ir para Developer |
| \`find-large\` | \`fd -S +{{size}}M\` | Arquivos grandes |
| \`find-recent\` | \`fd --changed-within {{time}}\` | Arquivos recentes |
| \`disk-usage\` | \`du -sh | sort -hr\` | Uso de disco |
| \`backup-check\` | \`tmutil latestbackup\` | Time Machine |
| \`weather\` | \`wttr.in/{{city}}\` | Ver clima |
| \`ip-public\` | \`curl ifconfig.me\` | IP público |
| \`agenda-hoje\` | \`gcalcli agenda\` | Agenda do dia |

**Acesso rápido:** \`⌃ + R\` → "find" ou "agenda"

---

## 🚀 STACK SYNERGIES (23 workflows)

### AI Stack
| Workflow | Descrição |
|----------|-----------|
| \`ai-stack-start\` | 🚀 Iniciar Graphiti, Neo4j, Ollama |
| \`ai-stack-stop\` | 🛑 Parar stack |
| \`ai-stack-health\` | 💚 Health check completo |
| \`neo4j-ui\` | 🔗 Abrir Neo4j Browser |
| \`langfuse-ui\` | 📊 Abrir Langfuse |
| \`graphiti-logs\` | 📋 Logs do Graphiti MCP |

### Ollama (Local LLM)
| Workflow | Descrição |
|----------|-----------|
| \`ollama-models\` | 🦙 Listar modelos |
| \`ollama-pull\` | 📥 Baixar modelo |

### Claude Code Projects
| Workflow | Descrição |
|----------|-----------|
| \`cc-spot\` | 🤖 SPOT AI Council |
| \`cc-curso\` | 📚 Curso Claude |
| \`cc-sandbox\` | 🧪 Sandbox |
| \`cc-new\` | ✨ Novo projeto |

### Memory & MCP
| Workflow | Descrição |
|----------|-----------|
| \`memory-view\` | 🧠 Ver Memory MCP |
| \`memory-search\` | 🔍 Buscar no Memory |
| \`mcp-status\` | 🔌 Status MCPs |

### Dashboard & Status
| Workflow | Descrição |
|----------|-----------|
| \`stack-dashboard\` | 📊 Dashboard completo |
| \`backup-status\` | 💾 Status backup 3-2-1 |
| \`dev-projects\` | 📁 Listar projetos |
| \`icloud-stats\` | ☁️ Stats iCloud |
| \`quick-sync\` | 🔄 Sync rápido |

### Google Calendar
| Workflow | Descrição |
|----------|-----------|
| \`gcal-hoje\` | 📅 Agenda de hoje |
| \`gcal-semana\` | 📅 Calendário semana |
| \`gcal-adicionar\` | ➕ Adicionar evento |

---

## ⚡ Workflows Favoritos (Mais Usados)

\`\`\`bash
# Morning routine
⌃ + R → "stack-dashboard"  # Ver status de tudo
⌃ + R → "gcal-hoje"        # Agenda do dia
⌃ + R → "cc-spot"          # Abrir projeto principal

# Durante desenvolvimento
⌃ + R → "git-status-full"  # Status completo
⌃ + R → "docker-logs"      # Ver logs
⌃ + R → "port-check"       # Verificar porta

# Final do dia
⌃ + R → "quick-sync"       # Verificar pendências
⌃ + R → "backup-status"    # Confirmar backups
\`\`\`

---

## 💡 Dica Pro

Use tags para encontrar workflows relacionados:
- \`⌃ + R\` → "#git" → Vê todos com tag git
- \`⌃ + R\` → "#docker" → Vê todos com tag docker
- \`⌃ + R\` → "#stack" → Vê todos do AI stack
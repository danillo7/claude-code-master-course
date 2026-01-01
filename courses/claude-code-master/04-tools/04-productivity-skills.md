# Skills para Produtividade

Estas skills transformam tarefas repetitivas em operações de um comando.

## 1. Message Polish

Refina qualquer mensagem profissional:

\`\`\`markdown
---
description: Polimento de mensagens profissionais
model-invoked: true
---

# Message Polish

## Quando Usar
Quando o usuário disser "polir", "melhorar", "refinar" + mensagem.

## Processo
1. Identificar tom desejado (formal, casual, assertivo)
2. Corrigir gramática e ortografia
3. Melhorar clareza e fluxo
4. Ajustar tom
5. Manter a essência original

## Output
- Mensagem polida
- Changelog das mudanças (opcional)
\`\`\`

**Exemplo:**
\`\`\`
Input: "polir: oi pessoal, preciso do relatório pra ontem ok?"

Output: "Olá equipe, preciso do relatório com urgência.
Podem me enviar até o final do dia? Agradeço a atenção."
\`\`\`

## 2. Meeting Script

Cria roteiro estruturado para reuniões:

\`\`\`markdown
---
description: Roteiro para reuniões importantes
model-invoked: true
---

# Meeting Script

## Processo
1. Definir objetivo da reunião
2. Criar agenda com tempos
3. Preparar talking points
4. Antecipar objeções
5. Definir próximos passos

## Output
\\\`\\\`\\\`
📋 ROTEIRO: [Nome da Reunião]
⏱️ Duração: X min

1. Abertura (2 min)
   - Contextualização

2. Pauta Principal (X min)
   - Talking point 1
   - Talking point 2

3. Discussão (X min)
   - Perguntas preparadas

4. Fechamento (3 min)
   - Próximos passos
   - Responsáveis
\\\`\\\`\\\`
\`\`\`

## 3. Context Saver

Salva contexto da sessão para retomar depois:

\`\`\`markdown
---
description: Salva contexto da sessão atual
model-invoked: false
---

# Context Saver

## Processo
1. Identificar decisões tomadas
2. Listar arquivos modificados
3. Resumir estado atual
4. Próximos passos pendentes
5. Salvar em Memory MCP

## Output
Arquivo \`session-YYYY-MM-DD.md\` com contexto completo.
\`\`\`

## 4. Quick Audit

Health check rápido do ambiente Claude Code:

\`\`\`markdown
---
description: Auditoria rápida do ambiente
model-invoked: false
---

# Quick Audit

## Verificar
- [ ] MCPs ativos e funcionando
- [ ] Skills carregadas
- [ ] Memory MCP respondendo
- [ ] Configurações corretas
- [ ] Hooks ativos

## Output
Score de saúde: X/10 com recomendações.
\`\`\`

## 5. Tradução Corporativa

Tradução com ajuste de contexto cultural:

\`\`\`markdown
---
description: Tradução corporativa de alta qualidade
model-invoked: true
---

# Tradução Corporativa

## Processo
1. Identificar idioma origem/destino
2. Analisar contexto e tom
3. Traduzir mantendo nuances
4. Adaptar expressões culturais
5. Revisar terminologia técnica

## Diferencial
- Não é tradução literal
- Ajusta tom para cultura destino
- Mantém terminologia do setor
\`\`\`

## Fluxo de Produtividade

\`\`\`
Dia Típico com Skills:

07:30 - /quick-audit (check do ambiente)
09:00 - /meeting-script para call com cliente
10:00 - /message-polish em emails importantes
14:00 - /briefing-executivo para relatório
17:00 - /context-saver para salvar o dia
\`\`\`
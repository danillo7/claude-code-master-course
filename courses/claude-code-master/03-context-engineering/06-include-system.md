# Sistema @include: Modularização de Contexto

## O Problema da Duplicação

Sem @include:
\`\`\`markdown
# Projeto A - CLAUDE.md
[100 linhas de regras comuns...]
[Regras específicas do projeto A]

# Projeto B - CLAUDE.md
[As mesmas 100 linhas de regras comuns...]
[Regras específicas do projeto B]
\`\`\`

## A Solução: @include

\`\`\`markdown
# Projeto A - CLAUDE.md
@include ~/.claude/modules/regras-base.md
@include ~/.claude/modules/typescript-strict.md

## Regras Específicas do Projeto A
[Apenas o que é único]
\`\`\`

## Estrutura Modular Recomendada

\`\`\`
~/.claude/
├── CLAUDE.md              ← Seu arquivo principal
└── modules/
    ├── regras-base.md     ← Regras universais
    ├── typescript.md      ← Padrões TypeScript
    ├── react.md           ← Padrões React
    ├── seguranca.md       ← Regras de segurança
    └── juridico.md        ← Padrões Costa Law
\`\`\`

## Exemplos de Módulos

### regras-base.md
\`\`\`markdown
## Regras Universais

### Segurança
- NUNCA expor secrets
- NUNCA deletar sem confirmação
- SEMPRE fazer backup

### Qualidade
- Código limpo e legível
- Comentários em português
- Testes antes de commit
\`\`\`

### typescript.md
\`\`\`markdown
## Padrões TypeScript

- strict mode sempre
- Evitar any (usar unknown)
- Interfaces > Types para objetos
- Exports nomeados
- Paths aliases (@/)
\`\`\`

## Benefícios da Modularização

| Antes | Depois |
|-------|--------|
| Duplicação em N projetos | Single source of truth |
| Atualizar 10 arquivos | Atualizar 1 módulo |
| CLAUDE.md de 500+ linhas | CLAUDE.md enxuto + @includes |
| Inconsistências entre projetos | Consistência garantida |

## Combinando com Per-Folder

\`\`\`markdown
# src/api/.claude/CLAUDE.md

@include ~/.claude/modules/regras-base.md
@include ~/.claude/modules/api-patterns.md

## Regras Específicas desta API
[Contexto local]
\`\`\`

## Setup Rápido

\`\`\`bash
# Criar estrutura de módulos
mkdir -p ~/.claude/modules

# Criar módulo base
cat > ~/.claude/modules/regras-base.md << 'EOF'
## Regras Universais
- NUNCA deletar sem aprovação
- SEMPRE fazer backup antes
EOF
\`\`\`
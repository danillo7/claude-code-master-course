# Master Context Documents

## O que os TOP 1% Fazem Diferente

Enquanto a maioria cria CLAUDE.md genéricos, os profissionais de elite criam **Master Context Documents** - documentos vivos que evoluem com o projeto.

## Anatomia de um Master Context Document

### Seção 1: Identidade do Projeto
\`\`\`markdown
# 🎯 [NOME DO PROJETO]

**Missão:** Uma frase que define o propósito
**Stack:** Tecnologias principais
**Status:** Fase atual (MVP/Beta/Produção)
**Última atualização:** [Data]
\`\`\`

### Seção 2: Regras Absolutas (Inegociáveis)
\`\`\`markdown
## 🚨 REGRAS ABSOLUTAS

### NUNCA (Proibições)
- ❌ Deletar dados de produção
- ❌ Expor secrets ou tokens
- ❌ Modificar schema sem migration
- ❌ Push direto na main

### SEMPRE (Obrigações)
- ✅ Testar antes de commitar
- ✅ Documentar breaking changes
- ✅ Usar tipos explícitos
- ✅ Seguir convenções do projeto
\`\`\`

### Seção 3: Padrões de Código
\`\`\`markdown
## 📐 PADRÕES DE CÓDIGO

### Nomenclatura
- Componentes: PascalCase
- Funções: camelCase
- Constantes: UPPER_SNAKE_CASE
- Arquivos: kebab-case

### Exemplos de Referência
\\\`\\\`\\\`typescript
// ✅ Padrão correto
export function useUserData(userId: string): UserData {
  // implementação
}

// ❌ Evitar
export default function(id) {
  // sem tipos, export default anônimo
}
\\\`\\\`\\\`
\`\`\`

### Seção 4: Arquitetura
\`\`\`markdown
## 🏗️ ARQUITETURA

\\\`\\\`\\\`
src/
├── components/     # UI components
│   ├── ui/         # Primitivos (Button, Input)
│   └── features/   # Específicos de feature
├── hooks/          # Custom hooks
├── services/       # Comunicação externa
├── utils/          # Helpers puros
└── types/          # TypeScript types
\\\`\\\`\\\`

### Fluxo de Dados
[API] → [Service] → [Hook] → [Component]
\`\`\`

### Seção 5: Comandos Essenciais
\`\`\`markdown
## ⚡ COMANDOS

| Comando | Ação |
|---------|------|
| npm run dev | Desenvolvimento local |
| npm test | Rodar testes |
| npm run build | Build produção |
| npm run lint | Verificar código |
\`\`\`

## Templates TOP 1%

### Template: Projeto TypeScript
\`\`\`markdown
# CLAUDE.md - [Projeto]

## Stack
- TypeScript 5.x (strict mode)
- [Framework]
- [Database]

## Regras Absolutas
- SEMPRE usar tipos explícitos
- NUNCA usar any (preferir unknown)
- Exports nomeados > default
- Paths aliases via @/

## Padrões
- ESLint + Prettier configurados
- Commits convencionais
- PRs com descrição completa
\`\`\`

### Template: Projeto Jurídico (Costa Law)
\`\`\`markdown
# CLAUDE.md - Costa Law

## Contexto
Escritório de advocacia especializado em direito empresarial

## Regras de Confidencialidade
- NUNCA expor nomes de clientes
- NUNCA armazenar dados sensíveis em logs
- Usar pseudônimos em exemplos

## Padrões de Documentos
- Petições: modelo padrão OAB
- Contratos: cláusulas padrão Costa Law
- Pareceres: estrutura formal

## Linguagem
- Tom: Formal jurídico
- Referências: Legislação brasileira atual
\`\`\`

## Evolução Contínua

\`\`\`
Semana 1: Criar CLAUDE.md básico
Semana 2: Adicionar exemplos de código
Mês 1: Documentar padrões emergentes
Mês 3: Refatorar baseado em aprendizados
Ongoing: Atualizar com cada mudança significativa
\`\`\`

**Regra de Ouro:** Um Master Context Document nunca está "pronto" - ele evolui com o projeto.
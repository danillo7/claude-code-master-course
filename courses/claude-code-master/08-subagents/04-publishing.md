# Publicando e Distribuindo Plugins

Depois de criar e testar seu plugin, é hora de compartilhar com a comunidade.

## Preparação para Publicação

### 1. Checklist de Qualidade

\`\`\`markdown
## Pre-publish Checklist

### Código
- [ ] TypeScript compilando sem erros
- [ ] ESLint passando sem warnings
- [ ] Testes com 80%+ coverage
- [ ] Sem console.log em produção
- [ ] Sem secrets hardcoded

### Documentação
- [ ] README.md completo
- [ ] Exemplos de uso
- [ ] Changelog atualizado
- [ ] LICENSE file presente

### Package.json
- [ ] Versão semântica correta
- [ ] Descrição clara
- [ ] Keywords relevantes
- [ ] Repository URL
- [ ] Campo claude preenchido

### Segurança
- [ ] Permissões mínimas necessárias
- [ ] Sem dependências vulneráveis (npm audit)
- [ ] Input validation em todos comandos
\`\`\`

### 2. README Template

\`\`\`markdown
# @seu-usuario/claude-plugin-nome

> Descrição curta do que o plugin faz

[![npm version](https://badge.fury.io/js/%40seu-usuario%2Fclaude-plugin-nome.svg)](https://www.npmjs.com/package/@seu-usuario/claude-plugin-nome)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ✅ Feature 1
- ✅ Feature 2
- ✅ Feature 3

## Installation

\\\`\\\`\\\`bash
claude plugin install @seu-usuario/claude-plugin-nome
\\\`\\\`\\\`

## Usage

\\\`\\\`\\\`bash
# Comando básico
claude nome-comando

# Com opções
claude nome-comando --option value
\\\`\\\`\\\`

## Configuration

Crie \`~/.claude/plugins/nome/config.json\`:

\\\`\\\`\\\`json
{
  "option1": "value1",
  "option2": true
}
\\\`\\\`\\\`

## Permissions Required

| Permission | Reason |
|------------|--------|
| \`git:read\` | Para ler status do repositório |
| \`network:fetch\` | Para buscar dados externos |

## Commands

### \`nome-comando\`

Descrição do que o comando faz.

**Arguments:**
- \`--option\` (string): Descrição da opção
- \`--flag\` (boolean): Descrição da flag

**Examples:**
\\\`\\\`\\\`bash
claude nome-comando --option value
\\\`\\\`\\\`

## Development

\\\`\\\`\\\`bash
# Clone
git clone https://github.com/seu-usuario/claude-plugin-nome

# Install
npm install

# Build
npm run build

# Test
npm test

# Link for local testing
claude plugin install ./
\\\`\\\`\\\`

## Contributing

PRs welcome! Please read CONTRIBUTING.md first.

## License

MIT
\\\`\\\`\\\`

## Publicando no npm

### 1. Setup npm Account

\`\`\`bash
# Login no npm
npm login

# Verificar login
npm whoami

# Configurar escopo (para @usuario/package)
npm config set scope seu-usuario
\`\`\`

### 2. Verificar Package

\`\`\`bash
# Verificar o que será publicado
npm pack --dry-run

# Verificar versão
npm version

# Rodar testes finais
npm test

# Verificar vulnerabilidades
npm audit
\`\`\`

### 3. Publicar

\`\`\`bash
# Primeira publicação
npm publish --access public

# Atualizações
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0
npm publish
\`\`\`

## Verificação Anthropic

Plugins verificados recebem um badge e aparecem em destaque nas buscas.

### Processo de Verificação

\`\`\`bash
# Submeter para verificação
claude plugin verify-submit @seu-usuario/plugin-nome

# Isso inicia:
# 1. Análise de segurança automatizada
# 2. Code review pela equipe Anthropic
# 3. Testes de compatibilidade
# 4. Verificação de permissões
\`\`\`

### Critérios de Verificação

| Critério | Requisito |
|----------|-----------|
| **Segurança** | Sem vulnerabilidades conhecidas |
| **Permissões** | Mínimas necessárias, bem documentadas |
| **Qualidade** | Testes, documentação, sem bugs críticos |
| **Manutenção** | Autor responsivo, atualizações regulares |
| **Utilidade** | Resolve problema real, não duplica funcionalidade |

### Benefícios de Verificação

- ✅ Badge "Verified" no registry
- ✅ Destaque nas buscas
- ✅ Maior confiança dos usuários
- ✅ Suporte prioritário

## Versionamento Semântico

\`\`\`
MAJOR.MINOR.PATCH

1.0.0 -> 1.0.1  (patch: bug fix)
1.0.0 -> 1.1.0  (minor: nova feature, backwards-compatible)
1.0.0 -> 2.0.0  (major: breaking change)
\`\`\`

### Changelog

\`\`\`markdown
# Changelog

## [1.1.0] - 2025-01-15

### Added
- Novo comando \`feature-x\`
- Suporte a configuração via env vars

### Changed
- Melhorada performance do comando principal

### Fixed
- Bug no parsing de argumentos

## [1.0.0] - 2025-01-01

### Added
- Release inicial
- Comando principal
- Documentação completa
\`\`\`

## Distribuição Alternativa

### Via GitHub Releases

\`\`\`bash
# Usuários podem instalar diretamente do GitHub
claude plugin install github:seu-usuario/plugin-nome

# Ou de uma release específica
claude plugin install github:seu-usuario/plugin-nome@v1.0.0
\`\`\`

### Via Arquivo Local

\`\`\`bash
# Para distribuição privada
claude plugin install ./path/to/plugin.tgz

# Ou via URL
claude plugin install https://internal.company.com/plugins/plugin.tgz
\`\`\`

## Monitoramento Pós-Publicação

### Métricas npm

\`\`\`bash
# Ver downloads
npm info @seu-usuario/plugin-nome

# Ou via npm-stat.com
\`\`\`

### Issues e Feedback

\`\`\`yaml
# .github/ISSUE_TEMPLATE/bug_report.md
name: Bug Report
about: Report a bug in the plugin
body:
  - type: input
    label: Plugin Version
    required: true
  - type: input
    label: Claude Code Version
    required: true
  - type: textarea
    label: Description
    required: true
  - type: textarea
    label: Steps to Reproduce
    required: true
\`\`\`
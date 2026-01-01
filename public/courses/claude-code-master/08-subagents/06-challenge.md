# Challenge: Plugin Enterprise

Chegou a hora de aplicar tudo que aprendeu criando um plugin de nível profissional.

## O Desafio

Crie um **Plugin de Project Analytics** que:

1. **Coleta métricas** do projeto atual
2. **Gera relatórios** de saúde do código
3. **Integra com CI/CD** para monitoramento contínuo
4. **Expõe dashboard** via comando

## Requisitos Funcionais

### Comando: \`analytics\`

\`\`\`bash
# Gerar relatório completo
claude analytics

# Métricas específicas
claude analytics --metrics=coverage,complexity,dependencies

# Formato de saída
claude analytics --format=json|markdown|html

# Comparar com baseline
claude analytics --compare=main
\`\`\`

### Métricas a Coletar

| Métrica | Descrição | Fonte |
|---------|-----------|-------|
| **Lines of Code** | Total de linhas | cloc/tokei |
| **Test Coverage** | % de cobertura | jest/vitest |
| **Complexity** | Cyclomatic complexity | eslint |
| **Dependencies** | Outdated/vulnerable | npm audit |
| **Git Stats** | Commits, contributors | git log |
| **Tech Debt** | Issues marcadas como debt | grep TODO/FIXME |

### Output Esperado

\`\`\`markdown
# 📊 Project Analytics Report

**Project:** my-app
**Generated:** 2025-01-15 10:30:00
**Compared to:** main (3 days ago)

## Summary

| Metric | Current | Previous | Change |
|--------|---------|----------|--------|
| Lines of Code | 15,234 | 14,890 | +344 ⬆️ |
| Test Coverage | 82.5% | 80.1% | +2.4% ✅ |
| Complexity (avg) | 4.2 | 4.5 | -0.3 ✅ |
| Dependencies | 45 | 43 | +2 ⚠️ |
| Vulnerabilities | 0 | 2 | -2 ✅ |
| Tech Debt Items | 12 | 15 | -3 ✅ |

## Health Score: 85/100 (Good) ⬆️ +3

### Breakdown
- 📦 Dependencies: 90/100
- 🧪 Testing: 85/100
- 🔄 Complexity: 80/100
- 🔒 Security: 95/100
- 📝 Documentation: 75/100

## Recommendations

1. **Update 2 outdated dependencies**
   - lodash: 4.17.20 → 4.17.21
   - axios: 1.5.0 → 1.6.0

2. **Improve coverage in src/utils/**
   - Current: 65%, Target: 80%

3. **Reduce complexity in src/services/api.ts**
   - Function processData has complexity 15 (max: 10)

## Trends (Last 7 Days)

\`\`\`
Coverage:  ▁▂▃▄▅▆▇ 82.5%
Complexity: ▇▆▅▄▃▂▁ 4.2
\`\`\`
\`\`\`

## Requisitos Técnicos

### Estrutura do Plugin

\`\`\`
plugin-project-analytics/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── commands/
│   │   └── analytics.ts
│   ├── collectors/
│   │   ├── index.ts
│   │   ├── loc.ts           # Lines of Code
│   │   ├── coverage.ts      # Test Coverage
│   │   ├── complexity.ts    # Cyclomatic Complexity
│   │   ├── dependencies.ts  # npm audit
│   │   ├── git.ts           # Git stats
│   │   └── techDebt.ts      # TODO/FIXME count
│   ├── reporters/
│   │   ├── index.ts
│   │   ├── markdown.ts
│   │   ├── json.ts
│   │   └── html.ts
│   ├── utils/
│   │   ├── cache.ts
│   │   ├── score.ts
│   │   └── trends.ts
│   └── types/
│       └── index.ts
├── tests/
│   ├── collectors/
│   └── reporters/
└── README.md
\`\`\`

### Permissões Necessárias

\`\`\`json
{
  "claude": {
    "permissions": [
      "filesystem:read",
      "exec:safe",
      "git:read",
      "network:fetch"
    ]
  }
}
\`\`\`

## Critérios de Avaliação

| Critério | Pontos | Descrição |
|----------|--------|-----------|
| **Funcionalidade** | 30 | Todas métricas funcionando |
| **Arquitetura** | 25 | Patterns corretos, código limpo |
| **Error Handling** | 15 | Erros tratados graciosamente |
| **Performance** | 10 | Caching, lazy loading |
| **Testing** | 10 | 80%+ coverage |
| **Documentação** | 10 | README completo, exemplos |
| **Total** | 100 | |

## Dicas

### 1. Comece Simples

\`\`\`typescript
// Primeiro: apenas LOC
const locCollector = {
  async collect(context: Context): Promise<number> {
    const result = await context.exec('find . -name "*.ts" | xargs wc -l');
    return parseInt(result.stdout);
  },
};
\`\`\`

### 2. Use Providers

\`\`\`typescript
interface MetricCollector {
  name: string;
  collect(context: Context): Promise<MetricResult>;
}

const collectors: MetricCollector[] = [
  new LocCollector(),
  new CoverageCollector(),
  new ComplexityCollector(),
];

// Executar todos em paralelo
const results = await Promise.all(
  collectors.map(c => c.collect(context))
);
\`\`\`

### 3. Cache Results

\`\`\`typescript
const cache = new Cache<AnalyticsReport>();

async function getReport(context: Context): Promise<AnalyticsReport> {
  const cacheKey = \`\${context.projectPath}-\${context.gitHash}\`;

  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const report = await generateReport(context);
  cache.set(cacheKey, report, 300000); // 5 min
  return report;
}
\`\`\`

### 4. Handle Errors Gracefully

\`\`\`typescript
async function collectSafely(collector: MetricCollector): Promise<MetricResult> {
  try {
    return await collector.collect(context);
  } catch (error) {
    return {
      name: collector.name,
      success: false,
      error: error.message,
      value: null,
    };
  }
}
\`\`\`

## Entrega

1. **Repositório GitHub** com código completo
2. **Publicado no npm** (pode ser versão 0.x)
3. **README** com instruções de instalação e uso
4. **Demo** mostrando o plugin funcionando

## Bônus (+20 pontos)

- [ ] **+5**: Hook que roda analytics em cada commit
- [ ] **+5**: Comparação com branches diferentes
- [ ] **+5**: Integração com GitHub Actions
- [ ] **+5**: Dashboard HTML interativo

## Template Inicial

\`\`\`typescript
// src/index.ts
import type { Plugin } from '@anthropic/claude-code-plugin';
import { analyticsCommand } from './commands/analytics';

const plugin: Plugin = {
  name: 'project-analytics',
  version: '1.0.0',

  async onLoad(context) {
    console.log('📊 Project Analytics loaded');
  },

  commands: {
    'analytics': analyticsCommand,
  },

  hooks: {
    // Bônus: rodar após cada commit
    'git:commit:after': async (hash, context) => {
      if (context.config.autoAnalytics) {
        await runQuickAnalytics(context);
      }
    },
  },
};

export default plugin;
\`\`\`

---

> **Boa sorte!** Este é um projeto desafiador que demonstra domínio completo do sistema de plugins. Ao completá-lo, você terá criado uma ferramenta real que pode usar em todos seus projetos.
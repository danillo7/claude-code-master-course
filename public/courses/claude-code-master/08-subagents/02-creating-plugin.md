# Criando seu Primeiro Plugin

Vamos criar um plugin completo do zero - um **Git Conventional Commit Helper** que ajuda a criar commits seguindo convenções.

## Setup Inicial

\`\`\`bash
# Criar diretório do plugin
mkdir claude-plugin-conventional-commit
cd claude-plugin-conventional-commit

# Inicializar npm
npm init -y

# Instalar dependências
npm install typescript @types/node --save-dev

# Criar estrutura
mkdir -p src/{commands,utils}
\`\`\`

## Configurar TypeScript

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "declaration": true,
    "strict": true,
    "noImplicitAny": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

## Package.json Completo

\`\`\`json
{
  "name": "@seu-usuario/claude-conventional-commit",
  "version": "1.0.0",
  "description": "Conventional commit helper for Claude Code",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "jest",
    "prepublishOnly": "npm run build"
  },
  "claude": {
    "type": "plugin",
    "minVersion": "1.0.0",
    "permissions": [
      "git:read",
      "git:write"
    ],
    "provides": {
      "commands": ["cc", "conventional-commit"]
    }
  },
  "keywords": [
    "claude-code-plugin",
    "git",
    "conventional-commits"
  ],
  "author": "Seu Nome",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
\`\`\`

## Implementar o Plugin

### Entry Point (src/index.ts)

\`\`\`typescript
// src/index.ts
import { commitCommand } from './commands/commit';
import type { Plugin, PluginContext } from '@anthropic/claude-code-plugin';

const plugin: Plugin = {
  name: 'conventional-commit',
  version: '1.0.0',

  // Lifecycle hooks
  async onLoad(context: PluginContext) {
    console.log('Conventional Commit plugin loaded!');
  },

  async onUnload() {
    console.log('Conventional Commit plugin unloaded!');
  },

  // Commands provided
  commands: {
    'cc': commitCommand,
    'conventional-commit': commitCommand,
  },
};

export default plugin;
\`\`\`

### Command Implementation (src/commands/commit.ts)

\`\`\`typescript
// src/commands/commit.ts
import type { Command, CommandContext } from '@anthropic/claude-code-plugin';
import { getGitDiff, getStagedFiles } from '../utils/git';
import { generateCommitMessage } from '../utils/ai';

interface CommitArgs {
  type?: string;
  scope?: string;
  message?: string;
  breaking?: boolean;
}

export const commitCommand: Command<CommitArgs> = {
  description: 'Create a conventional commit with AI assistance',

  args: {
    type: {
      description: 'Commit type (feat, fix, docs, etc.)',
      required: false,
    },
    scope: {
      description: 'Scope of the change',
      required: false,
    },
    message: {
      description: 'Commit message (auto-generated if not provided)',
      required: false,
    },
    breaking: {
      description: 'Mark as breaking change',
      type: 'boolean',
      default: false,
    },
  },

  async handler(args: CommitArgs, context: CommandContext) {
    // 1. Verificar se há arquivos staged
    const stagedFiles = await getStagedFiles();
    if (stagedFiles.length === 0) {
      return {
        success: false,
        message: 'Nenhum arquivo staged. Use: git add <files>',
      };
    }

    // 2. Determinar tipo do commit
    const type = args.type || await promptCommitType(context);

    // 3. Determinar scope (opcional)
    const scope = args.scope || await detectScope(stagedFiles);

    // 4. Gerar mensagem se não fornecida
    let message = args.message;
    if (!message) {
      const diff = await getGitDiff();
      message = await generateCommitMessage(diff, type, context);
    }

    // 5. Construir commit message
    const breaking = args.breaking ? '!' : '';
    const scopePart = scope ? \`(\${scope})\` : '';
    const fullMessage = \`\${type}\${scopePart}\${breaking}: \${message}\`;

    // 6. Executar commit
    const result = await context.exec(\`git commit -m "\${fullMessage}"\`);

    return {
      success: true,
      message: \`Commit criado: \${fullMessage}\`,
      data: { hash: result.stdout.match(/[a-f0-9]{7}/)?.[0] },
    };
  },
};

// Helper: Prompt para tipo de commit
async function promptCommitType(context: CommandContext): Promise<string> {
  const types = [
    { value: 'feat', label: 'feat - Nova funcionalidade' },
    { value: 'fix', label: 'fix - Correção de bug' },
    { value: 'docs', label: 'docs - Documentação' },
    { value: 'style', label: 'style - Formatação' },
    { value: 'refactor', label: 'refactor - Refatoração' },
    { value: 'test', label: 'test - Testes' },
    { value: 'chore', label: 'chore - Manutenção' },
  ];

  const selected = await context.prompt({
    type: 'select',
    message: 'Tipo do commit:',
    choices: types,
  });

  return selected.value;
}

// Helper: Detectar scope baseado em arquivos
async function detectScope(files: string[]): Promise<string | undefined> {
  const scopes = new Set<string>();

  for (const file of files) {
    if (file.startsWith('src/components/')) scopes.add('components');
    else if (file.startsWith('src/hooks/')) scopes.add('hooks');
    else if (file.startsWith('src/utils/')) scopes.add('utils');
    else if (file.startsWith('tests/')) scopes.add('tests');
    else if (file.startsWith('docs/')) scopes.add('docs');
  }

  if (scopes.size === 1) {
    return Array.from(scopes)[0];
  }

  return undefined; // Multiple scopes, don't auto-detect
}
\`\`\`

### Utils (src/utils/git.ts)

\`\`\`typescript
// src/utils/git.ts
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function getStagedFiles(): Promise<string[]> {
  const { stdout } = await execAsync('git diff --cached --name-only');
  return stdout.trim().split('\\n').filter(Boolean);
}

export async function getGitDiff(): Promise<string> {
  const { stdout } = await execAsync('git diff --cached');
  return stdout;
}

export async function getCurrentBranch(): Promise<string> {
  const { stdout } = await execAsync('git branch --show-current');
  return stdout.trim();
}
\`\`\`

### AI Helper (src/utils/ai.ts)

\`\`\`typescript
// src/utils/ai.ts
import type { CommandContext } from '@anthropic/claude-code-plugin';

export async function generateCommitMessage(
  diff: string,
  type: string,
  context: CommandContext
): Promise<string> {
  // Usar o Claude via context para gerar mensagem
  const response = await context.ai.complete({
    prompt: \`Analise o seguinte diff git e gere uma mensagem de commit concisa (máx 50 caracteres) para um commit do tipo "\${type}":

\`\`\`diff
\${diff.slice(0, 3000)} // Limitar tamanho
\`\`\`

Responda APENAS com a mensagem, sem aspas ou prefixos.\`,
  });

  return response.text.trim();
}
\`\`\`

## Testando Localmente

\`\`\`bash
# Build do plugin
npm run build

# Instalar localmente para teste
claude plugin install ./

# Testar o comando
git add .
claude cc

# Ou com argumentos
claude cc --type=feat --scope=auth --message="add login"
\`\`\`

## Estrutura Final

\`\`\`
claude-plugin-conventional-commit/
├── package.json
├── tsconfig.json
├── README.md
├── LICENSE
├── src/
│   ├── index.ts              # Entry point
│   ├── commands/
│   │   └── commit.ts         # Comando principal
│   └── utils/
│       ├── git.ts            # Git helpers
│       └── ai.ts             # AI integration
├── tests/
│   ├── commit.test.ts
│   └── utils.test.ts
└── dist/                     # Build output
    └── ...
\`\`\`

## Próximos Passos

Na próxima lição, veremos como:
1. Adicionar testes automatizados
2. Publicar no npm registry
3. Submeter para verificação da Anthropic
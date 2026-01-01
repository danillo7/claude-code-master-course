# Best Practices e Design Patterns

Crie plugins robustos, maintainable e de alta performance.

## Patterns Arquiteturais

### 1. Command Pattern

Cada comando é um objeto isolado e testável:

\`\`\`typescript
// ✅ Bom: Comandos como objetos
interface Command<T = unknown> {
  name: string;
  description: string;
  args: ArgSpec;
  validate: (args: T) => ValidationResult;
  execute: (args: T, context: Context) => Promise<Result>;
}

const myCommand: Command<MyArgs> = {
  name: 'my-command',
  description: 'Does something useful',
  args: { /* ... */ },
  validate: (args) => {
    if (!args.required) {
      return { valid: false, error: 'Missing required arg' };
    }
    return { valid: true };
  },
  execute: async (args, context) => {
    // Implementação
  },
};

// ❌ Evite: Funções soltas
function myCommand(args) {
  // Difícil de testar, sem validação clara
}
\`\`\`

### 2. Provider Pattern

Abstraia integrações externas:

\`\`\`typescript
// Provider interface
interface DataProvider {
  name: string;
  fetch(query: Query): Promise<Data[]>;
  mutate?(mutation: Mutation): Promise<Result>;
}

// Implementação específica
class JiraProvider implements DataProvider {
  name = 'jira';

  constructor(private config: JiraConfig) {}

  async fetch(query: Query): Promise<Issue[]> {
    return await this.client.search(query);
  }
}

class GitHubProvider implements DataProvider {
  name = 'github';

  async fetch(query: Query): Promise<Issue[]> {
    return await this.octokit.issues.list(query);
  }
}

// Plugin usa providers abstratos
const plugin: Plugin = {
  providers: {
    issues: new JiraProvider(config),
    // Fácil trocar: issues: new GitHubProvider(config),
  },
};
\`\`\`

### 3. Middleware Pattern

Chain of responsibility para hooks:

\`\`\`typescript
type Middleware = (
  context: Context,
  next: () => Promise<void>
) => Promise<void>;

// Middlewares reutilizáveis
const loggingMiddleware: Middleware = async (ctx, next) => {
  console.log('Before:', ctx.command);
  await next();
  console.log('After:', ctx.result);
};

const authMiddleware: Middleware = async (ctx, next) => {
  if (!ctx.user.authenticated) {
    throw new Error('Unauthorized');
  }
  await next();
};

const timingMiddleware: Middleware = async (ctx, next) => {
  const start = Date.now();
  await next();
  console.log(\`Duration: \${Date.now() - start}ms\`);
};

// Compor middlewares
const plugin: Plugin = {
  middleware: [
    loggingMiddleware,
    authMiddleware,
    timingMiddleware,
  ],
};
\`\`\`

### 4. Factory Pattern

Criar objetos complexos:

\`\`\`typescript
class CommandFactory {
  static create(type: string, options: Options): Command {
    switch (type) {
      case 'git':
        return new GitCommand(options);
      case 'file':
        return new FileCommand(options);
      case 'api':
        return new ApiCommand(options);
      default:
        throw new Error(\`Unknown command type: \${type}\`);
    }
  }
}

// Uso
const cmd = CommandFactory.create('git', { repo: '.' });
\`\`\`

## Error Handling

### Custom Errors

\`\`\`typescript
// Hierarquia de erros
class PluginError extends Error {
  constructor(
    message: string,
    public code: string,
    public recoverable: boolean = true
  ) {
    super(message);
    this.name = 'PluginError';
  }
}

class ValidationError extends PluginError {
  constructor(field: string, issue: string) {
    super(\`Validation failed: \${field} - \${issue}\`, 'VALIDATION_ERROR');
  }
}

class PermissionError extends PluginError {
  constructor(permission: string) {
    super(\`Missing permission: \${permission}\`, 'PERMISSION_ERROR', false);
  }
}

class NetworkError extends PluginError {
  constructor(url: string, status: number) {
    super(\`Network error: \${url} returned \${status}\`, 'NETWORK_ERROR');
  }
}

// Uso
try {
  await fetchData();
} catch (error) {
  if (error instanceof ValidationError) {
    context.log({ level: 'warn', message: error.message });
    return { success: false, error: error.message };
  }
  if (error instanceof PermissionError) {
    throw error; // Re-throw non-recoverable
  }
  // Unknown error
  throw new PluginError('Unexpected error', 'UNKNOWN', false);
}
\`\`\`

### Result Pattern

Evite exceções para erros esperados:

\`\`\`typescript
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const user = await api.getUser(id);
    if (!user) {
      return { success: false, error: new Error('User not found') };
    }
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error };
  }
}

// Uso - sem try/catch
const result = await fetchUser('123');
if (!result.success) {
  console.error('Failed:', result.error.message);
  return;
}
console.log('User:', result.data.name);
\`\`\`

## Performance

### 1. Lazy Loading

\`\`\`typescript
// ✅ Bom: Carregar sob demanda
const plugin: Plugin = {
  commands: {
    'heavy-command': {
      // Módulo carregado apenas quando comando é usado
      handler: async (args, context) => {
        const { HeavyProcessor } = await import('./heavy-processor');
        return new HeavyProcessor().run(args);
      },
    },
  },
};

// ❌ Evite: Carregar tudo no início
import { HeavyProcessor } from './heavy-processor'; // Carrega sempre
\`\`\`

### 2. Caching

\`\`\`typescript
class Cache<T> {
  private data = new Map<string, { value: T; expires: number }>();

  get(key: string): T | undefined {
    const item = this.data.get(key);
    if (!item) return undefined;
    if (Date.now() > item.expires) {
      this.data.delete(key);
      return undefined;
    }
    return item.value;
  }

  set(key: string, value: T, ttlMs: number): void {
    this.data.set(key, {
      value,
      expires: Date.now() + ttlMs,
    });
  }
}

// Uso no plugin
const cache = new Cache<ApiResponse>();

async function fetchWithCache(url: string): Promise<ApiResponse> {
  const cached = cache.get(url);
  if (cached) return cached;

  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data, 60000); // 1 minuto
  return data;
}
\`\`\`

### 3. Debouncing

\`\`\`typescript
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delayMs);
  };
}

// Uso em hook de file watch
const handleFileChange = debounce(async (path: string) => {
  await reindex(path);
}, 500);
\`\`\`

## Testing

### Unit Tests

\`\`\`typescript
// tests/commands/commit.test.ts
import { commitCommand } from '../../src/commands/commit';
import { createMockContext } from '../helpers';

describe('commitCommand', () => {
  it('should validate commit message format', async () => {
    const context = createMockContext();

    const result = await commitCommand.handler(
      { type: 'feat', message: 'add login' },
      context
    );

    expect(result.success).toBe(true);
    expect(context.exec).toHaveBeenCalledWith(
      expect.stringContaining('feat: add login')
    );
  });

  it('should fail without staged files', async () => {
    const context = createMockContext({ stagedFiles: [] });

    const result = await commitCommand.handler({}, context);

    expect(result.success).toBe(false);
    expect(result.message).toContain('Nenhum arquivo staged');
  });
});
\`\`\`

### Integration Tests

\`\`\`typescript
// tests/integration/plugin.test.ts
import { loadPlugin, unloadPlugin } from '../helpers';

describe('Plugin Integration', () => {
  let plugin: Plugin;

  beforeAll(async () => {
    plugin = await loadPlugin('./dist/index.js');
  });

  afterAll(async () => {
    await unloadPlugin(plugin);
  });

  it('should load and unload correctly', () => {
    expect(plugin.name).toBe('my-plugin');
  });

  it('should register commands', () => {
    expect(plugin.commands).toHaveProperty('my-command');
  });
});
\`\`\`

## Checklist Final

\`\`\`markdown
## Plugin Quality Checklist

### Architecture
- [ ] Commands como objetos isolados
- [ ] Providers abstratos para integrações
- [ ] Error handling com tipos específicos
- [ ] Result pattern para erros esperados

### Performance
- [ ] Lazy loading de módulos pesados
- [ ] Caching de dados externos
- [ ] Debounce de operações frequentes
- [ ] Sem operações síncronas bloqueantes

### Testing
- [ ] Unit tests para cada comando
- [ ] Integration tests para hooks
- [ ] Mocks para dependências externas
- [ ] 80%+ code coverage

### Security
- [ ] Input validation em todos comandos
- [ ] Permissões mínimas necessárias
- [ ] Sem secrets hardcoded
- [ ] Sanitização de output

### Documentation
- [ ] README completo
- [ ] JSDoc em funções públicas
- [ ] Changelog atualizado
- [ ] Exemplos de uso
\`\`\`
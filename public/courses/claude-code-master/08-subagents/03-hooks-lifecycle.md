# Hooks e Lifecycle de Plugins

Plugins podem reagir a eventos do Claude Code através de um sistema robusto de hooks.

## Lifecycle de um Plugin

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                      PLUGIN LIFECYCLE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐ │
│   │  INSTALL │───▶│   LOAD   │───▶│  ACTIVE  │───▶│  UNLOAD  │ │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘ │
│        │               │               │               │        │
│        ▼               ▼               ▼               ▼        │
│   onInstall()     onLoad()        hooks...       onUnload()    │
│   - Download      - Init          - Events       - Cleanup     │
│   - Verify        - Connect       - Commands     - Save state  │
│   - Permissions   - Load config   - Providers                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

## Hooks Disponíveis

### 1. Session Hooks

\`\`\`typescript
const plugin: Plugin = {
  hooks: {
    // Quando uma sessão Claude inicia
    'session:start': async (context) => {
      console.log('Sessão iniciada:', context.sessionId);
      await loadUserPreferences(context);
    },

    // Quando uma sessão termina
    'session:end': async (context) => {
      console.log('Sessão finalizada');
      await saveSessionMetrics(context);
    },

    // Quando o contexto muda (novo arquivo, diretório)
    'context:change': async (context) => {
      console.log('Novo contexto:', context.workingDirectory);
    },
  },
};
\`\`\`

### 2. Command Hooks

\`\`\`typescript
const plugin: Plugin = {
  hooks: {
    // Antes de qualquer comando executar
    'command:before': async (command, args, context) => {
      console.log(\`Executando: \${command}\`, args);

      // Pode modificar args
      return { ...args, enhanced: true };
    },

    // Depois de qualquer comando
    'command:after': async (command, result, context) => {
      // Log de auditoria
      await auditLog.record({
        command,
        result: result.success,
        timestamp: new Date(),
      });
    },

    // Quando um comando falha
    'command:error': async (command, error, context) => {
      await errorReporter.send(error);
    },
  },
};
\`\`\`

### 3. File Hooks

\`\`\`typescript
const plugin: Plugin = {
  hooks: {
    // Antes de ler um arquivo
    'file:read:before': async (path, context) => {
      // Verificar permissões
      if (isSensitive(path)) {
        throw new Error('Arquivo sensível - acesso negado');
      }
    },

    // Depois de ler um arquivo
    'file:read:after': async (path, content, context) => {
      // Decrypt se necessário
      if (isEncrypted(path)) {
        return decrypt(content);
      }
      return content;
    },

    // Antes de escrever
    'file:write:before': async (path, content, context) => {
      // Validar conteúdo
      if (path.endsWith('.json')) {
        JSON.parse(content); // Valida JSON
      }

      // Pode modificar conteúdo
      return addHeader(content);
    },

    // Depois de escrever
    'file:write:after': async (path, context) => {
      // Trigger backup
      await backupService.snapshot(path);
    },
  },
};
\`\`\`

### 4. Git Hooks

\`\`\`typescript
const plugin: Plugin = {
  hooks: {
    // Antes de commit
    'git:commit:before': async (message, files, context) => {
      // Validar mensagem
      if (!isConventionalCommit(message)) {
        throw new Error('Use conventional commits!');
      }

      // Rodar linter nos arquivos
      for (const file of files) {
        await lintFile(file);
      }
    },

    // Depois de commit
    'git:commit:after': async (hash, context) => {
      // Notificar
      await slack.notify(\`Novo commit: \${hash}\`);
    },

    // Antes de push
    'git:push:before': async (branch, context) => {
      // Rodar testes
      const testResult = await runTests();
      if (!testResult.success) {
        throw new Error('Tests failed! Push aborted.');
      }
    },
  },
};
\`\`\`

### 5. AI Hooks

\`\`\`typescript
const plugin: Plugin = {
  hooks: {
    // Antes de enviar prompt para Claude
    'ai:prompt:before': async (prompt, context) => {
      // Adicionar contexto
      return \`[Project: \${context.projectName}]\\n\${prompt}\`;
    },

    // Depois de receber resposta
    'ai:response:after': async (response, context) => {
      // Log para analytics
      await analytics.track('ai_response', {
        tokens: response.usage.totalTokens,
        model: response.model,
      });

      return response;
    },
  },
};
\`\`\`

## Hook Priorities

Múltiplos plugins podem registrar o mesmo hook. A ordem é controlada por priority:

\`\`\`typescript
const plugin: Plugin = {
  hooks: {
    'git:commit:before': {
      priority: 100, // Higher = runs first (default: 50)
      handler: async (message, files, context) => {
        // Este roda antes de plugins com priority menor
      },
    },
  },
};
\`\`\`

## Exemplo: Plugin de Segurança Completo

\`\`\`typescript
// plugin-security-guard/src/index.ts
import type { Plugin } from '@anthropic/claude-code-plugin';

const SENSITIVE_PATTERNS = [
  /password\s*=\s*["'][^"']+["']/i,
  /api[_-]?key\s*=\s*["'][^"']+["']/i,
  /secret\s*=\s*["'][^"']+["']/i,
  /AWS_[A-Z_]+\s*=\s*["'][^"']+["']/i,
];

const plugin: Plugin = {
  name: 'security-guard',
  version: '1.0.0',

  async onLoad(context) {
    console.log('🛡️ Security Guard ativo');
  },

  hooks: {
    // Verificar antes de commit
    'git:commit:before': {
      priority: 100, // Alta prioridade - rodar primeiro
      handler: async (message, files, context) => {
        const issues: string[] = [];

        for (const file of files) {
          const content = await context.readFile(file);

          for (const pattern of SENSITIVE_PATTERNS) {
            if (pattern.test(content)) {
              issues.push(\`⚠️ Possível secret em \${file}\`);
            }
          }
        }

        if (issues.length > 0) {
          throw new Error([
            '🚨 SECURITY ALERT - Commit bloqueado!',
            '',
            ...issues,
            '',
            'Remova os secrets antes de commitar.',
          ].join('\\n'));
        }
      },
    },

    // Verificar antes de escrever arquivo
    'file:write:before': async (path, content, context) => {
      // Não permitir .env em projeto
      if (path.endsWith('.env') && !path.includes('.example')) {
        throw new Error('Não commite arquivos .env! Use .env.example');
      }

      return content;
    },

    // Log de auditoria
    'command:after': async (command, result, context) => {
      if (command.includes('rm') || command.includes('delete')) {
        await context.log({
          level: 'warn',
          message: \`Comando destrutivo executado: \${command}\`,
          timestamp: new Date(),
        });
      }
    },
  },
};

export default plugin;
\`\`\`

## Best Practices

### 1. Hooks Assíncronos
\`\`\`typescript
// ✅ Bom: async/await
'file:read:after': async (path, content) => {
  return await transform(content);
}

// ❌ Evite: callbacks
'file:read:after': (path, content, callback) => {
  transform(content, callback);
}
\`\`\`

### 2. Error Handling
\`\`\`typescript
'command:before': async (cmd, args, context) => {
  try {
    await validateCommand(cmd);
  } catch (error) {
    // Log mas não bloqueia
    context.log({ level: 'warn', message: error.message });
    // Ou: throw error; // Bloqueia a execução
  }
}
\`\`\`

### 3. Performance
\`\`\`typescript
// ❌ Evite: operações lentas em hooks frequentes
'ai:prompt:before': async (prompt) => {
  await fetch('https://api.slow.com/log'); // LENTO!
}

// ✅ Bom: operações async não-bloqueantes
'ai:prompt:before': async (prompt) => {
  // Fire and forget
  logAsync(prompt).catch(console.error);
  return prompt;
}
\`\`\`
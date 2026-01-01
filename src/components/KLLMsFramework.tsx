import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers, Brain, Zap, Target, GitMerge, BarChart3,
  CheckCircle2, ArrowRight, Star, Code2, Lightbulb,
  TrendingUp, AlertTriangle, Clock, DollarSign, Shield,
  Users, Sparkles, Network, MessageSquare, Settings,
  Play, ChevronDown, ChevronUp, Quote, ExternalLink
} from 'lucide-react';

interface KLLMsFrameworkProps {
  onClose?: () => void;
}

interface LLMModel {
  id: string;
  name: string;
  provider: string;
  specialty: string;
  strengths: string[];
  color: string;
  gradient: string;
}

interface UseCase {
  scenario: string;
  problem: string;
  kllmSolution: string;
  models: string[];
  benefit: string;
}

const LLM_MODELS: LLMModel[] = [
  {
    id: 'gpt4',
    name: 'GPT-4',
    provider: 'OpenAI',
    specialty: 'Raciocinio Geral',
    strengths: ['Versatilidade', 'Contexto longo', 'Instruções complexas'],
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    provider: 'Anthropic',
    specialty: 'Analise & Codigo',
    strengths: ['Codigo limpo', 'Analise profunda', 'Seguranca'],
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    id: 'gemini',
    name: 'Gemini Pro',
    provider: 'Google',
    specialty: 'Multimodal',
    strengths: ['Imagens', 'Video', 'Conhecimento amplo'],
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'llama',
    name: 'Llama 3',
    provider: 'Meta',
    specialty: 'Open Source',
    strengths: ['Customizavel', 'On-premise', 'Privacidade'],
    color: 'purple',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    id: 'mistral',
    name: 'Mistral Large',
    provider: 'Mistral AI',
    specialty: 'Eficiencia',
    strengths: ['Rapido', 'Custo-efetivo', 'Europeu'],
    color: 'rose',
    gradient: 'from-rose-500 to-pink-500'
  }
];

const USE_CASES: UseCase[] = [
  {
    scenario: 'Due Diligence',
    problem: 'Analisar 1000+ documentos em M&A',
    kllmSolution: 'K modelos analisam em paralelo, synthesizer consolida',
    models: ['GPT-4', 'Claude', 'Gemini'],
    benefit: '10x mais rapido, 95% menos erros'
  },
  {
    scenario: 'Decisao Critica',
    problem: 'Recomendacao com alto impacto financeiro',
    kllmSolution: 'K modelos dao opiniao, weighted voting com confianca',
    models: ['Claude', 'GPT-4', 'Mistral'],
    benefit: 'Reducao de vies, maior confiabilidade'
  },
  {
    scenario: 'Geracao de Codigo',
    problem: 'Implementacao de feature complexa',
    kllmSolution: 'Cada modelo gera versao, best-of-K selection',
    models: ['Claude', 'GPT-4', 'Llama'],
    benefit: 'Codigo mais robusto, multiplas perspectivas'
  },
  {
    scenario: 'Analise de Risco',
    problem: 'Identificar riscos em portfolio',
    kllmSolution: 'Modelos especializados + modelo generalista',
    models: ['GPT-4', 'Claude', 'Gemini'],
    benefit: 'Cobertura 360, riscos ocultos detectados'
  }
];

const TRADEOFFS = [
  { aspect: 'Latencia', single: 'Baixa (~1s)', kllm: 'Media (paralelo: ~2s)', winner: 'single' },
  { aspect: 'Custo', single: '$1x', kllm: '$Kx (K modelos)', winner: 'single' },
  { aspect: 'Qualidade', single: 'Boa', kllm: 'Excelente (ensemble)', winner: 'kllm' },
  { aspect: 'Confiabilidade', single: 'Variavel', kllm: 'Alta (redundancia)', winner: 'kllm' },
  { aspect: 'Explicabilidade', single: 'Limitada', kllm: 'Rica (multiplas perspectivas)', winner: 'kllm' },
  { aspect: 'Complexidade', single: 'Baixa', kllm: 'Alta (orquestracao)', winner: 'single' }
];

const IMPLEMENTATION_PHASES = [
  {
    phase: 1,
    title: 'Fundacao',
    duration: '2-4 semanas',
    tasks: ['Infra multi-provider', 'Rate limiting', 'Fallback basico'],
    color: 'cyan'
  },
  {
    phase: 2,
    title: 'Orquestracao',
    duration: '4-6 semanas',
    tasks: ['Router inteligente', 'Execucao paralela', 'Coleta de respostas'],
    color: 'blue'
  },
  {
    phase: 3,
    title: 'Sintese',
    duration: '4-8 semanas',
    tasks: ['Synthesizer LLM', 'Confidence scoring', 'Conflict resolution'],
    color: 'violet'
  },
  {
    phase: 4,
    title: 'Otimizacao',
    duration: 'Continuo',
    tasks: ['A/B testing', 'Metricas de qualidade', 'Tuning dinamico'],
    color: 'purple'
  }
];

export const KLLMsFramework: React.FC<KLLMsFrameworkProps> = () => {
  const [activeTab, setActiveTab] = useState<'concept' | 'architecture' | 'usecases' | 'implementation'>('concept');
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Unified Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 to-violet-500/20
                          border border-indigo-500/30 rounded-full px-6 py-2 mb-6">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Palantir Architecture</span>
            <span className="px-2 py-0.5 bg-violet-500/30 rounded-full text-xs text-violet-200">HOT</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              K-LLMs Architecture
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
            "The future of AI-enabled operations is not an LLM; it is K-LLMs."
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-500">
            <Quote className="w-4 h-4" />
            <span className="text-sm">Shyam Sankar, CTO Palantir @ AIPCon 2023</span>
            <a
              href="https://www.youtube.com/watch?v=wS5xRxGnqIQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'concept', label: 'Conceito', icon: Lightbulb },
            { id: 'architecture', label: 'Arquitetura', icon: Network },
            { id: 'usecases', label: 'Use Cases', icon: Target },
            { id: 'implementation', label: 'Implementacao', icon: Code2 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Concept Tab */}
          {activeTab === 'concept' && (
            <motion.div
              key="concept"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* What is K-LLMs */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="w-7 h-7 text-indigo-400" />
                  O que e K-LLMs?
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-slate-300 leading-relaxed">
                      <strong className="text-indigo-400">K-LLMs</strong> e o paradigma de usar{' '}
                      <span className="text-white font-medium">K modelos de linguagem em paralelo</span>,
                      sintetizando suas respostas para obter resultados superiores.
                    </p>

                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                      <h4 className="text-sm font-medium text-indigo-300 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Principios Fundamentais
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Diversidade de perspectivas',
                          'Reducao de vieses individuais',
                          'Redundancia para confiabilidade',
                          'Especializacao por tarefa'
                        ].map((principle) => (
                          <li key={principle} className="text-sm text-slate-400 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            {principle}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-xl p-6 border border-indigo-500/20">
                    <h4 className="text-lg font-bold text-white mb-4">Analogia: Conselho de Especialistas</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Assim como decisoes criticas em empresas sao tomadas por um conselho
                      (nao por uma unica pessoa), K-LLMs consulta multiplos "especialistas IA"
                      para decisoes mais robustas.
                    </p>
                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                      <Users className="w-5 h-5 text-indigo-400" />
                      <span>1 LLM = 1 Consultor | K-LLMs = Board of Directors</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why K-LLMs */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Shield,
                    title: 'Reducao de Risco',
                    description: 'Multiplos modelos reduzem chance de erros criticos',
                    color: 'emerald'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Qualidade Superior',
                    description: 'Ensemble de modelos supera qualquer modelo individual',
                    color: 'blue'
                  },
                  {
                    icon: Zap,
                    title: 'Especializacao',
                    description: 'Cada modelo contribui com sua expertise unica',
                    color: 'amber'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6
                               hover:border-indigo-500/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${benefit.color}-500/20
                                    flex items-center justify-center mb-4`}>
                      <benefit.icon className={`w-6 h-6 text-${benefit.color}-400`} />
                    </div>
                    <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trade-offs Table */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                  Trade-offs: Single LLM vs K-LLMs
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Aspecto</th>
                        <th className="text-center py-3 px-4 text-slate-400 font-medium">Single LLM</th>
                        <th className="text-center py-3 px-4 text-slate-400 font-medium">K-LLMs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TRADEOFFS.map((row) => (
                        <tr key={row.aspect} className="border-b border-slate-700/50">
                          <td className="py-3 px-4 text-white font-medium">{row.aspect}</td>
                          <td className={`py-3 px-4 text-center ${row.winner === 'single' ? 'text-emerald-400' : 'text-slate-400'}`}>
                            {row.single}
                            {row.winner === 'single' && <CheckCircle2 className="w-4 h-4 inline ml-2" />}
                          </td>
                          <td className={`py-3 px-4 text-center ${row.winner === 'kllm' ? 'text-emerald-400' : 'text-slate-400'}`}>
                            {row.kllm}
                            {row.winner === 'kllm' && <CheckCircle2 className="w-4 h-4 inline ml-2" />}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm text-slate-500 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Use K-LLMs quando qualidade e confiabilidade importam mais que custo/latencia
                </p>
              </div>
            </motion.div>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Architecture Diagram */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Network className="w-7 h-7 text-indigo-400" />
                  Arquitetura K-LLMs
                </h2>

                {/* ASCII-style Flow Diagram */}
                <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                  <pre className="text-slate-300">
{`                    ┌─────────────────┐
                    │     QUERY       │
                    │    (Input)      │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │     ROUTER      │
                    │  (Orchestrator) │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼───────┐   ┌───────▼───────┐   ┌───────▼───────┐
│    LLM #1     │   │    LLM #2     │   │    LLM #K     │
│   (GPT-4)     │   │   (Claude)    │   │   (Gemini)    │
└───────┬───────┘   └───────┬───────┘   └───────┬───────┘
        │                   │                   │
        │  Response #1      │  Response #2      │  Response #K
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                   ┌────────▼────────┐
                   │   SYNTHESIZER   │
                   │  (Meta-LLM)     │
                   │                 │
                   │ - Merge logic   │
                   │ - Confidence    │
                   │ - Conflicts     │
                   └────────┬────────┘
                            │
                   ┌────────▼────────┐
                   │  FINAL ANSWER   │
                   │  (Synthesized)  │
                   └─────────────────┘`}
                  </pre>
                </div>
              </div>

              {/* Component Details */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Router',
                    icon: GitMerge,
                    description: 'Distribui a query para os K modelos selecionados',
                    details: ['Selecao de modelos por tarefa', 'Load balancing', 'Retry logic'],
                    color: 'cyan'
                  },
                  {
                    title: 'K LLMs',
                    icon: Brain,
                    description: 'Modelos processam em paralelo, cada um com sua perspectiva',
                    details: ['Execucao paralela', 'Timeout handling', 'Fallback models'],
                    color: 'rose'
                  },
                  {
                    title: 'Synthesizer',
                    icon: Sparkles,
                    description: 'Meta-modelo que consolida as K respostas',
                    details: ['Conflict resolution', 'Confidence scoring', 'Best-of-K selection'],
                    color: 'violet'
                  }
                ].map((component, index) => (
                  <motion.div
                    key={component.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${component.color}-500/20
                                    flex items-center justify-center mb-4`}>
                      <component.icon className={`w-6 h-6 text-${component.color}-400`} />
                    </div>
                    <h3 className="font-bold text-white mb-2">{component.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{component.description}</p>
                    <ul className="space-y-1">
                      {component.details.map((detail) => (
                        <li key={detail} className="text-xs text-slate-500 flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-indigo-400" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* LLM Models Grid */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Layers className="w-6 h-6 text-indigo-400" />
                  Modelos Disponiveis para K-LLMs
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {LLM_MODELS.map((model, index) => (
                    <motion.div
                      key={model.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
                      className={`bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 cursor-pointer
                                  hover:border-${model.color}-500/50 transition-all
                                  ${expandedModel === model.id ? 'ring-2 ring-indigo-500/50' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${model.gradient}
                                          flex items-center justify-center`}>
                            <Brain className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{model.name}</h4>
                            <p className="text-xs text-slate-500">{model.provider}</p>
                          </div>
                        </div>
                        {expandedModel === model.id ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>

                      <span className={`inline-block px-2 py-1 text-xs rounded-full
                                       bg-${model.color}-500/20 text-${model.color}-300
                                       border border-${model.color}-500/30`}>
                        {model.specialty}
                      </span>

                      <AnimatePresence>
                        {expandedModel === model.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 mt-3 border-t border-slate-700/50">
                              <p className="text-xs text-slate-400 mb-2">Pontos Fortes:</p>
                              <div className="flex flex-wrap gap-1">
                                {model.strengths.map((strength) => (
                                  <span
                                    key={strength}
                                    className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded"
                                  >
                                    {strength}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Synthesis Prompt */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-indigo-400" />
                  Synthesis Prompt Template
                </h3>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm">
                  <pre className="text-emerald-400 whitespace-pre-wrap">
{`You are a synthesis expert. You received K responses from different LLMs.

TASK: Synthesize these responses into a single, optimal answer.

RESPONSES:
{{responses}}

SYNTHESIS RULES:
1. AGREE: If all models agree → high confidence, use consensus
2. PARTIAL: If majority agrees → medium confidence, note dissent
3. CONFLICT: If models conflict → analyze each, choose best-reasoned
4. COMPLEMENT: If models complement → merge insights

OUTPUT FORMAT:
- Final Answer: [synthesized response]
- Confidence: [high/medium/low]
- Sources: [which models contributed what]
- Conflicts: [any unresolved disagreements]`}
                  </pre>
                </div>
              </div>
            </motion.div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'usecases' && (
            <motion.div
              key="usecases"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-7 h-7 text-indigo-400" />
                  Casos de Uso Reais
                </h2>

                <div className="grid gap-4">
                  {USE_CASES.map((useCase, index) => (
                    <motion.div
                      key={useCase.scenario}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-lg mb-2">{useCase.scenario}</h3>

                          <div className="space-y-3">
                            <div>
                              <span className="text-xs text-indigo-400 uppercase tracking-wide">Problema:</span>
                              <p className="text-sm text-slate-400">{useCase.problem}</p>
                            </div>

                            <div>
                              <span className="text-xs text-emerald-400 uppercase tracking-wide">Solucao K-LLMs:</span>
                              <p className="text-sm text-slate-300">{useCase.kllmSolution}</p>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-48 space-y-3">
                          <div>
                            <span className="text-xs text-slate-500 uppercase">Modelos:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {useCase.models.map((model) => (
                                <span
                                  key={model}
                                  className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300
                                           border border-indigo-500/30 rounded"
                                >
                                  {model}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2">
                            <span className="text-xs text-emerald-400 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Beneficio:
                            </span>
                            <p className="text-xs text-emerald-300 mt-1">{useCase.benefit}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* When to Use */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                  <h3 className="font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Quando USAR K-LLMs
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Decisoes de alto impacto (financeiro, legal)',
                      'Analises que exigem multiplas perspectivas',
                      'Tasks onde erro tem custo muito alto',
                      'Quando confiabilidade > velocidade',
                      'Geracao de codigo critico'
                    ].map((item) => (
                      <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                        <Star className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                  <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Quando NAO usar K-LLMs
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Tasks simples e repetitivas',
                      'Quando latencia e critica',
                      'Alto volume, baixo valor por query',
                      'Orcamento muito restrito',
                      'Respostas que precisam ser instantaneas'
                    ].map((item) => (
                      <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Implementation Tab */}
          {activeTab === 'implementation' && (
            <motion.div
              key="implementation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Implementation Phases */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Play className="w-7 h-7 text-indigo-400" />
                  Fases de Implementacao
                </h2>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-purple-500" />

                  <div className="space-y-6">
                    {IMPLEMENTATION_PHASES.map((phase, index) => (
                      <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="relative pl-16"
                      >
                        {/* Phase Number */}
                        <div className={`absolute left-0 w-12 h-12 rounded-full bg-${phase.color}-500/20
                                        border-2 border-${phase.color}-500 flex items-center justify-center`}>
                          <span className={`text-${phase.color}-400 font-bold`}>{phase.phase}</span>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-white text-lg">{phase.title}</h3>
                            <span className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                              <Clock className="w-3 h-3" />
                              {phase.duration}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {phase.tasks.map((task) => (
                              <span
                                key={task}
                                className={`px-3 py-1 text-sm bg-${phase.color}-500/20
                                           text-${phase.color}-300 border border-${phase.color}-500/30 rounded-lg`}
                              >
                                {task}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-indigo-400" />
                  Pseudo-codigo: K-LLMs Orchestrator
                </h3>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-slate-300">
{`class KLLMsOrchestrator:
    def __init__(self, models: List[LLM], synthesizer: LLM):
        self.models = models  # K models
        self.synthesizer = synthesizer

    async def query(self, prompt: str) -> SynthesizedResponse:
        # 1. PARALLEL EXECUTION
        responses = await asyncio.gather(*[
            model.generate(prompt) for model in self.models
        ])

        # 2. COLLECT & ANALYZE
        valid_responses = [r for r in responses if r.success]

        if len(valid_responses) == 0:
            raise AllModelsFailedError()

        # 3. SYNTHESIZE
        synthesis_prompt = self._build_synthesis_prompt(
            original_query=prompt,
            responses=valid_responses
        )

        final_answer = await self.synthesizer.generate(synthesis_prompt)

        # 4. RETURN WITH METADATA
        return SynthesizedResponse(
            answer=final_answer,
            sources=valid_responses,
            confidence=self._calculate_confidence(valid_responses),
            conflicts=self._detect_conflicts(valid_responses)
        )`}
                  </pre>
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                  Metricas de Sucesso
                </h3>

                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { label: 'Accuracy Improvement', value: '+15-25%', icon: TrendingUp, color: 'emerald' },
                    { label: 'Error Reduction', value: '-40-60%', icon: Shield, color: 'blue' },
                    { label: 'Cost Multiplier', value: '2-3x', icon: DollarSign, color: 'amber' },
                    { label: 'Latency Overhead', value: '+20-50%', icon: Clock, color: 'rose' }
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-center"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-${metric.color}-500/20
                                      flex items-center justify-center mx-auto mb-3`}>
                        <metric.icon className={`w-5 h-5 text-${metric.color}-400`} />
                      </div>
                      <p className={`text-2xl font-bold text-${metric.color}-400 mb-1`}>{metric.value}</p>
                      <p className="text-xs text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-rose-500/20 to-red-500/20 border border-indigo-500/30
                              rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para implementar K-LLMs?
                </h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Comece com 2-3 modelos para casos criticos, meça resultados,
                  e escale gradualmente. O investimento em qualidade se paga rapidamente.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://www.youtube.com/watch?v=wS5xRxGnqIQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600
                               text-white font-medium rounded-xl transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    Ver Palestra Original
                  </a>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600
                               text-white font-medium rounded-xl transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    Configurar K-LLMs
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KLLMsFramework;

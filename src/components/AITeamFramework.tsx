import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Brain, Target, Code2, Shield, FileSearch, Database,
  Lightbulb, AlertTriangle, GitBranch, FileCode, TestTube,
  Rocket, BarChart3, Zap, ChevronDown, ChevronUp, Star,
  CheckCircle2, ArrowRight, Layers, Settings, Trophy
} from 'lucide-react';

interface AITeamFrameworkProps {
  onClose?: () => void;
}

interface Specialist {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  expertise: string[];
  triggers: string[];
  outputs: string[];
}

const SPECIALISTS: Specialist[] = [
  {
    id: 'architect',
    name: 'System Architect',
    role: 'Arquitetura & Design',
    icon: Layers,
    color: 'indigo',
    gradient: 'from-indigo-500 to-violet-500',
    expertise: ['System Design', 'Patterns', 'Scalability', 'Clean Architecture'],
    triggers: ['Novo projeto', 'Refatoração estrutural', 'Decisões de stack'],
    outputs: ['Diagramas C4', 'ADRs', 'Roadmap técnico']
  },
  {
    id: 'senior-dev',
    name: 'Senior Developer',
    role: 'Implementação Expert',
    icon: Code2,
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
    expertise: ['Clean Code', 'Best Practices', 'Performance', 'Debugging'],
    triggers: ['Features complexas', 'Code review', 'Otimizações'],
    outputs: ['Código production-ready', 'Documentação inline', 'PRs exemplares']
  },
  {
    id: 'security',
    name: 'Security Expert',
    role: 'Segurança & Compliance',
    icon: Shield,
    color: 'red',
    gradient: 'from-red-500 to-rose-500',
    expertise: ['OWASP Top 10', 'Auth/AuthZ', 'Encryption', 'LGPD/GDPR'],
    triggers: ['Auth flows', 'Dados sensíveis', 'APIs públicas'],
    outputs: ['Security checklist', 'Threat model', 'Pentest report']
  },
  {
    id: 'qa',
    name: 'QA Engineer',
    role: 'Qualidade & Testing',
    icon: TestTube,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    expertise: ['Unit Tests', 'Integration', 'E2E', 'TDD/BDD'],
    triggers: ['Novas features', 'Bugs críticos', 'Refatorações'],
    outputs: ['Test suites', 'Coverage reports', 'Bug reports']
  },
  {
    id: 'devops',
    name: 'DevOps Engineer',
    role: 'Infra & Automação',
    icon: Settings,
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    expertise: ['CI/CD', 'Docker/K8s', 'Monitoring', 'IaC'],
    triggers: ['Deploy', 'Infra changes', 'Scaling'],
    outputs: ['Pipelines', 'Dockerfiles', 'Runbooks']
  },
  {
    id: 'data',
    name: 'Data Engineer',
    role: 'Dados & Analytics',
    icon: Database,
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    expertise: ['SQL/NoSQL', 'ETL', 'Data Modeling', 'Analytics'],
    triggers: ['Schema design', 'Queries complexas', 'Migrations'],
    outputs: ['ERDs', 'Query optimization', 'Data pipelines']
  },
  {
    id: 'frontend',
    name: 'Frontend Expert',
    role: 'UI/UX Implementation',
    icon: Zap,
    color: 'sky',
    gradient: 'from-sky-500 to-indigo-500',
    expertise: ['React/Vue', 'CSS/Tailwind', 'A11y', 'Performance'],
    triggers: ['UI components', 'Responsive design', 'Animations'],
    outputs: ['Component library', 'Design system', 'Storybook']
  },
  {
    id: 'api',
    name: 'API Designer',
    role: 'Contratos & Integrações',
    icon: GitBranch,
    color: 'lime',
    gradient: 'from-lime-500 to-green-500',
    expertise: ['REST', 'GraphQL', 'gRPC', 'OpenAPI'],
    triggers: ['Novos endpoints', 'Integrações', 'Versionamento'],
    outputs: ['OpenAPI specs', 'SDKs', 'API docs']
  },
  {
    id: 'performance',
    name: 'Performance Engineer',
    role: 'Otimização & Profiling',
    icon: Rocket,
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    expertise: ['Profiling', 'Caching', 'Load Testing', 'Optimization'],
    triggers: ['Lentidão', 'Scale issues', 'Memory leaks'],
    outputs: ['Benchmarks', 'Flame graphs', 'Optimization PRs']
  },
  {
    id: 'docs',
    name: 'Technical Writer',
    role: 'Documentação',
    icon: FileCode,
    color: 'slate',
    gradient: 'from-slate-500 to-gray-500',
    expertise: ['READMEs', 'API Docs', 'Tutorials', 'ADRs'],
    triggers: ['Novas features', 'Onboarding', 'Releases'],
    outputs: ['Docs completos', 'Changelogs', 'Guides']
  },
  {
    id: 'reviewer',
    name: 'Code Reviewer',
    role: 'Review & Mentoria',
    icon: FileSearch,
    color: 'teal',
    gradient: 'from-teal-500 to-emerald-500',
    expertise: ['Code Review', 'Standards', 'Mentoring', 'Best Practices'],
    triggers: ['PRs', 'Pair programming', 'Tech discussions'],
    outputs: ['Review comments', 'Improvement suggestions', 'Knowledge sharing']
  },
  {
    id: 'product',
    name: 'Product Engineer',
    role: 'Product & UX',
    icon: Lightbulb,
    color: 'yellow',
    gradient: 'from-yellow-500 to-amber-500',
    expertise: ['User Stories', 'MVP', 'Metrics', 'A/B Testing'],
    triggers: ['New features', 'User feedback', 'Prioritization'],
    outputs: ['PRDs', 'Feature specs', 'Success metrics']
  }
];

const ORCHESTRATION_RULES = [
  { trigger: 'Novo projeto', team: ['architect', 'senior-dev', 'devops'], icon: Rocket },
  { trigger: 'Feature complexa', team: ['senior-dev', 'qa', 'reviewer'], icon: Code2 },
  { trigger: 'Security review', team: ['security', 'reviewer', 'devops'], icon: Shield },
  { trigger: 'Performance issue', team: ['performance', 'data', 'devops'], icon: Zap },
  { trigger: 'API design', team: ['api', 'architect', 'docs'], icon: GitBranch },
  { trigger: 'Bug crítico', team: ['senior-dev', 'qa', 'devops'], icon: AlertTriangle }
];

export const AITeamFramework: React.FC<AITeamFrameworkProps> = () => {
  const [expandedSpecialist, setExpandedSpecialist] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'team' | 'orchestration' | 'metrics'>('team');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20
                          border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">AI Development Framework</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              12 AI Specialists
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Framework de desenvolvimento com 12 especialistas IA trabalhando em conjunto
            para entregar código de alta qualidade.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { id: 'team', label: 'Especialistas', icon: Users },
            { id: 'orchestration', label: 'Orquestração', icon: Target },
            { id: 'metrics', label: 'Métricas', icon: BarChart3 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Team Tab */}
          {activeTab === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {SPECIALISTS.map((specialist, index) => (
                <motion.div
                  key={specialist.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-5
                              hover:border-${specialist.color}-500/50 transition-all cursor-pointer
                              ${expandedSpecialist === specialist.id ? 'ring-2 ring-cyan-500/50' : ''}`}
                  onClick={() => setExpandedSpecialist(
                    expandedSpecialist === specialist.id ? null : specialist.id
                  )}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${specialist.gradient}
                                      flex items-center justify-center shadow-lg`}>
                        <specialist.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{specialist.name}</h3>
                        <p className="text-sm text-slate-400">{specialist.role}</p>
                      </div>
                    </div>
                    {expandedSpecialist === specialist.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {specialist.expertise.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 text-xs rounded-full bg-${specialist.color}-500/20
                                   text-${specialist.color}-300 border border-${specialist.color}-500/30`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedSpecialist === specialist.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-slate-700/50 space-y-4">
                          {/* Triggers */}
                          <div>
                            <h4 className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-amber-400" />
                              Ativado quando:
                            </h4>
                            <ul className="space-y-1">
                              {specialist.triggers.map((trigger) => (
                                <li key={trigger} className="text-sm text-slate-400 flex items-center gap-2">
                                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                                  {trigger}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outputs */}
                          <div>
                            <h4 className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              Entrega:
                            </h4>
                            <ul className="space-y-1">
                              {specialist.outputs.map((output) => (
                                <li key={output} className="text-sm text-slate-400 flex items-center gap-2">
                                  <Star className="w-3 h-3 text-amber-400" />
                                  {output}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Orchestration Tab */}
          {activeTab === 'orchestration' && (
            <motion.div
              key="orchestration"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-cyan-400" />
                  Regras de Orquestração Automática
                </h2>

                <div className="grid gap-4">
                  {ORCHESTRATION_RULES.map((rule, index) => (
                    <motion.div
                      key={rule.trigger}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl
                                 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500
                                      flex items-center justify-center">
                        <rule.icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium text-white">{rule.trigger}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-slate-400">Equipe:</span>
                          {rule.team.map((specialistId) => {
                            const spec = SPECIALISTS.find(s => s.id === specialistId);
                            return spec ? (
                              <span
                                key={specialistId}
                                className={`px-2 py-1 text-xs rounded-full bg-${spec.color}-500/20
                                           text-${spec.color}-300 border border-${spec.color}-500/30`}
                              >
                                {spec.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>

                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Workflow Visual */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-violet-400" />
                  Fluxo de Trabalho
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-4">
                  {['Input', 'Análise', 'Design', 'Implement', 'Review', 'Deploy'].map((step, i) => (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500
                                        flex items-center justify-center text-white font-bold">
                          {i + 1}
                        </div>
                        <span className="text-sm text-slate-300">{step}</span>
                      </div>
                      {i < 5 && (
                        <ArrowRight className="w-6 h-6 text-cyan-500/50 hidden md:block" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Metrics Tab */}
          {activeTab === 'metrics' && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                { label: 'Code Quality', value: '95%', icon: Trophy, color: 'emerald' },
                { label: 'Test Coverage', value: '87%', icon: TestTube, color: 'amber' },
                { label: 'Security Score', value: 'A+', icon: Shield, color: 'red' },
                { label: 'Performance', value: '98/100', icon: Rocket, color: 'cyan' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6
                             text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${metric.color}-500/20
                                  flex items-center justify-center`}>
                    <metric.icon className={`w-8 h-8 text-${metric.color}-400`} />
                  </div>
                  <div className={`text-3xl font-bold text-${metric.color}-400 mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-slate-400">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-slate-500 text-sm"
        >
          <p>AI Team Framework v1.0 - Powered by Claude Code</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AITeamFramework;

// ============================================================================
// AI NEWS INTELLIGENCE HUB v3.0 - MARKET INTELLIGENCE REPOSITORY
// Estado-da-arte MUNDIAL - Chess Game visualization, Geographic Analysis,
// TAM/SAM/SOM, 2025 Timeline, Strategic Player Tracking
// 1000x improvement - World-class competitive intelligence platform
// ============================================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Newspaper, TrendingUp, ExternalLink, Clock, RefreshCw,
  Zap, Building2, DollarSign, Rocket, Target,
  ChevronLeft, Sparkles, BarChart3, Eye,
  AlertTriangle, CheckCircle2, ArrowUpRight, ArrowDownRight,
  Globe, Users, Brain, Shield, X, Cpu,
  BookOpen, LineChart, PieChart, Activity,
  Lightbulb, Calendar, Star
} from 'lucide-react';

// ============================================================================
// TYPES - Comprehensive Market Intelligence
// ============================================================================

interface StrategicInsight {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'opportunity' | 'threat' | 'trend';
}

interface ValuationAnalysis {
  estimatedValue: string;
  valueRange: { min: string; max: string };
  methodology: string;
  comparables: string[];
  multiples: {
    revenueMultiple?: string;
    userMultiple?: string;
    arbMultiple?: string;
  };
  confidence: 'high' | 'medium' | 'low';
}

interface BreakingNewsItem {
  id: string;
  title: string;
  headline: string;
  source: string;
  url: string;
  timestamp: string;
  category: 'acquisition' | 'funding' | 'product' | 'partnership' | 'research' | 'regulation';
  isBreaking: boolean;
  strategicSummary: string;
  keyTakeaways: string[];
  strategicInsights: StrategicInsight[];
  valuation?: ValuationAnalysis;
  companies: {
    name: string;
    role: 'acquirer' | 'target' | 'investor' | 'partner';
    logo?: string;
  }[];
  marketImpact: 'transformative' | 'significant' | 'moderate' | 'minor';
  sectors: string[];
  relatedNewsIds?: string[];
}

interface TimelineDataPoint {
  date: string;
  value: number;
  label?: string;
}

interface KeyPlayer {
  name: string;
  description: string;
  marketShare?: number;
  recentMove?: string;
}

interface InvestmentOpportunity {
  area: string;
  thesis: string;
  riskLevel: 'low' | 'medium' | 'high';
  timeHorizon: string;
  potentialReturn: string;
}

interface MarketTrend {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  trend: 'bullish' | 'bearish' | 'neutral';
  changePercent: number;
  timeframe: string;
  icon: string;
  category: string;

  // Deep Analysis Data
  marketSize: {
    current: string;
    projected: string;
    year: number;
    cagr: string;
  };

  timeline: TimelineDataPoint[];

  keyPlayers: KeyPlayer[];

  drivers: string[];
  risks: string[];

  investmentOpportunities: InvestmentOpportunity[];

  expertPredictions: {
    source: string;
    prediction: string;
    confidence: 'high' | 'medium' | 'low';
  }[];

  actionableInsights: {
    forFounders: string[];
    forInvestors: string[];
    forDevelopers: string[];
  };

  relatedTrends: string[];

  dataPoints: { label: string; value: string }[];
}

// ============================================================================
// CHESS GAME & MARKET INTELLIGENCE TYPES
// ============================================================================

type ChessMoveType = 'acquisition' | 'partnership' | 'product' | 'funding' | 'talent' | 'infrastructure' | 'regulation';

interface ChessMove {
  id: string;
  player: string;
  playerLogo?: string;
  moveType: ChessMoveType;
  title: string;
  description: string;
  date: string;
  value?: string;
  impact: 'game_changing' | 'significant' | 'tactical' | 'minor';
  targetPlayer?: string;
  relatedMoves?: string[];
  // Strategic analysis fields
  strategicThesis?: string;          // Why this move was made
  competitiveResponse?: string;       // How competitors reacted
  marketImplication?: string;         // What this means for the market
  chessNotation?: string;             // Chess-style notation (e.g., "OpenAI → GPU+++ (Stargate)")
  isDefensive?: boolean;              // Defensive vs offensive move
  opensPosition?: string[];           // What opportunities this creates
  closesPosition?: string[];          // What opportunities this blocks for others
  relatedNewsIds?: string[];          // Links to breaking news
}

// Historical Pareto Events (top 20% that shaped 80% of the industry)
interface ParetoHistoricalEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  player: string;
  category: 'breakthrough' | 'funding' | 'acquisition' | 'product' | 'regulation' | 'milestone';
  paretoScore: number;               // 1-10 scale of impact
  impact: string;                    // What changed because of this
  rippleEffects: string[];           // Downstream effects
  stillRelevant: boolean;            // Still impacts today?
}

interface GeographicMarketData {
  region: 'americas' | 'emea' | 'apac';
  name: string;
  marketSize2024: string;
  marketSize2025: string;
  growth: number;
  topCountries: { name: string; share: number }[];
  keyTrends: string[];
  majorPlayers: string[];
}

interface TAMData {
  category: string;
  tam: { value: string; description: string };
  sam: { value: string; description: string };
  som: { value: string; description: string };
  cagr: string;
  year: number;
}

interface Timeline2025Event {
  id: string;
  date: string;
  month: number;
  title: string;
  description: string;
  category: 'funding' | 'product' | 'acquisition' | 'partnership' | 'regulation' | 'milestone';
  player: string;
  value?: string;
  impact: 'transformative' | 'significant' | 'moderate';
}

// ============================================================================
// COMPREHENSIVE MARKET TRENDS DATA
// ============================================================================

const getMarketTrends = (): MarketTrend[] => [
  {
    id: 'ai-agents-adoption',
    title: 'AI Agents Revolution',
    subtitle: 'A maior transformação desde smartphones',
    description: 'Agentes autônomos que executam tarefas complexas sem supervisão estão redefinindo produtividade empresarial.',
    trend: 'bullish',
    changePercent: 340,
    timeframe: 'YoY',
    icon: '🤖',
    category: 'AI Agents',

    marketSize: {
      current: '$5.4B',
      projected: '$47.1B',
      year: 2030,
      cagr: '43.8%',
    },

    timeline: [
      { date: 'Jan 2024', value: 12, label: 'Early adopters' },
      { date: 'Abr 2024', value: 28, label: 'GPT-4 Turbo boost' },
      { date: 'Jul 2024', value: 45, label: 'Claude 3.5 impact' },
      { date: 'Out 2024', value: 78, label: 'Enterprise adoption' },
      { date: 'Jan 2025', value: 124, label: 'Mainstream breakout' },
      { date: 'Hoje', value: 185, label: 'Explosive growth' },
    ],

    keyPlayers: [
      { name: 'Anthropic (Claude)', description: 'Líder em segurança e capability', marketShare: 28, recentMove: 'Claude Code, Computer Use' },
      { name: 'OpenAI', description: 'Pioneer, maior base de usuários', marketShare: 35, recentMove: 'GPT-4o, Assistants API' },
      { name: 'Google DeepMind', description: 'Research powerhouse', marketShare: 18, recentMove: 'Gemini 2.0, Agentic features' },
      { name: 'Microsoft Copilot', description: 'Enterprise distribution', marketShare: 12, recentMove: 'Copilot Studio, Agents' },
      { name: 'Meta (Manus AI)', description: 'Consumer + social focus', marketShare: 7, recentMove: 'Aquisição Manus AI' },
    ],

    drivers: [
      'Redução de 70% em custos de inferência (H200, Blackwell)',
      'Context windows de 1M+ tokens habilitam tarefas complexas',
      'Frameworks de orquestração maduros (LangGraph, CrewAI)',
      'Enterprise trust estabelecido após 2 anos de uso',
      'Developer tooling estado-da-arte (Claude Code, Cursor)',
    ],

    risks: [
      'Alucinações em tarefas críticas ainda preocupam',
      'Custos de compute para agentes long-running',
      'Regulação incerta (EU AI Act, US executive orders)',
      'Security vulnerabilities em tool use',
      'Talent war intensificando (salários $500k+)',
    ],

    investmentOpportunities: [
      {
        area: 'Agent Infrastructure',
        thesis: 'Picks and shovels da corrida do ouro. Ferramentas para construir, monitorar e orquestrar agentes.',
        riskLevel: 'medium',
        timeHorizon: '2-3 anos',
        potentialReturn: '10-50x',
      },
      {
        area: 'Vertical AI Agents',
        thesis: 'Agentes especializados em domínios específicos (legal, médico, financeiro) com moats de dados.',
        riskLevel: 'medium',
        timeHorizon: '3-5 anos',
        potentialReturn: '20-100x',
      },
      {
        area: 'Agent Security',
        thesis: 'À medida que agentes ganham autonomia, segurança se torna crítica. Mercado nascente.',
        riskLevel: 'high',
        timeHorizon: '2-4 anos',
        potentialReturn: '50-200x',
      },
    ],

    expertPredictions: [
      { source: 'Sam Altman (OpenAI)', prediction: 'Agentes serão a interface principal de software até 2026', confidence: 'high' },
      { source: 'Dario Amodei (Anthropic)', prediction: 'AI agents substituirão 30% de tarefas de conhecimento em 3 anos', confidence: 'high' },
      { source: 'Satya Nadella (Microsoft)', prediction: 'Copilots e agents gerarão $100B em produtividade empresarial até 2027', confidence: 'medium' },
    ],

    actionableInsights: {
      forFounders: [
        'Foque em vertical agents com dados proprietários - moat defensável',
        'Build for enterprise first - willingness to pay 10x maior',
        'Priorize observability e audit trails - requisito enterprise',
      ],
      forInvestors: [
        'Agent infra está em inflection point - momento de entrar',
        'Evite horizontal plays - winner-take-all favorece incumbents',
        'Due diligence em unit economics de compute',
      ],
      forDevelopers: [
        'Domine Claude Code e agentic frameworks (LangGraph)',
        'Aprenda a arquitetar sistemas multi-agent',
        'Skills de prompt engineering para agents valem premium',
      ],
    },

    relatedTrends: ['ai-coding-market', 'inference-costs', 'multimodal-adoption'],

    dataPoints: [
      { label: 'Empresas usando agents', value: '23%' },
      { label: 'Growth rate', value: '+340%' },
      { label: 'Market size 2025', value: '$8.4B' },
    ],
  },
  {
    id: 'ai-coding-market',
    title: 'AI Coding Assistants',
    subtitle: 'Developers como early adopters de AI',
    description: 'Ferramentas de código com IA estão transformando como software é construído. Cursor, Claude Code e GitHub Copilot lideram.',
    trend: 'bullish',
    changePercent: 180,
    timeframe: 'YoY',
    icon: '💻',
    category: 'Developer Tools',

    marketSize: {
      current: '$2.1B',
      projected: '$15B',
      year: 2027,
      cagr: '85%',
    },

    timeline: [
      { date: 'Jun 2022', value: 15, label: 'Copilot launch' },
      { date: 'Jan 2023', value: 32, label: 'ChatGPT impact' },
      { date: 'Jul 2023', value: 55, label: 'Claude Code beta' },
      { date: 'Jan 2024', value: 89, label: 'Cursor breakout' },
      { date: 'Jul 2024', value: 145, label: 'Enterprise adoption' },
      { date: 'Hoje', value: 210, label: 'Mainstream dev tool' },
    ],

    keyPlayers: [
      { name: 'GitHub Copilot', description: 'First mover, VS Code native', marketShare: 42, recentMove: 'Workspace, multi-file edits' },
      { name: 'Cursor', description: 'AI-native IDE, fastest growing', marketShare: 25, recentMove: 'Series B $400M, $4B valuation' },
      { name: 'Claude Code', description: 'CLI-first, agentic capabilities', marketShare: 18, recentMove: 'MCP, Skills, Hooks' },
      { name: 'Amazon Q', description: 'AWS integration, enterprise', marketShare: 8, recentMove: 'CodeWhisperer rebrand' },
      { name: 'Tabnine', description: 'On-premise, privacy focus', marketShare: 7, recentMove: 'Enterprise security features' },
    ],

    drivers: [
      'Redução de 40-55% no tempo de coding para tarefas repetitivas',
      'Context windows maiores permitem entender projetos inteiros',
      'Developers são early adopters naturais de tecnologia',
      'ROI claro: $20/mês economiza horas de trabalho',
      'Qualidade do código gerado melhorando exponencialmente',
    ],

    risks: [
      'Dependência excessiva pode atrofiar skills fundamentais',
      'Código gerado pode introduzir vulnerabilidades de segurança',
      'Questões de copyright em treinamento ainda não resolvidas',
      'Consolidação de mercado pode eliminar inovação',
      'Enterprise security concerns em cloud-based tools',
    ],

    investmentOpportunities: [
      {
        area: 'AI-Native IDEs',
        thesis: 'A interface de desenvolvimento será completamente redesenhada. Cursor provou o modelo.',
        riskLevel: 'medium',
        timeHorizon: '2-3 anos',
        potentialReturn: '10-30x',
      },
      {
        area: 'Code Security AI',
        thesis: 'AI que detecta e corrige vulnerabilidades em tempo real. Mercado crítico.',
        riskLevel: 'low',
        timeHorizon: '1-2 anos',
        potentialReturn: '5-15x',
      },
      {
        area: 'AI Code Review',
        thesis: 'Automação de code review com contexto de projeto. Alta demand enterprise.',
        riskLevel: 'low',
        timeHorizon: '1-3 anos',
        potentialReturn: '5-20x',
      },
    ],

    expertPredictions: [
      { source: 'Nat Friedman (ex-GitHub CEO)', prediction: '80% do código será AI-assisted até 2026', confidence: 'high' },
      { source: 'Andrej Karpathy', prediction: 'Software 2.0 onde specs viram código automaticamente', confidence: 'medium' },
      { source: 'Michael Seibel (YC)', prediction: 'Solo founders com AI coding = 10-person team output', confidence: 'high' },
    ],

    actionableInsights: {
      forFounders: [
        'Use AI coding tools agressivamente - competitive advantage',
        'Build AI-native desde dia 1 - mais fácil que retrofitting',
        'Documente extensivamente - AI funciona melhor com contexto',
      ],
      forInvestors: [
        'Cursor-like plays em outras verticais (design, data)',
        'Infrastructure para AI coding (testing, deployment)',
        'Enterprise security layer para AI code tools',
      ],
      forDevelopers: [
        'Master Claude Code - agentic capabilities são diferencial',
        'Aprenda prompt engineering para code - skill premium',
        'Foque em arquitetura e system design - AI não substitui',
      ],
    },

    relatedTrends: ['ai-agents-adoption', 'inference-costs'],

    dataPoints: [
      { label: 'Devs usando AI', value: '67%' },
      { label: 'Market size', value: '$2.1B' },
      { label: 'Projeção 2027', value: '$15B' },
    ],
  },
  {
    id: 'inference-costs',
    title: 'Custos de Inferência',
    subtitle: 'A Lei de Moore da AI',
    description: 'Custos de inferência estão caindo 10x a cada 18 meses. Isso habilita novos use cases anteriormente impossíveis.',
    trend: 'bearish',
    changePercent: -85,
    timeframe: '2 anos',
    icon: '📉',
    category: 'Infrastructure',

    marketSize: {
      current: '$12B',
      projected: '$89B',
      year: 2028,
      cagr: '52%',
    },

    timeline: [
      { date: 'Mar 2023', value: 100, label: 'GPT-4 $0.03/1K' },
      { date: 'Set 2023', value: 75, label: 'Competition pressure' },
      { date: 'Mar 2024', value: 45, label: 'Claude 3 efficiency' },
      { date: 'Set 2024', value: 25, label: 'GPT-4o, Haiku' },
      { date: 'Jan 2025', value: 15, label: 'H200 impact' },
      { date: 'Projeção', value: 5, label: '2026 estimate' },
    ],

    keyPlayers: [
      { name: 'NVIDIA', description: 'GPU dominance, H100/H200/Blackwell', marketShare: 85, recentMove: 'Blackwell shipping Q2 2025' },
      { name: 'AMD', description: 'MI300X competitor', marketShare: 8, recentMove: 'Price-performance advantage' },
      { name: 'Groq', description: 'Custom LPU, fastest inference', marketShare: 2, recentMove: 'Cloud offering, 500 tok/s' },
      { name: 'Cerebras', description: 'Wafer-scale chips', marketShare: 2, recentMove: 'CS-3 chip, 900K cores' },
      { name: 'Intel', description: 'Gaudi accelerators', marketShare: 3, recentMove: 'Gaudi 3, TCO focus' },
    ],

    drivers: [
      'H200 oferece 2x performance/watt vs H100',
      'Quantization (INT8, INT4) reduz compute 4-8x',
      'Speculative decoding acelera 2-3x',
      'Competition entre cloud providers pressiona preços',
      'Custom silicon (TPU, Inferentia) otimizado para inference',
    ],

    risks: [
      'NVIDIA dominance pode limitar price drops',
      'Demanda explodindo pode superar oferta de chips',
      'Custos de energia se tornando fator limitante',
      'Geopolitical risks em supply chain de semicondutores',
      'Modelo de negócio de AI labs sob pressão de margem',
    ],

    investmentOpportunities: [
      {
        area: 'Inference Optimization',
        thesis: 'Startups que otimizam inference sem sacrificar qualidade. 10x efficiency gains possíveis.',
        riskLevel: 'medium',
        timeHorizon: '1-2 anos',
        potentialReturn: '5-20x',
      },
      {
        area: 'Edge AI Hardware',
        thesis: 'Inference no device elimina latência e custos de cloud. Mobile, IoT, automotive.',
        riskLevel: 'high',
        timeHorizon: '3-5 anos',
        potentialReturn: '10-50x',
      },
      {
        area: 'AI Cloud Arbitrage',
        thesis: 'Platforms que roteiam workloads para providers mais baratos dinamicamente.',
        riskLevel: 'low',
        timeHorizon: '1-2 anos',
        potentialReturn: '3-10x',
      },
    ],

    expertPredictions: [
      { source: 'Jensen Huang (NVIDIA)', prediction: 'Inference compute demand 1000x em 5 anos', confidence: 'high' },
      { source: 'Jim Keller (Tenstorrent)', prediction: 'Custom AI chips serão 100x mais eficientes que GPUs genéricas', confidence: 'medium' },
      { source: 'George Hotz (comma.ai)', prediction: 'Edge inference dominará até 2027, cloud será backup', confidence: 'medium' },
    ],

    actionableInsights: {
      forFounders: [
        'Design para custos de inferência 10x menores em 2 anos',
        'Use modelos menores (Haiku, GPT-4-mini) onde possível',
        'Cache agressivamente - inference repetido é waste',
      ],
      forInvestors: [
        'Inference infra é pick-and-shovel play seguro',
        'Edge AI tem timing risk mas upside massivo',
        'Avoid pure-play AI apps - margin squeeze coming',
      ],
      forDevelopers: [
        'Aprenda otimização de inference (quantization, batching)',
        'Entenda tradeoffs de latency vs cost vs quality',
        'Experimente com modelos locais (Ollama, llama.cpp)',
      ],
    },

    relatedTrends: ['ai-agents-adoption', 'multimodal-adoption'],

    dataPoints: [
      { label: 'GPT-4 (jan/24)', value: '$0.03/1K' },
      { label: 'GPT-4 (dez/24)', value: '$0.01/1K' },
      { label: 'Projeção 2025', value: '$0.001/1K' },
    ],
  },
  {
    id: 'multimodal-adoption',
    title: 'AI Multimodal',
    subtitle: 'Além do texto: visão, áudio, vídeo',
    description: 'Modelos que entendem e geram múltiplas modalidades estão habilitando novos use cases impossíveis com texto.',
    trend: 'bullish',
    changePercent: 420,
    timeframe: 'YoY',
    icon: '🎨',
    category: 'Frontier AI',

    marketSize: {
      current: '$3.8B',
      projected: '$28B',
      year: 2028,
      cagr: '65%',
    },

    timeline: [
      { date: 'Mar 2023', value: 20, label: 'GPT-4V preview' },
      { date: 'Set 2023', value: 35, label: 'DALL-E 3' },
      { date: 'Mar 2024', value: 65, label: 'Claude 3 Vision' },
      { date: 'Jul 2024', value: 110, label: 'GPT-4o, Gemini 1.5' },
      { date: 'Nov 2024', value: 180, label: 'Video understanding' },
      { date: 'Hoje', value: 265, label: 'Mainstream adoption' },
    ],

    keyPlayers: [
      { name: 'OpenAI', description: 'GPT-4o, Sora (video gen)', marketShare: 38, recentMove: 'Native multimodal architecture' },
      { name: 'Google', description: 'Gemini native multimodal', marketShare: 28, recentMove: 'Gemini 2.0, 1M context vision' },
      { name: 'Anthropic', description: 'Claude vision, PDF analysis', marketShare: 20, recentMove: 'Computer Use, screenshot analysis' },
      { name: 'Runway', description: 'Video generation leader', marketShare: 8, recentMove: 'Gen-3 Alpha, motion brush' },
      { name: 'Midjourney', description: 'Image generation quality', marketShare: 6, recentMove: 'V6, character consistency' },
    ],

    drivers: [
      '90% da informação humana é visual - texto é fração',
      'OCR + understanding elimina data entry manual',
      'Video understanding abre análise de conteúdo em escala',
      'Multimodal reasoning é mais natural para humanos',
      'Enterprise use cases: documentos, inspeção, análise',
    ],

    risks: [
      'Hallucinations em visão ainda problemáticas',
      'Custos de processamento visual 10-100x texto',
      'Deepfakes e misuse de geração de imagem/vídeo',
      'Copyright em training data visual não resolvido',
      'Latência em processamento de video real-time',
    ],

    investmentOpportunities: [
      {
        area: 'Document Intelligence',
        thesis: 'Extração estruturada de PDFs, contratos, faturas. Enterprise pain point claro.',
        riskLevel: 'low',
        timeHorizon: '1-2 anos',
        potentialReturn: '5-15x',
      },
      {
        area: 'Video Analytics',
        thesis: 'Análise automatizada de video para segurança, retail, manufacturing.',
        riskLevel: 'medium',
        timeHorizon: '2-4 anos',
        potentialReturn: '10-30x',
      },
      {
        area: 'Creative AI Tools',
        thesis: 'Ferramentas de criação visual AI-powered para marketing, design, entertainment.',
        riskLevel: 'medium',
        timeHorizon: '1-3 anos',
        potentialReturn: '5-25x',
      },
    ],

    expertPredictions: [
      { source: 'Demis Hassabis (DeepMind)', prediction: 'AGI será inerentemente multimodal - não há caminho só texto', confidence: 'high' },
      { source: 'Emad Mostaque (ex-Stability)', prediction: 'Video generation democratizada em 2025 - como DALL-E em 2022', confidence: 'medium' },
      { source: 'Fei-Fei Li (Stanford)', prediction: 'Spatial intelligence (3D) será a próxima fronteira', confidence: 'medium' },
    ],

    actionableInsights: {
      forFounders: [
        'Document processing é low-hanging fruit com ROI claro',
        'Video understanding tem moat de dados - hard to replicate',
        'Combine multimodal com domain expertise para defensibility',
      ],
      forInvestors: [
        'Infrastructure para multimodal (storage, processing)',
        'Vertical applications > horizontal platforms',
        'Watch for video generation breakout moment',
      ],
      forDevelopers: [
        'Master vision APIs (Claude, GPT-4o) - skill valorizado',
        'Aprenda prompting para análise de imagem/documento',
        'Experimente com PDF analysis e OCR workflows',
      ],
    },

    relatedTrends: ['ai-agents-adoption', 'inference-costs'],

    dataPoints: [
      { label: 'Apps multimodais', value: '+420%' },
      { label: 'Vision API calls', value: '1.2B/dia' },
      { label: 'Video understanding', value: 'nascente' },
    ],
  },
];

// ============================================================================
// BREAKING NEWS DATA
// ============================================================================

const getBreakingNews = (): BreakingNewsItem[] => [
  {
    id: 'meta-manus-acquisition',
    title: 'Meta adquire Manus AI em movimento estratégico para dominar agentes autônomos',
    headline: 'BREAKING: Meta compra startup de AI Agents que viralizou globalmente',
    source: 'TechCrunch / Bloomberg',
    url: 'https://techcrunch.com',
    timestamp: new Date().toISOString(),
    category: 'acquisition',
    isBreaking: true,
    strategicSummary: `A Meta, sob liderança do novo Chief AI Officer Alexandr Wang (fundador da Scale AI),
    adquiriu a Manus AI, startup de Singapura que viralizou com seu agente autônomo capaz de executar
    tarefas complexas sem supervisão. Este movimento sinaliza a intensificação da corrida por AI Agents
    no mercado enterprise e consumer.`,
    keyTakeaways: [
      'Alexandr Wang (Scale AI) agora é Chief AI Officer da Meta',
      'Meta já investiu $14B para 49% da Scale AI anteriormente',
      'Manus AI continuará operando de Singapura com autonomia',
      'Foco: expandir capacidades de agentes AI para consumidores e empresas',
      'Benchmark era investidor da Manus - agora faz exit para Meta',
    ],
    strategicInsights: [
      { title: 'Consolidação do mercado de AI Agents', description: 'Big Tech está adquirindo startups de agentes antes que se tornem competidores', impact: 'high', category: 'trend' },
      { title: 'Valorização de AI Agents disparando', description: 'Startups de agentes com tração estão sendo adquiridas por múltiplos altíssimos', impact: 'high', category: 'opportunity' },
      { title: 'Risco para players menores', description: 'Startups sem diferenciação clara podem ser esmagadas pela consolidação', impact: 'medium', category: 'threat' },
    ],
    valuation: {
      estimatedValue: '$500M - $1.2B',
      valueRange: { min: '$500M', max: '$1.2B' },
      methodology: 'Comparables de M&A em AI Agents + múltiplos de usuários virais',
      comparables: ['Character.AI → Google ($2.5B)', 'Inflection AI → Microsoft ($650M)', 'Adept AI → Amazon (~$400M)'],
      multiples: { userMultiple: '~$50-100 por usuário viral estimado', arbMultiple: '15-25x forward revenue' },
      confidence: 'medium',
    },
    companies: [
      { name: 'Meta', role: 'acquirer' },
      { name: 'Manus AI', role: 'target' },
      { name: 'Benchmark', role: 'investor' },
    ],
    marketImpact: 'significant',
    sectors: ['AI Agents', 'Consumer AI', 'Enterprise AI', 'Social Media'],
  },
  {
    id: 'anthropic-claude-opus-45',
    title: 'Anthropic lança Claude Opus 4.5 com raciocínio híbrido revolucionário',
    headline: 'Claude Opus 4.5 combina pensamento rápido e deliberativo em arquitetura inédita',
    source: 'Anthropic Blog',
    url: 'https://anthropic.com',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    category: 'product',
    isBreaking: false,
    strategicSummary: `A Anthropic lançou o Claude Opus 4.5, introduzindo "hybrid thinking" que combina
    resposta rápida com raciocínio profundo quando necessário. O modelo atinge SOTA em benchmarks de
    coding e agência, com foco em segurança aprimorado.`,
    keyTakeaways: [
      'Hybrid thinking: resposta rápida + extended thinking dinâmico',
      'SOTA em SWE-bench (72.3%) e TAU-bench (68.1%)',
      'Melhorias significativas em coding e tool use',
      'Disponível via API e Claude.ai Pro',
    ],
    strategicInsights: [
      { title: 'Anthropic assume liderança em AI agents', description: 'Foco em capability + safety diferencia de OpenAI', impact: 'high', category: 'trend' },
    ],
    companies: [{ name: 'Anthropic', role: 'partner' }],
    marketImpact: 'significant',
    sectors: ['LLMs', 'AI Development', 'Enterprise AI'],
  },
  {
    id: 'cursor-series-b',
    title: 'Cursor AI fecha Series B de $400M com valuation de $4B',
    headline: 'IDE AI-first se torna unicórnio mais rápido da história do dev tools',
    source: 'Forbes',
    url: 'https://forbes.com',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    category: 'funding',
    isBreaking: false,
    strategicSummary: `O Cursor, IDE com AI integrada, fechou rodada Series B liderada por Andreessen
    Horowitz, atingindo valuation de $4B após apenas 18 meses de operação.`,
    keyTakeaways: [
      '2M+ desenvolvedores ativos mensais',
      'Crescimento de 50% MoM consistente',
      'Uso médio: 4h+ por dia por usuário ativo',
      'Competição direta com GitHub Copilot e Claude Code',
    ],
    strategicInsights: [
      { title: 'AI Coding tools = novo battleground', description: 'Desenvolvedores são early adopters, mercado explodindo', impact: 'high', category: 'opportunity' },
    ],
    valuation: {
      estimatedValue: '$4B',
      valueRange: { min: '$3.5B', max: '$4.5B' },
      methodology: 'Funding round valuation',
      comparables: ['GitHub ($7.5B, 2018)', 'JetBrains ($7B, 2023)'],
      multiples: { userMultiple: '~$2,000 por dev ativo', arbMultiple: '80-100x ARR' },
      confidence: 'high',
    },
    companies: [
      { name: 'Cursor', role: 'target' },
      { name: 'Andreessen Horowitz', role: 'investor' },
    ],
    marketImpact: 'moderate',
    sectors: ['Developer Tools', 'AI Coding', 'IDE'],
  },
  // 2025 Major News - Research-backed
  {
    id: 'deepseek-r1-shock',
    title: 'DeepSeek R1 abala mercado de AI - NVIDIA perde $588B em um dia',
    headline: 'HISTÓRICO: Modelo chinês iguala GPT-4 com $5.6M de custo de treinamento',
    source: 'Bloomberg / Reuters',
    url: 'https://bloomberg.com',
    timestamp: '2025-01-27T09:00:00Z',
    category: 'product',
    isBreaking: false,
    strategicSummary: `O DeepSeek R1, desenvolvido na China, demonstrou performance comparável ao GPT-4 com
    um custo de treinamento de apenas $5.6 milhões (vs bilhões da OpenAI). O impacto foi imediato:
    NVIDIA perdeu $588.8 bilhões em valor de mercado em um único dia - a maior queda da história.`,
    keyTakeaways: [
      'Custo de treinamento: $5.6M vs bilhões da OpenAI',
      'NVIDIA perde $588.8B em um dia (maior queda da história)',
      'Questiona a necessidade de chips caríssimos para AI',
      'Prova que eficiência pode vencer força bruta',
      'China demonstra capacidade de competir em frontier AI',
    ],
    strategicInsights: [
      { title: 'Commoditização de AI acelerada', description: 'Se modelos de frontier podem ser treinados barato, barreiras de entrada caem drasticamente', impact: 'high', category: 'trend' },
      { title: 'NVIDIA menos invencível', description: 'Questionamento sobre moat da NVIDIA pode persistir', impact: 'high', category: 'threat' },
    ],
    companies: [
      { name: 'DeepSeek', role: 'partner' },
      { name: 'NVIDIA', role: 'target' },
    ],
    marketImpact: 'transformative',
    sectors: ['AI Infrastructure', 'Semiconductors', 'Frontier AI'],
  },
  {
    id: 'project-stargate',
    title: 'Project Stargate: $500B em infraestrutura AI nos EUA',
    headline: 'Trump, OpenAI, SoftBank e Oracle anunciam maior investimento em AI da história',
    source: 'White House / Reuters',
    url: 'https://reuters.com',
    timestamp: '2025-01-21T15:00:00Z',
    category: 'partnership',
    isBreaking: false,
    strategicSummary: `O Project Stargate é uma joint venture de $500 bilhões para construir infraestrutura
    de AI nos Estados Unidos. Parceiros incluem OpenAI, SoftBank, Oracle e MGX. É o maior investimento
    em AI já anunciado, com foco em data centers e compute para manter liderança americana.`,
    keyTakeaways: [
      '$500B de investimento total planejado',
      '$100B de deployment imediato',
      'Foco em data centers e infraestrutura de AI',
      'Parceiros: OpenAI, SoftBank, Oracle, MGX',
      'Objetivo: manter liderança americana em AI',
    ],
    strategicInsights: [
      { title: 'Race por compute intensifica', description: 'Quem tiver mais compute terá vantagem em frontier models', impact: 'high', category: 'trend' },
    ],
    companies: [
      { name: 'OpenAI', role: 'partner' },
      { name: 'SoftBank', role: 'investor' },
      { name: 'Oracle', role: 'partner' },
    ],
    marketImpact: 'transformative',
    sectors: ['AI Infrastructure', 'Data Centers', 'Government'],
  },
  {
    id: 'anthropic-series-f',
    title: 'Anthropic atinge $183B de valuation após Series F de $13B',
    headline: 'Claude-maker se torna uma das empresas mais valiosas do mundo',
    source: 'TechCrunch / WSJ',
    url: 'https://techcrunch.com',
    timestamp: '2025-03-15T10:00:00Z',
    category: 'funding',
    isBreaking: false,
    strategicSummary: `A Anthropic fechou sua Series F levantando $13 bilhões, atingindo valuation de $183B.
    A empresa agora tem mais de 300,000 clientes empresariais e é considerada líder em AI safety e
    enterprise AI. Claude Opus 4.5 estabeleceu novo benchmark em coding e reasoning.`,
    keyTakeaways: [
      'Valuation: $183 bilhões',
      'Series F: $13 bilhões',
      '300,000+ clientes empresariais',
      'Claude Opus 4.5 com hybrid thinking',
      'Liderança em AI safety',
    ],
    strategicInsights: [
      { title: 'Duopólio OpenAI-Anthropic se consolida', description: 'Duas empresas dominam frontier AI, Google/Meta tentam acompanhar', impact: 'high', category: 'trend' },
    ],
    valuation: {
      estimatedValue: '$183B',
      valueRange: { min: '$175B', max: '$190B' },
      methodology: 'Series F valuation + enterprise traction',
      comparables: ['OpenAI ($500B)', 'Google ($2T)', 'Microsoft ($3T)'],
      multiples: { revenueMultiple: '~100x ARR', arbMultiple: '50x forward revenue' },
      confidence: 'high',
    },
    companies: [{ name: 'Anthropic', role: 'target' }],
    marketImpact: 'significant',
    sectors: ['Frontier AI', 'Enterprise AI', 'AI Safety'],
  },
  {
    id: 'cursor-29b-valuation',
    title: 'Cursor/Anysphere atinge $29.3B de valuation - Series D de $2.3B',
    headline: 'AI IDE quebra recorde de crescimento - ultrapassa $1B ARR',
    source: 'Bloomberg / Forbes',
    url: 'https://bloomberg.com',
    timestamp: '2025-11-15T09:00:00Z',
    category: 'funding',
    isBreaking: false,
    strategicSummary: `O Cursor, IDE com AI integrada, fechou Series D de $2.3B liderada por Thrive Capital
    e a]16z, atingindo valuation de $29.3B. A empresa ultrapassou $1B em ARR (receita anual recorrente),
    tornando-se o unicórnio mais rápido da história de developer tools.`,
    keyTakeaways: [
      'Valuation: $29.3 bilhões',
      'Series D: $2.3 bilhões',
      'ARR: $1B+ (ultrapassou em 2025)',
      'Crescimento: 50%+ MoM',
      'Fundada em 2022 - unicórnio em 2 anos',
    ],
    strategicInsights: [
      { title: 'AI Coding é o maior mercado de AI tools', description: 'Desenvolvedores pagam premium por produtividade', impact: 'high', category: 'opportunity' },
    ],
    valuation: {
      estimatedValue: '$29.3B',
      valueRange: { min: '$28B', max: '$32B' },
      methodology: 'Series D valuation',
      comparables: ['GitHub ($7.5B, 2018)', 'JetBrains ($7B)', 'GitLab ($15B peak)'],
      multiples: { revenueMultiple: '~29x ARR', arbMultiple: '20-25x forward' },
      confidence: 'high',
    },
    companies: [
      { name: 'Cursor/Anysphere', role: 'target' },
      { name: 'Thrive Capital', role: 'investor' },
      { name: 'a16z', role: 'investor' },
    ],
    marketImpact: 'significant',
    sectors: ['Developer Tools', 'AI Coding', 'IDE'],
  },
  {
    id: 'openai-500b-valuation',
    title: 'OpenAI atinge $500B de valuation - maior empresa privada do mundo',
    headline: 'GPT-5 e reestruturação corporativa impulsionam valor recorde',
    source: 'WSJ / Financial Times',
    url: 'https://wsj.com',
    timestamp: '2025-10-01T12:00:00Z',
    category: 'funding',
    isBreaking: false,
    strategicSummary: `A OpenAI atingiu valuation de $500 bilhões após nova rodada de funding, tornando-se
    a empresa privada mais valiosa do mundo. O lançamento do GPT-5 em agosto e GPT-5.1 em novembro,
    combinado com reestruturação para for-profit, impulsionaram a avaliação.`,
    keyTakeaways: [
      'Valuation: $500 bilhões',
      'Empresa privada mais valiosa do mundo',
      'GPT-5 lançado em agosto 2025',
      'GPT-5.1 lançado em novembro 2025',
      'Reestruturação para for-profit em andamento',
    ],
    strategicInsights: [
      { title: 'OpenAI consolida liderança', description: 'Apesar de competição, mantém posição dominante', impact: 'high', category: 'trend' },
    ],
    valuation: {
      estimatedValue: '$500B',
      valueRange: { min: '$480B', max: '$520B' },
      methodology: 'Secondary market + new funding round',
      comparables: ['Anthropic ($183B)', 'Google ($2T)', 'Apple ($3T)'],
      multiples: { revenueMultiple: '~50x forward revenue', arbMultiple: 'N/A' },
      confidence: 'high',
    },
    companies: [{ name: 'OpenAI', role: 'target' }],
    marketImpact: 'transformative',
    sectors: ['Frontier AI', 'AGI Race', 'Enterprise AI'],
  },
  {
    id: 'xai-200b-valuation',
    title: 'xAI de Elon Musk atinge $200B de valuation após raise de $10B',
    headline: 'Grok 3 e supercluster de 100K GPUs impulsionam avaliação',
    source: 'Bloomberg / Reuters',
    url: 'https://bloomberg.com',
    timestamp: '2025-09-01T10:00:00Z',
    category: 'funding',
    isBreaking: false,
    strategicSummary: `A xAI de Elon Musk atingiu valuation de $200 bilhões após levantar $10B de
    investidores incluindo a]16z e Sequoia. A empresa opera o maior supercluster de GPUs do mundo
    (100K H100s) e lançou o Grok 3 com performance competitiva aos melhores modelos.`,
    keyTakeaways: [
      'Valuation: $200 bilhões',
      'Raise: $10 bilhões',
      'Supercluster: 100,000 GPUs H100',
      'Grok 3 competindo com GPT-4/Claude',
      'Integração profunda com X (Twitter)',
    ],
    strategicInsights: [
      { title: 'xAI é o 3º player em frontier AI', description: 'Musk entrou na corrida com recursos massivos', impact: 'high', category: 'trend' },
    ],
    valuation: {
      estimatedValue: '$200B',
      valueRange: { min: '$180B', max: '$220B' },
      methodology: 'Funding round valuation',
      comparables: ['OpenAI ($500B)', 'Anthropic ($183B)'],
      multiples: { revenueMultiple: 'N/A (pre-revenue)', arbMultiple: 'Strategic value' },
      confidence: 'medium',
    },
    companies: [
      { name: 'xAI', role: 'target' },
      { name: 'a16z', role: 'investor' },
      { name: 'Sequoia', role: 'investor' },
    ],
    marketImpact: 'significant',
    sectors: ['Frontier AI', 'Social Media', 'AI Infrastructure'],
  },
  {
    id: 'meta-scale-ai',
    title: 'Meta investe $14.3B por 49% da Scale AI',
    headline: 'Alexandr Wang se torna Chief AI Officer da Meta',
    source: 'WSJ / TechCrunch',
    url: 'https://wsj.com',
    timestamp: '2025-06-01T14:00:00Z',
    category: 'partnership',
    isBreaking: false,
    strategicSummary: `A Meta fez investimento estratégico de $14.3 bilhões por 49% da Scale AI,
    tornando Alexandr Wang (fundador da Scale) o novo Chief AI Officer da Meta. O movimento
    sinaliza intensificação dos esforços de AI da Meta e acesso a dados de treinamento de qualidade.`,
    keyTakeaways: [
      'Meta investe $14.3B por 49% da Scale AI',
      'Alexandr Wang vira Chief AI Officer da Meta',
      'Scale AI valuation implícito: ~$30B',
      'Acesso a dados de treinamento de qualidade',
      'Meta intensifica corrida por AI',
    ],
    strategicInsights: [
      { title: 'Data quality é o novo moat', description: 'Quem tem melhores dados treina melhores modelos', impact: 'high', category: 'trend' },
    ],
    companies: [
      { name: 'Meta', role: 'acquirer' },
      { name: 'Scale AI', role: 'target' },
    ],
    marketImpact: 'significant',
    sectors: ['Data Labeling', 'Frontier AI', 'Social Media'],
  },
  {
    id: 'google-gemini-3',
    title: 'Google lança Gemini 3 e Gemini 3 Flash',
    headline: 'Arquitetura nativa multimodal com 10M context window',
    source: 'Google Blog / TechCrunch',
    url: 'https://blog.google',
    timestamp: '2025-11-20T16:00:00Z',
    category: 'product',
    isBreaking: false,
    strategicSummary: `O Google DeepMind lançou o Gemini 3 com arquitetura nativa multimodal e context
    window de 10 milhões de tokens. O Gemini 3 Flash oferece 90% da performance a 10% do custo,
    ideal para aplicações em escala.`,
    keyTakeaways: [
      'Gemini 3: context window de 10M tokens',
      'Arquitetura nativa multimodal',
      'Gemini 3 Flash: 90% performance, 10% custo',
      'Integração profunda com Google Cloud',
      'Competindo diretamente com GPT-5',
    ],
    strategicInsights: [
      { title: 'Google recupera terreno', description: 'Após atrasos, Gemini 3 compete em pé de igualdade', impact: 'medium', category: 'trend' },
    ],
    companies: [{ name: 'Google DeepMind', role: 'partner' }],
    marketImpact: 'significant',
    sectors: ['Frontier AI', 'Cloud AI', 'Enterprise AI'],
  },
  {
    id: 'openai-jony-ive',
    title: 'OpenAI adquire io Products de Jony Ive por $6.5B',
    headline: 'Designer lendário da Apple vai criar hardware AI para OpenAI',
    source: 'Bloomberg / NYT',
    url: 'https://bloomberg.com',
    timestamp: '2025-08-15T11:00:00Z',
    category: 'acquisition',
    isBreaking: false,
    strategicSummary: `A OpenAI adquiriu a io Products, startup de Jony Ive (ex-designer chefe da Apple),
    por $6.5 bilhões. O objetivo é criar dispositivos de hardware AI-native que competirão com
    smartphones e computadores tradicionais.`,
    keyTakeaways: [
      'Aquisição: $6.5 bilhões',
      'Jony Ive liderará design de hardware AI',
      'Foco em dispositivos AI-native',
      'Competição direta com Apple',
      'Visão de "AI-first" hardware',
    ],
    strategicInsights: [
      { title: 'Hardware AI é a próxima fronteira', description: 'Software AI precisa de hardware dedicado para experiência ideal', impact: 'high', category: 'opportunity' },
    ],
    valuation: {
      estimatedValue: '$6.5B',
      valueRange: { min: '$6B', max: '$7B' },
      methodology: 'Acquisition price',
      comparables: ['Beats ($3B by Apple)', 'Nest ($3.2B by Google)'],
      multiples: { revenueMultiple: 'N/A (pre-revenue)', arbMultiple: 'Strategic value' },
      confidence: 'high',
    },
    companies: [
      { name: 'OpenAI', role: 'acquirer' },
      { name: 'io Products', role: 'target' },
    ],
    marketImpact: 'significant',
    sectors: ['AI Hardware', 'Consumer Electronics', 'Design'],
  },
];

// ============================================================================
// 2025 TIMELINE EVENTS DATA
// ============================================================================

const get2025Timeline = (): Timeline2025Event[] => [
  { id: 't1', date: '2025-01-21', month: 1, title: 'Project Stargate anunciado', description: '$500B em infraestrutura AI nos EUA', category: 'partnership', player: 'OpenAI + SoftBank + Oracle', value: '$500B', impact: 'transformative' },
  { id: 't2', date: '2025-01-27', month: 1, title: 'DeepSeek R1 lançado', description: 'Modelo chinês iguala GPT-4 com $5.6M de custo', category: 'product', player: 'DeepSeek', impact: 'transformative' },
  { id: 't3', date: '2025-01-27', month: 1, title: 'NVIDIA perde $588B', description: 'Maior queda de market cap em um dia na história', category: 'milestone', player: 'NVIDIA', value: '-$588B', impact: 'transformative' },
  { id: 't4', date: '2025-02-01', month: 2, title: 'EU AI Act entra em vigor', description: 'Primeira regulação abrangente de AI do mundo', category: 'regulation', player: 'European Union', impact: 'significant' },
  { id: 't5', date: '2025-03-15', month: 3, title: 'Anthropic Series F', description: '$13B raise, $183B valuation', category: 'funding', player: 'Anthropic', value: '$13B', impact: 'significant' },
  { id: 't6', date: '2025-03-20', month: 3, title: 'Gemini 2.5 lançado', description: 'Google atualiza flagship model', category: 'product', player: 'Google DeepMind', impact: 'moderate' },
  { id: 't7', date: '2025-06-01', month: 6, title: 'Meta + Scale AI', description: '$14.3B por 49%, Wang vira Chief AI Officer', category: 'partnership', player: 'Meta', value: '$14.3B', impact: 'significant' },
  { id: 't8', date: '2025-08-01', month: 8, title: 'GPT-5 lançado', description: 'OpenAI lança modelo de nova geração', category: 'product', player: 'OpenAI', impact: 'transformative' },
  { id: 't9', date: '2025-08-15', month: 8, title: 'OpenAI adquire io Products', description: 'Jony Ive vai criar hardware AI', category: 'acquisition', player: 'OpenAI', value: '$6.5B', impact: 'significant' },
  { id: 't10', date: '2025-09-01', month: 9, title: 'xAI atinge $200B', description: 'Raise de $10B, Grok 3 lançado', category: 'funding', player: 'xAI', value: '$10B', impact: 'significant' },
  { id: 't11', date: '2025-10-01', month: 10, title: 'OpenAI atinge $500B', description: 'Empresa privada mais valiosa do mundo', category: 'funding', player: 'OpenAI', value: '$500B', impact: 'transformative' },
  { id: 't12', date: '2025-11-01', month: 11, title: 'Claude Opus 4.5 lançado', description: 'Hybrid thinking, SOTA em coding', category: 'product', player: 'Anthropic', impact: 'significant' },
  { id: 't13', date: '2025-11-15', month: 11, title: 'Cursor $29.3B valuation', description: 'Series D de $2.3B, $1B+ ARR', category: 'funding', player: 'Cursor/Anysphere', value: '$2.3B', impact: 'significant' },
  { id: 't14', date: '2025-11-15', month: 11, title: 'GPT-5.1 lançado', description: 'Melhorias incrementais ao GPT-5', category: 'product', player: 'OpenAI', impact: 'moderate' },
  { id: 't15', date: '2025-11-20', month: 11, title: 'Gemini 3 lançado', description: '10M context, native multimodal', category: 'product', player: 'Google DeepMind', impact: 'significant' },
  { id: 't16', date: '2025-12-01', month: 12, title: 'Meta adquire Manus AI', description: 'Startup de AI agents viral', category: 'acquisition', player: 'Meta', impact: 'significant' },
  { id: 't17', date: '2025-12-15', month: 12, title: 'Gemini 3 Flash lançado', description: '90% performance, 10% custo', category: 'product', player: 'Google DeepMind', impact: 'moderate' },
  { id: 't18', date: '2025-12-20', month: 12, title: 'AI Agents market: $7.92B', description: 'Projeção: $236B até 2034', category: 'milestone', player: 'Industry', value: '$7.92B', impact: 'significant' },
];

// ============================================================================
// CHESS MOVES DATA - Strategic Plays 2025
// ============================================================================

const getChessMoves = (): ChessMove[] => [
  {
    id: 'cm1',
    player: 'OpenAI',
    moveType: 'infrastructure',
    title: 'Project Stargate',
    description: '$500B joint venture para data centers',
    date: '2025-01-21',
    value: '$500B',
    impact: 'game_changing',
    chessNotation: 'OpenAI ♛→GPU+++ (Stargate)',
    strategicThesis: 'Controlar a infraestrutura para escalar AGI. Sem GPUs abundantes, não há supremacia em AI. Move para garantir que nenhum competidor terá acesso ao mesmo poder computacional.',
    competitiveResponse: 'Google acelerou expansão de TPUs. China redobrou investimento em chips nacionais. Anthropic focou em eficiência de modelo (fazer mais com menos).',
    marketImplication: 'Criou barreira de entrada de $500B. Qualquer startup que queira competir em frontier AI precisará de parcerias com hyperscalers.',
    opensPosition: ['Dominância em training de modelos maiores', 'Leverage sobre Microsoft', 'Moat de infraestrutura'],
    closesPosition: ['Startups sem capital', 'China (restrições de chips)', 'Europa (regulação)'],
    isDefensive: false
  },
  {
    id: 'cm2',
    player: 'DeepSeek',
    moveType: 'product',
    title: 'R1 Model Launch',
    description: 'Modelo frontier com $5.6M de custo',
    date: '2025-01-27',
    value: '$5.6M',
    impact: 'game_changing',
    targetPlayer: 'NVIDIA',
    chessNotation: 'DeepSeek ♝→Efficiency++ (R1)',
    strategicThesis: 'Invalidar a tese de que AI frontier requer bilhões em compute. Demonstrar que otimização arquitetural pode compensar GPUs. Golpe direto na valoração de NVIDIA.',
    competitiveResponse: 'NVIDIA perdeu $588B em market cap em um dia. OpenAI questionou números. Meta iniciou projeto interno de otimização.',
    marketImplication: 'Mudou o debate de "quem tem mais GPUs" para "quem é mais eficiente". Abriu espaço para competidores menores.',
    opensPosition: ['China como competidor real', 'Startups com capital limitado', 'Open source AI'],
    closesPosition: ['NVIDIA premium pricing', 'Narrative de "AI requer trilhões"'],
    isDefensive: false
  },
  {
    id: 'cm3',
    player: 'Anthropic',
    moveType: 'funding',
    title: 'Series F Mega-Round',
    description: '$13B raise, $183B valuation',
    date: '2025-03-15',
    value: '$13B',
    impact: 'significant',
    chessNotation: 'Anthropic ♜→War Chest+++ (Series F)',
    strategicThesis: 'Acumular capital para competir em infraestrutura enquanto mantém foco em AI safety. Guerra de valuations também é guerra de percepção.',
    competitiveResponse: 'OpenAI acelerou própria rodada. xAI respondeu com raise de $10B. Google aumentou investimento via GCP credits.',
    marketImplication: 'Consolidou Anthropic como #2 em frontier AI. Sinalizou que AI safety pode ser lucrativo.',
    opensPosition: ['Compute para Claude 4/5', 'Enterprise sales expansion', 'Research independence'],
    closesPosition: ['Competitors sem funding'],
    isDefensive: true
  },
  {
    id: 'cm4',
    player: 'Meta',
    moveType: 'partnership',
    title: 'Scale AI Investment',
    description: '$14.3B por 49%, Wang como Chief AI Officer',
    date: '2025-06-01',
    value: '$14.3B',
    impact: 'significant',
    targetPlayer: 'Scale AI',
    chessNotation: 'Meta ♞→Data++ (Scale AI)',
    strategicThesis: 'Resolver gargalo de dados de qualidade para treinar Llama. Scale AI tem os melhores pipelines de data labeling. Alex Wang como CAO traz credibilidade técnica.',
    competitiveResponse: 'OpenAI intensificou parcerias de dados. Google expandiu synthetic data. Anthropic focou em Constitutional AI.',
    marketImplication: 'Validou que data quality é o próximo moat. Mercado de AI data valuation disparou.',
    opensPosition: ['Llama 4 com dados superiores', 'Enterprise AI data services', 'Synthetic data generation'],
    closesPosition: ['Competidores dependentes de Scale AI'],
    isDefensive: false
  },
  {
    id: 'cm5',
    player: 'OpenAI',
    moveType: 'product',
    title: 'GPT-5 Launch',
    description: 'Modelo de nova geração',
    date: '2025-08-01',
    impact: 'game_changing',
    chessNotation: 'OpenAI ♛→Model+++ (GPT-5)',
    strategicThesis: 'Manter liderança em capabilities. Cada geração de modelo é chance de ampliar gap com competidores. GPT-5 deve ser step-change, não incremental.',
    competitiveResponse: 'Anthropic acelerou Claude 4. Google respondeu com Gemini 2.5 Ultra. Mercado inteiro recalibrou roadmaps.',
    marketImplication: 'Redefiniu baseline de capabilities. Qualquer benchmark pré-GPT-5 tornou-se obsoleto.',
    opensPosition: ['AGI narrative', 'Enterprise contracts', 'Consumer mindshare'],
    closesPosition: ['Modelos anteriores', 'Fine-tuning businesses'],
    isDefensive: false
  },
  {
    id: 'cm6',
    player: 'OpenAI',
    moveType: 'acquisition',
    title: 'io Products (Jony Ive)',
    description: 'Hardware AI-native',
    date: '2025-08-15',
    value: '$6.5B',
    impact: 'significant',
    targetPlayer: 'io Products',
    chessNotation: 'OpenAI ♜→Hardware++ (Jony Ive)',
    strategicThesis: 'Controlar toda a stack: modelo + infra + hardware. Jony Ive pode criar o "iPhone do AI" - device que torna ChatGPT onipresente no mundo físico.',
    competitiveResponse: 'Meta acelerou Ray-Ban smart glasses. Google expandiu Pixel AI features. Apple... ficou em silêncio (preocupante para eles).',
    marketImplication: 'OpenAI agora compete com Apple/Samsung em hardware. Vertical integration total.',
    opensPosition: ['Consumer hardware market', 'Wearables AI', 'IoT AI'],
    closesPosition: ['Apple AI hardware', 'Samsung AI hardware'],
    isDefensive: false
  },
  {
    id: 'cm7',
    player: 'xAI',
    moveType: 'funding',
    title: '$10B Raise',
    description: '$200B valuation, Grok 3',
    date: '2025-09-01',
    value: '$10B',
    impact: 'significant',
    chessNotation: 'xAI ♝→Capital++ ($10B)',
    strategicThesis: 'Musk usando X data + Tesla compute + SpaceX capital. Play de integração vertical via conglomerado Musk. Grok como "AI com personalidade".',
    competitiveResponse: 'OpenAI intensificou PR. Anthropic focou em diferenciação por safety. Google ignorou publicamente.',
    marketImplication: 'Quinto player sério em frontier AI. Fragmentação do mercado aumentou.',
    opensPosition: ['X platform integration', 'Tesla robotics AI', 'Government contracts'],
    closesPosition: ['Narrative de "só 3 players"'],
    isDefensive: false
  },
  {
    id: 'cm8',
    player: 'OpenAI',
    moveType: 'funding',
    title: '$500B Valuation',
    description: 'Empresa privada mais valiosa',
    date: '2025-10-01',
    value: '$500B',
    impact: 'game_changing',
    chessNotation: 'OpenAI ♛→Valuation+++ ($500B)',
    strategicThesis: 'Valuation como moat. Quanto maior, mais difícil para competidores levantar capital no mesmo múltiplo. Creates perception of inevitability.',
    competitiveResponse: 'VCs recalibraram expectativas. Startups de AI tiveram mais dificuldade de fundraise. Consolidation talks começaram.',
    marketImplication: 'Definiu AI como categoria de $500B+. Trouxe mais capital institucional para o setor.',
    opensPosition: ['Acquisitions', 'Talent wars', 'Brand dominance'],
    closesPosition: ['IPOs de competidores em valuation similar'],
    isDefensive: true
  },
  {
    id: 'cm9',
    player: 'Anthropic',
    moveType: 'product',
    title: 'Claude Opus 4.5',
    description: 'Hybrid thinking, SOTA coding',
    date: '2025-11-01',
    impact: 'significant',
    chessNotation: 'Anthropic ♜→Model++ (Opus 4.5)',
    strategicThesis: 'Nichar em coding e safety. Não tentar vencer GPT-5 em tudo - vencer em casos de uso específicos onde Anthropic tem edge.',
    competitiveResponse: 'GitHub Copilot acelerou updates. Cursor integrou Claude como opção. OpenAI focou em o1 reasoning.',
    marketImplication: 'Validou estratégia de especialização. Developer tools viraram battleground.',
    opensPosition: ['Developer market', 'Enterprise secure AI', 'Claude Code expansion'],
    closesPosition: ['Generic chatbot positioning'],
    isDefensive: false
  },
  {
    id: 'cm10',
    player: 'Cursor',
    moveType: 'funding',
    title: 'Series D $2.3B',
    description: '$29.3B valuation, $1B+ ARR',
    date: '2025-11-15',
    value: '$2.3B',
    impact: 'significant',
    chessNotation: 'Cursor ♞→Growth+++ ($29.3B)',
    strategicThesis: 'Capturar developer workflow inteiro. IDE é novo browser - quem controla onde devs trabalham, controla como AI é usado.',
    competitiveResponse: 'Microsoft acelerou VS Code + Copilot. JetBrains lançou AI features. Replit pivotou para AI-first.',
    marketImplication: 'AI IDE é categoria de $30B+. Developer tools entraram em hype cycle.',
    opensPosition: ['Enterprise dev teams', 'AI-native coding education', 'Plugin ecosystem'],
    closesPosition: ['Traditional IDEs sem AI'],
    isDefensive: false
  },
  {
    id: 'cm11',
    player: 'Google',
    moveType: 'product',
    title: 'Gemini 3',
    description: '10M context, native multimodal',
    date: '2025-11-20',
    impact: 'significant',
    chessNotation: 'Google ♝→Context+++ (Gemini 3)',
    strategicThesis: 'Vencer em context window e multimodal. Onde Google tem vantagem (search, YouTube data, Android sensors), aplicar AI.',
    competitiveResponse: 'OpenAI anunciou roadmap de long context. Anthropic expandiu context de Claude. Meta focou em Llama 4.',
    marketImplication: 'Long context virou feature table stakes. 10M tokens como novo baseline.',
    opensPosition: ['Document analysis', 'Video understanding', 'Android AI integration'],
    closesPosition: ['Short context models', 'Text-only models'],
    isDefensive: false
  },
  {
    id: 'cm12',
    player: 'Meta',
    moveType: 'acquisition',
    title: 'Manus AI',
    description: 'AI agents para consumer/enterprise',
    date: '2025-12-01',
    impact: 'significant',
    targetPlayer: 'Manus AI',
    chessNotation: 'Meta ♞→Agents++ (Manus)',
    strategicThesis: 'Agents são a próxima interface de AI. Manus viralizou mostrando agents que executam tarefas complexas. Meta quer agents no WhatsApp/Instagram.',
    competitiveResponse: 'OpenAI acelerou Operator. Anthropic expandiu computer use. Google lançou Project Mariner.',
    marketImplication: 'AI agents market validado. Interface de "conversa → ação" é o futuro.',
    opensPosition: ['WhatsApp AI agents', 'Instagram shopping agents', 'Meta business tools'],
    closesPosition: ['Chatbot-only approaches'],
    isDefensive: false
  },
];

// ============================================================================
// PARETO HISTORICAL EVENTS - Top 20% that shaped 80% of AI
// ============================================================================

const getParetoHistory = (): ParetoHistoricalEvent[] => [
  {
    id: 'ph1',
    year: 2012,
    title: 'AlexNet vence ImageNet',
    description: 'Primeira deep neural network a vencer competição de visão computacional por margem massiva',
    player: 'Alex Krizhevsky / Geoffrey Hinton',
    category: 'breakthrough',
    paretoScore: 10,
    impact: 'Provou que deep learning funciona. Iniciou a era moderna de AI.',
    rippleEffects: [
      'Todos os labs de AI pivotaram para deep learning',
      'NVIDIA começou a focar em AI',
      'Funding para AI research disparou',
      'Google, Facebook, Microsoft iniciaram AI divisions'
    ],
    stillRelevant: true
  },
  {
    id: 'ph2',
    year: 2014,
    title: 'Google adquire DeepMind por $500M',
    description: 'Startup de AI fundada em 2010 comprada por Google',
    player: 'Google / DeepMind',
    category: 'acquisition',
    paretoScore: 9,
    impact: 'Validou AI como categoria de aquisição estratégica. Trouxe Demis Hassabis para Google.',
    rippleEffects: [
      'Iniciou corrida de aquisições de AI',
      'Outros labs começaram a ser comprados',
      'Talent war em AI começou',
      'Preços de AI researchers dispararam'
    ],
    stillRelevant: true
  },
  {
    id: 'ph3',
    year: 2017,
    title: 'Paper "Attention Is All You Need"',
    description: 'Transformer architecture publicada por Google',
    player: 'Vaswani et al. / Google',
    category: 'breakthrough',
    paretoScore: 10,
    impact: 'Fundação de TODOS os LLMs modernos. GPT, Claude, Gemini - todos são Transformers.',
    rippleEffects: [
      'BERT, GPT, T5 - todos baseados em Transformers',
      'Fim da era de RNNs/LSTMs para NLP',
      'Scaling laws começaram a emergir',
      'OpenAI pivotou completamente para Transformers'
    ],
    stillRelevant: true
  },
  {
    id: 'ph4',
    year: 2018,
    title: 'GPT-1 lançado',
    description: 'Primeiro modelo GPT da OpenAI - 117M parâmetros',
    player: 'OpenAI',
    category: 'product',
    paretoScore: 8,
    impact: 'Prova de conceito de generative pre-training. Fundação de tudo que veio depois.',
    rippleEffects: [
      'Paradigma de pre-training + fine-tuning estabelecido',
      'OpenAI definiu arquitetura que dominaria',
      'Competitors começaram a seguir',
      'Transfer learning em NLP virou padrão'
    ],
    stillRelevant: true
  },
  {
    id: 'ph5',
    year: 2020,
    title: 'GPT-3 lançado',
    description: '175B parâmetros, primeiro modelo com emergent abilities visíveis',
    player: 'OpenAI',
    category: 'product',
    paretoScore: 10,
    impact: 'Momento "isso muda tudo". Demonstrou que scale → capabilities.',
    rippleEffects: [
      'Scaling hypothesis validada',
      'API economy de AI começou',
      'Milhares de startups fundadas em cima de GPT-3',
      'Anthropic fundada por ex-OpenAI',
      'Google acelerou PaLM/Gemini'
    ],
    stillRelevant: true
  },
  {
    id: 'ph6',
    year: 2021,
    title: 'GitHub Copilot lançado',
    description: 'Primeiro AI coding assistant mainstream',
    player: 'GitHub / OpenAI',
    category: 'product',
    paretoScore: 9,
    impact: 'Provou que AI pode aumentar produtividade de developers. Criou categoria.',
    rippleEffects: [
      'AI coding tools viraram categoria de $10B+',
      'Cursor, Tabnine, Amazon Q emergiram',
      'Developers adotaram AI mais rápido que outras profissões',
      'Microsoft ganhou moat em developer tools'
    ],
    stillRelevant: true
  },
  {
    id: 'ph7',
    year: 2022,
    title: 'ChatGPT lançado',
    description: '100M usuários em 2 meses - produto de crescimento mais rápido da história',
    player: 'OpenAI',
    category: 'product',
    paretoScore: 10,
    impact: 'AI deixou de ser B2B/research e virou consumer. Momento "iPhone de AI".',
    rippleEffects: [
      'Google declarou "code red"',
      'Microsoft investiu $10B+ na OpenAI',
      'Toda empresa do mundo começou projeto de AI',
      'AI virou tema mainstream, não tech-only',
      'Reguladores acordaram para AI'
    ],
    stillRelevant: true
  },
  {
    id: 'ph8',
    year: 2023,
    title: 'GPT-4 lançado',
    description: 'Primeiro modelo a passar em bar exam, LSAT, outros testes profissionais',
    player: 'OpenAI',
    category: 'product',
    paretoScore: 9,
    impact: 'AI passou de "impressionante" para "profissionalmente capaz". Bar for intelligence raised.',
    rippleEffects: [
      'Discussões sobre AI substituir profissões começaram seriamente',
      'Enterprise adoption acelerou 10x',
      'Anthropic lançou Claude 2 em resposta',
      'Google lançou Gemini em resposta'
    ],
    stillRelevant: true
  },
  {
    id: 'ph9',
    year: 2023,
    title: 'Llama 2 liberado como open source',
    description: 'Meta libera modelo frontier como open source',
    player: 'Meta',
    category: 'product',
    paretoScore: 9,
    impact: 'Democratizou acesso a LLMs de qualidade. Mudou estratégia de toda a indústria.',
    rippleEffects: [
      'Open source AI virou movimento',
      'Milhares de fine-tunes surgiram',
      'Mistral fundada na Europa',
      'Debate open vs closed source intensificou',
      'China ganhou acesso a modelos competitivos'
    ],
    stillRelevant: true
  },
  {
    id: 'ph10',
    year: 2024,
    title: 'Claude 3 Opus supera GPT-4 em benchmarks',
    description: 'Primeiro modelo a superar GPT-4 consistentemente',
    player: 'Anthropic',
    category: 'product',
    paretoScore: 8,
    impact: 'Fim do monopólio OpenAI em capabilities. Mercado realmente competitivo.',
    rippleEffects: [
      'Enterprise começou a considerar alternatives',
      'Multi-model strategies viraram padrão',
      'OpenAI acelerou GPT-5',
      'Pricing war começou'
    ],
    stillRelevant: true
  },
  {
    id: 'ph11',
    year: 2024,
    title: 'EU AI Act aprovado',
    description: 'Primeira regulação abrangente de AI no mundo',
    player: 'European Union',
    category: 'regulation',
    paretoScore: 8,
    impact: 'Estabeleceu framework regulatório que outros países estudam. AI deixou de ser "wild west".',
    rippleEffects: [
      'Compliance de AI virou requisito',
      'Algumas empresas evitaram Europa',
      'EUA começou a discutir regulação similar',
      'AI safety ganhou importância comercial'
    ],
    stillRelevant: true
  },
  {
    id: 'ph12',
    year: 2024,
    title: 'Sora (OpenAI video) anunciado',
    description: 'Modelo de geração de vídeo com qualidade cinematográfica',
    player: 'OpenAI',
    category: 'product',
    paretoScore: 8,
    impact: 'Provou que AI pode gerar vídeo de alta qualidade. Hollywood em alerta.',
    rippleEffects: [
      'Runway, Pika, Kling aceleraram',
      'Discussão sobre AI em entertainment',
      'Deepfakes concerns aumentaram',
      'Adobe/Creative tools pivotaram para AI'
    ],
    stillRelevant: true
  },
];

// ============================================================================
// LEGAL AI MARKET INTELLIGENCE - Chess Game do Setor Jurídico
// ============================================================================

interface LegalAIMove {
  id: string;
  player: string;
  category: 'product' | 'funding' | 'acquisition' | 'partnership' | 'regulation';
  title: string;
  description: string;
  date: string;
  value?: string;
  impact: 'game_changing' | 'significant' | 'tactical';
  strategicThesis: string;
  marketImplication: string;
  targetSegment: string[]; // e.g., 'litigation', 'contracts', 'compliance', 'research'
}

const getLegalAIMoves = (): LegalAIMove[] => [
  {
    id: 'la1',
    player: 'Harvey AI',
    category: 'funding',
    title: 'Series C $100M',
    description: 'Avaliação de $1.5B, maior legal AI startup',
    date: '2024-09-01',
    value: '$100M',
    impact: 'game_changing',
    strategicThesis: 'Capturar Big Law primeiro. Se os top 100 escritórios usam Harvey, vira padrão de mercado. Foco em contratos e due diligence.',
    marketImplication: 'Legal AI deixou de ser nicho. Big Law validou que AI é ferramenta, não ameaça.',
    targetSegment: ['contracts', 'due-diligence', 'litigation']
  },
  {
    id: 'la2',
    player: 'Thomson Reuters / Casetext',
    category: 'acquisition',
    title: 'Aquisição por $650M',
    description: 'Thomson Reuters compra CoCounsel (GPT-4 para advogados)',
    date: '2023-06-01',
    value: '$650M',
    impact: 'game_changing',
    strategicThesis: 'Thomson Reuters precisa de AI para não perder Westlaw para startups. CoCounsel tinha product-market fit comprovado.',
    marketImplication: 'Legacy legal tech acordou. Todas as incumbents precisam de AI strategy.',
    targetSegment: ['research', 'litigation']
  },
  {
    id: 'la3',
    player: 'LexisNexis / Lexis+AI',
    category: 'product',
    title: 'Lexis+ AI Launch',
    description: 'Concorrente direto do CoCounsel com GPT-4',
    date: '2023-11-01',
    impact: 'significant',
    strategicThesis: 'Não perder market share para Thomson Reuters. Lexis tem base de clientes massive - precisa apenas converter.',
    marketImplication: 'Duopólio legal research agora compete em AI também. Preços devem cair.',
    targetSegment: ['research', 'litigation']
  },
  {
    id: 'la4',
    player: 'Ironclad',
    category: 'funding',
    title: 'Series E $150M',
    description: 'Contract lifecycle management com AI',
    date: '2024-01-01',
    value: '$150M',
    impact: 'significant',
    strategicThesis: 'CLM é onde o dinheiro está. Contratos toucham toda empresa. AI pode acelerar 10x o processo de revisão.',
    marketImplication: 'Contract AI é categoria separada de Legal AI. Mercado de $5B+.',
    targetSegment: ['contracts', 'compliance']
  },
  {
    id: 'la5',
    player: 'Anthropic / Claude',
    category: 'product',
    title: 'Claude para Legal Enterprise',
    description: 'Features específicas para legal: citações, confidencialidade, SOC 2',
    date: '2024-06-01',
    impact: 'significant',
    strategicThesis: 'Legal é vertical de alto valor. Advogados pagam premium por AI que não alucina em citações.',
    marketImplication: 'Frontier AI models entrando em legal compete com startups especializadas.',
    targetSegment: ['research', 'contracts', 'compliance']
  },
  {
    id: 'la6',
    player: 'Spellbook',
    category: 'funding',
    title: 'Series B $20M',
    description: 'AI para drafting de contratos em Microsoft Word',
    date: '2024-03-01',
    value: '$20M',
    impact: 'tactical',
    strategicThesis: 'Advogados vivem no Word. AI precisa ir onde eles estão, não forçar novo workflow.',
    marketImplication: 'Plugin approach pode vencer standalone apps em legal.',
    targetSegment: ['contracts']
  },
  {
    id: 'la7',
    player: 'EvenUp',
    category: 'funding',
    title: 'Series C $135M',
    description: 'AI para demand letters em personal injury',
    date: '2024-08-01',
    value: '$135M',
    impact: 'significant',
    strategicThesis: 'Nichar em área específica (PI) e dominar. Demand letters são commoditized - AI perfeita para isso.',
    marketImplication: 'Vertical legal AI pode ser mais lucrativo que horizontal.',
    targetSegment: ['litigation']
  },
  {
    id: 'la8',
    player: 'Robin AI',
    category: 'funding',
    title: 'Series B $26M',
    description: 'Contract review para in-house legal',
    date: '2024-05-01',
    value: '$26M',
    impact: 'tactical',
    strategicThesis: 'In-house legal é underserved. Big Law tem Harvey, in-house precisa de solução própria.',
    marketImplication: 'Bifurcação do mercado: Big Law vs In-house.',
    targetSegment: ['contracts', 'compliance']
  },
  {
    id: 'la9',
    player: 'Relativity / aiR',
    category: 'product',
    title: 'aiR for Review',
    description: 'AI-assisted document review para e-discovery',
    date: '2024-02-01',
    impact: 'significant',
    strategicThesis: 'Relativity já domina e-discovery. Adicionar AI mantém lock-in e aumenta valor por usuário.',
    marketImplication: 'E-discovery + AI é mercado de $3B+. Incumbents têm vantagem.',
    targetSegment: ['litigation', 'due-diligence']
  },
  {
    id: 'la10',
    player: 'Microsoft / Copilot for Legal',
    category: 'product',
    title: 'Copilot integração com prática jurídica',
    description: 'Microsoft 365 Copilot com features para legal',
    date: '2024-11-01',
    impact: 'game_changing',
    strategicThesis: 'Microsoft já está em todo escritório. Copilot para legal pode ser "good enough" para maioria.',
    marketImplication: 'Startups de legal AI enfrentam Microsoft como competidor. Consolidation incoming.',
    targetSegment: ['contracts', 'research', 'compliance']
  },
  {
    id: 'la11',
    player: 'Luminance',
    category: 'funding',
    title: 'Series D',
    description: 'AI para M&A due diligence, usado em deals de $100B+',
    date: '2024-04-01',
    impact: 'significant',
    strategicThesis: 'M&A é onde os fees são maiores. AI que economiza 1000 horas em deal de $10B vale milhões.',
    marketImplication: 'High-end legal AI pode cobrar premium significativo.',
    targetSegment: ['due-diligence', 'contracts']
  },
  {
    id: 'la12',
    player: 'Ontra',
    category: 'funding',
    title: 'Series C $200M',
    description: 'Contract automation para private equity',
    date: '2024-07-01',
    value: '$200M',
    impact: 'significant',
    strategicThesis: 'PE tem volume massivo de contratos padronizados. AI + network effects = moat.',
    marketImplication: 'Legal AI para financial services é sub-vertical de $2B+.',
    targetSegment: ['contracts', 'compliance']
  },
];

// Legal AI Market Summary
const getLegalAIMarketSummary = () => ({
  marketSize2024: '$1.2B',
  marketSize2030: '$12.5B',
  cagr: '47%',
  topSegments: [
    { name: 'Contract Analysis & Management', share: 32, growth: 52 },
    { name: 'Legal Research', share: 25, growth: 45 },
    { name: 'E-Discovery', share: 20, growth: 38 },
    { name: 'Due Diligence', share: 15, growth: 55 },
    { name: 'Compliance', share: 8, growth: 60 },
  ],
  keyTrends: [
    'Big Law adoptou AI 2x mais rápido que mid-market',
    'In-house legal teams são fastest growing segment',
    'Microsoft Copilot commoditizing basic legal AI',
    'Vertical specialists (PI, M&A) outperforming horizontals',
    'Brasil: mercado de R$500M+ em legal tech, AI ainda nascente',
  ],
  brazilContext: {
    marketSize: 'R$500M (legal tech total)',
    aiPenetration: '< 5%',
    topPlayers: ['Juridoc', 'Turivius', 'Compasso Jurídico', 'Legal Labs'],
    opportunities: [
      'Automação de petições repetitivas',
      'Due diligence para M&A local',
      'Compliance LGPD automatizado',
      'Análise de jurisprudência tribunais',
    ],
    challenges: [
      'Dados jurídicos em português são escassos',
      'Tribunais com sistemas legados',
      'Resistência cultural em parte do mercado',
      'Regulação OAB sobre AI em advocacia',
    ],
  },
});

// ============================================================================
// GEOGRAPHIC MARKET DATA
// ============================================================================

const getGeographicData = (): GeographicMarketData[] => [
  {
    region: 'americas',
    name: 'Américas',
    marketSize2024: '$62B',
    marketSize2025: '$89B',
    growth: 43.5,
    topCountries: [
      { name: 'Estados Unidos', share: 78 },
      { name: 'Canadá', share: 8 },
      { name: 'Brasil', share: 6 },
      { name: 'México', share: 4 },
    ],
    keyTrends: [
      'Liderança em frontier AI (OpenAI, Anthropic, Google)',
      'Maior concentração de AI startups',
      'Enterprise adoption mais madura',
      'Regulação fragmentada por estado',
    ],
    majorPlayers: ['OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Meta', 'xAI'],
  },
  {
    region: 'emea',
    name: 'Europa, Oriente Médio e África',
    marketSize2024: '$28B',
    marketSize2025: '$42B',
    growth: 50.0,
    topCountries: [
      { name: 'Reino Unido', share: 28 },
      { name: 'Alemanha', share: 22 },
      { name: 'França', share: 15 },
      { name: 'Israel', share: 12 },
    ],
    keyTrends: [
      'EU AI Act como marco regulatório global',
      'Foco em AI ética e responsável',
      'Startups de AI safety em crescimento',
      'Investimento governamental crescente',
    ],
    majorPlayers: ['DeepMind (UK)', 'Mistral (FR)', 'Aleph Alpha (DE)', 'AI21 Labs (IL)'],
  },
  {
    region: 'apac',
    name: 'Ásia-Pacífico',
    marketSize2024: '$35B',
    marketSize2025: '$54B',
    growth: 54.3,
    topCountries: [
      { name: 'China', share: 48 },
      { name: 'Japão', share: 18 },
      { name: 'Coreia do Sul', share: 12 },
      { name: 'Índia', share: 10 },
    ],
    keyTrends: [
      'China como segundo polo de AI mundial',
      'DeepSeek demonstra eficiência de custo',
      'Japão e Coreia focam em AI industrial',
      'Índia como hub de AI talent',
    ],
    majorPlayers: ['Baidu', 'Alibaba', 'Tencent', 'DeepSeek', 'SoftBank'],
  },
];

// ============================================================================
// TAM/SAM/SOM DATA
// ============================================================================

const getTAMData = (): TAMData[] => [
  {
    category: 'Generative AI',
    tam: { value: '$1.3T', description: 'Todo mercado de software e serviços impactado por GenAI' },
    sam: { value: '$250B', description: 'Aplicações diretas de GenAI (chatbots, copilots, geração)' },
    som: { value: '$45B', description: 'Mercado acessível para novos entrantes (2025)' },
    cagr: '42%',
    year: 2030,
  },
  {
    category: 'AI Agents',
    tam: { value: '$236B', description: 'Automação de tarefas via agentes autônomos' },
    sam: { value: '$47B', description: 'Enterprise AI agents e workflows' },
    som: { value: '$7.9B', description: 'Mercado atual de AI agents (2025)' },
    cagr: '43.8%',
    year: 2034,
  },
  {
    category: 'AI Coding Tools',
    tam: { value: '$50B', description: 'Todo mercado de developer tools + AI' },
    sam: { value: '$15B', description: 'AI coding assistants e IDEs' },
    som: { value: '$2.1B', description: 'Mercado atual (Cursor, Copilot, Claude Code)' },
    cagr: '85%',
    year: 2027,
  },
  {
    category: 'AI Infrastructure',
    tam: { value: '$500B', description: 'Compute, data centers, chips para AI' },
    sam: { value: '$150B', description: 'Cloud AI e inference infrastructure' },
    som: { value: '$89B', description: 'Mercado de AI cloud (2025)' },
    cagr: '52%',
    year: 2028,
  },
];

// ============================================================================
// CATEGORY CONFIGS
// ============================================================================

const categoryConfig = {
  acquisition: { icon: Building2, color: 'text-purple-500', bg: 'bg-purple-500/10', label: 'Aquisição' },
  funding: { icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-500/10', label: 'Funding' },
  product: { icon: Rocket, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Produto' },
  partnership: { icon: Users, color: 'text-orange-500', bg: 'bg-orange-500/10', label: 'Parceria' },
  research: { icon: Brain, color: 'text-pink-500', bg: 'bg-pink-500/10', label: 'Pesquisa' },
  regulation: { icon: Shield, color: 'text-red-500', bg: 'bg-red-500/10', label: 'Regulação' },
};

const impactConfig = {
  transformative: { color: 'text-red-500', bg: 'bg-red-500/10', label: 'Transformativo' },
  significant: { color: 'text-orange-500', bg: 'bg-orange-500/10', label: 'Significativo' },
  moderate: { color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Moderado' },
  minor: { color: 'text-green-500', bg: 'bg-green-500/10', label: 'Menor' },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const date = new Date(timestamp);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (seconds < 60) return 'agora';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min atrás`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h atrás`;
  return `${Math.floor(seconds / 86400)}d atrás`;
}

// ============================================================================
// MINI CHART COMPONENT (SVG-based)
// ============================================================================

function MiniChart({ data, trend }: { data: TimelineDataPoint[]; trend: 'bullish' | 'bearish' | 'neutral' }) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d.value - minValue) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  const color = trend === 'bullish' ? '#10b981' : trend === 'bearish' ? '#ef4444' : '#6b7280';

  return (
    <svg viewBox="0 0 100 100" className="w-full h-16" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`gradient-${trend}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
      <polygon
        fill={`url(#gradient-${trend})`}
        points={`0,100 ${points} 100,100`}
      />
    </svg>
  );
}

// ============================================================================
// DETAILED TREND MODAL COMPONENT
// ============================================================================

interface TrendDetailModalProps {
  trend: MarketTrend;
  onClose: () => void;
}

function TrendDetailModal({ trend, onClose }: TrendDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'players' | 'invest' | 'insights'>('overview');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="text-5xl">{trend.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">{trend.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  trend.trend === 'bullish' ? 'bg-emerald-500/30' :
                  trend.trend === 'bearish' ? 'bg-red-500/30' : 'bg-gray-500/30'
                }`}>
                  {trend.trend === 'bullish' ? '📈 Bullish' : trend.trend === 'bearish' ? '📉 Bearish' : '➡️ Neutral'}
                  {trend.changePercent > 0 ? ' +' : ' '}{trend.changePercent}% {trend.timeframe}
                </span>
              </div>
              <p className="text-white/80">{trend.subtitle}</p>
            </div>
          </div>

          {/* Market Size Banner */}
          <div className="mt-4 grid grid-cols-4 gap-4 bg-white/10 rounded-xl p-4">
            <div>
              <div className="text-white/60 text-xs">Mercado Atual</div>
              <div className="text-xl font-bold">{trend.marketSize.current}</div>
            </div>
            <div>
              <div className="text-white/60 text-xs">Projeção {trend.marketSize.year}</div>
              <div className="text-xl font-bold">{trend.marketSize.projected}</div>
            </div>
            <div>
              <div className="text-white/60 text-xs">CAGR</div>
              <div className="text-xl font-bold">{trend.marketSize.cagr}</div>
            </div>
            <div>
              <div className="text-white/60 text-xs">Categoria</div>
              <div className="text-xl font-bold">{trend.category}</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700 px-6">
          <div className="flex gap-1">
            {[
              { id: 'overview', label: 'Visão Geral', icon: Eye },
              { id: 'players', label: 'Key Players', icon: Users },
              { id: 'invest', label: 'Investimento', icon: DollarSign },
              { id: 'insights', label: 'Insights', icon: Lightbulb },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-3 flex items-center gap-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-320px)]">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {trend.description}
                </p>

                {/* Chart */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <LineChart className="w-5 h-5 text-indigo-500" />
                    Evolução do Mercado
                  </h3>
                  <div className="h-32 mb-4">
                    <MiniChart data={trend.timeline} trend={trend.trend} />
                  </div>
                  <div className="grid grid-cols-6 gap-2 text-xs">
                    {trend.timeline.map((point, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-medium text-slate-900 dark:text-white">{point.value}</div>
                        <div className="text-slate-500">{point.date}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drivers & Risks */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 dark:bg-emerald-500/10 rounded-xl p-5">
                    <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                      <ArrowUpRight className="w-5 h-5" />
                      Drivers de Crescimento
                    </h3>
                    <ul className="space-y-2">
                      {trend.drivers.map((driver, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {driver}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-500/10 rounded-xl p-5">
                    <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Riscos e Desafios
                    </h3>
                    <ul className="space-y-2">
                      {trend.risks.map((risk, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expert Predictions */}
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-xl p-5">
                  <h3 className="font-semibold text-violet-700 dark:text-violet-400 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Previsões de Especialistas
                  </h3>
                  <div className="space-y-4">
                    {trend.expertPredictions.map((pred, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-slate-900 dark:text-white">{pred.source}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            pred.confidence === 'high' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                            pred.confidence === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400' :
                            'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                          }`}>
                            Confiança {pred.confidence === 'high' ? 'Alta' : pred.confidence === 'medium' ? 'Média' : 'Baixa'}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm italic">"{pred.prediction}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'players' && (
              <motion.div
                key="players"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-500" />
                  Principais Players do Mercado
                </h3>

                {trend.keyPlayers.map((player, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">{player.name}</h4>
                          <p className="text-sm text-slate-500">{player.description}</p>
                        </div>
                      </div>
                      {player.marketShare && (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-indigo-500">{player.marketShare}%</div>
                          <div className="text-xs text-slate-500">Market Share</div>
                        </div>
                      )}
                    </div>

                    {player.marketShare && (
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${player.marketShare}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                        />
                      </div>
                    )}

                    {player.recentMove && (
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-slate-600 dark:text-slate-400">Movimento recente:</span>
                        <span className="font-medium text-slate-900 dark:text-white">{player.recentMove}</span>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'invest' && (
              <motion.div
                key="invest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-500" />
                  Oportunidades de Investimento
                </h3>

                {trend.investmentOpportunities.map((opp, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{opp.area}</h4>
                        <div className="flex items-center gap-3 mt-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            opp.riskLevel === 'low' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                            opp.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400' :
                            'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                          }`}>
                            Risco {opp.riskLevel === 'low' ? 'Baixo' : opp.riskLevel === 'medium' ? 'Médio' : 'Alto'}
                          </span>
                          <span className="text-sm text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {opp.timeHorizon}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{opp.potentialReturn}</div>
                        <div className="text-xs text-slate-500">Retorno potencial</div>
                      </div>
                    </div>

                    <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        Tese de Investimento
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{opp.thesis}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'insights' && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Insights Acionáveis
                </h3>

                {/* For Founders */}
                <div className="bg-indigo-50 dark:bg-indigo-500/10 rounded-xl p-5">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-3 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Para Founders
                  </h4>
                  <ul className="space-y-2">
                    {trend.actionableInsights.forFounders.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Target className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For Investors */}
                <div className="bg-emerald-50 dark:bg-emerald-500/10 rounded-xl p-5">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Para Investidores
                  </h4>
                  <ul className="space-y-2">
                    {trend.actionableInsights.forInvestors.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Target className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For Developers */}
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-xl p-5">
                  <h4 className="font-semibold text-violet-700 dark:text-violet-400 mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    Para Desenvolvedores
                  </h4>
                  <ul className="space-y-2">
                    {trend.actionableInsights.forDevelopers.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Target className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// INTERACTIVE TREND CARD COMPONENT
// ============================================================================

interface TrendCardProps {
  trend: MarketTrend;
  onSelect: (trend: MarketTrend) => void;
}

function TrendCard({ trend, onSelect }: TrendCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(trend)}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5
                 cursor-pointer hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{trend.icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-slate-900 dark:text-white">{trend.title}</h3>
            <span className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 ${
              trend.trend === 'bullish'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                : trend.trend === 'bearish'
                ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400'
            }`}>
              {trend.trend === 'bullish' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              {trend.changePercent > 0 ? '+' : ''}{trend.changePercent}%
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{trend.subtitle}</p>
        </div>
      </div>

      {/* Mini Chart */}
      <div className="mb-4 h-16 -mx-2">
        <MiniChart data={trend.timeline} trend={trend.trend} />
      </div>

      {/* Market Size */}
      <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <div className="text-center">
          <div className="text-xs text-slate-500">Atual</div>
          <div className="font-bold text-slate-900 dark:text-white">{trend.marketSize.current}</div>
        </div>
        <div className="text-center border-x border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500">{trend.marketSize.year}</div>
          <div className="font-bold text-indigo-600 dark:text-indigo-400">{trend.marketSize.projected}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-slate-500">CAGR</div>
          <div className="font-bold text-emerald-600 dark:text-emerald-400">{trend.marketSize.cagr}</div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="space-y-1 mb-4">
        {trend.dataPoints.slice(0, 2).map((dp, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <span className="text-slate-500">{dp.label}</span>
            <span className="font-medium text-slate-900 dark:text-white">{dp.value}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600
                       text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all">
        <Eye className="w-4 h-4" />
        Análise Completa
      </button>
    </motion.div>
  );
}

// ============================================================================
// BREAKING NEWS CARD COMPONENT
// ============================================================================

interface BreakingNewsCardProps {
  news: BreakingNewsItem;
  onSelect: (news: BreakingNewsItem) => void;
  isSelected: boolean;
}

function BreakingNewsCard({ news, onSelect, isSelected }: BreakingNewsCardProps) {
  const CategoryIcon = categoryConfig[news.category]?.icon || Newspaper;
  const categoryData = categoryConfig[news.category];
  const impactData = impactConfig[news.marketImpact];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(news)}
      className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300
                  ${isSelected ? 'ring-2 ring-indigo-500 shadow-lg' : 'hover:shadow-md border border-slate-200 dark:border-slate-700'}
                  bg-white dark:bg-slate-900`}
    >
      {news.isBreaking && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500
                       text-white text-xs font-bold py-1 px-3 flex items-center gap-2">
          <Zap className="w-3 h-3 animate-pulse" /> BREAKING NEWS
        </div>
      )}

      <div className={`p-5 ${news.isBreaking ? 'pt-8' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${categoryData.bg} ${categoryData.color}`}>
            <CategoryIcon className="w-3 h-3" /> {categoryData.label}
          </span>
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${impactData.bg} ${impactData.color}`}>
            <Activity className="w-3 h-3" /> {impactData.label}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{news.strategicSummary}</p>

        <div className="flex items-center gap-2 mb-4">
          {news.companies.slice(0, 3).map((company) => (
            <span key={company.name} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-700 dark:text-slate-300">
              {company.name}
            </span>
          ))}
        </div>

        {news.valuation && (
          <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg mb-4">
            <DollarSign className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Valuation: {news.valuation.estimatedValue}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatTimeAgo(news.timestamp)}</span>
          <span>{news.source}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// NEWS DETAIL PANEL COMPONENT
// ============================================================================

interface NewsDetailPanelProps {
  news: BreakingNewsItem;
  onClose: () => void;
}

function NewsDetailPanel({ news, onClose }: NewsDetailPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {news.isBreaking && (
              <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded mb-3">
                <Zap className="w-3 h-3" /> BREAKING
              </div>
            )}
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{news.title}</h2>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {formatTimeAgo(news.timestamp)}</span>
              <span>{news.source}</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto">
        <div>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Análise Estratégica</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{news.strategicSummary}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Pontos-Chave</h3>
          <ul className="space-y-2">
            {news.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {news.valuation && (
          <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-xl">
            <h3 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-4 flex items-center gap-2">
              <LineChart className="w-4 h-4" /> Análise de Valuation
            </h3>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Valor Estimado</span>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{news.valuation.estimatedValue}</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-medium">Range:</span> {news.valuation.valueRange.min} - {news.valuation.valueRange.max}
              </div>
              <div className="text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">Metodologia:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{news.valuation.methodology}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Comparáveis:</span>
                <ul className="mt-2 space-y-1">
                  {news.valuation.comparables.map((comp, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {comp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Insights Estratégicos</h3>
          <div className="grid gap-3">
            {news.strategicInsights.map((insight, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${
                insight.category === 'opportunity' ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-800' :
                insight.category === 'threat' ? 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-800' :
                'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-800'
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded-lg ${
                    insight.category === 'opportunity' ? 'bg-emerald-100 dark:bg-emerald-500/20' :
                    insight.category === 'threat' ? 'bg-red-100 dark:bg-red-500/20' :
                    'bg-blue-100 dark:bg-blue-500/20'
                  }`}>
                    {insight.category === 'opportunity' ? <ArrowUpRight className="w-4 h-4 text-emerald-600" /> :
                     insight.category === 'threat' ? <AlertTriangle className="w-4 h-4 text-red-600" /> :
                     <TrendingUp className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-slate-900 dark:text-white">{insight.title}</h4>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium uppercase ${
                        insight.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' :
                        insight.impact === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400' :
                        'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                      }`}>{insight.impact}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Setores Impactados</h3>
          <div className="flex flex-wrap gap-2">
            {news.sectors.map((sector) => (
              <span key={sector} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                {sector}
              </span>
            ))}
          </div>
        </div>

        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors"
        >
          Ler notícia completa <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN AI NEWS INTELLIGENCE HUB COMPONENT
// ============================================================================

type SectionType = 'news' | 'trends' | 'chess' | 'timeline' | 'geo' | 'legal' | 'pareto';

interface AINewsIntelligenceHubProps {
  onClose?: () => void;
  embedded?: boolean; // When true, renders without modal header (used when embedded in portal)
  initialSection?: SectionType; // Initial section to display
}

export function AINewsIntelligenceHub({ onClose, embedded = false, initialSection = 'trends' }: AINewsIntelligenceHubProps) {
  const [breakingNews, setBreakingNews] = useState<BreakingNewsItem[]>([]);
  const [marketTrends, setMarketTrends] = useState<MarketTrend[]>([]);
  const [selectedNews, setSelectedNews] = useState<BreakingNewsItem | null>(null);
  const [selectedTrend, setSelectedTrend] = useState<MarketTrend | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<SectionType>(initialSection);
  const [timeline2025] = useState<Timeline2025Event[]>(get2025Timeline());
  const [chessMoves] = useState<ChessMove[]>(getChessMoves());
  const [geoData] = useState<GeographicMarketData[]>(getGeographicData());
  const [tamData] = useState<TAMData[]>(getTAMData());
  const [paretoHistory] = useState<ParetoHistoricalEvent[]>(getParetoHistory());
  const [legalAIMoves] = useState<LegalAIMove[]>(getLegalAIMoves());
  const [legalMarketSummary] = useState(getLegalAIMarketSummary());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setBreakingNews(getBreakingNews());
      setMarketTrends(getMarketTrends());
      setIsLoading(false);
    };
    loadData();
  }, []);

  const filteredNews = categoryFilter === 'all' ? breakingNews : breakingNews.filter((n) => n.category === categoryFilter);

  const categories = [
    { id: 'all', label: 'Todas', icon: Globe },
    { id: 'acquisition', label: 'Aquisições', icon: Building2 },
    { id: 'funding', label: 'Funding', icon: DollarSign },
    { id: 'product', label: 'Produtos', icon: Rocket },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400">Carregando Intelligence Hub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={embedded ? "" : "min-h-screen bg-slate-50 dark:bg-slate-950"}>
      {/* Header - Simpler when embedded in portal */}
      <div className={`bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 ${embedded ? '' : 'sticky top-0 z-40'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {!embedded && onClose && (
                <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-slate-500" />
                </button>
              )}
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                  {embedded ? 'Market Intelligence Dashboard' : 'AI News Intelligence Hub'}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {embedded
                    ? 'Notícias, tendências e análise estratégica do mercado AI em 2025'
                    : 'Análise estratégica e insights de mercado em tempo real'
                  }
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setBreakingNews(getBreakingNews());
                setMarketTrends(getMarketTrends());
              }}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Atualizar"
            >
              <RefreshCw className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Section Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveSection('trends')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                activeSection === 'trends'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Market Trends
            </button>
            <button
              onClick={() => setActiveSection('news')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                activeSection === 'news'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              Breaking News
            </button>
            <button
              onClick={() => setActiveSection('chess')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                activeSection === 'chess'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Target className="w-4 h-4" />
              ♟️ Chess Game
            </button>
            <button
              onClick={() => setActiveSection('timeline')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                activeSection === 'timeline'
                  ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Calendar className="w-4 h-4" />
              2025 Timeline
            </button>
            <button
              onClick={() => setActiveSection('geo')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                activeSection === 'geo'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Globe className="w-4 h-4" />
              Geographic & TAM
            </button>
            <button
              onClick={() => setActiveSection('legal')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                activeSection === 'legal'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Shield className="w-4 h-4" />
              ⚖️ Legal AI
            </button>
            <button
              onClick={() => setActiveSection('pareto')}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                activeSection === 'pareto'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              📜 Pareto History
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {activeSection === 'trends' && (
            <motion.div
              key="trends"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-indigo-500" />
                  Market Intelligence Dashboard
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Clique em qualquer tendência para análise profunda com dados, players, oportunidades e insights acionáveis.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {marketTrends.map((trend) => (
                  <TrendCard
                    key={trend.id}
                    trend={trend}
                    onSelect={setSelectedTrend}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'news' && (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Category filters */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setCategoryFilter(cat.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        categoryFilter === cat.id
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" /> {cat.label}
                    </button>
                  );
                })}
              </div>

              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-indigo-500" />
                    Notícias & Análises
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">
                      {filteredNews.length}
                    </span>
                  </h2>
                  <div className="space-y-4">
                    {filteredNews.map((news) => (
                      <BreakingNewsCard
                        key={news.id}
                        news={news}
                        onSelect={setSelectedNews}
                        isSelected={selectedNews?.id === news.id}
                      />
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <AnimatePresence mode="wait">
                    {selectedNews ? (
                      <NewsDetailPanel
                        key={selectedNews.id}
                        news={selectedNews}
                        onClose={() => setSelectedNews(null)}
                      />
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center"
                      >
                        <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                          Selecione uma notícia
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400">
                          Clique em uma notícia para ver a análise estratégica completa
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {/* CHESS GAME SECTION */}
          {activeSection === 'chess' && (
            <motion.div
              key="chess"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-2">
                  ♟️ AI Market Chess Game
                  <span className="text-sm font-normal bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 px-2 py-1 rounded">
                    2025 Strategic Moves
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Cada movimento estratégico dos principais players no mercado de AI. Aquisições, funding, produtos e parcerias.
                </p>
              </div>

              {/* Player Legend */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['OpenAI', 'Anthropic', 'Google', 'Meta', 'xAI', 'Cursor', 'DeepSeek'].map((player) => (
                  <span key={player} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                    {player}
                  </span>
                ))}
              </div>

              {/* Chess Moves Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chessMoves.map((move, idx) => (
                  <motion.div
                    key={move.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`p-5 rounded-xl border-2 transition-all hover:shadow-lg ${
                      move.impact === 'game_changing'
                        ? 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border-amber-300 dark:border-amber-600'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                          move.moveType === 'acquisition' ? 'bg-purple-500' :
                          move.moveType === 'funding' ? 'bg-emerald-500' :
                          move.moveType === 'product' ? 'bg-blue-500' :
                          move.moveType === 'partnership' ? 'bg-orange-500' :
                          move.moveType === 'infrastructure' ? 'bg-cyan-500' :
                          'bg-slate-500'
                        }`}>
                          {move.moveType === 'acquisition' ? '🏢' :
                           move.moveType === 'funding' ? '💰' :
                           move.moveType === 'product' ? '🚀' :
                           move.moveType === 'partnership' ? '🤝' :
                           move.moveType === 'infrastructure' ? '🏗️' : '📋'}
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white">{move.player}</div>
                          <div className="text-xs text-slate-500">{new Date(move.date).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}</div>
                        </div>
                      </div>
                      {move.impact === 'game_changing' && (
                        <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded">
                          GAME CHANGER
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{move.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{move.description}</p>
                    {move.value && (
                      <div className="flex items-center gap-2 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        <DollarSign className="w-4 h-4" />
                        {move.value}
                      </div>
                    )}
                    {move.targetPlayer && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                        <ArrowUpRight className="w-3 h-3" /> Target: {move.targetPlayer}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 2025 TIMELINE SECTION */}
          {activeSection === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-violet-500" />
                  2025 AI Timeline
                  <span className="text-sm font-normal bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400 px-2 py-1 rounded">
                    {timeline2025.length} eventos
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Cronologia completa dos principais eventos de AI em 2025 - do DeepSeek R1 ao Gemini 3.
                </p>
              </div>

              {/* Month Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((month, idx) => {
                  const eventsInMonth = timeline2025.filter(e => e.month === idx + 1).length;
                  return (
                    <span key={month} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                      eventsInMonth > 0
                        ? 'bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}>
                      {month} {eventsInMonth > 0 && `(${eventsInMonth})`}
                    </span>
                  );
                })}
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500" />
                <div className="space-y-4 pl-12">
                  {timeline2025.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="relative"
                    >
                      <div className={`absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                        event.impact === 'transformative' ? 'bg-gradient-to-br from-amber-500 to-red-500' :
                        event.impact === 'significant' ? 'bg-gradient-to-br from-violet-500 to-purple-500' :
                        'bg-slate-400'
                      }`}>
                        {event.category === 'funding' ? '💰' :
                         event.category === 'product' ? '🚀' :
                         event.category === 'acquisition' ? '🏢' :
                         event.category === 'partnership' ? '🤝' :
                         event.category === 'regulation' ? '📜' : '📊'}
                      </div>
                      <div className={`p-4 rounded-xl border ${
                        event.impact === 'transformative'
                          ? 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-500/5 dark:to-orange-500/5 border-amber-200 dark:border-amber-800'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-slate-500">
                            {new Date(event.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                          <span className="text-xs font-medium text-violet-600 dark:text-violet-400">{event.player}</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{event.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{event.description}</p>
                        {event.value && (
                          <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded text-sm font-bold">
                            {event.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* GEOGRAPHIC & TAM SECTION */}
          {activeSection === 'geo' && (
            <motion.div
              key="geo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Geographic Analysis */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-emerald-500" />
                  Geographic Market Analysis
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {geoData.map((region) => (
                    <div key={region.region} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                      <div className={`p-4 text-white ${
                        region.region === 'americas' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                        region.region === 'emea' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                        'bg-gradient-to-r from-orange-500 to-red-500'
                      }`}>
                        <h3 className="text-lg font-bold">{region.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-2xl font-bold">{region.marketSize2025}</span>
                          <span className="text-sm bg-white/20 px-2 py-0.5 rounded">
                            +{region.growth}% YoY
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-4">
                        <div>
                          <h4 className="text-xs font-medium text-slate-500 mb-2">TOP PAÍSES</h4>
                          {region.topCountries.map((country) => (
                            <div key={country.name} className="flex items-center justify-between py-1">
                              <span className="text-sm text-slate-700 dark:text-slate-300">{country.name}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${country.share}%` }} />
                                </div>
                                <span className="text-xs font-medium text-slate-500 w-8">{country.share}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-slate-500 mb-2">TENDÊNCIAS</h4>
                          <ul className="space-y-1">
                            {region.keyTrends.slice(0, 2).map((trend, idx) => (
                              <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                                {trend}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TAM/SAM/SOM Analysis */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                  <PieChart className="w-6 h-6 text-violet-500" />
                  TAM / SAM / SOM Analysis
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {tamData.map((data) => (
                    <div key={data.category} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{data.category}</h3>
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded text-sm font-bold">
                          {data.cagr} CAGR → {data.year}
                        </span>
                      </div>

                      {/* TAM Pyramid */}
                      <div className="space-y-3">
                        <div className="relative">
                          <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg p-4 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs font-medium opacity-80">TAM (Total Addressable)</div>
                                <div className="text-2xl font-bold">{data.tam.value}</div>
                              </div>
                              <div className="text-right text-xs opacity-80 max-w-[50%]">{data.tam.description}</div>
                            </div>
                          </div>
                        </div>
                        <div className="relative ml-6">
                          <div className="bg-gradient-to-r from-violet-400 to-purple-400 rounded-lg p-4 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs font-medium opacity-80">SAM (Serviceable)</div>
                                <div className="text-xl font-bold">{data.sam.value}</div>
                              </div>
                              <div className="text-right text-xs opacity-80 max-w-[50%]">{data.sam.description}</div>
                            </div>
                          </div>
                        </div>
                        <div className="relative ml-12">
                          <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-lg p-4 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs font-medium opacity-80">SOM (Obtainable)</div>
                                <div className="text-lg font-bold">{data.som.value}</div>
                              </div>
                              <div className="text-right text-xs opacity-80 max-w-[50%]">{data.som.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* LEGAL AI SECTION */}
          {activeSection === 'legal' && (
            <motion.div
              key="legal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Legal AI Header */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-2">
                  ⚖️ Legal AI Market Intelligence
                  <span className="text-sm font-normal bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">
                    Setor Jurídico
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Chess Game do mercado de AI para área jurídica. Movimentos estratégicos, funding e aquisições dos principais players.
                </p>
              </div>

              {/* Market Summary Cards */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-5 text-white">
                  <div className="text-sm font-medium opacity-80">Mercado 2024</div>
                  <div className="text-3xl font-bold mt-1">{legalMarketSummary.marketSize2024}</div>
                  <div className="text-xs opacity-70 mt-1">Legal AI Global</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-5 text-white">
                  <div className="text-sm font-medium opacity-80">Projeção 2030</div>
                  <div className="text-3xl font-bold mt-1">{legalMarketSummary.marketSize2030}</div>
                  <div className="text-xs opacity-70 mt-1">{legalMarketSummary.cagr} CAGR</div>
                </div>
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-5 text-white">
                  <div className="text-sm font-medium opacity-80">Maior Segmento</div>
                  <div className="text-xl font-bold mt-1">Contract AI</div>
                  <div className="text-xs opacity-70 mt-1">32% do mercado</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-5 text-white">
                  <div className="text-sm font-medium opacity-80">🇧🇷 Brasil</div>
                  <div className="text-xl font-bold mt-1">{legalMarketSummary.brazilContext.marketSize}</div>
                  <div className="text-xs opacity-70 mt-1">{legalMarketSummary.brazilContext.aiPenetration} AI penetration</div>
                </div>
              </div>

              {/* Segment Breakdown */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Segmentos do Mercado</h3>
                <div className="space-y-3">
                  {legalMarketSummary.topSegments.map((segment) => (
                    <div key={segment.name} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{segment.name}</span>
                          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{segment.share}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all" style={{ width: `${segment.share}%` }} />
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded font-medium">
                        +{segment.growth}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal AI Chess Moves */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  ♟️ Chess Game - Movimentos Estratégicos
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {legalAIMoves.map((move, idx) => (
                    <motion.div
                      key={move.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`p-5 rounded-xl border-2 transition-all hover:shadow-lg ${
                        move.impact === 'game_changing'
                          ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-500/10 dark:to-indigo-500/10 border-blue-300 dark:border-blue-600'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                            move.category === 'acquisition' ? 'bg-purple-500' :
                            move.category === 'funding' ? 'bg-emerald-500' :
                            move.category === 'product' ? 'bg-blue-500' :
                            'bg-orange-500'
                          }`}>
                            {move.category === 'acquisition' ? '🏢' :
                             move.category === 'funding' ? '💰' :
                             move.category === 'product' ? '🚀' : '🤝'}
                          </span>
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">{move.player}</div>
                            <div className="text-xs text-slate-500">{new Date(move.date).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}</div>
                          </div>
                        </div>
                        {move.impact === 'game_changing' && (
                          <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded">
                            GAME CHANGER
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{move.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{move.description}</p>
                      {move.value && (
                        <div className="flex items-center gap-2 text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                          <DollarSign className="w-4 h-4" />
                          {move.value}
                        </div>
                      )}
                      {/* Strategic Thesis */}
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-1">📊 TESE ESTRATÉGICA</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{move.strategicThesis}</p>
                      </div>
                      {/* Market Implication */}
                      <div className="mt-2">
                        <div className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">💡 IMPLICAÇÃO DE MERCADO</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{move.marketImplication}</p>
                      </div>
                      {/* Target Segments */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {move.targetSegment.map((seg) => (
                          <span key={seg} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                            {seg}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Brazil Context */}
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-500/10 dark:to-yellow-500/10 rounded-xl border border-green-200 dark:border-green-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  🇧🇷 Contexto Brasil - Legal AI
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-2">🚀 OPORTUNIDADES</h4>
                    <ul className="space-y-2">
                      {legalMarketSummary.brazilContext.opportunities.map((opp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2">⚠️ DESAFIOS</h4>
                    <ul className="space-y-2">
                      {legalMarketSummary.brazilContext.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-700">
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">🏢 PLAYERS LOCAIS</h4>
                  <div className="flex flex-wrap gap-2">
                    {legalMarketSummary.brazilContext.topPlayers.map((player) => (
                      <span key={player} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                        {player}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PARETO HISTORY SECTION */}
          {activeSection === 'pareto' && (
            <motion.div
              key="pareto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-2">
                  📜 Pareto History of AI
                  <span className="text-sm font-normal bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 px-2 py-1 rounded">
                    Top 20% → 80% Impact
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Os 20% dos eventos que causaram 80% do impacto na indústria de AI. Cada momento que mudou tudo.
                </p>
              </div>

              {/* Timeline Legend */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-lg text-sm font-medium">
                  ⭐ Score 10 - Transformativo
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg text-sm font-medium">
                  Score 8-9 - Muito Significativo
                </span>
                <span className="px-3 py-1.5 bg-slate-400 text-white rounded-lg text-sm font-medium">
                  Score 7 - Significativo
                </span>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-violet-500 to-indigo-500 rounded-full" />
                <div className="space-y-6 pl-16">
                  {paretoHistory.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="relative"
                    >
                      {/* Year marker */}
                      <div className={`absolute -left-16 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg ${
                        event.paretoScore === 10 ? 'bg-gradient-to-br from-amber-500 to-red-500' :
                        event.paretoScore >= 8 ? 'bg-gradient-to-br from-violet-500 to-purple-500' :
                        'bg-slate-400'
                      }`}>
                        {event.year.toString().slice(-2)}
                      </div>

                      {/* Card */}
                      <div className={`p-5 rounded-xl border-2 transition-all hover:shadow-lg ${
                        event.paretoScore === 10
                          ? 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border-amber-300 dark:border-amber-600'
                          : event.paretoScore >= 8
                          ? 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-500/10 dark:to-purple-500/10 border-violet-300 dark:border-violet-600'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                      }`}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="text-xs font-medium text-slate-500">{event.year}</span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{event.title}</h3>
                            <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{event.player}</span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              event.category === 'breakthrough' ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400' :
                              event.category === 'product' ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' :
                              event.category === 'funding' ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' :
                              event.category === 'acquisition' ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400' :
                              'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                            }`}>
                              {event.category === 'breakthrough' ? '🔬 Breakthrough' :
                               event.category === 'product' ? '🚀 Product' :
                               event.category === 'funding' ? '💰 Funding' :
                               event.category === 'acquisition' ? '🏢 Acquisition' :
                               event.category === 'regulation' ? '⚖️ Regulation' : '📊 Milestone'}
                            </span>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: event.paretoScore }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{event.description}</p>

                        {/* Impact */}
                        <div className="mb-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                          <div className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-1">💥 IMPACTO</div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{event.impact}</p>
                        </div>

                        {/* Ripple Effects */}
                        <div>
                          <div className="text-xs font-bold text-violet-600 dark:text-violet-400 mb-2">🌊 EFEITOS CASCATA</div>
                          <div className="flex flex-wrap gap-1.5">
                            {event.rippleEffects.map((effect, effIdx) => (
                              <span key={effIdx} className="px-2 py-1 bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 rounded text-xs">
                                {effect}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Still Relevant Badge */}
                        {event.stillRelevant && (
                          <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-3 h-3" />
                            Ainda relevante em 2025
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Insights Summary */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">💡 Insights do Pareto History</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">OpenAI domina</div>
                    <div className="text-xs text-slate-500">5 dos 12 eventos Pareto são da OpenAI</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Aceleração exponencial</div>
                    <div className="text-xs text-slate-500">Mais eventos em 2022-2024 que 2012-2021</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl mb-2">🔬</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Research → Product</div>
                    <div className="text-xs text-slate-500">Transformers (2017) → ChatGPT (2022) = 5 anos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Trend Detail Modal */}
      <AnimatePresence>
        {selectedTrend && (
          <TrendDetailModal
            trend={selectedTrend}
            onClose={() => setSelectedTrend(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default AINewsIntelligenceHub;

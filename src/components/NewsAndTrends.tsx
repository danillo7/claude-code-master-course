// ============================================================================
// AI NEWS TICKER & TRENDS COMPONENT v2.0
// Real-time AI news with persistence, trends, search, bookmarks, and sharing
// FASE 2 - Complete News Features
// ============================================================================

import { useState, useEffect, useCallback } from 'react';
import {
  Newspaper, TrendingUp, ExternalLink, Clock, RefreshCw,
  Zap, Building2, Code2, Lightbulb, DollarSign, Rocket,
  ChevronLeft, ChevronRight, Pause, Play, Search, X,
  Bookmark, BookmarkCheck, Twitter, Linkedin, Copy, Check,
  BookOpen
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  timestamp: string;
  category: 'tech' | 'infrastructure' | 'code' | 'case' | 'startup' | 'investment' | 'research';
  excerpt?: string;
  content?: string; // Full content for modal
  readingTime?: number; // Estimated reading time in minutes
  isRead?: boolean; // Track if user has read this news
}

interface TrendItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  change: 'up' | 'down' | 'stable';
  category: string;
}

// ============================================================================
// MOCK DATA (In production, this would come from an API)
// ============================================================================

const getInitialNews = (): NewsItem[] => {
  const now = new Date();
  return [
    {
      id: '1',
      title: 'OpenAI lança GPT-5 com capacidades de raciocínio avançado',
      source: 'TechCrunch',
      url: 'https://techcrunch.com',
      timestamp: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
      category: 'tech',
      excerpt: 'O novo modelo GPT-5 promete revolucionar o campo de IA com chain-of-thought nativo.',
      content: `A OpenAI anunciou oficialmente o lançamento do GPT-5, marcando um novo capítulo na evolução dos modelos de linguagem. O novo modelo traz capacidades de raciocínio avançado que permitem resolver problemas complexos de forma mais eficiente.

Entre as principais melhorias estão:
- Chain-of-thought nativo para raciocínio estruturado
- Melhor compreensão de contexto longo (até 1M tokens)
- Capacidades multimodais aprimoradas
- Redução significativa de alucinações

O GPT-5 já está disponível para usuários Plus e Enterprise, com rollout gradual para a API.`,
      readingTime: 3,
    },
    {
      id: '2',
      title: 'Anthropic recebe investimento de $4B da Amazon para Claude',
      source: 'Bloomberg',
      url: 'https://bloomberg.com',
      timestamp: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
      category: 'investment',
      excerpt: 'A Amazon consolida parceria estratégica com investimento bilionário.',
      content: `A Anthropic, criadora do Claude, anunciou ter recebido um novo investimento de $4 bilhões da Amazon, totalizando $8 bilhões em investimentos da gigante do e-commerce.

O acordo inclui:
- Uso de AWS Trainium para treinamento de modelos
- Integração nativa com Amazon Bedrock
- Desenvolvimento conjunto de chips de IA
- Compromisso de longo prazo com segurança de IA

Este é o maior investimento já feito em uma empresa de IA por uma big tech.`,
      readingTime: 2,
    },
    {
      id: '3',
      title: 'NVIDIA revela H200: 2x mais rápido para LLMs',
      source: 'The Verge',
      url: 'https://theverge.com',
      timestamp: new Date(now.getTime() - 6 * 60 * 60 * 1000).toISOString(),
      category: 'infrastructure',
      excerpt: 'Nova GPU promete dobrar a velocidade de inferência para modelos de linguagem.',
      content: `A NVIDIA revelou o H200, sua mais nova GPU otimizada para cargas de trabalho de IA. O chip oferece o dobro de performance para inferência de LLMs comparado ao H100.

Especificações principais:
- 141GB de memória HBM3e
- Bandwidth de 4.8 TB/s
- Até 2x mais rápido em inferência de LLMs
- Compatibilidade total com stack de software existente

As primeiras unidades começam a ser entregues no Q2 de 2024.`,
      readingTime: 2,
    },
    {
      id: '4',
      title: 'Cursor AI atinge 1M de desenvolvedores ativos',
      source: 'VentureBeat',
      url: 'https://venturebeat.com',
      timestamp: new Date(now.getTime() - 8 * 60 * 60 * 1000).toISOString(),
      category: 'startup',
      excerpt: 'O editor de código com IA integrada conquista desenvolvedores ao redor do mundo.',
      content: `O Cursor, editor de código com IA integrada, ultrapassou a marca de 1 milhão de desenvolvedores ativos mensais, consolidando sua posição no mercado de ferramentas de desenvolvimento.

Destaques do crescimento:
- 10x mais usuários em 12 meses
- Integração nativa com Claude e GPT-4
- Recursos de código em contexto longo
- Plano gratuito generoso para desenvolvedores individuais

A empresa planeja expandir recursos de colaboração em tempo real.`,
      readingTime: 2,
    },
    {
      id: '5',
      title: 'Meta open-sources Llama 4 com 400B parâmetros',
      source: 'Wired',
      url: 'https://wired.com',
      timestamp: new Date(now.getTime() - 10 * 60 * 60 * 1000).toISOString(),
      category: 'tech',
      excerpt: 'O modelo mais poderoso da família Llama agora está disponível para todos.',
      content: `A Meta surpreendeu o mercado ao liberar o Llama 4 como código aberto, seu modelo mais poderoso até o momento com 400 bilhões de parâmetros.

O Llama 4 traz:
- Performance comparável ao GPT-4 em benchmarks
- Licença comercial aberta
- Suporte a 100+ idiomas
- Versões otimizadas para diferentes tamanhos

A decisão reforça o compromisso da Meta com IA aberta e acessível.`,
      readingTime: 2,
    },
    {
      id: '6',
      title: 'Google DeepMind anuncia avanço em AlphaFold 3 para drug discovery',
      source: 'Nature',
      url: 'https://nature.com',
      timestamp: new Date(now.getTime() - 12 * 60 * 60 * 1000).toISOString(),
      category: 'research',
      excerpt: 'Nova versão do AlphaFold promete acelerar descoberta de medicamentos.',
      content: `O Google DeepMind revelou avanços significativos no AlphaFold 3, expandindo suas capacidades para além de proteínas para incluir interações com moléculas pequenas.

Impacto esperado:
- Redução de anos no ciclo de descoberta de medicamentos
- Previsão de interações proteína-ligante
- Modelagem de complexos moleculares
- Acesso gratuito para pesquisa acadêmica

Farmacêuticas já estão formando parcerias para aplicações comerciais.`,
      readingTime: 3,
    },
    {
      id: '7',
      title: 'Mistral AI fecha rodada de $600M com valuation de $6B',
      source: 'Forbes',
      url: 'https://forbes.com',
      timestamp: new Date(now.getTime() - 14 * 60 * 60 * 1000).toISOString(),
      category: 'investment',
      excerpt: 'Startup europeia de IA alcança status de unicórnio em tempo recorde.',
      content: `A Mistral AI, startup francesa de IA fundada há menos de um ano, fechou uma rodada de $600 milhões que avalia a empresa em $6 bilhões.

A rodada foi liderada por investidores de peso:
- Andreessen Horowitz
- Lightspeed Venture Partners
- General Catalyst
- BPI France

A empresa planeja expandir sua presença nos EUA e lançar novos modelos.`,
      readingTime: 2,
    },
    {
      id: '8',
      title: 'Claude Code permite automação completa de workflows de desenvolvimento',
      source: 'Anthropic Blog',
      url: 'https://anthropic.com',
      timestamp: new Date(now.getTime() - 16 * 60 * 60 * 1000).toISOString(),
      category: 'code',
      excerpt: 'A ferramenta CLI da Anthropic revoluciona a forma como desenvolvedores trabalham.',
      content: `A Anthropic lançou novas funcionalidades para o Claude Code que permitem automação completa de workflows de desenvolvimento.

Novos recursos incluem:
- Skills customizáveis com comandos /
- Hooks para integração com CI/CD
- Subagents para tarefas paralelas
- MCP (Model Context Protocol) para extensibilidade

O Claude Code já está sendo usado por equipes enterprise para aumentar produtividade.`,
      readingTime: 2,
    },
    {
      id: '9',
      title: 'Perplexity AI entra para unicórnios com valuation de $3B',
      source: 'TechCrunch',
      url: 'https://techcrunch.com',
      timestamp: new Date(now.getTime() - 18 * 60 * 60 * 1000).toISOString(),
      category: 'startup',
      excerpt: 'Motor de busca com IA conquista investidores e usuários.',
      content: `A Perplexity AI, conhecida por seu motor de busca conversacional, alcançou o status de unicórnio com valuation de $3 bilhões.

Números impressionantes:
- 15 milhões de usuários mensais ativos
- Crescimento de 400% ano a ano
- Expansão para mercados enterprise
- Lançamento de API para desenvolvedores

A empresa compete diretamente com Google e Bing no mercado de busca.`,
      readingTime: 2,
    },
    {
      id: '10',
      title: 'AWS anuncia chips Trainium 2 para reduzir custos de inferência em 50%',
      source: 'AWS Blog',
      url: 'https://aws.amazon.com',
      timestamp: new Date(now.getTime() - 20 * 60 * 60 * 1000).toISOString(),
      category: 'infrastructure',
      excerpt: 'Nova geração de chips promete tornar IA mais acessível.',
      content: `A AWS revelou a segunda geração de seus chips Trainium, prometendo redução de 50% nos custos de inferência de IA.

Melhorias do Trainium 2:
- 4x mais throughput que a geração anterior
- Suporte nativo a modelos maiores
- Integração otimizada com SageMaker
- Disponibilidade global em EC2

O chip foi desenvolvido em parceria com Anthropic para otimização do Claude.`,
      readingTime: 2,
    },
  ];
};

const getTrends = (): TrendItem[] => [
  {
    id: 't1',
    title: 'Agentes Autônomos',
    description: 'LLMs que executam tarefas complexas sem supervisão',
    icon: '🤖',
    change: 'up',
    category: 'Tecnologia',
  },
  {
    id: 't2',
    title: 'Reasoning Models',
    description: 'Modelos com chain-of-thought nativo (o1, Claude Opus)',
    icon: '🧠',
    change: 'up',
    category: 'Modelos',
  },
  {
    id: 't3',
    title: 'Edge AI',
    description: 'Modelos pequenos rodando localmente (Phi, Gemma)',
    icon: '📱',
    change: 'up',
    category: 'Infraestrutura',
  },
  {
    id: 't4',
    title: 'AI Coding Assistants',
    description: 'Cursor, GitHub Copilot, Claude Code dominando dev',
    icon: '💻',
    change: 'up',
    category: 'Ferramentas',
  },
  {
    id: 't5',
    title: 'Multimodal Native',
    description: 'Modelos que entendem texto, imagem, áudio, vídeo',
    icon: '🎨',
    change: 'up',
    category: 'Modelos',
  },
  {
    id: 't6',
    title: 'AI Governance',
    description: 'Regulação e compliance (EU AI Act, LGPD)',
    icon: '⚖️',
    change: 'stable',
    category: 'Legal',
  },
];

// ============================================================================
// CATEGORY ICONS & COLORS
// ============================================================================

const categoryConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; label: string }> = {
  tech: { icon: Zap, color: 'text-blue-500', label: 'Tecnologia' },
  infrastructure: { icon: Building2, color: 'text-purple-500', label: 'Infraestrutura' },
  code: { icon: Code2, color: 'text-green-500', label: 'Código' },
  case: { icon: Lightbulb, color: 'text-yellow-500', label: 'Cases' },
  startup: { icon: Rocket, color: 'text-orange-500', label: 'Startups' },
  investment: { icon: DollarSign, color: 'text-emerald-500', label: 'Investimento' },
  research: { icon: TrendingUp, color: 'text-pink-500', label: 'Pesquisa' },
};

// ============================================================================
// BOOKMARKS HOOK
// ============================================================================

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('claude-course-news-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleBookmark = useCallback((newsId: string) => {
    setBookmarks((prev) => {
      const newBookmarks = prev.includes(newsId)
        ? prev.filter((id) => id !== newsId)
        : [...prev, newsId];
      localStorage.setItem('claude-course-news-bookmarks', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  }, []);

  const isBookmarked = useCallback((newsId: string) => bookmarks.includes(newsId), [bookmarks]);

  return { bookmarks, toggleBookmark, isBookmarked };
}

// ============================================================================
// READ STATUS HOOK
// ============================================================================

function useReadStatus() {
  const [readNews, setReadNews] = useState<string[]>(() => {
    const saved = localStorage.getItem('claude-course-news-read');
    return saved ? JSON.parse(saved) : [];
  });

  const markAsRead = useCallback((newsId: string) => {
    setReadNews((prev) => {
      if (prev.includes(newsId)) return prev;
      const newRead = [...prev, newsId];
      localStorage.setItem('claude-course-news-read', JSON.stringify(newRead));
      return newRead;
    });
  }, []);

  const isRead = useCallback((newsId: string) => readNews.includes(newsId), [readNews]);

  const unreadCount = useCallback((newsIds: string[]) => {
    return newsIds.filter((id) => !readNews.includes(id)).length;
  }, [readNews]);

  return { readNews, markAsRead, isRead, unreadCount };
}

// ============================================================================
// SHARE FUNCTIONALITY
// ============================================================================

interface ShareButtonsProps {
  news: NewsItem;
  onCopied: () => void;
}

function ShareButtons({ news, onCopied }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `${news.title} - ${news.source}`;
  const shareUrl = news.url;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      onCopied();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleTwitterShare}
        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
        title="Compartilhar no Twitter/X"
      >
        <Twitter className="w-4 h-4" />
      </button>
      <button
        onClick={handleLinkedInShare}
        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
        title="Compartilhar no LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>
      <button
        onClick={handleCopy}
        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-green-100 dark:hover:bg-green-900/30 text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
        title="Copiar link"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

// ============================================================================
// NEWS DETAIL MODAL
// ============================================================================

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

function NewsDetailModal({ news, onClose, isBookmarked, onToggleBookmark }: NewsDetailModalProps) {
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!news) return null;

  const CategoryIcon = categoryConfig[news.category]?.icon || Newspaper;
  const categoryColor = categoryConfig[news.category]?.color || 'text-gray-500';
  const categoryLabel = categoryConfig[news.category]?.label || news.category;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className={`p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 ${categoryColor}`}>
              <CategoryIcon className="w-4 h-4" />
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {news.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <span className="font-medium">{news.source}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatTimeAgo(news.timestamp)}
            </span>
            {news.readingTime && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {news.readingTime} min de leitura
                </span>
              </>
            )}
          </div>

          {news.excerpt && (
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed border-l-4 border-indigo-500 pl-4">
              {news.excerpt}
            </p>
          )}

          {news.content && (
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleBookmark}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isBookmarked
                  ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {isBookmarked ? 'Salvo' : 'Salvar'}
              </span>
            </button>

            <ShareButtons news={news} onCopied={() => setShowCopiedToast(true)} />
          </div>

          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors font-medium"
          >
            Ler artigo completo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Toast */}
        {showCopiedToast && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
            Link copiado!
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// NEWS TICKER COMPONENT
// ============================================================================

function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const date = new Date(timestamp);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'agora';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}min`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}

export function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load from localStorage or initialize
  useEffect(() => {
    const cached = localStorage.getItem('claude-course-ai-news');
    if (cached) {
      const parsed = JSON.parse(cached);
      // Check if cache is less than 1 hour old
      if (Date.now() - parsed.lastUpdated < 3600000) {
        setNews(parsed.news);
        return;
      }
    }
    // Load fresh news (in production, this would be an API call)
    const freshNews = getInitialNews();
    setNews(freshNews);
    localStorage.setItem('claude-course-ai-news', JSON.stringify({
      news: freshNews,
      lastUpdated: Date.now(),
    }));
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused || news.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, news.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const handleRefresh = async () => {
    // In production, this would fetch from an API
    const freshNews = getInitialNews();
    setNews(freshNews);
    localStorage.setItem('claude-course-ai-news', JSON.stringify({
      news: freshNews,
      lastUpdated: Date.now(),
    }));
  };

  if (news.length === 0) return null;

  const currentNews = news[currentIndex];
  const CategoryIcon = categoryConfig[currentNews.category]?.icon || Newspaper;
  const categoryColor = categoryConfig[currentNews.category]?.color || 'text-gray-500';

  return (
    <div className="bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-3">
          {/* Label */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-indigo-100 dark:bg-indigo-500/20 rounded text-indigo-600 dark:text-indigo-400 text-xs font-medium">
            <Newspaper className="w-3 h-3" />
            AI News
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={handleNext}
              className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* News item */}
          <a
            href={currentNews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-2 group overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CategoryIcon className={`w-4 h-4 flex-shrink-0 ${categoryColor}`} />
            <span className="text-sm text-slate-900 dark:text-white truncate group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
              {currentNews.title}
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>

          {/* Meta info */}
          <div className="hidden md:flex items-center gap-2 text-[10px] text-slate-500 flex-shrink-0">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatTimeAgo(currentNews.timestamp)}
            </span>
            <span>•</span>
            <span>{currentNews.source}</span>
          </div>

          {/* Refresh */}
          <button
            onClick={handleRefresh}
            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Atualizar notícias"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Counter */}
          <span className="text-[10px] text-slate-500 dark:text-slate-600 font-mono">
            {currentIndex + 1}/{news.length}
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TRENDS SECTION COMPONENT
// ============================================================================

export function TrendsSection() {
  const [trends] = useState<TrendItem[]>(getTrends());
  const [showAll, setShowAll] = useState(false);

  const displayedTrends = showAll ? trends : trends.slice(0, 3);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <h2 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
          Tendências em AI
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
        >
          {showAll ? 'Ver menos' : 'Ver todas'}
        </button>
      </div>

      <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayedTrends.map((trend) => (
          <div
            key={trend.id}
            className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700
                     hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-slate-100 dark:hover:bg-slate-800
                     transition-all cursor-default"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{trend.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {trend.title}
                  </h3>
                  {trend.change === 'up' && (
                    <span className="inline-flex items-center gap-0.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <TrendingUp className="w-3 h-3" /> Alta
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{trend.description}</p>
                <span className="text-xs text-slate-500 mt-2 inline-block bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded font-medium">
                  {trend.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// NEWS FEED COMPONENT (Full section)
// ============================================================================

export function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();
  const { markAsRead, isRead, unreadCount } = useReadStatus();

  useEffect(() => {
    const cached = localStorage.getItem('claude-course-ai-news');
    if (cached) {
      setNews(JSON.parse(cached).news);
    } else {
      setNews(getInitialNews());
    }
  }, []);

  // Filter and search logic
  const filteredNews = news.filter((item) => {
    // Category filter
    const categoryMatch = filter === 'all' || item.category === filter;

    // Search filter
    const searchMatch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

    // Bookmarks filter
    const bookmarkMatch = !showBookmarksOnly || isBookmarked(item.id);

    return categoryMatch && searchMatch && bookmarkMatch;
  });

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'tech', label: 'Tech' },
    { id: 'startup', label: 'Startups' },
    { id: 'investment', label: 'Investimento' },
    { id: 'code', label: 'Código' },
    { id: 'infrastructure', label: 'Infra' },
    { id: 'research', label: 'Pesquisa' },
  ];

  const handleOpenNews = (item: NewsItem) => {
    setSelectedNews(item);
    markAsRead(item.id);
  };

  const unreadTotal = unreadCount(news.map(n => n.id));

  return (
    <>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          {/* Header with unread count */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <Newspaper className="w-5 h-5 text-indigo-500" />
              Feed de Notícias AI
              {unreadTotal > 0 && (
                <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full">
                  {unreadTotal} novas
                </span>
              )}
            </h2>

            {/* Bookmarks toggle */}
            <button
              onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                showBookmarksOnly
                  ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              Salvos ({bookmarks.length})
            </button>
          </div>

          {/* Search bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar notícias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-100 dark:bg-slate-800 border-0 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                  filter === cat.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filteredNews.length === 0 && (
          <div className="p-8 text-center">
            <Newspaper className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-700 mb-3" />
            <p className="text-slate-500 dark:text-slate-400">
              {showBookmarksOnly
                ? 'Nenhuma notícia salva encontrada.'
                : searchQuery
                  ? 'Nenhuma notícia encontrada para sua busca.'
                  : 'Nenhuma notícia disponível.'}
            </p>
          </div>
        )}

        {/* News list */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {filteredNews.map((item) => {
            const CategoryIcon = categoryConfig[item.category]?.icon || Newspaper;
            const categoryColor = categoryConfig[item.category]?.color || 'text-gray-500';
            const itemIsRead = isRead(item.id);
            const itemIsBookmarked = isBookmarked(item.id);

            return (
              <div
                key={item.id}
                className={`relative p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer ${
                  !itemIsRead ? 'bg-indigo-50/30 dark:bg-indigo-500/5' : ''
                }`}
                onClick={() => handleOpenNews(item)}
              >
                {/* Unread indicator */}
                {!itemIsRead && (
                  <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                )}

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${categoryColor}`}>
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                        {item.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <span>{item.source}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTimeAgo(item.timestamp)}
                      </span>
                      {item.readingTime && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {item.readingTime} min
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(item.id);
                      }}
                      className={`p-1.5 rounded-lg transition-colors ${
                        itemIsBookmarked
                          ? 'text-indigo-500 bg-indigo-100 dark:bg-indigo-500/20'
                          : 'text-slate-400 hover:text-indigo-500 hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100'
                      }`}
                      title={itemIsBookmarked ? 'Remover dos salvos' : 'Salvar'}
                    >
                      {itemIsBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-slate-400 hover:text-indigo-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                      title="Abrir link original"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedNews && (
        <NewsDetailModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
          isBookmarked={isBookmarked(selectedNews.id)}
          onToggleBookmark={() => toggleBookmark(selectedNews.id)}
        />
      )}
    </>
  );
}

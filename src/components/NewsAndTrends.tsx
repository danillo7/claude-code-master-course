// ============================================================================
// AI NEWS TICKER & TRENDS COMPONENT
// Real-time AI news with persistence and trends section
// ============================================================================

import { useState, useEffect } from 'react';
import {
  Newspaper, TrendingUp, ExternalLink, Clock, RefreshCw,
  Zap, Building2, Code2, Lightbulb, DollarSign, Rocket,
  ChevronLeft, ChevronRight, Pause, Play
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
    },
    {
      id: '2',
      title: 'Anthropic recebe investimento de $4B da Amazon para Claude',
      source: 'Bloomberg',
      url: 'https://bloomberg.com',
      timestamp: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
      category: 'investment',
    },
    {
      id: '3',
      title: 'NVIDIA revela H200: 2x mais rápido para LLMs',
      source: 'The Verge',
      url: 'https://theverge.com',
      timestamp: new Date(now.getTime() - 6 * 60 * 60 * 1000).toISOString(),
      category: 'infrastructure',
    },
    {
      id: '4',
      title: 'Cursor AI atinge 1M de desenvolvedores ativos',
      source: 'VentureBeat',
      url: 'https://venturebeat.com',
      timestamp: new Date(now.getTime() - 8 * 60 * 60 * 1000).toISOString(),
      category: 'startup',
    },
    {
      id: '5',
      title: 'Meta open-sources Llama 4 com 400B parâmetros',
      source: 'Wired',
      url: 'https://wired.com',
      timestamp: new Date(now.getTime() - 10 * 60 * 60 * 1000).toISOString(),
      category: 'tech',
    },
    {
      id: '6',
      title: 'Google DeepMind anuncia avanço em AlphaFold 3 para drug discovery',
      source: 'Nature',
      url: 'https://nature.com',
      timestamp: new Date(now.getTime() - 12 * 60 * 60 * 1000).toISOString(),
      category: 'research',
    },
    {
      id: '7',
      title: 'Mistral AI fecha rodada de $600M com valuation de $6B',
      source: 'Forbes',
      url: 'https://forbes.com',
      timestamp: new Date(now.getTime() - 14 * 60 * 60 * 1000).toISOString(),
      category: 'investment',
    },
    {
      id: '8',
      title: 'Claude Code permite automação completa de workflows de desenvolvimento',
      source: 'Anthropic Blog',
      url: 'https://anthropic.com',
      timestamp: new Date(now.getTime() - 16 * 60 * 60 * 1000).toISOString(),
      category: 'code',
    },
    {
      id: '9',
      title: 'Perplexity AI entra para unicórnios com valuation de $3B',
      source: 'TechCrunch',
      url: 'https://techcrunch.com',
      timestamp: new Date(now.getTime() - 18 * 60 * 60 * 1000).toISOString(),
      category: 'startup',
    },
    {
      id: '10',
      title: 'AWS anuncia chips Trainium 2 para reduzir custos de inferência em 50%',
      source: 'AWS Blog',
      url: 'https://aws.amazon.com',
      timestamp: new Date(now.getTime() - 20 * 60 * 60 * 1000).toISOString(),
      category: 'infrastructure',
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

const categoryConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string }> = {
  tech: { icon: Zap, color: 'text-blue-500' },
  infrastructure: { icon: Building2, color: 'text-purple-500' },
  code: { icon: Code2, color: 'text-green-500' },
  case: { icon: Lightbulb, color: 'text-yellow-500' },
  startup: { icon: Rocket, color: 'text-orange-500' },
  investment: { icon: DollarSign, color: 'text-emerald-500' },
  research: { icon: TrendingUp, color: 'text-pink-500' },
};

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
    <div className="bg-dark-900 dark:bg-dark-950 border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-3">
          {/* Label */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-primary-500/20 rounded text-primary-400 text-xs font-medium">
            <Newspaper className="w-3 h-3" />
            AI News
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1 hover:bg-dark-800 rounded text-dark-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 hover:bg-dark-800 rounded text-dark-400 hover:text-white transition-colors"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={handleNext}
              className="p-1 hover:bg-dark-800 rounded text-dark-400 hover:text-white transition-colors"
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
            <span className="text-sm text-white truncate group-hover:text-primary-400 transition-colors">
              {currentNews.title}
            </span>
            <ExternalLink className="w-3 h-3 text-dark-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>

          {/* Meta info */}
          <div className="hidden md:flex items-center gap-2 text-[10px] text-dark-500 flex-shrink-0">
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
            className="p-1 hover:bg-dark-800 rounded text-dark-400 hover:text-white transition-colors"
            title="Atualizar notícias"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Counter */}
          <span className="text-[10px] text-dark-600 font-mono">
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
    <div className="card mb-6">
      <div className="p-4 border-b border-dark-200 dark:border-dark-700 flex items-center justify-between">
        <h2 className="font-bold flex items-center gap-2 text-dark-900 dark:text-dark-100">
          <TrendingUp className="w-5 h-5 text-primary-500" />
          Tendências em AI
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
        >
          {showAll ? 'Ver menos' : 'Ver todas'}
        </button>
      </div>

      <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayedTrends.map((trend) => (
          <div
            key={trend.id}
            className="p-4 bg-dark-50 dark:bg-dark-800/70 rounded-xl border border-transparent
                     hover:border-primary-500/30 hover:bg-dark-100 dark:hover:bg-dark-800
                     transition-all cursor-default"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{trend.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-dark-900 dark:text-dark-100">
                    {trend.title}
                  </h3>
                  {trend.change === 'up' && (
                    <span className="text-xs text-accent-600 dark:text-accent-400 flex items-center gap-0.5 font-medium">
                      <TrendingUp className="w-3 h-3" /> Alta
                    </span>
                  )}
                </div>
                <p className="text-sm text-dark-600 dark:text-dark-400 mt-1">{trend.description}</p>
                <span className="text-xs text-dark-500 dark:text-dark-500 mt-2 inline-block bg-dark-100 dark:bg-dark-700 px-2 py-0.5 rounded">
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

  useEffect(() => {
    const cached = localStorage.getItem('claude-course-ai-news');
    if (cached) {
      setNews(JSON.parse(cached).news);
    } else {
      setNews(getInitialNews());
    }
  }, []);

  const filteredNews = filter === 'all'
    ? news
    : news.filter((n) => n.category === filter);

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'tech', label: 'Tech' },
    { id: 'startup', label: 'Startups' },
    { id: 'investment', label: 'Investimento' },
    { id: 'code', label: 'Código' },
    { id: 'infrastructure', label: 'Infra' },
    { id: 'research', label: 'Pesquisa' },
  ];

  return (
    <div className="card">
      <div className="p-4 border-b border-dark-200 dark:border-dark-700">
        <h2 className="font-bold flex items-center gap-2 mb-4">
          <Newspaper className="w-5 h-5 text-primary-500" />
          Feed de Notícias AI
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                filter === cat.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-dark-200 dark:divide-dark-700">
        {filteredNews.map((item) => {
          const CategoryIcon = categoryConfig[item.category]?.icon || Newspaper;
          const categoryColor = categoryConfig[item.category]?.color || 'text-gray-500';

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 hover:bg-dark-50 dark:hover:bg-dark-800/50 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-dark-100 dark:bg-dark-800 ${categoryColor}`}>
                  <CategoryIcon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-dark-500">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTimeAgo(item.timestamp)}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-dark-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

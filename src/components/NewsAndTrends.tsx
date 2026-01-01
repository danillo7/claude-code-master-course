// ============================================================================
// AI NEWS TICKER & TRENDS COMPONENT v3.0
// Real-time AI news with auto-updates, persistence, trends, search, bookmarks
// FASE 3 - Automated News System with Last Updated Indicator
// Last Updated: 2026-01-01
// ============================================================================

import { useState, useEffect, useCallback } from 'react';
import {
  Newspaper, TrendingUp, ExternalLink, Clock, RefreshCw,
  Zap, Building2, Code2, Lightbulb, DollarSign, Rocket,
  ChevronLeft, ChevronRight, Pause, Play, Search, X,
  Bookmark, BookmarkCheck, Twitter, Linkedin, Copy, Check,
  BookOpen, History, CalendarClock
} from 'lucide-react';

// Import centralized news data
import {
  AI_NEWS,
  AI_TRENDS,
  NEWS_METADATA,
  UPDATE_HISTORY,
  formatLastUpdated,
  type NewsItem,
  type TrendItem
} from '../data/aiNewsData';

// ============================================================================
// LAST UPDATED INDICATOR COMPONENT
// ============================================================================

interface LastUpdatedBadgeProps {
  showHistory?: boolean;
  onToggleHistory?: () => void;
}

function LastUpdatedBadge({ showHistory, onToggleHistory }: LastUpdatedBadgeProps) {
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setIsLive(prev => !prev), 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3">
      {/* Live indicator */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg">
        <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-emerald-300'} animate-pulse`} />
        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
          Auto-Atualizado
        </span>
      </div>

      {/* Last updated */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <CalendarClock className="w-3.5 h-3.5 text-slate-500" />
        <span className="text-xs text-slate-600 dark:text-slate-400">
          {formatLastUpdated(NEWS_METADATA.lastUpdated)}
        </span>
      </div>

      {/* History toggle */}
      {onToggleHistory && (
        <button
          onClick={onToggleHistory}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors ${
            showHistory
              ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          Histórico
        </button>
      )}
    </div>
  );
}

// ============================================================================
// UPDATE HISTORY PANEL
// ============================================================================

function UpdateHistoryPanel() {
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <History className="w-4 h-4 text-indigo-500" />
        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Histórico de Atualizações</h3>
      </div>

      {/* Schedule info */}
      <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg mb-3">
        <p className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">
          📅 {NEWS_METADATA.updateFrequency}
        </p>
        <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
          Próxima: {new Date(NEWS_METADATA.nextUpdate).toLocaleString('pt-BR')}
        </p>
      </div>

      {/* History list */}
      <div className="space-y-2">
        {UPDATE_HISTORY.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded-lg text-xs"
          >
            <div className="flex items-center gap-2">
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                item.source === 'automated'
                  ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                  : item.source === 'github-actions'
                  ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}>
                {item.source === 'automated' ? '🤖 Auto' : item.source === 'github-actions' ? '⚡ GH Actions' : '👤 Manual'}
              </span>
              <span className="text-slate-600 dark:text-slate-400">{item.action}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.newsAdded > 0 && (
                <span className="text-emerald-600 dark:text-emerald-400">+{item.newsAdded}</span>
              )}
              <span className="text-slate-400">{formatLastUpdated(item.timestamp)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sources */}
      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
        <p className="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-wide mb-1">
          Fontes ({NEWS_METADATA.sources.length})
        </p>
        <div className="flex flex-wrap gap-1">
          {NEWS_METADATA.sources.slice(0, 6).map((source, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[10px] text-slate-600 dark:text-slate-400"
            >
              {source}
            </span>
          ))}
          {NEWS_METADATA.sources.length > 6 && (
            <span className="px-1.5 py-0.5 text-[10px] text-slate-500">
              +{NEWS_METADATA.sources.length - 6} mais
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// DATA FUNCTIONS (Using centralized data)
// ============================================================================

const getInitialNews = (): NewsItem[] => {
  return AI_NEWS;
};

const getTrends = (): TrendItem[] => {
  return AI_TRENDS;
};

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
  const [showHistory, setShowHistory] = useState(false);

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

          {/* Last Updated Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <LastUpdatedBadge
              showHistory={showHistory}
              onToggleHistory={() => setShowHistory(!showHistory)}
            />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              v{NEWS_METADATA.version} | {NEWS_METADATA.totalNews} notícias
            </span>
          </div>

          {/* Update History Panel (expandable) */}
          {showHistory && <UpdateHistoryPanel />}

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

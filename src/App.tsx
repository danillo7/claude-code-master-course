// ============================================================================
// CLAUDE CODE MASTER COURSE - MAIN APP
// Estado-da-arte React application with full feature set
// ============================================================================

import { useEffect, useState } from 'react';
import { useCourseStore } from './store/useCourseStore';
import { useGreetingAndWeather, useCurrentTime } from './hooks/useGreetingAndWeather';
import { getLevelFromXp, getXpProgress } from './types/course';
import type { UserProfile, OnboardingData } from './types/course';
import {
  Rocket, Terminal, Settings, Zap, Plug, Anchor, Users, Package,
  Code, Sparkles, Award, Hammer, ChevronRight, ChevronDown,
  Moon, Sun, BookOpen, Trophy, Flame, Bell, Search, Menu,
  CheckCircle2, Circle, Lock, Play, Clock, Star, Target,
  ArrowRight, Bookmark, FileText, BarChart3
} from 'lucide-react';
import { NewsTicker, TrendsSection } from './components/NewsAndTrends';
import './index.css';

// ============================================================================
// ICON MAP
// ============================================================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Terminal, Settings, Zap, Plug, Anchor, Users, Package,
  Code, Sparkles, Award, Hammer
};

// ============================================================================
// ONBOARDING COMPONENT
// ============================================================================

function Onboarding({ onComplete }: { onComplete: (data: OnboardingData) => void }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [primaryContext, setPrimaryContext] = useState<'costa_law' | 'cla_digital' | 'ai_spot' | 'personal' | 'all'>('all');
  const [dailyGoal, setDailyGoal] = useState(30);

  const contexts = [
    { id: 'costa_law', name: 'Costa Law', icon: '⚖️', desc: 'Jurídico e contratos' },
    { id: 'cla_digital', name: 'CLA Digital', icon: '💻', desc: 'Consultoria tech' },
    { id: 'ai_spot', name: 'AI Spot', icon: '🤖', desc: 'Startup de IA' },
    { id: 'personal', name: 'Pessoal', icon: '👤', desc: 'Uso pessoal' },
    { id: 'all', name: 'Todos', icon: '🌟', desc: 'Todos os contextos' },
  ];

  const handleComplete = () => {
    onComplete({
      name,
      email: email || undefined,
      primaryContext,
      goals: [],
      dailyGoalMinutes: dailyGoal,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-950 to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full transition-all ${
                s === step ? 'bg-primary-500 w-8' : s < step ? 'bg-accent-500' : 'bg-dark-700'
              }`}
            />
          ))}
        </div>

        <div className="card p-8">
          {step === 1 && (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-primary-500" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  Bem-vindo ao Claude Code Master!
                </h1>
                <p className="text-dark-400">
                  Vamos personalizar sua experiência de aprendizado
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como você quer ser chamado?"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg
                             text-white placeholder-dark-500 focus:border-primary-500 focus:ring-1
                             focus:ring-primary-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Email (opcional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Para backup do progresso"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg
                             text-white placeholder-dark-500 focus:border-primary-500 focus:ring-1
                             focus:ring-primary-500 outline-none transition-all"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!name.trim()}
                className="w-full mt-6 btn-primary flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white mb-2">
                  Qual é seu contexto principal?
                </h2>
                <p className="text-dark-400 text-sm">
                  Personalizaremos os desafios e exemplos
                </p>
              </div>

              <div className="space-y-3">
                {contexts.map((ctx) => (
                  <button
                    key={ctx.id}
                    onClick={() => setPrimaryContext(ctx.id as any)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      primaryContext === ctx.id
                        ? 'border-primary-500 bg-primary-500/10'
                        : 'border-dark-700 hover:border-dark-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{ctx.icon}</span>
                      <div>
                        <div className="font-medium text-white">{ctx.name}</div>
                        <div className="text-sm text-dark-400">{ctx.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(3)}
                className="w-full mt-6 btn-primary flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white mb-2">
                  Meta diária de estudo
                </h2>
                <p className="text-dark-400 text-sm">
                  Consistência é mais importante que intensidade
                </p>
              </div>

              <div className="space-y-4">
                {[15, 30, 45, 60].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setDailyGoal(mins)}
                    className={`w-full p-4 rounded-lg border-2 flex items-center justify-between
                              transition-all ${
                      dailyGoal === mins
                        ? 'border-primary-500 bg-primary-500/10'
                        : 'border-dark-700 hover:border-dark-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-dark-400" />
                      <span className="text-white font-medium">{mins} minutos/dia</span>
                    </div>
                    {mins === 30 && (
                      <span className="text-xs bg-accent-500/20 text-accent-400 px-2 py-1 rounded">
                        Recomendado
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleComplete}
                className="w-full mt-6 btn-secondary flex items-center justify-center gap-2"
              >
                Começar Jornada <Rocket className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// HEADER COMPONENT
// ============================================================================

function Header({ profile, toggleSidebar }: { profile: UserProfile; toggleSidebar: () => void }) {
  const { greeting, weather } = useGreetingAndWeather();
  const { formatted } = useCurrentTime();
  const stats = useCourseStore((s) => s.stats);
  const settings = useCourseStore((s) => s.settings);
  const updateSettings = useCourseStore((s) => s.updateSettings);
  const notifications = useCourseStore((s) => s.notifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const level = getLevelFromXp(stats.totalXp);
  const xpProgress = getXpProgress(stats.totalXp);
  const overallProgress = Math.round((stats.lessonsCompleted / stats.totalLessons) * 100);

  return (
    <header className="h-16 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-800
                       flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
      {/* Left: Menu + Greeting */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:block">
          <div className="flex items-center gap-2 text-lg font-medium">
            <span>{greeting.emoji}</span>
            <span className="text-dark-900 dark:text-white">
              {greeting.greeting}, <span className="text-primary-500">{profile.name.split(' ')[0]}</span>!
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-dark-500">
            <span className="capitalize">{formatted}</span>
            {!weather.isLoading && !weather.error && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  {weather.icon} {weather.temperature}°C
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Center: Progress */}
      <div className="hidden md:flex items-center gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient">{overallProgress}%</div>
          <div className="text-xs text-dark-500">Progresso</div>
        </div>
        <div className="h-10 w-px bg-dark-200 dark:bg-dark-700" />
        <div className="flex items-center gap-2">
          <span className="text-2xl">{level.icon}</span>
          <div>
            <div className="font-medium text-dark-900 dark:text-white">{level.name}</div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1.5 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  style={{ width: `${xpProgress.percentage}%` }}
                />
              </div>
              <span className="text-xs text-dark-500">{stats.totalXp} XP</span>
            </div>
          </div>
        </div>
        {stats.streak.current > 0 && (
          <>
            <div className="h-10 w-px bg-dark-200 dark:bg-dark-700" />
            <div className="flex items-center gap-1">
              <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
              <span className="font-bold text-orange-500">{stats.streak.current}</span>
              <span className="text-xs text-dark-500">dias</span>
            </div>
          </>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <button className="relative p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-primary-500 text-white
                           text-xs rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        <button
          onClick={() => updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' })}
          className="p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg"
        >
          {settings.theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500
                       rounded-full flex items-center justify-center text-white font-bold">
          {profile.name.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// SIDEBAR COMPONENT
// ============================================================================

function Sidebar({ isOpen, onClose, currentModule, onSelectLesson }:
  {
    isOpen: boolean;
    onClose: () => void;
    currentModule: string | null;
    onSelectLesson: (lessonId: string) => void;
  }
) {
  const modules = useCourseStore((s) => s.modules);
  const lessonProgress = useCourseStore((s) => s.lessonProgress);
  const [expandedModule, setExpandedModule] = useState<string | null>(currentModule);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = modules.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.lessons.some((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white dark:bg-dark-900
                   border-r border-dark-200 dark:border-dark-800 flex flex-col
                   transform transition-transform duration-300
                   ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Search */}
        <div className="p-4 border-b border-dark-200 dark:border-dark-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar lições..."
              className="w-full pl-10 pr-4 py-2 bg-dark-100 dark:bg-dark-800 rounded-lg
                       text-sm focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>
        </div>

        {/* Modules list */}
        <div className="flex-1 overflow-y-auto p-2">
          {filteredModules.map((module) => {
            const Icon = iconMap[module.icon] || BookOpen;
            const completedLessons = module.lessons.filter(
              (l) => lessonProgress[l.id]?.status === 'completed'
            ).length;
            const isExpanded = expandedModule === module.id;
            const progress = Math.round((completedLessons / module.lessons.length) * 100);

            return (
              <div key={module.id} className="mb-1">
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                            transition-all ${
                    currentModule === module.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'hover:bg-dark-100 dark:hover:bg-dark-800'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium">{module.title}</div>
                    <div className="flex items-center gap-2 text-xs text-dark-500">
                      <span>{completedLessons}/{module.lessons.length} lições</span>
                      <div className="w-12 h-1 bg-dark-200 dark:bg-dark-700 rounded-full">
                        <div
                          className="h-full bg-accent-500 rounded-full"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-dark-200 dark:border-dark-700 pl-3">
                    {module.lessons.map((lesson) => {
                      const status = lessonProgress[lesson.id]?.status || 'available';
                      const StatusIcon =
                        status === 'completed' ? CheckCircle2 :
                        status === 'in_progress' ? Play :
                        status === 'locked' ? Lock : Circle;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => onSelectLesson(lesson.id)}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left
                                   hover:bg-dark-100 dark:hover:bg-dark-800 transition-all group"
                        >
                          <StatusIcon
                            className={`w-4 h-4 flex-shrink-0 ${
                              status === 'completed' ? 'text-accent-500' :
                              status === 'in_progress' ? 'text-primary-500' :
                              'text-dark-400'
                            }`}
                          />
                          <span className="text-sm truncate flex-1">{lesson.title}</span>
                          {lesson.isNew && (
                            <span className="text-[10px] bg-primary-500 text-white px-1.5 py-0.5 rounded">
                              NEW
                            </span>
                          )}
                          <span className="text-xs text-dark-500 opacity-0 group-hover:opacity-100">
                            +{lesson.xp}xp
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats footer */}
        <div className="p-4 border-t border-dark-200 dark:border-dark-800 bg-dark-50 dark:bg-dark-800/50">
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <div className="font-bold text-primary-500">
                {useCourseStore.getState().stats.lessonsCompleted}
              </div>
              <div className="text-dark-500">Lições</div>
            </div>
            <div>
              <div className="font-bold text-accent-500">
                {useCourseStore.getState().stats.totalXp}
              </div>
              <div className="text-dark-500">XP</div>
            </div>
            <div>
              <div className="font-bold text-orange-500">
                {useCourseStore.getState().stats.streak.current}
              </div>
              <div className="text-dark-500">Streak</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

// ============================================================================
// LESSON VIEW COMPONENT
// ============================================================================

function LessonView({ lessonId, onBack }: { lessonId: string; onBack: () => void }) {
  const modules = useCourseStore((s) => s.modules);
  const lessonProgress = useCourseStore((s) => s.lessonProgress);
  const startLesson = useCourseStore((s) => s.startLesson);
  const completeLesson = useCourseStore((s) => s.completeLesson);
  const toggleBookmark = useCourseStore((s) => s.toggleBookmark);
  const bookmarks = useCourseStore((s) => s.bookmarks);

  const lesson = modules.flatMap((m) => m.lessons).find((l) => l.id === lessonId);
  const module = modules.find((m) => m.id === lesson?.moduleId);

  if (!lesson || !module) {
    return <div className="p-8 text-center">Lição não encontrada</div>;
  }

  const progress = lessonProgress[lessonId];
  const isBookmarked = bookmarks.some((b) => b.lessonId === lessonId);
  const [startTime] = useState(Date.now());

  // Start lesson on mount
  useEffect(() => {
    if (!progress || progress.status === 'available') {
      startLesson(lessonId);
    }
  }, [lessonId]);

  const handleComplete = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    completeLesson(lessonId, timeSpent);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-dark-500 mb-4">
        <button onClick={onBack} className="hover:text-primary-500">
          Módulos
        </button>
        <ChevronRight className="w-4 h-4" />
        <span>{module.title}</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-dark-900 dark:text-white">{lesson.title}</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`badge badge-${lesson.difficulty === 'beginner' ? 'bronze' :
              lesson.difficulty === 'intermediate' ? 'silver' :
              lesson.difficulty === 'advanced' ? 'gold' : 'platinum'}`}>
              {lesson.difficulty}
            </span>
            <span className="xp-badge">
              <Star className="w-3 h-3" /> {lesson.xp} XP
            </span>
            <span className="flex items-center gap-1 text-sm text-dark-500">
              <Clock className="w-3 h-3" /> {lesson.duration} min
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white">
            {lesson.title}
          </h1>
          <p className="text-dark-500 mt-1">{lesson.description}</p>
        </div>
        <button
          onClick={() => toggleBookmark(lessonId)}
          className={`p-2 rounded-lg ${
            isBookmarked
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600'
              : 'hover:bg-dark-100 dark:hover:bg-dark-800'
          }`}
        >
          <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div className="card mb-6">
        <div className="p-6 lg:p-8 prose prose-lg dark:prose-invert max-w-none
                       prose-headings:font-bold prose-code:text-primary-500
                       prose-pre:bg-dark-900 prose-pre:text-dark-100">
          <div dangerouslySetInnerHTML={{
            __html: lesson.content
              .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="code-block"><code>$2</code></pre>')
              .replace(/`([^`]+)`/g, '<code class="bg-dark-100 dark:bg-dark-800 px-1.5 py-0.5 rounded text-primary-500">$1</code>')
              .replace(/^# (.+)$/gm, '<h1>$1</h1>')
              .replace(/^## (.+)$/gm, '<h2>$1</h2>')
              .replace(/^### (.+)$/gm, '<h3>$1</h3>')
              .replace(/^\* (.+)$/gm, '<li>$1</li>')
              .replace(/^\| (.+) \|$/gm, (match) => {
                const cells = match.split('|').filter(Boolean).map(c => c.trim());
                return `<tr>${cells.map(c => `<td class="border border-dark-200 dark:border-dark-700 px-3 py-2">${c}</td>`).join('')}</tr>`;
              })
              .replace(/\n/g, '<br/>')
          }} />
        </div>
      </div>

      {/* Challenges */}
      {lesson.challenges.length > 0 && (
        <div className="card mb-6">
          <div className="p-4 border-b border-dark-200 dark:border-dark-700">
            <h2 className="font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-500" />
              Desafios Práticos
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {lesson.challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="p-4 bg-dark-50 dark:bg-dark-800 rounded-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium">{challenge.title}</h3>
                    <p className="text-sm text-dark-500 mt-1">{challenge.description}</p>
                    <p className="text-xs text-dark-400 mt-2 italic">
                      💡 {challenge.contextDescription}
                    </p>
                  </div>
                  <span className="xp-badge flex-shrink-0">
                    +{challenge.xpBonus} XP
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quiz */}
      {lesson.quizzes.length > 0 && (
        <div className="card mb-6">
          <div className="p-4 border-b border-dark-200 dark:border-dark-700">
            <h2 className="font-bold flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent-500" />
              Quiz de Verificação
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {lesson.quizzes.map((quiz) => (
              <div key={quiz.id} className="p-4 bg-dark-50 dark:bg-dark-800 rounded-lg">
                <p className="font-medium mb-3">{quiz.question}</p>
                <div className="space-y-2">
                  {quiz.options.map((option, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left p-3 rounded-lg border border-dark-200
                               dark:border-dark-700 hover:border-primary-500 transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Complete button */}
      {progress?.status !== 'completed' && (
        <button
          onClick={handleComplete}
          className="w-full btn-secondary flex items-center justify-center gap-2 py-4"
        >
          <CheckCircle2 className="w-5 h-5" />
          Marcar como Concluída (+{lesson.xp} XP)
        </button>
      )}

      {progress?.status === 'completed' && (
        <div className="text-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg
                       text-accent-700 dark:text-accent-400">
          <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
          <div className="font-medium">Lição concluída!</div>
          <div className="text-sm">+{lesson.xp} XP ganhos</div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// DASHBOARD COMPONENT
// ============================================================================

function Dashboard({ onSelectLesson }: { onSelectLesson: (lessonId: string) => void }) {
  const stats = useCourseStore((s) => s.stats);
  const modules = useCourseStore((s) => s.modules);
  const lessonProgress = useCourseStore((s) => s.lessonProgress);
  const activityLog = useCourseStore((s) => s.activityLog);

  const level = getLevelFromXp(stats.totalXp);
  const xpProgress = getXpProgress(stats.totalXp);

  // Find next lesson to continue
  const nextLesson = modules
    .flatMap((m) => m.lessons)
    .find((l) => !lessonProgress[l.id] || lessonProgress[l.id].status !== 'completed');

  // Recent activity
  const recentActivity = activityLog.slice(0, 5);

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg
                          flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-500" />
            </div>
            <div>
              <div className="text-2xl font-bold text-dark-900 dark:text-white">
                {stats.totalXp}
              </div>
              <div className="text-sm text-dark-500">XP Total</div>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-100 dark:bg-accent-900/30 rounded-lg
                          flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent-500" />
            </div>
            <div>
              <div className="text-2xl font-bold text-dark-900 dark:text-white">
                {stats.lessonsCompleted}/{stats.totalLessons}
              </div>
              <div className="text-sm text-dark-500">Lições</div>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg
                          flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <div className="text-2xl font-bold text-dark-900 dark:text-white">
                {stats.streak.current}
              </div>
              <div className="text-sm text-dark-500">Dias seguidos</div>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg
                          flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <div className="text-2xl font-bold text-dark-900 dark:text-white">
                {stats.badges.length}
              </div>
              <div className="text-sm text-dark-500">Badges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue learning */}
      {nextLesson && (
        <div className="card mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Continuar Estudando</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-white/80 text-sm mb-1">
                    Módulo {nextLesson.moduleId}
                  </div>
                  <h3 className="text-lg font-medium text-white">{nextLesson.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-white/70 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {nextLesson.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" /> {nextLesson.xp} XP
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onSelectLesson(nextLesson.id)}
                  className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg
                           hover:bg-white/90 transition-all flex items-center gap-2"
                >
                  <Play className="w-5 h-5" /> Começar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Level progress */}
      <div className="card p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{level.icon}</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-dark-900 dark:text-white">{level.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-3 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full
                           transition-all duration-500"
                  style={{ width: `${xpProgress.percentage}%` }}
                />
              </div>
              <span className="text-sm text-dark-500">
                {xpProgress.current}/{xpProgress.max} XP
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm text-dark-500">
          Benefícios: {level.benefits.join(' • ')}
        </div>
      </div>

      {/* AI Trends Section */}
      <TrendsSection />

      {/* Recent activity */}
      {recentActivity.length > 0 && (
        <div className="card">
          <div className="p-4 border-b border-dark-200 dark:border-dark-700">
            <h2 className="font-bold flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary-500" />
              Atividade Recente
            </h2>
          </div>
          <div className="divide-y divide-dark-200 dark:divide-dark-700">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{activity.description}</div>
                  <div className="text-xs text-dark-500">
                    {new Date(activity.timestamp).toLocaleString('pt-BR')}
                  </div>
                </div>
                {activity.xpEarned && (
                  <span className="xp-badge">+{activity.xpEarned} XP</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MAIN APP
// ============================================================================

function App() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentModule, setCurrentModule] = useState<string | null>(null);
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);
  const settings = useCourseStore((s) => s.settings);

  // Load profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('claude-code-course-profile');
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const isDark = settings.theme === 'dark' ||
      (settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
  }, [settings.theme]);

  const handleOnboarding = (data: OnboardingData) => {
    const newProfile: UserProfile = {
      id: `user-${Date.now()}`,
      name: data.name,
      email: data.email,
      primaryContext: data.primaryContext,
      contexts: [data.primaryContext],
      goals: data.goals,
      preferredLearningTime: 'flexible',
      dailyGoalMinutes: data.dailyGoalMinutes,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isOnboarded: true,
    };
    localStorage.setItem('claude-code-course-profile', JSON.stringify(newProfile));
    setProfile(newProfile);
  };

  // Show onboarding if no profile
  if (!profile) {
    return <Onboarding onComplete={handleOnboarding} />;
  }

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-950 flex flex-col">
      {/* AI News Ticker */}
      <NewsTicker />

      <div className="flex-1 flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentModule={currentModule}
          onSelectLesson={(id) => {
            const modules = useCourseStore.getState().modules;
            const lesson = modules.flatMap(m => m.lessons).find(l => l.id === id);
            if (lesson) {
              setCurrentModule(lesson.moduleId);
              setCurrentLesson(id);
            }
          }}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <Header profile={profile} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <main className="flex-1 overflow-y-auto">
          {currentLesson ? (
            <LessonView
              lessonId={currentLesson}
              onBack={() => setCurrentLesson(null)}
            />
          ) : (
            <Dashboard onSelectLesson={(id) => {
              const modules = useCourseStore.getState().modules;
              const lesson = modules.flatMap(m => m.lessons).find(l => l.id === id);
              if (lesson) {
                setCurrentModule(lesson.moduleId);
                setCurrentLesson(id);
              }
            }} />
          )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

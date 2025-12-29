// ============================================================================
// CLAUDE CODE MASTER COURSE - TYPE DEFINITIONS
// Estado-da-arte typing system with full persistence support
// ============================================================================

export type LessonStatus = 'locked' | 'available' | 'in_progress' | 'completed';
export type ModuleStatus = 'locked' | 'available' | 'in_progress' | 'completed';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type ChallengeContext = 'costa_law' | 'cla_digital' | 'ai_spot' | 'personal' | 'general';
export type UserContext = 'costa_law' | 'cla_digital' | 'ai_spot' | 'personal' | 'all';

// ============================================================================
// USER PROFILE
// ============================================================================

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  primaryContext: UserContext;
  contexts: UserContext[]; // Multiple contexts allowed
  goals: string[];
  preferredLearningTime: 'morning' | 'afternoon' | 'evening' | 'flexible';
  dailyGoalMinutes: number;
  timezone: string;
  createdAt: string;
  updatedAt: string;
  isOnboarded: boolean;
}

export interface OnboardingData {
  name: string;
  email?: string;
  primaryContext: UserContext;
  goals: string[];
  dailyGoalMinutes: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  slug: string;
  description: string;
  content: string; // Markdown content
  duration: number; // Minutes
  xp: number;
  difficulty: DifficultyLevel;
  prerequisites: string[]; // Lesson IDs
  tags: string[];

  // Practical elements
  codeExamples: CodeExample[];
  challenges: Challenge[];
  quizzes: Quiz[];

  // Versioning & Updates
  version: string;
  dateAdded: string; // ISO date
  dateUpdated: string;
  isNew: boolean; // Added within last 7 days

  // Resources
  externalLinks: ExternalLink[];
  relatedLessons: string[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class
  lessons: Lesson[];
  totalXp: number;
  estimatedHours: number;
  prerequisites: string[]; // Module IDs

  // Versioning
  version: string;
  dateUpdated: string;
}

export interface CodeExample {
  id: string;
  title: string;
  language: string;
  code: string;
  explanation: string;
  runnable: boolean;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  context: ChallengeContext;
  contextDescription: string; // "Use this for Costa Law contracts..."
  difficulty: DifficultyLevel;
  xpBonus: number;
  hints: string[];
  solution?: string;
  validation?: string; // How to verify completion
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xp: number;
}

export interface ExternalLink {
  title: string;
  url: string;
  type: 'docs' | 'video' | 'article' | 'github' | 'tool';
}

// ============================================================================
// USER PROGRESS & GAMIFICATION
// ============================================================================

export type Level = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master' | 'legendary';

export interface UserProgress {
  lessonId: string;
  status: LessonStatus;
  startedAt?: string;
  completedAt?: string;
  timeSpent: number; // Seconds
  xpEarned: number;
  quizScores: Record<string, number>; // quizId -> score
  challengesCompleted: string[]; // Challenge IDs
  notes: string;
  bookmarked: boolean;
}

export interface ModuleProgress {
  moduleId: string;
  status: ModuleStatus;
  lessonsCompleted: number;
  totalLessons: number;
  xpEarned: number;
  startedAt?: string;
  completedAt?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'achievement' | 'milestone' | 'skill' | 'streak' | 'special';
  xpValue: number;
  condition: string; // Description of how to earn
  earnedAt?: string;
  progress?: number; // 0-100 for progressive badges
}

export interface DailyStreak {
  current: number;
  longest: number;
  lastActivityDate: string;
  totalDays: number;
  calendar: Record<string, boolean>; // 'YYYY-MM-DD' -> completed
}

export interface LevelInfo {
  level: Level;
  name: string;
  minXp: number;
  maxXp: number;
  icon: string;
  color: string;
  benefits: string[];
}

export interface UserStats {
  totalXp: number;
  currentLevel: Level;
  lessonsCompleted: number;
  totalLessons: number;
  modulesCompleted: number;
  totalModules: number;
  challengesCompleted: number;
  quizzesPassed: number;
  timeSpentMinutes: number;
  streak: DailyStreak;
  badges: Badge[];
  joinedAt: string;
  lastActivityAt: string;
}

// ============================================================================
// SEARCH & HISTORY
// ============================================================================

export interface SearchHistoryItem {
  query: string;
  timestamp: string;
  resultsCount: number;
}

export interface ActivityLogItem {
  id: string;
  type: 'lesson_started' | 'lesson_completed' | 'quiz_passed' | 'challenge_completed' |
        'badge_earned' | 'level_up' | 'note_added' | 'bookmark_added' | 'search';
  description: string;
  timestamp: string;
  xpEarned?: number;
  metadata?: Record<string, unknown>;
}

export interface Notification {
  id: string;
  type: 'new_content' | 'achievement' | 'streak' | 'reminder' | 'update';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

// ============================================================================
// NOTES & BOOKMARKS
// ============================================================================

export interface Note {
  id: string;
  lessonId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface Bookmark {
  id: string;
  lessonId: string;
  note?: string;
  createdAt: string;
}

// ============================================================================
// SETTINGS
// ============================================================================

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  codeTheme: 'dark' | 'light';
  dailyGoalMinutes: number;
  dailyGoalXp: number;
  notificationsEnabled: boolean;
  soundEnabled: boolean;
  language: 'pt-BR' | 'en';
  compactMode: boolean;
  showXpAnimations: boolean;
}

// ============================================================================
// STORE STATE
// ============================================================================

export interface CourseState {
  // Course Data
  modules: Module[];

  // User Progress
  lessonProgress: Record<string, UserProgress>;
  moduleProgress: Record<string, ModuleProgress>;
  stats: UserStats;

  // Activity
  searchHistory: SearchHistoryItem[];
  activityLog: ActivityLogItem[];
  notifications: Notification[];

  // Notes & Bookmarks
  notes: Note[];
  bookmarks: Bookmark[];

  // Settings
  settings: UserSettings;

  // UI State
  currentModuleId: string | null;
  currentLessonId: string | null;
  sidebarOpen: boolean;
  searchQuery: string;
}

// ============================================================================
// LEVEL DEFINITIONS
// ============================================================================

export const LEVELS: LevelInfo[] = [
  {
    level: 'bronze',
    name: 'Bronze Explorer',
    minXp: 0,
    maxXp: 500,
    icon: '🥉',
    color: 'amber',
    benefits: ['Access to fundamentals', 'Basic CLI commands']
  },
  {
    level: 'silver',
    name: 'Silver Practitioner',
    minXp: 501,
    maxXp: 1500,
    icon: '🥈',
    color: 'gray',
    benefits: ['All bronze benefits', 'Advanced CLI', 'Skills unlocked']
  },
  {
    level: 'gold',
    name: 'Gold Artisan',
    minXp: 1501,
    maxXp: 3000,
    icon: '🥇',
    color: 'yellow',
    benefits: ['All silver benefits', 'MCP mastery', 'Custom skills']
  },
  {
    level: 'platinum',
    name: 'Platinum Architect',
    minXp: 3001,
    maxXp: 5000,
    icon: '💎',
    color: 'cyan',
    benefits: ['All gold benefits', 'Hooks & automation', 'Subagents']
  },
  {
    level: 'diamond',
    name: 'Diamond Commander',
    minXp: 5001,
    maxXp: 7500,
    icon: '👑',
    color: 'purple',
    benefits: ['All platinum benefits', 'Enterprise patterns', 'CI/CD']
  },
  {
    level: 'master',
    name: 'Master Orchestrator',
    minXp: 7501,
    maxXp: 9000,
    icon: '🌟',
    color: 'indigo',
    benefits: ['All diamond benefits', 'Teaching others', 'Community leader']
  },
  {
    level: 'legendary',
    name: 'Legendary Pioneer',
    minXp: 9001,
    maxXp: 10000,
    icon: '⚡',
    color: 'gradient',
    benefits: ['TOP 0.01% mundial', 'All features mastered', 'Contributor status']
  }
];

export function getLevelFromXp(xp: number): LevelInfo {
  return LEVELS.find(l => xp >= l.minXp && xp <= l.maxXp) || LEVELS[0];
}

export function getXpProgress(xp: number): { current: number; max: number; percentage: number } {
  const level = getLevelFromXp(xp);
  const current = xp - level.minXp;
  const max = level.maxXp - level.minXp;
  const percentage = Math.min(100, Math.round((current / max) * 100));
  return { current, max, percentage };
}

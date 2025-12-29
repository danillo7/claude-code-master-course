// ============================================================================
// CLAUDE CODE MASTER COURSE - ZUSTAND STORE
// Full persistence with localStorage + auto-save + backup
// ============================================================================

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { format, differenceInDays, parseISO } from 'date-fns';
import type {
  CourseState,
  UserProgress,
  UserStats,
  Badge,
  DailyStreak,
  ActivityLogItem,
  Notification,
  Note,
  UserSettings,
} from '../types/course';
import { getLevelFromXp } from '../types/course';
import { courseModules } from '../data/courseData';

// ============================================================================
// DEFAULT VALUES
// ============================================================================

const defaultSettings: UserSettings = {
  theme: 'dark',
  fontSize: 'medium',
  codeTheme: 'dark',
  dailyGoalMinutes: 30,
  dailyGoalXp: 100,
  notificationsEnabled: true,
  soundEnabled: true,
  language: 'pt-BR',
  compactMode: false,
  showXpAnimations: true,
};

const defaultStreak: DailyStreak = {
  current: 0,
  longest: 0,
  lastActivityDate: '',
  totalDays: 0,
  calendar: {},
};

const defaultStats: UserStats = {
  totalXp: 0,
  currentLevel: 'bronze',
  lessonsCompleted: 0,
  totalLessons: courseModules.reduce((acc, m) => acc + m.lessons.length, 0),
  modulesCompleted: 0,
  totalModules: courseModules.length,
  challengesCompleted: 0,
  quizzesPassed: 0,
  timeSpentMinutes: 0,
  streak: defaultStreak,
  badges: [],
  joinedAt: new Date().toISOString(),
  lastActivityAt: new Date().toISOString(),
};

// ============================================================================
// INITIAL BADGES (to be earned)
// ============================================================================

const availableBadges: Badge[] = [
  // Milestone badges
  { id: 'first_lesson', name: 'First Steps', description: 'Complete your first lesson', icon: '🚀', category: 'milestone', xpValue: 50, condition: 'Complete 1 lesson' },
  { id: 'first_module', name: 'Module Master', description: 'Complete your first module', icon: '📦', category: 'milestone', xpValue: 200, condition: 'Complete 1 module' },
  { id: 'halfway', name: 'Halfway There', description: 'Complete 50% of the course', icon: '🎯', category: 'milestone', xpValue: 500, condition: 'Complete 50% of lessons' },
  { id: 'course_complete', name: 'Course Champion', description: 'Complete the entire course', icon: '🏆', category: 'milestone', xpValue: 1000, condition: 'Complete all lessons' },

  // Streak badges
  { id: 'streak_3', name: 'Getting Started', description: '3-day learning streak', icon: '🔥', category: 'streak', xpValue: 30, condition: '3-day streak' },
  { id: 'streak_7', name: 'Week Warrior', description: '7-day learning streak', icon: '⚡', category: 'streak', xpValue: 100, condition: '7-day streak' },
  { id: 'streak_30', name: 'Consistency King', description: '30-day learning streak', icon: '👑', category: 'streak', xpValue: 500, condition: '30-day streak' },

  // Skill badges
  { id: 'cli_master', name: 'CLI Commander', description: 'Master all CLI commands', icon: '💻', category: 'skill', xpValue: 300, condition: 'Complete CLI module' },
  { id: 'skill_creator', name: 'Skill Artisan', description: 'Learn to create custom skills', icon: '🛠️', category: 'skill', xpValue: 300, condition: 'Complete Skills module' },
  { id: 'mcp_wizard', name: 'MCP Wizard', description: 'Master Model Context Protocol', icon: '🔌', category: 'skill', xpValue: 400, condition: 'Complete MCP module' },
  { id: 'hook_hacker', name: 'Hook Hacker', description: 'Automate with hooks', icon: '🎣', category: 'skill', xpValue: 350, condition: 'Complete Hooks module' },
  { id: 'agent_orchestrator', name: 'Agent Orchestrator', description: 'Master subagents', icon: '🤖', category: 'skill', xpValue: 400, condition: 'Complete Subagents module' },

  // Special badges
  { id: 'night_owl', name: 'Night Owl', description: 'Study after midnight', icon: '🦉', category: 'special', xpValue: 25, condition: 'Study between 00:00-04:00' },
  { id: 'early_bird', name: 'Early Bird', description: 'Study before 6 AM', icon: '🐦', category: 'special', xpValue: 25, condition: 'Study between 04:00-06:00' },
  { id: 'note_taker', name: 'Meticulous Noter', description: 'Write 10 notes', icon: '📝', category: 'special', xpValue: 100, condition: 'Write 10 notes' },
  { id: 'challenger', name: 'Challenge Seeker', description: 'Complete 10 challenges', icon: '🏅', category: 'special', xpValue: 200, condition: 'Complete 10 challenges' },
  { id: 'speed_learner', name: 'Speed Learner', description: 'Complete 5 lessons in one day', icon: '⚡', category: 'special', xpValue: 150, condition: '5 lessons in 1 day' },
  { id: 'quiz_ace', name: 'Quiz Ace', description: 'Score 100% on 10 quizzes', icon: '💯', category: 'special', xpValue: 200, condition: 'Perfect score on 10 quizzes' },

  // Level badges (automatically awarded)
  { id: 'level_silver', name: 'Silver Achieved', description: 'Reach Silver level', icon: '🥈', category: 'achievement', xpValue: 0, condition: 'Reach 501 XP' },
  { id: 'level_gold', name: 'Gold Achieved', description: 'Reach Gold level', icon: '🥇', category: 'achievement', xpValue: 0, condition: 'Reach 1501 XP' },
  { id: 'level_platinum', name: 'Platinum Achieved', description: 'Reach Platinum level', icon: '💎', category: 'achievement', xpValue: 0, condition: 'Reach 3001 XP' },
  { id: 'level_diamond', name: 'Diamond Achieved', description: 'Reach Diamond level', icon: '👑', category: 'achievement', xpValue: 0, condition: 'Reach 5001 XP' },
  { id: 'level_master', name: 'Master Achieved', description: 'Reach Master level', icon: '🌟', category: 'achievement', xpValue: 0, condition: 'Reach 7501 XP' },
  { id: 'level_legendary', name: 'LEGENDARY!', description: 'Join the TOP 0.01%', icon: '⚡', category: 'achievement', xpValue: 0, condition: 'Reach 9001 XP' },
];

// ============================================================================
// STORE INTERFACE
// ============================================================================

interface CourseActions {
  // Lesson actions
  startLesson: (lessonId: string) => void;
  completeLesson: (lessonId: string, timeSpent: number) => void;
  updateLessonProgress: (lessonId: string, progress: Partial<UserProgress>) => void;

  // Quiz actions
  submitQuiz: (lessonId: string, quizId: string, score: number) => void;

  // Challenge actions
  completeChallenge: (lessonId: string, challengeId: string) => void;

  // XP and leveling
  addXp: (amount: number, source: string) => void;
  checkLevelUp: () => void;
  checkBadges: () => void;

  // Streak
  updateStreak: () => void;

  // Notes
  addNote: (lessonId: string, content: string, tags?: string[]) => void;
  updateNote: (noteId: string, content: string) => void;
  deleteNote: (noteId: string) => void;

  // Bookmarks
  toggleBookmark: (lessonId: string) => void;

  // Search
  addSearchHistory: (query: string, resultsCount: number) => void;
  clearSearchHistory: () => void;

  // Activity
  logActivity: (type: ActivityLogItem['type'], description: string, xpEarned?: number, metadata?: Record<string, unknown>) => void;

  // Notifications
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markNotificationRead: (id: string) => void;
  clearNotifications: () => void;

  // Settings
  updateSettings: (settings: Partial<UserSettings>) => void;

  // Navigation
  setCurrentLesson: (lessonId: string | null) => void;
  setCurrentModule: (moduleId: string | null) => void;
  toggleSidebar: () => void;
  setSearchQuery: (query: string) => void;

  // Data management
  exportData: () => string;
  importData: (jsonData: string) => boolean;
  resetProgress: () => void;
}

type CourseStore = CourseState & CourseActions;

// ============================================================================
// CREATE STORE
// ============================================================================

export const useCourseStore = create<CourseStore>()(
  persist(
    (set, get) => ({
      // ========== Initial State ==========
      modules: courseModules,
      lessonProgress: {},
      moduleProgress: {},
      stats: defaultStats,
      searchHistory: [],
      activityLog: [],
      notifications: [],
      notes: [],
      bookmarks: [],
      settings: defaultSettings,
      currentModuleId: null,
      currentLessonId: null,
      sidebarOpen: true,
      searchQuery: '',

      // ========== Lesson Actions ==========
      startLesson: (lessonId: string) => {
        const now = new Date().toISOString();
        set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              lessonId,
              status: 'in_progress',
              startedAt: state.lessonProgress[lessonId]?.startedAt || now,
              timeSpent: state.lessonProgress[lessonId]?.timeSpent || 0,
              xpEarned: state.lessonProgress[lessonId]?.xpEarned || 0,
              quizScores: state.lessonProgress[lessonId]?.quizScores || {},
              challengesCompleted: state.lessonProgress[lessonId]?.challengesCompleted || [],
              notes: state.lessonProgress[lessonId]?.notes || '',
              bookmarked: state.lessonProgress[lessonId]?.bookmarked || false,
            },
          },
          currentLessonId: lessonId,
        }));
        get().updateStreak();
        get().logActivity('lesson_started', `Started lesson: ${lessonId}`);
      },

      completeLesson: (lessonId: string, timeSpent: number) => {
        const now = new Date().toISOString();
        const lesson = get().modules
          .flatMap(m => m.lessons)
          .find(l => l.id === lessonId);

        if (!lesson) return;

        const wasCompleted = get().lessonProgress[lessonId]?.status === 'completed';

        set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              lessonId,
              status: 'completed',
              completedAt: now,
              timeSpent: (state.lessonProgress[lessonId]?.timeSpent || 0) + timeSpent,
              xpEarned: lesson.xp,
              quizScores: state.lessonProgress[lessonId]?.quizScores || {},
              challengesCompleted: state.lessonProgress[lessonId]?.challengesCompleted || [],
              notes: state.lessonProgress[lessonId]?.notes || '',
              bookmarked: state.lessonProgress[lessonId]?.bookmarked || false,
            },
          },
          stats: {
            ...state.stats,
            lessonsCompleted: wasCompleted
              ? state.stats.lessonsCompleted
              : state.stats.lessonsCompleted + 1,
            timeSpentMinutes: state.stats.timeSpentMinutes + Math.round(timeSpent / 60),
            lastActivityAt: now,
          },
        }));

        if (!wasCompleted) {
          get().addXp(lesson.xp, `Lesson completed: ${lesson.title}`);
          get().logActivity('lesson_completed', `Completed: ${lesson.title}`, lesson.xp);

          // Check if first lesson
          if (get().stats.lessonsCompleted === 1) {
            get().checkBadges();
          }
        }

        get().updateStreak();
        get().checkBadges();
      },

      updateLessonProgress: (lessonId: string, progress: Partial<UserProgress>) => {
        set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              ...progress,
              lessonId,
            },
          },
        }));
      },

      // ========== Quiz Actions ==========
      submitQuiz: (lessonId: string, quizId: string, score: number) => {
        const isPerfect = score === 100;
        set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              lessonId,
              quizScores: {
                ...state.lessonProgress[lessonId]?.quizScores,
                [quizId]: score,
              },
            },
          },
          stats: {
            ...state.stats,
            quizzesPassed: isPerfect ? state.stats.quizzesPassed + 1 : state.stats.quizzesPassed,
          },
        }));

        if (isPerfect) {
          get().addXp(25, 'Perfect quiz score!');
          get().logActivity('quiz_passed', `Perfect score on quiz: ${quizId}`, 25);
        }
        get().checkBadges();
      },

      // ========== Challenge Actions ==========
      completeChallenge: (lessonId: string, challengeId: string) => {
        const lesson = get().modules
          .flatMap(m => m.lessons)
          .find(l => l.id === lessonId);
        const challenge = lesson?.challenges.find(c => c.id === challengeId);

        if (!challenge) return;

        set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              lessonId,
              challengesCompleted: [
                ...(state.lessonProgress[lessonId]?.challengesCompleted || []),
                challengeId,
              ],
            },
          },
          stats: {
            ...state.stats,
            challengesCompleted: state.stats.challengesCompleted + 1,
          },
        }));

        get().addXp(challenge.xpBonus, `Challenge completed: ${challenge.title}`);
        get().logActivity('challenge_completed', `Completed challenge: ${challenge.title}`, challenge.xpBonus);
        get().checkBadges();
      },

      // ========== XP and Leveling ==========
      addXp: (amount: number, _source: string) => {
        const oldLevel = getLevelFromXp(get().stats.totalXp);
        set((state) => ({
          stats: {
            ...state.stats,
            totalXp: state.stats.totalXp + amount,
          },
        }));
        const newLevel = getLevelFromXp(get().stats.totalXp);

        if (newLevel.level !== oldLevel.level) {
          get().checkLevelUp();
        }
      },

      checkLevelUp: () => {
        const level = getLevelFromXp(get().stats.totalXp);
        set((state) => ({
          stats: {
            ...state.stats,
            currentLevel: level.level,
          },
        }));
        get().logActivity('level_up', `Reached ${level.name}!`);
        get().addNotification({
          type: 'achievement',
          title: 'Level Up! 🎉',
          message: `You've reached ${level.name}!`,
        });
        get().checkBadges();
      },

      checkBadges: () => {
        const state = get();
        const earnedBadges = [...state.stats.badges];

        // Check each badge condition
        availableBadges.forEach((badge) => {
          const alreadyEarned = earnedBadges.some(b => b.id === badge.id);
          if (alreadyEarned) return;

          let earned = false;

          switch (badge.id) {
            case 'first_lesson':
              earned = state.stats.lessonsCompleted >= 1;
              break;
            case 'first_module':
              earned = state.stats.modulesCompleted >= 1;
              break;
            case 'halfway':
              earned = state.stats.lessonsCompleted >= state.stats.totalLessons / 2;
              break;
            case 'course_complete':
              earned = state.stats.lessonsCompleted >= state.stats.totalLessons;
              break;
            case 'streak_3':
              earned = state.stats.streak.current >= 3;
              break;
            case 'streak_7':
              earned = state.stats.streak.current >= 7;
              break;
            case 'streak_30':
              earned = state.stats.streak.current >= 30;
              break;
            case 'note_taker':
              earned = state.notes.length >= 10;
              break;
            case 'challenger':
              earned = state.stats.challengesCompleted >= 10;
              break;
            case 'quiz_ace':
              earned = state.stats.quizzesPassed >= 10;
              break;
            case 'level_silver':
              earned = state.stats.totalXp >= 501;
              break;
            case 'level_gold':
              earned = state.stats.totalXp >= 1501;
              break;
            case 'level_platinum':
              earned = state.stats.totalXp >= 3001;
              break;
            case 'level_diamond':
              earned = state.stats.totalXp >= 5001;
              break;
            case 'level_master':
              earned = state.stats.totalXp >= 7501;
              break;
            case 'level_legendary':
              earned = state.stats.totalXp >= 9001;
              break;
          }

          if (earned) {
            earnedBadges.push({
              ...badge,
              earnedAt: new Date().toISOString(),
            });
            get().logActivity('badge_earned', `Earned badge: ${badge.name}`, badge.xpValue);
            get().addNotification({
              type: 'achievement',
              title: 'Badge Earned! 🏆',
              message: `You've earned the "${badge.name}" badge!`,
            });
          }
        });

        set((state) => ({
          stats: {
            ...state.stats,
            badges: earnedBadges,
          },
        }));
      },

      // ========== Streak ==========
      updateStreak: () => {
        const today = format(new Date(), 'yyyy-MM-dd');
        const state = get();
        const lastDate = state.stats.streak.lastActivityDate;

        if (lastDate === today) return; // Already logged today

        let newCurrent = 1;
        if (lastDate) {
          const daysDiff = differenceInDays(new Date(), parseISO(lastDate));
          if (daysDiff === 1) {
            newCurrent = state.stats.streak.current + 1;
          }
        }

        const newLongest = Math.max(state.stats.streak.longest, newCurrent);

        set((state) => ({
          stats: {
            ...state.stats,
            streak: {
              current: newCurrent,
              longest: newLongest,
              lastActivityDate: today,
              totalDays: state.stats.streak.totalDays + 1,
              calendar: {
                ...state.stats.streak.calendar,
                [today]: true,
              },
            },
          },
        }));
      },

      // ========== Notes ==========
      addNote: (lessonId: string, content: string, tags: string[] = []) => {
        const now = new Date().toISOString();
        const newNote: Note = {
          id: `note-${Date.now()}`,
          lessonId,
          content,
          createdAt: now,
          updatedAt: now,
          tags,
        };
        set((state) => ({
          notes: [...state.notes, newNote],
        }));
        get().logActivity('note_added', `Added note to lesson: ${lessonId}`);
        get().checkBadges();
      },

      updateNote: (noteId: string, content: string) => {
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === noteId
              ? { ...n, content, updatedAt: new Date().toISOString() }
              : n
          ),
        }));
      },

      deleteNote: (noteId: string) => {
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== noteId),
        }));
      },

      // ========== Bookmarks ==========
      toggleBookmark: (lessonId: string) => {
        const exists = get().bookmarks.some((b) => b.lessonId === lessonId);
        if (exists) {
          set((state) => ({
            bookmarks: state.bookmarks.filter((b) => b.lessonId !== lessonId),
          }));
        } else {
          set((state) => ({
            bookmarks: [
              ...state.bookmarks,
              {
                id: `bookmark-${Date.now()}`,
                lessonId,
                createdAt: new Date().toISOString(),
              },
            ],
          }));
          get().logActivity('bookmark_added', `Bookmarked lesson: ${lessonId}`);
        }
      },

      // ========== Search ==========
      addSearchHistory: (query: string, resultsCount: number) => {
        set((state) => ({
          searchHistory: [
            { query, timestamp: new Date().toISOString(), resultsCount },
            ...state.searchHistory.slice(0, 49), // Keep last 50
          ],
        }));
        get().logActivity('search', `Searched: "${query}"`);
      },

      clearSearchHistory: () => {
        set({ searchHistory: [] });
      },

      // ========== Activity Log ==========
      logActivity: (type, description, xpEarned, metadata) => {
        const newActivity: ActivityLogItem = {
          id: `activity-${Date.now()}`,
          type,
          description,
          timestamp: new Date().toISOString(),
          xpEarned,
          metadata,
        };
        set((state) => ({
          activityLog: [newActivity, ...state.activityLog.slice(0, 499)], // Keep last 500
        }));
      },

      // ========== Notifications ==========
      addNotification: (notification) => {
        const newNotification: Notification = {
          ...notification,
          id: `notification-${Date.now()}`,
          timestamp: new Date().toISOString(),
          read: false,
        };
        set((state) => ({
          notifications: [newNotification, ...state.notifications.slice(0, 99)],
        }));
      },

      markNotificationRead: (id: string) => {
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        }));
      },

      clearNotifications: () => {
        set({ notifications: [] });
      },

      // ========== Settings ==========
      updateSettings: (settings: Partial<UserSettings>) => {
        set((state) => ({
          settings: { ...state.settings, ...settings },
        }));
      },

      // ========== Navigation ==========
      setCurrentLesson: (lessonId: string | null) => {
        set({ currentLessonId: lessonId });
      },

      setCurrentModule: (moduleId: string | null) => {
        set({ currentModuleId: moduleId });
      },

      toggleSidebar: () => {
        set((state) => ({ sidebarOpen: !state.sidebarOpen }));
      },

      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },

      // ========== Data Management ==========
      exportData: () => {
        const state = get();
        const exportData = {
          lessonProgress: state.lessonProgress,
          moduleProgress: state.moduleProgress,
          stats: state.stats,
          notes: state.notes,
          bookmarks: state.bookmarks,
          settings: state.settings,
          activityLog: state.activityLog,
          searchHistory: state.searchHistory,
          exportedAt: new Date().toISOString(),
          version: '1.0.0',
        };
        return JSON.stringify(exportData, null, 2);
      },

      importData: (jsonData: string) => {
        try {
          const data = JSON.parse(jsonData);
          set({
            lessonProgress: data.lessonProgress || {},
            moduleProgress: data.moduleProgress || {},
            stats: data.stats || defaultStats,
            notes: data.notes || [],
            bookmarks: data.bookmarks || [],
            settings: { ...defaultSettings, ...data.settings },
            activityLog: data.activityLog || [],
            searchHistory: data.searchHistory || [],
          });
          return true;
        } catch {
          return false;
        }
      },

      resetProgress: () => {
        set({
          lessonProgress: {},
          moduleProgress: {},
          stats: defaultStats,
          notes: [],
          bookmarks: [],
          activityLog: [],
          searchHistory: [],
          notifications: [],
        });
      },
    }),
    {
      name: 'claude-code-course-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        lessonProgress: state.lessonProgress,
        moduleProgress: state.moduleProgress,
        stats: state.stats,
        notes: state.notes,
        bookmarks: state.bookmarks,
        settings: state.settings,
        activityLog: state.activityLog,
        searchHistory: state.searchHistory,
        notifications: state.notifications,
      }),
    }
  )
);

// ============================================================================
// SELECTORS (for optimized re-renders)
// ============================================================================

export const selectTotalXp = (state: CourseStore) => state.stats.totalXp;
export const selectCurrentLevel = (state: CourseStore) => state.stats.currentLevel;
export const selectStreak = (state: CourseStore) => state.stats.streak;
export const selectLessonsCompleted = (state: CourseStore) => state.stats.lessonsCompleted;
export const selectBadges = (state: CourseStore) => state.stats.badges;
export const selectUnreadNotifications = (state: CourseStore) =>
  state.notifications.filter((n) => !n.read).length;

// ============================================================================
// AI MASTER PORTAL - COURSE SELECTOR
// Estado-da-arte landing page for multi-course platform
// ============================================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal, Zap, Clock, BookOpen, Trophy, Flame,
  Star, Sparkles, GraduationCap, Target,
  Check, ArrowRight, Play, Award
} from 'lucide-react';
import type { CourseInfo, CourseId, CourseProgress, UserProfile } from '../types/course';
import { COURSE_CATALOG, getLevelFromXp } from '../types/course';
import { useCourseStore } from '../store/useCourseStore';

// ============================================================================
// ICON MAP
// ============================================================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  Zap,
};

// ============================================================================
// COURSE CARD COMPONENT
// ============================================================================

interface CourseCardProps {
  course: CourseInfo;
  progress?: CourseProgress;
  onSelect: (courseId: CourseId) => void;
  isSelected: boolean;
}

function CourseCard({ course, progress, onSelect, isSelected }: CourseCardProps) {
  const Icon = iconMap[course.icon] || BookOpen;
  const hasProgress = progress && progress.lessonsCompleted > 0;
  const isCompleted = progress && progress.percentComplete === 100;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(course.id)}
      className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300
                  ${isSelected
                    ? 'ring-4 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950'
                    : 'hover:shadow-xl'
                  }
                  ${isSelected && course.color === 'indigo' ? 'ring-indigo-500' : ''}
                  ${isSelected && course.color === 'emerald' ? 'ring-emerald-500' : ''}`}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90`} />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Content */}
      <div className="relative p-6 text-white">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          {course.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 backdrop-blur rounded-full text-xs font-semibold">
              <Sparkles className="w-3 h-3" /> Novo
            </span>
          )}
          {course.isFeatured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500/30 backdrop-blur rounded-full text-xs font-semibold">
              <Star className="w-3 h-3" /> Destaque
            </span>
          )}
          {isCompleted && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/30 backdrop-blur rounded-full text-xs font-semibold">
              <Check className="w-3 h-3" /> Completo
            </span>
          )}
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <Icon className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{course.title}</h3>
            <p className="text-white/80">{course.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 opacity-70" />
            <span>{course.totalLessons} lições</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 opacity-70" />
            <span>{course.estimatedHours}h</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 opacity-70" />
            <span className="capitalize">{course.difficulty === 'all-levels' ? 'Todos níveis' : course.difficulty}</span>
          </div>
        </div>

        {/* Progress Bar (if has progress) */}
        {hasProgress && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium">Progresso</span>
              <span>{progress.percentComplete}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress.percentComplete}%` }}
                className="h-full bg-white rounded-full"
              />
            </div>
            <div className="flex items-center justify-between text-xs mt-1.5 opacity-70">
              <span>{progress.lessonsCompleted}/{progress.totalLessons} lições</span>
              <span>{progress.totalXp} XP</span>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.features.slice(0, 3).map((feature) => (
            <span key={feature} className="px-2 py-0.5 bg-white/10 rounded text-xs">
              {feature}
            </span>
          ))}
          {course.features.length > 3 && (
            <span className="px-2 py-0.5 bg-white/10 rounded text-xs">
              +{course.features.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button
          className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur rounded-xl
                     font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          {hasProgress ? (
            <>
              <Play className="w-4 h-4" /> Continuar Estudando
            </>
          ) : (
            <>
              <ArrowRight className="w-4 h-4" /> Começar Agora
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

// ============================================================================
// STATS SUMMARY COMPONENT
// ============================================================================

interface StatsSummaryProps {
  profile: UserProfile;
}

function StatsSummary({ profile }: StatsSummaryProps) {
  const stats = useCourseStore((s) => s.stats);
  const level = getLevelFromXp(stats.totalXp);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Seu Progresso Global
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Membro desde {new Date(profile.createdAt).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="text-3xl mb-1">{level.icon}</div>
          <div className="font-semibold text-slate-900 dark:text-white">{level.name}</div>
          <div className="text-xs text-slate-500">{stats.totalXp} XP</div>
        </div>

        <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="text-3xl font-bold text-indigo-500">{stats.lessonsCompleted}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Lições Completas</div>
        </div>

        <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="flex items-center justify-center gap-1 text-3xl font-bold text-orange-500">
            <Flame className="w-6 h-6" />
            {stats.streak.current}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Dias de Streak</div>
        </div>

        <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="flex items-center justify-center gap-1 text-3xl font-bold text-violet-500">
            <Award className="w-6 h-6" />
            {stats.badges.length}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Badges</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COURSE SELECTOR COMPONENT
// ============================================================================

interface CourseSelectorProps {
  profile: UserProfile;
  onSelectCourse: (courseId: CourseId) => void;
}

export function CourseSelector({ profile, onSelectCourse }: CourseSelectorProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseId | null>(null);

  // Get course progress from store (we'll implement this)
  const courseProgress = useCourseStore((s) => s.courseProgress);

  const handleSelectCourse = (courseId: CourseId) => {
    setSelectedCourse(courseId);
    // Small delay for visual feedback before navigating
    setTimeout(() => onSelectCourse(courseId), 300);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent dark:from-indigo-500/20 dark:via-violet-500/10" />

        <div className="relative max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-500/20
                        rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              AI FIRST Learning Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Olá, <span className="text-indigo-500">{profile.name.split(' ')[0]}</span>! 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Escolha um curso para continuar sua jornada no TOP 1% de produtividade com IA
            </motion.p>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <StatsSummary profile={profile} />
          </motion.div>

          {/* Course Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              Cursos Disponíveis
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {COURSE_CATALOG.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  progress={courseProgress?.[course.id]}
                  onSelect={handleSelectCourse}
                  isSelected={selectedCourse === course.id}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Meta: {profile.dailyGoalMinutes} min/dia</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Seu contexto: {profile.primaryContext === 'all' ? 'Todos' : profile.primaryContext.replace('_', ' ')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>
            AI Master Portal • Criado por <span className="font-medium">Dr. Danillo Costa</span> •{' '}
            Filosofia <span className="text-indigo-500 font-medium">AI FIRST</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseSelector;

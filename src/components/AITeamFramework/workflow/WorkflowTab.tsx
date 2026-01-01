/**
 * WORKFLOW TAB - AI Team Framework v2.0
 *
 * Interactive 8-phase workflow pipeline visualization.
 * Based on Linear, Jira, and enterprise workflow patterns.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Search,
  Layers,
  Map,
  Code2,
  TestTube2,
  CheckCircle2,
  Rocket,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Lock,
  Clock,
  CheckCircle,
  Circle,
  Play,
  SkipForward,
  FileText,
  Shield,
  Gauge,
  GitBranch,
  History,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useProjectStore } from '../../../store/useProjectStore';
import type { WorkflowPhase, Project } from '../../../types/project';
import { WORKFLOW_PHASES, getPhaseConfig } from '../../../types/workflow';

// ============================================================================
// ICON MAP
// ============================================================================

const PHASE_ICONS: Record<string, LucideIcon> = {
  MessageSquare,
  Search,
  Layers,
  Map,
  Code2,
  TestTube2,
  CheckCircle2,
  Rocket,
};

const PHASE_COLORS: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  cyan: 'from-cyan-500 to-cyan-600',
  green: 'from-green-500 to-green-600',
  amber: 'from-amber-500 to-amber-600',
  red: 'from-red-500 to-red-600',
  indigo: 'from-indigo-500 to-indigo-600',
  emerald: 'from-emerald-500 to-emerald-600',
};

const PHASE_BG_COLORS: Record<string, string> = {
  blue: 'bg-blue-500/10 border-blue-500/30',
  purple: 'bg-purple-500/10 border-purple-500/30',
  cyan: 'bg-cyan-500/10 border-cyan-500/30',
  green: 'bg-green-500/10 border-green-500/30',
  amber: 'bg-amber-500/10 border-amber-500/30',
  red: 'bg-red-500/10 border-red-500/30',
  indigo: 'bg-indigo-500/10 border-indigo-500/30',
  emerald: 'bg-emerald-500/10 border-emerald-500/30',
};

// ============================================================================
// TYPES
// ============================================================================

interface PhaseCardProps {
  phase: typeof WORKFLOW_PHASES[number];
  project: Project;
  isActive: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onTransition: () => void;
  onSelect: () => void;
  isSelected: boolean;
}

// ============================================================================
// PHASE CARD COMPONENT
// ============================================================================

const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  project,
  isActive,
  isCompleted,
  isLocked,
  onTransition,
  onSelect,
  isSelected,
}) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = PHASE_ICONS[phase.icon] || Circle;
  const colorClass = PHASE_COLORS[phase.color];
  const bgColorClass = PHASE_BG_COLORS[phase.color];

  const phaseProgress = project.phaseProgress[phase.id as WorkflowPhase];
  const deliverables = phaseProgress?.deliverables || [];
  const approvals = phaseProgress?.approvals || [];
  const progress = phaseProgress?.progress || 0;

  const getStatusIcon = () => {
    if (isCompleted) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (isActive) return <Play className="w-5 h-5 text-blue-500 animate-pulse" />;
    if (isLocked) return <Lock className="w-5 h-5 text-gray-500" />;
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  const completedDeliverables = deliverables.filter(
    d => d.status === 'approved' || d.status === 'submitted'
  ).length;
  const totalDeliverables = phase.requiredDeliverables.filter(d => d.required).length;

  const completedApprovals = approvals.filter(a => a.status === 'approved').length;
  const totalApprovals = phase.requiredApprovals.filter(a => a.blocksPhaseTransition).length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative rounded-xl border transition-all duration-300 ${
        isSelected
          ? `${bgColorClass} ring-2 ring-offset-2 ring-offset-gray-900 ring-current`
          : isActive
          ? `${bgColorClass}`
          : isCompleted
          ? 'bg-green-500/5 border-green-500/20'
          : 'bg-gray-800/50 border-gray-700/50'
      } ${isLocked ? 'opacity-60' : 'cursor-pointer hover:border-gray-600'}`}
      onClick={() => !isLocked && onSelect()}
    >
      {/* Phase Header */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Phase Number & Icon */}
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">
                  Phase {phase.number}
                </span>
                {getStatusIcon()}
              </div>
              <h3 className="font-semibold text-white">{phase.shortName}</h3>
            </div>
          </div>

          {/* Progress Ring */}
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                className="text-gray-700"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 * (1 - progress / 100)}
                className={`${
                  isCompleted ? 'text-green-500' : isActive ? 'text-blue-500' : 'text-gray-600'
                } transition-all duration-500`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
              {progress}%
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <FileText className="w-3.5 h-3.5" />
            <span>
              {completedDeliverables}/{totalDeliverables}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Shield className="w-3.5 h-3.5" />
            <span>
              {completedApprovals}/{totalApprovals}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{phase.targetDuration.min}-{phase.targetDuration.max}{phase.targetDuration.unit[0]}</span>
          </div>
        </div>

        {/* Expand Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="mt-3 w-full flex items-center justify-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" /> Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> Show Details
            </>
          )}
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-700/50"
          >
            <div className="p-4 space-y-4">
              {/* Description */}
              <p className="text-sm text-gray-400">{phase.description}</p>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Required Deliverables
                </h4>
                <div className="space-y-1.5">
                  {phase.requiredDeliverables.slice(0, 4).map((d) => {
                    const delivered = deliverables.find(
                      (del) => del.deliverableId === d.id
                    );
                    return (
                      <div
                        key={d.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        {delivered?.status === 'approved' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : delivered?.status === 'submitted' ? (
                          <Clock className="w-4 h-4 text-amber-500" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-600" />
                        )}
                        <span
                          className={
                            delivered?.status === 'approved'
                              ? 'text-green-400'
                              : 'text-gray-400'
                          }
                        >
                          {d.name}
                        </span>
                        {d.required && (
                          <span className="text-xs text-red-400">*</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quality Gates */}
              <div>
                <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Quality Gates
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {phase.qualityGates.slice(0, 3).map((gate) => (
                    <span
                      key={gate.check}
                      className={`px-2 py-1 rounded-md text-xs ${
                        gate.blocksTransition
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-gray-700/50 text-gray-400'
                      }`}
                    >
                      {gate.check.replace(/_/g, ' ')} ≥{gate.threshold * 100}%
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              {isActive && !isCompleted && (
                <div className="pt-2 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onTransition();
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg bg-gradient-to-r ${colorClass} text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                  >
                    <SkipForward className="w-4 h-4" />
                    Complete Phase
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connector Line */}
      {phase.nextPhase && (
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 flex items-center justify-center z-10">
          <ChevronRight
            className={`w-5 h-5 ${
              isCompleted ? 'text-green-500' : 'text-gray-600'
            }`}
          />
        </div>
      )}
    </motion.div>
  );
};

// ============================================================================
// WORKFLOW PIPELINE COMPONENT
// ============================================================================

const WorkflowPipeline: React.FC<{
  project: Project;
  onPhaseSelect: (phase: WorkflowPhase) => void;
  selectedPhase: WorkflowPhase | null;
}> = ({ project, onPhaseSelect, selectedPhase }) => {
  const { transitionPhase } = useProjectStore();

  const phases: WorkflowPhase[] = [
    'input',
    'discovery',
    'design',
    'plan',
    'build',
    'test',
    'review',
    'deploy',
  ];

  const currentPhaseIndex = phases.indexOf(project.currentPhase);

  const handleTransition = (phase: WorkflowPhase) => {
    const phaseConfig = getPhaseConfig(phase);
    if (phaseConfig.nextPhase) {
      transitionPhase(project.id, phaseConfig.nextPhase, `Completed ${phase} phase`);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6 lg:grid-cols-8">
      {WORKFLOW_PHASES.map((phase, index) => (
        <PhaseCard
          key={phase.id}
          phase={phase}
          project={project}
          isActive={project.currentPhase === phase.id}
          isCompleted={index < currentPhaseIndex}
          isLocked={index > currentPhaseIndex + 1}
          onTransition={() => handleTransition(phase.id as WorkflowPhase)}
          onSelect={() => onPhaseSelect(phase.id as WorkflowPhase)}
          isSelected={selectedPhase === phase.id}
        />
      ))}
    </div>
  );
};

// ============================================================================
// PHASE DETAIL PANEL
// ============================================================================

const PhaseDetailPanel: React.FC<{
  phase: WorkflowPhase;
  project: Project;
  onClose: () => void;
}> = ({ phase, project, onClose }) => {
  const phaseConfig = getPhaseConfig(phase);
  const phaseProgress = project.phaseProgress[phase];
  const Icon = PHASE_ICONS[phaseConfig.icon] || Circle;
  const colorClass = PHASE_COLORS[phaseConfig.color];

  const tabs = ['Overview', 'Deliverables', 'Approvals', 'Prompts'];
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${colorClass} p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-white/70">Phase {phaseConfig.number}</div>
              <h2 className="text-xl font-bold text-white">{phaseConfig.name}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-white border-b-2 border-blue-500'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 max-h-[400px] overflow-y-auto">
        {activeTab === 'Overview' && (
          <div className="space-y-4">
            <p className="text-gray-300">{phaseConfig.description}</p>

            {/* Status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Status</div>
                <div className="text-sm font-medium text-white capitalize">
                  {phaseProgress?.status?.replace('_', ' ') || 'Not Started'}
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Progress</div>
                <div className="text-sm font-medium text-white">
                  {phaseProgress?.progress || 0}%
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Target Duration</div>
                <div className="text-sm font-medium text-white">
                  {phaseConfig.targetDuration.min}-{phaseConfig.targetDuration.max}{' '}
                  {phaseConfig.targetDuration.unit}
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Can Skip</div>
                <div className="text-sm font-medium text-white">
                  {phaseConfig.canSkip ? 'Yes' : 'No'}
                </div>
              </div>
            </div>

            {/* Default Specialists */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">
                Recommended Specialists
              </h4>
              <div className="flex flex-wrap gap-2">
                {phaseConfig.defaultSpecialists.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs"
                  >
                    {s.replace('_', ' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Quality Gates */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">
                Quality Gates
              </h4>
              <div className="space-y-2">
                {phaseConfig.qualityGates.map((gate) => (
                  <div
                    key={gate.check}
                    className="flex items-center justify-between p-2 bg-gray-900/50 rounded-lg"
                  >
                    <span className="text-sm text-gray-300">
                      {gate.check.replace(/_/g, ' ')}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs ${
                          gate.blocksTransition ? 'text-red-400' : 'text-gray-500'
                        }`}
                      >
                        {gate.blocksTransition ? 'Blocking' : 'Advisory'}
                      </span>
                      <span className="text-xs text-gray-400">
                        ≥{gate.threshold * 100}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Deliverables' && (
          <div className="space-y-3">
            {phaseConfig.requiredDeliverables.map((d) => {
              const delivered = phaseProgress?.deliverables?.find(
                (del) => del.deliverableId === d.id
              );
              return (
                <div
                  key={d.id}
                  className="p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {delivered?.status === 'approved' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : delivered?.status === 'submitted' ? (
                        <Clock className="w-5 h-5 text-amber-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-600" />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">
                            {d.name}
                          </span>
                          {d.required && (
                            <span className="px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded text-xs">
                              Required
                            </span>
                          )}
                        </div>
                        {d.description && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            {d.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      {d.format}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'Approvals' && (
          <div className="space-y-3">
            {phaseConfig.requiredApprovals.map((a, idx) => {
              const approved = phaseProgress?.approvals?.find(
                (app) => app.role === a.role && app.type === a.type
              );
              return (
                <div
                  key={idx}
                  className="p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {approved?.status === 'approved' ? (
                        <Shield className="w-5 h-5 text-green-500" />
                      ) : (
                        <Shield className="w-5 h-5 text-gray-600" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-white">
                          {a.type.replace(/_/g, ' ')}
                        </div>
                        <div className="text-xs text-gray-400">
                          From: {a.role.replace('_', ' ')}
                        </div>
                      </div>
                    </div>
                    {a.blocksPhaseTransition && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">
                        Blocking
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'Prompts' && (
          <div className="space-y-3">
            {phaseConfig.promptTemplates.map((p) => (
              <div
                key={p.id}
                className="p-3 bg-gray-900/50 rounded-lg border border-gray-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{p.name}</span>
                  <button className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs hover:bg-blue-500/30 transition-colors">
                    Copy
                  </button>
                </div>
                {p.description && (
                  <p className="text-xs text-gray-400 mb-2">{p.description}</p>
                )}
                <pre className="text-xs text-gray-300 bg-gray-900 rounded p-2 overflow-x-auto max-h-32">
                  {p.prompt.slice(0, 200)}...
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ============================================================================
// WORKFLOW STATS BAR
// ============================================================================

const WorkflowStatsBar: React.FC<{ project: Project }> = ({ project }) => {
  const phases: WorkflowPhase[] = [
    'input',
    'discovery',
    'design',
    'plan',
    'build',
    'test',
    'review',
    'deploy',
  ];

  const currentPhaseIndex = phases.indexOf(project.currentPhase);
  const completedPhases = currentPhaseIndex;
  const totalDeliverables = Object.values(project.phaseProgress).reduce(
    (sum, p) => sum + p.deliverables.length,
    0
  );
  const totalApprovals = Object.values(project.phaseProgress).reduce(
    (sum, p) => sum + p.approvals.filter((a) => a.status === 'approved').length,
    0
  );

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">
              {completedPhases}/{phases.length}
            </div>
            <div className="text-xs text-gray-400">Phases Complete</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
            <Gauge className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">
              {project.overallProgress}%
            </div>
            <div className="text-xs text-gray-400">Overall Progress</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <FileText className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{totalDeliverables}</div>
            <div className="text-xs text-gray-400">Deliverables</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{totalApprovals}</div>
            <div className="text-xs text-gray-400">Approvals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN WORKFLOW TAB COMPONENT
// ============================================================================

export const WorkflowTab: React.FC = () => {
  const {
    getActiveProject,
    projects,
    setActiveProject,
    selectedPhase,
    setSelectedPhase,
  } = useProjectStore();

  const activeProject = getActiveProject();
  const activeProjects = projects.filter((p) => p.status === 'active');

  // If no active project, show selector
  if (!activeProject) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <GitBranch className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            No Project Selected
          </h2>
          <p className="text-gray-400 mb-6">
            Select an active project to view its workflow
          </p>

          {activeProjects.length > 0 ? (
            <div className="max-w-md mx-auto space-y-2">
              {activeProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p.id)}
                  className="w-full p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors text-left"
                >
                  <div className="font-medium text-white">{p.name}</div>
                  <div className="text-sm text-gray-400">
                    Phase: {p.currentPhase} • {p.overallProgress}% complete
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No active projects. Create one in the Projects tab.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Project Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{activeProject.name}</h1>
          <p className="text-gray-400">{activeProject.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
            v{activeProject.version.major}.{activeProject.version.minor}.
            {activeProject.version.patch}
          </span>
          <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
            <History className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <WorkflowStatsBar project={activeProject} />

      {/* Pipeline + Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={selectedPhase ? 'lg:col-span-2' : 'lg:col-span-3'}>
          <WorkflowPipeline
            project={activeProject}
            onPhaseSelect={setSelectedPhase}
            selectedPhase={selectedPhase}
          />
        </div>

        <AnimatePresence>
          {selectedPhase && (
            <PhaseDetailPanel
              phase={selectedPhase}
              project={activeProject}
              onClose={() => setSelectedPhase(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors">
          <FileText className="w-4 h-4" />
          View PRD
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors">
          <History className="w-4 h-4" />
          View History
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors">
          <Zap className="w-4 h-4" />
          Run Automated Checks
        </button>
      </div>
    </div>
  );
};

export default WorkflowTab;

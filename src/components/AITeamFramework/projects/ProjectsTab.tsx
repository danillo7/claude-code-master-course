/**
 * PROJECTS TAB - AI Team Framework v2.0
 *
 * Main component for the Projects management interface.
 * Features: Project list, filters, creation, and quick actions.
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  Filter,
  LayoutList,
  LayoutGrid,
  Calendar,
  FolderKanban,
  Rocket,
  Code2,
  Boxes,
  Workflow,
  GitBranch,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Pause,
  Archive,
  MoreVertical,
  History,
  FileText,
  Trash2,
  Copy,
} from 'lucide-react';
import { useProjectStore } from '../../../store/useProjectStore';
import type {
  Project,
  ProjectStatus,
  WorkflowPhase,
  Priority,
  ProjectType,
} from '../../../types/project';
import { versionToString } from '../../../types/project';

// ============================================================================
// CONSTANTS
// ============================================================================

const STATUS_CONFIG: Record<ProjectStatus, { icon: React.ElementType; color: string; label: string }> = {
  draft: { icon: FileText, color: 'text-slate-400', label: 'Draft' },
  active: { icon: TrendingUp, color: 'text-emerald-400', label: 'Active' },
  paused: { icon: Pause, color: 'text-amber-400', label: 'Paused' },
  completed: { icon: CheckCircle2, color: 'text-green-400', label: 'Completed' },
  archived: { icon: Archive, color: 'text-slate-500', label: 'Archived' },
  cancelled: { icon: AlertCircle, color: 'text-red-400', label: 'Cancelled' },
};

const PHASE_CONFIG: Record<WorkflowPhase, { color: string; label: string }> = {
  input: { color: 'bg-blue-500', label: 'Input' },
  discovery: { color: 'bg-purple-500', label: 'Discovery' },
  design: { color: 'bg-cyan-500', label: 'Design' },
  plan: { color: 'bg-green-500', label: 'Plan' },
  build: { color: 'bg-amber-500', label: 'Build' },
  test: { color: 'bg-red-500', label: 'Test' },
  review: { color: 'bg-indigo-500', label: 'Review' },
  deploy: { color: 'bg-emerald-500', label: 'Deploy' },
};

const PRIORITY_CONFIG: Record<Priority, { color: string; label: string }> = {
  critical: { color: 'text-red-400 bg-red-500/20', label: 'Critical' },
  high: { color: 'text-orange-400 bg-orange-500/20', label: 'High' },
  medium: { color: 'text-amber-400 bg-amber-500/20', label: 'Medium' },
  low: { color: 'text-slate-400 bg-slate-500/20', label: 'Low' },
};

const TYPE_ICONS: Record<ProjectType, React.ElementType> = {
  agent: Workflow,
  feature: Code2,
  product: Boxes,
  automation: GitBranch,
  integration: FolderKanban,
  refactor: GitBranch,
};

// ============================================================================
// COMPONENTS
// ============================================================================

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
  onAction: (action: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, onAction }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const StatusIcon = STATUS_CONFIG[project.status].icon;
  const TypeIcon = TYPE_ICONS[project.type];
  const phaseConfig = PHASE_CONFIG[project.currentPhase];
  const priorityConfig = PRIORITY_CONFIG[project.priority];

  const timeSinceUpdate = useMemo(() => {
    const now = new Date();
    const updated = new Date(project.updatedAt);
    const diff = now.getTime() - updated.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  }, [project.updatedAt]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.01 }}
      className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 cursor-pointer hover:border-slate-600 transition-all"
      onClick={onSelect}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-slate-700/50`}>
            <TypeIcon className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <h3 className="font-semibold text-white flex items-center gap-2">
              {project.name}
              <span className="text-xs text-slate-500 font-mono">
                v{versionToString(project.version)}
              </span>
            </h3>
            <p className="text-sm text-slate-400 line-clamp-1">{project.description}</p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
            className="p-1 rounded hover:bg-slate-700/50 text-slate-400 hover:text-white"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-0 top-8 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 z-10 min-w-[150px]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => { onAction('edit'); setMenuOpen(false); }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700"
                >
                  <FileText className="w-4 h-4" /> Open PRD
                </button>
                <button
                  onClick={() => { onAction('history'); setMenuOpen(false); }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700"
                >
                  <History className="w-4 h-4" /> View History
                </button>
                <button
                  onClick={() => { onAction('duplicate'); setMenuOpen(false); }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700"
                >
                  <Copy className="w-4 h-4" /> Duplicate
                </button>
                <hr className="my-1 border-slate-700" />
                <button
                  onClick={() => { onAction('archive'); setMenuOpen(false); }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-amber-400 hover:bg-slate-700"
                >
                  <Archive className="w-4 h-4" /> Archive
                </button>
                <button
                  onClick={() => { onAction('delete'); setMenuOpen(false); }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-400 hover:bg-slate-700"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Status & Phase */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`flex items-center gap-1 text-xs ${STATUS_CONFIG[project.status].color}`}>
          <StatusIcon className="w-3 h-3" />
          {STATUS_CONFIG[project.status].label}
        </span>
        <span className="text-slate-600">•</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${phaseConfig.color} text-white`}>
          {phaseConfig.label}
        </span>
        <span className="text-slate-600">•</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${priorityConfig.color}`}>
          {priorityConfig.label}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>Progress</span>
          <span>{project.overallProgress}%</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${project.overallProgress}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full ${phaseConfig.color} rounded-full`}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {project.assignedSpecialists.length}
          </span>
          <span className="flex items-center gap-1">
            <History className="w-3 h-3" />
            {project.history.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {timeSinceUpdate}
        </div>
      </div>
    </motion.div>
  );
};

// ============================================================================
// STATS CARDS
// ============================================================================

// Type for the stats object returned by getProjectStats
type ProjectStats = {
  total: number;
  byStatus: Record<ProjectStatus, number>;
  byPhase: Record<WorkflowPhase, number>;
  avgProgress: number;
};

interface StatsCardsProps {
  stats: ProjectStats;
}

const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-slate-400 mb-1">
          <FolderKanban className="w-4 h-4" />
          <span className="text-sm">Total Projects</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.total}</p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-emerald-400 mb-1">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">Active</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.byStatus.active}</p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-green-400 mb-1">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-sm">Completed</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.byStatus.completed}</p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
        <div className="flex items-center gap-2 text-cyan-400 mb-1">
          <Rocket className="w-4 h-4" />
          <span className="text-sm">Avg Progress</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.avgProgress}%</p>
      </div>
    </div>
  );
};

// ============================================================================
// CREATE PROJECT MODAL
// ============================================================================

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: {
    name: string;
    description: string;
    type: ProjectType;
    category: string;
    priority: Priority;
  }) => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<ProjectType>('feature');
  const [category, setCategory] = useState('personal');
  const [priority, setPriority] = useState<Priority>('medium');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ name, description, type, category, priority });
    setName('');
    setDescription('');
    setType('feature');
    setCategory('personal');
    setPriority('medium');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-emerald-400" />
          Create New Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Project Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
              placeholder="My Awesome Project"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500 h-20 resize-none"
              placeholder="Brief description of your project..."
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ProjectType)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="agent">Agent</option>
                <option value="feature">Feature</option>
                <option value="product">Product</option>
                <option value="automation">Automation</option>
                <option value="integration">Integration</option>
                <option value="refactor">Refactor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="personal">Personal</option>
                <option value="costa_law">Costa Law</option>
                <option value="cla_digital">CLA Digital</option>
                <option value="ai_spot">AI Spot</option>
                <option value="learning">Learning</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Project
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const ProjectsTab: React.FC = () => {
  const {
    getFilteredProjects,
    getProjectStats,
    createNewProject,
    deleteProject,
    archiveProject,
    duplicateProject,
    setActiveProject,
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
  } = useProjectStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const projects = getFilteredProjects();
  const stats = getProjectStats();

  const filteredProjects = useMemo(() => {
    if (!searchQuery) return projects;
    const query = searchQuery.toLowerCase();
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }, [projects, searchQuery]);

  const handleCreateProject = (data: {
    name: string;
    description: string;
    type: ProjectType;
    category: string;
    priority: Priority;
  }) => {
    createNewProject({
      ...data,
      category: data.category as any,
    });
  };

  const handleProjectAction = (projectId: string, action: string) => {
    switch (action) {
      case 'delete':
        if (confirm('Are you sure you want to delete this project?')) {
          deleteProject(projectId);
        }
        break;
      case 'archive':
        archiveProject(projectId);
        break;
      case 'duplicate':
        duplicateProject(projectId);
        break;
      case 'history':
        setActiveProject(projectId);
        // Open history panel
        break;
      case 'edit':
        setActiveProject(projectId);
        // Open PRD editor
        break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FolderKanban className="w-7 h-7 text-emerald-400" />
            Projects
          </h2>
          <p className="text-slate-400">Manage and track your development projects</p>
        </div>

        <button
          onClick={() => setCreateModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>

      {/* Stats */}
      <StatsCards stats={stats} />

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600"
          />
        </div>

        {/* Filters & View */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg border ${
              showFilters
                ? 'bg-slate-700 border-slate-600 text-white'
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:text-white'
            }`}
          >
            <Filter className="w-4 h-4" />
          </button>

          <div className="flex items-center border border-slate-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <LayoutList className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('board')}
              className={`p-2 ${viewMode === 'board' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`p-2 ${viewMode === 'timeline' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Calendar className="w-4 h-4" />
            </button>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 focus:outline-none"
          >
            <option value="updated">Last Updated</option>
            <option value="created">Created</option>
            <option value="name">Name</option>
            <option value="priority">Priority</option>
            <option value="progress">Progress</option>
          </select>
        </div>
      </div>

      {/* Project List */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FolderKanban className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-400 mb-2">No projects yet</h3>
            <p className="text-slate-500 mb-4">Create your first project to get started</p>
            <button
              onClick={() => setCreateModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create Project
            </button>
          </motion.div>
        ) : viewMode === 'list' ? (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setActiveProject(project.id)}
                onAction={(action) => handleProjectAction(project.id, action)}
              />
            ))}
          </div>
        ) : viewMode === 'board' ? (
          <div className="grid grid-cols-4 gap-4">
            {(['input', 'design', 'build', 'deploy'] as WorkflowPhase[]).map((phase) => {
              const phaseProjects = filteredProjects.filter(
                (p) => p.currentPhase === phase && p.status === 'active'
              );
              return (
                <div key={phase} className="bg-slate-800/30 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-3 h-3 rounded-full ${PHASE_CONFIG[phase].color}`} />
                    <span className="text-sm font-medium text-slate-300">
                      {PHASE_CONFIG[phase].label}
                    </span>
                    <span className="text-xs text-slate-500 ml-auto">{phaseProjects.length}</span>
                  </div>
                  <div className="space-y-2">
                    {phaseProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 cursor-pointer hover:border-slate-600"
                        onClick={() => setActiveProject(project.id)}
                      >
                        <h4 className="text-sm font-medium text-white mb-1 line-clamp-1">
                          {project.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs ${PRIORITY_CONFIG[project.priority].color} px-1.5 py-0.5 rounded`}>
                            {project.priority}
                          </span>
                          <span className="text-xs text-slate-500">{project.overallProgress}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Timeline view placeholder
          <div className="text-center py-12 text-slate-400">
            Timeline view coming soon...
          </div>
        )}
      </AnimatePresence>

      {/* Create Modal */}
      <AnimatePresence>
        {createModalOpen && (
          <CreateProjectModal
            isOpen={createModalOpen}
            onClose={() => setCreateModalOpen(false)}
            onCreate={handleCreateProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsTab;

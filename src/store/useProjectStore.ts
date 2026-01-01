/**
 * PROJECT STORE - AI Team Framework v2.0
 *
 * Zustand store for managing projects, workflows, and history.
 * Implements Git-like versioning with incremental history tracking.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type {
  Project,
  ProjectStatus,
  WorkflowPhase,
  Priority,
  ProjectType,
  ProjectCategory,
  SemanticVersion,
  ProjectHistoryEntry,
  ChangeDetail,
  SpecialistId,
  PhaseProgress,
  DeliverableStatus,
  ApprovalStatus,
  ChangelogEntry,
} from '../types/project';
import type { PRDocument } from '../types/prd';
import {
  createProject,
  createHistoryEntry,
  incrementVersion,
  versionToString,
} from '../types/project';
import { createEmptyPRD } from '../types/prd';

// ============================================================================
// TYPES
// ============================================================================

interface ProjectFilters {
  status?: ProjectStatus[];
  phase?: WorkflowPhase[];
  priority?: Priority[];
  type?: ProjectType[];
  category?: ProjectCategory[];
  search?: string;
}

interface ProjectState {
  // Data
  projects: Project[];
  prds: PRDocument[];
  activeProjectId: string | null;

  // Filters & View
  filters: ProjectFilters;
  sortBy: 'updated' | 'created' | 'name' | 'priority' | 'progress';
  sortOrder: 'asc' | 'desc';
  viewMode: 'list' | 'board' | 'timeline';

  // UI State
  selectedPhase: WorkflowPhase | null;
  historyPanelOpen: boolean;
  prdEditorOpen: boolean;

  // Actions - Projects
  createNewProject: (params: {
    name: string;
    description: string;
    type: ProjectType;
    category: ProjectCategory;
    priority?: Priority;
    templateId?: string;
  }) => Project;
  updateProject: (projectId: string, updates: Partial<Project>) => void;
  deleteProject: (projectId: string) => void;
  archiveProject: (projectId: string) => void;
  duplicateProject: (projectId: string) => Project;

  // Actions - Workflow
  transitionPhase: (projectId: string, newPhase: WorkflowPhase, reason?: string) => void;
  updatePhaseProgress: (projectId: string, phase: WorkflowPhase, progress: Partial<PhaseProgress>) => void;
  addDeliverable: (projectId: string, phase: WorkflowPhase, deliverable: DeliverableStatus) => void;
  updateDeliverable: (projectId: string, phase: WorkflowPhase, deliverableId: string, updates: Partial<DeliverableStatus>) => void;
  addApproval: (projectId: string, phase: WorkflowPhase, approval: ApprovalStatus) => void;

  // Actions - Team
  assignSpecialist: (projectId: string, specialistId: SpecialistId, role: 'lead' | 'contributor' | 'reviewer') => void;
  removeSpecialist: (projectId: string, specialistId: SpecialistId) => void;
  setLeadSpecialist: (projectId: string, specialistId: SpecialistId) => void;

  // Actions - History
  addHistoryEntry: (projectId: string, entry: Omit<ProjectHistoryEntry, 'id' | 'timestamp' | 'version'>) => void;
  restoreToVersion: (projectId: string, version: SemanticVersion) => void;
  getProjectHistory: (projectId: string, limit?: number) => ProjectHistoryEntry[];

  // Actions - PRD
  createPRD: (projectId: string) => PRDocument;
  updatePRD: (prdId: string, updates: Partial<PRDocument>) => void;
  getPRDByProject: (projectId: string) => PRDocument | undefined;

  // Actions - Version
  bumpVersion: (projectId: string, type: 'major' | 'minor' | 'patch', message: string) => void;
  addChangelog: (projectId: string, entry: Omit<ChangelogEntry, 'version' | 'date'>) => void;

  // Actions - View
  setActiveProject: (projectId: string | null) => void;
  setFilters: (filters: ProjectFilters) => void;
  clearFilters: () => void;
  setSortBy: (sortBy: ProjectState['sortBy']) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setViewMode: (mode: ProjectState['viewMode']) => void;
  setSelectedPhase: (phase: WorkflowPhase | null) => void;
  toggleHistoryPanel: () => void;
  togglePRDEditor: () => void;

  // Computed
  getFilteredProjects: () => Project[];
  getProjectById: (id: string) => Project | undefined;
  getProjectsByPhase: (phase: WorkflowPhase) => Project[];
  getProjectsByStatus: (status: ProjectStatus) => Project[];
  getActiveProject: () => Project | undefined;
  getProjectStats: () => {
    total: number;
    byStatus: Record<ProjectStatus, number>;
    byPhase: Record<WorkflowPhase, number>;
    avgProgress: number;
  };
}

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialFilters: ProjectFilters = {};

// ============================================================================
// STORE
// ============================================================================

export const useProjectStore = create<ProjectState>()(
  persist(
    (set, get) => ({
      // Initial Data
      projects: [],
      prds: [],
      activeProjectId: null,

      // Initial Filters & View
      filters: initialFilters,
      sortBy: 'updated',
      sortOrder: 'desc',
      viewMode: 'list',

      // Initial UI State
      selectedPhase: null,
      historyPanelOpen: false,
      prdEditorOpen: false,

      // ────────────────────────────────────────────────────────────────────
      // PROJECT ACTIONS
      // ────────────────────────────────────────────────────────────────────

      createNewProject: (params) => {
        const project = createProject(params);

        // Add initial history entry
        const historyEntry = createHistoryEntry(
          project,
          'manual_edit',
          `Project created: ${params.name}`,
          [{ field: 'name', operation: 'add', newValue: params.name }],
          { type: 'user', id: 'current_user', name: 'User' }
        );
        project.history.push(historyEntry);

        set(state => ({
          projects: [...state.projects, project],
          activeProjectId: project.id,
        }));

        return project;
      },

      updateProject: (projectId, updates) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const changeDetails: ChangeDetail[] = Object.entries(updates).map(([field, newValue]) => ({
              field,
              operation: 'modify' as const,
              oldValue: (p as unknown as Record<string, unknown>)[field],
              newValue,
            }));

            const historyEntry = createHistoryEntry(
              p,
              'manual_edit',
              `Updated: ${Object.keys(updates).join(', ')}`,
              changeDetails,
              { type: 'user', id: 'current_user', name: 'User' }
            );

            return {
              ...p,
              ...updates,
              updatedAt: new Date(),
              history: [...p.history, historyEntry],
            };
          }),
        }));
      },

      deleteProject: (projectId) => {
        set(state => ({
          projects: state.projects.filter(p => p.id !== projectId),
          prds: state.prds.filter(prd => prd.metadata.projectId !== projectId),
          activeProjectId: state.activeProjectId === projectId ? null : state.activeProjectId,
        }));
      },

      archiveProject: (projectId) => {
        get().updateProject(projectId, { status: 'archived' });
      },

      duplicateProject: (projectId) => {
        const original = get().getProjectById(projectId);
        if (!original) throw new Error('Project not found');

        const duplicate = createProject({
          name: `${original.name} (Copy)`,
          description: original.description,
          type: original.type,
          category: original.category,
          priority: original.priority,
        });

        // Copy some properties
        duplicate.tags = [...original.tags];
        duplicate.complexity = original.complexity;

        set(state => ({
          projects: [...state.projects, duplicate],
        }));

        return duplicate;
      },

      // ────────────────────────────────────────────────────────────────────
      // WORKFLOW ACTIONS
      // ────────────────────────────────────────────────────────────────────

      transitionPhase: (projectId, newPhase, reason) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const oldPhase = p.currentPhase;

            // Mark old phase as completed
            const updatedPhaseProgress = { ...p.phaseProgress };
            updatedPhaseProgress[oldPhase] = {
              ...updatedPhaseProgress[oldPhase],
              status: 'completed',
              completedAt: new Date(),
              progress: 100,
            };

            // Start new phase
            updatedPhaseProgress[newPhase] = {
              ...updatedPhaseProgress[newPhase],
              status: 'in_progress',
              startedAt: new Date(),
              progress: 0,
            };

            // Calculate new version
            const newVersion = incrementVersion(p.version, 'minor');

            // Create history entry
            const historyEntry = createHistoryEntry(
              { ...p, version: newVersion },
              'phase_transition',
              reason || `Phase transition: ${oldPhase} → ${newPhase}`,
              [
                { field: 'currentPhase', operation: 'modify', oldValue: oldPhase, newValue: newPhase },
              ],
              { type: 'system', id: 'workflow', name: 'Workflow Engine' }
            );

            // Calculate overall progress
            const phases: WorkflowPhase[] = ['input', 'discovery', 'design', 'plan', 'build', 'test', 'review', 'deploy'];
            const phaseIndex = phases.indexOf(newPhase);
            const overallProgress = Math.round((phaseIndex / phases.length) * 100);

            return {
              ...p,
              currentPhase: newPhase,
              phaseProgress: updatedPhaseProgress,
              phaseGate: 'blocked',
              phaseStartedAt: new Date(),
              version: newVersion,
              overallProgress,
              updatedAt: new Date(),
              history: [...p.history, historyEntry],
            };
          }),
        }));
      },

      updatePhaseProgress: (projectId, phase, progress) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            return {
              ...p,
              phaseProgress: {
                ...p.phaseProgress,
                [phase]: {
                  ...p.phaseProgress[phase],
                  ...progress,
                },
              },
              updatedAt: new Date(),
            };
          }),
        }));
      },

      addDeliverable: (projectId, phase, deliverable) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const historyEntry = createHistoryEntry(
              p,
              'deliverable_added',
              `Deliverable added: ${deliverable.name}`,
              [{ field: `phaseProgress.${phase}.deliverables`, operation: 'add', newValue: deliverable }],
              { type: 'user', id: 'current_user', name: 'User' }
            );

            return {
              ...p,
              phaseProgress: {
                ...p.phaseProgress,
                [phase]: {
                  ...p.phaseProgress[phase],
                  deliverables: [...p.phaseProgress[phase].deliverables, deliverable],
                },
              },
              updatedAt: new Date(),
              history: [...p.history, historyEntry],
            };
          }),
        }));
      },

      updateDeliverable: (projectId, phase, deliverableId, updates) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            return {
              ...p,
              phaseProgress: {
                ...p.phaseProgress,
                [phase]: {
                  ...p.phaseProgress[phase],
                  deliverables: p.phaseProgress[phase].deliverables.map(d =>
                    d.deliverableId === deliverableId ? { ...d, ...updates } : d
                  ),
                },
              },
              updatedAt: new Date(),
            };
          }),
        }));
      },

      addApproval: (projectId, phase, approval) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const historyEntry = createHistoryEntry(
              p,
              'approval_received',
              `Approval received: ${approval.type} from ${approval.role}`,
              [{ field: `phaseProgress.${phase}.approvals`, operation: 'add', newValue: approval }],
              { type: 'specialist', id: approval.role, name: approval.role }
            );

            return {
              ...p,
              phaseProgress: {
                ...p.phaseProgress,
                [phase]: {
                  ...p.phaseProgress[phase],
                  approvals: [...p.phaseProgress[phase].approvals, approval],
                },
              },
              updatedAt: new Date(),
              history: [...p.history, historyEntry],
            };
          }),
        }));
      },

      // ────────────────────────────────────────────────────────────────────
      // TEAM ACTIONS
      // ────────────────────────────────────────────────────────────────────

      assignSpecialist: (projectId, specialistId, role) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            // Check if already assigned
            const existing = p.assignedSpecialists.find(s => s.specialistId === specialistId);
            if (existing) return p;

            const historyEntry = createHistoryEntry(
              p,
              'team_change',
              `Specialist assigned: ${specialistId} as ${role}`,
              [{ field: 'assignedSpecialists', operation: 'add', newValue: { specialistId, role } }],
              { type: 'user', id: 'current_user', name: 'User' }
            );

            return {
              ...p,
              assignedSpecialists: [
                ...p.assignedSpecialists,
                {
                  specialistId,
                  role,
                  assignedAt: new Date(),
                  phases: [],
                },
              ],
              updatedAt: new Date(),
              history: [...p.history, historyEntry],
            };
          }),
        }));
      },

      removeSpecialist: (projectId, specialistId) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const historyEntry = createHistoryEntry(
              p,
              'team_change',
              `Specialist removed: ${specialistId}`,
              [{ field: 'assignedSpecialists', operation: 'remove', oldValue: specialistId }],
              { type: 'user', id: 'current_user', name: 'User' }
            );

            return {
              ...p,
              assignedSpecialists: p.assignedSpecialists.filter(s => s.specialistId !== specialistId),
              updatedAt: new Date(),
              history: [...p.history, historyEntry],
            };
          }),
        }));
      },

      setLeadSpecialist: (projectId, specialistId) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            return {
              ...p,
              leadSpecialist: specialistId,
              assignedSpecialists: p.assignedSpecialists.map(s => ({
                ...s,
                role: s.specialistId === specialistId ? 'lead' : s.role === 'lead' ? 'contributor' : s.role,
              })),
              updatedAt: new Date(),
            };
          }),
        }));
      },

      // ────────────────────────────────────────────────────────────────────
      // HISTORY ACTIONS
      // ────────────────────────────────────────────────────────────────────

      addHistoryEntry: (projectId, entry) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const fullEntry: ProjectHistoryEntry = {
              ...entry,
              id: crypto.randomUUID(),
              timestamp: new Date(),
              version: p.version,
            };

            return {
              ...p,
              history: [...p.history, fullEntry],
              updatedAt: new Date(),
            };
          }),
        }));
      },

      restoreToVersion: (projectId, version) => {
        const project = get().getProjectById(projectId);
        if (!project) return;

        // Find the history entry for this version
        const targetEntry = project.history.find(
          h => versionToString(h.version) === versionToString(version)
        );
        if (!targetEntry) return;

        // For now, just log the restore - in a real implementation,
        // we'd reconstruct the project state from the diff chain
        const historyEntry = createHistoryEntry(
          project,
          'rollback',
          `Restored to version ${versionToString(version)}`,
          [],
          { type: 'user', id: 'current_user', name: 'User' }
        );

        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;
            return {
              ...p,
              history: [...p.history, historyEntry],
              updatedAt: new Date(),
            };
          }),
        }));
      },

      getProjectHistory: (projectId, limit = 50) => {
        const project = get().getProjectById(projectId);
        if (!project) return [];
        return project.history.slice(-limit).reverse();
      },

      // ────────────────────────────────────────────────────────────────────
      // PRD ACTIONS
      // ────────────────────────────────────────────────────────────────────

      createPRD: (projectId) => {
        const project = get().getProjectById(projectId);
        if (!project) throw new Error('Project not found');

        const prd = createEmptyPRD({
          projectId,
          title: project.name,
          author: 'User',
        });

        set(state => ({
          prds: [...state.prds, prd],
          projects: state.projects.map(p =>
            p.id === projectId ? { ...p, prdId: prd.metadata.id } : p
          ),
        }));

        return prd;
      },

      updatePRD: (prdId, updates) => {
        set(state => ({
          prds: state.prds.map(prd => {
            if (prd.metadata.id !== prdId) return prd;
            return {
              ...prd,
              ...updates,
              metadata: {
                ...prd.metadata,
                lastUpdatedAt: new Date(),
              },
            };
          }),
        }));
      },

      getPRDByProject: (projectId) => {
        return get().prds.find(prd => prd.metadata.projectId === projectId);
      },

      // ────────────────────────────────────────────────────────────────────
      // VERSION ACTIONS
      // ────────────────────────────────────────────────────────────────────

      bumpVersion: (projectId, type, message) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const newVersion = incrementVersion(p.version, type);

            const historyEntry = createHistoryEntry(
              { ...p, version: newVersion },
              'manual_edit',
              `Version bump: ${versionToString(p.version)} → ${versionToString(newVersion)} - ${message}`,
              [{ field: 'version', operation: 'modify', oldValue: p.version, newValue: newVersion }],
              { type: 'user', id: 'current_user', name: 'User' }
            );

            return {
              ...p,
              version: newVersion,
              updatedAt: new Date(),
              history: [...p.history, historyEntry],
            };
          }),
        }));
      },

      addChangelog: (projectId, entry) => {
        set(state => ({
          projects: state.projects.map(p => {
            if (p.id !== projectId) return p;

            const fullEntry: ChangelogEntry = {
              ...entry,
              version: p.version,
              date: new Date(),
            };

            return {
              ...p,
              changelog: [...p.changelog, fullEntry],
              updatedAt: new Date(),
            };
          }),
        }));
      },

      // ────────────────────────────────────────────────────────────────────
      // VIEW ACTIONS
      // ────────────────────────────────────────────────────────────────────

      setActiveProject: (projectId) => {
        set({ activeProjectId: projectId });
      },

      setFilters: (filters) => {
        set({ filters });
      },

      clearFilters: () => {
        set({ filters: initialFilters });
      },

      setSortBy: (sortBy) => {
        set({ sortBy });
      },

      setSortOrder: (order) => {
        set({ sortOrder: order });
      },

      setViewMode: (mode) => {
        set({ viewMode: mode });
      },

      setSelectedPhase: (phase) => {
        set({ selectedPhase: phase });
      },

      toggleHistoryPanel: () => {
        set(state => ({ historyPanelOpen: !state.historyPanelOpen }));
      },

      togglePRDEditor: () => {
        set(state => ({ prdEditorOpen: !state.prdEditorOpen }));
      },

      // ────────────────────────────────────────────────────────────────────
      // COMPUTED
      // ────────────────────────────────────────────────────────────────────

      getFilteredProjects: () => {
        const { projects, filters, sortBy, sortOrder } = get();

        let filtered = [...projects];

        // Apply filters
        if (filters.status?.length) {
          filtered = filtered.filter(p => filters.status!.includes(p.status));
        }
        if (filters.phase?.length) {
          filtered = filtered.filter(p => filters.phase!.includes(p.currentPhase));
        }
        if (filters.priority?.length) {
          filtered = filtered.filter(p => filters.priority!.includes(p.priority));
        }
        if (filters.type?.length) {
          filtered = filtered.filter(p => filters.type!.includes(p.type));
        }
        if (filters.category?.length) {
          filtered = filtered.filter(p => filters.category!.includes(p.category));
        }
        if (filters.search) {
          const search = filters.search.toLowerCase();
          filtered = filtered.filter(
            p =>
              p.name.toLowerCase().includes(search) ||
              p.description.toLowerCase().includes(search) ||
              p.tags.some(t => t.toLowerCase().includes(search))
          );
        }

        // Apply sorting
        filtered.sort((a, b) => {
          let comparison = 0;
          switch (sortBy) {
            case 'updated':
              comparison = new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
              break;
            case 'created':
              comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
              break;
            case 'name':
              comparison = a.name.localeCompare(b.name);
              break;
            case 'priority': {
              const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
              comparison = priorityOrder[a.priority] - priorityOrder[b.priority];
              break;
            }
            case 'progress':
              comparison = b.overallProgress - a.overallProgress;
              break;
          }
          return sortOrder === 'desc' ? comparison : -comparison;
        });

        return filtered;
      },

      getProjectById: (id) => {
        return get().projects.find(p => p.id === id);
      },

      getProjectsByPhase: (phase) => {
        return get().projects.filter(p => p.currentPhase === phase && p.status === 'active');
      },

      getProjectsByStatus: (status) => {
        return get().projects.filter(p => p.status === status);
      },

      getActiveProject: () => {
        const { projects, activeProjectId } = get();
        return projects.find(p => p.id === activeProjectId);
      },

      getProjectStats: () => {
        const projects = get().projects;
        const total = projects.length;

        const byStatus = {
          draft: 0,
          active: 0,
          paused: 0,
          completed: 0,
          archived: 0,
          cancelled: 0,
        };

        const byPhase = {
          input: 0,
          discovery: 0,
          design: 0,
          plan: 0,
          build: 0,
          test: 0,
          review: 0,
          deploy: 0,
        };

        let totalProgress = 0;

        projects.forEach(p => {
          byStatus[p.status]++;
          if (p.status === 'active') {
            byPhase[p.currentPhase]++;
          }
          totalProgress += p.overallProgress;
        });

        return {
          total,
          byStatus,
          byPhase,
          avgProgress: total > 0 ? Math.round(totalProgress / total) : 0,
        };
      },
    }),
    {
      name: 'project-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        projects: state.projects,
        prds: state.prds,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
        viewMode: state.viewMode,
      }),
    }
  )
);

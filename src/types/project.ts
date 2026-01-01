/**
 * PROJECT TYPES - AI Team Framework v2.0
 *
 * Type definitions for the Project Manager system.
 * Based on world-class practices from Linear, Notion, and enterprise PM tools.
 */

// LucideIcon type imported but not currently used - may be needed for future extensions
// import type { LucideIcon } from 'lucide-react';

// ============================================================================
// ENUMS & BASIC TYPES
// ============================================================================

export type ProjectType =
  | 'agent'         // AI Agent construction
  | 'feature'       // New feature development
  | 'product'       // Full product build
  | 'automation'    // Workflow automation
  | 'integration'   // System integration
  | 'refactor';     // Code refactoring

export type ProjectCategory =
  | 'costa_law'     // Costa Law projects
  | 'cla_digital'   // CLA Digital projects
  | 'ai_spot'       // AI Spot projects
  | 'personal'      // Personal projects
  | 'learning';     // Learning/experimental

export type Priority = 'critical' | 'high' | 'medium' | 'low';

export type Complexity = 'trivial' | 'simple' | 'moderate' | 'complex' | 'epic';

export type ProjectStatus =
  | 'draft'         // Initial creation, not started
  | 'active'        // Currently being worked on
  | 'paused'        // Temporarily stopped
  | 'completed'     // Successfully finished
  | 'archived'      // Stored for reference
  | 'cancelled';    // Abandoned

export type PhaseGateStatus = 'blocked' | 'in_review' | 'approved';

// ============================================================================
// SEMANTIC VERSIONING
// ============================================================================

export interface SemanticVersion {
  major: number;        // Breaking changes
  minor: number;        // New features (backwards compatible)
  patch: number;        // Bug fixes
  prerelease?: string;  // e.g., 'alpha.1', 'beta.2', 'rc.1'
}

export function versionToString(v: SemanticVersion): string {
  const base = `${v.major}.${v.minor}.${v.patch}`;
  return v.prerelease ? `${base}-${v.prerelease}` : base;
}

export function parseVersion(str: string): SemanticVersion {
  const [base, prerelease] = str.split('-');
  const [major, minor, patch] = base.split('.').map(Number);
  return { major, minor, patch, prerelease };
}

export function incrementVersion(
  v: SemanticVersion,
  type: 'major' | 'minor' | 'patch'
): SemanticVersion {
  switch (type) {
    case 'major':
      return { major: v.major + 1, minor: 0, patch: 0 };
    case 'minor':
      return { major: v.major, minor: v.minor + 1, patch: 0 };
    case 'patch':
      return { major: v.major, minor: v.minor, patch: v.patch + 1 };
  }
}

// ============================================================================
// WORKFLOW PHASES
// ============================================================================

export type WorkflowPhase =
  | 'input'       // Phase 1: Problem definition
  | 'discovery'   // Phase 2: Research & context
  | 'design'      // Phase 3: Architecture & solution
  | 'plan'        // Phase 4: Roadmap & tasks
  | 'build'       // Phase 5: Implementation
  | 'test'        // Phase 6: Validation & QA
  | 'review'      // Phase 7: Approval & sign-off
  | 'deploy';     // Phase 8: Release & monitoring

export interface PhaseProgress {
  phase: WorkflowPhase;
  status: 'not_started' | 'in_progress' | 'completed' | 'skipped';
  progress: number;           // 0-100
  startedAt?: Date;
  completedAt?: Date;
  deliverables: DeliverableStatus[];
  approvals: ApprovalStatus[];
  blockers: Blocker[];
}

export interface DeliverableStatus {
  deliverableId: string;
  name: string;
  required: boolean;
  status: 'pending' | 'in_progress' | 'submitted' | 'approved' | 'rejected';
  submittedAt?: Date;
  approvedAt?: Date;
  rejectionReason?: string;
  attachments: Attachment[];
}

export interface ApprovalStatus {
  approvalId: string;
  role: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  approvedAt?: Date;
  comments?: string;
}

export interface Blocker {
  id: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  createdAt: Date;
  resolvedAt?: Date;
  assignedTo?: string;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
  uploadedAt: Date;
  uploadedBy: string;
}

// ============================================================================
// SPECIALISTS
// ============================================================================

export type SpecialistId =
  | 'system_architect'
  | 'senior_developer'
  | 'security_expert'
  | 'qa_engineer'
  | 'devops_engineer'
  | 'data_engineer'
  | 'frontend_expert'
  | 'api_designer'
  | 'performance_engineer'
  | 'technical_writer'
  | 'code_reviewer'
  | 'product_engineer';

export interface SpecialistAssignment {
  specialistId: SpecialistId;
  role: 'lead' | 'contributor' | 'reviewer';
  assignedAt: Date;
  phases: WorkflowPhase[];
}

// ============================================================================
// EXTERNAL LINKS & DEPENDENCIES
// ============================================================================

export interface ExternalLink {
  id: string;
  title: string;
  url: string;
  type: 'github' | 'figma' | 'notion' | 'slack' | 'jira' | 'other';
  description?: string;
}

export interface ProjectDependency {
  projectId: string;
  projectName: string;
  type: 'blocks' | 'blocked_by' | 'related';
  status: 'active' | 'resolved';
  description?: string;
}

// ============================================================================
// HISTORY & CHANGELOG
// ============================================================================

export type ChangeType =
  | 'phase_transition'      // Moved to new phase
  | 'deliverable_added'     // New deliverable uploaded
  | 'deliverable_updated'   // Deliverable modified
  | 'approval_received'     // Gate approval
  | 'team_change'           // Specialist added/removed
  | 'scope_change'          // Requirements changed
  | 'risk_identified'       // New risk added
  | 'issue_resolved'        // Bug/issue fixed
  | 'rollback'              // Reverted to previous state
  | 'manual_edit';          // Direct edit by user

export interface ChangeDetail {
  field: string;                    // e.g., 'prd.userStories[0].criteria'
  operation: 'add' | 'modify' | 'remove';
  oldValue?: unknown;
  newValue?: unknown;
  reason?: string;
}

export interface ProjectHistoryEntry {
  id: string;
  version: SemanticVersion;
  timestamp: Date;

  // Change Information
  phase: WorkflowPhase;
  changeType: ChangeType;
  changeSummary: string;
  changeDetails: ChangeDetail[];

  // Authorship
  author: {
    type: 'specialist' | 'user' | 'system';
    id: string;
    name: string;
  };

  // Diff Information
  diff: {
    before: Record<string, unknown>;
    after: Record<string, unknown>;
    affectedFields: string[];
  };

  // Artifacts
  artifacts: Attachment[];

  // Audit Trail
  reason: string;
  relatedIssues?: string[];
  approvals?: ApprovalStatus[];
}

export interface ChangelogEntry {
  version: SemanticVersion;
  date: Date;
  type: 'major' | 'minor' | 'patch';
  title: string;
  changes: string[];
  breaking?: string[];
  deprecated?: string[];
}

// ============================================================================
// MAIN PROJECT INTERFACE
// ============================================================================

export interface Project {
  // Identity
  id: string;
  slug: string;
  name: string;
  description: string;
  codename?: string;

  // Classification
  type: ProjectType;
  category: ProjectCategory;
  priority: Priority;
  complexity: Complexity;

  // State
  status: ProjectStatus;
  currentPhase: WorkflowPhase;
  phaseGate: PhaseGateStatus;

  // Progress
  overallProgress: number;          // 0-100
  phaseProgress: Record<WorkflowPhase, PhaseProgress>;

  // Team
  assignedSpecialists: SpecialistAssignment[];
  leadSpecialist: SpecialistId;

  // Documents
  prdId?: string;                   // Reference to PRD document
  technicalSpecId?: string;         // Reference to Tech Spec

  // History (Git-like)
  version: SemanticVersion;
  changelog: ChangelogEntry[];
  history: ProjectHistoryEntry[];

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  phaseStartedAt: Date;
  estimatedCompletionAt?: Date;
  completedAt?: Date;

  // Metadata
  tags: string[];
  links: ExternalLink[];
  dependencies: ProjectDependency[];

  // Computed (not stored)
  isOverdue?: boolean;
  daysInCurrentPhase?: number;
  healthScore?: number;
}

// ============================================================================
// PROJECT TEMPLATES
// ============================================================================

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  complexity: Complexity;
  defaultTeam: SpecialistId[];
  defaultPhases: WorkflowPhase[];
  estimatedDuration: {
    min: number;
    max: number;
    unit: 'hours' | 'days' | 'weeks';
  };
  prdTemplateId?: string;
}

export const PROJECT_TEMPLATES: ProjectTemplate[] = [
  {
    id: 'agent_simple',
    name: 'Simple Agent',
    description: 'Single-purpose AI agent with basic tools',
    type: 'agent',
    complexity: 'simple',
    defaultTeam: ['senior_developer', 'qa_engineer'],
    defaultPhases: ['input', 'design', 'build', 'test', 'deploy'],
    estimatedDuration: { min: 4, max: 16, unit: 'hours' }
  },
  {
    id: 'agent_complex',
    name: 'Complex Agent',
    description: 'Multi-capability agent with orchestration',
    type: 'agent',
    complexity: 'complex',
    defaultTeam: ['system_architect', 'senior_developer', 'qa_engineer', 'security_expert'],
    defaultPhases: ['input', 'discovery', 'design', 'plan', 'build', 'test', 'review', 'deploy'],
    estimatedDuration: { min: 2, max: 4, unit: 'weeks' }
  },
  {
    id: 'feature_standard',
    name: 'Standard Feature',
    description: 'Typical feature with frontend and backend',
    type: 'feature',
    complexity: 'moderate',
    defaultTeam: ['senior_developer', 'frontend_expert', 'qa_engineer', 'code_reviewer'],
    defaultPhases: ['input', 'design', 'plan', 'build', 'test', 'review', 'deploy'],
    estimatedDuration: { min: 1, max: 2, unit: 'weeks' }
  },
  {
    id: 'product_mvp',
    name: 'MVP Product',
    description: 'Minimum viable product launch',
    type: 'product',
    complexity: 'epic',
    defaultTeam: [
      'product_engineer', 'system_architect', 'senior_developer',
      'frontend_expert', 'qa_engineer', 'devops_engineer', 'security_expert'
    ],
    defaultPhases: ['input', 'discovery', 'design', 'plan', 'build', 'test', 'review', 'deploy'],
    estimatedDuration: { min: 4, max: 12, unit: 'weeks' }
  },
  {
    id: 'automation_workflow',
    name: 'Workflow Automation',
    description: 'Automate repetitive processes',
    type: 'automation',
    complexity: 'simple',
    defaultTeam: ['senior_developer', 'devops_engineer'],
    defaultPhases: ['input', 'design', 'build', 'test', 'deploy'],
    estimatedDuration: { min: 8, max: 24, unit: 'hours' }
  },
  {
    id: 'integration_api',
    name: 'API Integration',
    description: 'Connect external services',
    type: 'integration',
    complexity: 'moderate',
    defaultTeam: ['api_designer', 'senior_developer', 'security_expert', 'qa_engineer'],
    defaultPhases: ['input', 'discovery', 'design', 'build', 'test', 'review', 'deploy'],
    estimatedDuration: { min: 3, max: 7, unit: 'days' }
  }
];

// ============================================================================
// FACTORY FUNCTIONS
// ============================================================================

export function createProject(params: {
  name: string;
  description: string;
  type: ProjectType;
  category: ProjectCategory;
  priority?: Priority;
  complexity?: Complexity;
  templateId?: string;
}): Project {
  const template = params.templateId
    ? PROJECT_TEMPLATES.find(t => t.id === params.templateId)
    : undefined;

  const slug = params.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const initialPhaseProgress: Record<WorkflowPhase, PhaseProgress> = {
    input: createPhaseProgress('input'),
    discovery: createPhaseProgress('discovery'),
    design: createPhaseProgress('design'),
    plan: createPhaseProgress('plan'),
    build: createPhaseProgress('build'),
    test: createPhaseProgress('test'),
    review: createPhaseProgress('review'),
    deploy: createPhaseProgress('deploy'),
  };

  return {
    id: crypto.randomUUID(),
    slug,
    name: params.name,
    description: params.description,
    type: params.type,
    category: params.category,
    priority: params.priority ?? 'medium',
    complexity: params.complexity ?? template?.complexity ?? 'moderate',
    status: 'draft',
    currentPhase: 'input',
    phaseGate: 'blocked',
    overallProgress: 0,
    phaseProgress: initialPhaseProgress,
    assignedSpecialists: (template?.defaultTeam ?? ['product_engineer']).map(id => ({
      specialistId: id as SpecialistId,
      role: id === 'product_engineer' ? 'lead' : 'contributor',
      assignedAt: new Date(),
      phases: template?.defaultPhases ?? ['input', 'design', 'build', 'test', 'deploy'],
    })),
    leadSpecialist: 'product_engineer',
    version: { major: 0, minor: 1, patch: 0 },
    changelog: [],
    history: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    phaseStartedAt: new Date(),
    tags: [],
    links: [],
    dependencies: [],
  };
}

export function createPhaseProgress(phase: WorkflowPhase): PhaseProgress {
  return {
    phase,
    status: phase === 'input' ? 'in_progress' : 'not_started',
    progress: 0,
    deliverables: [],
    approvals: [],
    blockers: [],
  };
}

export function createHistoryEntry(
  project: Project,
  changeType: ChangeType,
  changeSummary: string,
  changeDetails: ChangeDetail[],
  author: ProjectHistoryEntry['author']
): ProjectHistoryEntry {
  return {
    id: crypto.randomUUID(),
    version: project.version,
    timestamp: new Date(),
    phase: project.currentPhase,
    changeType,
    changeSummary,
    changeDetails,
    author,
    diff: {
      before: {},
      after: {},
      affectedFields: changeDetails.map(d => d.field),
    },
    artifacts: [],
    reason: changeSummary,
  };
}

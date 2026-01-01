/**
 * WORKFLOW TYPES - AI Team Framework v2.0
 *
 * Type definitions for the 8-Phase Workflow Pipeline.
 * Based on Shape Up (Basecamp), Linear, and enterprise workflow systems.
 */

// LucideIcon type imported but not currently used - may be needed for future extensions
// import type { LucideIcon } from 'lucide-react';
import type { SpecialistId, WorkflowPhase } from './project';

// ============================================================================
// DELIVERABLES
// ============================================================================

export type DeliverableFormat =
  | 'markdown'
  | 'typescript'
  | 'json'
  | 'yaml'
  | 'diagram'
  | 'openapi'
  | 'tree'
  | 'adr'
  | 'tests'
  | 'changelog'
  | 'checklist'
  | 'user_story'
  | 'table'
  | 'risk_matrix'
  | 'estimate'
  | 'tasks'
  | 'timeline'
  | 'graph'
  | 'milestones'
  | 'allocation'
  | 'code'
  | 'report'
  | 'issues'
  | 'metrics'
  | 'video'
  | 'approval'
  | 'config';

export interface Deliverable {
  id: string;
  name: string;
  description?: string;
  format: DeliverableFormat;
  required: boolean;
  template?: string;
  validationRules?: ValidationRule[];
}

export interface ValidationRule {
  type: 'min_length' | 'max_length' | 'regex' | 'required_fields' | 'custom';
  value: string | number;
  message: string;
}

// ============================================================================
// APPROVALS
// ============================================================================

export type ApprovalType =
  | 'sign_off'
  | 'technical_review'
  | 'business_review'
  | 'security_review'
  | 'architecture_review'
  | 'feasibility_review'
  | 'effort_validation'
  | 'infra_validation'
  | 'code_review'
  | 'test_review'
  | 'qa_sign_off'
  | 'performance_sign_off'
  | 'technical_approval'
  | 'security_approval'
  | 'product_approval'
  | 'deployment_approval'
  | 'production_security_approval';

export interface Approval {
  role: SpecialistId;
  type: ApprovalType;
  description?: string;
  blocksPhaseTransition: boolean;
}

// ============================================================================
// QUALITY GATES
// ============================================================================

export type QualityCheckType =
  | 'problem_clarity_score'
  | 'user_story_coverage'
  | 'research_depth'
  | 'risk_coverage'
  | 'architecture_completeness'
  | 'security_coverage'
  | 'scalability_score'
  | 'task_granularity'
  | 'estimate_confidence'
  | 'dependency_clarity'
  | 'test_coverage'
  | 'code_quality_score'
  | 'security_scan'
  | 'linter_pass'
  | 'all_tests_pass'
  | 'p0_bugs_resolved'
  | 'p1_bugs_resolved'
  | 'performance_baseline'
  | 'all_approvals_received'
  | 'documentation_complete'
  | 'no_blocking_issues'
  | 'deployment_success'
  | 'smoke_tests_pass'
  | 'monitoring_active'
  | 'alerts_configured';

export interface QualityGate {
  check: QualityCheckType;
  threshold: number;           // 0.0 to 1.0
  description?: string;
  automated: boolean;
  blocksTransition: boolean;
}

// ============================================================================
// AUTOMATED CHECKS
// ============================================================================

export interface AutomatedCheck {
  id: string;
  name: string;
  prompt: string;
  description?: string;
  requiredTools?: string[];
  timeout?: number;            // in seconds
}

// ============================================================================
// PROMPT TEMPLATES
// ============================================================================

export interface PromptTemplate {
  id: string;
  name: string;
  description?: string;
  prompt: string;
  variables?: PromptVariable[];
  outputFormat?: string;
}

export interface PromptVariable {
  name: string;
  description: string;
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  required: boolean;
  default?: unknown;
}

// ============================================================================
// HEALTH INDICATORS
// ============================================================================

export interface HealthIndicator {
  metric: string;
  good: string;                // e.g., '>0.8', '<24h'
  warning: string;
  bad: string;
}

// ============================================================================
// DURATION
// ============================================================================

export interface Duration {
  min: number;
  max: number;
  unit: 'minutes' | 'hours' | 'days' | 'weeks';
}

// ============================================================================
// WORKFLOW PHASE CONFIG
// ============================================================================

export interface WorkflowPhaseConfig {
  id: WorkflowPhase;
  number: number;
  name: string;
  shortName: string;
  description: string;
  icon: string;                // Lucide icon name
  color: string;               // Tailwind color

  // Gate Requirements
  requiredDeliverables: Deliverable[];
  requiredApprovals: Approval[];
  qualityGates: QualityGate[];

  // Team
  defaultSpecialists: SpecialistId[];
  optionalSpecialists: SpecialistId[];

  // Automation
  automatedChecks: AutomatedCheck[];
  promptTemplates: PromptTemplate[];

  // Metrics
  targetDuration: Duration;
  healthIndicators: HealthIndicator[];

  // Navigation
  canSkip: boolean;
  previousPhase: WorkflowPhase | null;
  nextPhase: WorkflowPhase | null;
}

// ============================================================================
// WORKFLOW PHASES CONFIGURATION
// ============================================================================

export const WORKFLOW_PHASES: WorkflowPhaseConfig[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 1: INPUT
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'input',
    number: 1,
    name: 'Input & Problem Definition',
    shortName: 'Input',
    description: 'Capture the problem statement, user stories, and success criteria',
    icon: 'MessageSquare',
    color: 'blue',

    requiredDeliverables: [
      { id: 'problem_statement', name: 'Problem Statement', format: 'markdown', required: true },
      { id: 'user_stories', name: 'User Stories (min 3)', format: 'user_story', required: true },
      { id: 'success_criteria', name: 'Success Criteria', format: 'checklist', required: true },
      { id: 'constraints', name: 'Constraints & Assumptions', format: 'markdown', required: false },
    ],

    requiredApprovals: [
      { role: 'product_engineer', type: 'sign_off', blocksPhaseTransition: true }
    ],

    qualityGates: [
      { check: 'problem_clarity_score', threshold: 0.8, automated: true, blocksTransition: true },
      { check: 'user_story_coverage', threshold: 0.7, automated: true, blocksTransition: false },
    ],

    defaultSpecialists: ['product_engineer'],
    optionalSpecialists: ['system_architect'],

    automatedChecks: [
      { id: 'clarity', name: 'Clarity Analysis', prompt: 'analyze_problem_clarity' },
      { id: 'scope', name: 'Scope Estimation', prompt: 'estimate_scope' },
    ],

    promptTemplates: [
      {
        id: 'problem_statement',
        name: 'Problem Statement Generator',
        prompt: `## Problem Statement Template

### What problem are we solving?
[Describe the core problem in 1-2 sentences]

### Who has this problem?
[Primary user persona + context]

### What's the current behavior?
[How users currently deal with this]

### What's the desired behavior?
[What we want to achieve]

### Why does this matter NOW?
[Urgency and impact]

### What happens if we don't solve it?
[Consequences of inaction]`
      }
    ],

    targetDuration: { min: 30, max: 120, unit: 'minutes' },

    healthIndicators: [
      { metric: 'clarity_score', good: '>0.8', warning: '0.6-0.8', bad: '<0.6' },
      { metric: 'completeness', good: '>90%', warning: '70-90%', bad: '<70%' },
    ],

    canSkip: false,
    previousPhase: null,
    nextPhase: 'discovery',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 2: DISCOVERY
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'discovery',
    number: 2,
    name: 'Discovery & Research',
    shortName: 'Discovery',
    description: 'Research market, technical feasibility, and risks',
    icon: 'Search',
    color: 'purple',

    requiredDeliverables: [
      { id: 'market_research', name: 'Market/Competitive Analysis', format: 'markdown', required: true },
      { id: 'technical_research', name: 'Technical Feasibility', format: 'markdown', required: true },
      { id: 'existing_solutions', name: 'Existing Solutions Review', format: 'table', required: false },
      { id: 'risk_assessment', name: 'Risk Assessment', format: 'risk_matrix', required: true },
      { id: 'resource_estimate', name: 'Resource Estimation', format: 'estimate', required: false },
    ],

    requiredApprovals: [
      { role: 'system_architect', type: 'technical_review', blocksPhaseTransition: true },
      { role: 'product_engineer', type: 'business_review', blocksPhaseTransition: true },
    ],

    qualityGates: [
      { check: 'research_depth', threshold: 0.7, automated: true, blocksTransition: false },
      { check: 'risk_coverage', threshold: 0.8, automated: true, blocksTransition: true },
    ],

    defaultSpecialists: ['system_architect', 'senior_developer', 'product_engineer'],
    optionalSpecialists: ['security_expert', 'data_engineer'],

    automatedChecks: [
      { id: 'research', name: 'Web Research', prompt: 'research_competitors' },
      { id: 'tech', name: 'Tech Stack Analysis', prompt: 'analyze_tech_options' },
      { id: 'risks', name: 'Risk Identification', prompt: 'identify_risks' },
    ],

    promptTemplates: [
      {
        id: 'competitive_analysis',
        name: 'Competitive Analysis Template',
        prompt: `## Competitive Analysis

### Direct Competitors
| Competitor | Strengths | Weaknesses | Market Share | Pricing |
|------------|-----------|------------|--------------|---------|
| [Name] | | | | |

### Indirect Competitors/Alternatives
[How users currently solve this without a dedicated solution]

### Our Differentiation
[What makes our approach unique]

### Lessons Learned from Market
[Key insights from competitor analysis]`
      }
    ],

    targetDuration: { min: 2, max: 8, unit: 'hours' },

    healthIndicators: [
      { metric: 'research_sources', good: '>5', warning: '3-5', bad: '<3' },
      { metric: 'risk_mitigation_coverage', good: '>80%', warning: '60-80%', bad: '<60%' },
    ],

    canSkip: true,
    previousPhase: 'input',
    nextPhase: 'design',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 3: DESIGN
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'design',
    number: 3,
    name: 'Design & Architecture',
    shortName: 'Design',
    description: 'Create architecture, data models, and technical specifications',
    icon: 'Layers',
    color: 'cyan',

    requiredDeliverables: [
      { id: 'architecture_diagram', name: 'Architecture Diagram', format: 'diagram', required: true },
      { id: 'data_model', name: 'Data Model', format: 'typescript', required: true },
      { id: 'api_spec', name: 'API Specification', format: 'openapi', required: false },
      { id: 'component_breakdown', name: 'Component Breakdown', format: 'tree', required: true },
      { id: 'tech_decisions', name: 'ADRs (Architecture Decision Records)', format: 'adr', required: true },
      { id: 'security_design', name: 'Security Design', format: 'markdown', required: true },
    ],

    requiredApprovals: [
      { role: 'system_architect', type: 'architecture_review', blocksPhaseTransition: true },
      { role: 'security_expert', type: 'security_review', blocksPhaseTransition: true },
      { role: 'senior_developer', type: 'feasibility_review', blocksPhaseTransition: false },
    ],

    qualityGates: [
      { check: 'architecture_completeness', threshold: 0.9, automated: true, blocksTransition: true },
      { check: 'security_coverage', threshold: 0.95, automated: true, blocksTransition: true },
      { check: 'scalability_score', threshold: 0.8, automated: true, blocksTransition: false },
    ],

    defaultSpecialists: ['system_architect', 'senior_developer', 'security_expert'],
    optionalSpecialists: ['api_designer', 'data_engineer', 'frontend_expert'],

    automatedChecks: [
      { id: 'patterns', name: 'Architecture Patterns', prompt: 'validate_architecture_patterns' },
      { id: 'stride', name: 'Security STRIDE Analysis', prompt: 'stride_threat_model' },
      { id: 'scale', name: 'Scalability Analysis', prompt: 'analyze_scalability' },
    ],

    promptTemplates: [
      {
        id: 'adr_template',
        name: 'Architecture Decision Record',
        prompt: `## ADR-[NUMBER]: [TITLE]

### Status
[Proposed | Accepted | Deprecated | Superseded]

### Context
[What is the issue we're seeing that motivates this decision?]

### Decision
[What is the change we're proposing and/or doing?]

### Consequences
[What becomes easier or harder after this change?]

### Alternatives Considered
| Alternative | Pros | Cons | Why Not Chosen |
|-------------|------|------|----------------|
| [Option A] | | | |`
      }
    ],

    targetDuration: { min: 4, max: 24, unit: 'hours' },

    healthIndicators: [
      { metric: 'diagram_coverage', good: '>90%', warning: '70-90%', bad: '<70%' },
      { metric: 'adr_count', good: '>3', warning: '1-3', bad: '0' },
    ],

    canSkip: false,
    previousPhase: 'discovery',
    nextPhase: 'plan',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 4: PLAN
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'plan',
    number: 4,
    name: 'Planning & Roadmap',
    shortName: 'Plan',
    description: 'Break down into tasks, estimate effort, and create roadmap',
    icon: 'Map',
    color: 'green',

    requiredDeliverables: [
      { id: 'task_breakdown', name: 'Task Breakdown (WBS)', format: 'tasks', required: true },
      { id: 'sprint_plan', name: 'Sprint/Phase Plan', format: 'timeline', required: true },
      { id: 'dependency_map', name: 'Dependency Map', format: 'graph', required: false },
      { id: 'milestone_plan', name: 'Milestones', format: 'milestones', required: true },
      { id: 'resource_allocation', name: 'Resource Allocation', format: 'allocation', required: false },
    ],

    requiredApprovals: [
      { role: 'senior_developer', type: 'effort_validation', blocksPhaseTransition: true },
      { role: 'devops_engineer', type: 'infra_validation', blocksPhaseTransition: false },
    ],

    qualityGates: [
      { check: 'task_granularity', threshold: 0.8, automated: true, blocksTransition: true },
      { check: 'estimate_confidence', threshold: 0.7, automated: true, blocksTransition: false },
      { check: 'dependency_clarity', threshold: 0.9, automated: true, blocksTransition: true },
    ],

    defaultSpecialists: ['senior_developer', 'system_architect', 'devops_engineer'],
    optionalSpecialists: ['qa_engineer', 'technical_writer'],

    automatedChecks: [
      { id: 'decompose', name: 'Task Decomposition', prompt: 'decompose_tasks' },
      { id: 'validate', name: 'Estimate Validation', prompt: 'validate_estimates' },
      { id: 'critical', name: 'Critical Path Analysis', prompt: 'identify_critical_path' },
    ],

    promptTemplates: [
      {
        id: 'task_template',
        name: 'Task Definition Template',
        prompt: `## Task: [TITLE]

### Description
[Clear description of what needs to be done]

### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

### Dependencies
- Blocked by: [Task IDs]
- Blocks: [Task IDs]

### Estimation (PERT)
- Optimistic: [X hours]
- Realistic: [Y hours]
- Pessimistic: [Z hours]
- **Estimate**: (X + 4Y + Z) / 6 = [Result]`
      }
    ],

    targetDuration: { min: 2, max: 8, unit: 'hours' },

    healthIndicators: [
      { metric: 'task_definition_quality', good: '>85%', warning: '70-85%', bad: '<70%' },
      { metric: 'estimate_variance', good: '<20%', warning: '20-40%', bad: '>40%' },
    ],

    canSkip: true,
    previousPhase: 'design',
    nextPhase: 'build',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 5: BUILD
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'build',
    number: 5,
    name: 'Build & Implementation',
    shortName: 'Build',
    description: 'Write code, create tests, and document implementation',
    icon: 'Code2',
    color: 'amber',

    requiredDeliverables: [
      { id: 'source_code', name: 'Source Code', format: 'code', required: true },
      { id: 'unit_tests', name: 'Unit Tests (>80% coverage)', format: 'tests', required: true },
      { id: 'documentation', name: 'Code Documentation', format: 'markdown', required: true },
      { id: 'changelog', name: 'Changelog Entry', format: 'changelog', required: true },
    ],

    requiredApprovals: [
      { role: 'code_reviewer', type: 'code_review', blocksPhaseTransition: true },
      { role: 'qa_engineer', type: 'test_review', blocksPhaseTransition: true },
    ],

    qualityGates: [
      { check: 'test_coverage', threshold: 0.8, automated: true, blocksTransition: true },
      { check: 'code_quality_score', threshold: 0.85, automated: true, blocksTransition: true },
      { check: 'security_scan', threshold: 0.95, automated: true, blocksTransition: true },
      { check: 'linter_pass', threshold: 1.0, automated: true, blocksTransition: true },
    ],

    defaultSpecialists: ['senior_developer', 'qa_engineer', 'code_reviewer'],
    optionalSpecialists: ['frontend_expert', 'api_designer', 'security_expert'],

    automatedChecks: [
      { id: 'quality', name: 'Code Review', prompt: 'review_code_quality' },
      { id: 'security', name: 'Security Scan', prompt: 'security_code_review' },
      { id: 'perf', name: 'Performance Analysis', prompt: 'analyze_code_performance' },
    ],

    promptTemplates: [
      {
        id: 'commit_message',
        name: 'Commit Message Template',
        prompt: `## Commit Format

type(scope): subject

[body]

[footer]

### Types
- feat: New feature
- fix: Bug fix
- docs: Documentation
- refactor: Code restructure
- test: Adding tests
- chore: Maintenance`
      }
    ],

    targetDuration: { min: 8, max: 80, unit: 'hours' },

    healthIndicators: [
      { metric: 'test_coverage', good: '>80%', warning: '60-80%', bad: '<60%' },
      { metric: 'code_review_issues', good: '<5', warning: '5-10', bad: '>10' },
    ],

    canSkip: false,
    previousPhase: 'plan',
    nextPhase: 'test',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 6: TEST
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'test',
    number: 6,
    name: 'Test & Validation',
    shortName: 'Test',
    description: 'Execute test plan, validate quality, and fix issues',
    icon: 'TestTube2',
    color: 'red',

    requiredDeliverables: [
      { id: 'test_plan', name: 'Test Plan', format: 'markdown', required: true },
      { id: 'test_cases', name: 'Test Cases', format: 'tests', required: true },
      { id: 'test_report', name: 'Test Report', format: 'report', required: true },
      { id: 'bug_list', name: 'Bug List (P0/P1 resolved)', format: 'issues', required: true },
      { id: 'performance_report', name: 'Performance Report', format: 'metrics', required: false },
    ],

    requiredApprovals: [
      { role: 'qa_engineer', type: 'qa_sign_off', blocksPhaseTransition: true },
      { role: 'performance_engineer', type: 'performance_sign_off', blocksPhaseTransition: false },
    ],

    qualityGates: [
      { check: 'all_tests_pass', threshold: 1.0, automated: true, blocksTransition: true },
      { check: 'p0_bugs_resolved', threshold: 1.0, automated: true, blocksTransition: true },
      { check: 'p1_bugs_resolved', threshold: 0.95, automated: true, blocksTransition: true },
      { check: 'performance_baseline', threshold: 0.9, automated: true, blocksTransition: false },
    ],

    defaultSpecialists: ['qa_engineer', 'performance_engineer', 'security_expert'],
    optionalSpecialists: ['senior_developer', 'devops_engineer'],

    automatedChecks: [
      { id: 'integration', name: 'Integration Tests', prompt: 'run_integration_tests' },
      { id: 'e2e', name: 'E2E Tests', prompt: 'run_e2e_tests' },
      { id: 'load', name: 'Load Testing', prompt: 'run_load_tests' },
      { id: 'security', name: 'Security Penetration', prompt: 'run_security_tests' },
    ],

    promptTemplates: [
      {
        id: 'test_case',
        name: 'Test Case Template',
        prompt: `## Test Case: [TC-XXX] [Title]

### Preconditions
[What must be true before running this test]

### Test Steps
1. [Step 1]
2. [Step 2]

### Expected Result
[What should happen]

### Priority
[P0 | P1 | P2 | P3]`
      }
    ],

    targetDuration: { min: 4, max: 40, unit: 'hours' },

    healthIndicators: [
      { metric: 'test_pass_rate', good: '>95%', warning: '85-95%', bad: '<85%' },
      { metric: 'bug_escape_rate', good: '<5%', warning: '5-15%', bad: '>15%' },
    ],

    canSkip: false,
    previousPhase: 'build',
    nextPhase: 'review',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 7: REVIEW
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'review',
    number: 7,
    name: 'Review & Approval',
    shortName: 'Review',
    description: 'Final reviews, stakeholder demo, and sign-offs',
    icon: 'CheckCircle2',
    color: 'indigo',

    requiredDeliverables: [
      { id: 'review_checklist', name: 'Review Checklist', format: 'checklist', required: true },
      { id: 'stakeholder_demo', name: 'Stakeholder Demo Recording', format: 'video', required: false },
      { id: 'sign_off_document', name: 'Sign-off Document', format: 'approval', required: true },
      { id: 'release_notes', name: 'Release Notes', format: 'markdown', required: true },
    ],

    requiredApprovals: [
      { role: 'system_architect', type: 'technical_approval', blocksPhaseTransition: true },
      { role: 'security_expert', type: 'security_approval', blocksPhaseTransition: true },
      { role: 'product_engineer', type: 'product_approval', blocksPhaseTransition: true },
    ],

    qualityGates: [
      { check: 'all_approvals_received', threshold: 1.0, automated: true, blocksTransition: true },
      { check: 'documentation_complete', threshold: 0.95, automated: true, blocksTransition: true },
      { check: 'no_blocking_issues', threshold: 1.0, automated: true, blocksTransition: true },
    ],

    defaultSpecialists: ['code_reviewer', 'system_architect', 'product_engineer'],
    optionalSpecialists: ['security_expert', 'technical_writer'],

    automatedChecks: [
      { id: 'docs', name: 'Documentation Check', prompt: 'verify_documentation' },
      { id: 'compliance', name: 'Compliance Check', prompt: 'verify_compliance' },
      { id: 'release', name: 'Release Readiness', prompt: 'check_release_readiness' },
    ],

    promptTemplates: [
      {
        id: 'release_notes',
        name: 'Release Notes Template',
        prompt: `## Release Notes - v[X.Y.Z]

### Release Date
[YYYY-MM-DD]

### Highlights
- [Main feature 1]

### New Features
- [Feature description]

### Bug Fixes
- [Bug fix description]

### Breaking Changes
- [Breaking change description]`
      }
    ],

    targetDuration: { min: 2, max: 8, unit: 'hours' },

    healthIndicators: [
      { metric: 'approval_turnaround', good: '<24h', warning: '24-48h', bad: '>48h' },
      { metric: 'review_iterations', good: '<3', warning: '3-5', bad: '>5' },
    ],

    canSkip: false,
    previousPhase: 'test',
    nextPhase: 'deploy',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 8: DEPLOY
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'deploy',
    number: 8,
    name: 'Deploy & Monitor',
    shortName: 'Deploy',
    description: 'Release to production and monitor health',
    icon: 'Rocket',
    color: 'emerald',

    requiredDeliverables: [
      { id: 'deployment_plan', name: 'Deployment Plan', format: 'markdown', required: true },
      { id: 'rollback_plan', name: 'Rollback Plan', format: 'markdown', required: true },
      { id: 'monitoring_setup', name: 'Monitoring Configuration', format: 'config', required: true },
      { id: 'runbook', name: 'Operations Runbook', format: 'markdown', required: true },
      { id: 'post_deploy_checklist', name: 'Post-Deploy Checklist', format: 'checklist', required: true },
    ],

    requiredApprovals: [
      { role: 'devops_engineer', type: 'deployment_approval', blocksPhaseTransition: true },
      { role: 'security_expert', type: 'production_security_approval', blocksPhaseTransition: true },
    ],

    qualityGates: [
      { check: 'deployment_success', threshold: 1.0, automated: true, blocksTransition: true },
      { check: 'smoke_tests_pass', threshold: 1.0, automated: true, blocksTransition: true },
      { check: 'monitoring_active', threshold: 1.0, automated: true, blocksTransition: true },
      { check: 'alerts_configured', threshold: 0.9, automated: true, blocksTransition: false },
    ],

    defaultSpecialists: ['devops_engineer', 'senior_developer', 'security_expert'],
    optionalSpecialists: ['performance_engineer', 'data_engineer'],

    automatedChecks: [
      { id: 'predeploy', name: 'Pre-deploy Validation', prompt: 'pre_deploy_checks' },
      { id: 'smoke', name: 'Smoke Tests', prompt: 'run_smoke_tests' },
      { id: 'health', name: 'Health Check', prompt: 'verify_health_endpoints' },
    ],

    promptTemplates: [
      {
        id: 'deployment_plan',
        name: 'Deployment Plan Template',
        prompt: `## Deployment Plan - v[X.Y.Z]

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Code review approved
- [ ] Security scan passed

### Deployment Steps
1. [Step 1 - with command]
2. [Step 2 - with command]

### Rollback Procedure
1. [Rollback step 1]

### Post-Deployment Verification
- [ ] Health check endpoints responding
- [ ] Key user flows working`
      }
    ],

    targetDuration: { min: 1, max: 4, unit: 'hours' },

    healthIndicators: [
      { metric: 'deployment_success_rate', good: '>99%', warning: '95-99%', bad: '<95%' },
      { metric: 'mean_time_to_recovery', good: '<15min', warning: '15-60min', bad: '>60min' },
    ],

    canSkip: false,
    previousPhase: 'review',
    nextPhase: null,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getPhaseConfig(phase: WorkflowPhase): WorkflowPhaseConfig {
  const config = WORKFLOW_PHASES.find(p => p.id === phase);
  if (!config) throw new Error(`Phase config not found for: ${phase}`);
  return config;
}

export function getNextPhase(current: WorkflowPhase): WorkflowPhase | null {
  return getPhaseConfig(current).nextPhase;
}

export function getPreviousPhase(current: WorkflowPhase): WorkflowPhase | null {
  return getPhaseConfig(current).previousPhase;
}

export function getPhaseNumber(phase: WorkflowPhase): number {
  return getPhaseConfig(phase).number;
}

export function canSkipPhase(phase: WorkflowPhase): boolean {
  return getPhaseConfig(phase).canSkip;
}

export function getPhaseColor(phase: WorkflowPhase): string {
  return getPhaseConfig(phase).color;
}

export function getPhaseIcon(phase: WorkflowPhase): string {
  return getPhaseConfig(phase).icon;
}

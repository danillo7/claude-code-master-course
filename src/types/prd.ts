/**
 * PRD (Product Requirements Document) TYPES - AI Team Framework v2.0
 *
 * Based on Amazon Working Backwards, Google PRD, and Stripe product specs.
 * World-class PRD template for AI-First product development.
 */

import type { SemanticVersion } from './project';

// ============================================================================
// PRD STATUS & METADATA
// ============================================================================

export type PRDStatus = 'draft' | 'review' | 'approved' | 'archived';

export interface PRDMetadata {
  id: string;
  projectId: string;
  version: SemanticVersion;
  status: PRDStatus;

  // Authorship
  title: string;
  codename?: string;
  author: string;
  reviewers: string[];

  // Timestamps
  createdAt: Date;
  lastUpdatedAt: Date;
  approvedAt?: Date;
  archivedAt?: Date;
}

// ============================================================================
// 1. EXECUTIVE SUMMARY (Amazon Press Release Style)
// ============================================================================

export interface PressRelease {
  headline: string;              // Max 10 words, attention-grabbing
  subheadline: string;           // Problem being solved (1 sentence)
  dateLocation: string;          // Fictional future launch date
  openingParagraph: string;      // Who, what, why (2-3 sentences)
  problemQuote: Quote;           // Fictional customer quote about problem
  solutionDescription: string;   // How product solves it (2-3 sentences)
  solutionQuote: Quote;          // Fictional customer quote about solution
  callToAction: string;          // How to get started (1-2 sentences)
}

export interface Quote {
  text: string;
  author: string;
  role: string;
  company?: string;
}

// ============================================================================
// 2. FAQ (Amazon Working Backwards)
// ============================================================================

export interface FAQ {
  question: string;
  answer: string;
  category: 'customer' | 'internal' | 'stakeholder';
  priority: 'high' | 'medium' | 'low';
}

export interface FAQSection {
  customerFaq: FAQ[];            // Questions customers would ask
  internalFaq: FAQ[];            // Questions team would ask
  stakeholderFaq: FAQ[];         // Questions executives would ask
}

// ============================================================================
// 3. PROBLEM DEFINITION
// ============================================================================

export interface ProblemDefinition {
  statement: string;              // Clear problem statement (2-3 sentences)
  impact: ImpactAssessment;       // Quantified impact
  currentState: string;           // How it's done today
  targetState: string;            // How it should be
  rootCauses: string[];           // Why the problem exists
  constraints: string[];          // What limits solutions
  assumptions: string[];          // What we're assuming true
}

export interface ImpactAssessment {
  users: {
    affected: number;
    description: string;
  };
  revenue: {
    potential: string;            // e.g., "$1M ARR"
    description: string;
  };
  cost: {
    current: string;              // e.g., "$50K/month in manual work"
    description: string;
  };
  time: {
    saved: string;                // e.g., "10 hours/user/week"
    description: string;
  };
  strategic: string;              // Strategic importance
}

// ============================================================================
// 4. USER RESEARCH
// ============================================================================

export interface UserResearch {
  personas: Persona[];
  jobs: JobToBeDone[];
  journeyMaps: JourneyMap[];
  interviews: InterviewSummary[];
  surveys: SurveySummary[];
  analyticsInsights: string[];
}

export interface Persona {
  id: string;
  name: string;                   // e.g., "Data-Driven Diana"
  avatar?: string;                // Image URL
  role: string;                   // e.g., "Product Manager at SaaS startup"
  demographics: {
    age: string;
    location: string;
    techSavviness: 'low' | 'medium' | 'high';
    companySize: string;
  };
  background: string;             // Brief background story
  goals: string[];                // What they want to achieve
  frustrations: string[];         // Pain points
  behaviors: string[];            // How they work
  tools: string[];                // Tools they use
  quote: string;                  // Representative quote
}

export interface JobToBeDone {
  id: string;
  statement: string;              // "When [situation], I want to [motivation], so I can [outcome]"
  situation: string;
  motivation: string;
  outcome: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'occasionally';
  importance: 'critical' | 'high' | 'medium' | 'low';
  currentSatisfaction: number;    // 0-10
  desiredSatisfaction: number;    // 0-10
}

export interface JourneyMap {
  id: string;
  personaId: string;
  name: string;
  stages: JourneyStage[];
}

export interface JourneyStage {
  name: string;
  description: string;
  actions: string[];
  thoughts: string[];
  emotions: 'frustrated' | 'neutral' | 'satisfied' | 'delighted';
  painPoints: string[];
  opportunities: string[];
}

export interface InterviewSummary {
  id: string;
  participantRole: string;
  date: Date;
  keyInsights: string[];
  quotes: Quote[];
  themes: string[];
}

export interface SurveySummary {
  id: string;
  name: string;
  respondents: number;
  date: Date;
  keyFindings: string[];
  dataPoints: DataPoint[];
}

export interface DataPoint {
  metric: string;
  value: string | number;
  context: string;
}

// ============================================================================
// 5. SOLUTION
// ============================================================================

export interface Solution {
  vision: string;                 // Long-term vision (5 years)
  strategy: string;               // Medium-term strategy (1 year)
  description: string;            // What we're building (detailed)
  keyFeatures: Feature[];         // Main features
  mvpScope: MVPScope;             // What's in/out of MVP
  differentiators: string[];      // What makes us unique
  technicalApproach: string;      // High-level tech approach
  futureRoadmap: RoadmapItem[];   // What comes next
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'must' | 'should' | 'could' | 'wont';  // MoSCoW
  effort: 'xs' | 's' | 'm' | 'l' | 'xl';
  impact: 'low' | 'medium' | 'high';
  dependencies: string[];
  userStoryIds: string[];
}

export interface MVPScope {
  included: string[];             // What's IN the MVP
  excluded: string[];             // What's OUT of the MVP
  rationale: string;              // Why these boundaries
}

export interface RoadmapItem {
  phase: string;                  // e.g., "Phase 1", "Q2 2026"
  name: string;
  description: string;
  features: string[];
}

// ============================================================================
// 6. USER STORIES
// ============================================================================

export interface UserStory {
  id: string;
  epicId?: string;
  title: string;
  asA: string;                    // User type
  iWant: string;                  // Action
  soThat: string;                 // Benefit
  acceptanceCriteria: AcceptanceCriterion[];
  priority: 'must' | 'should' | 'could' | 'wont';
  storyPoints?: number;
  dependencies: string[];
  notes?: string;
  mockupUrl?: string;
}

export interface AcceptanceCriterion {
  id: string;
  given: string;                  // Context
  when: string;                   // Action
  then: string;                   // Expected result
  verified: boolean;
}

export interface Epic {
  id: string;
  name: string;
  description: string;
  userStoryIds: string[];
  priority: number;               // Order
}

// ============================================================================
// 7. REQUIREMENTS
// ============================================================================

export interface Requirement {
  id: string;
  type: 'functional' | 'non_functional' | 'technical' | 'compliance';
  category: string;               // e.g., "Authentication", "Performance"
  title: string;
  description: string;
  priority: 'must' | 'should' | 'could' | 'wont';
  rationale: string;              // Why this is needed
  acceptanceCriteria: string[];
  verificationMethod: string;     // How to verify it's met
  source: string;                 // Where this came from
  relatedRequirements: string[];  // Related requirement IDs
}

export interface RequirementsSection {
  functional: Requirement[];
  nonFunctional: Requirement[];
  technical: Requirement[];
  compliance: Requirement[];
}

// ============================================================================
// 8. SUCCESS METRICS
// ============================================================================

export interface Metric {
  id: string;
  name: string;
  description: string;
  type: 'north_star' | 'primary' | 'secondary' | 'guardrail';
  formula: string;                // How to calculate
  currentValue?: number;
  targetValue: number;
  targetDate: Date;
  measurementFrequency: 'real_time' | 'daily' | 'weekly' | 'monthly';
  dataSource: string;
  owner: string;
  status: 'not_measured' | 'below_target' | 'on_track' | 'above_target';
}

export interface MetricTarget {
  metricId: string;
  milestone: string;
  targetValue: number;
  targetDate: Date;
  status: 'pending' | 'achieved' | 'missed';
}

export interface MetricsSection {
  northStar: Metric;
  primary: Metric[];
  secondary: Metric[];
  guardrails: Metric[];
  targets: MetricTarget[];
}

// ============================================================================
// 9. TIMELINE & MILESTONES
// ============================================================================

export interface Phase {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  deliverables: string[];
  status: 'not_started' | 'in_progress' | 'completed' | 'delayed';
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  targetDate: Date;
  actualDate?: Date;
  criteria: string[];             // Success criteria
  dependencies: string[];
  status: 'pending' | 'achieved' | 'missed' | 'at_risk';
}

export interface Dependency {
  id: string;
  name: string;
  type: 'internal' | 'external';
  description: string;
  owner: string;
  targetDate: Date;
  status: 'pending' | 'resolved' | 'blocked';
  impact: 'low' | 'medium' | 'high';
}

export interface TimelineSection {
  phases: Phase[];
  milestones: Milestone[];
  dependencies: Dependency[];
  criticalPath: string[];         // Critical path item IDs
}

// ============================================================================
// 10. RISKS & MITIGATIONS
// ============================================================================

export type RiskCategory =
  | 'technical'
  | 'business'
  | 'legal'
  | 'operational'
  | 'security'
  | 'market'
  | 'resource';

export interface RiskAssessment {
  id: string;
  title: string;
  description: string;
  category: RiskCategory;
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  riskScore: number;              // probability * impact (1-9)
  mitigations: Mitigation[];
  contingencies: string[];        // If risk occurs
  triggers: string[];             // Early warning signs
  owner: string;
  status: 'identified' | 'mitigating' | 'resolved' | 'accepted' | 'occurred';
  lastReviewDate: Date;
}

export interface Mitigation {
  id: string;
  description: string;
  effort: 'low' | 'medium' | 'high';
  effectiveness: 'low' | 'medium' | 'high';
  status: 'planned' | 'in_progress' | 'completed';
  owner: string;
}

// ============================================================================
// 11. RESOURCES
// ============================================================================

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  allocation: number;             // Percentage (0-100)
  startDate: Date;
  endDate?: Date;
  skills: string[];
}

export interface BudgetItem {
  category: string;
  description: string;
  amount: number;
  currency: string;
  frequency: 'one_time' | 'monthly' | 'annual';
  status: 'estimated' | 'approved' | 'spent';
}

export interface Budget {
  total: number;
  currency: string;
  items: BudgetItem[];
  contingency: number;            // Percentage
  approvedBy?: string;
  approvedAt?: Date;
}

export interface Tool {
  name: string;
  purpose: string;
  cost?: string;
  status: 'existing' | 'to_acquire' | 'to_evaluate';
}

export interface ResourcesSection {
  team: TeamMember[];
  budget: Budget;
  tools: Tool[];
  timeline: {
    optimistic: number;
    realistic: number;
    pessimistic: number;
    unit: 'days' | 'weeks' | 'months';
    pertEstimate: number;         // (O + 4R + P) / 6
  };
}

// ============================================================================
// 12. GO-TO-MARKET
// ============================================================================

export interface GoToMarket {
  launchStrategy: string;         // How we'll launch
  targetMarket: string;           // Initial target market
  positioning: string;            // Market positioning statement
  messagingPillars: string[];     // Key messages
  channels: Channel[];            // Distribution channels
  pricing?: PricingStrategy;      // Pricing if applicable
  partnerships?: Partnership[];    // Strategic partnerships
  launchChecklist: string[];      // Launch requirements
}

export interface Channel {
  name: string;
  type: 'direct' | 'partner' | 'marketplace' | 'social' | 'content';
  description: string;
  priority: 'primary' | 'secondary';
  metrics: string[];              // How to measure success
}

export interface PricingStrategy {
  model: 'free' | 'freemium' | 'subscription' | 'usage_based' | 'one_time';
  tiers?: PricingTier[];
  rationale: string;
  competitorComparison?: string;
}

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  period: 'month' | 'year' | 'one_time';
  features: string[];
  targetCustomer: string;
}

export interface Partnership {
  name: string;
  type: 'technology' | 'distribution' | 'co_marketing' | 'integration';
  description: string;
  status: 'identified' | 'in_discussion' | 'committed';
}

// ============================================================================
// 13. APPENDICES
// ============================================================================

export interface CompetitiveAnalysis {
  competitors: Competitor[];
  strengthsWeaknesses: SWOT;
  differentiationMatrix: DifferentiationPoint[];
}

export interface Competitor {
  name: string;
  description: string;
  marketShare?: string;
  pricing?: string;
  strengths: string[];
  weaknesses: string[];
  threatLevel: 'low' | 'medium' | 'high';
}

export interface SWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface DifferentiationPoint {
  feature: string;
  us: 'yes' | 'no' | 'partial' | 'planned';
  competitors: Record<string, 'yes' | 'no' | 'partial' | 'unknown'>;
}

export interface Wireframe {
  id: string;
  name: string;
  description: string;
  url: string;
  type: 'low_fidelity' | 'high_fidelity' | 'prototype';
  status: 'draft' | 'review' | 'approved';
}

export interface Reference {
  title: string;
  url?: string;
  type: 'article' | 'book' | 'video' | 'research' | 'internal';
  notes?: string;
}

export interface Appendices {
  competitiveAnalysis?: CompetitiveAnalysis;
  wireframes: Wireframe[];
  references: Reference[];
  glossary: Record<string, string>;
  changelog: PRDChangelogEntry[];
}

export interface PRDChangelogEntry {
  version: string;
  date: Date;
  author: string;
  changes: string[];
}

// ============================================================================
// MAIN PRD INTERFACE
// ============================================================================

export interface PRDocument {
  metadata: PRDMetadata;

  // 1. Executive Summary
  pressRelease: PressRelease;

  // 2. FAQ
  faq: FAQSection;

  // 3. Problem
  problem: ProblemDefinition;

  // 4. User Research
  userResearch: UserResearch;

  // 5. Solution
  solution: Solution;

  // 6. User Stories
  epics: Epic[];
  userStories: UserStory[];

  // 7. Requirements
  requirements: RequirementsSection;

  // 8. Metrics
  metrics: MetricsSection;

  // 9. Timeline
  timeline: TimelineSection;

  // 10. Risks
  risks: RiskAssessment[];

  // 11. Resources
  resources: ResourcesSection;

  // 12. GTM
  gtm?: GoToMarket;

  // 13. Appendices
  appendices: Appendices;
}

// ============================================================================
// FACTORY FUNCTIONS
// ============================================================================

export function createEmptyPRD(params: {
  projectId: string;
  title: string;
  author: string;
}): PRDocument {
  const now = new Date();

  return {
    metadata: {
      id: crypto.randomUUID(),
      projectId: params.projectId,
      version: { major: 0, minor: 1, patch: 0 },
      status: 'draft',
      title: params.title,
      author: params.author,
      reviewers: [],
      createdAt: now,
      lastUpdatedAt: now,
    },

    pressRelease: {
      headline: '',
      subheadline: '',
      dateLocation: '',
      openingParagraph: '',
      problemQuote: { text: '', author: '', role: '' },
      solutionDescription: '',
      solutionQuote: { text: '', author: '', role: '' },
      callToAction: '',
    },

    faq: {
      customerFaq: [],
      internalFaq: [],
      stakeholderFaq: [],
    },

    problem: {
      statement: '',
      impact: {
        users: { affected: 0, description: '' },
        revenue: { potential: '', description: '' },
        cost: { current: '', description: '' },
        time: { saved: '', description: '' },
        strategic: '',
      },
      currentState: '',
      targetState: '',
      rootCauses: [],
      constraints: [],
      assumptions: [],
    },

    userResearch: {
      personas: [],
      jobs: [],
      journeyMaps: [],
      interviews: [],
      surveys: [],
      analyticsInsights: [],
    },

    solution: {
      vision: '',
      strategy: '',
      description: '',
      keyFeatures: [],
      mvpScope: { included: [], excluded: [], rationale: '' },
      differentiators: [],
      technicalApproach: '',
      futureRoadmap: [],
    },

    epics: [],
    userStories: [],

    requirements: {
      functional: [],
      nonFunctional: [],
      technical: [],
      compliance: [],
    },

    metrics: {
      northStar: {
        id: 'north_star',
        name: '',
        description: '',
        type: 'north_star',
        formula: '',
        targetValue: 0,
        targetDate: now,
        measurementFrequency: 'weekly',
        dataSource: '',
        owner: '',
        status: 'not_measured',
      },
      primary: [],
      secondary: [],
      guardrails: [],
      targets: [],
    },

    timeline: {
      phases: [],
      milestones: [],
      dependencies: [],
      criticalPath: [],
    },

    risks: [],

    resources: {
      team: [],
      budget: {
        total: 0,
        currency: 'USD',
        items: [],
        contingency: 10,
      },
      tools: [],
      timeline: {
        optimistic: 0,
        realistic: 0,
        pessimistic: 0,
        unit: 'weeks',
        pertEstimate: 0,
      },
    },

    appendices: {
      wireframes: [],
      references: [],
      glossary: {},
      changelog: [],
    },
  };
}

export function calculatePRDCompleteness(prd: PRDocument): number {
  const sections = [
    // Press Release (15%)
    {
      weight: 15,
      complete:
        prd.pressRelease.headline.length > 0 &&
        prd.pressRelease.subheadline.length > 0 &&
        prd.pressRelease.openingParagraph.length > 0,
    },
    // Problem (15%)
    {
      weight: 15,
      complete:
        prd.problem.statement.length > 0 &&
        prd.problem.currentState.length > 0 &&
        prd.problem.targetState.length > 0,
    },
    // User Research (15%)
    {
      weight: 15,
      complete:
        prd.userResearch.personas.length > 0 &&
        prd.userResearch.jobs.length > 0,
    },
    // Solution (15%)
    {
      weight: 15,
      complete:
        prd.solution.description.length > 0 &&
        prd.solution.keyFeatures.length > 0,
    },
    // User Stories (15%)
    {
      weight: 15,
      complete: prd.userStories.length >= 3,
    },
    // Requirements (10%)
    {
      weight: 10,
      complete: prd.requirements.functional.length > 0,
    },
    // Metrics (10%)
    {
      weight: 10,
      complete:
        prd.metrics.northStar.name.length > 0 &&
        prd.metrics.primary.length > 0,
    },
    // Timeline (5%)
    {
      weight: 5,
      complete: prd.timeline.milestones.length > 0,
    },
  ];

  return sections.reduce((sum, section) => {
    return sum + (section.complete ? section.weight : 0);
  }, 0);
}

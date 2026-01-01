/**
 * HISTORY TIMELINE - AI Team Framework v2.0
 *
 * Git-like incremental history visualization.
 * Shows version diffs, rollbacks, and changelog.
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  History,
  GitCommit,
  GitMerge,
  Clock,
  User,
  Bot,
  Settings,
  ChevronDown,
  ChevronRight,
  RotateCcw,
  Copy,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  Shield,
  Code2,
  Layers,
  Tag,
  Search,
  Download,
  ExternalLink,
} from 'lucide-react';
import { useProjectStore } from '../../../store/useProjectStore';
import type {
  Project,
  ProjectHistoryEntry,
  ChangeType,
  SemanticVersion,
  ChangelogEntry,
} from '../../../types/project';
import { versionToString } from '../../../types/project';

// ============================================================================
// CONSTANTS
// ============================================================================

const CHANGE_TYPE_CONFIG: Record<
  ChangeType,
  { icon: React.ElementType; color: string; label: string }
> = {
  phase_transition: {
    icon: GitMerge,
    color: 'text-blue-400 bg-blue-500/20',
    label: 'Phase Transition',
  },
  deliverable_added: {
    icon: FileText,
    color: 'text-green-400 bg-green-500/20',
    label: 'Deliverable Added',
  },
  deliverable_updated: {
    icon: FileText,
    color: 'text-amber-400 bg-amber-500/20',
    label: 'Deliverable Updated',
  },
  approval_received: {
    icon: Shield,
    color: 'text-purple-400 bg-purple-500/20',
    label: 'Approval Received',
  },
  team_change: {
    icon: Users,
    color: 'text-cyan-400 bg-cyan-500/20',
    label: 'Team Change',
  },
  scope_change: {
    icon: Layers,
    color: 'text-orange-400 bg-orange-500/20',
    label: 'Scope Change',
  },
  risk_identified: {
    icon: AlertCircle,
    color: 'text-red-400 bg-red-500/20',
    label: 'Risk Identified',
  },
  issue_resolved: {
    icon: CheckCircle,
    color: 'text-green-400 bg-green-500/20',
    label: 'Issue Resolved',
  },
  rollback: {
    icon: RotateCcw,
    color: 'text-yellow-400 bg-yellow-500/20',
    label: 'Rollback',
  },
  manual_edit: {
    icon: Code2,
    color: 'text-gray-400 bg-gray-500/20',
    label: 'Manual Edit',
  },
};

const AUTHOR_TYPE_ICONS: Record<string, React.ElementType> = {
  specialist: Bot,
  user: User,
  system: Settings,
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'just now';
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// ============================================================================
// HISTORY ENTRY COMPONENT
// ============================================================================

interface HistoryEntryProps {
  entry: ProjectHistoryEntry;
  isFirst: boolean;
  isLast: boolean;
  onRestore: () => void;
}

const HistoryEntry: React.FC<HistoryEntryProps> = ({
  entry,
  isFirst: _isFirst,
  isLast,
  onRestore,
}) => {
  const [expanded, setExpanded] = useState(false);
  const config = CHANGE_TYPE_CONFIG[entry.changeType];
  const Icon = config.icon;
  const AuthorIcon = AUTHOR_TYPE_ICONS[entry.author.type] || User;

  return (
    <div className="relative pl-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-700" />
      )}

      {/* Timeline Dot */}
      <div
        className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center ${config.color}`}
      >
        <Icon className="w-3.5 h-3.5" />
      </div>

      {/* Entry Card */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-800/50 rounded-lg border border-gray-700 mb-4"
      >
        {/* Header */}
        <div
          className="p-3 cursor-pointer hover:bg-gray-700/30 transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${config.color}`}>
                  {config.label}
                </span>
                <span className="text-xs text-gray-500">
                  v{versionToString(entry.version)}
                </span>
              </div>
              <p className="text-sm text-white font-medium">{entry.changeSummary}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-xs text-gray-400">
                  {formatRelativeTime(entry.timestamp)}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <AuthorIcon className="w-3 h-3" />
                  {entry.author.name}
                </div>
              </div>
              {expanded ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-3 border-t border-gray-700 space-y-3">
                {/* Timestamp */}
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDate(entry.timestamp)}
                </div>

                {/* Change Details */}
                {entry.changeDetails.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Changes
                    </h4>
                    <div className="space-y-1.5">
                      {entry.changeDetails.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs bg-gray-900/50 rounded px-2 py-1.5"
                        >
                          <span
                            className={`px-1.5 py-0.5 rounded ${
                              detail.operation === 'add'
                                ? 'bg-green-500/20 text-green-400'
                                : detail.operation === 'remove'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-amber-500/20 text-amber-400'
                            }`}
                          >
                            {detail.operation}
                          </span>
                          <code className="text-gray-400">{detail.field}</code>
                          {detail.oldValue !== undefined && (
                            <>
                              <span className="text-gray-600">→</span>
                              <span className="text-gray-300 truncate max-w-[100px]">
                                {JSON.stringify(detail.newValue)}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Diff */}
                {entry.diff.affectedFields.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Affected Fields
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {entry.diff.affectedFields.map((field, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-xs font-mono"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reason */}
                {entry.reason && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Reason
                    </h4>
                    <p className="text-xs text-gray-400">{entry.reason}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRestore();
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-700 rounded text-xs text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Restore to this version
                  </button>
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-700 rounded text-xs text-gray-300 hover:bg-gray-600 transition-colors">
                    <Copy className="w-3.5 h-3.5" />
                    Copy diff
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// ============================================================================
// CHANGELOG ENTRY COMPONENT
// ============================================================================

const ChangelogEntryCard: React.FC<{ entry: ChangelogEntry }> = ({ entry }) => {
  const typeColors = {
    major: 'bg-red-500/20 text-red-400 border-red-500/30',
    minor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    patch: 'bg-green-500/20 text-green-400 border-green-500/30',
  };

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 mb-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-gray-400" />
          <span className="font-semibold text-white">
            v{versionToString(entry.version)}
          </span>
          <span className={`px-2 py-0.5 rounded border text-xs ${typeColors[entry.type]}`}>
            {entry.type}
          </span>
        </div>
        <span className="text-xs text-gray-500">{formatDate(entry.date)}</span>
      </div>

      <h3 className="text-sm font-medium text-white mb-2">{entry.title}</h3>

      {entry.changes.length > 0 && (
        <div className="space-y-1 mb-2">
          {entry.changes.map((change, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              {change}
            </div>
          ))}
        </div>
      )}

      {entry.breaking && entry.breaking.length > 0 && (
        <div className="mt-2 p-2 bg-red-500/10 rounded border border-red-500/20">
          <div className="text-xs font-semibold text-red-400 mb-1">
            ⚠️ Breaking Changes
          </div>
          {entry.breaking.map((item, idx) => (
            <div key={idx} className="text-xs text-red-300">
              • {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// VERSION GRAPH COMPONENT
// ============================================================================

const VersionGraph: React.FC<{ history: ProjectHistoryEntry[] }> = ({ history }) => {
  const versionGroups = useMemo(() => {
    const groups: Record<string, ProjectHistoryEntry[]> = {};
    history.forEach((entry) => {
      const version = versionToString(entry.version);
      if (!groups[version]) groups[version] = [];
      groups[version].push(entry);
    });
    return groups;
  }, [history]);

  const versions = Object.keys(versionGroups).reverse().slice(0, 10);

  return (
    <div className="relative">
      {/* Version nodes */}
      <div className="flex items-center justify-between mb-4 overflow-x-auto pb-2">
        {versions.map((version, idx) => (
          <div key={version} className="flex flex-col items-center min-w-[60px]">
            <div
              className={`w-3 h-3 rounded-full ${
                idx === 0 ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
            <div className="text-xs text-gray-400 mt-1 font-mono">v{version}</div>
            <div className="text-xs text-gray-600">
              {versionGroups[version].length} changes
            </div>
          </div>
        ))}
      </div>
      {/* Connection line */}
      <div className="absolute top-1.5 left-0 right-0 h-0.5 bg-gray-700 -z-10" />
    </div>
  );
};

// ============================================================================
// FILTERS COMPONENT
// ============================================================================

const HistoryFilters: React.FC<{
  selectedTypes: ChangeType[];
  onTypeToggle: (type: ChangeType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}> = ({ selectedTypes, onTypeToggle, searchQuery, onSearchChange }) => {
  const allTypes = Object.keys(CHANGE_TYPE_CONFIG) as ChangeType[];

  return (
    <div className="space-y-3 mb-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search history..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Type Filters */}
      <div className="flex flex-wrap gap-1.5">
        {allTypes.map((type) => {
          const config = CHANGE_TYPE_CONFIG[type];
          const isSelected = selectedTypes.includes(type);
          return (
            <button
              key={type}
              onClick={() => onTypeToggle(type)}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                isSelected
                  ? config.color
                  : 'bg-gray-800 text-gray-500 hover:bg-gray-700'
              }`}
            >
              {config.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN HISTORY TIMELINE COMPONENT
// ============================================================================

export const HistoryTimeline: React.FC<{ project: Project }> = ({ project }) => {
  const { restoreToVersion, getProjectHistory } = useProjectStore();
  const [activeTab, setActiveTab] = useState<'timeline' | 'changelog'>('timeline');
  const [selectedTypes, setSelectedTypes] = useState<ChangeType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const history = useMemo(() => getProjectHistory(project.id, 100), [project.id]);

  const filteredHistory = useMemo(() => {
    let filtered = [...history];

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((e) => selectedTypes.includes(e.changeType));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (e) =>
          e.changeSummary.toLowerCase().includes(query) ||
          e.author.name.toLowerCase().includes(query) ||
          e.changeDetails.some((d) => d.field.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [history, selectedTypes, searchQuery]);

  const handleTypeToggle = (type: ChangeType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleRestore = (version: SemanticVersion) => {
    if (window.confirm(`Restore project to version ${versionToString(version)}?`)) {
      restoreToVersion(project.id, version);
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <History className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Project History</h2>
              <p className="text-xs text-gray-400">
                {history.length} changes • Current: v{versionToString(project.version)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
              <Download className="w-4 h-4 text-gray-300" />
            </button>
            <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
              <ExternalLink className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Version Graph */}
        <VersionGraph history={history} />

        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-700 -mx-4 px-4">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'timeline'
                ? 'text-white border-blue-500'
                : 'text-gray-400 border-transparent hover:text-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4" />
              Timeline
            </div>
          </button>
          <button
            onClick={() => setActiveTab('changelog')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'changelog'
                ? 'text-white border-blue-500'
                : 'text-gray-400 border-transparent hover:text-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Changelog
            </div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-h-[500px] overflow-y-auto">
        {activeTab === 'timeline' && (
          <>
            <HistoryFilters
              selectedTypes={selectedTypes}
              onTypeToggle={handleTypeToggle}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {filteredHistory.length === 0 ? (
              <div className="text-center py-8">
                <History className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">No history entries found</p>
              </div>
            ) : (
              <div className="mt-4">
                {filteredHistory.map((entry, idx) => (
                  <HistoryEntry
                    key={entry.id}
                    entry={entry}
                    isFirst={idx === 0}
                    isLast={idx === filteredHistory.length - 1}
                    onRestore={() => handleRestore(entry.version)}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'changelog' && (
          <>
            {project.changelog.length === 0 ? (
              <div className="text-center py-8">
                <Tag className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">No changelog entries yet</p>
                <p className="text-xs text-gray-500 mt-1">
                  Changelog entries are created on version bumps
                </p>
              </div>
            ) : (
              <div>
                {[...project.changelog].reverse().map((entry, idx) => (
                  <ChangelogEntryCard key={idx} entry={entry} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryTimeline;

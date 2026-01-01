#!/usr/bin/env node

/**
 * AI News Capture Script v1.0
 * Automated news capture using Firecrawl + AI summarization
 *
 * Features:
 * - Multi-source news aggregation
 * - AI-powered relevance filtering
 * - Deduplication with existing news
 * - Category classification
 * - Excerpt generation
 *
 * Sources:
 * - TechCrunch AI
 * - VentureBeat AI
 * - The Verge AI
 * - Anthropic Blog
 * - OpenAI Blog
 * - Simon Willison Blog
 * - Hacker News Top Stories
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  sources: [
    {
      name: 'TechCrunch AI',
      url: 'https://techcrunch.com/category/artificial-intelligence/',
      category: 'tech',
      priority: 1,
    },
    {
      name: 'VentureBeat AI',
      url: 'https://venturebeat.com/ai/',
      category: 'tech',
      priority: 1,
    },
    {
      name: 'The Verge AI',
      url: 'https://www.theverge.com/ai-artificial-intelligence',
      category: 'tech',
      priority: 2,
    },
    {
      name: 'Anthropic Blog',
      url: 'https://www.anthropic.com/news',
      category: 'research',
      priority: 1,
    },
    {
      name: 'OpenAI Blog',
      url: 'https://openai.com/blog',
      category: 'research',
      priority: 1,
    },
    {
      name: 'Simon Willison',
      url: 'https://simonwillison.net/',
      category: 'code',
      priority: 1,
    },
    {
      name: 'Hacker News',
      url: 'https://news.ycombinator.com/front',
      category: 'startup',
      priority: 2,
    },
  ],
  maxNewsPerSource: 3,
  maxTotalNews: 20,
  firecrawlApiKey: process.env.FIRECRAWL_API_KEY,
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  dataFilePath: path.join(__dirname, '../src/data/aiNewsData.ts'),
};

// Categories for classification
const CATEGORIES = [
  'tech',
  'startup',
  'investment',
  'code',
  'infrastructure',
  'research',
  'case',
];

/**
 * Fetch news using Firecrawl
 */
async function fetchWithFirecrawl(source) {
  if (!CONFIG.firecrawlApiKey) {
    console.log(`[SKIP] No Firecrawl API key, skipping ${source.name}`);
    return [];
  }

  try {
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONFIG.firecrawlApiKey}`,
      },
      body: JSON.stringify({
        url: source.url,
        formats: ['markdown'],
        onlyMainContent: true,
        waitFor: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`Firecrawl error: ${response.status}`);
    }

    const data = await response.json();
    console.log(`[OK] Fetched ${source.name}`);

    return parseNewsFromMarkdown(data.data?.markdown || '', source);
  } catch (error) {
    console.error(`[ERROR] Failed to fetch ${source.name}:`, error.message);
    return [];
  }
}

/**
 * Parse news items from markdown content
 */
function parseNewsFromMarkdown(markdown, source) {
  const items = [];

  // Extract headlines (lines starting with # or ## or being bold)
  const headlinePatterns = [
    /^#+\s+(.+)$/gm, // Markdown headers
    /\*\*(.+?)\*\*/g, // Bold text
    /\[([^\]]+)\]\(([^)]+)\)/g, // Links with text
  ];

  const seen = new Set();
  const now = new Date();

  for (const pattern of headlinePatterns) {
    let match;
    while ((match = pattern.exec(markdown)) !== null) {
      const title = match[1]?.trim();
      const url = match[2] || source.url;

      // Filter: Skip short titles, duplicates, navigation items
      if (!title || title.length < 20 || title.length > 200) continue;
      if (seen.has(title.toLowerCase())) continue;
      if (/^(menu|home|about|contact|subscribe|login|sign)/i.test(title))
        continue;
      if (!/ai|llm|gpt|claude|model|machine learning|neural/i.test(title))
        continue;

      seen.add(title.toLowerCase());

      items.push({
        id: generateId(title),
        title,
        source: source.name,
        url: url.startsWith('http') ? url : source.url,
        timestamp: now.toISOString(),
        category: source.category,
        excerpt: '', // Will be filled by AI
        content: '', // Will be filled later
        readingTime: 2,
      });

      if (items.length >= CONFIG.maxNewsPerSource) break;
    }
    if (items.length >= CONFIG.maxNewsPerSource) break;
  }

  return items;
}

/**
 * Use AI to enhance news items
 */
async function enhanceWithAI(newsItems) {
  if (!CONFIG.anthropicApiKey || newsItems.length === 0) {
    return newsItems;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CONFIG.anthropicApiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: `Analyze these AI news headlines and provide:
1. A brief excerpt (1-2 sentences) for each
2. The most appropriate category from: ${CATEGORIES.join(', ')}
3. Relevance score (1-10) for AI/ML practitioners

Headlines:
${newsItems.map((n, i) => `${i + 1}. ${n.title}`).join('\n')}

Respond in JSON format:
{
  "items": [
    { "index": 0, "excerpt": "...", "category": "...", "relevance": 8 }
  ]
}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '';

    // Parse JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);

      for (const item of parsed.items || []) {
        if (newsItems[item.index]) {
          newsItems[item.index].excerpt = item.excerpt || '';
          newsItems[item.index].category = item.category || 'tech';
        }
      }
    }

    console.log('[OK] Enhanced news with AI');
  } catch (error) {
    console.error('[ERROR] AI enhancement failed:', error.message);
  }

  return newsItems;
}

/**
 * Generate unique ID from title
 */
function generateId(title) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50);
  const hash = Date.now().toString(36);
  return `${base}-${hash}`;
}

/**
 * Load existing news data
 */
function loadExistingData() {
  try {
    const content = fs.readFileSync(CONFIG.dataFilePath, 'utf8');

    // Extract existing news IDs to avoid duplicates
    const idMatches = content.match(/id:\s*['"]([^'"]+)['"]/g) || [];
    const existingIds = new Set(
      idMatches.map((m) => m.match(/['"]([^'"]+)['"]/)?.[1])
    );

    return { content, existingIds };
  } catch {
    return { content: '', existingIds: new Set() };
  }
}

/**
 * Update the data file with new news
 */
function updateDataFile(newNews, existingContent) {
  if (newNews.length === 0) {
    console.log('[INFO] No new news to add');
    return;
  }

  const now = new Date();
  const isoTimestamp = now.toISOString();

  // Calculate next update
  const hour = now.getHours();
  let nextHour;
  if (hour < 6) nextHour = 6;
  else if (hour < 10) nextHour = 10;
  else if (hour < 14) nextHour = 14;
  else if (hour < 18) nextHour = 18;
  else if (hour < 22) nextHour = 22;
  else nextHour = 6; // Next day

  const nextDate = new Date(now);
  if (hour >= 22) nextDate.setDate(nextDate.getDate() + 1);
  nextDate.setHours(nextHour, 0, 0, 0);
  const nextTimestamp = nextDate.toISOString();

  // Update metadata
  let updatedContent = existingContent
    .replace(/lastUpdated:\s*['"][^'"]*['"]/, `lastUpdated: '${isoTimestamp}'`)
    .replace(/nextUpdate:\s*['"][^'"]*['"]/, `nextUpdate: '${nextTimestamp}'`)
    .replace(/totalNews:\s*\d+/, `totalNews: ${newNews.length}`);

  // Generate new news array
  const newsArrayStr = newNews
    .map(
      (n) => `  {
    id: '${n.id}',
    title: '${n.title.replace(/'/g, "\\'")}',
    source: '${n.source}',
    url: '${n.url}',
    timestamp: '${n.timestamp}',
    category: '${n.category}' as const,
    excerpt: '${(n.excerpt || '').replace(/'/g, "\\'")}',
    content: '',
    readingTime: ${n.readingTime},
  }`
    )
    .join(',\n');

  // Replace the AI_NEWS array
  updatedContent = updatedContent.replace(
    /export const AI_NEWS: NewsItem\[\] = \[[\s\S]*?\];/,
    `export const AI_NEWS: NewsItem[] = [\n${newsArrayStr}\n];`
  );

  // Add to update history
  const historyEntry = `  {
    date: '${now.toLocaleDateString('pt-BR')}',
    time: '${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}',
    itemsAdded: ${newNews.length},
    source: 'Automated Capture',
  },`;

  updatedContent = updatedContent.replace(
    /export const UPDATE_HISTORY: UpdateHistoryItem\[\] = \[/,
    `export const UPDATE_HISTORY: UpdateHistoryItem[] = [\n${historyEntry}`
  );

  fs.writeFileSync(CONFIG.dataFilePath, updatedContent);
  console.log(`[OK] Updated data file with ${newNews.length} news items`);
}

/**
 * Main capture function
 */
async function captureNews() {
  console.log('='.repeat(60));
  console.log('AI News Capture - Starting');
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log('='.repeat(60));

  // Load existing data
  const { content: existingContent, existingIds } = loadExistingData();

  // Fetch from all sources
  const allNews = [];
  for (const source of CONFIG.sources) {
    const news = await fetchWithFirecrawl(source);
    allNews.push(...news);

    // Rate limiting
    await new Promise((r) => setTimeout(r, 1000));
  }

  // Filter duplicates
  const newNews = allNews.filter((n) => !existingIds.has(n.id));
  console.log(`[INFO] Found ${newNews.length} new items (${allNews.length} total)`);

  // Enhance with AI
  const enhancedNews = await enhanceWithAI(newNews);

  // Sort by priority/relevance and limit
  const finalNews = enhancedNews
    .sort((a, b) => {
      const sourceA = CONFIG.sources.find((s) => s.name === a.source);
      const sourceB = CONFIG.sources.find((s) => s.name === b.source);
      return (sourceA?.priority || 9) - (sourceB?.priority || 9);
    })
    .slice(0, CONFIG.maxTotalNews);

  // Update data file
  updateDataFile(finalNews, existingContent);

  console.log('='.repeat(60));
  console.log('AI News Capture - Complete');
  console.log('='.repeat(60));
}

// Run
captureNews().catch(console.error);

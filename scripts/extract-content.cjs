#!/usr/bin/env node
/**
 * Extract lesson content from courseData.ts to individual .md files
 * Run: node scripts/extract-content.js
 */

const fs = require('fs');
const path = require('path');

const COURSE_DATA_PATH = path.join(__dirname, '../src/data/courseData.ts');
const OUTPUT_DIR = path.join(__dirname, '../public/courses/claude-code-master');

// Read the courseData.ts file
const content = fs.readFileSync(COURSE_DATA_PATH, 'utf-8');

// Module mapping for folder names
const MODULE_FOLDERS = {
  '00': '00-mindset',
  '01': '01-fundamentos',
  '02': '02-navegacao',
  '03': '03-context-engineering',
  '04': '04-tools',
  '05': '05-skills',
  '06': '06-mcps',
  '07': '07-hooks',
  '08': '08-subagents',
  '09': '09-ide',
  '10': '10-enterprise',
  '11': '11-mastery'
};

// Extract lessons using regex
// Pattern: createLesson('XX', 'XX-XX-slug', 'Title', 'Description', `content`, {...})
const lessonPattern = /createLesson\(\s*'(\d+)',\s*'([^']+)',\s*'([^']+)',[\s\S]*?`([\s\S]*?)`,\s*\{/g;

let match;
let extractedCount = 0;
const lessons = [];

while ((match = lessonPattern.exec(content)) !== null) {
  const moduleId = match[1];
  const lessonId = match[2];
  const title = match[3];
  const lessonContent = match[4];

  lessons.push({
    moduleId,
    lessonId,
    title,
    content: lessonContent
  });
}

console.log(`Found ${lessons.length} lessons`);

// Create output directories and files
for (const lesson of lessons) {
  const folderName = MODULE_FOLDERS[lesson.moduleId];
  if (!folderName) {
    console.warn(`Unknown module ID: ${lesson.moduleId}`);
    continue;
  }

  const moduleDir = path.join(OUTPUT_DIR, folderName);

  // Create directory if it doesn't exist
  if (!fs.existsSync(moduleDir)) {
    fs.mkdirSync(moduleDir, { recursive: true });
    console.log(`Created directory: ${moduleDir}`);
  }

  // Extract lesson number from ID (e.g., '00-01-paradigm-shift' -> '01')
  const lessonParts = lesson.lessonId.split('-');
  const lessonNum = lessonParts[1] || '01';

  // Generate filename
  const filename = `${lessonNum}-${lessonParts.slice(2).join('-') || 'content'}.md`;
  const filepath = path.join(moduleDir, filename);

  // Write content
  fs.writeFileSync(filepath, lesson.content.trim());
  extractedCount++;
  console.log(`Created: ${filepath}`);
}

console.log(`\n✅ Extracted ${extractedCount} lessons to ${OUTPUT_DIR}`);

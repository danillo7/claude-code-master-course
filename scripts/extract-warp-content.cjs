#!/usr/bin/env node
/**
 * Extract lesson content from warpCourseData.ts to individual .md files
 * Run: node scripts/extract-warp-content.cjs
 */

const fs = require('fs');
const path = require('path');

const COURSE_DATA_PATH = path.join(__dirname, '../src/data/warpCourseData.ts');
const OUTPUT_DIR = path.join(__dirname, '../public/courses/warp-terminal-mastery');

// Read the warpCourseData.ts file
const content = fs.readFileSync(COURSE_DATA_PATH, 'utf-8');

// Module mapping for folder names (Warp uses w01, w02, etc.)
const MODULE_FOLDERS = {
  'w01': '01-introducao',
  'w02': '02-interface',
  'w03': '03-blocks',
  'w04': '04-warp-ai',
  'w05': '05-workflows',
  'w06': '06-customizacao',
  'w07': '07-produtividade',
  'w08': '08-integracao'
};

// Extract lessons using regex
// Pattern: createLesson('wXX', 'wXX-XX-slug', 'Title', 'Description', `content`, {...})
const lessonPattern = /createLesson\(\s*'(w\d+)',\s*'([^']+)',\s*'([^']+)',[\s\S]*?`([\s\S]*?)`,\s*\{/g;

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

  // Extract lesson number from ID (e.g., 'w01-01-what-is-warp' -> '01')
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

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { pascalCase } from 'change-case';

const contentDir =
  process.argv.slice(2).find((argument) => argument !== '--') ??
  '../bootstrap-icons/docs/content/icons';
const indexPath = './src/icons/index.ts';
const outputPath = './docs/icon-search-terms.json';

const componentNames = new Set(
  [...readFileSync(indexPath, 'utf8').matchAll(/export \{ default as (\w+) \}/g)].map(
    ([, name]) => name,
  ),
);
const searchTerms: Record<string, string[]> = {};

for (const file of readdirSync(contentDir).filter((name) => name.endsWith('.md'))) {
  const iconName = path.basename(file, '.md');
  const componentName = pascalCase(`bi-${iconName}`, { mergeAmbiguousCharacters: true });
  if (!componentNames.has(componentName)) continue;

  const markdown = readFileSync(path.join(contentDir, file), 'utf8');
  const tags = markdown.match(/^tags:\s*\n((?:\s+- .+\n?)+)/m)?.[1];
  if (!tags) throw new Error(`Missing tags for ${iconName}.`);

  searchTerms[componentName] = [...tags.matchAll(/^\s+-\s+(.+)$/gm)].map(([, tag]) =>
    tag.trim().replaceAll(/^['"]|['"]$/g, ''),
  );
}

const missingComponents = [...componentNames].filter((name) => !searchTerms[name]);
if (missingComponents.length > 0) {
  throw new Error(`Missing search terms for: ${missingComponents.join(', ')}`);
}

writeFileSync(outputPath, `${JSON.stringify(searchTerms, undefined, 2)}\n`);

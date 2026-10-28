import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { pascalCase } from 'change-case';

const iconsRoot = './node_modules/bootstrap-icons/icons';

const files = readdirSync(iconsRoot);

const svgIconPackageJsonPath = 'node_modules/@mui/material/SvgIcon/package.json';
if (existsSync(svgIconPackageJsonPath)) {
  rmSync(svgIconPackageJsonPath);
}

if (existsSync('./src/icons')) {
  rmSync('./src/icons', { recursive: true, force: true });
}
mkdirSync('./src/icons');

let indexContent = '';

files.forEach((file) => {
  if (!file.endsWith('.svg')) return;
  const iconName = file.slice(0, -4);
  const componentName = pascalCase('bi-' + iconName, {
    mergeAmbiguousCharacters: true,
  });
  const filePath = path.join(iconsRoot, file);
  const fileContent = readFileSync(filePath, 'utf8');
  const svgInnerContent = fileContent
    .slice(fileContent.indexOf('>') + 1, fileContent.indexOf('</svg>'))
    .trim()
    .replaceAll('fill-rule=', 'fillRule=')
    .replaceAll('fill-opacity=', 'fillOpacity=');
  const componentContent = `import React from 'react';
import { IconProps } from '../types';
import SvgIcon from '../SvgIcon';

export default function ${componentName}(props: IconProps) {
  return (
    <SvgIcon {...props} name="${iconName}">
      ${svgInnerContent}
    </SvgIcon>
  );
}
`;
  writeFileSync('./src/icons/' + componentName + '.tsx', componentContent);
  indexContent += `export { default as ${componentName} } from './${componentName}';\n`;
});

writeFileSync('./src/icons/index.ts', indexContent);

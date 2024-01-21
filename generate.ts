import { pascalCase } from 'change-case';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { join } from 'path';

const iconsRoot = './node_modules/bootstrap-icons/icons';

const files = readdirSync(iconsRoot);

const svgIconPackageJsonPath =
  'node_modules/@mui/material/SvgIcon/package.json';
if (existsSync(svgIconPackageJsonPath)) {
  rmSync(svgIconPackageJsonPath);
}

if (existsSync('./src')) {
  rmSync('./src', { recursive: true, force: true });
}
mkdirSync('./src');
mkdirSync('./src/icons');

let indexContent = '';

files.forEach((file) => {
  if (!file.endsWith('.svg')) return;
  const iconName = file.substring(0, file.length - 4);
  const componentName = pascalCase('bi-' + iconName, {
    mergeAmbiguousCharacters: true,
  });
  const filePath = join(iconsRoot, file);
  const fileContent = readFileSync(filePath, 'utf-8');
  const svgInnerContent = fileContent
    .substring(fileContent.indexOf('>') + 1, fileContent.indexOf('</svg>'))
    .trim()
    .replace('fill-rule=', 'fillRule=');
  const componentContent = `import { SVGProps } from 'react';
import cn from 'classnames';

export default function ${componentName}({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} className={cn('bi', 'bi-${iconName}', className)} viewBox="0 0 16 16">
      ${svgInnerContent}
    </svg>
  );
}
`;
  writeFileSync('./src/icons/' + componentName + '.tsx', componentContent);
  indexContent += `export { default as ${componentName} } from './icons/${componentName}';\n`;
});

writeFileSync('./src/index.ts', indexContent);

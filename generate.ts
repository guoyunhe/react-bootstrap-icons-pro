import { pascalCase } from 'change-case';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

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
  const componentContent = `import cn from 'classnames';
import { IconProps } from '../types';

export default function ${componentName}({ className, size = '1em', color = 'currentColor', ...props }: IconProps) {
  return (
    <svg {...props} className={cn('bi', 'bi-${iconName}', className)} viewBox="0 0 16 16" width={size} height={size} fill={color}>
      ${svgInnerContent}
    </svg>
  );
}
`;
  writeFileSync('./src/icons/' + componentName + '.tsx', componentContent);
  indexContent += `export { default as ${componentName} } from './${componentName}';\n`;
});

writeFileSync('./src/icons/index.ts', indexContent);

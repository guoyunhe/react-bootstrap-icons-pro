import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: 'esm',
  platform: 'neutral',
  target: 'es2015',
  unbundle: true,
  dts: true,
  clean: true,
});

import * as esbuild from 'esbuild';
import * as fs from 'fs/promises';

await fs.mkdir('./dist', {recursive: true});
await fs.copyFile('./src/index.html', './dist/index.html');

await esbuild.build({
  entryPoints: [
    './src/main.ts',
    './node_modules/@angular/core/fesm2022/core.mjs',
    './node_modules/@angular/core/fesm2022/primitives/signals.mjs',
  ],
  bundle: true,
  outdir: './dist',
  entryNames: '[dir]/[name]',
  format: 'esm',
  sourcemap: true,
  tsconfig: './tsconfig.json',
  loader: { '.css': 'text', '.html': 'text' },
  external: ['@angular/core']
})
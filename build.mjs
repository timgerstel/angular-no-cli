import * as esbuild from 'esbuild';
import * as fs from 'fs/promises';

await fs.copyFile('./src/index.html', './dist/index.html');
await fs.copyFile('./src/app/app.component.html', './dist/app.component.html');
await fs.copyFile('./src/app/app.component.css', './dist/app.component.css');

await esbuild.build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  outfile: './dist/app.mjs',
  format: 'esm',
  sourcemap: true,
  tsconfig: './tsconfig.json',
})
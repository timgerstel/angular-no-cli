import * as esbuild from 'esbuild';
import * as fs from 'fs/promises';

await fs.copyFile('./src/index.html', './dist/index.html');
await fs.copyFile('./src/app/app.component.html', './dist/app.component.html');

await esbuild.build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  outfile: './dist/app.js',
  sourcemap: true,
  tsconfig: './tsconfig.json',
})
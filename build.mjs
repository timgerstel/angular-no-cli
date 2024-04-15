import * as esbuild from 'esbuild';
import * as fs from 'fs/promises';

await fs.mkdir('./dist', {recursive: true});
await fs.copyFile('./src/index.html', './dist/index.html');

await esbuild.build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  outfile: './dist/app.mjs',
  format: 'esm',
  sourcemap: true,
  tsconfig: './tsconfig.json',
  loader: { '.css': 'text', '.html': 'text' },
})
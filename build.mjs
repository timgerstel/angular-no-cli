import * as esbuild from 'esbuild';
import * as fs from 'fs/promises';

await fs.mkdir('./dist', {recursive: true});
await fs.copyFile('./src/index.html', './dist/index.html');

await esbuild.build({
  entryPoints: [
    './src/main.ts',
    './node_modules/@angular/core/fesm2022/core.mjs',
    './node_modules/@angular/core/fesm2022/primitives/signals.mjs',
    './node_modules/@angular/common/fesm2022/common.mjs',
    './node_modules/@angular/common/fesm2022/http.mjs',
    './node_modules/@angular/compiler/fesm2022/compiler.mjs',
    './node_modules/@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs',
    './node_modules/rxjs/dist/esm/index.js'
  ],
  bundle: true,
  outdir: './dist',
  entryNames: '[dir]/[name]',
  format: 'esm',
  sourcemap: true,
  tsconfig: './tsconfig.json',
  loader: { '.css': 'text', '.html': 'text' },
  external: ['@angular/core', '@angular/common', '@angular/common/http', '@angular/compiler', '@angular/platform-browser-dynamic']
})
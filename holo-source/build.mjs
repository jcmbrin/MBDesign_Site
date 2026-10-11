import { build } from 'esbuild';
import { rename } from 'node:fs/promises';
await build({entryPoints:['src/portfolio.jsx'],bundle:true,minify:true,jsx:'automatic',outfile:'../assets/js/portfolio-holo.js',loader:{'.css':'css'}});
await rename('../assets/js/portfolio-holo.css','../assets/css/portfolio-holo.css');
console.log('Built assets/js/portfolio-holo.js and assets/css/portfolio-holo.css');

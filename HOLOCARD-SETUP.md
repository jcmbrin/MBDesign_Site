# Portfolio HoloCards

All 13 portfolio thumbnails use the exact React Bits JS-CSS HoloCard component with the `bursts` preset. Your Bootstrap grid, Isotope filters, image proportions, project links and fullscreen menu are retained.

## Run the site

Open `portfolio.html` through VS Code Live Server. Everything needed at runtime is included locally: `assets/js/portfolio-holo.js` and `assets/css/portfolio-holo.css`. No npm install is needed to view it.

The effect responds to mouse movement and touch. Idle animation is disabled for the grid. HoloCard respects reduced-motion preferences and keeps the image visible if WebGL2 is unavailable.

## Edit or rebuild

Edit `holo-source/src/portfolio.jsx` for HoloCard settings and `holo-source/src/portfolio.css` for the grid integration. From `holo-source`, run:

```sh
pnpm install
pnpm run build
```

The exact component and original registry JSON are included in `holo-source`. The registry lists no additional dependencies; React and React DOM host it, and esbuild creates the ready-to-use assets.

Merge this folder into your existing project. Git history is omitted from the ZIP so it will not overwrite your repository history.

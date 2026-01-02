import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_wuPtG1JH.mjs';
import { manifest } from './manifest_BGRglhez.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_idb-keyval@6.2.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "35c27e67-87a6-4804-8585-b3dcd79b78ba",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { e as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DegiLi10.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/ubuntu/spindonesia-clean/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "/home/ubuntu/spindonesia-clean/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "/home/ubuntu/spindonesia-clean/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

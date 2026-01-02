import { n as decodeKey } from './chunks/astro/server_DegiLi10.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DpduY-bw.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ubuntu/spindonesia-clean/","cacheDir":"file:///home/ubuntu/spindonesia-clean/node_modules/.astro/","outDir":"file:///home/ubuntu/spindonesia-clean/dist/","srcDir":"file:///home/ubuntu/spindonesia-clean/src/","publicDir":"file:///home/ubuntu/spindonesia-clean/public/","buildClientDir":"file:///home/ubuntu/spindonesia-clean/dist/client/","buildServerDir":"file:///home/ubuntu/spindonesia-clean/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_idb-keyval@6.2.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-j7pv25f6]{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;background:linear-gradient(135deg,#667eea,#764ba2);min-height:100vh;display:flex;align-items:center;justify-content:center;color:#fff;padding:20px}.container[data-astro-cid-j7pv25f6]{max-width:800px;text-align:center;animation:fadeIn 1s ease-in}@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;margin-bottom:1rem;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.subtitle[data-astro-cid-j7pv25f6]{font-size:1.5rem;margin-bottom:2rem;opacity:.9}.features[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin:3rem 0}.feature[data-astro-cid-j7pv25f6]{background:#ffffff1a;backdrop-filter:blur(10px);padding:2rem;border-radius:15px;border:1px solid rgba(255,255,255,.2);transition:transform .3s ease,box-shadow .3s ease}.feature[data-astro-cid-j7pv25f6]:hover{transform:translateY(-5px);box-shadow:0 10px 30px #0000004d}.feature-icon[data-astro-cid-j7pv25f6]{font-size:3rem;margin-bottom:1rem}.feature[data-astro-cid-j7pv25f6] h3[data-astro-cid-j7pv25f6]{font-size:1.3rem;margin-bottom:.5rem}.feature[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{opacity:.8;line-height:1.6}.cta[data-astro-cid-j7pv25f6]{margin-top:3rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}.btn[data-astro-cid-j7pv25f6]{display:inline-block;padding:1rem 2rem;background:#fff;color:#667eea;text-decoration:none;border-radius:50px;font-weight:600;transition:transform .3s ease,box-shadow .3s ease;box-shadow:0 5px 15px #0003}.btn[data-astro-cid-j7pv25f6]:hover{transform:translateY(-2px);box-shadow:0 8px 20px #0000004d}.btn-secondary[data-astro-cid-j7pv25f6]{background:#fff3;color:#fff;backdrop-filter:blur(10px)}.footer[data-astro-cid-j7pv25f6]{margin-top:4rem;opacity:.7;font-size:.9rem}.badge[data-astro-cid-j7pv25f6]{display:inline-block;background:#fff3;padding:.5rem 1rem;border-radius:20px;margin:.5rem;font-size:.9rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ubuntu/spindonesia-clean/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_idb-keyval@6.2.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BGRglhez.mjs","/home/ubuntu/spindonesia-clean/node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_idb-keyval@6.2.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_jNpQbBc5.mjs","/home/ubuntu/spindonesia-clean/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.2.3_react@19.2.3__react@19.2_5e8e6aec74bc664bfb522bca69b3edd7/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.IzpO0wYW.js","@astrojs/react/client.js":"_astro/client.DEruH62g.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/_astro/client.DEruH62g.js","/_astro/index.DKytmrpT.js","/_astro/keystatic-page.IzpO0wYW.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"OAb6cT7NcIycM1COlwsyjbZH/64o6NLiKmclgI+Wcro="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

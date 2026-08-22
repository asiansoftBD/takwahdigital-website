module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},26758,a=>{a.v("/_next/static/media/favicon.2vob68tjqpejf.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},38872,a=>{"use strict";let b={src:a.i(26758).default,width:256,height:256};a.s(["default",0,b])},41648,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/app/portfolio/PortfolioClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/app/portfolio/PortfolioClient.tsx","default")},7744,a=>{"use strict";var b=a.i(41648);a.n(b)},63291,a=>{"use strict";var b=a.i(7997),c=a.i(95936),d=a.i(44425),e=a.i(7744),f=a.i(66879);async function g(){let a=await (0,f.getPublishedProjects)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.default,{}),(0,b.jsxs)("main",{className:"min-h-screen bg-white text-[#0D1A63]",children:[(0,b.jsxs)("section",{className:"relative overflow-hidden bg-[#0D1A63] px-6 py-24 text-white lg:px-8",children:[(0,b.jsx)("div",{className:"absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#2845D6]/40 blur-3xl"}),(0,b.jsx)("div",{className:"absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F68048]/20 blur-3xl"}),(0,b.jsxs)("div",{className:"relative mx-auto max-w-7xl",children:[(0,b.jsx)("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]",children:"Portfolio"}),(0,b.jsxs)("h1",{className:"mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl",children:["Creative work built for"," ",(0,b.jsx)("span",{className:"text-[#F68048]",children:"digital growth."})]}),(0,b.jsx)("p",{className:"mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl",children:"Explore selected work across social media content, advertising creatives, HTML5 banners, video, and digital marketing projects."})]})]}),(0,b.jsx)("section",{className:"px-6 py-20 sm:py-24 lg:px-8",children:(0,b.jsx)("div",{className:"mx-auto max-w-7xl",children:(0,b.jsx)(e.default,{projects:a})})}),(0,b.jsx)("section",{className:"bg-slate-50 px-6 py-20 sm:py-24 lg:px-8",children:(0,b.jsxs)("div",{className:"mx-auto max-w-4xl text-center",children:[(0,b.jsx)("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]",children:"Have a Project?"}),(0,b.jsx)("h2",{className:"mt-4 text-3xl font-bold tracking-tight sm:text-4xl",children:"Let's create something that gets attention."}),(0,b.jsx)("p",{className:"mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600",children:"Tell me about your project, campaign, or creative requirements and let's explore the right digital marketing approach."}),(0,b.jsx)(c.default,{href:"/contact",className:"mt-8 inline-flex rounded-lg bg-[#F68048] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#e66f3b] hover:shadow-lg",children:"Start a Project"})]})})]})]})}a.s(["default",0,g])},54839,function(a){a.n(a.i(63291))},98677,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/Navbar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/Navbar.tsx","default")},44425,a=>{"use strict";var b=a.i(98677);a.n(b)},66879,a=>{"use strict";let b=Symbol.for("__cloudflare-context__");function c(a={async:!1}){return a.async?e():function(){let a=d();if(a)return a;if(function(){let a=globalThis;return a.__NEXT_DATA__?.nextExport===!0}())throw Error("\n\nERROR: `getCloudflareContext` has been called in sync mode in either a static route or at the top level of a non-static one, both cases are not allowed but can be solved by either:\n  - make sure that the call is not at the top level and that the route is not static\n  - call `getCloudflareContext({async: true})` to use the `async` mode\n  - avoid calling `getCloudflareContext` in the route\n");throw Error(g)}()}function d(){return globalThis[b]}async function e(){let a=d();if(a)return a;{var c;let a=await f();return c=a,globalThis[b]=c,a}}async function f(a){let{getPlatformProxy:b}=await import(`${"__wrangler".replaceAll("_","")}`),c=a?.environment??process.env.NEXT_DEV_WRANGLER_ENV,{env:d,cf:e,ctx:f}=await b({...a,envFiles:[],environment:c});return{env:d,cf:e,ctx:f}}let g=`

ERROR: \`getCloudflareContext\` has been called without having called \`initOpenNextCloudflareForDev\` from the Next.js config file.
You should update your Next.js config file as shown below:

   \`\`\`
   // next.config.mjs

   import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

   initOpenNextCloudflareForDev();

   const nextConfig = { ... };
   export default nextConfig;
   \`\`\`

`;async function h(){let{env:a}=await c({async:!0});return(await a.DB.prepare(`
      SELECT
        cs.id,
        cs.title,
        cs.slug,
        cs.client_name,
        cs.industry,
        cs.summary,
        cs.challenge,
        cs.objectives,
        cs.strategy,
        cs.execution,
        cs.results,
        cs.metrics,
        cs.featured_media_id,
        cs.is_featured,
        cs.is_published,
        cs.seo_title,
        cs.seo_description,
        cs.created_at,
        cs.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM case_studies cs
      LEFT JOIN media fm
        ON fm.id = cs.featured_media_id
      WHERE cs.is_published = 1
      ORDER BY cs.is_featured DESC, cs.id DESC
      `).all()).results}async function i(a){let{env:b}=await c({async:!0});return await b.DB.prepare(`
      SELECT
        cs.id,
        cs.title,
        cs.slug,
        cs.client_name,
        cs.industry,
        cs.summary,
        cs.challenge,
        cs.objectives,
        cs.strategy,
        cs.execution,
        cs.results,
        cs.metrics,
        cs.featured_media_id,
        cs.is_featured,
        cs.is_published,
        cs.seo_title,
        cs.seo_description,
        cs.created_at,
        cs.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM case_studies cs
      LEFT JOIN media fm
        ON fm.id = cs.featured_media_id
      WHERE cs.slug = ?
        AND cs.is_published = 1
      LIMIT 1
      `).bind(a).first()??null}async function j(){let{env:a}=await c({async:!0});return(await a.DB.prepare(`
      SELECT
        id,
        title,
        slug,
        short_description,
        description,
        icon,
        sort_order,
        is_featured,
        is_published,
        seo_title,
        seo_description,
        created_at,
        updated_at
      FROM services
      WHERE is_published = 1
      ORDER BY sort_order ASC, id ASC
      `).all()).results}async function k(){let{env:a}=await c({async:!0});return(await a.DB.prepare(`
    SELECT
      p.id,
      p.title,
      p.slug,
      p.category,
      p.client_name,
      p.short_description,
      p.description,
      p.challenge,
      p.strategy,
      p.execution,
      p.results,
      p.featured_media_id,
      p.project_url,
      p.project_date,
      p.is_featured,
      p.is_published,
      p.seo_title,
      p.seo_description,
      p.created_at,
      p.updated_at,
      fm.file_name AS featured_media_file_name,
      fm.storage_key AS featured_media_storage_key,
      fm.alt_text AS featured_media_alt_text,
      fm.caption AS featured_media_caption
    FROM projects p
    LEFT JOIN media fm ON fm.id = p.featured_media_id
    WHERE p.is_published = 1
    ORDER BY p.is_featured DESC, p.project_date DESC, p.id ASC
    `).all()).results}async function l(a){let{env:b}=await c({async:!0});return await b.DB.prepare(`
      SELECT
        id,
        title,
        slug,
        category,
        client_name,
        short_description,
        description,
        challenge,
        strategy,
        execution,
        results,
        featured_media_id,
        project_url,
        project_date,
        is_featured,
        is_published,
        seo_title,
        seo_description,
        created_at,
        updated_at
      FROM projects
      WHERE slug = ? AND is_published = 1
      LIMIT 1
      `).bind(a).first()??null}async function m(a){let{env:b}=await c({async:!0});return(await b.DB.prepare(`
      SELECT
        m.id,
        m.file_name,
        m.storage_key,
        m.file_url,
        m.file_type,
        m.mime_type,
        m.alt_text,
        m.caption,
        m.width,
        m.height,
        pm.sort_order
      FROM project_media pm
      INNER JOIN media m ON m.id = pm.media_id
      WHERE pm.project_id = ?
      ORDER BY pm.sort_order ASC, m.id ASC
      `).bind(a).all()).results}async function n(){let{env:a}=await c({async:!0});return(await a.DB.prepare(`
      SELECT
        a.id,
        a.title,
        a.slug,
        a.excerpt,
        a.content,
        a.featured_media_id,
        a.category,
        a.author,
        a.published_at,
        a.is_published,
        a.seo_title,
        a.seo_description,
        a.created_at,
        a.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM articles a
      LEFT JOIN media fm
        ON fm.id = a.featured_media_id
      WHERE a.is_published = 1
      ORDER BY a.published_at DESC, a.id DESC
      `).all()).results}async function o(a){let{env:b}=await c({async:!0});return await b.DB.prepare(`
      SELECT
        a.id,
        a.title,
        a.slug,
        a.excerpt,
        a.content,
        a.featured_media_id,
        a.category,
        a.author,
        a.published_at,
        a.is_published,
        a.seo_title,
        a.seo_description,
        a.created_at,
        a.updated_at,
        fm.file_name AS featured_media_file_name,
        fm.storage_key AS featured_media_storage_key,
        fm.alt_text AS featured_media_alt_text,
        fm.caption AS featured_media_caption
      FROM articles a
      LEFT JOIN media fm
        ON fm.id = a.featured_media_id
      WHERE a.slug = ?
        AND a.is_published = 1
      LIMIT 1
      `).bind(a).first()??null}async function p(){let{env:a}=await c({async:!0});return(await a.DB.prepare(`
      SELECT
        c.id,
        c.title,
        c.issuer,
        c.description,
        c.issue_date,
        c.credential_id,
        c.credential_url,
        c.media_id,
        c.is_featured,
        c.is_published,
        c.created_at,
        c.updated_at,

        m.file_name AS media_file_name,
        m.storage_key AS media_storage_key,
        m.alt_text AS media_alt_text,
        m.caption AS media_caption

      FROM certificates c

      LEFT JOIN media m
        ON m.id = c.media_id

      WHERE c.is_published = 1

      ORDER BY
        c.is_featured DESC,
        c.issue_date DESC,
        c.id DESC
      `).all()).results}a.s(["getProjectMedia",0,m,"getPublishedArticleBySlug",0,o,"getPublishedArticles",0,n,"getPublishedCaseStudies",0,h,"getPublishedCaseStudyBySlug",0,i,"getPublishedCertificates",0,p,"getPublishedProjectBySlug",0,l,"getPublishedProjects",0,k,"getPublishedServices",0,j],66879)},25648,a=>{"use strict";var b=a.i(12948),c=a.i(67436),d=a.i(94331);a.i(70408);let e=(0,b.instrumentModuleGetter)(()=>a.r(38872)),f=(0,b.instrumentModuleGetter)(()=>a.r(70864)),g=(0,b.instrumentModuleGetter)(()=>a.r(43619)),h=(0,b.instrumentModuleGetter)(()=>a.r(13718)),i=(0,b.instrumentModuleGetter)(()=>a.r(18198)),j=(0,b.instrumentModuleGetter)(()=>a.r(62212)),k=["",{children:["portfolio",{children:["__PAGE__",{},{metadata:{},page:[(0,b.instrumentModuleGetter)(()=>a.r(54839)),"[project]/app/portfolio/page.tsx"]},[]]},{metadata:{}},[]]},{metadata:{icon:[async()=>{let a=(0,d.interopDefault)(await e());return[{url:`/favicon.ico?${a.src.split("/").splice(-1)[0]}`,sizes:`${a.width}x${a.height}`,type:"image/x-icon"}]}]},layout:[f,"[project]/app/layout.tsx"],"not-found":[g,"[project]/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[h,"[project]/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[i,"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js"],"global-error":[j,"[project]/node_modules/next/dist/client/components/builtin/global-error.js"]},[]],l=a.r.bind(a),m=a.l.bind(a),n=(0,c.createAppPageEntrypoint)({tree:k,page:"/portfolio/page",pathname:"/portfolio",require:l,loadChunk:m,interopDefault:d.interopDefault}),o=n.__next_app__,p=n.routeModule,q=n.handler;a.s(["__next_app__",0,o,"handler",0,q,"routeModule",0,p],20594),a.i(20594);var r=a.i(22922);a.s(["ClientPageRoot",()=>r.ClientPageRoot,"ClientSegmentRoot",()=>r.ClientSegmentRoot,"Fragment",()=>r.Fragment,"HTTPAccessFallbackBoundary",()=>r.HTTPAccessFallbackBoundary,"InstantValidation",()=>r.InstantValidation,"LayoutRouter",()=>r.LayoutRouter,"LoadingBoundaryProvider",()=>r.LoadingBoundaryProvider,"Postpone",()=>r.Postpone,"RenderFromTemplateContext",()=>r.RenderFromTemplateContext,"RootLayoutBoundary",()=>r.RootLayoutBoundary,"SegmentViewNode",()=>r.SegmentViewNode,"SegmentViewStateNode",()=>r.SegmentViewStateNode,"__next_app__",0,o,"captureOwnerStack",()=>r.captureOwnerStack,"collectPrefetchHints",()=>r.collectPrefetchHints,"collectSegmentData",()=>r.collectSegmentData,"createElement",()=>r.createElement,"createMetadataComponents",()=>r.createMetadataComponents,"createPrerenderParamsForClientSegment",()=>r.createPrerenderParamsForClientSegment,"createPrerenderSearchParamsForClientPage",()=>r.createPrerenderSearchParamsForClientPage,"createServerParamsForServerSegment",()=>r.createServerParamsForServerSegment,"createServerSearchParamsForServerPage",()=>r.createServerSearchParamsForServerPage,"createTemporaryReferenceSet",()=>r.createTemporaryReferenceSet,"decodeAction",()=>r.decodeAction,"decodeFormState",()=>r.decodeFormState,"decodeReply",()=>r.decodeReply,"handler",0,q,"isEmptyHTMLPrelude",()=>r.isEmptyHTMLPrelude,"patchFetch",()=>r.patchFetch,"preconnect",()=>r.preconnect,"preloadFont",()=>r.preloadFont,"preloadStyle",()=>r.preloadStyle,"prerender",()=>r.prerender,"prerenderToNodeStream",()=>r.prerenderToNodeStream,"renderToPipeableStream",()=>r.renderToPipeableStream,"renderToReadableStream",()=>r.renderToReadableStream,"routeModule",0,p,"serverHooks",()=>r.serverHooks,"taintObjectReference",()=>r.taintObjectReference],25648)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__17g4o6c._.js.map
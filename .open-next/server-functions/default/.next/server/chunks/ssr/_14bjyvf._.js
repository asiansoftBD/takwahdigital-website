module.exports=[35188,a=>{"use strict";var b=a.i(7997);a.i(70396);var c=a.i(73727),d=a.i(95936),e=a.i(44425),f=a.i(66879);async function g({params:a}){let{slug:h}=await a,i=await (0,f.getPublishedCaseStudyBySlug)(h);return i||(0,c.notFound)(),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(e.default,{}),(0,b.jsxs)("main",{className:"min-h-screen bg-white text-[#0D1A63]",children:[(0,b.jsx)("section",{className:"bg-[#0D1A63] px-6 py-20 text-white lg:px-8",children:(0,b.jsxs)("div",{className:"mx-auto max-w-5xl",children:[(0,b.jsxs)("div",{className:"flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.15em]",children:[i.industry&&(0,b.jsx)("span",{className:"rounded-full bg-white/10 px-4 py-2 text-blue-100",children:i.industry}),i.client_name&&(0,b.jsx)("span",{className:"rounded-full bg-[#F68048] px-4 py-2 text-white",children:i.client_name})]}),(0,b.jsx)("h1",{className:"mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl",children:i.title}),i.summary&&(0,b.jsx)("p",{className:"mt-6 max-w-3xl text-lg leading-8 text-blue-100",children:i.summary})]})}),(0,b.jsx)("section",{className:"px-6 pt-12 lg:px-8",children:(0,b.jsx)("div",{className:"mx-auto max-w-5xl",children:i.featured_media_storage_key?(0,b.jsxs)("figure",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg",children:[(0,b.jsx)("div",{className:"flex items-center justify-center p-3 sm:p-5",children:(0,b.jsx)("img",{src:`/api/assets?key=${encodeURIComponent(i.featured_media_storage_key)}`,alt:i.featured_media_alt_text||i.title,className:"h-auto max-h-[700px] w-auto max-w-full object-contain"})}),i.featured_media_caption&&(0,b.jsx)("figcaption",{className:"border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600",children:i.featured_media_caption})]}):(0,b.jsx)("div",{className:"flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50",children:(0,b.jsx)("span",{className:"text-sm font-semibold text-slate-400",children:"Case Study Featured Image"})})})}),(0,b.jsx)("section",{className:"px-6 py-16 lg:px-8",children:(0,b.jsxs)("div",{className:"mx-auto max-w-5xl",children:[(0,b.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10",children:[i.summary&&(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"text-2xl font-bold text-[#0D1A63]",children:"Case Study Overview"}),(0,b.jsx)("p",{className:"mt-4 leading-8 text-slate-600",children:i.summary})]}),i.challenge&&(0,b.jsxs)("div",{className:"mt-12 border-t border-slate-200 pt-10",children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]",children:"01"}),(0,b.jsx)("h2",{className:"mt-2 text-2xl font-bold text-[#0D1A63]",children:"Challenge"}),(0,b.jsx)("p",{className:"mt-4 leading-8 text-slate-600",children:i.challenge})]}),i.objectives&&(0,b.jsxs)("div",{className:"mt-12 border-t border-slate-200 pt-10",children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]",children:"02"}),(0,b.jsx)("h2",{className:"mt-2 text-2xl font-bold text-[#0D1A63]",children:"Objectives"}),(0,b.jsx)("p",{className:"mt-4 leading-8 text-slate-600",children:i.objectives})]}),i.strategy&&(0,b.jsxs)("div",{className:"mt-12 border-t border-slate-200 pt-10",children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]",children:"03"}),(0,b.jsx)("h2",{className:"mt-2 text-2xl font-bold text-[#0D1A63]",children:"Strategy"}),(0,b.jsx)("p",{className:"mt-4 leading-8 text-slate-600",children:i.strategy})]}),i.execution&&(0,b.jsxs)("div",{className:"mt-12 border-t border-slate-200 pt-10",children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]",children:"04"}),(0,b.jsx)("h2",{className:"mt-2 text-2xl font-bold text-[#0D1A63]",children:"Execution"}),(0,b.jsx)("p",{className:"mt-4 leading-8 text-slate-600",children:i.execution})]}),i.results&&(0,b.jsxs)("div",{className:"mt-12 border-t border-slate-200 pt-10",children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]",children:"05"}),(0,b.jsx)("h2",{className:"mt-2 text-2xl font-bold text-[#0D1A63]",children:"Results"}),(0,b.jsx)("p",{className:"mt-4 leading-8 text-slate-600",children:i.results})]}),i.metrics&&(0,b.jsxs)("div",{className:"mt-12 border-t border-slate-200 pt-10",children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]",children:"06"}),(0,b.jsx)("h2",{className:"mt-2 text-2xl font-bold text-[#0D1A63]",children:"Key Metrics"}),(0,b.jsx)("p",{className:"mt-4 leading-8 text-slate-600",children:i.metrics})]}),(0,b.jsx)("div",{className:"mt-12 border-t border-slate-200 pt-8",children:(0,b.jsxs)("div",{className:"grid gap-6 sm:grid-cols-2",children:[i.client_name&&(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500",children:"Client"}),(0,b.jsx)("p",{className:"mt-2 font-semibold text-[#0D1A63]",children:i.client_name})]}),i.industry&&(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500",children:"Industry"}),(0,b.jsx)("p",{className:"mt-2 font-semibold text-[#0D1A63]",children:i.industry})]})]})})]}),(0,b.jsxs)("div",{className:"mt-10 flex flex-wrap items-center justify-between gap-4",children:[(0,b.jsxs)(d.default,{href:"/case-studies",className:"inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#2845D6] shadow-sm transition hover:border-[#2845D6] hover:shadow-md",children:[(0,b.jsx)("span",{className:"mr-2",children:"←"}),"Back to Case Studies"]}),(0,b.jsxs)(d.default,{href:"/contact",className:"inline-flex items-center rounded-lg bg-[#2845D6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1A2CA3] hover:shadow-md",children:["Discuss a Similar Project",(0,b.jsx)("span",{className:"ml-2",children:"→"})]})]})]})})]})]})}a.s(["default",0,g])},82743,function(a){a.n(a.i(35188))},98677,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/Navbar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/Navbar.tsx","default")},44425,a=>{"use strict";var b=a.i(98677);a.n(b)},66879,a=>{"use strict";let b=Symbol.for("__cloudflare-context__");function c(a={async:!1}){return a.async?e():function(){let a=d();if(a)return a;if(function(){let a=globalThis;return a.__NEXT_DATA__?.nextExport===!0}())throw Error("\n\nERROR: `getCloudflareContext` has been called in sync mode in either a static route or at the top level of a non-static one, both cases are not allowed but can be solved by either:\n  - make sure that the call is not at the top level and that the route is not static\n  - call `getCloudflareContext({async: true})` to use the `async` mode\n  - avoid calling `getCloudflareContext` in the route\n");throw Error(g)}()}function d(){return globalThis[b]}async function e(){let a=d();if(a)return a;{var c;let a=await f();return c=a,globalThis[b]=c,a}}async function f(a){let{getPlatformProxy:b}=await import(`${"__wrangler".replaceAll("_","")}`),c=a?.environment??process.env.NEXT_DEV_WRANGLER_ENV,{env:d,cf:e,ctx:f}=await b({...a,envFiles:[],environment:c});return{env:d,cf:e,ctx:f}}let g=`

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
      `).all()).results}a.s(["getProjectMedia",0,m,"getPublishedArticleBySlug",0,o,"getPublishedArticles",0,n,"getPublishedCaseStudies",0,h,"getPublishedCaseStudyBySlug",0,i,"getPublishedCertificates",0,p,"getPublishedProjectBySlug",0,l,"getPublishedProjects",0,k,"getPublishedServices",0,j],66879)}];

//# sourceMappingURL=_14bjyvf._.js.map
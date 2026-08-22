module.exports=[18285,e=>{"use strict";var t=e.i(83272);async function a(){let{env:e}=await (0,t.getCloudflareContext)({async:!0});return(await e.DB.prepare(`
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
    `).all()).results}async function r(e){let{env:a}=await (0,t.getCloudflareContext)({async:!0});return(await a.DB.prepare(`
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
      `).bind(e).all()).results}async function i(){try{let{env:e}=(0,t.getCloudflareContext)(),i=await e.DB.prepare(`
        SELECT
          id,
          title,
          slug,
          is_published
        FROM services
        WHERE is_published = 1
        ORDER BY id ASC
        `).all(),n=await a(),s=n.length>0?await r(n[0].id):[];return Response.json({success:!0,services:i.results,projects:n,projectMedia:s})}catch(e){return console.error("Database test error:",e),Response.json({success:!1,error:"Database connection failed"},{status:500})}}e.s(["GET",0,i],18285)},15863,e=>{"use strict";var t=e.i(47909),a=e.i(74017),r=e.i(96250),i=e.i(59756),n=e.i(61916),s=e.i(74677),o=e.i(69741),l=e.i(16795),d=e.i(87718),u=e.i(95169),p=e.i(47587),c=e.i(66012),h=e.i(70101),m=e.i(26937),R=e.i(10372),f=e.i(93695);e.i(52474);var _=e.i(220);let E=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/test-db/route",pathname:"/api/test-db",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/test-db/route.ts",nextConfigOutput:"standalone",userland:()=>e.r(18285),...{}}),{workAsyncStorage:g,workUnitAsyncStorage:v,serverHooks:C}=E;async function w(e,t,r){r.requestMeta&&(0,i.setRequestMeta)(e,r.requestMeta),E.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let g="/api/test-db/route";g=g.replace(/\/index$/,"")||"/";let v=await E.prepare(e,t,{srcPage:g,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:C,deploymentId:w,params:x,nextConfig:y,parsedUrl:A,isDraftMode:S,prerenderManifest:b,routerServerContext:T,isOnDemandRevalidate:O,revalidateOnlyGenerated:N,resolvedPathname:P,clientReferenceManifest:D,serverActionsManifest:H}=v,I=(0,o.normalizeAppPath)(g),q=!!(b.dynamicRoutes[I]||b.routes[P]),M=async()=>((null==T?void 0:T.render404)?await T.render404(e,t,A,!1):t.end("This page could not be found"),null);if(q&&!S){let e=!!b.routes[P],t=b.dynamicRoutes[I];if(t&&!1===t.fallback&&!e){if(y.adapterPath)return await M();throw new f.NoFallbackError}}let k=null;!q||E.isDev||S||(k="/index"===(k=P)?"/":k);let j=!0===E.isDev||!q,U=q&&!j;H&&D&&(0,s.setManifestsSingleton)({page:g,clientReferenceManifest:D,serverActionsManifest:H});let B=e.method||"GET",F=(0,n.getTracer)(),L=F.getActiveScopeSpan(),K=!!(null==T?void 0:T.isWrappedByNextServer),$=!!(0,i.getRequestMeta)(e,"minimalMode"),G=(0,i.getRequestMeta)(e,"incrementalCache")||await E.getIncrementalCache(e,y,b,$);null==G||G.resetRequestCache(),globalThis.__incrementalCache=G;let W={params:x,previewProps:b.preview,renderOpts:{experimental:{authInterrupts:!!y.experimental.authInterrupts,useCacheTimeout:y.experimental.useCacheTimeout},cacheComponents:!!y.cacheComponents,validationLevel:y.experimental.instantInsights.validationLevel,supportsDynamicResponse:j,incrementalCache:G,hmrRefreshHash:(0,i.getRequestMeta)(e,"hmrRefreshHash"),cacheLifeProfiles:y.cacheLife,staticPageGenerationTimeout:y.staticPageGenerationTimeout,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r,i)=>E.onRequestError(e,t,r,i,T)},sharedContext:{buildId:C,deploymentId:w}},V=new l.NodeNextRequest(e),X=new l.NodeNextResponse(t),Y=d.NextRequestAdapter.fromNodeNextRequest(V,(0,d.signalFromNodeResponse)(t)),J=async({previousCacheEntry:a})=>{try{if(!$&&O&&N&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await E.handle(Y,W);e.fetchMetrics=W.renderOpts.fetchMetrics;let n=W.renderOpts.pendingWaitUntil;n&&r.waitUntil&&(r.waitUntil(n),n=void 0);let s=W.renderOpts.collectedTags;if(!q)return await (0,c.sendResponse)(V,X,i,n),null;{let e=await i.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(i.headers);s&&(t[R.NEXT_CACHE_TAGS_HEADER]=s),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==W.renderOpts.collectedRevalidate&&!(W.renderOpts.collectedRevalidate>=R.INFINITE_CACHE)&&W.renderOpts.collectedRevalidate,r=void 0===W.renderOpts.collectedExpire||W.renderOpts.collectedExpire>=R.INFINITE_CACHE?!1!==a&&a>0?y.expireTime:void 0:W.renderOpts.collectedExpire;return{value:{kind:_.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await E.onRequestError(e,t,{routerKind:"App Router",routePath:g,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:O})},!1,T),t}},z=async(i,s)=>{try{var o,l;let i=await E.handleResponse({req:e,nextConfig:y,cacheKey:k,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:b,isRoutePPREnabled:!1,isOnDemandRevalidate:O,revalidateOnlyGenerated:N,responseGenerator:J,waitUntil:r.waitUntil,isMinimalMode:$});if(!q)return;if((null==i||null==(o=i.value)?void 0:o.kind)!==_.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==i||null==(l=i.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});$||t.setHeader("x-nextjs-cache",O?"REVALIDATED":i.isMiss?"MISS":i.isStale?"STALE":"HIT"),S&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let n=(0,h.fromNodeOutgoingHttpHeaders)(i.value.headers);$&&q||n.delete(R.NEXT_CACHE_TAGS_HEADER),!i.cacheControl||t.getHeader("Cache-Control")||n.get("Cache-Control")||n.set("Cache-Control",(0,m.getCacheControlHeader)(i.cacheControl)),await (0,c.sendResponse)(V,X,new Response(i.value.body,{headers:n,status:i.value.status||200}));return}catch(t){if(t instanceof f.NoFallbackError||await E.onRequestError(e,t,{routerKind:"App Router",routePath:I,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:O})},!1,T),q)throw t;await (0,c.sendResponse)(V,X,new Response(null,{status:500}));return}finally{(()=>{if(!i)return;let e=t.statusCode;i.setAttributes({"http.status_code":e,"next.rsc":!1}),e&&e>=500&&(i.setStatus({code:n.SpanStatusCode.ERROR}),i.setAttribute("error.type",e.toString()));let a=F.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==u.BaseServerSpan.handleRequest)return console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route")||I,o=`${B} ${r}`;i.setAttributes({"next.route":r,"http.route":r,"next.span_name":o}),i.updateName(o),s&&s!==i&&(s.setAttribute("http.route",r),s.updateName(o))})()}};if(K&&L)await z(L,void 0);else{let t=F.getActiveScopeSpan();await F.withPropagatedContext(e.headers,()=>F.trace(u.BaseServerSpan.handleRequest,{spanName:`${B} ${g}`,kind:n.SpanKind.SERVER,attributes:{"http.method":B,"http.target":e.url}},e=>z(e,t)),void 0,!K)}}e.s(["handler",0,w,"patchFetch",0,function(){return(0,r.patchFetch)({workAsyncStorage:g,workUnitAsyncStorage:v})},"routeModule",0,E,"serverHooks",0,C,"workAsyncStorage",0,g,"workUnitAsyncStorage",0,v])}];

//# sourceMappingURL=_1lvrkqd._.js.map
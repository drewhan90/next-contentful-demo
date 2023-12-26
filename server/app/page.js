(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5589:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(482),n=s(9108),i=s(2563),l=s.n(i),a=s(8300),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,751)),"/home/runner/work/next-contentful-demo/next-contentful-demo/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2917)),"/home/runner/work/next-contentful-demo/next-contentful-demo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/runner/work/next-contentful-demo/next-contentful-demo/app/page.tsx"],u="/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5677:()=>{},4078:(e,t,s)=>{Promise.resolve().then(s.bind(s,6693)),Promise.resolve().then(s.t.bind(s,1476,23))},4740:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},6693:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(2295),n=s(1223),i=s.n(n);let l=({src:e,width:t,quality:s})=>`${e}?w=${t}&q=${s||75}`;function a(e){return r.jsx(i(),{alt:e.alt,loader:l,...e})}},3645:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(5036),n=s(9399);function i({name:e,picture:t}){return(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("div",{className:"mr-4 w-12 h-12",children:r.jsx(n.ZP,{alt:e,className:"object-cover h-full rounded-full",height:48,width:48,src:t.url})}),r.jsx("div",{className:"text-xl font-bold",children:e})]})}},196:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(5036),n=s(9399),i=s(646),l=s.n(i);function a({title:e,url:t,slug:s}){let i=r.jsx(n.ZP,{alt:`Cover Image for ${e}`,priority:!0,width:2e3,height:1e3,className:function(...e){return e.filter(Boolean).join(" ")}("shadow-small",{"hover:shadow-medium transition-shadow duration-200":s}),src:t});return r.jsx("div",{className:"sm:mx-0",children:s?r.jsx(l(),{href:`/posts/${s}`,"aria-label":e,children:i}):i})}},1201:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(5036),n=s(3204);function i({dateString:e}){return r.jsx("time",{dateTime:e,children:(0,n.Z)(new Date(e),"LLLL	d, yyyy")})}},2917:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>a});var r=s(5036),n=s(4174),i=s.n(n);s(7272);var l=s(9264);let a={title:`Next.js and ${l.yf} Example`,description:`This is a blog built with Next.js and ${l.yf}.`};function o(){return r.jsx("footer",{className:"bg-accent-1 border-t border-accent-2",children:r.jsx("div",{className:"container mx-auto px-5",children:(0,r.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[r.jsx("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Built with Next.js."}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[r.jsx("a",{href:"https://nextjs.org/docs",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),r.jsx("a",{href:`https://github.com/vercel/next.js/tree/canary/examples/${l.Ys}`,className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})})}function c({children:e}){return r.jsx("html",{lang:"en",className:i().variable,children:r.jsx("body",{children:(0,r.jsxs)("section",{className:"min-h-screen",children:[r.jsx("main",{children:e}),r.jsx(o,{})]})})})}},7983:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(5036),n=s(646),i=s.n(n),l=s(3645),a=s(1201),o=s(196);function c({title:e,coverImage:t,date:s,excerpt:n,author:c,slug:d}){return(0,r.jsxs)("div",{children:[r.jsx("div",{className:"mb-5",children:r.jsx(o.Z,{title:e,slug:d,url:t.url})}),r.jsx("h3",{className:"text-3xl mb-3 leading-snug",children:r.jsx(i(),{href:`/posts/${d}`,className:"hover:underline",children:e})}),r.jsx("div",{className:"text-lg mb-4",children:r.jsx(a.Z,{dateString:s})}),r.jsx("p",{className:"text-lg leading-relaxed mb-4",children:n}),c&&r.jsx(l.Z,{name:c.name,picture:c.picture})]})}function d({morePosts:e}){return(0,r.jsxs)("section",{children:[r.jsx("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"More Stories"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:e.map(e=>r.jsx(c,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug))})]})}},751:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(5036),n=s(646),i=s.n(n),l=s(2455),a=s(1201),o=s(196),c=s(3645),d=s(7983),u=s(3969),m=s(9264);function x(){return(0,r.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[r.jsx("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:"Blog."}),(0,r.jsxs)("h2",{className:"text-center md:text-left text-lg mt-5 md:pl-8",children:["A statically generated blog example using"," ",r.jsx("a",{href:"https://nextjs.org/",className:"underline hover:text-success duration-200 transition-colors",children:"Next.js"})," ","and"," ",r.jsx("a",{href:m.oc,className:"underline hover:text-success duration-200 transition-colors",children:m.yf}),"."]})]})}function h({title:e,coverImage:t,date:s,excerpt:n,author:l,slug:d}){return(0,r.jsxs)("section",{children:[r.jsx("div",{className:"mb-8 md:mb-16",children:r.jsx(o.Z,{title:e,slug:d,url:t.url})}),(0,r.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",children:[(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:r.jsx(i(),{href:`/posts/${d}`,className:"hover:underline",children:e})}),r.jsx("div",{className:"mb-4 md:mb-0 text-lg",children:r.jsx(a.Z,{dateString:s})})]}),(0,r.jsxs)("div",{children:[r.jsx("p",{className:"text-lg leading-relaxed mb-4",children:n}),l&&r.jsx(c.Z,{name:l.name,picture:l.picture})]})]})]})}async function p(){let{isEnabled:e}=(0,l.draftMode)(),t=await (0,u.Bd)(e),s=t[0],n=t.slice(1);return(0,r.jsxs)("div",{className:"container mx-auto px-5",children:[r.jsx(x,{}),s&&r.jsx(h,{title:s.title,coverImage:s.coverImage,date:s.date,author:s.author,slug:s.slug,excerpt:s.excerpt}),r.jsx(d.Z,{morePosts:n})]})}},3969:(e,t,s)=>{"use strict";s.d(t,{Bd:()=>o,ds:()=>c,iy:()=>a});let r=`
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;async function n(e,t=!1){return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t?process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN:process.env.CONTENTFUL_ACCESS_TOKEN}`},body:JSON.stringify({query:e}),next:{tags:["posts"]}}).then(e=>e.json())}function i(e){return e?.data?.postCollection?.items?.[0]}function l(e){return e?.data?.postCollection?.items}async function a(e){return i(await n(`query {
      postCollection(where: { slug: "${e}" }, preview: true, limit: 1) {
        items {
          ${r}
        }
      }
    }`,!0))}async function o(e){return l(await n(`query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${e?"true":"false"}) {
        items {
          ${r}
        }
      }
    }`,e))}async function c(e,t){let s=await n(`query {
      postCollection(where: { slug: "${e}" }, preview: ${t?"true":"false"}, limit: 1) {
        items {
          ${r}
        }
      }
    }`,t),a=await n(`query {
      postCollection(where: { slug_not_in: "${e}" }, order: date_DESC, preview: ${t?"true":"false"}, limit: 2) {
        items {
          ${r}
        }
      }
    }`,t);return{post:i(s),morePosts:l(a)}}},9264:(e,t,s)=>{"use strict";s.d(t,{Ys:()=>r,oc:()=>i,yf:()=>n});let r="cms-contentful",n="Contentful",i="https://www.contentful.com"},9399:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>l});let r=(0,s(6843).createProxy)(String.raw`/home/runner/work/next-contentful-demo/next-contentful-demo/lib/contentful-image.tsx`),{__esModule:n,$$typeof:i}=r,l=r.default},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,455,715,919],()=>s(5589));module.exports=r})();
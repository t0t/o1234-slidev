import{Y as u,aw as n,a2 as r,r as j,y as $,ax as v}from"../modules/vue-D6S06eEs.js";import{a7 as l,h as p,E as x,i as C,D as S,A as E,y as R,z as T,a8 as k,a9 as F}from"../index-DB7UHUuH.js";function g(){const t=n(C),s=r(t,"nav"),a=n(S).value,e=r(a,"current"),i=n(T),c=n(E),o=n(l,{}),d=n(R,void 0),m=n(p,j(1)),f=n(x,$(()=>1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function D(t){var i,c;u(l,t);const{$slidev:s,$page:a}=g(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function L(t,s){return{...v(t,s===0?k:F),frontmatter:t}}export{L as f,D as p,g as u};

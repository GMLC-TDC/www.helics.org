function C(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function K(t){return t()}function I(){return Object.create(null)}function w(t){t.forEach(K)}function Q(t){return typeof t=="function"}function kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function vt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function et(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Et(t,e,n){t.$$.on_destroy.push(nt(e,n))}function Nt(t,e,n,c){if(t){const i=U(t,e,n,c);return t[0](i)}}function U(t,e,n,c){return t[1]&&c?Z(n.ctx.slice(),t[1](c(e))):n.ctx}function St(t,e,n,c){if(t[2]&&c){const i=t[2](c(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],r=Math.max(e.dirty.length,i.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function At(t,e,n,c,i,l){if(i){const r=U(e,n,c,l);t.p(r,i)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let c=0;c<n;c++)e[c]=-1;return e}return-1}let M=!1;function it(){M=!0}function ct(){M=!1}function rt(t,e,n,c){for(;t<e;){const i=t+(e-t>>1);n(i)<=c?t=i+1:e=i}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&s.push(d)}e=s}const n=new Int32Array(e.length+1),c=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,d=(i>0&&e[n[i]].claim_order<=u?i+1:rt(1,i,a=>e[n[a]].claim_order,u))-1;c[s]=n[d]+1;const _=d+1;n[_]=s,i=Math.max(_,i)}const l=[],r=[];let o=e.length-1;for(let s=n[i]+1;s!=0;s=c[s-1]){for(l.push(e[s-1]);o>=s;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<l.length&&r[s].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(r[s],d)}}function lt(t,e){if(M){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){M&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Tt(){return z(" ")}function Dt(){return z("")}function ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t,e){for(const n in e)ft(t,n,e[n])}function dt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,c,i=!1){_t(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,i||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return c()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function X(t,e,n,c){return V(t,i=>i.nodeName===e,i=>{const l=[];for(let r=0;r<i.attributes.length;r++){const o=i.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>i.removeAttribute(r))},()=>c(e))}function Bt(t,e,n){return X(t,e,n,ot)}function Ht(t,e,n){return X(t,e,n,at)}function ht(t,e){return V(t,n=>n.nodeType===3,n=>{const c=""+e;if(n.data.startsWith(c)){if(n.data.length!==c.length)return n.splitText(c.length)}else n.data=c},()=>z(e),!0)}function Ot(t){return ht(t," ")}function Pt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e,n,c){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}function zt(t,e,n){t.classList[n?"add":"remove"](e)}function Ft(t,e){const n=[];let c=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(c-=1,n.push(i)):l===`HEAD_${t}_START`&&(c+=1,n.push(i))}else c>0&&n.push(i);return n}function Rt(t,e){return new t(e)}let $;function g(t){$=t}function k(){if(!$)throw new Error("Function called outside component initialization");return $}function Wt(t){k().$$.on_mount.push(t)}function Gt(t){k().$$.after_update.push(t)}function It(t,e){return k().$$.context.set(t,e),e}function Jt(t){return k().$$.context.get(t)}const x=[],J=[],A=[],O=[],mt=Promise.resolve();let P=!1;function pt(){P||(P=!0,mt.then(F))}function L(t){A.push(t)}function Kt(t){O.push(t)}const H=new Set;let S=0;function F(){const t=$;do{for(;S<x.length;){const e=x[S];S++,g(e),yt(e.$$)}for(g(null),x.length=0,S=0;J.length;)J.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];H.has(n)||(H.add(n),n())}A.length=0}while(x.length);for(;O.length;)O.pop()();P=!1,H.clear(),g(t)}function yt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const j=new Set;let b;function gt(){b={r:0,c:[],p:b}}function bt(){b.r||w(b.c),b=b.p}function R(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Y(t,e,n,c){if(t&&t.o){if(j.has(t))return;j.add(t),b.c.push(()=>{j.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}else c&&c()}function Qt(t,e){const n=e.token={};function c(i,l,r,o){if(e.token!==n)return;e.resolved=o;let s=e.ctx;r!==void 0&&(s=s.slice(),s[r]=o);const u=i&&(e.current=i)(s);let d=!1;e.block&&(e.blocks?e.blocks.forEach((_,a)=>{a!==l&&_&&(gt(),Y(_,1,1,()=>{e.blocks[a]===_&&(e.blocks[a]=null)}),bt())}):e.block.d(1),u.c(),R(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[l]=u),d&&F()}if(tt(t)){const i=k();if(t.then(l=>{g(i),c(e.then,1,e.value,l),g(null)},l=>{if(g(i),c(e.catch,2,e.error,l),g(null),!e.hasCatch)throw l}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function Ut(t,e,n){const c=e.slice(),{resolved:i}=t;t.current===t.then&&(c[t.value]=i),t.current===t.catch&&(c[t.error]=i),t.block.p(c,n)}function Vt(t,e){t.d(1),e.delete(t.key)}function Xt(t,e){Y(t,1,1,()=>{e.delete(t.key)})}function Yt(t,e,n,c,i,l,r,o,s,u,d,_){let a=t.length,m=l.length,h=a;const T={};for(;h--;)T[t[h].key]=h;const v=[],D=new Map,q=new Map;for(h=m;h--;){const f=_(i,l,h),p=n(f);let y=r.get(p);y?c&&y.p(f,e):(y=u(p,f),y.c()),D.set(p,v[h]=y),p in T&&q.set(p,Math.abs(h-T[p]))}const W=new Set,G=new Set;function B(f){R(f,1),f.m(o,d),r.set(f.key,f),d=f.first,m--}for(;a&&m;){const f=v[m-1],p=t[a-1],y=f.key,E=p.key;f===p?(d=f.first,a--,m--):D.has(E)?!r.has(y)||W.has(y)?B(f):G.has(E)?a--:q.get(y)>q.get(E)?(G.add(y),B(f)):(W.add(E),a--):(s(p,r),a--)}for(;a--;){const f=t[a];D.has(f.key)||s(f,r)}for(;m;)B(v[m-1]);return v}function Zt(t,e){const n={},c={},i={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const s in r)s in o||(c[s]=1);for(const s in o)i[s]||(n[s]=o[s],i[s]=1);t[l]=o}else for(const s in r)i[s]=1}for(const r in c)r in n||(n[r]=void 0);return n}function te(t){return typeof t=="object"&&t!==null?t:{}}function ee(t,e,n,c){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,c===void 0&&n(t.$$.ctx[i]))}function ne(t){t&&t.c()}function ie(t,e){t&&t.l(e)}function xt(t,e,n,c){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),c||L(()=>{const r=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...r):w(r),t.$$.on_mount=[]}),l.forEach(L)}function $t(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&(x.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,c,i,l,r,o=[-1]){const s=$;g(t);const u=t.$$={fragment:null,ctx:[],props:l,update:C,not_equal:i,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};r&&r(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(_,a,...m)=>{const h=m.length?m[0]:a;return u.ctx&&i(u.ctx[_],u.ctx[_]=h)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](h),d&&wt(t,_)),a}):[],u.update(),d=!0,w(u.before_update),u.fragment=c?c(u.ctx):!1,e.target){if(e.hydrate){it();const _=dt(e.target);u.fragment&&u.fragment.l(_),_.forEach(ut)}else u.fragment&&u.fragment.c();e.intro&&R(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),ct(),F()}g(s)}class re{$destroy(){$t(this,1),this.$destroy=C}$on(e,n){if(!Q(n))return C;const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const i=c.indexOf(n);i!==-1&&c.splice(i,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Vt as $,te as A,$t as B,Z as C,C as D,Jt as E,at as F,Ht as G,lt as H,Et as I,Lt as J,Nt as K,Ft as L,At as M,jt as N,St as O,qt as P,zt as Q,Mt as R,re as S,Kt as T,J as U,ee as V,vt as W,Yt as X,Qt as Y,Ut as Z,Xt as _,dt as a,ft as b,Bt as c,ut as d,ot as e,Ct as f,ht as g,Pt as h,ce as i,Tt as j,Dt as k,Ot as l,gt as m,Y as n,bt as o,R as p,It as q,Gt as r,kt as s,z as t,Wt as u,Rt as v,ne as w,ie as x,xt as y,Zt as z};

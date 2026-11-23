import"./disclose-version.D8p40XaM.js";import{A as e,B as t,C as n,D as r,H as i,I as a,L as o,N as s,O as c,P as l,R as u,S as d,T as ee,_ as f,i as p,j as te,l as ne,n as re,p as ie,s as m,u as h,w as g,x as _,y as ae,z as oe}from"./client.dWOvq3rC.js";import{t as v}from"./Html.astro_astro_type_script_index_0_lang.C0Q2JDOR.js";var se=_(`<option> </option>`),ce=_(`<div class="form-group"><label>Применить</label> <select><option>Применить последний пост из коллекции</option><!></select></div> <div class="form-group"><label>Ссылка</label> <input type="text"/></div> <div class="form-group"><label>Содержание <small> </small></label> <textarea></textarea></div> <div class="form-group"><label>Твит <small> </small></label> <textarea></textarea></div> <div class="form-group"><label>Теги</label> <input type="text"/></div> <hr/> <div class="form-group"><label>Telegram</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>ВКонтакте (группа)</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>ВКонтакте (страница)</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>Facebook</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>Twitter</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>LinkedIn</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div>`,1);function y(d,_){t(_,!0);let y=o(``),b=o(``),x=o(``),S=o(``),le=u(()=>D(`
            ${e(b)}

            ${E(v.telegram)}

            ${T()}
        `)),ue=u(()=>O(v.vkGroup)),de=u(()=>D(`
            ${e(b)}

            ${E(v.vkPage)}

            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev и *blog_vtvz (страницу в ВК)

            ${T()}
        `)),fe=u(()=>O(v.facebook)),pe=u(()=>D(`
            ${e(x)}

            ${E(v.twitter)}

            ${T()}
        `)),me=u(()=>O(v.linkedIn)),he=u(()=>1300-[...e(me)].length),ge=u(()=>280-[...e(pe)].length+E(`twitter`).length-23);ie(()=>{_e(`posts`)});async function _e(e){let t=_.data[e];a(y,t.link,!0),a(b,ve(t.excerpt),!0),a(x,ve(t.description),!0),a(S,t.tags.join(` `),!0),await C()}function ve(e){let t=e=>e.replace(/[\s]+/g,` `).trim(),n=new DOMParser().parseFromString(e,`text/html`).body;return Array.from(n.children).map(e=>t(e.textContent)).join(`
`).trim()||t(e.trim())}async function C(){await te();let e=document.querySelectorAll(`.article-post-generator-textarea`);for(let t of e)t.style.height=`auto`,t.style.height=t.scrollHeight+10+`px`}function ye(e){let t=e.currentTarget.value;e.currentTarget.value=``,t&&_e(t)}function be(e){a(y,e.currentTarget.value,!0),C()}function xe(t){let n=t.currentTarget.value;e(b)===e(x)&&a(x,n,!0),a(b,n,!0),C()}function Se(e){a(x,e.currentTarget.value,!0),C()}function Ce(e){a(S,e.currentTarget.value,!0),C()}function w(e){e.currentTarget.select()}function we(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Te(e){return e.split(`-`).map((e,t)=>t?we(e):e).join(``)}function T(){return e(S).split(/[\s,]/).filter(e=>e).map(e=>`#`+e.replace(/^#/g,``)).map(e=>Te(e)).join(` `)}function E(t){try{let n=new URL(e(y));return n.searchParams.append(`utm`,t),n.toString()}catch{return e(y)}}function D(e){return e.trim().split(`
`).map(e=>e.trim()).join(`
`)}function O(t){return D(`
            ${e(b)}

            ${E(t)}

            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev

            ${T()}
        `)}var k=ce(),A=ee(k),j=c(g(A),2),M=g(j);M.value=M.__value=``;var Ee=c(M);ne(Ee,16,()=>Object.keys(_.data),e=>e,(e,t)=>{var n=se(),i=r(n,!0),a={};l(e=>{f(i,e),a!==(a=t)&&(n.value=(n.__value=a)??``)},[()=>we(t)]),ae(e,n)}),i(j),j.value=j.__value=``,i(A);var N=c(A,2),P=c(g(N),2);re(P),i(N);var F=c(N,2),I=g(F),De=c(g(I)),Oe=r(De);i(I);var L=c(I,2);s(L),i(F);var R=c(F,2),z=g(R),ke=c(g(z)),Ae=r(ke);i(z);var B=c(z,2);s(B),i(R);var V=c(R,2),H=c(g(V),2);re(H),i(V);var U=c(V,4),W=c(g(U),2);s(W),i(U);var G=c(U,2),K=c(g(G),2);s(K),i(G);var q=c(G,2),J=c(g(q),2);s(J),i(q);var Y=c(q,2),X=c(g(Y),2);s(X),i(Y);var Z=c(Y,2),Q=c(g(Z),2);s(Q),i(Z);var je=c(Z,2),$=c(g(je),2);s($),i(je),l(()=>{p(P,e(y)),m(De,1,h(e(he)>=0?`text-muted`:`text-danger`)),f(Oe,`(${e(he)??``})`),p(L,e(b)),m(ke,1,h(e(ge)>=0?`text-muted`:`text-danger`)),f(Ae,`(${e(ge)??``})`),p(B,e(x)),p(H,e(S)),p(W,e(le)),p(K,e(ue)),p(J,e(de)),p(X,e(fe)),p(Q,e(pe)),p($,e(me))}),n(`change`,j,ye),n(`input`,P,be),n(`input`,L,xe),n(`input`,B,Se),n(`input`,H,Ce),n(`click`,W,w),n(`click`,K,w),n(`click`,J,w),n(`click`,X,w),n(`click`,Q,w),n(`click`,$,w),ae(d,k),oe()}d([`change`,`input`,`click`]);export{y as default};
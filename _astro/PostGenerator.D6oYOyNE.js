import"./disclose-version.D-i23XlX.js";import{A as e,C as t,D as n,F as r,M as i,N as a,O as o,P as ee,S as s,T as te,_ as c,b as l,c as ne,g as u,j as d,m as f,n as p,o as re,r as m,s as ie,u as ae,v as h,w as g,x as oe,y as _}from"./client.DoVyguBJ.js";import{t as v}from"./Html.astro_astro_type_script_index_0_lang.CRzHvEbK.js";var se=c(`<option> </option>`),ce=c(`<div class="form-group"><label>Применить</label> <select><option>Применить последний пост из коллекции</option><!></select></div> <div class="form-group"><label>Ссылка</label> <input type="text"/></div> <div class="form-group"><label>Содержание <small> </small></label> <textarea></textarea></div> <div class="form-group"><label>Твит <small> </small></label> <textarea></textarea></div> <div class="form-group"><label>Теги</label> <input type="text"/></div> <hr/> <div class="form-group"><label>Telegram</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>ВКонтакте (группа)</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>ВКонтакте (страница)</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>Facebook</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>Twitter</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>LinkedIn</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div>`,1);function y(c,h){ee(h,!0);let y=d(``),b=d(``),x=d(``),S=d(``),le=i(()=>D(`
            ${l(b)}

            ${E(v.telegram)}

            ${T()}
        `)),ue=i(()=>O(v.vkGroup)),de=i(()=>D(`
            ${l(b)}

            ${E(v.vkPage)}

            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev и *blog_vtvz (страницу в ВК)

            ${T()}
        `)),fe=i(()=>O(v.facebook)),pe=i(()=>D(`
            ${l(x)}

            ${E(v.twitter)}

            ${T()}
        `)),me=i(()=>O(v.linkedIn)),he=i(()=>1300-[...l(me)].length),ge=i(()=>280-[...l(pe)].length+E(`twitter`).length-23);ae(()=>{_e(`posts`)});async function _e(t){let n=h.data[t];e(y,n.link,!0),e(b,ve(n.excerpt),!0),e(x,ve(n.description),!0),e(S,n.tags.join(` `),!0),await C()}function ve(e){let t=e=>e.replace(/[\s]+/g,` `).trim(),n=new DOMParser().parseFromString(e,`text/html`).body;return Array.from(n.children).map(e=>t(e.textContent)).join(`
`).trim()||t(e.trim())}async function C(){await oe();let e=document.querySelectorAll(`.article-post-generator-textarea`);for(let t of e)t.style.height=`auto`,t.style.height=t.scrollHeight+10+`px`}function ye(e){let t=e.currentTarget.value;e.currentTarget.value=``,t&&_e(t)}function be(t){e(y,t.currentTarget.value,!0),C()}function xe(t){let n=t.currentTarget.value;l(b)===l(x)&&e(x,n,!0),e(b,n,!0),C()}function Se(t){e(x,t.currentTarget.value,!0),C()}function Ce(t){e(S,t.currentTarget.value,!0),C()}function w(e){e.currentTarget.select()}function we(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Te(e){return e.split(`-`).map((e,t)=>t?we(e):e).join(``)}function T(){return l(S).split(/[\s,]/).filter(e=>e).map(e=>`#`+e.replace(/^#/g,``)).map(e=>Te(e)).join(` `)}function E(e){try{let t=new URL(l(y));return t.searchParams.append(`utm`,e),t.toString()}catch{return l(y)}}function D(e){return e.trim().split(`
`).map(e=>e.trim()).join(`
`)}function O(e){return D(`
            ${l(b)}

            ${E(e)}

            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev

            ${T()}
        `)}var k=ce(),A=te(k),j=o(g(A),2),M=g(j);M.value=M.__value=``;var Ee=o(M);ie(Ee,16,()=>Object.keys(h.data),e=>e,(e,r)=>{var i=se(),a=n(i,!0),o={};t(e=>{f(a,e),o!==(o=r)&&(i.value=(i.__value=o)??``)},[()=>we(r)]),u(e,i)}),r(j),j.value=j.__value=``,r(A);var N=o(A,2),P=o(g(N),2);p(P),r(N);var F=o(N,2),I=g(F),De=o(g(I)),Oe=n(De);r(I);var L=o(I,2);s(L),r(F);var R=o(F,2),z=g(R),ke=o(g(z)),Ae=n(ke);r(z);var B=o(z,2);s(B),r(R);var V=o(R,2),H=o(g(V),2);p(H),r(V);var U=o(V,4),W=o(g(U),2);s(W),r(U);var G=o(U,2),K=o(g(G),2);s(K),r(G);var q=o(G,2),J=o(g(q),2);s(J),r(q);var Y=o(q,2),X=o(g(Y),2);s(X),r(Y);var Z=o(Y,2),Q=o(g(Z),2);s(Q),r(Z);var je=o(Z,2),$=o(g(je),2);s($),r(je),t(()=>{m(P,l(y)),re(De,1,ne(l(he)>=0?`text-muted`:`text-danger`)),f(Oe,`(${l(he)??``})`),m(L,l(b)),re(ke,1,ne(l(ge)>=0?`text-muted`:`text-danger`)),f(Ae,`(${l(ge)??``})`),m(B,l(x)),m(H,l(S)),m(W,l(le)),m(K,l(ue)),m(J,l(de)),m(X,l(fe)),m(Q,l(pe)),m($,l(me))}),_(`change`,j,ye),_(`input`,P,be),_(`input`,L,xe),_(`input`,B,Se),_(`input`,H,Ce),_(`click`,W,w),_(`click`,K,w),_(`click`,J,w),_(`click`,X,w),_(`click`,Q,w),_(`click`,$,w),u(c,k),a()}h([`change`,`input`,`click`]);export{y as default};
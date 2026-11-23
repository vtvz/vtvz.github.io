import"./disclose-version.mIfr2AwJ.js";import{B as e,C as t,E as n,F as r,I as i,L as ee,M as te,O as a,P as o,R as ne,S as s,T as c,b as re,f as ie,g as l,i as u,j as d,k as ae,l as oe,n as f,s as p,u as m,v as se,x as h,y as g}from"./client.Bi4p2dQm.js";import{t as _}from"./Html.astro_astro_type_script_index_0_lang.DMkXfsYb.js";var ce=g(`<option> </option>`),le=g(`<div class="form-group"><label>Применить</label> <select><option>Применить последний пост из коллекции</option><!></select></div> <div class="form-group"><label>Ссылка</label> <input type="text"/></div> <div class="form-group"><label>Содержание <small> </small></label> <textarea></textarea></div> <div class="form-group"><label>Твит <small> </small></label> <textarea></textarea></div> <div class="form-group"><label>Теги</label> <input type="text"/></div> <hr/> <div class="form-group"><label>Telegram</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>ВКонтакте (группа)</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>ВКонтакте (страница)</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>Facebook</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>Twitter</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div> <div class="form-group"><label>LinkedIn</label> <textarea class="article-post-generator-textarea" readonly=""></textarea></div>`,1);function v(re,g){ne(g,!0);let v=r(``),y=r(``),b=r(``),x=r(``),ue=i(()=>D(`
            ${a(y)}

            ${E(_.telegram)}

            ${T()}
        `)),de=i(()=>O(_.vkGroup)),fe=i(()=>D(`
            ${a(y)}

            ${E(_.vkPage)}

            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev и *blog_vtvz (страницу в ВК)

            ${T()}
        `)),pe=i(()=>O(_.facebook)),me=i(()=>D(`
            ${a(b)}

            ${E(_.twitter)}

            ${T()}
        `)),he=i(()=>O(_.linkedIn)),ge=i(()=>1300-[...a(he)].length),_e=i(()=>280-[...a(me)].length+E(`twitter`).length-23);ie(()=>{ve(`posts`)});async function ve(e){let t=g.data[e];o(v,t.link,!0),o(y,ye(t.excerpt),!0),o(b,ye(t.description),!0),o(x,t.tags.join(` `),!0),await S()}function ye(e){let t=e=>e.replace(/[\s]+/g,` `).trim(),n=new DOMParser().parseFromString(e,`text/html`).body;return Array.from(n.children).map(e=>t(e.textContent)).join(`
`).trim()||t(e.trim())}async function S(){await ae();let e=document.querySelectorAll(`.article-post-generator-textarea`);for(let t of e)t.style.height=`auto`,t.style.height=t.scrollHeight+10+`px`}function be(e){let t=e.currentTarget.value;e.currentTarget.value=``,t&&ve(t)}function xe(e){o(v,e.currentTarget.value,!0),S()}function Se(e){let t=e.currentTarget.value;a(y)===a(b)&&o(b,t,!0),o(y,t,!0),S()}function Ce(e){o(b,e.currentTarget.value,!0),S()}function we(e){o(x,e.currentTarget.value,!0),S()}function C(e){e.currentTarget.select()}function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Te(e){return e.split(`-`).map((e,t)=>t?w(e):e).join(``)}function T(){return a(x).split(/[\s,]/).filter(e=>e).map(e=>`#`+e.replace(/^#/g,``)).map(e=>Te(e)).join(` `)}function E(e){try{let t=new URL(a(v));return t.searchParams.append(`utm`,e),t.toString()}catch{return a(v)}}function D(e){return e.trim().split(`
`).map(e=>e.trim()).join(`
`)}function O(e){return D(`
            ${a(y)}

            ${E(e)}

            P.S. Подписывайтесь на канал в Telegram https://t.me/vtvz_dev

            ${T()}
        `)}var k=le(),A=t(k),j=n(s(A),2),M=s(j);M.value=M.__value=``;var Ee=n(M);oe(Ee,16,()=>Object.keys(g.data),e=>e,(e,t)=>{var n=ce(),r=c(n,!0),i={};te(e=>{l(r,e),i!==(i=t)&&(n.value=(n.__value=i)??``)},[()=>w(t)]),se(e,n)}),e(j),j.value=j.__value=``,e(A);var N=n(A,2),P=n(s(N),2);f(P),e(N);var F=n(N,2),I=s(F),De=n(s(I)),Oe=c(De);e(I);var L=n(I,2);d(L),e(F);var R=n(F,2),z=s(R),ke=n(s(z)),Ae=c(ke);e(z);var B=n(z,2);d(B),e(R);var V=n(R,2),H=n(s(V),2);f(H),e(V);var U=n(V,4),W=n(s(U),2);d(W),e(U);var G=n(U,2),K=n(s(G),2);d(K),e(G);var q=n(G,2),J=n(s(q),2);d(J),e(q);var Y=n(q,2),X=n(s(Y),2);d(X),e(Y);var Z=n(Y,2),Q=n(s(Z),2);d(Q),e(Z);var je=n(Z,2),$=n(s(je),2);d($),e(je),te(()=>{u(P,a(v)),p(De,1,m(a(ge)>=0?`text-muted`:`text-danger`)),l(Oe,`(${a(ge)??``})`),u(L,a(y)),p(ke,1,m(a(_e)>=0?`text-muted`:`text-danger`)),l(Ae,`(${a(_e)??``})`),u(B,a(b)),u(H,a(x)),u(W,a(ue)),u(K,a(de)),u(J,a(fe)),u(X,a(pe)),u(Q,a(me)),u($,a(he))}),h(`change`,j,be),h(`input`,P,xe),h(`input`,L,Se),h(`input`,B,Ce),h(`input`,H,we),h(`click`,W,C),h(`click`,K,C),h(`click`,J,C),h(`click`,X,C),h(`click`,Q,C),h(`click`,$,C),se(re,k),ee()}re([`change`,`input`,`click`]);export{v as default};
(window.webpackJsonpmain=window.webpackJsonpmain||[]).push([[4],{400:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var i=t(405);function r(e,n,t,i,r,o,a){try{var c=e[o](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(i,r)}function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.blacklist=[HTMLScriptElement,HTMLTextAreaElement,HTMLInputElement,HTMLSelectElement,HTMLButtonElement],this.recursiveEmojification=this.recursiveEmojification.bind(this)}var n,t,a,c,u;return n=e,(t=[{key:"skip",value:function(e){var n=!0,t=!1,i=void 0;try{for(var r,o=this.blacklist[Symbol.iterator]();!(n=(r=o.next()).done);n=!0)if(e instanceof r.value)return!0}catch(e){t=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(t)throw i}}return!1}},{key:"recursiveEmojification",value:function(e){if(e.nodeType===Node.TEXT_NODE){var n=Object(i.a)(e.nodeValue);if(n!==e.nodeValue){var t=document.createElement("span");t.classList.add("js-emojified"),t.innerHTML=n,e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)}}else e.nodeType!==Node.ELEMENT_NODE||this.skip(e)||e.childNodes.forEach(this.recursiveEmojification)}},{key:"act",value:(c=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelectorAll(".js-emojify").forEach(this.recursiveEmojification);case 1:case"end":return e.stop()}}),e,this)})),u=function(){var e=this,n=arguments;return new Promise((function(t,i){var o=c.apply(e,n);function a(e){r(o,t,i,a,u,"next",e)}function u(e){r(o,t,i,a,u,"throw",e)}a(void 0)}))},function(){return u.apply(this,arguments)})}])&&o(n.prototype,t),a&&o(n,a),e}()},405:function(e,n,t){"use strict";t.d(n,"b",(function(){return a}));var i=t(408),r=new i.EmojiConvertor;r.img_sets.apple.path="/assets/images/emoji/",r.include_title=!0,r.include_text=!0,r.replace_mode="css",r.allow_native=!0,r.addAliases({fox:"1f98a"}),n.a=function(e){return r.replace_unified(r.replace_emoticons(e))};var o=Object.assign(new i.EmojiConvertor,r);o.replace_mode="unified",o.allow_native=!0;var a=function(e){return o.replace_colons(e)}}}]);
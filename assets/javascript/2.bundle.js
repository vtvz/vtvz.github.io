(window.webpackJsonpmain=window.webpackJsonpmain||[]).push([[2],{9:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(0),r=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n,a;c(this,t);for(var r=arguments.length,l=new Array(r>1?r-1:0),i=1;i<r;i++)l[i-1]=arguments[i];return(a=u(this,(n=m(t)).call.apply(n,[this,e].concat(l)))).emoji=new EmojiConvertor,a.emoji.replace_mode="unified",a.emoji.allow_native=!0,a.state={link:"",text:"",tweet:"",tags:""},a}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.applyCollection("posts")}},{key:"applyCollection",value:function(e){var t=this.props.data[e],n=this.compileText(this.normalizeText(t.excerpt)),a=this.compileText(this.normalizeText(t.description));this.setState({link:t.link,text:n,tweet:a,tags:t.tags.join(" ")},this.recalculateHeights)}},{key:"normalizeText",value:function(e){var t=function(e){return e.replace(/[\s]+/g," ").trim()};return $("<div>".concat(e,"</div>")).find("> *").map((function(e,n){return t($(n).text())})).toArray().join("\n").trim()||t(e.trim())}},{key:"recalculateHeights",value:function(){$(".article-post-generator-textarea").each((function(e,t){t.style.height="auto",t.style.height=t.scrollHeight+10+"px"}))}},{key:"handleCollectionChange",value:function(e){var t=e.target.value;t&&this.applyCollection(t)}},{key:"handleChange",value:function(e,t){var n=t.target.value,a=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,n);"text"===e&&this.state.text===this.state.tweet&&(a.tweet=n),this.setState(a,this.recalculateHeights)}},{key:"textareaSelect",value:function(e){e.target.select()}},{key:"ucfirst",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"camelize",value:function(e){var t=this;return e.split("-").map((function(e,n){return n?t.ucfirst(e):e})).join("")}},{key:"compileTags",value:function(){var e=this;return this.state.tags.split(/[\s,]/).filter((function(e){return e})).map((function(e){return"#"+e.replace(/^#/g,"")})).map((function(t){return e.camelize(t)})).join(" ")}},{key:"compileLink",value:function(e){try{var t=new URL(this.state.link),n=o(t.pathname.split("/").filter((function(e){return e})),2),a=n[0],r=n[1];return t.searchParams.append("utm_source",e),t.searchParams.append("utm_medium","social_post"),a&&t.searchParams.append("utm_campaign",a),r&&t.searchParams.append("utm_content",r),t.toString()}catch(e){return this.state.link}}},{key:"compileText",value:function(e){return this.emoji.replace_colons(e.trim().split("\n").map((function(e){return e.trim()})).join("\n"))}},{key:"generateGeneric",value:function(e){return this.compileText("\n            ".concat(this.state.text,"\n            \n            ").concat(this.compileLink(e),"\n            \n            P.S. Подписывайтесь на канал в Telegram https://t.me/blog_vtvz\n            \n            ").concat(this.compileTags(),"\n        "))}},{key:"generateVKPage",value:function(){return this.compileText("\n            ".concat(this.state.text,"\n            \n            ").concat(this.compileLink("vk_page"),"\n            \n            P.S. Подписывайтесь на канал в Telegram https://t.me/blog_vtvz и *blog_vtvz (страницу в ВК)\n            \n            ").concat(this.compileTags(),"\n        "))}},{key:"generateVKGroup",value:function(){return this.generateGeneric("vk_group")}},{key:"generateLinkedIn",value:function(){return this.generateGeneric("linkedin")}},{key:"generateFacebook",value:function(){return this.generateGeneric("facebook")}},{key:"generateTelegram",value:function(){return this.compileText("\n            ".concat(this.state.text,"\n            \n            ").concat(this.compileLink("telegram"),"\n            \n            ").concat(this.compileTags(),"\n        "))}},{key:"generateTwitter",value:function(){return this.compileText("\n            ".concat(this.state.tweet,"\n\n            ").concat(this.compileLink("twitter"),"\n            \n            ").concat(this.compileTags(),"\n        "))}},{key:"render",value:function(){var e=this,t=this.generateLinkedIn(),n=this.generateTwitter(),a=1300-i(t).length,l=280-i(n).length+this.compileLink("twitter").length-23;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Применить"),r.a.createElement("select",{onChange:this.handleCollectionChange.bind(this),value:""},r.a.createElement("option",{value:""},"Применить последний пост из коллекции"),Object.keys(this.props.data).map((function(t){return r.a.createElement("option",{key:t,value:t},e.ucfirst(t))})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Ссылка"),r.a.createElement("input",{type:"text",value:this.state.link,onChange:this.handleChange.bind(this,"link")})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Содержание ",r.a.createElement("small",{className:a>=0?"text-muted":"text-danger"},"(",a,")")),r.a.createElement("textarea",{value:this.state.text,onChange:this.handleChange.bind(this,"text")})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Твит ",r.a.createElement("small",{className:l>=0?"text-muted":"text-danger"},"(",l,")")),r.a.createElement("textarea",{value:this.state.tweet,onChange:this.handleChange.bind(this,"tweet")})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Теги"),r.a.createElement("input",{type:"text",value:this.state.tags,onChange:this.handleChange.bind(this,"tags")})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"ВКонтакте (группа)"),r.a.createElement("textarea",{onClick:this.textareaSelect,className:"article-post-generator-textarea",readOnly:!0,value:this.generateVKGroup()})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"ВКонтакте (страница)"),r.a.createElement("textarea",{onClick:this.textareaSelect,className:"article-post-generator-textarea",readOnly:!0,value:this.generateVKPage()})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Facebook"),r.a.createElement("textarea",{onClick:this.textareaSelect,className:"article-post-generator-textarea",readOnly:!0,value:this.generateFacebook()})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"LinkedIn"),r.a.createElement("textarea",{onClick:this.textareaSelect,className:"article-post-generator-textarea",readOnly:!0,value:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Telegram"),r.a.createElement("textarea",{onClick:this.textareaSelect,className:"article-post-generator-textarea",readOnly:!0,value:this.generateTelegram()})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("textarea",{onClick:this.textareaSelect,className:"article-post-generator-textarea",readOnly:!0,value:n})))}}])&&s(n.prototype,a),l&&s(n,l),t}(a.Component)}}]);
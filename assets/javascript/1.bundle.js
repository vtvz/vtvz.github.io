(window.webpackJsonpmain=window.webpackJsonpmain||[]).push([[1],{8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(0),l=n.n(a);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,l=!1,r=void 0;try{for(var u,c=e[Symbol.iterator]();!(a=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(l)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h={2019:{usnPercent:6,pfr:29354,pfrPercent:3e5,pfrMax:234832,ffoms:6884},2020:{usnPercent:6,pfr:32448,pfrPercent:3e5,pfrMax:259584,ffoms:8426}},f={percent:"Процент от дохода",subscription:"Фиксированная абонентская плата"},y=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=i(this,(e=m(t)).call.apply(e,[this].concat(l)))).state={income:25e3,year:2020,bankStrategy:"percent",bankValue:1},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(a=[{key:"month",value:function(e){return Math.round(e/12)}},{key:"year",value:function(e){return Math.round(e)}},{key:"handleIncomeChange",value:function(e){this.setState({income:e.target.value})}},{key:"handleYearIncomeChange",value:function(e){this.setState({income:e.target.value/12})}},{key:"handleYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"handleBankStrategyChange",value:function(e){this.setState({bankStrategy:e.target.value})}},{key:"handleBankValueChange",value:function(e){this.setState({bankValue:e.target.value})}},{key:"render",value:function(){var e=h[this.state.year],t=12*this.state.income,n=t*this.state.bankValue/100;"percent"!==this.state.bankStrategy&&(n=12*this.state.bankValue);var a=e.pfr,r=Math.round(Math.max(0,.01*(t-e.pfrPercent))),c=Math.min(e.pfr+r,e.pfrMax),o=e.ffoms,i=o+c,m=Math.round(t*e.usnPercent/100),s=Math.max(0,m-i),y=i+s+n,E=t-y;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-lg-2"},l.a.createElement("label",null,"Год"),l.a.createElement("select",{value:this.state.year,onChange:this.handleYearChange.bind(this)},Object.keys(h).map((function(e){return l.a.createElement("option",{value:e,key:e},e)})))),l.a.createElement("div",{className:"col-sm-6 col-lg-5"},l.a.createElement("label",null,"Оплата расчетного счета в месяц"),l.a.createElement("select",{value:this.state.bankStrategy,onChange:this.handleBankStrategyChange.bind(this)},Object.entries(f).map((function(e){var t=u(e,2),n=t[0],a=t[1];return l.a.createElement("option",{value:n,key:n},a)})))),l.a.createElement("div",{className:"col-sm-6 col-lg-5"},l.a.createElement("label",null,"percent"===this.state.bankStrategy?"Процент":"Рублей в месяц"),l.a.createElement("input",{type:"number",min:"0",step:"",value:this.state.bankValue,onChange:this.handleBankValueChange.bind(this)}))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," "),l.a.createElement("th",null,"Месяц"),l.a.createElement("th",null,"Год"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Доход"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",min:"0",maxLength:8,value:Math.round(this.state.income),onChange:this.handleIncomeChange.bind(this)})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",min:"0",maxLength:8,value:t,onChange:this.handleYearIncomeChange.bind(this)}))),l.a.createElement("tr",null,l.a.createElement("th",null,"Комиссия банка"),l.a.createElement("td",null,this.month(n)),l.a.createElement("td",null,this.year(n))),l.a.createElement("tr",null,l.a.createElement("th",null,"ПФР"),l.a.createElement("td",null,this.month(a)),l.a.createElement("td",null,this.year(a))),l.a.createElement("tr",null,l.a.createElement("th",null,"ПФР 1% ",l.a.createElement("small",null,"(>",e.pfrPercent,")")),l.a.createElement("td",null,this.month(r)),l.a.createElement("td",null,this.year(r))),l.a.createElement("tr",null,l.a.createElement("th",null,"ПФР Итого"),l.a.createElement("td",null,this.month(c)),l.a.createElement("td",null,this.year(c))),l.a.createElement("tr",null,l.a.createElement("th",null,"ФФОМС"),l.a.createElement("td",null,this.month(o)),l.a.createElement("td",null,this.year(o))),l.a.createElement("tr",null,l.a.createElement("th",null,"Страховые взносы ",l.a.createElement("small",null,"ПФР + ФФОМС")),l.a.createElement("td",null,this.month(i)),l.a.createElement("td",null,this.year(i))),l.a.createElement("tr",null,l.a.createElement("th",null,"УСН ",e.usnPercent,"%"),l.a.createElement("td",null,this.month(m)),l.a.createElement("td",null,this.year(m))),l.a.createElement("tr",null,l.a.createElement("th",null,"УСН Без страховых"),l.a.createElement("td",null,this.month(s)),l.a.createElement("td",null,this.year(s))),l.a.createElement("tr",null,l.a.createElement("th",null,"Итого расходов"),l.a.createElement("td",null,this.month(y)),l.a.createElement("td",null,this.year(y))),l.a.createElement("tr",null,l.a.createElement("th",null,"Чистая прибыль"),l.a.createElement("td",null,this.month(E)),l.a.createElement("td",null,this.year(E)))))))}}])&&o(n.prototype,a),r&&o(n,r),t}(a.Component)}}]);
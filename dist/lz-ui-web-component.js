!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("lz-ui-web-component",[],t):"object"==typeof exports?exports["lz-ui-web-component"]=t():e["lz-ui-web-component"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=14)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===j.call(e)}function o(e){return"[object ArrayBuffer]"===j.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===j.call(e)}function p(e){return"[object File]"===j.call(e)}function d(e){return"[object Blob]"===j.call(e)}function h(e){return"[object Function]"===j.call(e)}function m(e){return f(e)&&h(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]="object"==typeof e?x({},e):e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function C(e,t,n){return b(t,function(t,r){e[r]=n&&"function"==typeof t?S(t,n):t}),e}var S=n(6),E=n(29),j=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:E,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:y,forEach:b,merge:w,deepMerge:x,extend:C,trim:g}},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(y){var i=d++;r=p||(p=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(g,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(19),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,m=function(){},v=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,v=o||{};var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=f[s.id];a.refs--,n.push(a)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete f[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,p=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(e,t){return f.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,f):[f]}return{esModule:s,exports:a,options:c}}},function(e,t,n){"use strict";t.a={name:"LzSwitch",data:function(){return{}},props:{value:{type:[Boolean,String,Number],default:!1},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1}},computed:{checked:function(){return this.value===this.activeValue}},methods:{handleChange:function(e){this.$emit("input",this.checked?this.inactiveValue:this.activeValue)}}}},function(e,t,n){"use strict";var r=n(25);t.a={name:"LzWigetIp",data:function(){return{wigetIp:{}}},props:{},created:function(){this.getIp()},methods:{getIp:function(){var e=this;Object(r.a)({t:(new Date).getTime()}).then(function(t){"0"===t.code&&(e.wigetIp=t.result,e.$emit("getIp",t.result))})}}}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(0),i=n(35),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?e=n(10):"undefined"!=typeof XMLHttpRequest&&(e=n(10)),e}(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,n(34))},function(e,t,n){"use strict";var r=n(0),o=n(36),i=n(7),s=n(38),a=n(39),u=n(11);e.exports=function(e){return new Promise(function(t,c){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,c,i),p=null}},p.onabort=function(){p&&(c(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){c(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var m=n(40),v=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;v&&(l[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),c(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},function(e,t,n){"use strict";var r=n(37);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=n(21),i=n(46),s=(n.n(i),[r.a,o.a]),a=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log(s),s.map(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&a(window.Vue),t.default={install:a,LzSwitch:r.a,LzWigetIp:o.a,version:"0.1.3"}},function(e,t,n){"use strict";var r=n(16);r.a.install=function(e){return e.component(Switch.name,Switch)},t.a=r.a},function(e,t,n){"use strict";function r(e){n(17)}var o=n(4),i=n(20),s=n(3),a=r,u=s(o.a,i.a,!1,a,null,null);t.a=u.exports},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("528f3050",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".switch{display:inline-block}.switch .wrapper{display:flex;align-items:center}.switch .wrapper>div,.switch .wrapper>span{float:left}.switch .wrapper input{display:none}.switch .wrapper .switch-box{width:40px;height:20px;background-color:#13ce66;border-radius:10px;display:flex;align-items:center;padding:0 2px;box-sizing:border-box;position:relative;cursor:pointer;margin-left:6px}.switch .wrapper .switch-box.closed{background-color:#ff4949}.switch .wrapper .switch-box span{width:16px;height:16px;border-radius:50%;display:inline-block;background-color:#fff;position:absolute;left:22px;transition:.2s}.switch .wrapper .switch-box span.closed{left:2px}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],c=i[3],f={id:e+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"switch"},[n("div",{staticClass:"wrapper"},[n("span",[e._t("default")],2),e._v(" "),n("div",{class:[{closed:!e.checked},"switch-box"],on:{click:function(t){return e.handleChange(e.value)}}},[n("span",{class:{closed:!e.checked}})]),e._v(" "),n("input",{attrs:{type:"checkbox","true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.disabled},domProps:{value:e.value},on:{change:e.handleChange}})])])},o=[],i={render:r,staticRenderFns:o};t.a=i},function(e,t,n){"use strict";var r=n(22);r.a.install=function(e){return e.component(Switch.name,WigetIp)},t.a=r.a},function(e,t,n){"use strict";function r(e){n(23)}var o=n(5),i=n(45),s=n(3),a=r,u=s(o.a,i.a,!1,a,null,null);t.a=u.exports},function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("b37bb562",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".lz-wiget-ip{display:inline-block}",""])},function(e,t,n){"use strict";function r(e){return Object(o.a)({url:"https://blog.jczxw.cn/api/ip",method:"get",params:i({},e)})}t.a=r;var o=n(26),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){"use strict";var r=n(27),o=n.n(r),i=o.a.create({timeout:5e3});i.interceptors.request.use(function(e){return e},function(e){return console.log(e),Promise.reject(e)}),i.interceptors.response.use(function(e){var t=e.data;return"0"!==t.code?Promise.reject(new Error(t.message||"Error")):t},function(e){return console.log("err"+e),Promise.reject(e)}),t.a=i},function(e,t,n){e.exports=n(28)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(0),i=n(6),s=n(30),a=n(12),u=n(9),c=r(u);c.Axios=s,c.create=function(e){return r(a(c.defaults,e))},c.Cancel=n(13),c.CancelToken=n(43),c.isCancel=n(8),c.all=function(e){return Promise.all(e)},c.spread=n(44),e.exports=c,e.exports.default=c},function(e,t){/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(0),i=n(7),s=n(31),a=n(32),u=n(12);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),i=n(33),s=n(8),a=n(9),u=n(41),c=n(42);e.exports=function(e){return r(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function s(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&a())}function a(){if(!m){var e=o(s);m=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,m=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,h=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||m||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(11);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(13);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"lz-wiget-ip"},[e._v("\n    "+e._s(e.wigetIp.country)+"-"+e._s(e.wigetIp.city)+"-"+e._s(e.wigetIp.isp)+"\n")])},o=[],i={render:r,staticRenderFns:o};t.a=i},function(e,t,n){var r=n(47);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("61f1812a",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,'a,article,body,button,dd,div,dl,dt,em,footer,form,h1,h2,h3,h4,header,html,iframe,img,input,li,nav,ol,p,span,strong,textarea,ul,var{padding:0;margin:0}body{font:12px/1.2rem Microsoft YaHei,tahoma,arial,sans-serif;min-width:320px;position:relative}form,input{background:none;border:none}dl,ol,ul{list-style-type:none}h1,h2,h3,h4,h5{font:12px/1.2rem Microsoft YaHei,arial,tahoma}a{text-decoration:none}a:focus,a:hover{outline:none}table{border-collapse:collapse;border-spacing:0}img{border:none}b,strong{font-weight:400}em,i,var{font-style:normal}p{text-indent:0}.clear{clear:both;height:0;line-height:0;overflow:hidden;width:0}.clearfix:after{clear:both;content:".";display:block;font-size:0;height:0;visibility:hidden}',""])}])});
//# sourceMappingURL=lz-ui-web-component.js.map
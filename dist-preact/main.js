/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={679:function(e,t,n){var r,o;!function(i,s){"use strict";void 0===(o="function"==typeof(r=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function i(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(r){return"debug"===r&&(r="log"),typeof console!==t&&("trace"===r&&n?i:void 0!==console[r]?o(console,r):void 0!==console.log?o(console,"log"):e)}function l(t,n){for(var o=0;o<r.length;o++){var i=r[o];this[i]=o<t?e:this.methodFactory(i,t,n)}this.log=this.debug}function u(e,n,r){return function(){typeof console!==t&&(l.call(this,n,r),this[e].apply(this,arguments))}}function c(e,t,n){return s(e)||u.apply(this,arguments)}function a(e,n,o){var i,s=this,u="loglevel";function a(){var e;if(typeof window!==t&&u){try{e=window.localStorage[u]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=n.indexOf(encodeURIComponent(u)+"=");-1!==r&&(e=/^([^;]+)/.exec(n.slice(r))[1])}catch(e){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?u+=":"+e:"symbol"==typeof e&&(u=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=o||c,s.getLevel=function(){return i},s.setLevel=function(n,o){if("string"==typeof n&&void 0!==s.levels[n.toUpperCase()]&&(n=s.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(i=n,!1!==o&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&u){try{return void(window.localStorage[u]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"="+n+";"}catch(e){}}}(n),l.call(s,n,e),typeof console===t&&n<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){a()||s.setLevel(e,!1)},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var f=a();null==f&&(f=null==n?"WARN":n),s.setLevel(f,!1)}var f=new a,p={};f.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=p[e];return t||(t=p[e]=new a(e,f.getLevel(),f.methodFactory)),t};var h=typeof window!==t?window.log:void 0;return f.noConflict=function(){return typeof window!==t&&window.log===f&&(window.log=h),f},f.getLoggers=function(){return p},f.default=f,f})?r.call(t,n,t,e):r)||(e.exports=o)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";var e=Object.defineProperty,t=(t,n,r)=>(((t,n,r)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r})(t,"symbol"!=typeof n?n+"":n,r),r);Object.defineProperty,HTMLElement;var r=Object.defineProperty;const o=new class{constructor(){var e,t,n;e=this,t="services",n=new Map,((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n)}register(e,t){if("string"==typeof e&&!1===this.services.has(e))return this.services.set(e,t),this;throw new Error(`The service '${e}' is allready registered!`)}get(e){if("string"==typeof e&&!0===this.services.has(e))return this.services.get(e);throw new Error(`The service '${e}' is not registered!`)}};var i=n(679);class s{constructor(){}static isNumber(e){return!1===isNaN(e)&&"number"==typeof e}static isArray(e,t=0){return Array.isArray(e)&&e.length>=t}static isObject(e){return"object"==typeof e&&null!==e&&!1===this.isArray(e)}static isString(e,t=0){return"string"==typeof e&&e.length>=t}}var l=Object.defineProperty,u=(e,t,n)=>(((e,t,n)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const c=[],a=class{constructor(e,t={}){u(this,"shield"),this.shield=[`%c${e}`,s.isString(t.shieldStyle,1)?t.shieldStyle:"color: white; background: #666; font-weight: bold; font-size: 10px; padding: 2px 6px; border-radius: 3px; border: 1px solid #000"]}static getInstance(e,t={}){if(s.isString(e,1))return!1===a.instances.has(e)&&a.instances.set(e,new a(e)),a.instances.get(e);throw new Error("The identifier of the Logger must be a string with a min length of 1.")}log(e,t){switch(s.isObject(t.refObject)&&"function"==typeof t.refObject.constructor&&s.isString(t.refObject.constructor.name)&&(t.className=`[${t.refObject.constructor.name}]:`),c.push({date:(new Date).toUTCString(),level:e,message:t}),e){case"trace":i.trace(...this.shield,t);break;case"debug":i.debug(...this.shield,t);break;case"info":i.info(...this.shield,t);break;case"warn":i.warn(...this.shield,t);break;case"error":default:i.error(...this.shield,t)}}trace(e,t){return this.log("trace",{messageText:e,refObject:t}),this}debug(e,t){return this.log("debug",{messageText:e,refObject:t}),this}info(e,t){return this.log("info",{messageText:e,refObject:t}),this}warn(e,t){return this.log("warn",{messageText:e,refObject:t}),this}error(e,t){return this.log("error",{messageText:e,refObject:t}),this}static get cache(){return[].concat(c)}};let f=a;u(f,"instances",new Map),i.setDefaultLevel("error");const p=f.getInstance("leanup");Object.defineProperty,new Intl.NumberFormat("de-DE",{currency:"EUR",maximumFractionDigits:2,minimumFractionDigits:2}),new Intl.DateTimeFormat("de-DE");var h=function(e,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function d(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function y(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}function m(e){return"function"==typeof e}function b(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}Object.create,Object.create;var g=b((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function w(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var S=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._teardowns=null}var t;return e.prototype.unsubscribe=function(){var e,t,n,r,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var s=d(i),l=s.next();!l.done;l=s.next())l.value.remove(this)}catch(t){e={error:t}}finally{try{l&&!l.done&&(t=s.return)&&t.call(s)}finally{if(e)throw e.error}}else i.remove(this);var u=this.initialTeardown;if(m(u))try{u()}catch(e){o=e instanceof g?e.errors:[e]}var c=this._teardowns;if(c){this._teardowns=null;try{for(var a=d(c),f=a.next();!f.done;f=a.next()){var p=f.value;try{E(p)}catch(e){o=null!=o?o:[],e instanceof g?o=y(y([],v(o)),v(e.errors)):o.push(e)}}}catch(e){n={error:e}}finally{try{f&&!f.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}if(o)throw new g(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)E(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&w(t,e)},e.prototype.remove=function(t){var n=this._teardowns;n&&w(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=((t=new e).closed=!0,t),e}(),k=S.EMPTY;function x(e){return e instanceof S||e&&"closed"in e&&m(e.remove)&&m(e.add)&&m(e.unsubscribe)}function E(e){m(e)?e():e.unsubscribe()}var L={setTimeout:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=L.delegate;return((null==n?void 0:n.setTimeout)||setTimeout).apply(void 0,y([],v(e)))},clearTimeout:function(e){var t=L.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function T(e){L.setTimeout((function(){throw e}))}function O(){}var C=I("C",void 0,void 0);function I(e,t,n){return{kind:e,value:t,error:n}}function P(e){e()}var A=function(e){function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,x(t)&&t.add(n)):n.destination=R,n}return _(t,e),t.create=function(e,t,n){return new j(e,t,n)},t.prototype.next=function(e){this.isStopped?D(function(e){return I("N",e,void 0)}(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?D(I("E",void 0,e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?D(C,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(S),j=function(e){function t(t,n,r){var o,i=e.call(this)||this;if(m(t))o=t;else if(t){var s;o=t.next,n=t.error,r=t.complete,s=t,o=null==o?void 0:o.bind(s),n=null==n?void 0:n.bind(s),r=null==r?void 0:r.bind(s)}return i.destination={next:o?N(o):O,error:N(null!=n?n:M),complete:r?N(r):O},i}return _(t,e),t}(A);function N(e,t){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{e.apply(void 0,y([],v(t)))}catch(e){T(e)}}}function M(e){throw e}function D(e,t){var n=null;n&&L.setTimeout((function(){return n(e,t)}))}var R={closed:!0,next:O,error:M,complete:O},U="function"==typeof Symbol&&Symbol.observable||"@@observable";function F(e){return e}function z(e){return 0===e.length?F:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var $=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r,o=this,i=(r=e)&&r instanceof A||function(e){return e&&m(e.next)&&m(e.error)&&m(e.complete)}(r)&&x(r)?e:new j(e,t,n);return P((function(){var e=o,t=e.operator,n=e.source;i.add(t?t.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=W(t))((function(t,r){var o;o=n.subscribe((function(t){try{e(t)}catch(e){r(e),null==o||o.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[U]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return z(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=W(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function W(e){var t;return null!==(t=null!=e?e:undefined)&&void 0!==t?t:Promise}var H=b((function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),V=function(e){function t(){var t=e.call(this)||this;return t.closed=!1,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return _(t,e),t.prototype.lift=function(e){var t=new q(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new H},t.prototype.next=function(e){var t=this;P((function(){var n,r;if(t._throwIfClosed(),!t.isStopped){var o=t.observers.slice();try{for(var i=d(o),s=i.next();!s.done;s=i.next())s.value.next(e)}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}}))},t.prototype.error=function(e){var t=this;P((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var n=t.observers;n.length;)n.shift().error(e)}}))},t.prototype.complete=function(){var e=this;P((function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,n=t.hasError,r=t.isStopped,o=t.observers;return n||r?k:(o.push(e),new S((function(){return w(o,e)})))},t.prototype._checkFinalizedStatuses=function(e){var t=this,n=t.hasError,r=t.thrownError,o=t.isStopped;n?e.error(r):o&&e.complete()},t.prototype.asObservable=function(){var e=new $;return e.source=this,e},t.create=function(e,t){return new q(e,t)},t}($),q=function(e){function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return _(t,e),t.prototype.next=function(e){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===n||n.call(t,e)},t.prototype.error=function(e){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===n||n.call(t,e)},t.prototype.complete=function(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)},t.prototype._subscribe=function(e){var t,n;return null!==(n=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==n?n:k},t}(V),B=function(e){function t(t){var n=e.call(this)||this;return n._value=t,n}return _(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},t.prototype.getValue=function(){var e=this,t=e.hasError,n=e.thrownError,r=e._value;if(t)throw n;return this._throwIfClosed(),r},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(V),G=Object.defineProperty,Y=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,K=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&K(e,n,t[n]);if(Y)for(var n of Y(t))X.call(t,n)&&K(e,n,t[n]);return e};o.register("ItemListService",new class{constructor(e="itemList"){this.name=e,this.itemList=this.restore(),this.itemList$=this.restore$(),this.notify()}notify(){this.itemList$.next(this.itemList)}restore(){const e=localStorage.getItem(this.name);return JSON.parse(e||"[]")}restore$(){return new B(this.restore())}store(){localStorage.setItem(this.name,JSON.stringify(Array.from(this.itemList)))}storeAndNotify(){this.store(),this.notify()}deleteItem(e){const t=this.itemList.indexOf(e);return t>=0&&(this.itemList.splice(t,1),this.storeAndNotify(),!0)}addItem(e){return this.itemList.indexOf(e)<0&&(this.itemList.push(e),this.storeAndNotify(),!0)}patchItem(e,t){const n=this.itemList.indexOf(e);return n>=0&&(this.itemList[n]=Q(Q({},this.itemList[n]),t),this.storeAndNotify(),!0)}});var Z,ee,te,ne,re,oe,ie={},se=[],le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function ue(e,t){for(var n in t)e[n]=t[n];return e}function ce(e){var t=e.parentNode;t&&t.removeChild(e)}function ae(e,t,n){var r,o,i,s={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?Z.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return fe(e,s,r,o,null)}function fe(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++te:o};return null!=ee.vnode&&ee.vnode(i),i}function pe(e){return e.children}function he(e,t){this.props=e,this.context=t}function _e(e,t){if(null==t)return e.__?_e(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?_e(e):null}function de(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return de(e)}}function ve(e){(!e.__d&&(e.__d=!0)&&ne.push(e)&&!ye.__r++||oe!==ee.debounceRendering)&&((oe=ee.debounceRendering)||re)(ye)}function ye(){for(var e;ye.__r=ne.length;)e=ne.sort((function(e,t){return e.__v.__b-t.__v.__b})),ne=[],e.some((function(e){var t,n,r,o,i,s;e.__d&&(i=(o=(t=e).__v).__e,(s=t.__P)&&(n=[],(r=ue({},o)).__v=o.__v+1,Ee(s,o,r,t.__n,void 0!==s.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?_e(o):i,o.__h),Le(n,o),o.__e!=i&&de(o)))}))}function me(e,t,n,r,o,i,s,l,u,c){var a,f,p,h,_,d,v,y=r&&r.__k||se,m=y.length;for(n.__k=[],a=0;a<t.length;a++)if(null!=(h=n.__k[a]=null==(h=t[a])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?fe(null,h,null,null,h):Array.isArray(h)?fe(pe,{children:h},null,null,null):h.__b>0?fe(h.type,h.props,h.key,null,h.__v):h)){if(h.__=n,h.__b=n.__b+1,null===(p=y[a])||p&&h.key==p.key&&h.type===p.type)y[a]=void 0;else for(f=0;f<m;f++){if((p=y[f])&&h.key==p.key&&h.type===p.type){y[f]=void 0;break}p=null}Ee(e,h,p=p||ie,o,i,s,l,u,c),_=h.__e,(f=h.ref)&&p.ref!=f&&(v||(v=[]),p.ref&&v.push(p.ref,null,h),v.push(f,h.__c||_,h)),null!=_?(null==d&&(d=_),"function"==typeof h.type&&null!=h.__k&&h.__k===p.__k?h.__d=u=be(h,u,e):u=ge(e,h,p,y,_,u),c||"option"!==n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&p.__e==u&&u.parentNode!=e&&(u=_e(p))}for(n.__e=d,a=m;a--;)null!=y[a]&&("function"==typeof n.type&&null!=y[a].__e&&y[a].__e==n.__d&&(n.__d=_e(r,a+1)),Oe(y[a],y[a]));if(v)for(a=0;a<v.length;a++)Te(v[a],v[++a],v[++a])}function be(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?be(o,t,n):ge(n,o,o,e.__k,o.__e,t));return t}function ge(e,t,n,r,o,i){var s,l,u;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),s=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==o)break e;e.insertBefore(o,i),s=i}return void 0!==s?s:o.nextSibling}function we(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||le.test(t)?n:n+"px"}function Se(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||we(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||we(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?xe:ke,i):e.removeEventListener(t,i?xe:ke,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function ke(e){this.l[e.type+!1](ee.event?ee.event(e):e)}function xe(e){this.l[e.type+!0](ee.event?ee.event(e):e)}function Ee(e,t,n,r,o,i,s,l,u){var c,a,f,p,h,_,d,v,y,m,b,g=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,l=t.__e=n.__e,t.__h=null,i=[l]),(c=ee.__b)&&c(t);try{e:if("function"==typeof g){if(v=t.props,y=(c=g.contextType)&&r[c.__c],m=c?y?y.props.value:c.__:r,n.__c?d=(a=t.__c=n.__c).__=a.__E:("prototype"in g&&g.prototype.render?t.__c=a=new g(v,m):(t.__c=a=new he(v,m),a.constructor=g,a.render=Ce),y&&y.sub(a),a.props=v,a.state||(a.state={}),a.context=m,a.__n=r,f=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=g.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=ue({},a.__s)),ue(a.__s,g.getDerivedStateFromProps(v,a.__s))),p=a.props,h=a.state,f)null==g.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==g.getDerivedStateFromProps&&v!==p&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(v,m),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(v,a.__s,m)||t.__v===n.__v){a.props=v,a.state=a.__s,t.__v!==n.__v&&(a.__d=!1),a.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),a.__h.length&&s.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(v,a.__s,m),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(p,h,_)}))}a.context=m,a.props=v,a.state=a.__s,(c=ee.__r)&&c(t),a.__d=!1,a.__v=t,a.__P=e,c=a.render(a.props,a.state,a.context),a.state=a.__s,null!=a.getChildContext&&(r=ue(ue({},r),a.getChildContext())),f||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(p,h)),b=null!=c&&c.type===pe&&null==c.key?c.props.children:c,me(e,Array.isArray(b)?b:[b],t,n,r,o,i,s,l,u),a.base=t.__e,t.__h=null,a.__h.length&&s.push(a),d&&(a.__E=a.__=null),a.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,o,i,s,l){var u,c,a,f=n.props,p=t.props,h=t.type,_=0;if("svg"===h&&(o=!0),null!=i)for(;_<i.length;_++)if((u=i[_])&&(u===e||(h?u.localName==h:3==u.nodeType))){e=u,i[_]=null;break}if(null==e){if(null===h)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,p.is&&p),i=null,l=!1}if(null===h)f===p||l&&e.data===p||(e.data=p);else{if(i=i&&Z.call(e.childNodes),c=(f=n.props||ie).dangerouslySetInnerHTML,a=p.dangerouslySetInnerHTML,!l){if(null!=i)for(f={},_=0;_<e.attributes.length;_++)f[e.attributes[_].name]=e.attributes[_].value;(a||c)&&(a&&(c&&a.__html==c.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||Se(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||Se(e,i,t[i],n[i],r)}(e,p,f,o,l),a)t.__k=[];else if(_=t.props.children,me(e,Array.isArray(_)?_:[_],t,n,r,o&&"foreignObject"!==h,i,s,i?i[0]:n.__k&&_e(n,0),l),null!=i)for(_=i.length;_--;)null!=i[_]&&ce(i[_]);l||("value"in p&&void 0!==(_=p.value)&&(_!==e.value||"progress"===h&&!_)&&Se(e,"value",_,f.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==e.checked&&Se(e,"checked",_,f.checked,!1))}return e}(n.__e,t,n,r,o,i,s,u);(c=ee.diffed)&&c(t)}catch(e){t.__v=null,(u||null!=i)&&(t.__e=l,t.__h=!!u,i[i.indexOf(l)]=null),ee.__e(e,t,n)}}function Le(e,t){ee.__c&&ee.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){ee.__e(e,t.__v)}}))}function Te(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){ee.__e(e,n)}}function Oe(e,t,n){var r,o;if(ee.unmount&&ee.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Te(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){ee.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Oe(r[o],t,"function"!=typeof e.type);n||null==e.__e||ce(e.__e),e.__e=e.__d=void 0}function Ce(e,t,n){return this.constructor(e,n)}Z=se.slice,ee={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},te=0,he.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=ue({},this.state),"function"==typeof e&&(e=e(ue({},n),this.props)),e&&ue(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),ve(this))},he.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ve(this))},he.prototype.render=pe,ne=[],re="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ye.__r=0;class Ie extends class{constructor(e){t(this,"couple"),t(this,"doRenderTimeout"),this.couple=e}doRender(){var e,t;"function"==typeof(null==(t=null==(e=this.couple)?void 0:e.hooks)?void 0:t.doRender)&&(clearTimeout(this.doRenderTimeout),this.doRenderTimeout=setTimeout((()=>{var e,t;null==(t=null==(e=this.couple)?void 0:e.hooks)||t.doRender()}),50))}}{constructor(e){super(e),this.itemListService=o.get("ItemListService"),this.itemList=[],this.modalVisible=!0,this.itemListService.itemList$.subscribe({next:e=>{this.itemList=e,console.log(this.itemList),this.doRender()}}),this.item=this.createItem()}createItem(){return{name:"",anzahl:1,preis:0,erledigt:!1}}deleteItem(e){this.itemListService.deleteItem(e)}addItem(e){this.itemListService.addItem(e)&&(this.item=this.createItem(),this.toggleModal(!1))}setErledigt(e){this.itemListService.patchItem(e,{erledigt:!e.erledigt})}toggleModal(e){this.modalVisible=e,this.doRender()}openModal(){this.toggleModal(!0)}closeModal(){this.toggleModal(!1)}}class Pe extends he{constructor(e){super(e),this.ctrl=new Ie({hooks:{doRender:this.forceUpdate.bind(this)}}),this.state=this.ctrl}handleChange(e,{currentTarget:t}){switch(e){case"name":this.ctrl.item.name=t.value;break;case"preis":this.ctrl.item.preis=parseFloat(t.value);break;case"anzahl":this.ctrl.item.anzahl=parseInt(t.value,10)}this.forceUpdate()}render(){return ae(pe,null,ae("header",{class:"header"},ae("h1",null,"Einkaufsliste"),ae("button",{onClick:()=>{this.ctrl.openModal()}},"+")),ae("main",null,ae("ul",null,Array.from(this.state.itemList).map(((e,t)=>ae("li",{key:t,onClick:()=>{this.ctrl.setErledigt(e)},class:e.erledigt?"checked":void 0},e.anzahl,"x ",e.name,ae("span",{class:"close",onClick:()=>{this.ctrl.deleteItem(e)}},"X")))))),ae("form",{onSubmit:e=>{e.preventDefault(),this.ctrl.addItem(this.state.item)},class:"modal",style:{display:this.state.modalVisible?"block":"none"}},ae("div",{class:"modal-content"},ae("span",{class:"close",onClick:()=>{this.ctrl.closeModal()}},"×"),ae("label",null,ae("i",{class:"fa fa-user icon"}),"Name:",ae("br",null),ae("input",{autoFocus:!0,required:!0,value:this.state.item.name,onChange:e=>{this.handleChange("name",e)},type:"text",name:"name"})),ae("label",null,ae("i",{class:"fa fa-envelope icon"}),"Anzahl:",ae("br",null),ae("input",{required:!0,type:"number",name:"anzahl",value:this.state.item.anzahl,onChange:e=>{this.handleChange("anzahl",e)}})),ae("label",null,ae("i",{class:"fa fa-key icon"}),"Preis:",ae("br",null),ae("input",{required:!0,type:"number",name:"preis",value:this.state.item.preis,onChange:e=>{this.handleChange("preis",e)}})),ae("button",null,"Hinzufügen"))))}}p.info("Test");const Ae=document.querySelector("div#app");var je,Ne,Me,De,Re,Ue;Ae instanceof HTMLDivElement&&(je=ae(Pe,null),Ne=Ae,ee.__&&ee.__(je,Ne),Re=(De="function"==typeof Me)?null:Me&&Me.__k||Ne.__k,Ue=[],Ee(Ne,je=(!De&&Me||Ne).__k=ae(pe,null,[je]),Re||ie,ie,void 0!==Ne.ownerSVGElement,!De&&Me?[Me]:Re?null:Ne.firstChild?Z.call(Ne.childNodes):null,Ue,!De&&Me?Me:Re?Re.__e:Ne.firstChild,De),Le(Ue,je))})()})();
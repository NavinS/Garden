var core_bootstrapAdmin=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/js/",t(t.s=4)}([function(e,t){e.exports=lib_core_admin},function(e,t,n){e.exports=n(0)(8)},function(e,t,n){e.exports=n(0)(166)},function(e,t,n){e.exports=n(0)(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),u=n(2),c=n(5),a=o(n(10)),i=o(n(11));(0,u.debug)((0,r.getMeta)("debug",!1)),a.default.apiv2=i.default,(0,r.onContent)(function(e){(0,c._mountComponents)(e.target)}),(0,u.log)("Bootstrapping"),(0,r._executeReady)().then(function(){(0,u.log)("Bootstrapping complete.");var e=new CustomEvent("X-DOMContentReady",{bubbles:!0,cancelable:!1});document.dispatchEvent(e)}).catch(function(e){(0,u.logError)(e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._mountComponents=function(e){Object(o.componentExists)("App")||Object(o.addComponent)("App",u.a);const t=e.querySelectorAll("[data-react]");Array.prototype.forEach.call(t,e=>{const t=e.getAttribute("data-react"),n=Object(o.getComponent)(t);n?f.a.render(i.a.createElement(n,null),e):Object(c.logError)("Could not find component %s.",t)})};var o=n(1),r=n(6),u=n.n(r),c=n(2),a=n(3),i=n.n(a),p=n(9),f=n.n(p)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=o(n(3)),a=n(1),i=n(7),p=o(n(8)),f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.PureComponent),u(t,[{key:"render",value:function(){var e=(0,a.getRoutes)().map(function(e){return c.default.createElement(e.type,r({key:e.key||e.props.path+(e.props.exact?"!":"")},e.props))});return e.push(c.default.createElement(i.Route,{key:"@not-found",component:p.default})),c.default.createElement(i.BrowserRouter,{basename:(0,a.getMeta)("basePath","")},c.default.createElement(i.Switch,null,e))}}]),t}();t.default=f},function(e,t,n){e.exports=n(0)(229)},function(e,t,n){e.exports=n(0)(257)},function(e,t,n){e.exports=n(0)(192)},function(e,t,n){e.exports=n(0)(11)},function(e,t,n){e.exports=n(0)(169)}]);
//# sourceMappingURL=core-bootstrap-admin.js.map
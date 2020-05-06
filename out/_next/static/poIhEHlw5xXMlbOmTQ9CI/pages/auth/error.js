(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{894:function(e,t,n){__NEXT_REGISTER_PAGE("/auth/error",function(){return e.exports=n(895),{page:e.exports.default}})},895:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(6),a=n.n(r),o=n(0),i=n.n(o),c=n(13),s=n.n(c),l=n(15),u=n(10);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function v(e){return function(){var t,n=d(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=d(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,t)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,l["a"]);var t,n,r,o=v(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return t=c,n=[{key:"render",value:function(){return"signin"==this.props.action&&"oauth"==this.props.type?i.a.createElement(u.a,m({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-3 whiteOnBlack"},"Unable to sign in"),i.a.createElement("p",{className:"lead whiteOnBlack"},"An account associated with your email address already exists."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 mr-auto ml-auto mb-5"},i.a.createElement("div",{className:"text-muted"},i.a.createElement("h4",{className:"mb-2"},"Why am I seeing this?"),i.a.createElement("p",{className:"mb-2"},"It looks like you might have already signed up using another service."),i.a.createElement("p",{className:"mb-3"},"To protect your account, if you have perviously signed up using another service you must link accounts before you can use a different service to sign in."),i.a.createElement("h4",{className:"mb-2"},"How do I fix this?"),i.a.createElement("p",{className:"mb-0"},"To sign in using another service, first sign in using your email address then link accounts."))))):"signin"==this.props.action&&"token-invalid"==this.props.type?i.a.createElement(u.a,m({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-2"},"Link not valid"),i.a.createElement("p",{className:"lead"},"This sign in link is no longer valid."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Get a new sign in link"))))):i.a.createElement(u.a,m({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 whiteOnBlack"},"Error signing in"),i.a.createElement("p",{className:"lead whiteOnBlack"},"An error occured while trying to sign in."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))))}}],r=[{key:"getInitialProps",value:function(){var e,t=(e=a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,r=t.query,e.next=3,y(d(c),"getInitialProps",this).call(this,{req:n});case 3:return(o=e.sent).action=r.action||null,o.type=r.type||null,o.service=r.service||null,e.abrupt("return",o);case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){p(o,r,a,i,c,"next",e)}function c(e){p(o,r,a,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&h(t.prototype,n),r&&h(t,r),c}()}},[[894,1,0]]]);
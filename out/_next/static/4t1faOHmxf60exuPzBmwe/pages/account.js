(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{847:function(e,t,n){__NEXT_REGISTER_PAGE("/account",function(){return e.exports=n(848),{page:e.exports.default}})},848:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _}),n.d(t,"LinkAccounts",function(){return j}),n.d(t,"LinkAccount",function(){return T});var r=n(6),a=n.n(r),o=n(0),i=n.n(o),s=(n(26),n(13)),c=n.n(s),u=n(79),l=n.n(u),m=n(5),f=n(19),p=n(15),h=n(10),d=n(40);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function E(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,s,"next",e)}function s(e){b(o,r,a,i,s,"throw",e)}i(void 0)})}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),e}function x(e){return function(){var t,n=N(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=N(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;return S(e)}(this,t)}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){O(n,p["a"]);var t=x(n);function n(e){var r;return g(this,n),(r=t.call(this,e)).state={session:e.session,isSignedIn:!!e.session.user,name:"",email:"",emailVerified:!1,alertText:null,alertStyle:null},e.session.user&&(r.state.name=e.session.user.name,r.state.email=e.session.user.email),r.handleChange=r.handleChange.bind(S(r)),r.onSubmit=r.onSubmit.bind(S(r)),r}return k(n,null,[{key:"getServerSideProps",value:function(){var e=E(a.a.mark(function e(t){var r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.req,e.next=3,C(N(n),"getServerSideProps",this).call(this,{req:r});case 3:return o=e.sent,e.next=6,f.NextAuth.linked({req:r});case 6:return o.linkedAccounts=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),k(n,[{key:"componentDidMount",value:function(){var e=E(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.NextAuth.init({force:!0});case 2:t=e.sent,this.setState({session:t,isSignedIn:!!t.user}),(new d.a).set("redirect_url",window.location.pathname,{path:"/"}),this.getProfile();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getProfile",value:function(){var e=this;l()("/account/user",{credentials:"include"}).then(function(e){return e.json()}).then(function(t){t.name&&t.email&&e.setState({name:t.name,email:t.email,emailVerified:t.emailVerified})})}},{key:"handleChange",value:function(e){var t,n,r;this.setState((t={},n=e.target.name,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"onSubmit",value:function(){var e=E(a.a.mark(function e(t){var n,r,o=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({alertText:null,alertStyle:null}),e.next=4,f.NextAuth.csrfToken();case 4:e.t0=e.sent,e.t1=this.state.name||"",e.t2=this.state.email||"",n={_csrf:e.t0,name:e.t1,email:e.t2},r=Object.keys(n).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])}).join("&"),l()("/account/user",{credentials:"include",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r}).then(function(){var e=E(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=11;break}return o.getProfile(),o.setState({alertText:"Changes to your profile have been saved",alertStyle:"alert-success"}),e.t0=o,e.next=6,f.NextAuth.init({force:!0});case 6:e.t1=e.sent,e.t2={session:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=17;break;case 11:return e.t3=o,e.next=14,f.NextAuth.init({force:!0});case 14:e.t4=e.sent,e.t5={session:e.t4,alertText:"Failed to save changes to your profile",alertStyle:"alert-danger"},e.t3.setState.call(e.t3,e.t5);case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!0===this.state.isSignedIn){var e=null===this.state.alertText?i.a.createElement("div",null):i.a.createElement("div",{className:"alert ".concat(this.state.alertStyle),role:"alert"},this.state.alertText);return i.a.createElement(h.a,v({},this.props,{navmenu:!1}),i.a.createElement(m.r,{className:"mb-1"},i.a.createElement(m.b,{xs:"12"},i.a.createElement("h1",{className:"display-2"},"Your Account"),i.a.createElement("p",{className:"lead text-muted"},"Edit your profile and link accounts"))),e,i.a.createElement(m.r,{className:"mt-4"},i.a.createElement(m.b,{xs:"12",md:"8",lg:"9"},i.a.createElement(m.d,{method:"post",action:"/account/user",onSubmit:this.onSubmit},i.a.createElement(m.f,{name:"_csrf",type:"hidden",value:this.state.session.csrfToken,onChange:function(){}}),i.a.createElement(m.e,{row:!0},i.a.createElement(m.h,{sm:2},"Name:"),i.a.createElement(m.b,{sm:10,md:8},i.a.createElement(m.f,{name:"name",value:this.state.name,onChange:this.handleChange}))),i.a.createElement(m.e,{row:!0},i.a.createElement(m.h,{sm:2},"Email:"),i.a.createElement(m.b,{sm:10,md:8},i.a.createElement(m.f,{name:"email",value:this.state.email.match(/.*@localhost\.localdomain$/)?"":this.state.email,onChange:this.handleChange}))),i.a.createElement(m.e,{row:!0},i.a.createElement(m.b,{sm:12,md:10},i.a.createElement("p",{className:"text-right"},i.a.createElement(m.a,{color:"primary",type:"submit"},"Save Changes")))))),i.a.createElement(m.b,{xs:"12",md:"4",lg:"3"},i.a.createElement(j,{session:this.props.session,linkedAccounts:this.props.linkedAccounts}))),i.a.createElement(m.r,null,i.a.createElement(m.b,null,i.a.createElement("h2",null,"Delete your account"),i.a.createElement("p",null,"If you delete your account it will be erased immediately. You can sign up again at any time."),i.a.createElement(m.d,{id:"signout",method:"post",action:"/account/delete"},i.a.createElement("input",{name:"_csrf",type:"hidden",value:this.state.session.csrfToken}),i.a.createElement(m.a,{type:"submit",color:"outline-danger"},i.a.createElement("span",{className:"icon ion-md-trash mr-1"})," Delete Account")))))}return i.a.createElement(h.a,v({},this.props,{navmenu:!1}),i.a.createElement(m.r,null,i.a.createElement(m.b,{xs:"12",className:"text-center pt-5 pb-5"},i.a.createElement("p",{className:"lead m-0"},i.a.createElement(c.a,{href:"/auth"},i.a.createElement("a",null,"Sign in to manage your profile"))))))}}]),n}(),j=function(e){O(n,i.a.Component);var t=x(n);function n(){return g(this,n),t.apply(this,arguments)}return k(n,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,Object.keys(this.props.linkedAccounts).map(function(t,n){return i.a.createElement(T,{key:n,provider:t,session:e.props.session,linked:e.props.linkedAccounts[t]})}))}}]),n}(),T=function(e){O(n,i.a.Component);var t=x(n);function n(){return g(this,n),t.apply(this,arguments)}return k(n,[{key:"render",value:function(){return!0===this.props.linked?i.a.createElement("form",{method:"post",action:"/auth/oauth/".concat(this.props.provider.toLowerCase(),"/unlink")},i.a.createElement("input",{name:"_csrf",type:"hidden",value:this.props.session.csrfToken}),i.a.createElement("p",null,i.a.createElement("button",{className:"btn btn-block btn-outline-danger",type:"submit"},"Unlink from ",this.props.provider))):i.a.createElement("p",null,i.a.createElement("a",{className:"btn btn-block btn-outline-primary",href:"/auth/oauth/".concat(this.props.provider.toLowerCase())},"Link with ",this.props.provider))}}]),n}()}},[[847,1,0]]]);
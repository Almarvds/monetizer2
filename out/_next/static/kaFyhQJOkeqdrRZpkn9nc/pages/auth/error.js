(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{H5iX:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n("o0o1"),i=n.n(a),r=n("wx14"),s=n("1OyB"),c=n("vuIU"),o=n("ReuC"),u=n("Ji7U"),l=n("md7G"),p=n("foSv"),h=n("q1tI"),f=n.n(h),m=n("YFqc"),d=n.n(m),v=n("PQhJ"),y=n("CafY"),g=f.a.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var i=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var w=function(e){Object(u.a)(n,e);var t=b(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return"signin"==this.props.action&&"oauth"==this.props.type?g(y.a,Object(r.a)({},this.props,{navmenu:!1}),g("div",{className:"text-center mb-5"},g("h1",{className:"display-4 mt-5 mb-3 whiteOnBlack"},"Unable to sign in"),g("p",{className:"lead whiteOnBlack"},"An account associated with your email address already exists."),g("p",{className:"lead"},g(d.a,{href:"/auth"},g("a",null,"Sign in with email or another service")))),g("div",{className:"row"},g("div",{className:"col-sm-8 mr-auto ml-auto mb-5"},g("div",{className:"text-muted"},g("h4",{className:"mb-2"},"Why am I seeing this?"),g("p",{className:"mb-2"},"It looks like you might have already signed up using another service."),g("p",{className:"mb-3"},"To protect your account, if you have perviously signed up using another service you must link accounts before you can use a different service to sign in."),g("h4",{className:"mb-2"},"How do I fix this?"),g("p",{className:"mb-0"},"To sign in using another service, first sign in using your email address then link accounts."))))):"signin"==this.props.action&&"token-invalid"==this.props.type?g(y.a,Object(r.a)({},this.props,{navmenu:!1}),g("div",{className:"text-center mb-5"},g("h1",{className:"display-4 mt-5 mb-2"},"Link not valid"),g("p",{className:"lead"},"This sign in link is no longer valid."),g("p",{className:"lead"},g(d.a,{href:"/auth"},g("a",null,"Get a new sign in link"))))):g(y.a,Object(r.a)({},this.props,{navmenu:!1}),g("div",{className:"text-center mb-5"},g("h1",{className:"display-4 mt-5 whiteOnBlack"},"Error signing in"),g("p",{className:"lead whiteOnBlack"},"An error occured while trying to sign in."),g("p",{className:"lead"},g(d.a,{href:"/auth"},g("a",null,"Sign in with email or another service")))))}}],[{key:"getInitialProps",value:function(e){var t,a,r;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.req,a=e.query,s.next=3,i.a.awrap(Object(o.a)(Object(p.a)(n),"getInitialProps",this).call(this,{req:t}));case 3:return(r=s.sent).action=a.action||null,r.type=a.type||null,r.service=a.service||null,s.abrupt("return",r);case 8:case"end":return s.stop()}}),null,this,null,Promise)}}]),n}(v.a)},ReuC:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("foSv");function i(e,t,n){return(i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(a.a)(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}},o097:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/error",function(){return n("H5iX")}])}},[["o097",1,2,7,4,0,3,5,6,8]]]);
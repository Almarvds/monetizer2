(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ReuC:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("foSv");function r(e,t,n){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(a.a)(e)););return e}(e,t);if(r){var s=Object.getOwnPropertyDescriptor(r,t);return s.get?s.get.call(n):s.value}})(e,t,n||e)}},ZMap:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return n("cdae")}])},cdae:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N})),n.d(t,"LinkAccounts",(function(){return P})),n.d(t,"LinkAccount",(function(){return A}));var a=n("wx14"),r=n("rePB"),s=n("o0o1"),i=n.n(s),o=n("1OyB"),c=n("JX7q"),u=n("vuIU"),l=n("Ji7U"),p=n("md7G"),h=n("ReuC"),f=n("foSv"),m=n("q1tI"),d=n.n(m),b=(n("nOHt"),n("YFqc")),v=n.n(b),y=n("LpSC"),g=n.n(y),w=n("xkgm"),k=n("nGE6"),x=n("PQhJ"),O=n("CafY"),j=n("9ONQ"),S=d.a.createElement;function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(p.a)(this,n)}}var N=function(e){Object(l.a)(n,e);var t=C(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={session:e.session,isSignedIn:!!e.session.user,name:"",email:"",emailVerified:!1,alertText:null,alertStyle:null},e.session.user&&(a.state.name=e.session.user.name,a.state.email=e.session.user.email),a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.onSubmit=a.onSubmit.bind(Object(c.a)(a)),a}return Object(u.a)(n,null,[{key:"getInitialProps",value:function(e){var t,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.req,r.next=3,i.a.awrap(Object(h.a)(Object(f.a)(n),"getInitialProps",this).call(this,{req:t}));case 3:return a=r.sent,r.next=6,i.a.awrap(k.NextAuth.linked({req:t}));case 6:return a.linkedAccounts=r.sent,r.abrupt("return",a);case 8:case"end":return r.stop()}}),null,this,null,Promise)}}]),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(k.NextAuth.init({force:!0}));case 2:e=t.sent,this.setState({session:e,isSignedIn:!!e.user}),(new j.a).set("redirect_url",window.location.pathname,{path:"/"}),this.getProfile();case 7:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"getProfile",value:function(){var e=this;g()("/account/user",{credentials:"include"}).then((function(e){return e.json()})).then((function(t){t.name&&t.email&&e.setState({name:t.name,email:t.email,emailVerified:t.emailVerified})}))}},{key:"handleChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t,n,a=this;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),this.setState({alertText:null,alertStyle:null}),r.next=4,i.a.awrap(k.NextAuth.csrfToken());case 4:r.t0=r.sent,r.t1=this.state.name||"",r.t2=this.state.email||"",t={_csrf:r.t0,name:r.t1,email:r.t2},n=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"),g()("/account/user",{credentials:"include",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}).then((function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==e.status){t.next=11;break}return a.getProfile(),a.setState({alertText:"Changes to your profile have been saved",alertStyle:"alert-success"}),t.t0=a,t.next=6,i.a.awrap(k.NextAuth.init({force:!0}));case 6:t.t1=t.sent,t.t2={session:t.t1},t.t0.setState.call(t.t0,t.t2),t.next=17;break;case 11:return t.t3=a,t.next=14,i.a.awrap(k.NextAuth.init({force:!0}));case 14:t.t4=t.sent,t.t5={session:t.t4,alertText:"Failed to save changes to your profile",alertStyle:"alert-danger"},t.t3.setState.call(t.t3,t.t5);case 17:case"end":return t.stop()}}),null,null,null,Promise)}));case 10:case"end":return r.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){if(!0===this.state.isSignedIn){var e=null===this.state.alertText?S("div",null):S("div",{className:"alert ".concat(this.state.alertStyle),role:"alert"},this.state.alertText);return S(O.a,Object(a.a)({},this.props,{navmenu:!1}),S(w.r,{className:"mb-1"},S(w.b,{xs:"12"},S("h1",{className:"display-2"},"Your Account"),S("p",{className:"lead text-muted"},"Edit your profile and link accounts"))),e,S(w.r,{className:"mt-4"},S(w.b,{xs:"12",md:"8",lg:"9"},S(w.d,{method:"post",action:"/account/user",onSubmit:this.onSubmit},S(w.f,{name:"_csrf",type:"hidden",value:this.state.session.csrfToken,onChange:function(){}}),S(w.e,{row:!0},S(w.h,{sm:2},"Name:"),S(w.b,{sm:10,md:8},S(w.f,{name:"name",value:this.state.name,onChange:this.handleChange}))),S(w.e,{row:!0},S(w.h,{sm:2},"Email:"),S(w.b,{sm:10,md:8},S(w.f,{name:"email",value:this.state.email.match(/.*@localhost\.localdomain$/)?"":this.state.email,onChange:this.handleChange}))),S(w.e,{row:!0},S(w.b,{sm:12,md:10},S("p",{className:"text-right"},S(w.a,{color:"primary",type:"submit"},"Save Changes")))))),S(w.b,{xs:"12",md:"4",lg:"3"},S(P,{session:this.props.session,linkedAccounts:this.props.linkedAccounts}))),S(w.r,null,S(w.b,null,S("h2",null,"Delete your account"),S("p",null,"If you delete your account it will be erased immediately. You can sign up again at any time."),S(w.d,{id:"signout",method:"post",action:"/account/delete"},S("input",{name:"_csrf",type:"hidden",value:this.state.session.csrfToken}),S(w.a,{type:"submit",color:"outline-danger"},S("span",{className:"icon ion-md-trash mr-1"})," Delete Account")))))}return S(O.a,Object(a.a)({},this.props,{navmenu:!1}),S(w.r,null,S(w.b,{xs:"12",className:"text-center pt-5 pb-5"},S("p",{className:"lead m-0"},S(v.a,{href:"/auth"},S("a",null,"Sign in to manage your profile"))))))}}]),n}(x.a),P=function(e){Object(l.a)(n,e);var t=C(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return S(d.a.Fragment,null,Object.keys(this.props.linkedAccounts).map((function(t,n){return S(A,{key:n,provider:t,session:e.props.session,linked:e.props.linkedAccounts[t]})})))}}]),n}(d.a.Component),A=function(e){Object(l.a)(n,e);var t=C(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return!0===this.props.linked?S("form",{method:"post",action:"/auth/oauth/".concat(this.props.provider.toLowerCase(),"/unlink")},S("input",{name:"_csrf",type:"hidden",value:this.props.session.csrfToken}),S("p",null,S("button",{className:"btn btn-block btn-outline-danger",type:"submit"},"Unlink from ",this.props.provider))):S("p",null,S("a",{className:"btn btn-block btn-outline-primary",href:"/auth/oauth/".concat(this.props.provider.toLowerCase())},"Link with ",this.props.provider))}}]),n}(d.a.Component)},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}},[["ZMap",1,2,7,4,0,3,5,6,8]]]);
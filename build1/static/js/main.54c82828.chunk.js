(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[1],{114:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),l=n(5),s=n(1),i=n(6),u=(n(91),n(20)),m=n(13),p=n(14),h=n(22),E=n(7),d=n.n(E),f=n(16),b=n(33),y=n.n(b),j=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,y.a.get("".concat("http://localhost:8000","/auth/users/me/"),n);case 5:return a=e.sent,t({type:"USER_LOADED_SUCCESS",payload:a.data}),e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(2),t({type:"USER_LOADED_FAIL"});case 13:e.next=16;break;case 15:t({type:"USER_LOADED_FAIL"});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,y.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),a,n);case 6:"token_not_valid"!==e.sent.data.code?t({type:"AUTHENTICATED_SUCCESS"}):t({type:"AUTHENTICATED_FAIL"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:"AUTHENTICATED_FAIL"});case 13:e.next=16;break;case 15:t({type:"AUTHENTICATED_FAIL"});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},_=n(74),v=n.n(_),O=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(f.a)(d.a.mark((function n(a){var r,c,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,y.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),c,r);case 5:o=n.sent,a({type:"LOGIN_SUCCESS",payload:o.data}),a(j()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:"LOGIN_FAIL"});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),o=Object(p.a)(c,2),h=o[0],E=o[1],d=h.email,f=h.password,b=function(e){return E(Object(m.a)(Object(m.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))};return n?r.a.createElement(l.a,{to:"/mapview"}):r.a.createElement(s.j,null,r.a.createElement(s.d,null,r.a.createElement(s.f,{src:v.a}),r.a.createElement("form",{className:"ion-padding",onSubmit:function(e){return function(e){e.preventDefault(),t(d,f)}(e)}},r.a.createElement("br",null),r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.p,color:"primary"})),r.a.createElement(s.g,{type:"email",placeholder:"Email",name:"email",onIonChange:function(e){return b(e)},required:!0})),r.a.createElement("br",null),r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.j,color:"primary"})),r.a.createElement(s.g,{type:"password",placeholder:"Password",name:"password",onIonChange:function(e){return b(e)},required:!0})),r.a.createElement("br",null),r.a.createElement(s.b,{type:"submit",expand:"block",size:"large",shape:"round",class:"button_primary_white_text"},r.a.createElement(s.e,{slot:"start",icon:i.k}),"Login")),r.a.createElement(s.h,{class:"ion-text-center",lines:"none"},r.a.createElement(s.i,null,"Don't have an account?"),r.a.createElement(s.b,{color:"secondary",fill:"outline",shape:"round",href:"/register"},r.a.createElement(s.e,{slot:"start",icon:i.c}),"Join the Community!"))))})),A=n(75),S=n.n(A),w=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,n,a,r,c){return function(){var o=Object(f.a)(d.a.mark((function o(l){var s,i,u;return d.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return s={headers:{"Content-Type":"application/json"}},i=JSON.stringify({username:e,first_name:t,last_name:n,email:a,password:r,re_password:c}),o.prev=2,o.next=5,y.a.post("".concat("http://localhost:8000","/auth/users/"),i,s);case 5:u=o.sent,l({type:"SIGNUP_SUCCESS",payload:u.data}),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(2),l({type:"SIGNUP_FAIL"});case 12:case"end":return o.stop()}}),o,null,[[2,9]])})));return function(e){return o.apply(this,arguments)}}()}})((function(e){var t=e.signup,n=e.isAuthenticated,c=Object(a.useState)(!1),o=Object(p.a)(c,2),h=o[0],E=o[1],d=Object(a.useState)({username:"",email:"",first_name:"",last_name:"",password:"",re_password:""}),f=Object(p.a)(d,2),b=f[0],y=f[1],j=b.username,g=b.email,_=b.first_name,v=b.last_name,O=b.password,A=b.re_password,w=function(e){y(Object(m.a)(Object(m.a)({},b),{},Object(u.a)({},e.target.name,e.target.value)))};return console.log("isAuthenticated:"+n),n?r.a.createElement(l.a,{to:"/mapview"}):h?r.a.createElement(l.a,{to:"/login"}):r.a.createElement(s.j,null,r.a.createElement(s.d,null,r.a.createElement(s.f,{src:S.a}),r.a.createElement("form",{className:"ion-padding",onSubmit:function(e){return function(e){e.preventDefault(),O===A&&(t(j,_,v,g,O,A),E(!0))}(e)}},r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.b,color:"secondary"})),r.a.createElement(s.g,{placeholder:"Email",type:"email",name:"email",onIonChange:function(e){return w(e)},required:!0})),r.a.createElement("br",null),r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.p,color:"secondary"})),r.a.createElement(s.g,{placeholder:"Username",name:"username",type:"text",onIonChange:function(e){return w(e)},required:!0})),r.a.createElement("br",null),r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.p,color:"secondary"})),r.a.createElement(s.g,{placeholder:"First Name",type:"text",name:"first_name",onIonChange:function(e){return w(e)},required:!0})),r.a.createElement("br",null),r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.p,color:"secondary"})),r.a.createElement(s.g,{placeholder:"Last Name",type:"text",name:"last_name",onIonChange:function(e){return w(e)},required:!0})),r.a.createElement("br",null),r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.j,color:"secondary"})),r.a.createElement(s.g,{placeholder:"Password",type:"password",name:"password",onIonChange:function(e){return w(e)},required:!0})),r.a.createElement(s.h,null,r.a.createElement(s.i,null,r.a.createElement(s.e,{icon:i.j,color:"secondary"})),r.a.createElement(s.g,{placeholder:"Re-type Password",type:"password",name:"re_password",onIonChange:function(e){return w(e)},required:!0})),r.a.createElement("br",null),r.a.createElement(s.b,{type:"submit",expand:"block",size:"large",shape:"round",class:"button_secondary_white_text"},r.a.createElement(s.e,{slot:"start",icon:i.c}),"Register"),r.a.createElement(s.h,{class:"ion-text-center",lines:"none"},r.a.createElement(s.i,null,"Already have an account?"),r.a.createElement(s.b,{color:"success",fill:"outline",shape:"round",href:"/login"},r.a.createElement(s.e,{slot:"start",icon:i.k}),"Login")))))})),I=n(41),C=n(76),x=n.n(C),k=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=e.isAuthenticated;return console.log(t),t?r.a.createElement(l.a,{to:"/mapview"}):r.a.createElement(I.a,null,r.a.createElement(s.r,{class:"ion-text-center"},r.a.createElement(s.q,null,"Adventurer's Atlas")),r.a.createElement(s.d,{class:"vertical-center"},r.a.createElement(s.f,{src:x.a}),r.a.createElement(s.h,{class:"ion-text-center"},r.a.createElement(s.i,null,r.a.createElement(s.b,{expand:"block",color:"success",size:"large",shape:"round",href:"/login",routerDirection:"forward"},r.a.createElement(s.e,{slot:"start",icon:i.k}),"Login"))),r.a.createElement(s.h,{class:"ion-text-center",lines:"none"},r.a.createElement(s.i,null,r.a.createElement("h3",null,"Dont have an account?"),r.a.createElement(s.b,{expand:"block",color:"secondary",size:"large",shape:"round",href:"/register"},r.a.createElement(s.e,{slot:"start",icon:i.c}),"Join the community")))))})),L=n(173),U=n(176),T=n(174),D=n(175),N=(n(114),Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{checkAuthenticated:g,load_user:j})((function(e){var t=e.isAuthenticated,n=e.load_user,a=r.a.useState([]),c=Object(p.a)(a,2),o=(c[0],c[1]),i=r.a.useState([]),u=Object(p.a)(i,2),m=(u[0],u[1]);if(r.a.useEffect((function(){n().then((function(e){return o(e)})),h().then((function(e){return m(e)}))}),[]),!t)return r.a.createElement(l.a,{to:"/greet"});var h=function(){return y()({url:"".concat("http://localhost:8000","/spot/"),method:"get",headers:{headers:{"Content-Type":"application/json",Accept:"application/json"}}}).then((function(e){return console.log(e),e.data}))};return r.a.createElement(s.j,null,r.a.createElement(s.d,null,r.a.createElement(s.m,{color:"primary",animated:!0}),r.a.createElement(s.c,null,r.a.createElement(L.a,{center:[51.505,-.09],zoom:13,scrollWheelZoom:!1},r.a.createElement(U.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(T.a,{position:[51.505,-.09]},r.a.createElement(D.a,null,"A pretty CSS3 popup. ",r.a.createElement("br",null)," Easily customizable.")))),r.a.createElement("h1",null,"Hello ","!")))}))),F=(n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(31)),G=n(77),q=n(78),P={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},R=Object(F.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"AUTHENTICATED_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0});case"LOGIN_SUCCESS":return localStorage.setItem("access",a.access),localStorage.setItem("refresh",a.refresh),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case"SIGNUP_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1});case"USER_LOADED_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{user:a});case"AUTHENTICATED_FAIL":return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1});case"USER_LOADED_FAIL":return Object(m.a)(Object(m.a)({},e),{},{user:null});case"LOGIN_FAIL":case"SIGNUP_FAIL":case"LOGOUT":return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(m.a)(Object(m.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});default:return e}}}),z=[q.a],J=Object(F.createStore)(R,{},Object(G.composeWithDevTools)(F.applyMiddleware.apply(void 0,z))),H=n(79),M=Object(h.b)(null,{checkAuthenticated:g,load_user:j})((function(e){var t=e.checkAuthenticated,n=e.load_user,c=e.children;return Object(a.useEffect)((function(){t(),n()}),[]),r.a.createElement("div",null,c)})),W=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:"LOGOUT"})}}})((function(e){var t=e.logout,n=e.isAuthenticated;return console.log(n),n?r.a.createElement(s.j,null,r.a.createElement(s.d,null,r.a.createElement("div",null,"Settings"),r.a.createElement(s.b,{onClick:t},"Logout"))):r.a.createElement(l.a,{to:"/greet"})})),B=function(){return r.a.createElement(h.a,{store:J},r.a.createElement(s.a,null,r.a.createElement(H.a,null,r.a.createElement(M,null,r.a.createElement(s.p,null,r.a.createElement(s.l,null,r.a.createElement(l.b,{path:"/greet",component:k}),r.a.createElement(l.b,{path:"/login",component:O}),r.a.createElement(l.b,{path:"/register",component:w}),r.a.createElement(l.b,{path:"/mapview",component:N}),r.a.createElement(l.b,{path:"/settings",component:W})),r.a.createElement(s.n,{slot:"bottom"},r.a.createElement(s.o,{href:"/mapview",tab:"mapview"},r.a.createElement(s.e,{icon:i.l}),r.a.createElement(s.i,null,"Discover")),r.a.createElement(s.o,{href:"/spots",tab:"spots"},r.a.createElement(s.e,{icon:i.o}),r.a.createElement(s.i,null,"My Spots")),r.a.createElement(s.o,{href:"/settings",tab:"settings"},r.a.createElement(s.e,{icon:i.u}),r.a.createElement(s.i,null,"Settings"))))))))};o.a.render(r.a.createElement(B,null),document.getElementById("root"))},74:function(e,t,n){e.exports=n.p+"static/media/Login4.18e82e12.png"},75:function(e,t,n){e.exports=n.p+"static/media/Register2.c4fefbb8.png"},76:function(e,t,n){e.exports=n.p+"static/media/tent.22d4f384.png"},82:function(e,t,n){e.exports=n(125)},88:function(e,t,n){var a={"./ion-action-sheet.entry.js":[127,5],"./ion-alert.entry.js":[128,6],"./ion-app_8.entry.js":[129,7],"./ion-avatar_3.entry.js":[130,17],"./ion-back-button.entry.js":[131,18],"./ion-backdrop.entry.js":[132,43],"./ion-button_2.entry.js":[133,19],"./ion-card_5.entry.js":[134,20],"./ion-checkbox.entry.js":[135,21],"./ion-chip.entry.js":[136,22],"./ion-col_3.entry.js":[137,44],"./ion-datetime_3.entry.js":[138,10],"./ion-fab_3.entry.js":[139,23],"./ion-img.entry.js":[140,45],"./ion-infinite-scroll_2.entry.js":[141,46],"./ion-input.entry.js":[142,24],"./ion-item-option_3.entry.js":[143,25],"./ion-item_8.entry.js":[144,26],"./ion-loading.entry.js":[145,27],"./ion-menu_3.entry.js":[146,28],"./ion-modal.entry.js":[147,8],"./ion-nav_2.entry.js":[148,14],"./ion-popover.entry.js":[149,9],"./ion-progress-bar.entry.js":[150,29],"./ion-radio_2.entry.js":[151,30],"./ion-range.entry.js":[152,31],"./ion-refresher_2.entry.js":[153,11],"./ion-reorder_2.entry.js":[154,16],"./ion-ripple-effect.entry.js":[155,47],"./ion-route_4.entry.js":[156,32],"./ion-searchbar.entry.js":[157,33],"./ion-segment_2.entry.js":[158,34],"./ion-select_3.entry.js":[159,35],"./ion-slide_2.entry.js":[160,48],"./ion-spinner.entry.js":[161,13],"./ion-split-pane.entry.js":[162,49],"./ion-tab-bar_2.entry.js":[163,36],"./ion-tab_2.entry.js":[164,15],"./ion-text.entry.js":[165,37],"./ion-textarea.entry.js":[166,38],"./ion-toast.entry.js":[167,39],"./ion-toggle.entry.js":[168,12],"./ion-virtual-scroll.entry.js":[169,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=88,e.exports=r},90:function(e,t,n){var a={"./ion-icon.entry.js":[170,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=90,e.exports=r}},[[82,3,4]]]);
//# sourceMappingURL=main.54c82828.chunk.js.map
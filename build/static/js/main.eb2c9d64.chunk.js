(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[1],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(30),c=n.n(o),l=n(13),s=n(2),i=(n(81),n(8)),u=n(24),m=n(29),p=n(41),E=n(4),d=n.n(E),y=n(16),h=n(46),f=n.n(h),j=Object(p.b)(null,{login:function(e,t){return function(){var n=Object(y.a)(d.a.mark((function n(r){var a,o,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={headers:{"Content-Type":"application/json"}},o=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,f.a.post("".concat("http://localhost:8000","/auth/token/login"),o,a);case 5:c=n.sent,r({type:"LOGIN_SUCCESS",payload:c.data}),r(function(){var e=Object(y.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,f.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://localhost:8000"}).REAC_APP_API_URL,"/auth/users/me"),n);case 5:r=e.sent,t({type:"USER_LOADED_SUCCESS",payload:r.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:"USER_LOADED_FAIL"});case 12:e.next=15;break;case 14:t({type:"USER_LOADED_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r({type:"LOGIN_FAIL"});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=Object(r.useState)({email:"",password:""}),o=Object(m.a)(n,2),c=o[0],l=o[1],p=c.email,E=c.password,d=function(e){return l(Object(u.a)(Object(u.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return a.a.createElement(s.h,null,a.a.createElement(s.c,null,a.a.createElement("h1",null,"Login"),a.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(p,E)}(e)}},a.a.createElement(s.e,{type:"email",placeholder:"Email",value:p,onChange:function(e){return d(e)},required:!0}),a.a.createElement(s.e,{type:"password",placeholder:"Password",value:E,onChange:function(e){return d(e)},required:!0}),a.a.createElement(s.b,{type:"submit"},"Submit"))))})),b=n(7),_=n(10),g=n(11),O=n(6),v=n(71),S=(a.a.Component,function(){return a.a.createElement(s.h,null,a.a.createElement(s.c,null,a.a.createElement("h2",null,"Register"),a.a.createElement("p",null,"Welcome Adventurer! ",a.a.createElement("br",null),"Create you account and start your Journey"),a.a.createElement("form",null,a.a.createElement(s.f,null,a.a.createElement(s.g,null,a.a.createElement(s.d,{icon:O.n})),a.a.createElement(v.a,{as:a.a.createElement(s.e,{placeholder:"Username",type:"text"}),name:"username"})),a.a.createElement(s.f,null,a.a.createElement(s.g,null,a.a.createElement(s.d,{icon:O.n})),a.a.createElement(s.e,{placeholder:"First Name",type:"text"})),a.a.createElement(s.f,null,a.a.createElement(s.g,null,a.a.createElement(s.d,{icon:O.n})),a.a.createElement(s.e,{placeholder:"Second Name",type:"text"})),a.a.createElement(s.f,null,a.a.createElement(s.g,null,a.a.createElement(s.d,{icon:O.b})),a.a.createElement(s.e,{placeholder:"Email",type:"email"})),a.a.createElement(s.f,null,a.a.createElement(s.g,null,a.a.createElement(s.d,{icon:O.j})),a.a.createElement(s.e,{placeholder:"Password",type:"password"})),a.a.createElement(s.b,{expand:"block",color:"secondary",size:"large",shape:"round",href:"/register",routerDirection:"forward"},a.a.createElement(s.d,{slot:"start",icon:O.c}),"Join the Community!"),a.a.createElement(s.f,{class:"ion-text-center",lines:"none"},a.a.createElement(s.g,null,"Already have an account?"),a.a.createElement(s.b,{color:"success",fill:"outline",shape:"round",href:"/login",routerDirection:"forward"},a.a.createElement(s.d,{slot:"start",icon:O.k}),"Login")))))}),A=n(36),x=function(){return a.a.createElement(A.a,null,a.a.createElement(s.j,{class:"ion-text-center"},a.a.createElement(s.i,null,"Adventurer's Atlas")),a.a.createElement(s.c,{class:"vertical-center"},a.a.createElement(s.f,{class:"ion-text-center"},a.a.createElement(s.g,null,a.a.createElement(s.b,{expand:"block",color:"success",size:"large",shape:"round",href:"/login",routerDirection:"forward"},a.a.createElement(s.d,{slot:"start",icon:O.k}),"Login"))),a.a.createElement(s.f,{class:"ion-text-center",lines:"none"},a.a.createElement(s.g,null,a.a.createElement("h3",null,"Dont have an account?"),a.a.createElement(s.b,{expand:"block",color:"secondary",size:"large",shape:"round",href:"/register"},a.a.createElement(s.d,{slot:"start",icon:O.c}),"Join the community")))))},D=(n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(28)),C=n(67),L=n(68),w={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},k=Object(D.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"LOGIN_SUCCESS":return localStorage.setItem("access",r.access),Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!0,access:r.access,refresh:r.refresh});case"USER_LOADED_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{user:r});case"USER_LOADED_FAIL":return Object(u.a)(Object(u.a)({},e),{},{user:null});case"LOGIN_FAIL":return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});default:return e}}}),I=[L.a],U=Object(D.createStore)(k,{},Object(C.composeWithDevTools)(D.applyMiddleware.apply(void 0,I))),N=function(){return a.a.createElement(p.a,{store:U},a.a.createElement(s.a,null,a.a.createElement(A.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/greet",exact:!0,component:x}),a.a.createElement(l.a,{path:"/login",component:j}),a.a.createElement(l.a,{path:"/register",component:S})))))};c.a.render(a.a.createElement(N,null),document.getElementById("root"))},72:function(e,t,n){e.exports=n(118)},78:function(e,t,n){var r={"./ion-action-sheet.entry.js":[120,5],"./ion-alert.entry.js":[121,6],"./ion-app_8.entry.js":[122,7],"./ion-avatar_3.entry.js":[123,17],"./ion-back-button.entry.js":[124,18],"./ion-backdrop.entry.js":[125,43],"./ion-button_2.entry.js":[126,19],"./ion-card_5.entry.js":[127,20],"./ion-checkbox.entry.js":[128,21],"./ion-chip.entry.js":[129,22],"./ion-col_3.entry.js":[130,44],"./ion-datetime_3.entry.js":[131,10],"./ion-fab_3.entry.js":[132,23],"./ion-img.entry.js":[133,45],"./ion-infinite-scroll_2.entry.js":[134,46],"./ion-input.entry.js":[135,24],"./ion-item-option_3.entry.js":[136,25],"./ion-item_8.entry.js":[137,26],"./ion-loading.entry.js":[138,27],"./ion-menu_3.entry.js":[139,28],"./ion-modal.entry.js":[140,8],"./ion-nav_2.entry.js":[141,14],"./ion-popover.entry.js":[142,9],"./ion-progress-bar.entry.js":[143,29],"./ion-radio_2.entry.js":[144,30],"./ion-range.entry.js":[145,31],"./ion-refresher_2.entry.js":[146,11],"./ion-reorder_2.entry.js":[147,16],"./ion-ripple-effect.entry.js":[148,47],"./ion-route_4.entry.js":[149,32],"./ion-searchbar.entry.js":[150,33],"./ion-segment_2.entry.js":[151,34],"./ion-select_3.entry.js":[152,35],"./ion-slide_2.entry.js":[153,48],"./ion-spinner.entry.js":[154,13],"./ion-split-pane.entry.js":[155,49],"./ion-tab-bar_2.entry.js":[156,36],"./ion-tab_2.entry.js":[157,15],"./ion-text.entry.js":[158,37],"./ion-textarea.entry.js":[159,38],"./ion-toast.entry.js":[160,39],"./ion-toggle.entry.js":[161,12],"./ion-virtual-scroll.entry.js":[162,50]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=78,e.exports=a},80:function(e,t,n){var r={"./ion-icon.entry.js":[164,57]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=80,e.exports=a}},[[72,3,4]]]);
//# sourceMappingURL=main.eb2c9d64.chunk.js.map
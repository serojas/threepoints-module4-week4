(this.webpackJsonpweek4=this.webpackJsonpweek4||[]).push([[0],{39:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),i=(a(39),a(6)),o=a(2),l=a(11),d=a.n(l),u=a(15),j=a(14),b=a.n(j);b.a.create({baseUrl:"https://3p.apps-dev.tid.es/api",withCredentials:!0}).interceptors.response.use((function(e){return e.data}),(function(e){401===e.response.status&&window.location.replace("/login")}));var p=function(){var e=Object(u.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://3p.apps-dev.tid.es/api/login",{username:t,password:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://3p.apps-dev.tid.es/api/posts");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://3p.apps-dev.tid.es/api/posts/".concat(t,"/like"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://3p.apps-dev.tid.es/api/users/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=a(33),x=a(1);var v=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=(a[0],a[1]),s=Object(n.useState)(0),c=Object(i.a)(s,2),o=c[0],l=c[1],d=Object(n.useState)(0),u=Object(i.a)(d,2),j=u[0],b=u[1];return Object(n.useEffect)((function(){return l(e.delay),b(setTimeout((function(){return r(!0)}),o)),function(){clearTimeout(j)}}),[]),Object(x.jsx)("div",{style:{position:"fixed",top:"60%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(x.jsx)(O.BeatLoader,{loading:e.loading,size:"50px",margin:"2px"})})};a(88);var g=function(e){var t=e.setError,a=e.profile,r=e.updateProfile,s=e.history,c=Object(n.useState)(""),o=Object(i.a)(c,2),l=o[0],d=o[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),g=O[0],y=O[1],w=!0,N={width:"100%",border:"0 !important"};function k(e){e.preventDefault(),y(!0),S();var n={username:document.getElementById("input_username").value,password:document.getElementById("input_password").value};p(n.username,n.password).then((function(e){200===e.status&&(r(e.data),window.localStorage.setItem("userId",a.id),s.push("/")),y(!1)})).catch((function(e){t("Invalid username or password"),d(""),m(""),y(!1)}))}function S(){document.getElementById("input_username").disabled=!0,document.getElementById("input_password").disabled=!0,document.getElementById("button_login").disabled=!0}return Object(n.useEffect)((function(){!function(){var e=window.localStorage.getItem("userId");w&&("undefined"===e||null===e||""===e.trim()?s.push("/login"):(S(),setTimeout((function(){f(e).then((function(e){200===e.status&&(r(e.data),window.localStorage.setItem("userId",a.id),s.push("/")),w=!1})).catch((function(e){console.log("error>>",e),t("Error at getting user information"),w=!1}))}))))}()}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"login-container",children:Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"form-floating pb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"input_username",name:"username",style:N}),Object(x.jsx)("label",{htmlFor:"input_username",className:"form-label",value:l,onChange:function(e){d(e.target.value)},children:"Username:"})]}),Object(x.jsxs)("div",{className:"form-floating pb-3",children:[Object(x.jsx)("input",{type:"password",className:"form-control",id:"input_password",name:"password",style:N}),Object(x.jsx)("label",{htmlFor:"input_password",className:"form-label",value:b,onChange:function(e){m(e.target.value)},children:"Password:"})]}),Object(x.jsx)("button",{id:"button_login",type:"button",className:"btn btn-dark button-login",style:N,onClick:function(e){return k(e)},children:"Login"})]})}),g?Object(x.jsx)(v,{loading:g,delay:1500}):""]})},y=a(12);a(89);var w=function(e){var t=e.name,a=e.username,n=e.avatar,r=e.description;return e.history,Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"profile-header-container",children:[Object(x.jsx)("div",{className:"profile-header-img",children:Object(x.jsx)("img",{className:"img-circle",src:n,alt:"Profile"})}),Object(x.jsx)("div",{className:"name-style",children:Object(x.jsx)("h4",{children:t})}),Object(x.jsx)("div",{className:"username-style",children:Object(x.jsx)("h5",{children:"@".concat(a)})}),Object(x.jsxs)("div",{className:"rank-label-container",style:{position:"fixed",top:"35%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(x.jsx)("span",{className:"label label-default rank-label",children:r}),Object(x.jsx)("div",{children:Object(x.jsx)(y.b,{className:"label label-default rank-label",onClick:function(){window.localStorage.removeItem("userId"),window.location.replace("/login")},children:"Logout"})})]})]})})})};var N=function(e){var t={display:"none"},a={display:"none",color:"white",paddingLeft:"1em"},n={color:"white"};return e.enableNavBarButtons?(t.display="block",a.display="inline",a.color="white",a.paddingLeft="1em"):(t.display="none",a.display="none"),Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",style:{width:"100%"},children:Object(x.jsxs)("div",{className:"container-md navbar-title",children:[Object(x.jsxs)(y.c,{className:"navbar-brand",to:"/",children:[Object(x.jsx)("i",{className:"fas fa-bolt",style:n}),Object(x.jsx)("span",{style:a,children:"  Three Pics  "})]}),Object(x.jsx)(y.c,{to:"/profile",children:Object(x.jsx)("i",{className:"fa fa-user-circle fa-2x",style:n})})]})})},k=function(e){var t=e.setError,a=e.error;return Object(x.jsxs)("div",{id:"alert_danger",className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[Object(x.jsx)("strong",{children:a}),Object(x.jsx)("button",{id:"btn_close_alert",type:"button",className:"btn-close","data-dismiss":"alert","aria-label":"Close",onClick:function(){t("")},children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},S=function(e,t){return console.log(t),"FIND_POST_BY_SEARCH"===t.type?void 0===t.payload.searchFilter||null===t.payload.searchFilter||""===t.payload.searchFilter.trim()?t.payload.data:t.payload.data.filter((function(e){return e.text.toUpperCase().includes(t.payload.searchFilter.toUpperCase())})):e};var _=function(e){return Object(x.jsx)("div",{className:"col- col-sm-3 col-md-3 col-lg-3",style:{paddingTop:"2em"},children:Object(x.jsxs)("div",{className:"card",style:{width:"100%"},children:[Object(x.jsx)("img",{src:e.image,className:"card-img-top",alt:"Post"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-6",children:Object(x.jsx)("p",{className:"p-time",children:e.createdAt})}),Object(x.jsx)("div",{className:"col-6 post-like",children:Object(x.jsxs)("a",{href:"/#",id:"btn_like_1",className:"btn btn-outline-danger",onClick:function(){h(e.id).then((function(t){console.log("response>>",t.data),e.history.replaceState("/login")})).catch((function(e){console.log("Error at giving like>>",e)})),console.log("onClickLike>>")},children:[Object(x.jsx)("i",{id:"i_like_1",className:"fa fa-heart"})," ",e.likes," "]})})]}),Object(x.jsx)("h5",{className:"card-title",children:"@".concat(e.author)}),Object(x.jsxs)("p",{className:"card-text",children:["".concat(e.text.substring(0,50),"...")," "]}),Object(x.jsxs)("a",{href:"/#",children:[Object(x.jsx)("i",{className:"far fa-comment-alt"})," Comments"]})]})]})})};var C=function(e){var t=e.posts;return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"row no-padding",children:Object(x.jsx)("div",{className:"col- col-sm-12 col-md-12 col-lg-12",children:Object(x.jsx)("div",{id:"div_posts",className:"row",children:t})})})})};var I=function(e){var t=e.findPostBySearch;return Object(x.jsx)("div",{className:"input-group rounded",style:{width:"100%"},children:Object(x.jsx)("input",{type:"search",className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon",onChange:function(e){t(e.target.value)}})})};var E=function(e){var t=e.history,a=Object(n.useState)([]),r=Object(i.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),d=l[0],u=l[1],j=Object(n.useState)(!1),b=Object(i.a)(j,2),p=b[0],h=b[1];Object(n.useEffect)((function(){return h(!0),m().then((function(e){u(e.data),c(w(e.data)),console.log(e.data),h(!1)})).catch((function(e){console.log("error>>",e),h(!1)})),function(){c([])}}),[]);var f=Object(n.useReducer)(S,d),O=Object(i.a)(f,2),g=O[0],y=O[1];function w(e){return e.map((function(e,a){return Object(x.jsx)(_,{id:e.id,author:e.author.username,text:e.text,image:e.image,createdAt:e.createdAt,likes:e.likes,position:a,history:t},a)}))}return Object(x.jsxs)("div",{children:[p?Object(x.jsx)(v,{loading:p,delay:1500}):"",Object(x.jsx)(I,{findPostBySearch:function(e){y(function(e){return{type:"FIND_POST_BY_SEARCH",payload:{searchFilter:e.searchFilter,data:e.data}}}({searchFilter:e,data:d})),c(w(g))}}),Object(x.jsx)(C,{posts:s})]})};a(96);var F=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({}),c=Object(i.a)(s,2),l=c[0],d=c[1],u=Object(o.f)();function j(e){d(e)}return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(N,{}),void 0===a||null===a||""===a.trim()?"":Object(x.jsx)(k,{setError:r,error:a}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/login",component:function(){return Object(x.jsx)(g,{setError:r,profile:l,updateProfile:j,history:u})}}),Object(x.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(x.jsx)(E,{history:u})}}),Object(x.jsx)(o.a,{exact:!0,path:"/profile",component:function(){return Object(x.jsx)(w,{name:l.name,username:l.username,avatar:l.avatar,description:l.bio,history:u})}})]})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(y.a,{children:Object(x.jsx)(F,{})})}),document.getElementById("root")),B()}},[[97,1,2]]]);
//# sourceMappingURL=main.3ac032b7.chunk.js.map
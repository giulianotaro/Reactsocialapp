(this.webpackJsonpsocialapp=this.webpackJsonpsocialapp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",friend:"Home_friend__eOEhP"}},,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},function(e,t,n){e.exports={post:"Post_post__3hqZB"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),s=n(11),r=n.n(s),i=(n(23),n(12)),o=n.n(i),j=n(0),l=function(e){var t=e.name||"App",n=e.links||[{link:"",label:"Link"}];return Object(j.jsxs)("header",{className:o.a.header,children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{children:n.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.link,children:e.label})},t)}))})})]})},d=n(13),u=n.n(d),h=function(){var e=(new Date).getFullYear;return Object(j.jsxs)("footer",{className:u.a.footer,children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:[" Copyright Giulia Notaro ",e," "]})]})},b=n(8),f=n(14),x=n.n(f),O=function(e){var t=e.data||{name:"friend",photo:"https://randomuser.me/api/portraits/lego/0.jpg"};return Object(j.jsxs)("div",{className:x.a.friend,children:[Object(j.jsx)("img",{src:t.photo,alt:t.name}),Object(j.jsx)("p",{children:t.name})]})},p=n(26),m=n(27),_=n(15),g=n.n(_),v=function(e){var t=e.data||{text:"What?",date:new Date,sender:"User"};return Object(j.jsxs)("div",{className:g.a.message,children:[Object(j.jsx)("h5",{children:t.sender}),Object(j.jsx)("p",{children:Object(j.jsx)("small",{children:Object(p.a)(new Date(t.date),new Date,{addSuffix:!0,locale:m.a})})}),Object(j.jsx)("p",{children:t.text})]})},w=n(16),k=n.n(w),D=function(e){var t=e.data||{author:"user",text:"Today at Bruxelle",date:new Date,photo:"https://images.unsplash.com/photo-1577188947090-95007502b22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"};return Object(j.jsxs)("article",{className:k.a.post,children:[Object(j.jsx)("h3",{children:t.author}),Object(j.jsx)("p",{children:Object(j.jsx)("small",{children:Object(p.a)(new Date(t.date),new Date,{addSuffix:!0,locale:m.a})})}),Object(j.jsx)("p",{children:t.text}),t.photo?Object(j.jsx)("img",{src:t.photo,alt:t.author}):Object(j.jsx)(j.Fragment,{})]})},F=function(e){return fetch("https://edgemony-backend.herokuapp.com"+e).then((function(e){return e.json()}))},H=n(10),N=n.n(H),S=[],y=[],B=[],M=function(){var e=Object(c.useState)(S),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(B),r=Object(b.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(y),d=Object(b.a)(l,2),u=d[0],h=d[1];return Object(c.useEffect)((function(){F("/friends?_limit=4").then((function(e){return a(e)}))}),[]),Object(c.useEffect)((function(){F("/messages?_limit=4").then((function(e){return h(e)}))}),[]),Object(c.useEffect)((function(){F("/posts").then((function(e){return o(e)}))}),[]),Object(j.jsxs)("section",{className:N.a.home,children:[Object(j.jsx)("h3",{children:"Benvenuto utente"}),Object(j.jsxs)("div",{className:N.a.grid,children:[Object(j.jsx)("aside",{children:n.map((function(e,t){return Object(j.jsx)(O,{data:e},t)}))}),Object(j.jsx)("main",{children:i.map((function(e,t){return Object(j.jsx)(D,{data:e},t)}))}),Object(j.jsxs)("aside",{children:[" ",u.map((function(e,t){return Object(j.jsx)(v,{data:e},t)}))]})]})]})};var P=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{name:"ReactSocialApp",links:[{link:"/home",label:"Home"},{link:"/friends",label:"Friends"},{link:"/messages",label:"Messages"}]}),Object(j.jsx)(M,{}),Object(j.jsx)(h,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),E()}],[[25,1,2]]]);
//# sourceMappingURL=main.aa005650.chunk.js.map
(this.webpackJsonpcleverpy=this.webpackJsonpcleverpy||[]).push([[0],{38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(20),s=n.n(r),a=n(5),i=n(11),u=n.n(i),o=n(13),j=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://jsonplaceholder.typicode.com/posts?userId=".concat(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(38),n(31)),b=n(32),l=n(25),O=n(2),f=function(e){var t=e.cardInfo,n=t.body,r=t.title,s=t.userId,i=Object(c.useState)(!0),u=Object(a.a)(i,2),o=u[0],j=u[1],f=Object(l.useTransition)(o,{from:{x:-100,y:800,opacity:0},enter:{x:0,y:0,opacity:1},leave:{x:-100,y:800,opacity:0}});return Object(O.jsx)(O.Fragment,{children:o&&f((function(e,t){return Object(O.jsxs)(l.animated.div,{className:"card",style:e,children:[Object(O.jsxs)("ol",{children:[Object(O.jsxs)("li",{children:["User id: ",s]}),Object(O.jsxs)("li",{children:["Title: ",r]}),Object(O.jsxs)("li",{children:["Body: ",n]})]}),Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){j(!1)},children:Object(O.jsx)(d.a,{icon:b.a})})]})}))})},p=function(e){var t=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){j(e).then((function(e){s(e)}))}),[e]),r}(e.userId);return Object(O.jsx)("div",{className:"card-Grid",children:t.map((function(e){return Object(O.jsx)(f,{cardInfo:e},e.id)}))})},x=function(e){var t=e.setUserId,n=Object(c.useState)(""),r=Object(a.a)(n,2),s=r[0],i=r[1];return Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(O.jsx)("h4",{children:"Introduce la ID del usuario"}),Object(O.jsx)("input",{type:"text",placeholder:"1-10",value:s,onChange:function(e){i(e.target.value)}})]})},h=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{setUserId:r}),Object(O.jsx)("hr",{}),Object(O.jsx)(p,{userId:n})]})};n(45);s.a.render(Object(O.jsx)(h,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.181851d4.chunk.js.map
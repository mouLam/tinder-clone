(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{54:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){},63:function(e,n,t){},85:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(15),r=t.n(s),i=(t(54),t(55),t(56),t(36)),o=t.n(i),j=t(101),l=t(37),d=t.n(l),u=t(2);var b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(o.a,{fontSize:"large",className:"header__icon"})}),Object(u.jsx)("img",{className:"header__logo",src:"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png",alt:"tinder logo"}),Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{fontSize:"large",className:"header__icon"})})]})},p=(t(63),t(38)),h=t.n(p),x=t(39),O=t.n(x),f=t(40),m=t.n(f),g=t(41),v=t.n(g),w=t(42),N=t.n(w);var S=function(){return Object(u.jsxs)("div",{className:"swipeButtons",children:[Object(u.jsx)(j.a,{className:"swipebuttons_repeat",children:Object(u.jsx)(h.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipebuttons_left",children:Object(u.jsx)(O.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipebuttons_start",children:Object(u.jsx)(m.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipebuttons_right",children:Object(u.jsx)(v.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipebuttons_lightning",children:Object(u.jsx)(N.a,{fontSize:"large"})})]})},_=t(25),z=t.n(_),k=t(43),y=t(46),C=t(44),B=t.n(C).a.create({baseURL:"https://tinder-clone-backend-2.herokuapp.com"}),E=t(45),I=t.n(E);t(85);var J=function(){var e=Object(c.useState)([]),n=Object(y.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(k.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"tinderCards",children:Object(u.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(u.jsx)(I.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("Suppression : "+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n+"left the screen !");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},e.name)}))})})};var L=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)(J,{}),Object(u.jsx)(S,{})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.a5d032fe.chunk.js.map
(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(7),i=c.n(a),j=(c(13),c(5)),u=c(2),b=(c(14),32),o=24,l=0,f=1,O=2,d=3,h=[4,3,2,1,0],x=[];var v=function(){var e=Object(r.useState)(h),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(x),i=Object(u.a)(a,2),v=i[0],p=i[1],w=Object(r.useState)(!1),k=Object(u.a)(w,2),g=k[0],m=k[1],M=Object(r.useState)(0),N=Object(u.a)(M,2),S=N[0],E=N[1],F=Object(r.useState)(0),y=Object(u.a)(F,2),A=y[0],C=y[1],I=Object(r.useRef)(),L=Object(r.useRef)(),R=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)},T=function(){var e=[];do{var t=R(0,768);-1===c.indexOf(t)&&-1===e.indexOf(t)&&e.push(t)}while(e.length<3);p(e)},B=function(){if(!g){var e=Object(j.a)(c),t=e[0];switch(I.current){case O:(t+1)%b===0?t-=31:t++;break;case d:t%b===0?t+=31:t--;break;case l:t<b?t+=736:t-=b;break;case f:t>=736?t-=736:t+=b}if(-1!==c.indexOf(t))return S>A&&C(S),void m(!0);var n=v.indexOf(t);if(-1!==n){e=[t].concat(e);var r=Object(j.a)(v);r.splice(n,1),function(e,t){var c=0;do{c=R(0,768)}while(-1!==e.indexOf(c)||-1!==t.indexOf(c));var n=Object(j.a)(t);n.push(c),p(n)}(e,r),E(S+1)}else e=[t].concat(e.slice(0,e.length-1));s(e)}},D=function(e){if(!L.current){switch(e.code){case"ArrowRight":if(I.current===d)return;I.current=O;break;case"ArrowLeft":if(I.current===O)return;I.current=d;break;case"ArrowUp":if(I===f)return;I.current=l;break;case"ArrowDown":if(I.current===l)return;I.current=f}L.current=!0,setTimeout((function(){L.current=!1}),50)}};return Object(r.useEffect)((function(){I.current=O,L.current=!1,T(),document.addEventListener("keydown",D)}),[]),function(e,t){var c=Object(r.useRef)();Object(r.useEffect)((function(){c.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){!function(){if(!L.current){var e=v[0],t=c[0],n=t%b,r=e%b,s=null;if(n<r)s=I.current===d?l:O;else if(n>r)s=I.current===O?l:d;else{var a=Math.ceil(t/o),i=Math.ceil(e/o);a<i?s=I.current===l?O:f:a>i&&(s=I.current===f?O:l)}var j=null;switch(s){case O:j=(t+1)%b===0?t-31:t+1;break;case d:j=t%b===0?t+31:t-1;break;case l:j=t<b?t+736:t-b;break;case f:j=t>=736?t-736:t+b}null!==j&&-1===c.indexOf(j)&&(I.current=s)}}(),B()}),50),Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)("div",{className:"world-container",children:[function(){for(var e=[],t=0;t<24;t++){for(var r=[],s=0;s<32;s++){var a=t*b+s,i="";-1!==c.indexOf(a)?i=" snake":-1!==v.indexOf(a)&&(i=" food"),r.push(Object(n.jsx)("div",{className:"w-cell".concat(i)},"cell-".concat(t,"-").concat(s)))}e.push(Object(n.jsx)("div",{className:"w-row",children:r},"row-".concat(t)))}return Object(n.jsx)("div",{className:"world",children:e})}(),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("span",{children:"react-snake"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"-----"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["highest score: ",A]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"-----"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["food eaten: ",S]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["snake's size: ",c.length]}),g&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"-----"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"lose, "}),Object(n.jsx)("span",{className:"play-again",onClick:function(){s(h),T(),m(!1),E(0),I.current=O},children:"play again"})]})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.38c34944.chunk.js.map
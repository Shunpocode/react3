"use strict";(self.webpackChunkreact3=self.webpackChunkreact3||[]).push([[96],{96:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var a=t(791),n=t(184);function c(e){let{avatar:s,name:t,position:c,email:r,phone:l}=e;const[i,o]=(0,a.useState)(!1);return(0,n.jsxs)("span",{className:"card ".concat(i?"hovered":""),children:[(0,n.jsx)("img",{src:s,alt:""}),(0,n.jsx)("p",{children:t}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{children:c})}),(0,n.jsxs)("span",{className:r.length>25?"email-container hovering":"",children:[(0,n.jsx)("a",{children:r.length>25?r.slice(0,25)+"...":r}),r.length>25&&(0,n.jsx)("span",{className:"full-email",children:r})]}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{children:l})})]})]})}var r=t(524);function l(e){return(0,n.jsx)("span",{className:"preloader",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",children:(0,n.jsx)("path",{d:"M24 2.4C24 1.07452 25.0772 -0.0124356 26.3961 0.119892C30.2962 0.511212 34.0543 1.85353 37.3337 4.04473C41.2805 6.68189 44.3566 10.4302 46.1731 14.8156C47.9896 19.201 48.4649 24.0266 47.5388 28.6822C46.6128 33.3377 44.327 37.6141 40.9706 40.9706C37.6141 44.327 33.3377 46.6128 28.6822 47.5388C24.0266 48.4649 19.201 47.9896 14.8156 46.1731C10.4302 44.3566 6.68188 41.2805 4.04473 37.3337C1.85353 34.0543 0.511211 30.2963 0.119892 26.3961C-0.0124351 25.0772 1.07452 24 2.4 24C3.72548 24 4.78454 25.0787 4.9498 26.3938C5.32038 29.343 6.37231 32.1774 8.03578 34.6669C10.1455 37.8244 13.1441 40.2853 16.6525 41.7385C20.1608 43.1917 24.0213 43.5719 27.7457 42.8311C31.4702 42.0902 34.8913 40.2616 37.5765 37.5765C40.2616 34.8913 42.0902 31.4702 42.8311 27.7457C43.5719 24.0213 43.1917 20.1608 41.7385 16.6525C40.2853 13.1441 37.8244 10.1455 34.667 8.03578C32.1774 6.37231 29.343 5.32039 26.3938 4.9498C25.0787 4.78454 24 3.72548 24 2.4Z",fill:"#00BDD3"})})})}const i="https://frontend-test-assignment-api.abz.agency/api/v1/users";function o(e){let{type:s}=e;const[t,o]=(0,a.useState)([]),[h,u]=(0,a.useState)(1),[p,d]=(0,a.useState)(null),[x,C]=(0,a.useState)(0),[j,m]=(0,a.useState)("yellow"),[f,g]=(0,a.useState)(!1),w=async e=>{try{const s=await fetch(e);return await s.json()}catch(s){throw console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:",s),s}},v=e=>{g(!1),C(e.total_users),d(e.total_pages),1===h?o(e.users):h>1&&o((s=>[...s,...e.users])),h>=e.total_pages&&m("disabled")};(0,a.useEffect)((()=>{g(!0),w("".concat(i,"?page=").concat(h,"&count=6")).then(v).catch((()=>{}))}),[h]),(0,a.useEffect)((()=>{const e=setInterval((async()=>{try{const e=await w("".concat(i,"?page=1&count=6"));x<e.total_users&&(o(e.users),C(e.total_users))}catch(e){}}),3e3);return()=>clearInterval(e)}),[x]);return(0,n.jsxs)("section",{id:"users",className:s,children:[(0,n.jsx)("div",{id:"cards",children:t.map(((e,s)=>(0,n.jsx)(c,{avatar:e.photo,name:e.name,position:e.position,email:e.email,phone:e.phone},s)))}),f?(0,n.jsx)(l,{}):(0,n.jsx)(r.Z,{text:"Show more",type:j,func:()=>{h<p?u((e=>e+1)):h===p&&m("none")}})]})}}}]);
//# sourceMappingURL=96.3706b827.chunk.js.map
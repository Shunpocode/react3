"use strict";(self.webpackChunkreact3=self.webpackChunkreact3||[]).push([[865],{865:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var l=t(791),a=t(184);function h(){const[e,n]=(0,l.useState)({name:"",email:"",phone:""}),[t,h]=(0,l.useState)({name:!1,email:!1,phone:!1});function s(e){let{func:t}=e,l=document.getElementById("phone").value.trim();6===l.length&&(n((e=>({...e,phone:""}))),h((e=>({...e,phone:!1})))),l.length<6&&(n((e=>({...e,phone:"+38 (0"}))),h((e=>({...e,phone:!0})))),l.length>6&&l.length<23?(n((e=>({...e,phone:l}))),h((e=>({...e,phone:!0})))):23===l.length&&(n((e=>({...e,phone:l}))),h((e=>({...e,phone:!1}))))}const m=(e,t)=>{let l=e.target.value;if("phone"===t){let e=window.getComputedStyle(document.getElementsByTagName("fieldset")[2].getElementsByTagName("legend")[0]).color,a="rgb(203, 61, 64)";0===l.length||l.length<6?n((e=>({...e,[t]:"+38 (0"}))):l.length<24&&(h(e===a?e=>({...e,[t]:!0}):e=>({...e,[t]:!1})),/\d+$/.test(l)&&n((e=>({...e,[t]:l}))),8===l.length&&n((e=>({...e,[t]:l+") "}))),9===l.length&&n((e=>({...e,[t]:l.slice(0,-2)}))),10===l.length&&n((e=>({...e,[t]:l.slice(0,-1)+" "}))),13===l.length&&n((e=>({...e,[t]:l+" - "}))),15===l.length&&n((e=>({...e,[t]:l.slice(0,-3)}))),16===l.length&&n((e=>({...e,[t]:l.slice(0,-3)+" - "}))),18===l.length&&n((e=>({...e,[t]:l+" - "}))),21===l.length&&n((e=>({...e,[t]:l.slice(0,-3)+" - "}))),20===l.length&&n((e=>({...e,[t]:l.slice(0,-3)}))))}if("email"===t){let e=window.getComputedStyle(document.getElementsByTagName("fieldset")[1].getElementsByTagName("legend")[0]).color,a="rgb(203, 61, 64)";l.length>0?h(e===a?e=>({...e,[t]:!0}):e=>({...e,[t]:!1})):h((e=>({...e,[t]:!1}))),n((e=>({...e,[t]:l})))}if("name"===t){n((e=>({...e,[t]:l})));let e=window.getComputedStyle(document.getElementsByTagName("fieldset")[0].getElementsByTagName("legend")[0]).color,a="rgb(203, 61, 64)";l.length>0?h(e===a?e=>({...e,[t]:!0}):e=>({...e,[t]:!1})):h((e=>({...e,[t]:!1})))}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("fieldset",{className:t.name?"error":"",children:[(0,a.jsx)("input",{minLength:2,maxLength:60,type:"text",name:"name",id:"name",placeholder:"Name",required:!0,value:e.name,onChange:e=>m(e,"name")}),(0,a.jsx)("legend",{children:"Name"})]}),(0,a.jsxs)("fieldset",{className:t.email?"error":"",children:[(0,a.jsx)("input",{minLength:2,maxLength:100,type:"email",name:"email",id:"email",placeholder:"Email",required:!0,value:e.email,onChange:e=>m(e,"email")}),(0,a.jsx)("legend",{children:"Email"}),(0,a.jsx)("span",{children:"test@test.com"})]}),(0,a.jsxs)("fieldset",{className:t.phone?"error":"",children:[(0,a.jsx)("input",{onBlur:()=>s("-"),onFocus:()=>s("+"),pattern:"\\+38 \\(\\d{3}\\) \\d{3} - \\d{2} - \\d{2}",type:"tel",name:"phone",id:"phone",placeholder:"Phone",required:!0,value:e.phone,onChange:e=>m(e,"phone")}),(0,a.jsx)("legend",{children:"Phone"}),(0,a.jsx)("span",{children:"+38 (XXX) XXX - XX - XX"})]})]})}}}]);
//# sourceMappingURL=865.1c99ee67.chunk.js.map
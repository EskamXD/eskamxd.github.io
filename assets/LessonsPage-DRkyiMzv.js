import{r as j,j as e,d as L,e as b,a as S,L as u,B as m}from"./index-Due0eF9l.js";import{C as x,a as p,b as g,c as h}from"./card-BfK4FlSW.js";import{A as E}from"./arrow-left-DKOCiQoL.js";var c="Progress",d=100,[M,z]=L(c),[V,A]=M(c),y=j.forwardRef((r,t)=>{const{__scopeProgress:a,value:n=null,max:s,getValueLabel:C=R,...$}=r;(s||s===0)&&!f(s)&&console.error(_(`${s}`,"Progress"));const i=f(s)?s:d;n!==null&&!v(n,i)&&console.error(D(`${n}`,"Progress"));const o=v(n,i)?n:null,I=l(o)?C(o,i):void 0;return e.jsx(V,{scope:a,value:o,max:i,children:e.jsx(b.div,{"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":l(o)?o:void 0,"aria-valuetext":I,role:"progressbar","data-state":k(o,i),"data-value":o??void 0,"data-max":i,...$,ref:t})})});y.displayName=c;var w="ProgressIndicator",P=j.forwardRef((r,t)=>{const{__scopeProgress:a,...n}=r,s=A(w,a);return e.jsx(b.div,{"data-state":k(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...n,ref:t})});P.displayName=w;function R(r,t){return`${Math.round(r/t*100)}%`}function k(r,t){return r==null?"indeterminate":r===t?"complete":"loading"}function l(r){return typeof r=="number"}function f(r){return l(r)&&!isNaN(r)&&r>0}function v(r,t){return l(r)&&!isNaN(r)&&r<=t&&r>=0}function _(r,t){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d}\`.`}function D(r,t){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var T=y,G=P;function B({className:r,value:t,...a}){return e.jsx(T,{"data-slot":"progress",className:S("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",r),...a,children:e.jsx(G,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})})}const H="/images/introduction.webp",O="/images/network.webp",F="/images/ethical-hacking.webp",N=r=>{const t=Math.floor(r/60),a=r%60;return`${t.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`},J=(r,t)=>t===0?0:Math.round(r/t*100),W=()=>{const r=[{id:1,title:"Introduction to Cybersecurity",description:"Learn the basics of cybersecurity, common threats, and methods of protection.",thumbnail:H,progress:{current:225,total:600},link:"/elearning/lessons/introduction-to-cybersecurity"},{id:2,title:"Network Security Fundamentals",description:"Explore essential techniques for securing networks and preventing unauthorized access.",thumbnail:O,progress:{current:300,total:720},link:"/elearning/lessons/network-security-fundamentals"},{id:3,title:"Ethical Hacking Basics",description:"Understand core principles of ethical hacking and penetration testing.",thumbnail:F,progress:{current:0,total:480},link:"/elearning/lessons/ethical-hacking-basics"}];return e.jsx("div",{className:"flex w-full justify-center items-center",children:e.jsxs("div",{className:"min-h-screen w-4xl p-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-100 mb-4",children:"Lessons"}),e.jsxs(u,{to:"/elearning",className:"flex gap-2 items-center text-indigo-400 w-fit mb-8",children:[e.jsx(E,{className:"w-6 h-6"}),"Go back"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(t=>e.jsxs(x,{className:"flex flex-col pt-0",children:[e.jsx("img",{src:t.thumbnail,alt:t.title,className:"w-full h-40 object-cover rounded-t-md"}),e.jsx(p,{children:e.jsx(g,{className:"text-lg font-bold text-gray-100",children:t.title})}),e.jsxs(h,{className:"flex-grow",children:[e.jsx("p",{className:"text-sm text-gray-100",children:t.description}),e.jsxs("div",{className:"mt-4",children:[e.jsx(B,{value:J(t.progress.current,t.progress.total),className:"w-full"}),e.jsxs("p",{className:"text-xs text-gray-100 mt-1",children:[N(t.progress.current)," /"," ",N(t.progress.total)]})]})]}),e.jsx("div",{className:"p-4 pt-0 text-indigo-400",children:e.jsx(u,{to:t.link,children:e.jsx(m,{variant:"outline",className:"w-full",children:"View Lesson"})})})]},t.id))}),e.jsxs(x,{className:"mt-16",children:[e.jsx(p,{children:e.jsx(g,{className:"text-xl font-semibold text-gray-100",children:"Comments & Discussions"})}),e.jsx(h,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-md",children:[e.jsx("p",{className:"text-sm text-gray-100",children:"Great lesson! I learned a lot about network security."}),e.jsx("p",{className:"mt-2 text-xs text-gray-100",children:"John Doe - 2025-03-18"})]}),e.jsxs("div",{className:"p-4 rounded-md",children:[e.jsx("p",{className:"text-sm text-gray-100",children:"Very informative. Looking forward to more advanced topics."}),e.jsx("p",{className:"mt-2 text-xs text-gray-100",children:"Jane Smith - 2025-03-19"})]}),e.jsxs("div",{className:"p-4 rounded-md",children:[e.jsx("textarea",{className:"w-full p-2 border rounded-md text-gray-100",placeholder:"Write a comment...",rows:3}),e.jsx("div",{className:"mt-2 text-right text-indigo-400",children:e.jsx(m,{variant:"default",children:"Submit Comment"})})]})]})})]})]})})};export{W as default};

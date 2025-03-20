import{r as p,j as e,d as w,P as h,c as k,L as C}from"./index-kKdXCXbC.js";import{C as $,a as I,b as S,c as E}from"./card-CZRW06BA.js";import{B as m}from"./button-CkOdTBcN.js";var c="Progress",d=100,[L,q]=w(c),[M,V]=L(c),f=p.forwardRef((r,t)=>{const{__scopeProgress:a,value:n=null,max:s,getValueLabel:b=R,...y}=r;(s||s===0)&&!u(s)&&console.error(_(`${s}`,"Progress"));const i=u(s)?s:d;n!==null&&!x(n,i)&&console.error(D(`${n}`,"Progress"));const o=x(n,i)?n:null,P=l(o)?b(o,i):void 0;return e.jsx(M,{scope:a,value:o,max:i,children:e.jsx(h.div,{"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":l(o)?o:void 0,"aria-valuetext":P,role:"progressbar","data-state":j(o,i),"data-value":o??void 0,"data-max":i,...y,ref:t})})});f.displayName=c;var v="ProgressIndicator",N=p.forwardRef((r,t)=>{const{__scopeProgress:a,...n}=r,s=V(v,a);return e.jsx(h.div,{"data-state":j(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...n,ref:t})});N.displayName=v;function R(r,t){return`${Math.round(r/t*100)}%`}function j(r,t){return r==null?"indeterminate":r===t?"complete":"loading"}function l(r){return typeof r=="number"}function u(r){return l(r)&&!isNaN(r)&&r>0}function x(r,t){return l(r)&&!isNaN(r)&&r<=t&&r>=0}function _(r,t){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d}\`.`}function D(r,t){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var A=f,T=N;function B({className:r,value:t,...a}){return e.jsx(A,{"data-slot":"progress",className:k("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",r),...a,children:e.jsx(T,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})})}const G="/images/introduction.jpg",H="/images/network.jpg",O="/images/ethical-hacking.jpg",g=r=>{const t=Math.floor(r/60),a=r%60;return`${t.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`},F=(r,t)=>t===0?0:Math.round(r/t*100),z=()=>{const r=[{id:1,title:"Introduction to Cybersecurity",description:"Learn the basics of cybersecurity, common threats, and methods of protection.",thumbnail:G,progress:{current:225,total:600},link:"/elearning/lessons/introduction-to-cybersecurity"},{id:2,title:"Network Security Fundamentals",description:"Explore essential techniques for securing networks and preventing unauthorized access.",thumbnail:H,progress:{current:300,total:720},link:"/elearning/lessons/network-security-fundamentals"},{id:3,title:"Ethical Hacking Basics",description:"Understand core principles of ethical hacking and penetration testing.",thumbnail:O,progress:{current:0,total:480},link:"/elearning/lessons/ethical-hacking-basics"}];return e.jsxs("div",{className:"p-4 space-y-8 min-h-screen",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-100 mb-4",children:"Lessons"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(t=>e.jsxs($,{className:"flex flex-col pt-0",children:[e.jsx("img",{src:t.thumbnail,alt:t.title,className:"w-full h-40 object-cover rounded-t-md"}),e.jsx(I,{children:e.jsx(S,{className:"text-lg font-bold text-gray-100",children:t.title})}),e.jsxs(E,{className:"flex-grow",children:[e.jsx("p",{className:"text-sm text-gray-100",children:t.description}),e.jsxs("div",{className:"mt-4",children:[e.jsx(B,{value:F(t.progress.current,t.progress.total),className:"w-full"}),e.jsxs("p",{className:"text-xs text-gray-100 mt-1",children:[g(t.progress.current)," /"," ",g(t.progress.total)]})]})]}),e.jsx("div",{className:"p-4 pt-0",children:e.jsx(C,{to:t.link,children:e.jsx(m,{variant:"outline",className:"w-full",children:"View Lesson"})})})]},t.id))}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-100 mb-4",children:"Multimedia Content"}),e.jsx("div",{className:"aspect-video w-full bg-black rounded-md flex items-center justify-center",children:e.jsx("p",{className:"text-gray-100",children:"[Video Placeholder]"})})]}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-100 mb-4",children:"Comments & Discussions"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-800 rounded-md shadow",children:[e.jsx("p",{className:"text-sm text-gray-100",children:"Great lesson! I learned a lot about network security."}),e.jsx("p",{className:"mt-2 text-xs text-gray-100",children:"John Doe - 2025-03-18"})]}),e.jsxs("div",{className:"p-4 bg-gray-800 rounded-md shadow",children:[e.jsx("p",{className:"text-sm text-gray-100",children:"Very informative. Looking forward to more advanced topics."}),e.jsx("p",{className:"mt-2 text-xs text-gray-100",children:"Jane Smith - 2025-03-19"})]}),e.jsxs("div",{className:"p-4 bg-gray-800 rounded-md shadow",children:[e.jsx("textarea",{className:"w-full p-2 border rounded-md bg-gray-900 text-gray-100",placeholder:"Write a comment...",rows:3}),e.jsx("div",{className:"mt-2 text-right",children:e.jsx(m,{variant:"default",children:"Submit Comment"})})]})]})]})]})};export{z as default};

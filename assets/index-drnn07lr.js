import"./index-BwDkhjyp.js";import{i as p}from"./factory-QgPjGyGX.js";let i=!1,s=null,t=!1,u=!1;const d=new Set,a=(e,r)=>d.forEach(n=>n(e,r)),f=e=>!(e.metaKey||!p&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta"),c=e=>{t=!0,f(e)&&(s="keyboard",a("keyboard",e))},o=e=>{if(s="pointer",e.type==="mousedown"||e.type==="pointerdown"||e.type==="pointerup"){if(t=!0,(e.composedPath?e.composedPath()[0]:e.target).matches(":focus-visible"))return;a("pointer",e)}},m=e=>e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType,y=e=>{m(e)&&(t=!0,s="virtual")},E=e=>{e.target===window||e.target===document||(!t&&!u&&(s="virtual",a("virtual",e)),t=!1,u=!1)},w=()=>{t=!1,u=!0},l=()=>s!=="pointer",L=()=>{if(typeof window>"u"||i)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){t=!0,this&&e.apply(this,n)},document.addEventListener("keydown",c,!0),document.addEventListener("keyup",c,!0),document.addEventListener("click",y,!0),window.addEventListener("focus",E,!0),window.addEventListener("blur",w,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",o,!0),document.addEventListener("pointermove",o,!0),document.addEventListener("pointerup",o,!0)):(document.addEventListener("mousedown",o,!0),document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",o,!0)),i=!0},b=(e,{force:r}={})=>{r&&(i=!1),L(),e(l());const n=()=>e(l());return d.add(n),()=>{d.delete(n)}};export{b as t};

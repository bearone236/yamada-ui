import{j as m,F as x}from"./jsx-runtime-TtYKBvr-.js";import{A as f}from"./index-GPdqE8CR.js";import{M as y}from"./motion--NSyoWHf.js";import{a as C,h as d,V as R}from"./factory-GBKO6tqf.js";import{r as u}from"./index-IybTgENJ.js";const b=(r,a,e)=>Math.min(Math.max(r,a),e),D=({className:r,ripples:a,onAnimationComplete:e,onClear:l,color:p="currentColor",style:t,isDisabled:n,...o})=>n?null:m(x,{children:a.map(({key:i,x:s,y:h,size:c})=>{const g=b(.01*c,.2,c>100?.75:.5);return m(f,{mode:"popLayout",children:m(y,{as:"span",className:C("ui-ripple",r),initial:{transform:"scale(0)",opacity:.35},animate:{transform:"scale(2)",opacity:0},exit:{opacity:0},transition:{duration:g},style:{position:"absolute",backgroundColor:p,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",zIndex:10,left:s,top:h,width:`${c}px`,height:`${c}px`,...t},...o,onAnimationComplete:d(e,()=>l(i))})},i)})}),j=r=>{const[a,e]=u.useState([]),l=u.useCallback(t=>{const n=t.currentTarget,o=Math.max(n.clientWidth,n.clientHeight),i=n.getBoundingClientRect();e(s=>[...s,{key:R(s.length.toString()),size:o,x:t.clientX-i.x-o/2,y:t.clientY-i.y-o/2}])},[]),p=u.useCallback(t=>{e(n=>n.filter(o=>o.key!==t))},[]);return{ripples:a,onPointerDown:d(l,r.onPointerDown),onClear:p}};export{D as R,j as u};

import{j as a}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{R as c}from"./index-BwDkhjyp.js";import{b as i}from"./icon-932iDb3I.js";import{H as S}from"./stack-DAUYtLCM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DARK8rH5.js";import"./theme-provider-QhVoByOm.js";import"./factory-CJjTzqIw.js";import"./forward-ref-BmTAT9U5.js";var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=c.createContext&&c.createContext(O),P=["attr","size","title"];function w(t,e){if(t==null)return{};var r=z(t,e),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function z(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function m(){return m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},m.apply(this,arguments)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(n){I(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function I(t,e,r){return e=H(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function H(t){var e=E(t,"string");return typeof e=="symbol"?e:e+""}function E(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function j(t){return t&&t.map((e,r)=>c.createElement(e.tag,p({key:r},e.attr),j(e.child)))}function R(t){return e=>c.createElement(_,m({attr:p({},t.attr)},e),j(t.child))}function _(t){var e=r=>{var{attr:n,size:o,title:s}=t,h=w(t,P),g=o||r.size||"1em",f;return r.className&&(f=r.className),t.className&&(f=(f?f+" ":"")+t.className),c.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,h,{className:f,style:p(p({color:t.color||r.color},r.style),t.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),s&&c.createElement("title",null,s),t.children)};return b!==void 0?c.createElement(b.Consumer,null,r=>e(r)):e(O)}function l(t){return R({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(t)}const B={title:"Components / Media And Icons / Icon",component:i},u=()=>a.jsxs(S,{alignItems:"flex-end",children:[a.jsx(i,{as:l,fontSize:"6xl",color:"gray.400"}),a.jsx(i,{as:l,fontSize:"5xl",color:"gray.400"}),a.jsx(i,{as:l,fontSize:"4xl",color:"gray.400"}),a.jsx(i,{as:l,fontSize:"3xl",color:"gray.400"}),a.jsx(i,{as:l,fontSize:"2xl",color:"gray.400"}),a.jsx(i,{as:l,fontSize:"xl",color:"gray.400"})]});var y,v,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <HStack alignItems="flex-end">
      <Icon as={FaRobot} fontSize="6xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="5xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="4xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="3xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="2xl" color="gray.400" />

      <Icon as={FaRobot} fontSize="xl" color="gray.400" />
    </HStack>;
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const T=["basic"];export{T as __namedExportsOrder,u as basic,B as default};

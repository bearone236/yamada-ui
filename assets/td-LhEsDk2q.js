import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{f as c}from"./forward-ref-BmTAT9U5.js";import{l as y,u as l,c as n}from"./factory-QgPjGyGX.js";import{a as b}from"./use-component-style-Dz3o-zMC.js";import{o as d}from"./theme-provider-CJ7n5K3X.js";const[T,i]=y({name:"TableStyleContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" or "<NativeTable />" or "<PagingTable />"`}),j=c((t,e)=>{const[s,o]=b("NativeTable",t),{className:a,layout:u,...m}=d(o,["withBorder","withColumnBorders","highlightOnHover"]),_={tableLayout:u,...s.table};return r.jsx(T,{value:s,children:r.jsx(l.table,{ref:e,className:n("ui-table",a),__css:_,...m})})}),g=c(({className:t,...e},s)=>{const a={...i().thead};return r.jsx(l.thead,{ref:s,className:n("ui-table__thead",t),__css:a,...e})}),v=c(({className:t,...e},s)=>{const a={...i().tbody};return r.jsx(l.tbody,{ref:s,className:n("ui-table__tbody",t),__css:a,...e})}),S=c(({className:t,...e},s)=>{const a={...i().tfoot};return r.jsx(l.tfoot,{ref:s,className:n("ui-table__tfoot",t),__css:a,...e})}),w=c(({className:t,...e},s)=>{const a={...i().tr};return r.jsx(l.tr,{ref:s,className:n("ui-table__tr",t),__css:a,...e})}),C=c(({className:t,isNumeric:e,__css:s,...o},a)=>{const m={...i().th,...s};return r.jsx(l.th,{ref:a,className:n("ui-table__th",t),__css:m,"data-is-numeric":e,...o})}),P=c(({className:t,isNumeric:e,...s},o)=>{const u={...i().td};return r.jsx(l.td,{ref:o,className:n("ui-table__td",t),__css:u,"data-is-numeric":e,...s})});export{j as N,g as T,w as a,C as b,v as c,P as d,S as e,T as f,i as u};

var H=Object.defineProperty,N=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var w=(t,n,r)=>n in t?H(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,h=(t,n)=>{for(var r in n||(n={}))g.call(n,r)&&w(t,r,n[r]);if(f)for(var r of f(n))x.call(n,r)&&w(t,r,n[r]);return t},p=(t,n)=>N(t,B(n));var v=(t,n)=>{var r={};for(var l in t)g.call(t,l)&&n.indexOf(l)<0&&(r[l]=t[l]);if(t!=null&&f)for(var l of f(t))n.indexOf(l)<0&&x.call(t,l)&&(r[l]=t[l]);return r};import{j as e,B as c,T as y,u as I,a as A,R as b,b as E,c as o,S,I as j,F as W,d as Z,e as O,C as L,f as u,g as P,h as D,i as M,k as R,l as V,m,n as Q,r as C,o as q,p as K,H as k,q as U,s as Y,Q as _,t as G,v as J,w as X,x as $}from"./vendor.9edb2f74.js";import z from"https://cdn.skypack.dev/url-parse";const ee=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};ee();function te(t){return e(c,p(h({},t),{children:e(y,{as:"span",fontSize:"sm",fontWeight:"bold",children:"ngonx"})}))}const T=()=>{const t=I("#282828","#fff"),[n]=A("(max-width: 600px)");return{border:t,isMobileDevice:n}},ne=t=>{const[n,r]=b.useState(!1),l=()=>r(!n),{border:i}=T(),{colorMode:a,toggleColorMode:s}=E();return o(oe,p(h({},t),{children:[e(te,{w:"50px"}),e(ie,{toggle:l,isOpen:n,colorFill:i}),e(ae,{isOpen:n,colorMode:a,toggleColorMode:s})]}))},re=({fill:t})=>o("svg",{width:"24",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:[e("title",{children:"Close"}),e("path",{fill:t,d:"M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"})]}),le=({fill:t})=>o("svg",{width:"24px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:t,children:[e("title",{children:"Menu"}),e("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]}),ie=({toggle:t,isOpen:n,colorFill:r})=>e(c,{display:{base:"block",md:"none"},onClick:t,children:n?e(re,{fill:r}):e(le,{fill:r})}),ae=({isOpen:t,colorMode:n,toggleColorMode:r})=>e(c,{display:{base:t?"block":"none",md:"block"},flexBasis:{base:"100%",md:"auto"},children:e(S,{spacing:8,align:"center",justify:["center","space-between","flex-end","flex-end"],direction:["column","row","row","row"],pt:[4,4,0,0],children:e(j,{"aria-label":"",mr:"4",className:"icon-button-name",size:"sm",icon:n==="light"?e(W,{}):e(Z,{}),isRound:!0,onClick:r,alignSelf:"flex-end"})})}),oe=r=>{var l=r,{children:t}=l,n=v(l,["children"]);return e(O,p(h({as:"nav",align:"center",justify:"space-between",wrap:"wrap",w:"100%",p:8},n),{children:t}))};function se(){const{border:t,colorBase:n}=T();return e(c,{pt:"20",color:t,children:e(L,{children:e(S,{spacing:6,children:o(y,{fontSize:"sm",children:["\xA9 ",new Date().getFullYear()," @kenriortega web page. All rights reserved"]})})})})}const ce=({id:t,path_url:n,status:r})=>{const{pathname:l,hostname:i,protocol:a}=new z(n);return e(u,{children:e("span",{className:"card",children:o(c,{w:"500",children:[e("h1",{children:r?"\u2620\uFE0F Down":"\u2705 UP"}),o("h3",{children:["Path: ",l]}),o("h4",{children:["Host: ",i]})]})})})},de=({endpoints:t,onSelectedRow:n})=>e(u,{children:o(P,{variant:"simple",children:[e(D,{children:e(M,{children:Object.keys(t[0]).map(r=>e(R,{children:r},r))})}),e(V,{children:t.map(r=>o(M,{onClick:()=>n(r),children:[e(m,{cursor:"pointer",color:"green",children:e(Q,{label:"go to ...",placement:"left",children:r.id.split("-")[0]})}),e(m,{children:z(r.path_url).pathname}),e(m,{children:r.status?"\u2620\uFE0F down":"\u2705 up"})]},r.id))})]})});function F({primary:t="",border:n="",width:r,height:l}){return o("svg",{id:"b21613c9-2bf0-4d37-bef0-3b193d34fc5d","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:r,height:l,viewBox:"0 0 647.63626 632.17383",children:[e("path",{d:"M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z",transform:"translate(-276.18187 -133.91309)",fill:"#f2f2f2"}),e("path",{d:"M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z",transform:"translate(-276.18187 -133.91309)",fill:"#3f3d56"}),e("path",{d:"M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z",transform:"translate(-276.18187 -133.91309)",fill:"#6c63ff"}),e("circle",{cx:"190.15351",cy:"24.95465",r:"20",fill:"#6c63ff"}),e("circle",{cx:"190.15351",cy:"24.95465",r:"12.66462",fill:"#fff"}),e("path",{d:"M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z",transform:"translate(-276.18187 -133.91309)",fill:"#e6e6e6"}),e("path",{d:"M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z",transform:"translate(-276.18187 -133.91309)",fill:"#3f3d56"}),e("path",{d:"M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z",transform:"translate(-276.18187 -133.91309)",fill:"#6c63ff"}),e("circle",{cx:"433.63626",cy:"105.17383",r:"20",fill:"#6c63ff"}),e("circle",{cx:"433.63626",cy:"105.17383",r:"12.18187",fill:"#fff"})]})}const he=()=>{const[t,n]=C.exports.useState(!1),r=()=>{n(!t)},l=d=>{console.log(d)},{isLoading:i,error:a,data:s}=q("endpointsData",()=>fetch("/api/v1/mngt/").then(d=>d.json()));return i?"Loading...":a?"An error has occurred: "+a.message:e(u,{children:o(K,{maxW:"container.1sm",px:[0,4],children:[e(k,{as:"h2",m:8,size:"md",children:"Ngonx Proxy!!"}),e(k,{as:"h1",m:8,size:"2xl",children:"Service Discovery"}),o(u,{children:[e(c,{onClick:r,cursor:"pointer",children:t?e(U,{size:23}):e(Y,{size:23})}),t?e(c,{p:23,children:s.length>0?e(de,{endpoints:s,onSelectedRow:l}):e(F,{width:"300",height:"300"})}):e("div",{children:s.length>0?e("div",{className:"grid",children:s.map(d=>e(C.exports.Fragment,{children:e(ce,h({},d))},d.id))}):e(L,{children:e(F,{width:"300",height:"300"})})})]})]})})},fe=new _;function pe(){return o(G,{client:fe,children:[e(ne,{}),e("main",{className:"main",children:e(he,{})}),e(se,{})]})}const ue=J({styles:{global:t=>({"html, body":{fontSize:"sm",color:t.colorMode==="dark"?"white":"spotify.700",lineHeight:"tall",bg:t.colorMode==="dark"?"spotify.700":"white"}})},config:{initialColorMode:"system",useSystemColorMode:!0},colors:{spotify:{700:"#282828"}},sizes:{container:{sectionLanding:"1250px",desktop:"1250px",desktopInput:"450px","1sm":"700px","2sm":"850px","1xl":"1250px","2xl":"1440px"}},textStyles:{filterListItem:{fontSize:["18px","24px"],fontWeight:"semibold",lineHeight:"110%",letterSpacing:"-1%",paddingLeft:"23px"},brandName:{fontSize:["18px","24px"],fontWeight:"semibold",lineHeight:"110%",letterSpacing:"-1%"},linkName:{fontSize:["12px","14px"],fontWeight:"semibold",lineHeight:"110%",letterSpacing:"-1%",justifyContent:"center",padding:"4px 16px"},cardText:{fontSize:["14px","16px","18px","24px"],fontWeight:"semibold",lineHeight:"110%",letterSpacing:"-1%"},cardTextSmall:{fontSize:["10px","12px","12px","14px"],fontWeight:"500",lineHeight:"110%",letterSpacing:"-1%"},cardTextVerySmall:{fontSize:["10px","10px"],fontWeight:"500",letterSpacing:"-1%"}}});X.render(e(b.StrictMode,{children:e($,{theme:ue,children:e(pe,{})})}),document.getElementById("root"));

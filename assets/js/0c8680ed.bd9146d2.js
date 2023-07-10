"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[5655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=o,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66242:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),o=r(86010),a=r(52802),l=r(39960),i=r(95999);const c="cardContainer_S8oU",s="cardTitle_HoSo",u="cardDescription_c27F";function d(e){let{href:t,children:r}=e;return n.createElement(l.Z,{href:t,className:(0,o.Z)("card padding--lg",c)},r)}function m(e){let{href:t,icon:r,title:a,description:l}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:a},r," ",a),l&&n.createElement("p",{className:(0,o.Z)("text--truncate",u),title:l},l))}function p(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r="Babylon Overview"===t.label?"\ud83d\udcd6":"A Primary Usecase - Securing PoS Chains"===t.label?"\ud83d\udee0":"Architecture"===t.label?"\ud83d\udd0e":"Epoching Module"===t.label?"\ud83d\udcd8":"Checkpointing Module"===t.label?"\ud83d\udcd5":"BTC Checkpoint Module"===t.label?"\ud83d\udcd9":"BTC Light Client Module"===t.label?"\ud83d\udcd7":"Zone Concierge Module"===t.label?"\ud83d\udcd4":"Vigilante Submitter Program"===t.label?"\ud83d\udce1":"Vigilante Reporter Program"===t.label?"\ud83c\udfa4":"Vigilante Monitor Program"===t.label?"\ud83d\udcfa":"Network Information"===t.label?"\ud83e\uddd0":"Setting Up a Full Node"===t.label?"\ud83d\udc40":"Getting Testnet Tokens"===t.label?"\ud83d\udd0e":"Becoming a Validator"===t.label?"\ud83d\udc68\u200d\ud83c\udfeb":"Becoming a Vigilante"===t.label?"\ud83d\udc68\u200d\ud83d\udcbb":"Integrating with Babylon"===t.label?"\ud83d\udd10":"\ud83d\udcc4\ufe0f",o=(0,a.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:null==o?void 0:o.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const l=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},26586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a=r.p+"assets/images/architecture-af00abaef8ecf0dcc6bd2a8c51fa187b.png";var l=r(66242);const i={id:"overview",sidebar_label:"Babylon Modules",hide_table_of_contents:!0},c="Babylon Modules",s={unversionedId:"modules/overview",id:"modules/overview",title:"Babylon Modules",description:"\ud83d\udd75\ufe0f\u200d\u2642\ufe0f Find out about the Babylon modules and how they function.",source:"@site/docs/modules/overview.md",sourceDirName:"modules",slug:"/modules/overview",permalink:"/docs/modules/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/overview.md",tags:[],version:"current",frontMatter:{id:"overview",sidebar_label:"Babylon Modules",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/introduction/architecture"},next:{title:"Epoching Module",permalink:"/docs/modules/epoching"}},u={},d=[],m={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylon-modules"},"Babylon Modules"),(0,o.kt)("p",null,"\ud83d\udd75\ufe0f\u200d\u2642\ufe0f Find out about the Babylon modules and how they function."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The chart below illustrates a general overview of Babylon's modules."),(0,o.kt)("div",{style:{justifyContent:"center",display:"flex",marginBottom:"50px"}},(0,o.kt)("img",{style:{width:"1500px"},src:a,alt:"installationguide"})),(0,o.kt)(l.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);
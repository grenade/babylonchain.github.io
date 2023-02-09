"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8407],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>b});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=t.createContext({}),s=function(e){var r=t.useContext(y),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(y.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,y=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,c=d["".concat(y,".").concat(b)]||d[b]||g[b]||o;return n?t.createElement(c,l(l({ref:r},u),{},{components:n})):t.createElement(c,l({ref:r},u))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var y in r)hasOwnProperty.call(r,y)&&(i[y]=r[y]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72463:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>y,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={id:"babylond_query_freegrant_grants-by-granter",sidebar_label:"babylond query feegrant grants-by-granter",hide_table_of_contents:!0},l="babylond query feegrant grants-by-granter",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-granter",id:"cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-granter",title:"babylond query feegrant grants-by-granter",description:"Querying all the grants for the granter address.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_freegrant/Babylond_query_freegrant_grants-by-granter.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_freegrant",slug:"/cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-granter",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-granter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_freegrant/Babylond_query_freegrant_grants-by-granter.md",tags:[],version:"current",frontMatter:{id:"babylond_query_freegrant_grants-by-granter",sidebar_label:"babylond query feegrant grants-by-granter",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query feegrant grants-by-grantee",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-grantee"},next:{title:"babylond query gov",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_gov"}},y={},s=[{value:"query feegrant grants-by-granter command",id:"query-feegrant-grants-by-granter-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:s};function g(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-feegrant-grants-by-granter"},"babylond query feegrant grants-by-granter"),(0,a.kt)("p",null,"Querying all the grants for the granter address."),(0,a.kt)("h2",{id:"query-feegrant-grants-by-granter-command"},"query feegrant grants-by-granter command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query feegrant grants-by-granter [granter] [flags]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in grants to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for grants-by-granter\n      --limit uint        pagination limit of grants to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of grants to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of grants to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of grants to query for\n      --reverse           results are sorted in descending order\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}g.isMDXComponent=!0}}]);
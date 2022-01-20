"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8512],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,g=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3082:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),i={container:"container_31k_",webpack:"webpack_1p3M",vite:"vite_KQcn"};var l=function(e){var t=e.list;return r.createElement("span",{className:i.container},["webpack","vite"].map((function(e){return r.createElement("img",{title:e,className:i[e],key:e,src:"/img/svg/"+(t.includes(e)?e:e+"-gray")+".svg"})})))}},7820:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(3117),i=n(102),l=(n(7294),n(3905)),a=n(3082),o=["components"],p={title:"keep-alive",order:7},c=void 0,u={unversionedId:"plugin/list/keep-alive",id:"plugin/list/keep-alive",title:"keep-alive",description:"\u8ba9\u5f00\u53d1\u8005\u5feb\u6377\u5f00\u542f SPA \u4e0b\u57fa\u4e8e\u8def\u7531\u7ea7\u522b\u7684 Keep Alive \u80fd\u529b\u3002",source:"@site/docs/plugin/list/keep-alive.md",sourceDirName:"plugin/list",slug:"/plugin/list/keep-alive",permalink:"/docs/plugin/list/keep-alive",editUrl:"https://github.com/ice-lab/site/edit/master/docs/plugin/list/keep-alive.md",tags:[],version:"current",frontMatter:{title:"keep-alive",order:7},sidebar:"plugin",previous:{title:"css-assets-locale",permalink:"/docs/plugin/list/css-assets-local"},next:{title:"jsx plus",permalink:"/docs/plugin/list/jsx-plus"}},s=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],m={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.Z,{list:["webpack"],mdxType:"Support"}),(0,l.kt)("p",null,"\u8ba9\u5f00\u53d1\u8005\u5feb\u6377\u5f00\u542f SPA \u4e0b\u57fa\u4e8e\u8def\u7531\u7ea7\u522b\u7684 Keep Alive \u80fd\u529b\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"mailto:ice.js@1.15.0"},"ice.js@1.15.0")," \u4ee5\u4e0a\u7248\u672c\u5f00\u59cb\u652f\u6301")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -save-dev build-plugin-keep-alive\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": ["build-plugin-keep-alive"]\n}\n')),(0,l.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u914d\u7f6e\u540e\uff0c\u9879\u76ee\u4f1a\u6309\u9875\u9762\u8def\u7531\u7ef4\u5ea6\u5f00\u542f Keep Alive \u80fd\u529b\uff0c\u5982\u679c\u5e0c\u671b\u5173\u95ed\u6307\u5b9a\u8def\u7531\u7684 Keep Alive\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"pageConfig")," \u8fdb\u884c\u5173\u95ed\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// src/routes.ts\nimport Home from '@/pages/Home';\n\nexport default [\n  {\n    path: '/home',\n    component: Home,\n+    // icejs 1.x \u4ec5\u652f\u6301\u5c06 pageConfig \u914d\u7f6e\u5728\u5bf9\u5e94\u7684\u9875\u9762\u7ec4\u4ef6\u4e0a\uff0c\u8bf7\u53c2\u8003\u300c\u9875\u9762\u7ec4\u4ef6\u300d\u7ae0\u8282\n+    pageConfig: {\n+      keepAlive: false,\n+    },\n  },\n];\n\nexport default routerConfig;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u4e8b\u9879\uff1a\u7531\u4e8e\u5f00\u542f\u4e86 Keep Alive \u80fd\u529b\uff0c\u8def\u7531\u53d1\u751f\u5207\u6362\u65f6\uff0c\u7ec4\u4ef6\u5bf9\u5e94\u7684 mount \u548c unmount \u751f\u547d\u5468\u671f\u5c06\u4e0d\u4f1a\u91cd\u590d\u6267\u884c")))}f.isMDXComponent=!0}}]);
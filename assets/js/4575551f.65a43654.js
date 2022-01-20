"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6144],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2050:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],l={title:"\u4ee3\u7801\u5206\u5272 Code Splitting",order:6},p=void 0,c={unversionedId:"guide/advanced/code-splitting",id:"guide/advanced/code-splitting",title:"\u4ee3\u7801\u5206\u5272 Code Splitting",description:"\u968f\u7740\u5e94\u7528\u7684\u589e\u957f\uff0c\u4ee3\u7801 bundle \u7684\u5927\u5c0f\u4e5f\u5c06\u968f\u4e4b\u589e\u957f\u3002\u4e3a\u4e86\u907f\u514d\u56e0\u4f53\u79ef\u8fc7\u5927\u800c\u5bfc\u81f4\u52a0\u8f7d\u65f6\u95f4\u8fc7\u957f\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u8def\u7531\u5bf9\u4ee3\u7801\u8fdb\u884c\u5206\u5272\u6210\u4e0d\u540c\u7684\u4ee3\u7801\u5757\uff0c\u7136\u540e\u5f53\u8def\u7531\u88ab\u8bbf\u95ee\u7684\u65f6\u5019\u624d\u52a0\u8f7d\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u80fd\u591f\u663e\u8457\u5730\u63d0\u9ad8\u5e94\u7528\u6027\u80fd\u3002",source:"@site/docs/guide/advanced/code-splitting.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/code-splitting",permalink:"/docs/guide/advanced/code-splitting",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/advanced/code-splitting.md",tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u5206\u5272 Code Splitting",order:6},sidebar:"docs",previous:{title:"\u5fae\u524d\u7aef icestark",permalink:"/docs/guide/advanced/icestark"},next:{title:"\u6e10\u8fdb\u5f0f Web \u5e94\u7528 PWA",permalink:"/docs/guide/advanced/pwa"}},u=[{value:"\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272",id:"\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272",children:[{value:"\u914d\u7f6e\u5f0f\u8def\u7531",id:"\u914d\u7f6e\u5f0f\u8def\u7531",children:[],level:3},{value:"\u7ea6\u5b9a\u5f0f\u8def\u7531",id:"\u7ea6\u5b9a\u5f0f\u8def\u7531",children:[],level:3},{value:"fallback",id:"fallback",children:[],level:3}],level:2},{value:"\u975e\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272",id:"\u975e\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272",children:[],level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"\u52a8\u6001\u4fee\u6539\u5f02\u6b65\u8d44\u6e90\u52a0\u8f7d\u5730\u5740",id:"\u52a8\u6001\u4fee\u6539\u5f02\u6b65\u8d44\u6e90\u52a0\u8f7d\u5730\u5740",children:[],level:3}],level:2}],d={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u968f\u7740\u5e94\u7528\u7684\u589e\u957f\uff0c\u4ee3\u7801 bundle \u7684\u5927\u5c0f\u4e5f\u5c06\u968f\u4e4b\u589e\u957f\u3002\u4e3a\u4e86\u907f\u514d\u56e0\u4f53\u79ef\u8fc7\u5927\u800c\u5bfc\u81f4\u52a0\u8f7d\u65f6\u95f4\u8fc7\u957f\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u8def\u7531\u5bf9\u4ee3\u7801\u8fdb\u884c\u5206\u5272\u6210\u4e0d\u540c\u7684\u4ee3\u7801\u5757\uff0c\u7136\u540e\u5f53\u8def\u7531\u88ab\u8bbf\u95ee\u7684\u65f6\u5019\u624d\u52a0\u8f7d\u5bf9\u5e94\u7684\u4ee3\u7801\uff0c\u80fd\u591f\u663e\u8457\u5730\u63d0\u9ad8\u5e94\u7528\u6027\u80fd\u3002"),(0,a.kt)("h2",{id:"\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272"},"\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272"),(0,a.kt)("p",null,"\u63a8\u8350\u4ee5\u8def\u7531\u7ef4\u5ea6\u5206\u5272\u4ee3\u7801\uff0c\u6bcf\u4e2a\u8def\u7531\u5bf9\u5e94\u7684\u4ee3\u7801\u4f1a\u751f\u6210\u4e00\u4e2a\u72ec\u7acb\u7684 js \u548c css\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u5f0f\u8def\u7531"},"\u914d\u7f6e\u5f0f\u8def\u7531"),(0,a.kt)("p",null,"\u5728\u914d\u7f6e\u5f0f\u8def\u7531\u4e2d\u5982\u679c\u9700\u8981\u5f00\u542f\u6309\u9700\u52a0\u8f7d\uff0c\u53ea\u9700\u8981\u5728\u8def\u7531\u6587\u4ef6\u4e2d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"lazy")," \u65b9\u6cd5\u5f15\u5165\u7ec4\u4ef6\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// src/routes.ts\n+ import { lazy } from 'ice';\n- import UserLogin from '@/pages/UserLogin';\n+ const UserLogin = lazy(() => import('@/pages/UserLogin'));\n\nconst routerConfig = [\n  {\n    path: '/login',\n    component: UserLogin,\n  },\n]\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u751f\u6210\u7684 chunk \u662f\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"p"},"[index]")," \u4f5c\u4e3a chunk \u540d\u79f0\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 webpackChunkName \u6307\u5b9a\u6bcf\u4e2a chunk \u6765\u81ea\u54ea\u4e2a\u6587\u4ef6\uff0c\u4ee5\u4fbf\u4e8e\u67e5\u770b\u548c\u8c03\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"const UserLogin = lazy(() => import('@/pages/UserLogin'));\n+ const UserLogin = lazy(() => import(/* webpackChunkName: 'user-login' */'@/pages/UserLogin'));\n")),(0,a.kt)("h3",{id:"\u7ea6\u5b9a\u5f0f\u8def\u7531"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),(0,a.kt)("p",null,"\u5728\u7ea6\u5b9a\u5f0f\u8def\u7531\u4e2d\u5982\u679c\u9700\u8981\u5f00\u542f\u6309\u9700\u52a0\u8f7d\uff0c\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u7684 router \u9009\u9879\u914d\u7f6e lazy \u5c5e\u6027\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'// build.json\n{\n  "router": {\n+    "lazy": true\n  }\n}\n')),(0,a.kt)("h3",{id:"fallback"},"fallback"),(0,a.kt)("p",null,"\u5f53\u7ec4\u4ef6\u52a8\u6001\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u6216\u8005\u7ec4\u4ef6\u6e32\u67d3\u5931\u8d25\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 fallback \u5c5e\u6027\u8bbe\u7f6e\u63d0\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import { runApp } from 'ice';\n\nconst appConfig = {\n  router: {\n+    fallback: <div>loading...</div>\n  }\n}\n\nrunApp(appConfig);\n")),(0,a.kt)("h2",{id:"\u975e\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272"},"\u975e\u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272"),(0,a.kt)("p",null,"\u9664\u4e86\u8def\u7531\u7ef4\u5ea6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u505a\u4e00\u4e9b\u66f4\u5c0f\u7c92\u5ea6\u6bd4\u5982\u7ec4\u4ef6\u7ea7\u522b\u7684\u4ee3\u7801\u5206\u5272\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { lazy } from 'ice';\nimport React, { Suspense } from 'react';\n\nconst OtherComponent = lazy(() => import('@/components/RichEditor'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <OtherComponent />\n      </Suspense>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\u5bf9\u5e94\u7528\u8fdb\u884c\u4ee3\u7801\u5206\u5272\u53ef\u4ee5\u907f\u514d\u52a0\u8f7d\u7528\u6237\u6c38\u8fdc\u4e0d\u9700\u8981\u7684\u4ee3\u7801\uff0c\u5e76\u5728\u521d\u59cb\u52a0\u8f7d\u7684\u65f6\u5019\u51cf\u5c11\u6240\u9700\u52a0\u8f7d\u7684\u4ee3\u7801\u91cf\uff0c\u5728\u5927\u591a\u6570\u65f6\u5019\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u4ee3\u7801\u5206\u5272\u6765\u63d0\u5347\u5e94\u7528\u7684\u52a0\u8f7d\u901f\u5ea6\u548c\u6027\u80fd\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h3",{id:"\u52a8\u6001\u4fee\u6539\u5f02\u6b65\u8d44\u6e90\u52a0\u8f7d\u5730\u5740"},"\u52a8\u6001\u4fee\u6539\u5f02\u6b65\u8d44\u6e90\u52a0\u8f7d\u5730\u5740"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u8ff0\u5207\u5272\u540e\u7684\u4ee3\u7801\u6216\u8005\u4ee3\u7801\u91cc\u4f7f\u7528\u7684\u9759\u6001\u8d44\u6e90\uff0c\u6700\u7ec8\u9875\u9762\u8fd0\u884c\u65f6\u4f1a\u901a\u8fc7 HTTP \u65b9\u5f0f\u5f02\u6b65\u52a0\u8f7d\uff0c\u800c\u5f02\u6b65\u52a0\u8f7d\u7684",(0,a.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u5730\u5740"),"\u662f\u901a\u8fc7\u6784\u5efa\u65f6\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"publicPath")," \u6765\u63a7\u5236\u7684\u3002\u5728\u4e00\u4e9b\u7279\u6b8a\u7684\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u53ea\u6709\u4e00\u5957\u6784\u5efa\u73af\u5883\uff0c\u4f46\u662f\u9700\u8981\u90e8\u7f72\u5230\u591a\u4e2a\u57df\u540d\u4e0b\uff0c\u6b64\u65f6\u53ea\u80fd\u5199\u6b7b\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"publicPath"),"\uff0c\u90a3\u4e48\u5728\u53e6\u4e00\u4e2a\u57df\u540d\u4e0b\u8fd0\u884c\u65f6\u52a0\u8f7d\u5f02\u6b65\u8d44\u6e90\u7684\u5730\u5740\u5c31\u4f1a\u6709\u95ee\u9898\uff0c\u6b64\u65f6\u5373\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"publicPath")," \u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u65b0\u5efa\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/public-path.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (typeof window === 'object' && window.resourceBaseUrl && typeof __webpack_public_path__ !== 'undefined')\n  // \u5728 html \u4e2d\u6839\u636e\u73af\u5883\u6ce8\u5165\u4e0d\u540c\u7684 window.resourceBaseUrl \u5168\u5c40\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u6839\u636e\u5f53\u524d\u57df\u540d\u7b49\u4fe1\u606f\u52a8\u6001\u5224\u65ad&\u8bbe\u7f6e\n  __webpack_public_path__ = window.resourceBaseUrl;\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u300c\u6700\u9876\u90e8\u300d\u5f15\u5165\u8be5\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"+import './public-path';\nimport { runApp } from 'ice';\n\nrunApp({});\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1aVite \u6a21\u5f0f\u4e0b\u6682\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539 publicPath\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 issue ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vitejs/vite/issues/3522"},"https://github.com/vitejs/vite/issues/3522")))}s.isMDXComponent=!0}}]);
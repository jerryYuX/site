"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6663],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2625:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),l=["components"],o={title:"\u5de5\u7a0b\u914d\u7f6e",order:4},p=void 0,c={unversionedId:"guide/basic/build",id:"guide/basic/build",title:"\u5de5\u7a0b\u914d\u7f6e",description:"icejs \u57fa\u4e8e build-scripts\uff0c\u56e0\u6b64\u5de5\u7a0b\u4f7f\u7528\u65b9\u5f0f\u4e0e build-scripts \u5b8c\u5168\u4e00\u81f4\u3002",source:"@site/docs/guide/basic/build.md",sourceDirName:"guide/basic",slug:"/guide/basic/build",permalink:"/docs/guide/basic/build",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/basic/build.md",tags:[],version:"current",frontMatter:{title:"\u5de5\u7a0b\u914d\u7f6e",order:4},sidebar:"docs",previous:{title:"\u5e94\u7528\u5165\u53e3",permalink:"/docs/guide/basic/app"},next:{title:"Vite \u6a21\u5f0f",permalink:"/docs/guide/basic/vite"}},s=[{value:"\u5f00\u53d1\u8c03\u8bd5",id:"\u5f00\u53d1\u8c03\u8bd5",children:[],level:2},{value:"\u547d\u4ee4\u884c\u4ecb\u7ecd",id:"\u547d\u4ee4\u884c\u4ecb\u7ecd",children:[{value:"start",id:"start",children:[],level:3},{value:"build",id:"build",children:[],level:3}],level:2},{value:"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e",id:"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e",children:[],level:2},{value:"\u8fdb\u9636\u914d\u7f6e",id:"\u8fdb\u9636\u914d\u7f6e",children:[{value:"\u6839\u636e\u73af\u5883\u533a\u5206\u5de5\u7a0b\u914d\u7f6e",id:"\u6839\u636e\u73af\u5883\u533a\u5206\u5de5\u7a0b\u914d\u7f6e",children:[],level:3},{value:"\u5982\u4f55\u5f00\u542f\u65b0\u7684 JSX \u8f6c\u6362",id:"\u5982\u4f55\u5f00\u542f\u65b0\u7684-jsx-\u8f6c\u6362",children:[],level:3}],level:2},{value:"\u81ea\u5b9a\u4e49\u5de5\u7a0b\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u5de5\u7a0b\u914d\u7f6e",children:[],level:2},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"icejs \u57fa\u4e8e build-scripts\uff0c\u56e0\u6b64\u5de5\u7a0b\u4f7f\u7528\u65b9\u5f0f\u4e0e build-scripts \u5b8c\u5168\u4e00\u81f4\u3002"),(0,a.kt)("h2",{id:"\u5f00\u53d1\u8c03\u8bd5"},"\u5f00\u53d1\u8c03\u8bd5"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9879\u76ee\u7684 package.json \u4f1a\u914d\u7f6e\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "icejs start",\n    "build": "icejs build"\n  }\n}\n')),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," \u5373\u53ef\u8fdb\u884c\u9879\u76ee\u5f00\u53d1\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u6267\u884c\u547d\u4ee4\u540e\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3333")," \u8fdb\u884c\u9875\u9762\u9884\u89c8\uff0c\u4fee\u6539\u6e90\u7801\u540e\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5237\u65b0\u9875\u9762\u3002\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," \u8fdb\u884c\u9879\u76ee\u6784\u5efa\uff0c\u6784\u5efa\u4ea7\u7269\u9ed8\u8ba4\u8f93\u51fa\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"./build")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c\u4ecb\u7ecd"},"\u547d\u4ee4\u884c\u4ecb\u7ecd"),(0,a.kt)("p",null,"icejs \u63d0\u4f9b\u4e86 start/build \u4e24\u4e2a\u6838\u5fc3\u547d\u4ee4\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start")," \u547d\u4ee4\u65f6\uff0c\u5982\u9700\u4f20\u5165\u53c2\u6570\u8bf7\u6309\u7167\u8fd9\u4e2a\u683c\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start -- --https"))),(0,a.kt)("h3",{id:"start"},"start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ icejs start --help\n\nUsage: icejs start [options]\n\nOptions:\n  --port <port>          \u670d\u52a1\u7aef\u53e3\u53f7\n  --host <host>          \u670d\u52a1\u4e3b\u673a\u540d\n  --config <config>      \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\n  --https                \u652f\u6301\u5f00\u542f https\n  --analyzer             \u652f\u6301\u5f00\u542f\u6784\u5efa\u5206\u6790\n  --analyzer-port <port> \u652f\u6301\u5b9a\u5236\u6784\u5efa\u5206\u6790\u7aef\u53e3\n  --disable-reload       \u7981\u7528\u70ed\u66f4\u65b0\u6a21\u5757\n  --disable-mock         \u7981\u7528 mock \u670d\u52a1\n  --disable-open         \u7981\u6b62\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6253\u5f00\u884c\u4e3a\n  --disable-assets       \u7981\u6b62 Webpack assets \u7684\u8f93\u51fa\n  --force                \u79fb\u9664\u6784\u5efa\u7f13\u5b58\n")),(0,a.kt)("h3",{id:"build"},"build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ icejs build --help\n\nUsage: icejs build [options]\n\nOptions:\n  --analyzer             \u540c start\n  --analyzer-port <port> \u540c start\n  --config <config>      \u540c start\n  --force                \u540c start\n")),(0,a.kt)("h2",{id:"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e"},"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e"),(0,a.kt)("p",null,"\u5de5\u7a0b\u6784\u5efa\u76f8\u5173\u7684\u914d\u7f6e\u9ed8\u8ba4\u90fd\u6536\u655b\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"build.json"),"\xa0 \u6587\u4ef6\u4e2d\uff0c\u914d\u7f6e\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "alias": {},\n  "publicPath": ""\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u4f7f\u7528 JS \u7c7b\u578b\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5219\u9700\u8981\u5728 npm scripts \u4e2d\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "icejs start --config build.config.js",\n    "build": "icejs build --config build.config.js"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"build.config.js")," \u4e2d\u901a\u8fc7 JS \u6a21\u5757\u7684\u65b9\u5f0f\u6307\u5b9a\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  define: {\n    env: process.env.NODE_ENV,\n  },\n  plugins: [\n    [\n      'build-plugin-fusion',\n      {\n        themePackage: '@icedesign/theme',\n      },\n    ],\n    (api) => {\n      api.onGetWebpackConfig((config) => {\n        config.entry('src/index.js');\n      });\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"\u5f53\u4e0b\u652f\u6301\u7684\u57fa\u7840\u914d\u7f6e\u9879\u8bf7\u53c2\u8003\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs/config/about"},"\u914d\u7f6e"),"\u3002"),(0,a.kt)("h2",{id:"\u8fdb\u9636\u914d\u7f6e"},"\u8fdb\u9636\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u6839\u636e\u73af\u5883\u533a\u5206\u5de5\u7a0b\u914d\u7f6e"},"\u6839\u636e\u73af\u5883\u533a\u5206\u5de5\u7a0b\u914d\u7f6e"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/basic/config"},"\u533a\u5206\u4e0d\u540c\u73af\u5883"),"\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5f00\u542f\u65b0\u7684-jsx-\u8f6c\u6362"},"\u5982\u4f55\u5f00\u542f\u65b0\u7684 JSX \u8f6c\u6362"),(0,a.kt)("p",null,"ice.js 1.16.0+ \u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"New JSX Transform"),"\uff0c\u5f00\u542f\u8be5\u80fd\u529b\u4e4b\u540e\uff0c\u7f16\u5199 React \u7ec4\u4ef6\u65f6\u4e0d\u518d\u9700\u8981\u5728\u5934\u90e8\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"React"),"\u3002"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions.jsx")," \u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "compilerOptions": {\n-    "jsx": "react",\n+    "jsx": "react-jsx",\n  }\n}\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4e66\u5199\u7ec4\u4ef6\u5c31\u4e0d\u518d\u9700\u8981\u5f15\u5165 React \u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- import React from 'react';\n\nfunction Example() {\n  return <>Hello</>;\n}\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5de5\u7a0b\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u5de5\u7a0b\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u57fa\u7840\u914d\u7f6e\u548c\u5df2\u6709\u63d2\u4ef6\u90fd\u65e0\u6cd5\u652f\u6301\u4e1a\u52a1\u9700\u6c42\uff0c\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u914d\u7f6e\u6765\u5b9e\u73b0\uff0c\u81ea\u5b9a\u4e49\u914d\u7f6e\u540c\u65f6\u4e5f\u662f\u4e00\u4e2a Webpack \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"build.plugin.js"),"\xa0 \u6587\u4ef6\u4f5c\u4e3a\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u7136\u540e\u5199\u5165\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = ({ context, onGetWebpackConfig }) => {\n  onGetWebpackConfig((config) => {});\n};\n")),(0,a.kt)("p",null,"\u63d2\u4ef6\u5185\u90e8\u4ee3\u7801\u5199\u6cd5\u53ef\u4ee5\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugin/develop/build"},"\u901a\u8fc7\u63d2\u4ef6\u5b9a\u5236\u5de5\u7a0b\u80fd\u529b"),"\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"build.json"),"\xa0 \u91cc\u5f15\u5165\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": ["build-plugin-ice-app", "./build.plugin.js"]\n}\n')),(0,a.kt)("h2",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u9047\u5230\u914d\u7f6e\u6ca1\u6709\u751f\u6548\uff0c\u6216\u8005\u914d\u7f6e\u4e0d\u7b26\u5408\u9884\u671f\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u8fdb\u884c\u8c03\u8bd5\uff0c\u67e5\u770b\u6700\u7ec8\u7684 Webpack \u914d\u7f6e\u662f\u5426\u7b26\u5408\u9884\u671f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8c03\u8bd5\u5f00\u53d1\u73af\u5883\n$ DEBUG=icejs npm start\n\n# \u8c03\u8bd5\u6784\u5efa\u73af\u5883\n$ DEBUG=icejs npm run build\n\n# \u8c03\u8bd5\u6784\u5efa\u73af\u5883\n$ DEBUG=icejs npm run test\n")))}d.isMDXComponent=!0}}]);
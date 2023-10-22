"use strict";(self.webpackChunkcamera_kit=self.webpackChunkcamera_kit||[]).push([[731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Camera Controlling",sidebar_label:"Camera Controlling"},i=void 0,l={unversionedId:"guides/camera-controlling",id:"guides/camera-controlling",title:"Camera Controlling",description:"Flip Camera",source:"@site/docs/guides/camera-controlling.mdx",sourceDirName:"guides",slug:"/guides/camera-controlling",permalink:"/react-native-snapchat-camera-kit/docs/guides/camera-controlling",draft:!1,editUrl:"https://github.com/popile-media/react-native-snapchat-camera-kit/tree/main/documentation/docs/guides/camera-controlling.mdx",tags:[],version:"current",frontMatter:{title:"Camera Controlling",sidebar_label:"Camera Controlling"},sidebar:"guidesSidebar",previous:{title:"Permissions",permalink:"/react-native-snapchat-camera-kit/docs/guides/permissions"},next:{title:"Taking Photos",permalink:"/react-native-snapchat-camera-kit/docs/guides/taking-photos"}},c={},p=[{value:"Flip Camera",id:"flip-camera",level:3},{value:"Zoom",id:"zoom",level:3},{value:"Tap To Focus",id:"tap-to-focus",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"flip-camera"},"Flip Camera"),(0,a.kt)("p",null,"Facing value could be ",(0,a.kt)("inlineCode",{parentName:"p"},"front")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"back"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ref.current?.flipCamera().then((facing) => {\n  // ..\n});\n")),(0,a.kt)("h3",{id:"zoom"},"Zoom"),(0,a.kt)("p",null,"Activating zoom feature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"}," <CameraKit\n  // ..\n  zoom\n />\n")),(0,a.kt)("p",null,"Value must be between ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", for an example ",(0,a.kt)("inlineCode",{parentName:"p"},"0.5"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// adjust zoom\nref.current?.zoom(amount);\n")),(0,a.kt)("h3",{id:"tap-to-focus"},"Tap To Focus"),(0,a.kt)("p",null,"Activating tap to focus feature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"}," <CameraKit\n  // ..\n  focus\n />\n")))}m.isMDXComponent=!0}}]);
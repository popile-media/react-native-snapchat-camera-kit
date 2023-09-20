"use strict";(self.webpackChunkcamera_kit=self.webpackChunkcamera_kit||[]).push([[203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Taking Photos",sidebar_label:"Taking Photos"},i=void 0,c={unversionedId:"guides/taking-photos",id:"guides/taking-photos",title:"Taking Photos",description:"To capture a photo using the Snapchat Camera Kit, you can take reference to below code:",source:"@site/docs/guides/taking-photos.mdx",sourceDirName:"guides",slug:"/guides/taking-photos",permalink:"/react-native-snapchat-camera-kit/docs/guides/taking-photos",draft:!1,editUrl:"https://github.com/popile-media/react-native-snapchat-camera-kit/tree/main/packages/create-docusaurus/templates/shared/docs/guides/taking-photos.mdx",tags:[],version:"current",frontMatter:{title:"Taking Photos",sidebar_label:"Taking Photos"},sidebar:"guidesSidebar",previous:{title:"Camera Controlling",permalink:"/react-native-snapchat-camera-kit/docs/guides/camera-controlling"},next:{title:"Recording Video",permalink:"/react-native-snapchat-camera-kit/docs/guides/recording-videos"}},s={},p=[{value:"Photo",id:"photo",level:3}],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To capture a photo using the Snapchat Camera Kit, you can take reference to below code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef } from 'react';\nimport { StyleSheet } from 'react-native';\n\nimport CameraKit from 'react-native-snapchat-camera-kit';\n\nconst App = () => {\n  const ref = useRef<CameraKit>(null);\n\n  const capturePhoto = () => {\n    ref.current.takePhoto();\n  };\n\n  return (\n    <React.Fragment>\n      <CameraKit\n        ref={ref}\n        style={styles.camera}\n        onPhotoTaken={(picture) => {\n          // you can handle the picture here\n        }}\n      />\n      <Button title=\"Capture Photo\" onPress={capturePhoto} />\n    </React.Fragment>\n  );\n};\n\nconst styles = StyleSheet.create({\n  camera: {\n    flex: 1,\n  },\n});\n\nexport default App;\n")),(0,a.kt)("h3",{id:"photo"},"Photo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Photo {\n  /**\n   * The path of the file.\n   *\n   * * **Note:** If you want to consume this file (e.g. for displaying it in an `<Image>` component), you might have to add the `file://` prefix.\n   *\n   * * **Note:** This file might get deleted once the app closes because it lives in the temp directory.\n   */\n  path: string;\n}\n")))}m.isMDXComponent=!0}}]);
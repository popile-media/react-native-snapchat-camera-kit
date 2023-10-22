"use strict";(self.webpackChunkcamera_kit=self.webpackChunkcamera_kit||[]).push([[20],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Recording Video",sidebar_label:"Recording Video"},i=void 0,c={unversionedId:"guides/recording-videos",id:"guides/recording-videos",title:"Recording Video",description:"To capture a video using the Snapchat Camera Kit, you can take reference to below code:",source:"@site/docs/guides/recording-videos.mdx",sourceDirName:"guides",slug:"/guides/recording-videos",permalink:"/react-native-snapchat-camera-kit/docs/guides/recording-videos",draft:!1,editUrl:"https://github.com/popile-media/react-native-snapchat-camera-kit/tree/main/documentation/docs/guides/recording-videos.mdx",tags:[],version:"current",frontMatter:{title:"Recording Video",sidebar_label:"Recording Video"},sidebar:"guidesSidebar",previous:{title:"Taking Photos",permalink:"/react-native-snapchat-camera-kit/docs/guides/taking-photos"},next:{title:"Manage Lenses",permalink:"/react-native-snapchat-camera-kit/docs/guides/manage-lenses"}},d={},s=[{value:"Recording Parameters",id:"recording-parameters",level:3},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4},{value:"Video",id:"video",level:3}],l={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To capture a video using the Snapchat Camera Kit, you can take reference to below code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useRef } from 'react';\nimport { StyleSheet } from 'react-native';\n\nimport CameraKit from 'react-native-snapchat-camera-kit';\n\nconst App = () => {\n  const ref = useRef<CameraKit>(null);\n\n  const startVideoRecording = () => {\n    ref.current?.startRecording({\n      resolution: '720p',\n    })\n    .then(() => {\n      // video recording started with no problem\n    })\n    .catch((error) => {\n      // something went wrong\n    });\n  };\n\n  const stopVideoRecording = () => {\n    ref.current?.stopRecording().finally(() => {\n      // video recording stopped\n    });\n  };\n\n  return (\n    <React.Fragment>\n      <CameraKit\n        ref={ref}\n        style={styles.camera}\n        onVideoRecordingFinished={(video) => {\n          // you can handle the video here\n        }}\n      />\n      <Button title=\"Start Video Recording\" onPress={startVideoRecording} />\n      <Button title=\"Stop Video Recording\" onPress={stopVideoRecording} />\n    </React.Fragment>\n  );\n};\n\nconst styles = StyleSheet.create({\n  camera: {\n    flex: 1,\n  },\n});\n\nexport default App;\n")),(0,o.kt)("h3",{id:"recording-parameters"},"Recording Parameters"),(0,o.kt)("h4",{id:"android"},"Android"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"interface RecordVideoOptionsAndroid {\n  /**\n   * Specify the frames per second this camera should use.\n   *\n   * @default 30\n   */\n  fps?: number;\n\n  /**\n   * Specify the video height and width.\n   *\n   * @default 720p\n   */\n  resolution?: '480p' | '720p' | '1080p' | '2160p';\n}\n")),(0,o.kt)("h4",{id:"ios"},"iOS"),(0,o.kt)("p",null,"We are not there yet. Video resolution fixed to ",(0,o.kt)("inlineCode",{parentName:"p"},"720p")," and the FPS fixed to ",(0,o.kt)("inlineCode",{parentName:"p"},"30"),"."),(0,o.kt)("h3",{id:"video"},"Video"),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-snapchat-camera-kit/docs/guides/utils#metadata"},"video metadata")," on the utils page."))}u.isMDXComponent=!0}}]);
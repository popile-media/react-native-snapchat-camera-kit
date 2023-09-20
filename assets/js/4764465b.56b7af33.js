"use strict";(self.webpackChunkcamera_kit=self.webpackChunkcamera_kit||[]).push([[974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,m=p["".concat(o,".").concat(g)]||p[g]||d[g]||s;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const s={title:"Manage Lenses",sidebar_label:"Manage Lenses"},i=void 0,l={unversionedId:"guides/manage-lenses",id:"guides/manage-lenses",title:"Manage Lenses",description:"Defining Lens Group Id",source:"@site/docs/guides/manage-lenses.mdx",sourceDirName:"guides",slug:"/guides/manage-lenses",permalink:"/react-native-snapchat-camera-kit/docs/guides/manage-lenses",draft:!1,editUrl:"https://github.com/popile-media/react-native-snapchat-camera-kit/tree/main/documentation/docs/guides/manage-lenses.mdx",tags:[],version:"current",frontMatter:{title:"Manage Lenses",sidebar_label:"Manage Lenses"},sidebar:"guidesSidebar",previous:{title:"Recording Video",permalink:"/react-native-snapchat-camera-kit/docs/guides/recording-videos"},next:{title:"Blur & Tone Mode",permalink:"/react-native-snapchat-camera-kit/docs/guides/blur-and-tone-mode"}},o={},u=[{value:"Defining Lens Group Id",id:"defining-lens-group-id",level:3},{value:"Retrieve Lenses",id:"retrieve-lenses",level:3},{value:"Lens",id:"lens",level:4},{value:"Initial Lens Id",id:"initial-lens-id",level:3},{value:"Managing Lens Volume",id:"managing-lens-volume",level:3},{value:"Change Lens by Id",id:"change-lens-by-id",level:3},{value:"Clear Lenses",id:"clear-lenses",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"defining-lens-group-id"},"Defining Lens Group Id"),(0,a.kt)("p",null,"You have to define lens group via ",(0,a.kt)("inlineCode",{parentName:"p"},"lensGroups")," prop, you can define multiple or single lens groups like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<CameraKit\n    // ..\n    lensGroups={['your-lens-group-id']}\n/>\n")),(0,a.kt)("h3",{id:"retrieve-lenses"},"Retrieve Lenses"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ref.current?.getLenses().then((lenses) => {\n  // ..\n});\n")),(0,a.kt)("h4",{id:"lens"},"Lens"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Image = {\n  uri: string;\n  type: 'Webp' | 'Png';\n};\n\ninterface Lens {\n  id: string;\n  groupId: string;\n  name: string;\n  facingPreference: 'front' | 'back' | 'unspecified';\n  icons: Image[];\n  previews: Image[];\n  vendorData: {\n    [key: string]: string;\n  };\n}\n")),(0,a.kt)("h3",{id:"initial-lens-id"},"Initial Lens Id"),(0,a.kt)("p",null,"You can set initial lens via ",(0,a.kt)("inlineCode",{parentName:"p"},"initialLens")," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<CameraKit\n    // ..\n    initialLens="initial-lens-id"\n/>\n')),(0,a.kt)("h3",{id:"managing-lens-volume"},"Managing Lens Volume"),(0,a.kt)("p",null,"Mute/Unmute lens volume:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mute = true;\n\nref.current?.adjustLensesVolume(mute).then((status) => {\n  // ..\n});\n")),(0,a.kt)("h3",{id:"change-lens-by-id"},"Change Lens by Id"),(0,a.kt)("p",null,"You can apply a lens at once, multiple lens not supported:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ref.current?.changeLensById('lens-id').then((status) => {\n  // ..\n});\n")),(0,a.kt)("h3",{id:"clear-lenses"},"Clear Lenses"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ref.current?.clearLenses().then((status) => {\n  // ..\n});\n")))}d.isMDXComponent=!0}}]);
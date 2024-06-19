"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7267],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>o,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>s});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},i.apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),s=function(e){return function(n){var t=d(n.components);return l.createElement(e,i({},n,{components:t}))}},d=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return l.createElement(o.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,m=s["".concat(p,".").concat(c)]||s[c]||g[c]||i;return t?l.createElement(m,a(a({ref:n},o),{},{components:t})):l.createElement(m,a({ref:n},o))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[m]="string"==typeof e?e:r,p[1]=a;for(var o=2;o<i;o++)p[o]=t[o];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},80328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var l=t(87462),r=(t(67294),t(3905));const i={id:"plugins"},p="plugins type",a={unversionedId:"api/bxl/plugins",id:"api/bxl/plugins",title:"plugins type",description:"plugins.All",source:"@site/../docs/api/bxl/plugins.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/plugins",permalink:"/docs/api/bxl/plugins",draft:!1,tags:[],version:"current",frontMatter:{id:"plugins"},sidebar:"manualSidebar",previous:{title:"lazy_resolved_attrs type",permalink:"/docs/api/bxl/lazy_resolved_attrs"},next:{title:"promise type",permalink:"/docs/api/bxl/promise"}},u={},o=[{value:"plugins.All",id:"pluginsall",level:2},{value:"plugins.PluginKind",id:"pluginspluginkind",level:2},{value:"plugins.kind",id:"pluginskind",level:2}],s={toc:o};function d(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"plugins-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"plugins")," type"),(0,r.mdx)("h2",{id:"pluginsall"},"plugins.All"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"plugins.All: all_plugins\n")),(0,r.mdx)("p",null,"A special value for use with ",(0,r.mdx)("inlineCode",{parentName:"p"},"pulls_and_pushes_plugins"),"."),(0,r.mdx)("p",null,"This value can be passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"pulls_and_pushes_plugins")," on any ",(0,r.mdx)("inlineCode",{parentName:"p"},"attr.dep()")," to indicate that\nall plugin kinds from the dep should be pulled and pushed. This is useful for rules like\n",(0,r.mdx)("inlineCode",{parentName:"p"},"alias"),"."),(0,r.mdx)("p",null,"This value is not supported on ",(0,r.mdx)("inlineCode",{parentName:"p"},"uses_plugins")," at this time, and hence it is not useful on\n",(0,r.mdx)("inlineCode",{parentName:"p"},"pulls_plugins")," either."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"pluginspluginkind"},"plugins.PluginKind"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"plugins.PluginKind: type\n")),(0,r.mdx)("p",null,"Type symbol for ",(0,r.mdx)("inlineCode",{parentName:"p"},"PluginKind"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"pluginskind"},"plugins.kind"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def plugins.kind() -> PluginKind\n")),(0,r.mdx)("p",null,"Create a new plugin kind."),(0,r.mdx)("p",null,"The value returned should always be immediately bound to a global, like ",(0,r.mdx)("inlineCode",{parentName:"p"},"MyPluginKind =\nplugins.kind()")))}d.isMDXComponent=!0}}]);
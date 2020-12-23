(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1010:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=b(a),p=r,u=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return a?n.a.createElement(u,c(c({ref:t},l),{},{components:a})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},217:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(7),o=(a(0),a(1010)),i={id:"imagestore",title:"ImageStore"},c={unversionedId:"imagestore",id:"version-0.61/imagestore",isDocsHomePage:!1,title:"ImageStore",description:"Deprecated. Use expo-file-system or react-native-fs instead.",source:"@site/versioned_docs/version-0.61/imagestore.md",slug:"/imagestore",permalink:"/docs/0.61/imagestore",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/imagestore.md",version:"0.61",lastUpdatedAt:1603945169},s=[{value:"Methods",id:"methods",children:[]},{value:"Methods",id:"methods-1",children:[{value:"<code>hasImageForTag()</code>",id:"hasimagefortag",children:[]},{value:"<code>removeImageForTag()</code>",id:"removeimagefortag",children:[]},{value:"<code>addImageFromBase64()</code>",id:"addimagefrombase64",children:[]},{value:"<code>getBase64ForTag()</code>",id:"getbase64fortag",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/expo/expo/tree/master/packages/expo-file-system"}),"expo-file-system")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/itinance/react-native-fs"}),"react-native-fs")," instead.")),Object(o.b)("h3",{id:"methods"},"Methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.61/imagestore#hasimagefortag"}),Object(o.b)("inlineCode",{parentName:"a"},"hasImageForTag"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.61/imagestore#removeimagefortag"}),Object(o.b)("inlineCode",{parentName:"a"},"removeImageForTag"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.61/imagestore#addimagefrombase64"}),Object(o.b)("inlineCode",{parentName:"a"},"addImageFromBase64"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.61/imagestore#getbase64fortag"}),Object(o.b)("inlineCode",{parentName:"a"},"getBase64ForTag")))),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods-1"},"Methods"),Object(o.b)("h3",{id:"hasimagefortag"},Object(o.b)("inlineCode",{parentName:"h3"},"hasImageForTag()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static hasImageForTag(uri, callback)\n")),Object(o.b)("p",null,"Check if the ImageStore contains image data for the specified URI. @platform ios"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removeimagefortag"},Object(o.b)("inlineCode",{parentName:"h3"},"removeImageForTag()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static removeImageForTag(uri)\n")),Object(o.b)("p",null,"Delete an image from the ImageStore. Images are stored in memory and must be manually removed when you are finished with them, otherwise they will continue to use up RAM until the app is terminated. It is safe to call ",Object(o.b)("inlineCode",{parentName:"p"},"removeImageForTag()")," without first calling ",Object(o.b)("inlineCode",{parentName:"p"},"hasImageForTag()"),", it will fail silently. @platform ios"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"addimagefrombase64"},Object(o.b)("inlineCode",{parentName:"h3"},"addImageFromBase64()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static addImageFromBase64(base64ImageData, success, failure)\n")),Object(o.b)("p",null,"Stores a base64-encoded image in the ImageStore, and returns a URI that can be used to access or display the image later. Images are stored in memory only, and must be manually deleted when you are finished with them by calling ",Object(o.b)("inlineCode",{parentName:"p"},"removeImageForTag()"),"."),Object(o.b)("p",null,"Note that it is very inefficient to transfer large quantities of binary data between JS and native code, so you should avoid calling this more than necessary. @platform ios"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getbase64fortag"},Object(o.b)("inlineCode",{parentName:"h3"},"getBase64ForTag()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static getBase64ForTag(uri, success, failure)\n")),Object(o.b)("p",null,"Retrieves the base64-encoded data for an image in the ImageStore. If the specified URI does not match an image in the store, the failure callback will be called."),Object(o.b)("p",null,"Note that it is very inefficient to transfer large quantities of binary data between JS and native code, so you should avoid calling this more than necessary. To display an image in the ImageStore, you can pass the URI to an ",Object(o.b)("inlineCode",{parentName:"p"},"<Image/>")," component; there is no need to retrieve the base64 data."))}b.isMDXComponent=!0}}]);
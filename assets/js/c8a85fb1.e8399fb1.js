(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[332],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return _},kt:function(){return h}});var i=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n){if(null==t)return{};var e,i,o=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var a=i.createContext({}),c=function(t){var n=i.useContext(a),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},_=function(t){var n=c(t.components);return i.createElement(a.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,a=t.parentName,_=d(t,["components","mdxType","originalType","parentName"]),f=c(e),h=o,k=f["".concat(a,".").concat(h)]||f[h]||s[h]||r;return e?i.createElement(k,l(l({ref:n},_),{},{components:e})):i.createElement(k,l({ref:n},_))}));function h(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,l=new Array(r);l[0]=f;var d={};for(var a in n)hasOwnProperty.call(n,a)&&(d[a]=n[a]);d.originalType=t,d.mdxType="string"==typeof t?t:o,l[1]=d;for(var c=2;c<r;c++)l[c]=e[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}f.displayName="MDXCreateElement"},4286:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return d},metadata:function(){return a},toc:function(){return c},default:function(){return s}});var i=e(2122),o=e(9756),r=(e(7294),e(3905)),l=["components"],d={id:"nft-filter",title:"NFT_filter"},a={unversionedId:"schema/inputs/nft-filter",id:"schema/inputs/nft-filter",isDocsHomePage:!1,title:"NFT_filter",description:"No description",source:"@site/docs/schema/inputs/nft-filter.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/nft-filter",permalink:"/docs/schema/inputs/nft-filter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/inputs/nft-filter.mdx",version:"current",frontMatter:{id:"nft-filter",title:"NFT_filter"}},c=[{value:"Fields",id:"fields",children:[]}],_={toc:c};function s(t){var n=t.components,e=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,i.Z)({},_,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type NFT_filter {\n  id: ID\n  id_not: ID\n  id_gt: ID\n  id_lt: ID\n  id_gte: ID\n  id_lte: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  nftAddress: Bytes\n  nftAddress_not: Bytes\n  nftAddress_in: [Bytes!]\n  nftAddress_not_in: [Bytes!]\n  nftAddress_contains: Bytes\n  nftAddress_not_contains: Bytes\n  tokenId: BigInt\n  tokenId_not: BigInt\n  tokenId_gt: BigInt\n  tokenId_lt: BigInt\n  tokenId_gte: BigInt\n  tokenId_lte: BigInt\n  tokenId_in: [BigInt!]\n  tokenId_not_in: [BigInt!]\n  from: Bytes\n  from_not: Bytes\n  from_in: [Bytes!]\n  from_not_in: [Bytes!]\n  from_contains: Bytes\n  from_not_contains: Bytes\n  to: Bytes\n  to_not: Bytes\n  to_in: [Bytes!]\n  to_not_in: [Bytes!]\n  to_contains: Bytes\n  to_not_contains: Bytes\n  nftCollection: String\n  nftCollection_not: String\n  nftCollection_gt: String\n  nftCollection_lt: String\n  nftCollection_gte: String\n  nftCollection_lte: String\n  nftCollection_in: [String!]\n  nftCollection_not_in: [String!]\n  nftCollection_contains: String\n  nftCollection_not_contains: String\n  nftCollection_starts_with: String\n  nftCollection_not_starts_with: String\n  nftCollection_ends_with: String\n  nftCollection_not_ends_with: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("h4",{id:"id_not"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_not")),(0,r.kt)("h4",{id:"id_gt"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_gt")),(0,r.kt)("h4",{id:"id_lt"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_lt")),(0,r.kt)("h4",{id:"id_gte"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_gte")),(0,r.kt)("h4",{id:"id_lte"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_lte")),(0,r.kt)("h4",{id:"id_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_in")),(0,r.kt)("h4",{id:"id_not_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_not_in")),(0,r.kt)("h4",{id:"nftaddress"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftAddress")),(0,r.kt)("h4",{id:"nftaddress_not"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftAddress_not")),(0,r.kt)("h4",{id:"nftaddress_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftAddress_in")),(0,r.kt)("h4",{id:"nftaddress_not_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftAddress_not_in")),(0,r.kt)("h4",{id:"nftaddress_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftAddress_contains")),(0,r.kt)("h4",{id:"nftaddress_not_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftAddress_not_contains")),(0,r.kt)("h4",{id:"tokenid"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId")),(0,r.kt)("h4",{id:"tokenid_not"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId_not")),(0,r.kt)("h4",{id:"tokenid_gt"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId_gt")),(0,r.kt)("h4",{id:"tokenid_lt"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId_lt")),(0,r.kt)("h4",{id:"tokenid_gte"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId_gte")),(0,r.kt)("h4",{id:"tokenid_lte"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId_lte")),(0,r.kt)("h4",{id:"tokenid_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId_in")),(0,r.kt)("h4",{id:"tokenid_not_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"tokenId_not_in")),(0,r.kt)("h4",{id:"from"},(0,r.kt)("inlineCode",{parentName:"h4"},"from")),(0,r.kt)("h4",{id:"from_not"},(0,r.kt)("inlineCode",{parentName:"h4"},"from_not")),(0,r.kt)("h4",{id:"from_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"from_in")),(0,r.kt)("h4",{id:"from_not_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"from_not_in")),(0,r.kt)("h4",{id:"from_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"from_contains")),(0,r.kt)("h4",{id:"from_not_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"from_not_contains")),(0,r.kt)("h4",{id:"to"},(0,r.kt)("inlineCode",{parentName:"h4"},"to")),(0,r.kt)("h4",{id:"to_not"},(0,r.kt)("inlineCode",{parentName:"h4"},"to_not")),(0,r.kt)("h4",{id:"to_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"to_in")),(0,r.kt)("h4",{id:"to_not_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"to_not_in")),(0,r.kt)("h4",{id:"to_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"to_contains")),(0,r.kt)("h4",{id:"to_not_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"to_not_contains")),(0,r.kt)("h4",{id:"nftcollection"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection")),(0,r.kt)("h4",{id:"nftcollection_not"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_not")),(0,r.kt)("h4",{id:"nftcollection_gt"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_gt")),(0,r.kt)("h4",{id:"nftcollection_lt"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_lt")),(0,r.kt)("h4",{id:"nftcollection_gte"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_gte")),(0,r.kt)("h4",{id:"nftcollection_lte"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_lte")),(0,r.kt)("h4",{id:"nftcollection_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_in")),(0,r.kt)("h4",{id:"nftcollection_not_in"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_not_in")),(0,r.kt)("h4",{id:"nftcollection_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_contains")),(0,r.kt)("h4",{id:"nftcollection_not_contains"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_not_contains")),(0,r.kt)("h4",{id:"nftcollection_starts_with"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_starts_with")),(0,r.kt)("h4",{id:"nftcollection_not_starts_with"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_not_starts_with")),(0,r.kt)("h4",{id:"nftcollection_ends_with"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_ends_with")),(0,r.kt)("h4",{id:"nftcollection_not_ends_with"},(0,r.kt)("inlineCode",{parentName:"h4"},"nftCollection_not_ends_with")))}s.isMDXComponent=!0}}]);
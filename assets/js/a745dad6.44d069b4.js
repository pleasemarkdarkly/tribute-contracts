(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2893],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return _},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},_=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,_=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?i.createElement(u,d(d({ref:t},_),{},{components:n})):i.createElement(u,d({ref:t},_))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,d=new Array(a);d[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var s=2;s<a;s++)d[s]=n[s];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4299:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),d=["components"],o={id:"member-filter",title:"Member_filter"},l={unversionedId:"schema/inputs/member-filter",id:"schema/inputs/member-filter",isDocsHomePage:!1,title:"Member_filter",description:"No description",source:"@site/docs/schema/inputs/member-filter.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/member-filter",permalink:"/docs/schema/inputs/member-filter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/inputs/member-filter.mdx",version:"current",frontMatter:{id:"member-filter",title:"Member_filter"}},s=[{value:"Fields",id:"fields",children:[]}],_={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,i.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Member_filter {\n  id: ID\n  id_not: ID\n  id_gt: ID\n  id_lt: ID\n  id_gte: ID\n  id_lte: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  memberAddress: Bytes\n  memberAddress_not: Bytes\n  memberAddress_in: [Bytes!]\n  memberAddress_not_in: [Bytes!]\n  memberAddress_contains: Bytes\n  memberAddress_not_contains: Bytes\n  createdAt: String\n  createdAt_not: String\n  createdAt_gt: String\n  createdAt_lt: String\n  createdAt_gte: String\n  createdAt_lte: String\n  createdAt_in: [String!]\n  createdAt_not_in: [String!]\n  createdAt_contains: String\n  createdAt_not_contains: String\n  createdAt_starts_with: String\n  createdAt_not_starts_with: String\n  createdAt_ends_with: String\n  createdAt_not_ends_with: String\n  delegateKey: Bytes\n  delegateKey_not: Bytes\n  delegateKey_in: [Bytes!]\n  delegateKey_not_in: [Bytes!]\n  delegateKey_contains: Bytes\n  delegateKey_not_contains: Bytes\n  units: BigInt\n  units_not: BigInt\n  units_gt: BigInt\n  units_lt: BigInt\n  units_gte: BigInt\n  units_lte: BigInt\n  units_in: [BigInt!]\n  units_not_in: [BigInt!]\n  didFullyRagequit: Boolean\n  didFullyRagequit_not: Boolean\n  didFullyRagequit_in: [Boolean!]\n  didFullyRagequit_not_in: [Boolean!]\n  isDelegated: Boolean\n  isDelegated_not: Boolean\n  isDelegated_in: [Boolean!]\n  isDelegated_not_in: [Boolean!]\n  tributeDaos: [String!]\n  tributeDaos_not: [String!]\n  tributeDaos_contains: [String!]\n  tributeDaos_not_contains: [String!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("h4",{id:"id_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"id_not")),(0,a.kt)("h4",{id:"id_gt"},(0,a.kt)("inlineCode",{parentName:"h4"},"id_gt")),(0,a.kt)("h4",{id:"id_lt"},(0,a.kt)("inlineCode",{parentName:"h4"},"id_lt")),(0,a.kt)("h4",{id:"id_gte"},(0,a.kt)("inlineCode",{parentName:"h4"},"id_gte")),(0,a.kt)("h4",{id:"id_lte"},(0,a.kt)("inlineCode",{parentName:"h4"},"id_lte")),(0,a.kt)("h4",{id:"id_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"id_in")),(0,a.kt)("h4",{id:"id_not_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"id_not_in")),(0,a.kt)("h4",{id:"memberaddress"},(0,a.kt)("inlineCode",{parentName:"h4"},"memberAddress")),(0,a.kt)("h4",{id:"memberaddress_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"memberAddress_not")),(0,a.kt)("h4",{id:"memberaddress_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"memberAddress_in")),(0,a.kt)("h4",{id:"memberaddress_not_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"memberAddress_not_in")),(0,a.kt)("h4",{id:"memberaddress_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"memberAddress_contains")),(0,a.kt)("h4",{id:"memberaddress_not_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"memberAddress_not_contains")),(0,a.kt)("h4",{id:"createdat"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")),(0,a.kt)("h4",{id:"createdat_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_not")),(0,a.kt)("h4",{id:"createdat_gt"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_gt")),(0,a.kt)("h4",{id:"createdat_lt"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_lt")),(0,a.kt)("h4",{id:"createdat_gte"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_gte")),(0,a.kt)("h4",{id:"createdat_lte"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_lte")),(0,a.kt)("h4",{id:"createdat_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_in")),(0,a.kt)("h4",{id:"createdat_not_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_not_in")),(0,a.kt)("h4",{id:"createdat_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_contains")),(0,a.kt)("h4",{id:"createdat_not_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_not_contains")),(0,a.kt)("h4",{id:"createdat_starts_with"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_starts_with")),(0,a.kt)("h4",{id:"createdat_not_starts_with"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_not_starts_with")),(0,a.kt)("h4",{id:"createdat_ends_with"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_ends_with")),(0,a.kt)("h4",{id:"createdat_not_ends_with"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt_not_ends_with")),(0,a.kt)("h4",{id:"delegatekey"},(0,a.kt)("inlineCode",{parentName:"h4"},"delegateKey")),(0,a.kt)("h4",{id:"delegatekey_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"delegateKey_not")),(0,a.kt)("h4",{id:"delegatekey_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"delegateKey_in")),(0,a.kt)("h4",{id:"delegatekey_not_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"delegateKey_not_in")),(0,a.kt)("h4",{id:"delegatekey_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"delegateKey_contains")),(0,a.kt)("h4",{id:"delegatekey_not_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"delegateKey_not_contains")),(0,a.kt)("h4",{id:"units"},(0,a.kt)("inlineCode",{parentName:"h4"},"units")),(0,a.kt)("h4",{id:"units_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"units_not")),(0,a.kt)("h4",{id:"units_gt"},(0,a.kt)("inlineCode",{parentName:"h4"},"units_gt")),(0,a.kt)("h4",{id:"units_lt"},(0,a.kt)("inlineCode",{parentName:"h4"},"units_lt")),(0,a.kt)("h4",{id:"units_gte"},(0,a.kt)("inlineCode",{parentName:"h4"},"units_gte")),(0,a.kt)("h4",{id:"units_lte"},(0,a.kt)("inlineCode",{parentName:"h4"},"units_lte")),(0,a.kt)("h4",{id:"units_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"units_in")),(0,a.kt)("h4",{id:"units_not_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"units_not_in")),(0,a.kt)("h4",{id:"didfullyragequit"},(0,a.kt)("inlineCode",{parentName:"h4"},"didFullyRagequit")),(0,a.kt)("h4",{id:"didfullyragequit_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"didFullyRagequit_not")),(0,a.kt)("h4",{id:"didfullyragequit_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"didFullyRagequit_in")),(0,a.kt)("h4",{id:"didfullyragequit_not_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"didFullyRagequit_not_in")),(0,a.kt)("h4",{id:"isdelegated"},(0,a.kt)("inlineCode",{parentName:"h4"},"isDelegated")),(0,a.kt)("h4",{id:"isdelegated_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"isDelegated_not")),(0,a.kt)("h4",{id:"isdelegated_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"isDelegated_in")),(0,a.kt)("h4",{id:"isdelegated_not_in"},(0,a.kt)("inlineCode",{parentName:"h4"},"isDelegated_not_in")),(0,a.kt)("h4",{id:"tributedaos"},(0,a.kt)("inlineCode",{parentName:"h4"},"tributeDaos")),(0,a.kt)("h4",{id:"tributedaos_not"},(0,a.kt)("inlineCode",{parentName:"h4"},"tributeDaos_not")),(0,a.kt)("h4",{id:"tributedaos_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"tributeDaos_contains")),(0,a.kt)("h4",{id:"tributedaos_not_contains"},(0,a.kt)("inlineCode",{parentName:"h4"},"tributeDaos_not_contains")))}c.isMDXComponent=!0}}]);
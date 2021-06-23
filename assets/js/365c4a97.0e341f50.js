(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7250],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7760:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"configuration-adapter",title:"Configuration"},l={unversionedId:"contracts/adapters/configuration/configuration-adapter",id:"contracts/adapters/configuration/configuration-adapter",isDocsHomePage:!1,title:"Configuration",description:"The Configuration adapter manages storing and retrieving per-DAO settings required by shared adapters.",source:"@site/docs/contracts/adapters/configuration/Configuration.md",sourceDirName:"contracts/adapters/configuration",slug:"/contracts/adapters/configuration/configuration-adapter",permalink:"/tribute-contracts/docs/contracts/adapters/configuration/configuration-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/configuration/Configuration.md",version:"current",frontMatter:{id:"configuration-adapter",title:"Configuration"},sidebar:"docs",previous:{title:"Executor",permalink:"/tribute-contracts/docs/contracts/extensions/executor-extension"},next:{title:"Managing",permalink:"/tribute-contracts/docs/contracts/adapters/configuration/managing-adapter"}},c=[{value:"Workflow",id:"workflow",children:[]},{value:"Access Flags",id:"access-flags",children:[{value:"DaoRegistry",id:"daoregistry",children:[]}]},{value:"Dependencies",id:"dependencies",children:[{value:"DaoRegistry",id:"daoregistry-1",children:[]},{value:"Voting",id:"voting",children:[]}]},{value:"Structs",id:"structs",children:[{value:"Configuration",id:"configuration",children:[]},{value:"DaoRegistry",id:"daoregistry-2",children:[]},{value:"Voting",id:"voting-1",children:[]}]},{value:"Storage",id:"storage",children:[{value:"_configurations",id:"_configurations",children:[]}]},{value:"Functions",id:"functions",children:[{value:"submitProposal",id:"submitproposal",children:[]},{value:"processProposal",id:"processproposal",children:[]}]},{value:"Events",id:"events",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Configuration adapter manages storing and retrieving per-DAO settings required by shared adapters."),(0,o.kt)("p",null,"Some adapters have configurable settings which must be stored for each DAO instance that uses the shared adapter."),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"Submit proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check that caller is valid member"),(0,o.kt)("li",{parentName:"ul"},"check that keys/values are same length"),(0,o.kt)("li",{parentName:"ul"},"check that proposalId is unique"),(0,o.kt)("li",{parentName:"ul"},"submit proposal to DAO"),(0,o.kt)("li",{parentName:"ul"},"create and store configuration structure")),(0,o.kt)("p",null,"Sponsor module change request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check that caller is valid member"),(0,o.kt)("li",{parentName:"ul"},"initiate vote")),(0,o.kt)("p",null,"Process proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check that caller is valid member"),(0,o.kt)("li",{parentName:"ul"},"check that proposalId exists"),(0,o.kt)("li",{parentName:"ul"},"check that proposal passed"),(0,o.kt)("li",{parentName:"ul"},"for each key and value, set it in the configuration for this DAO"),(0,o.kt)("li",{parentName:"ul"},"process proposal")),(0,o.kt)("h2",{id:"access-flags"},"Access Flags"),(0,o.kt)("h3",{id:"daoregistry"},"DaoRegistry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SUBMIT_PROPOSAL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SET_CONFIGURATION"))),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("h3",{id:"daoregistry-1"},"DaoRegistry"),(0,o.kt)("h3",{id:"voting"},"Voting"),(0,o.kt)("h2",{id:"structs"},"Structs"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keys"),": the name of the configurations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values"),": the value of the configurations.")),(0,o.kt)("h3",{id:"daoregistry-2"},"DaoRegistry"),(0,o.kt)("h3",{id:"voting-1"},"Voting"),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("h3",{id:"_configurations"},"_","configurations"),(0,o.kt)("p",null,"Map of all keys and configurations values."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"submitproposal"},"submitProposal"),(0,o.kt)("p",null,"Creates and sponsors a new configuration proposal on behalf of the member calling the function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  /**\n    * @notice Creates and sponsors a configuration proposal.\n    * @param dao The DAO Address.\n    * @param proposalId The proposal id.\n    * @param keys The applicant address.\n    * @param values The token to receive the funds.\n    * @param data Additional details about the financing proposal.\n    */\n    function submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        bytes32[] calldata keys,\n        uint256[] calldata values,\n        bytes calldata data\n    ) external override onlyMember(dao) reentrancyGuard(dao)\n")),(0,o.kt)("h3",{id:"processproposal"},"processProposal"),(0,o.kt)("p",null,"Processes a previously created configuration proposal by applying the configuration to the DAO."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  /**\n    * @notice Processing a configuration proposal to update the DAO state.\n    * @param dao The DAO Address.\n    * @param proposalId The proposal id.\n    */\n    function processProposal(DaoRegistry dao, bytes32 proposalId)\n        external\n        override\n        reentrancyGuard(dao)\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No events are emitted.")))}p.isMDXComponent=!0}}]);
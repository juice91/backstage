/*! For license information please see de9229aa.7550cbc2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[685802],{50514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(824246),o=r(511151);const i={id:"concepts",title:"Concepts",description:"A list of important permission framework concepts"},s=void 0,a={id:"permissions/concepts",title:"Concepts",description:"A list of important permission framework concepts",source:"@site/../docs/permissions/concepts.md",sourceDirName:"permissions",slug:"/permissions/concepts",permalink:"/docs/permissions/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/concepts.md",tags:[],version:"current",frontMatter:{id:"concepts",title:"Concepts",description:"A list of important permission framework concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/permissions/overview"},next:{title:"Getting Started",permalink:"/docs/permissions/getting-started"}},c={},u=[{value:"Permission",id:"permission",level:3},{value:"Policy",id:"policy",level:3},{value:"Policy decision versus enforcement",id:"policy-decision-versus-enforcement",level:3},{value:"Resources and rules",id:"resources-and-rules",level:3},{value:"Conditional decisions",id:"conditional-decisions",level:3}];function l(e){const t={a:"a",h3:"h3",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"permission",children:"Permission"}),"\n",(0,n.jsxs)(t.p,{children:["Any action that a user performs within Backstage may be represented as a permission. More complex actions, like executing a ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#software-templates",children:"software template"}),", may require ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#authorization",children:"authorization"})," for multiple permissions throughout the flow. Permissions are identified by a unique name and optionally include a set of attributes that describe the corresponding action. ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#plugin",children:"Plugins"})," are responsible for defining and exposing the permissions they enforce as well as enforcing restrictions from the permission framework."]}),"\n",(0,n.jsx)(t.h3,{id:"policy",children:"Policy"}),"\n",(0,n.jsxs)(t.p,{children:["User ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#permission-permission-plugin",children:"permissions"})," are authorized by a central, user-defined permission policy. At a high level, a policy is a function that receives a Backstage user and permission, and returns a decision to allow or deny. Policies are expressed as code, which decouples the framework from any particular ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#authorization",children:"authorization"})," model, like role-based access control (RBAC) or attribute-based access control (ABAC)."]}),"\n",(0,n.jsx)(t.h3,{id:"policy-decision-versus-enforcement",children:"Policy decision versus enforcement"}),"\n",(0,n.jsx)(t.p,{children:"Two important responsibilities of any authorization system are to decide if a user can do something, and to enforce that decision. In the Backstage permission framework, policies are responsible for decisions and plugins (typically backends) are responsible for enforcing them."}),"\n",(0,n.jsx)(t.h3,{id:"resources-and-rules",children:"Resources and rules"}),"\n",(0,n.jsxs)(t.p,{children:["In many cases, a permission represents a user's interaction with another object. This object likely has information that policy authors can use to define more granular access. The permission framework introduces two abstractions to account for this: ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#resource-permission-plugin",children:"resources"})," and ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#rule-permission-plugin",children:"rules"}),". For example, the catalog plugin defines a resource for catalog entities and a rule to check if an entity has a given annotation."]}),"\n",(0,n.jsx)(t.h3,{id:"conditional-decisions",children:"Conditional decisions"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/references/glossary#rule-permission-plugin",children:"Rules"})," need additional data before they can be used in a decision. Once a ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#rule-permission-plugin",children:"rule"})," is bound to relevant information it forms a ",(0,n.jsx)(t.a,{href:"/docs/references/glossary#condition-permission-plugin",children:"condition"}),". Conditional decisions tell the ",(0,n.jsx)(t.a,{href:"#permission",children:"permission framework"})," to delegate evaluation to the ",(0,n.jsx)(t.a,{href:"#plugin",children:"plugin"})," that owns the corresponding ",(0,n.jsx)(t.a,{href:"#resource-permission-plugin",children:"resource"}),". Permission requests that result in a conditional decision are allowed if all of the provided conditions evaluate to be true."]}),"\n",(0,n.jsx)(t.p,{children:'A good example would be the catalog plugin\'s "has annotation" rule which needs to know what annotation to look for on a given entity. The permission framework would respond to a request by the catalog plugin in this case with a condition decision. The catalog plugin would then need to correctly filter for entities matching the "has annotations" condition. This conditional behavior avoids coupling between policies and resource schemas, and allows plugins to evaluate complex rules in an efficient way. For example, a plugin may convert a conditional decision to a database query instead of loading and filtering objects in memory.'})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=b.prototype=new g;_.constructor=b,m(_,v.prototype),_.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,x={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return s=s(c=e),e=""===i?"."+R(c,0):i,w(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),P(s,t,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var l=i+R(a=e[u],u);c+=P(a,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=P(a=a.value,t,o,l=i+R(a,u++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},A={transition:null},I={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:A,ReactCurrentOwner:x};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)k.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var n=r(667294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
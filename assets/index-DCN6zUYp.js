function d_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function f_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nm={exports:{}},yl={},im={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),h_=Symbol.for("react.portal"),p_=Symbol.for("react.fragment"),m_=Symbol.for("react.strict_mode"),g_=Symbol.for("react.profiler"),v_=Symbol.for("react.provider"),__=Symbol.for("react.context"),x_=Symbol.for("react.forward_ref"),y_=Symbol.for("react.suspense"),S_=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),gf=Symbol.iterator;function M_(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sm=Object.assign,am={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||rm}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function om(){}om.prototype=Ns.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||rm}var ad=sd.prototype=new om;ad.constructor=sd;sm(ad,Ns.prototype);ad.isPureReactComponent=!0;var vf=Array.isArray,lm=Object.prototype.hasOwnProperty,od={current:null},cm={key:!0,ref:!0,__self:!0,__source:!0};function um(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)lm.call(e,i)&&!cm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Na,type:t,key:s,ref:a,props:r,_owner:od.current}}function T_(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function w_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _f=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w_(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Na:case h_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Yl(a,0):i,vf(r)?(n="",t!=null&&(n=t.replace(_f,"$&/")+"/"),Co(r,e,n,"",function(u){return u})):r!=null&&(ld(r)&&(r=T_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(_f,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vf(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Yl(s,o);a+=Co(s,e,n,c,r)}else if(c=M_(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Yl(s,o++),a+=Co(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function A_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},bo={transition:null},N_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:bo,ReactCurrentOwner:od};function dm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ns;Ve.Fragment=p_;Ve.Profiler=g_;Ve.PureComponent=sd;Ve.StrictMode=m_;Ve.Suspense=y_;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;Ve.act=dm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=sm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)lm.call(e,c)&&!cm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Na,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:__,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v_,_context:t},t.Consumer=t};Ve.createElement=um;Ve.createFactory=function(t){var e=um.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:x_,render:t}};Ve.isValidElement=ld;Ve.lazy=function(t){return{$$typeof:E_,_payload:{_status:-1,_result:t},_init:A_}};Ve.memo=function(t,e){return{$$typeof:S_,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=bo.transition;bo.transition={};try{t()}finally{bo.transition=e}};Ve.unstable_act=dm;Ve.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ve.useContext=function(t){return Yt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ve.useId=function(){return Yt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Yt.current.useRef(t)};Ve.useState=function(t){return Yt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Yt.current.useTransition()};Ve.version="18.3.1";im.exports=Ve;var le=im.exports;const fm=f_(le),R_=d_({__proto__:null,default:fm},[le]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_=le,b_=Symbol.for("react.element"),P_=Symbol.for("react.fragment"),L_=Object.prototype.hasOwnProperty,D_=C_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U_={key:!0,ref:!0,__self:!0,__source:!0};function hm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)L_.call(e,i)&&!U_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:b_,type:t,key:s,ref:a,props:r,_owner:D_.current}}yl.Fragment=P_;yl.jsx=hm;yl.jsxs=hm;nm.exports=yl;var l=nm.exports,Qc={},pm={exports:{}},gn={},mm={exports:{}},gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,I){var F=P.length;P.push(I);e:for(;0<F;){var K=F-1>>>1,$=P[K];if(0<r($,I))P[K]=I,P[F]=$,F=K;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var I=P[0],F=P.pop();if(F!==I){P[0]=F;e:for(var K=0,$=P.length,X=$>>>1;K<X;){var Z=2*(K+1)-1,ne=P[Z],oe=Z+1,pe=P[oe];if(0>r(ne,F))oe<$&&0>r(pe,ne)?(P[K]=pe,P[oe]=F,K=oe):(P[K]=ne,P[Z]=F,K=Z);else if(oe<$&&0>r(pe,F))P[K]=pe,P[oe]=F,K=oe;else break e}}return I}function r(P,I){var F=P.sortIndex-I.sortIndex;return F!==0?F:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],f=1,h=null,p=3,_=!1,y=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=P)i(u),I.sortIndex=I.expirationTime,e(c,I);else break;I=n(u)}}function S(P){if(x=!1,v(P),!y)if(n(c)!==null)y=!0,k(C);else{var I=n(u);I!==null&&q(S,I.startTime-P)}}function C(P,I){y=!1,x&&(x=!1,d(D),D=-1),_=!0;var F=p;try{for(v(I),h=n(c);h!==null&&(!(h.expirationTime>I)||P&&!z());){var K=h.callback;if(typeof K=="function"){h.callback=null,p=h.priorityLevel;var $=K(h.expirationTime<=I);I=t.unstable_now(),typeof $=="function"?h.callback=$:h===n(c)&&i(c),v(I)}else i(c);h=n(c)}if(h!==null)var X=!0;else{var Z=n(u);Z!==null&&q(S,Z.startTime-I),X=!1}return X}finally{h=null,p=F,_=!1}}var R=!1,A=null,D=-1,M=5,T=-1;function z(){return!(t.unstable_now()-T<M)}function Y(){if(A!==null){var P=t.unstable_now();T=P;var I=!0;try{I=A(!0,P)}finally{I?re():(R=!1,A=null)}}else R=!1}var re;if(typeof g=="function")re=function(){g(Y)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,V=L.port2;L.port1.onmessage=Y,re=function(){V.postMessage(null)}}else re=function(){m(Y,0)};function k(P){A=P,R||(R=!0,re())}function q(P,I){D=m(function(){P(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,k(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(P){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var F=p;p=I;try{return P()}finally{p=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=p;p=P;try{return I()}finally{p=F}},t.unstable_scheduleCallback=function(P,I,F){var K=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?K+F:K):F=K,P){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=F+$,P={id:f++,callback:I,priorityLevel:P,startTime:F,expirationTime:$,sortIndex:-1},F>K?(P.sortIndex=F,e(u,P),n(c)===null&&P===n(u)&&(x?(d(D),D=-1):x=!0,q(S,F-K))):(P.sortIndex=$,e(c,P),y||_||(y=!0,k(C))),P},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(P){var I=p;return function(){var F=p;p=I;try{return P.apply(this,arguments)}finally{p=F}}}})(gm);mm.exports=gm;var I_=mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=le,mn=I_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,aa={};function wr(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(aa[t]=e,t=0;t<e.length;t++)vm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,O_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},yf={};function k_(t){return Jc.call(yf,t)?!0:Jc.call(xf,t)?!1:O_.test(t)?yf[t]=!0:(xf[t]=!0,!1)}function z_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B_(t,e,n,i){if(e===null||typeof e>"u"||z_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var cd=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cd,ud);Dt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cd,ud);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cd,ud);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B_(e,n,r,i)&&(n=null),i||r===null?k_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),eu=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),xm=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),tu=Symbol.for("react.suspense"),nu=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),ym=Symbol.for("react.offscreen"),Sf=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,$l;function Xs(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function j_(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Yr:return"Portal";case eu:return"Profiler";case fd:return"StrictMode";case tu:return"Suspense";case nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xm:return(t.displayName||"Context")+".Consumer";case _m:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pd:return e=t.displayName||null,e!==null?e:iu(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return iu(t(e))}catch{}}return null}function H_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(e);case 8:return e===fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G_(t){var e=Sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=G_(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ru(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ef(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mm(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function su(t,e){Mm(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?au(t,e.type,n):e.hasOwnProperty("defaultValue")&&au(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function au(t,e,n){(e!=="number"||Ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(qs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function Tm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,Am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V_=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(t){V_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ks[e]=Ks[t]})});function Nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ks.hasOwnProperty(t)&&Ks[t]?(""+e).trim():e+"px"}function Rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Nm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var W_=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cu(t,e){if(e){if(W_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=null;function md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fu=null,cs=null,us=null;function Af(t){if(t=ba(t)){if(typeof fu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=wl(e),fu(t.stateNode,t.type,e))}}function Cm(t){cs?us?us.push(t):us=[t]:cs=t}function bm(){if(cs){var t=cs,e=us;if(us=cs=null,Af(t),e)for(t=0;t<e.length;t++)Af(e[t])}}function Pm(t,e){return t(e)}function Lm(){}var Ql=!1;function Dm(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return Pm(t,e,n)}finally{Ql=!1,(cs!==null||us!==null)&&(Lm(),bm())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var hu=!1;if(di)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{hu=!1}function X_(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Zs=!1,Go=null,Vo=!1,pu=null,q_={onError:function(t){Zs=!0,Go=t}};function Y_(t,e,n,i,r,s,a,o,c){Zs=!1,Go=null,X_.apply(q_,arguments)}function $_(t,e,n,i,r,s,a,o,c){if(Y_.apply(this,arguments),Zs){if(Zs){var u=Go;Zs=!1,Go=null}else throw Error(ee(198));Vo||(Vo=!0,pu=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(t){if(Ar(t)!==t)throw Error(ee(188))}function K_(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nf(r),t;if(s===i)return Nf(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Im(t){return t=K_(t),t!==null?Fm(t):null}function Fm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fm(t);if(e!==null)return e;t=t.sibling}return null}var Om=mn.unstable_scheduleCallback,Rf=mn.unstable_cancelCallback,Z_=mn.unstable_shouldYield,Q_=mn.unstable_requestPaint,mt=mn.unstable_now,J_=mn.unstable_getCurrentPriorityLevel,gd=mn.unstable_ImmediatePriority,km=mn.unstable_UserBlockingPriority,Wo=mn.unstable_NormalPriority,ex=mn.unstable_LowPriority,zm=mn.unstable_IdlePriority,Sl=null,$n=null;function tx(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:rx,nx=Math.log,ix=Math.LN2;function rx(t){return t>>>=0,t===0?32:31-(nx(t)/ix|0)|0}var Va=64,Wa=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ys(o):(s&=a,s!==0&&(i=Ys(s)))}else a=n&~r,a!==0?i=Ys(a):s!==0&&(i=Ys(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function sx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ax(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-zn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=sx(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function mu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bm(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function ox(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function jm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hm,_d,Gm,Vm,Wm,gu=!1,Xa=[],Ui=null,Ii=null,Fi=null,ca=new Map,ua=new Map,Ni=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Is(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ba(e),e!==null&&_d(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cx(t,e,n,i,r){switch(e){case"focusin":return Ui=Is(Ui,t,e,n,i,r),!0;case"dragenter":return Ii=Is(Ii,t,e,n,i,r),!0;case"mouseover":return Fi=Is(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Is(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Is(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Xm(t){var e=ur(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Um(n),e!==null){t.blockedOn=e,Wm(t.priority,function(){Gm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);du=i,n.target.dispatchEvent(i),du=null}else return e=ba(n),e!==null&&_d(e),t.blockedOn=n,!1;e.shift()}return!0}function bf(t,e,n){Po(t)&&n.delete(e)}function ux(){gu=!1,Ui!==null&&Po(Ui)&&(Ui=null),Ii!==null&&Po(Ii)&&(Ii=null),Fi!==null&&Po(Fi)&&(Fi=null),ca.forEach(bf),ua.forEach(bf)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,gu||(gu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,ux)))}function da(t){function e(r){return Fs(r,t)}if(0<Xa.length){Fs(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Fs(Ui,t),Ii!==null&&Fs(Ii,t),Fi!==null&&Fs(Fi,t),ca.forEach(e),ua.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Xm(n),n.blockedOn===null&&Ni.shift()}var ds=vi.ReactCurrentBatchConfig,qo=!0;function dx(t,e,n,i){var r=$e,s=ds.transition;ds.transition=null;try{$e=1,xd(t,e,n,i)}finally{$e=r,ds.transition=s}}function fx(t,e,n,i){var r=$e,s=ds.transition;ds.transition=null;try{$e=4,xd(t,e,n,i)}finally{$e=r,ds.transition=s}}function xd(t,e,n,i){if(qo){var r=vu(t,e,n,i);if(r===null)cc(t,e,i,Yo,n),Cf(t,i);else if(cx(r,t,e,n,i))i.stopPropagation();else if(Cf(t,i),e&4&&-1<lx.indexOf(t)){for(;r!==null;){var s=ba(r);if(s!==null&&Hm(s),s=vu(t,e,n,i),s===null&&cc(t,e,i,Yo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cc(t,e,i,null,n)}}var Yo=null;function vu(t,e,n,i){if(Yo=null,t=md(i),t=ur(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yo=t,null}function qm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J_()){case gd:return 1;case km:return 4;case Wo:case ex:return 16;case zm:return 536870912;default:return 16}default:return 16}}var Ci=null,yd=null,Lo=null;function Ym(){if(Lo)return Lo;var t,e=yd,n=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Lo=r.slice(t,1<i?1-i:void 0)}function Do(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Pf(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Pf,this.isPropagationStopped=Pf,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=vn(Rs),Ca=ut({},Rs,{view:0,detail:0}),hx=vn(Ca),ec,tc,Os,El=ut({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(ec=t.screenX-Os.screenX,tc=t.screenY-Os.screenY):tc=ec=0,Os=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Lf=vn(El),px=ut({},El,{dataTransfer:0}),mx=vn(px),gx=ut({},Ca,{relatedTarget:0}),nc=vn(gx),vx=ut({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=vn(vx),xx=ut({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yx=vn(xx),Sx=ut({},Rs,{data:0}),Df=vn(Sx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tx[t])?!!e[t]:!1}function Ed(){return wx}var Ax=ut({},Ca,{key:function(t){if(t.key){var e=Ex[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Do(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?Do(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Do(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nx=vn(Ax),Rx=ut({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=vn(Rx),Cx=ut({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),bx=vn(Cx),Px=ut({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=vn(Px),Dx=ut({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=vn(Dx),Ix=[9,13,27,32],Md=di&&"CompositionEvent"in window,Qs=null;di&&"documentMode"in document&&(Qs=document.documentMode);var Fx=di&&"TextEvent"in window&&!Qs,$m=di&&(!Md||Qs&&8<Qs&&11>=Qs),If=" ",Ff=!1;function Km(t,e){switch(t){case"keyup":return Ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function Ox(t,e){switch(t){case"compositionend":return Zm(e);case"keypress":return e.which!==32?null:(Ff=!0,If);case"textInput":return t=e.data,t===If&&Ff?null:t;default:return null}}function kx(t,e){if(Kr)return t==="compositionend"||!Md&&Km(t,e)?(t=Ym(),Lo=yd=Ci=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $m&&e.locale!=="ko"?null:e.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zx[t.type]:e==="textarea"}function Qm(t,e,n,i){Cm(i),e=$o(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Js=null,fa=null;function Bx(t){cg(t,0)}function Ml(t){var e=Jr(t);if(Em(e))return t}function jx(t,e){if(t==="change")return e}var Jm=!1;if(di){var ic;if(di){var rc="oninput"in document;if(!rc){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),rc=typeof kf.oninput=="function"}ic=rc}else ic=!1;Jm=ic&&(!document.documentMode||9<document.documentMode)}function zf(){Js&&(Js.detachEvent("onpropertychange",eg),fa=Js=null)}function eg(t){if(t.propertyName==="value"&&Ml(fa)){var e=[];Qm(e,fa,t,md(t)),Dm(Bx,e)}}function Hx(t,e,n){t==="focusin"?(zf(),Js=e,fa=n,Js.attachEvent("onpropertychange",eg)):t==="focusout"&&zf()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(fa)}function Vx(t,e){if(t==="click")return Ml(e)}function Wx(t,e){if(t==="input"||t==="change")return Ml(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Xx;function ha(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jc.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,e){var n=Bf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ng(){for(var t=window,e=Ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ho(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qx(t){var e=ng(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tg(n.ownerDocument.documentElement,n)){if(i!==null&&Td(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=jf(n,s);var a=jf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yx=di&&"documentMode"in document&&11>=document.documentMode,Zr=null,_u=null,ea=null,xu=!1;function Hf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xu||Zr==null||Zr!==Ho(i)||(i=Zr,"selectionStart"in i&&Td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ea&&ha(ea,i)||(ea=i,i=$o(_u,"onSelect"),0<i.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},sc={},ig={};di&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Tl(t){if(sc[t])return sc[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ig)return sc[t]=e[n];return t}var rg=Tl("animationend"),sg=Tl("animationiteration"),ag=Tl("animationstart"),og=Tl("transitionend"),lg=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){lg.set(t,e),wr(e,[t])}for(var ac=0;ac<Gf.length;ac++){var oc=Gf[ac],$x=oc.toLowerCase(),Kx=oc[0].toUpperCase()+oc.slice(1);$i($x,"on"+Kx)}$i(rg,"onAnimationEnd");$i(sg,"onAnimationIteration");$i(ag,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(og,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Vf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$_(i,e,void 0,t),t.currentTarget=null}function cg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Vf(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Vf(r,o,u),s=c}}}if(Vo)throw t=pu,Vo=!1,pu=null,t}function nt(t,e){var n=e[Tu];n===void 0&&(n=e[Tu]=new Set);var i=t+"__bubble";n.has(i)||(ug(e,t,2,!1),n.add(i))}function lc(t,e,n){var i=0;e&&(i|=4),ug(n,t,i,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[$a]){t[$a]=!0,vm.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,lc("selectionchange",!1,e))}}function ug(t,e,n,i){switch(qm(e)){case 1:var r=dx;break;case 4:r=fx;break;default:r=xd}n=r.bind(null,e,n,t),r=void 0,!hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ur(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Dm(function(){var u=s,f=md(n),h=[];e:{var p=lg.get(t);if(p!==void 0){var _=Sd,y=t;switch(t){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":_=Nx;break;case"focusin":y="focus",_=nc;break;case"focusout":y="blur",_=nc;break;case"beforeblur":case"afterblur":_=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=bx;break;case rg:case sg:case ag:_=_x;break;case og:_=Lx;break;case"scroll":_=hx;break;case"wheel":_=Ux;break;case"copy":case"cut":case"paste":_=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Uf}var x=(e&4)!==0,m=!x&&t==="scroll",d=x?p!==null?p+"Capture":null:p;x=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=la(g,d),S!=null&&x.push(ma(g,S,v)))),m)break;g=g.return}0<x.length&&(p=new _(p,y,null,n,f),h.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==du&&(y=n.relatedTarget||n.fromElement)&&(ur(y)||y[fi]))break e;if((_||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=u,y=y?ur(y):null,y!==null&&(m=Ar(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=u),_!==y)){if(x=Lf,S="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Uf,S="onPointerLeave",d="onPointerEnter",g="pointer"),m=_==null?p:Jr(_),v=y==null?p:Jr(y),p=new x(S,g+"leave",_,n,f),p.target=m,p.relatedTarget=v,S=null,ur(f)===u&&(x=new x(d,g+"enter",y,n,f),x.target=v,x.relatedTarget=m,S=x),m=S,_&&y)t:{for(x=_,d=y,g=0,v=x;v;v=Pr(v))g++;for(v=0,S=d;S;S=Pr(S))v++;for(;0<g-v;)x=Pr(x),g--;for(;0<v-g;)d=Pr(d),v--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=Pr(x),d=Pr(d)}x=null}else x=null;_!==null&&Wf(h,p,_,x,!1),y!==null&&m!==null&&Wf(h,m,y,x,!0)}}e:{if(p=u?Jr(u):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var C=jx;else if(Of(p))if(Jm)C=Wx;else{C=Gx;var R=Hx}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Vx);if(C&&(C=C(t,u))){Qm(h,C,n,f);break e}R&&R(t,p,u),t==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&au(p,"number",p.value)}switch(R=u?Jr(u):window,t){case"focusin":(Of(R)||R.contentEditable==="true")&&(Zr=R,_u=u,ea=null);break;case"focusout":ea=_u=Zr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Hf(h,n,f);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Hf(h,n,f)}var A;if(Md)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Kr?Km(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&($m&&n.locale!=="ko"&&(Kr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Kr&&(A=Ym()):(Ci=f,yd="value"in Ci?Ci.value:Ci.textContent,Kr=!0)),R=$o(u,D),0<R.length&&(D=new Df(D,t,null,n,f),h.push({event:D,listeners:R}),A?D.data=A:(A=Zm(n),A!==null&&(D.data=A)))),(A=Fx?Ox(t,n):kx(t,n))&&(u=$o(u,"onBeforeInput"),0<u.length&&(f=new Df("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}cg(h,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $o(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=la(n,s),c!=null&&a.unshift(ma(n,c,o))):r||(c=la(n,s),c!=null&&a.push(ma(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(Jx,"")}function Ka(t,e,n){if(e=Xf(e),Xf(t)!==e&&n)throw Error(ee(425))}function Ko(){}var yu=null,Su=null;function Eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(n0)}:Mu;function n0(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Cs,ga="__reactProps$"+Cs,fi="__reactContainer$"+Cs,Tu="__reactEvents$"+Cs,i0="__reactListeners$"+Cs,r0="__reactHandles$"+Cs;function ur(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yf(t);t!==null;){if(n=t[qn])return n;t=Yf(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[qn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function wl(t){return t[ga]||null}var wu=[],es=-1;function Ki(t){return{current:t}}function rt(t){0>es||(t.current=wu[es],wu[es]=null,es--)}function tt(t,e){es++,wu[es]=t.current,t.current=e}var qi={},Bt=Ki(qi),en=Ki(!1),_r=qi;function vs(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Zo(){rt(en),rt(Bt)}function $f(t,e,n){if(Bt.current!==qi)throw Error(ee(168));tt(Bt,e),tt(en,n)}function dg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,H_(t)||"Unknown",r));return ut({},n,i)}function Qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,_r=Bt.current,tt(Bt,t),tt(en,en.current),!0}function Kf(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=dg(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,rt(en),rt(Bt),tt(Bt,t)):rt(en),tt(en,n)}var si=null,Al=!1,dc=!1;function fg(t){si===null?si=[t]:si.push(t)}function s0(t){Al=!0,fg(t)}function Zi(){if(!dc&&si!==null){dc=!0;var t=0,e=$e;try{var n=si;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Al=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Om(gd,Zi),r}finally{$e=e,dc=!1}}return null}var ts=[],ns=0,Jo=null,el=0,yn=[],Sn=0,xr=null,oi=1,li="";function rr(t,e){ts[ns++]=el,ts[ns++]=Jo,Jo=t,el=e}function hg(t,e,n){yn[Sn++]=oi,yn[Sn++]=li,yn[Sn++]=xr,xr=t;var i=oi;t=li;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,oi=1<<32-zn(e)+r|n<<r|i,li=s+t}else oi=1<<s|n<<r|i,li=t}function wd(t){t.return!==null&&(rr(t,1),hg(t,1,0))}function Ad(t){for(;t===Jo;)Jo=ts[--ns],ts[ns]=null,el=ts[--ns],ts[ns]=null;for(;t===xr;)xr=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null,oi=yn[--Sn],yn[Sn]=null}var dn=null,un=null,st=!1,In=null;function pg(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:oi,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nu(t){if(st){var e=un;if(e){var n=e;if(!Zf(t,e)){if(Au(t))throw Error(ee(418));e=Oi(n.nextSibling);var i=dn;e&&Zf(t,e)?pg(i,n):(t.flags=t.flags&-4097|2,st=!1,dn=t)}}else{if(Au(t))throw Error(ee(418));t.flags=t.flags&-4097|2,st=!1,dn=t}}}function Qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Za(t){if(t!==dn)return!1;if(!st)return Qf(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eu(t.type,t.memoizedProps)),e&&(e=un)){if(Au(t))throw mg(),Error(ee(418));for(;e;)pg(t,e),e=Oi(e.nextSibling)}if(Qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Oi(t.stateNode.nextSibling):null;return!0}function mg(){for(var t=un;t;)t=Oi(t.nextSibling)}function _s(){un=dn=null,st=!1}function Nd(t){In===null?In=[t]:In.push(t)}var a0=vi.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jf(t){var e=t._init;return e(t._payload)}function gg(t){function e(d,g){if(t){var v=d.deletions;v===null?(d.deletions=[g],d.flags|=16):v.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=ji(d,g),d.index=0,d.sibling=null,d}function s(d,g,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<g?(d.flags|=2,g):v):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,v,S){return g===null||g.tag!==6?(g=_c(v,d.mode,S),g.return=d,g):(g=r(g,v),g.return=d,g)}function c(d,g,v,S){var C=v.type;return C===$r?f(d,g,v.props.children,S,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wi&&Jf(C)===g.type)?(S=r(g,v.props),S.ref=ks(d,g,v),S.return=d,S):(S=Bo(v.type,v.key,v.props,null,d.mode,S),S.ref=ks(d,g,v),S.return=d,S)}function u(d,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=xc(v,d.mode,S),g.return=d,g):(g=r(g,v.children||[]),g.return=d,g)}function f(d,g,v,S,C){return g===null||g.tag!==7?(g=pr(v,d.mode,S,C),g.return=d,g):(g=r(g,v),g.return=d,g)}function h(d,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_c(""+g,d.mode,v),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:return v=Bo(g.type,g.key,g.props,null,d.mode,v),v.ref=ks(d,null,g),v.return=d,v;case Yr:return g=xc(g,d.mode,v),g.return=d,g;case wi:var S=g._init;return h(d,S(g._payload),v)}if(qs(g)||Ds(g))return g=pr(g,d.mode,v,null),g.return=d,g;Qa(d,g)}return null}function p(d,g,v,S){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(d,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return v.key===C?c(d,g,v,S):null;case Yr:return v.key===C?u(d,g,v,S):null;case wi:return C=v._init,p(d,g,C(v._payload),S)}if(qs(v)||Ds(v))return C!==null?null:f(d,g,v,S,null);Qa(d,v)}return null}function _(d,g,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,o(g,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ja:return d=d.get(S.key===null?v:S.key)||null,c(g,d,S,C);case Yr:return d=d.get(S.key===null?v:S.key)||null,u(g,d,S,C);case wi:var R=S._init;return _(d,g,v,R(S._payload),C)}if(qs(S)||Ds(S))return d=d.get(v)||null,f(g,d,S,C,null);Qa(g,S)}return null}function y(d,g,v,S){for(var C=null,R=null,A=g,D=g=0,M=null;A!==null&&D<v.length;D++){A.index>D?(M=A,A=null):M=A.sibling;var T=p(d,A,v[D],S);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(d,A),g=s(T,g,D),R===null?C=T:R.sibling=T,R=T,A=M}if(D===v.length)return n(d,A),st&&rr(d,D),C;if(A===null){for(;D<v.length;D++)A=h(d,v[D],S),A!==null&&(g=s(A,g,D),R===null?C=A:R.sibling=A,R=A);return st&&rr(d,D),C}for(A=i(d,A);D<v.length;D++)M=_(A,d,D,v[D],S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?D:M.key),g=s(M,g,D),R===null?C=M:R.sibling=M,R=M);return t&&A.forEach(function(z){return e(d,z)}),st&&rr(d,D),C}function x(d,g,v,S){var C=Ds(v);if(typeof C!="function")throw Error(ee(150));if(v=C.call(v),v==null)throw Error(ee(151));for(var R=C=null,A=g,D=g=0,M=null,T=v.next();A!==null&&!T.done;D++,T=v.next()){A.index>D?(M=A,A=null):M=A.sibling;var z=p(d,A,T.value,S);if(z===null){A===null&&(A=M);break}t&&A&&z.alternate===null&&e(d,A),g=s(z,g,D),R===null?C=z:R.sibling=z,R=z,A=M}if(T.done)return n(d,A),st&&rr(d,D),C;if(A===null){for(;!T.done;D++,T=v.next())T=h(d,T.value,S),T!==null&&(g=s(T,g,D),R===null?C=T:R.sibling=T,R=T);return st&&rr(d,D),C}for(A=i(d,A);!T.done;D++,T=v.next())T=_(A,d,D,T.value,S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?D:T.key),g=s(T,g,D),R===null?C=T:R.sibling=T,R=T);return t&&A.forEach(function(Y){return e(d,Y)}),st&&rr(d,D),C}function m(d,g,v,S){if(typeof v=="object"&&v!==null&&v.type===$r&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:e:{for(var C=v.key,R=g;R!==null;){if(R.key===C){if(C=v.type,C===$r){if(R.tag===7){n(d,R.sibling),g=r(R,v.props.children),g.return=d,d=g;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wi&&Jf(C)===R.type){n(d,R.sibling),g=r(R,v.props),g.ref=ks(d,R,v),g.return=d,d=g;break e}n(d,R);break}else e(d,R);R=R.sibling}v.type===$r?(g=pr(v.props.children,d.mode,S,v.key),g.return=d,d=g):(S=Bo(v.type,v.key,v.props,null,d.mode,S),S.ref=ks(d,g,v),S.return=d,d=S)}return a(d);case Yr:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(d,g.sibling),g=r(g,v.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=xc(v,d.mode,S),g.return=d,d=g}return a(d);case wi:return R=v._init,m(d,g,R(v._payload),S)}if(qs(v))return y(d,g,v,S);if(Ds(v))return x(d,g,v,S);Qa(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,v),g.return=d,d=g):(n(d,g),g=_c(v,d.mode,S),g.return=d,d=g),a(d)):n(d,g)}return m}var xs=gg(!0),vg=gg(!1),tl=Ki(null),nl=null,is=null,Rd=null;function Cd(){Rd=is=nl=null}function bd(t){var e=tl.current;rt(tl),t._currentValue=e}function Ru(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){nl=t,Rd=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(nl===null)throw Error(ee(308));is=t,nl.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var dr=null;function Pd(t){dr===null?dr=[t]:dr.push(t)}function _g(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function Uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}function eh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=c))}if(s!==null){var h=r.baseState;a=0,f=u=c=null,o=s;do{var p=o.lane,_=o.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,x=o;switch(p=e,_=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(_,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(_,h,p):y,p==null)break e;h=ut({},h,p);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else _={eventTime:_,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=_,c=h):f=f.next=_,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Sr|=a,t.lanes=a,t.memoizedState=h}}function th(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Pa={},Kn=Ki(Pa),va=Ki(Pa),_a=Ki(Pa);function fr(t){if(t===Pa)throw Error(ee(174));return t}function Dd(t,e){switch(tt(_a,e),tt(va,t),tt(Kn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lu(e,t)}rt(Kn),tt(Kn,e)}function ys(){rt(Kn),rt(va),rt(_a)}function yg(t){fr(_a.current);var e=fr(Kn.current),n=lu(e,t.type);e!==n&&(tt(va,t),tt(Kn,n))}function Ud(t){va.current===t&&(rt(Kn),rt(va))}var lt=Ki(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Id(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Io=vi.ReactCurrentDispatcher,hc=vi.ReactCurrentBatchConfig,yr=0,ct=null,xt=null,At=null,sl=!1,ta=!1,xa=0,o0=0;function It(){throw Error(ee(321))}function Fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Od(t,e,n,i,r,s){if(yr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Io.current=t===null||t.memoizedState===null?d0:f0,t=n(i,r),ta){s=0;do{if(ta=!1,xa=0,25<=s)throw Error(ee(301));s+=1,At=xt=null,e.updateQueue=null,Io.current=h0,t=n(i,r)}while(ta)}if(Io.current=al,e=xt!==null&&xt.next!==null,yr=0,At=xt=ct=null,sl=!1,e)throw Error(ee(300));return t}function kd(){var t=xa!==0;return xa=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ct.memoizedState=At=t:At=At.next=t,At}function Rn(){if(xt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=At===null?ct.memoizedState:At.next;if(e!==null)At=e,xt=t;else{if(t===null)throw Error(ee(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},At===null?ct.memoizedState=At=t:At=At.next=t}return At}function ya(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var f=u.lane;if((yr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,a=i):c=c.next=h,ct.lanes|=f,Sr|=f}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,jn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,Sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);jn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sg(){}function Eg(t,e){var n=ct,i=Rn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,zd(wg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Sa(9,Tg.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ee(349));yr&30||Mg(n,e,r)}return r}function Mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tg(t,e,n,i){e.value=n,e.getSnapshot=i,Ag(e)&&Ng(t)}function wg(t,e,n){return n(function(){Ag(e)&&Ng(t)})}function Ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Ng(t){var e=hi(t,1);e!==null&&Bn(e,t,1,-1)}function nh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=u0.bind(null,ct,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rg(){return Rn().memoizedState}function Fo(t,e,n,i){var r=Wn();ct.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Nl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(xt!==null){var a=xt.memoizedState;if(s=a.destroy,i!==null&&Fd(i,a.deps)){r.memoizedState=Sa(e,n,s,i);return}}ct.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function ih(t,e){return Fo(8390656,8,t,e)}function zd(t,e){return Nl(2048,8,t,e)}function Cg(t,e){return Nl(4,2,t,e)}function bg(t,e){return Nl(4,4,t,e)}function Pg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lg(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,Pg.bind(null,e,t),n)}function Bd(){}function Dg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ug(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ig(t,e,n){return yr&21?(jn(n,e)||(n=Bm(),ct.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function l0(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{$e=n,hc.transition=i}}function Fg(){return Rn().memoizedState}function c0(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Og(t))kg(e,n);else if(n=_g(t,e,n,i),n!==null){var r=qt();Bn(n,t,i,r),zg(n,e,i)}}function u0(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Og(t))kg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,jn(o,a)){var c=e.interleaved;c===null?(r.next=r,Pd(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=_g(t,e,r,i),n!==null&&(r=qt(),Bn(n,t,i,r),zg(n,e,i))}}function Og(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function kg(t,e){ta=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}var al={readContext:Nn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},d0={readContext:Nn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:ih,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fo(4194308,4,Pg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fo(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=c0.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:nh,useDebugValue:Bd,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=nh(!1),e=t[0];return t=l0.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Wn();if(st){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Nt===null)throw Error(ee(349));yr&30||Mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ih(wg.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,Tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Nt.identifierPrefix;if(st){var n=li,i=oi;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},f0={readContext:Nn,useCallback:Dg,useContext:Nn,useEffect:zd,useImperativeHandle:Lg,useInsertionEffect:Cg,useLayoutEffect:bg,useMemo:Ug,useReducer:pc,useRef:Rg,useState:function(){return pc(ya)},useDebugValue:Bd,useDeferredValue:function(t){var e=Rn();return Ig(e,xt.memoizedState,t)},useTransition:function(){var t=pc(ya)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Fg,unstable_isNewReconciler:!1},h0={readContext:Nn,useCallback:Dg,useContext:Nn,useEffect:zd,useImperativeHandle:Lg,useInsertionEffect:Cg,useLayoutEffect:bg,useMemo:Ug,useReducer:mc,useRef:Rg,useState:function(){return mc(ya)},useDebugValue:Bd,useDeferredValue:function(t){var e=Rn();return xt===null?e.memoizedState=t:Ig(e,xt.memoizedState,t)},useTransition:function(){var t=mc(ya)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Fg,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Bi(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Bn(e,t,r,i),Uo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Bi(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Bn(e,t,r,i),Uo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Bi(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(Bn(e,t,i,n),Uo(e,t,i))}};function rh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function Bg(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=tn(e)?_r:Bt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function bu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=tn(e)?_r:Bt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rl.enqueueReplaceState(r,r.state,null),il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=j_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function jg(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ll||(ll=!0,ju=i),Pu(t,e)},n}function Hg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ah(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new p0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=R0.bind(null,t,e,n),e.then(t,t))}function oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var m0=vi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?vg(e,null,n,i):xs(e,t.child,n,i)}function ch(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=Od(t,e,n,i,s,r),n=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(st&&n&&wd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function uh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gg(t,e,s,i,r)):(t=Bo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(a,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Lu(t,e,n,i,r)}function Vg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ss,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ss,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(ss,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(ss,cn),cn|=i;return Wt(t,e,r,n),e.child}function Wg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lu(t,e,n,i,r){var s=tn(n)?_r:Bt.current;return s=vs(e,s),fs(e,r),n=Od(t,e,n,i,s,r),i=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(st&&i&&wd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function dh(t,e,n,i,r){if(tn(n)){var s=!0;Qo(e)}else s=!1;if(fs(e,r),e.stateNode===null)Oo(t,e),Bg(e,n,i),bu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=tn(n)?_r:Bt.current,u=vs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&sh(e,a,i,u),Ai=!1;var p=e.memoizedState;a.state=p,il(e,i,a,r),c=e.memoizedState,o!==i||p!==c||en.current||Ai?(typeof f=="function"&&(Cu(e,n,f,i),c=e.memoizedState),(o=Ai||rh(e,n,o,i,p,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,xg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Dn(e.type,o),a.props=u,h=e.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Nn(c):(c=tn(n)?_r:Bt.current,c=vs(e,c));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==c)&&sh(e,a,i,c),Ai=!1,p=e.memoizedState,a.state=p,il(e,i,a,r);var y=e.memoizedState;o!==h||p!==y||en.current||Ai?(typeof _=="function"&&(Cu(e,n,_,i),y=e.memoizedState),(u=Ai||rh(e,n,u,i,p,y,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Du(t,e,n,i,s,r)}function Du(t,e,n,i,r,s){Wg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Kf(e,n,!1),pi(t,e,s);i=e.stateNode,m0.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&Kf(e,n,!0),e.child}function Xg(t){var e=t.stateNode;e.pendingContext?$f(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$f(t,e.context,!1),Dd(t,e.containerInfo)}function fh(t,e,n,i,r){return _s(),Nd(r),e.flags|=256,Wt(t,e,n,i),e.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function qg(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return Nu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Pl(a,i,0,null),t=pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Iu(n),e.memoizedState=Uu,t):jd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return g0(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ji(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=pr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Iu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Uu,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jd(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&Nd(i),xs(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function g0(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=gc(Error(ee(422))),Ja(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pl({mode:"visible",children:i.children},r,0,null),s=pr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xs(e,t.child,null,a),e.child.memoizedState=Iu(a),e.memoizedState=Uu,s);if(!(e.mode&1))return Ja(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=gc(s,i,void 0),Ja(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(t,r),Bn(i,t,r,-1))}return qd(),i=gc(Error(ee(421))),Ja(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=C0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Oi(r.nextSibling),dn=e,st=!0,In=null,t!==null&&(yn[Sn++]=oi,yn[Sn++]=li,yn[Sn++]=xr,oi=t.id,li=t.overflow,xr=e),e=jd(e,i.children),e.flags|=4096,e)}function hh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ru(t.return,e,n)}function vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Yg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hh(t,n,e);else if(t.tag===19)hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vc(e,!0,n,null,s);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function v0(t,e,n){switch(e.tag){case 3:Xg(e),_s();break;case 5:yg(e);break;case 1:tn(e.type)&&Qo(e);break;case 4:Dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?qg(t,e,n):(tt(lt,lt.current&1),t=pi(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Yg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Vg(t,e,n)}return pi(t,e,n)}var $g,Fu,Kg,Zg;$g=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fu=function(){};Kg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,fr(Kn.current);var s=null;switch(n){case"input":r=ru(t,r),i=ru(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=ou(t,r),i=ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ko)}cu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(aa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&nt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Zg=function(t,e,n,i){n!==i&&(e.flags|=4)};function zs(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _0(t,e,n){var i=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&Zo(),Ft(e),null;case 3:return i=e.stateNode,ys(),rt(en),rt(Bt),Id(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Vu(In),In=null))),Fu(t,e),Ft(e),null;case 5:Ud(e);var r=fr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)Kg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ft(e),null}if(t=fr(Kn.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)nt($s[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Ef(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Tf(i,s),nt("invalid",i)}cu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,o,t),r=["children",""+o]):aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&nt("scroll",i)}switch(n){case"input":Ha(i),Mf(i,s,!0);break;case"textarea":Ha(i),wf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ko)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[ga]=i,$g(t,e,!1,!1),e.stateNode=t;e:{switch(a=uu(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)nt($s[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Ef(t,i),r=ru(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Tf(t,i),r=ou(t,i),nt("invalid",t);break;default:r=i}cu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Rm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Am(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&oa(t,c):typeof c=="number"&&oa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&nt("scroll",t):c!=null&&dd(t,s,c,a))}switch(n){case"input":Ha(t),Mf(t,i,!1);break;case"textarea":Ha(t),wf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Zg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=fr(_a.current),fr(Kn.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Ft(e),null;case 13:if(rt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&un!==null&&e.mode&1&&!(e.flags&128))mg(),_s(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[qn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else In!==null&&(Vu(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?yt===0&&(yt=3):qd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ys(),Fu(t,e),t===null&&pa(e.stateNode.containerInfo),Ft(e),null;case 10:return bd(e.type._context),Ft(e),null;case 17:return tn(e.type)&&Zo(),Ft(e),null;case 19:if(rt(lt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)zs(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=rl(t),a!==null){for(e.flags|=128,zs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>Es&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!st)return Ft(e),null}else 2*mt()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function x0(t,e){switch(Ad(e),e.tag){case 1:return tn(e.type)&&Zo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),rt(en),rt(Bt),Id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(rt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(lt),null;case 4:return ys(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var eo=!1,zt=!1,y0=typeof WeakSet=="function"?WeakSet:Set,he=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Ou(t,e,n){try{n()}catch(i){ht(t,e,i)}}var ph=!1;function S0(t,e){if(yu=qo,t=ng(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var _;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(c=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++f===i&&(c=a),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Su={focusedElem:t,selectionRange:n},qo=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,m=y.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){ht(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return y=ph,ph=!1,y}function na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ou(e,n,s)}r=r.next}while(r!==i)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qg(t){var e=t.alternate;e!==null&&(t.alternate=null,Qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[ga],delete e[Tu],delete e[i0],delete e[r0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jg(t){return t.tag===5||t.tag===3||t.tag===4}function mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(i!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}function Bu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bu(t,e,n),t=t.sibling;t!==null;)Bu(t,e,n),t=t.sibling}var Ct=null,Un=!1;function _i(t,e,n){for(n=n.child;n!==null;)ev(t,e,n),n=n.sibling}function ev(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:zt||rs(n,e);case 6:var i=Ct,r=Un;Ct=null,_i(t,e,n),Ct=i,Un=r,Ct!==null&&(Un?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(Un?(t=Ct,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),da(t)):uc(Ct,n.stateNode));break;case 4:i=Ct,r=Un,Ct=n.stateNode.containerInfo,Un=!0,_i(t,e,n),Ct=i,Un=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ou(n,e,a),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!zt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ht(n,e,o)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,_i(t,e,n),zt=i):_i(t,e,n);break;default:_i(t,e,n)}}function gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y0),e.forEach(function(i){var r=b0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ct=o.stateNode,Un=!1;break e;case 3:Ct=o.stateNode.containerInfo,Un=!0;break e;case 4:Ct=o.stateNode.containerInfo,Un=!0;break e}o=o.return}if(Ct===null)throw Error(ee(160));ev(s,a,r),Ct=null,Un=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tv(e,t),e=e.sibling}function tv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Vn(t),i&4){try{na(3,t,t.return),Cl(3,t)}catch(x){ht(t,t.return,x)}try{na(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Cn(e,t),Vn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Cn(e,t),Vn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Mm(r,s),uu(o,a);var u=uu(o,s);for(a=0;a<c.length;a+=2){var f=c[a],h=c[a+1];f==="style"?Rm(r,h):f==="dangerouslySetInnerHTML"?Am(r,h):f==="children"?oa(r,h):dd(r,f,h,u)}switch(o){case"input":su(r,s);break;case"textarea":Tm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?ls(r,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(Cn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(Cn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Cn(e,t),Vn(t);break;case 13:Cn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vd=mt())),i&4&&gh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,Cn(e,t),zt=u):Cn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(h=he=f;he!==null;){switch(p=he,_=p.child,p.tag){case 0:case 11:case 14:case 15:na(4,p,p.return);break;case 1:rs(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:rs(p,p.return);break;case 22:if(p.memoizedState!==null){_h(h);continue}}_!==null?(_.return=p,he=_):_h(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Nm("display",a))}catch(x){ht(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){ht(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),Vn(t),i&4&&gh(t);break;case 21:break;default:Cn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=mh(t);Bu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mh(t);zu(t,o,a);break;default:throw Error(ee(161))}}catch(c){ht(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E0(t,e,n){he=t,nv(t)}function nv(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||eo;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||zt;o=eo;var u=zt;if(eo=a,(zt=c)&&!u)for(he=r;he!==null;)a=he,c=a.child,a.tag===22&&a.memoizedState!==null?xh(r):c!==null?(c.return=a,he=c):xh(r);for(;s!==null;)he=s,nv(s),s=s.sibling;he=r,eo=o,zt=u}vh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):vh(t)}}function vh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Cl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&th(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}th(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&da(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}zt||e.flags&512&&ku(e)}catch(p){ht(e,e.return,p)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function _h(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function xh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(c){ht(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){ht(e,r,c)}}var s=e.return;try{ku(e)}catch(c){ht(e,s,c)}break;case 5:var a=e.return;try{ku(e)}catch(c){ht(e,a,c)}}}catch(c){ht(e,e.return,c)}if(e===t){he=null;break}var o=e.sibling;if(o!==null){o.return=e.return,he=o;break}he=e.return}}var M0=Math.ceil,ol=vi.ReactCurrentDispatcher,Hd=vi.ReactCurrentOwner,An=vi.ReactCurrentBatchConfig,Xe=0,Nt=null,vt=null,Lt=0,cn=0,ss=Ki(0),yt=0,Ea=null,Sr=0,bl=0,Gd=0,ia=null,Zt=null,Vd=0,Es=1/0,ri=null,ll=!1,ju=null,zi=null,to=!1,bi=null,cl=0,ra=0,Hu=null,ko=-1,zo=0;function qt(){return Xe&6?mt():ko!==-1?ko:ko=mt()}function Bi(t){return t.mode&1?Xe&2&&Lt!==0?Lt&-Lt:a0.transition!==null?(zo===0&&(zo=Bm()),zo):(t=$e,t!==0||(t=window.event,t=t===void 0?16:qm(t.type)),t):1}function Bn(t,e,n,i){if(50<ra)throw ra=0,Hu=null,Error(ee(185));Ra(t,n,i),(!(Xe&2)||t!==Nt)&&(t===Nt&&(!(Xe&2)&&(bl|=n),yt===4&&Ri(t,Lt)),nn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Es=mt()+500,Al&&Zi()))}function nn(t,e){var n=t.callbackNode;ax(t,e);var i=Xo(t,t===Nt?Lt:0);if(i===0)n!==null&&Rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rf(n),e===1)t.tag===0?s0(yh.bind(null,t)):fg(yh.bind(null,t)),t0(function(){!(Xe&6)&&Zi()}),n=null;else{switch(jm(i)){case 1:n=gd;break;case 4:n=km;break;case 16:n=Wo;break;case 536870912:n=zm;break;default:n=Wo}n=uv(n,iv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iv(t,e){if(ko=-1,zo=0,Xe&6)throw Error(ee(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=Xo(t,t===Nt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ul(t,i);else{e=i;var r=Xe;Xe|=2;var s=sv();(Nt!==t||Lt!==e)&&(ri=null,Es=mt()+500,hr(t,e));do try{A0();break}catch(o){rv(t,o)}while(!0);Cd(),ol.current=s,Xe=r,vt!==null?e=0:(Nt=null,Lt=0,e=yt)}if(e!==0){if(e===2&&(r=mu(t),r!==0&&(i=r,e=Gu(t,r))),e===1)throw n=Ea,hr(t,0),Ri(t,i),nn(t,mt()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!T0(r)&&(e=ul(t,i),e===2&&(s=mu(t),s!==0&&(i=s,e=Gu(t,s))),e===1))throw n=Ea,hr(t,0),Ri(t,i),nn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:sr(t,Zt,ri);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=Vd+500-mt(),10<e)){if(Xo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mu(sr.bind(null,t,Zt,ri),e);break}sr(t,Zt,ri);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*M0(i/1960))-i,10<i){t.timeoutHandle=Mu(sr.bind(null,t,Zt,ri),i);break}sr(t,Zt,ri);break;case 5:sr(t,Zt,ri);break;default:throw Error(ee(329))}}}return nn(t,mt()),t.callbackNode===n?iv.bind(null,t):null}function Gu(t,e){var n=ia;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=ul(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Vu(e)),t}function Vu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function T0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~Gd,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function yh(t){if(Xe&6)throw Error(ee(327));hs();var e=Xo(t,0);if(!(e&1))return nn(t,mt()),null;var n=ul(t,e);if(t.tag!==0&&n===2){var i=mu(t);i!==0&&(e=i,n=Gu(t,i))}if(n===1)throw n=Ea,hr(t,0),Ri(t,e),nn(t,mt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,Zt,ri),nn(t,mt()),null}function Wd(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Es=mt()+500,Al&&Zi())}}function Er(t){bi!==null&&bi.tag===0&&!(Xe&6)&&hs();var e=Xe;Xe|=1;var n=An.transition,i=$e;try{if(An.transition=null,$e=1,t)return t()}finally{$e=i,An.transition=n,Xe=e,!(Xe&6)&&Zi()}}function Xd(){cn=ss.current,rt(ss)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,e0(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(Ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zo();break;case 3:ys(),rt(en),rt(Bt),Id();break;case 5:Ud(i);break;case 4:ys();break;case 13:rt(lt);break;case 19:rt(lt);break;case 10:bd(i.type._context);break;case 22:case 23:Xd()}n=n.return}if(Nt=t,vt=t=ji(t.current,null),Lt=cn=e,yt=0,Ea=null,Gd=bl=Sr=0,Zt=ia=null,dr!==null){for(e=0;e<dr.length;e++)if(n=dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}dr=null}return t}function rv(t,e){do{var n=vt;try{if(Cd(),Io.current=al,sl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sl=!1}if(yr=0,At=xt=ct=null,ta=!1,xa=0,Hd.current=null,n===null||n.return===null){yt=1,Ea=e,vt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Lt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=oh(a);if(_!==null){_.flags&=-257,lh(_,a,o,s,e),_.mode&1&&ah(s,u,e),e=_,c=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(c),e.updateQueue=x}else y.add(c);break e}else{if(!(e&1)){ah(s,u,e),qd();break e}c=Error(ee(426))}}else if(st&&o.mode&1){var m=oh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lh(m,a,o,s,e),Nd(Ss(c,o));break e}}s=c=Ss(c,o),yt!==4&&(yt=2),ia===null?ia=[s]:ia.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=jg(s,c,e);eh(s,d);break e;case 1:o=c;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zi===null||!zi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Hg(s,o,e);eh(s,S);break e}}s=s.return}while(s!==null)}ov(n)}catch(C){e=C,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function sv(){var t=ol.current;return ol.current=al,t===null?al:t}function qd(){(yt===0||yt===3||yt===2)&&(yt=4),Nt===null||!(Sr&268435455)&&!(bl&268435455)||Ri(Nt,Lt)}function ul(t,e){var n=Xe;Xe|=2;var i=sv();(Nt!==t||Lt!==e)&&(ri=null,hr(t,e));do try{w0();break}catch(r){rv(t,r)}while(!0);if(Cd(),Xe=n,ol.current=i,vt!==null)throw Error(ee(261));return Nt=null,Lt=0,yt}function w0(){for(;vt!==null;)av(vt)}function A0(){for(;vt!==null&&!Z_();)av(vt)}function av(t){var e=cv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?ov(t):vt=e,Hd.current=null}function ov(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x0(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,vt=null;return}}else if(n=_0(n,e,cn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);yt===0&&(yt=5)}function sr(t,e,n){var i=$e,r=An.transition;try{An.transition=null,$e=1,N0(t,e,n,i)}finally{An.transition=r,$e=i}return null}function N0(t,e,n,i){do hs();while(bi!==null);if(Xe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ox(t,s),t===Nt&&(vt=Nt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,uv(Wo,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=$e;$e=1;var o=Xe;Xe|=4,Hd.current=null,S0(t,n),tv(n,t),qx(Su),qo=!!yu,Su=yu=null,t.current=n,E0(n),Q_(),Xe=o,$e=a,An.transition=s}else t.current=n;if(to&&(to=!1,bi=t,cl=r),s=t.pendingLanes,s===0&&(zi=null),tx(n.stateNode),nn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ll)throw ll=!1,t=ju,ju=null,t;return cl&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Hu?ra++:(ra=0,Hu=t):ra=0,Zi(),null}function hs(){if(bi!==null){var t=jm(cl),e=An.transition,n=$e;try{if(An.transition=null,$e=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,cl=0,Xe&6)throw Error(ee(331));var r=Xe;for(Xe|=4,he=t.current;he!==null;){var s=he,a=s.child;if(he.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(he=u;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:na(8,f,s)}var h=f.child;if(h!==null)h.return=f,he=h;else for(;he!==null;){f=he;var p=f.sibling,_=f.return;if(Qg(f),f===u){he=null;break}if(p!==null){p.return=_,he=p;break}he=_}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,he=a;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,he=d;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){a=he;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,he=v;else e:for(a=g;he!==null;){if(o=he,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Cl(9,o)}}catch(C){ht(o,o.return,C)}if(o===a){he=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,he=S;break e}he=o.return}}if(Xe=r,Zi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Sl,t)}catch{}i=!0}return i}finally{$e=n,An.transition=e}}return!1}function Sh(t,e,n){e=Ss(n,e),e=jg(t,e,1),t=ki(t,e,1),e=qt(),t!==null&&(Ra(t,1,e),nn(t,e))}function ht(t,e,n){if(t.tag===3)Sh(t,t,n);else for(;e!==null;){if(e.tag===3){Sh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=Ss(n,t),t=Hg(e,t,1),e=ki(e,t,1),t=qt(),e!==null&&(Ra(e,1,t),nn(e,t));break}}e=e.return}}function R0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Lt&n)===n&&(yt===4||yt===3&&(Lt&130023424)===Lt&&500>mt()-Vd?hr(t,0):Gd|=n),nn(t,e)}function lv(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=qt();t=hi(t,e),t!==null&&(Ra(t,e,n),nn(t,n))}function C0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lv(t,n)}function b0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),lv(t,n)}var cv;cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,v0(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,st&&e.flags&1048576&&hg(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Oo(t,e),t=e.pendingProps;var r=vs(e,Bt.current);fs(e,n),r=Od(null,e,i,t,r,n);var s=kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Qo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=Rl,e.stateNode=r,r._reactInternals=e,bu(e,i,t,n),e=Du(null,e,i,!0,s,n)):(e.tag=0,st&&s&&wd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Oo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=L0(i),t=Dn(i,t),r){case 0:e=Lu(null,e,i,t,n);break e;case 1:e=dh(null,e,i,t,n);break e;case 11:e=ch(null,e,i,t,n);break e;case 14:e=uh(null,e,i,Dn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Lu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),dh(t,e,i,r,n);case 3:e:{if(Xg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,xg(t,e),il(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(ee(423)),e),e=fh(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(ee(424)),e),e=fh(t,e,i,n,r);break e}else for(un=Oi(e.stateNode.containerInfo.firstChild),dn=e,st=!0,In=null,n=vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=pi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return yg(e),t===null&&Nu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Eu(i,r)?a=null:s!==null&&Eu(i,s)&&(e.flags|=32),Wg(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&Nu(e),null;case 13:return qg(t,e,n);case 4:return Dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),ch(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,tt(tl,i._currentValue),i._currentValue=a,s!==null)if(jn(s.value,a)){if(s.children===r.children&&!en.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=ui(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ru(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ru(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=Nn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),uh(t,e,i,r,n);case 15:return Gg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Oo(t,e),e.tag=1,tn(i)?(t=!0,Qo(e)):t=!1,fs(e,n),Bg(e,i,r),bu(e,i,r,n),Du(null,e,i,!0,t,n);case 19:return Yg(t,e,n);case 22:return Vg(t,e,n)}throw Error(ee(156,e.tag))};function uv(t,e){return Om(t,e)}function P0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new P0(t,e,n,i)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function L0(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===pd)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Yd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case $r:return pr(n.children,r,s,e);case fd:a=8,r|=8;break;case eu:return t=wn(12,n,e,r|2),t.elementType=eu,t.lanes=s,t;case tu:return t=wn(13,n,e,r),t.elementType=tu,t.lanes=s,t;case nu:return t=wn(19,n,e,r),t.elementType=nu,t.lanes=s,t;case ym:return Pl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _m:a=10;break e;case xm:a=9;break e;case hd:a=11;break e;case pd:a=14;break e;case wi:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function pr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Pl(t,e,n,i){return t=wn(22,t,i,e),t.elementType=ym,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function D0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,i,r,s,a,o,c){return t=new D0(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function U0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dv(t){if(!t)return qi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(tn(n))return dg(t,n,e)}return e}function fv(t,e,n,i,r,s,a,o,c){return t=$d(n,i,!0,t,r,s,a,o,c),t.context=dv(null),n=t.current,i=qt(),r=Bi(n),s=ui(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Ra(t,r,i),nn(t,i),t}function Ll(t,e,n,i){var r=e.current,s=qt(),a=Bi(r);return n=dv(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(Bn(t,r,a,s),Uo(t,r,a)),a}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Eh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kd(t,e){Eh(t,e),(t=t.alternate)&&Eh(t,e)}function I0(){return null}var hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}Dl.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Ll(t,e,null,null)};Dl.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Ll(null,t,null,null)}),e[fi]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Xm(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mh(){}function F0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=dl(a);s.call(u)}}var a=fv(e,i,t,0,null,!1,!1,"",Mh);return t._reactRootContainer=a,t[fi]=a.current,pa(t.nodeType===8?t.parentNode:t),Er(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=dl(c);o.call(u)}}var c=$d(t,0,!1,null,null,!1,!1,"",Mh);return t._reactRootContainer=c,t[fi]=c.current,pa(t.nodeType===8?t.parentNode:t),Er(function(){Ll(e,c,n,i)}),c}function Il(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=dl(a);o.call(c)}}Ll(e,a,t,r)}else a=F0(n,e,t,r,i);return dl(a)}Hm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(vd(e,n|1),nn(e,mt()),!(Xe&6)&&(Es=mt()+500,Zi()))}break;case 13:Er(function(){var i=hi(t,1);if(i!==null){var r=qt();Bn(i,t,1,r)}}),Kd(t,1)}};_d=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=qt();Bn(e,t,134217728,n)}Kd(t,134217728)}};Gm=function(t){if(t.tag===13){var e=Bi(t),n=hi(t,e);if(n!==null){var i=qt();Bn(n,t,e,i)}Kd(t,e)}};Vm=function(){return $e};Wm=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};fu=function(t,e,n){switch(e){case"input":if(su(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(ee(90));Em(i),su(i,r)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};Pm=Wd;Lm=Er;var O0={usingClientEntryPoint:!1,Events:[ba,Jr,wl,Cm,bm,Wd]},Bs={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k0={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Im(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Sl=no.inject(k0),$n=no}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(ee(200));return U0(t,e,null,n)};gn.createRoot=function(t,e){if(!Qd(t))throw Error(ee(299));var n=!1,i="",r=hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,pa(t.nodeType===8?t.parentNode:t),new Zd(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Im(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Er(t)};gn.hydrate=function(t,e,n){if(!Ul(e))throw Error(ee(200));return Il(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=hv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=fv(e,null,t,1,n??null,r,!1,s,a),t[fi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dl(e)};gn.render=function(t,e,n){if(!Ul(e))throw Error(ee(200));return Il(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(ee(40));return t._reactRootContainer?(Er(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};gn.unstable_batchedUpdates=Wd;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ul(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Il(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pv)}catch(t){console.error(t)}}pv(),pm.exports=gn;var z0=pm.exports,Th=z0;Qc.createRoot=Th.createRoot,Qc.hydrateRoot=Th.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ma.apply(this,arguments)}var Pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pi||(Pi={}));const wh="popstate";function B0(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:c=""}=Nr(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Wu("",{pathname:a,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let c=r.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof s=="string"?s:fl(s))}function i(r,s){Fl(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return H0(e,n,i,t)}function _t(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function j0(){return Math.random().toString(36).substr(2,8)}function Ah(t,e){return{usr:t.state,key:t.key,idx:e}}function Wu(t,e,n,i){return n===void 0&&(n=null),Ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Nr(e):e,{state:n,key:e&&e.key||i||j0()})}function fl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Nr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function H0(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Pi.Pop,c=null,u=f();u==null&&(u=0,a.replaceState(Ma({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function h(){o=Pi.Pop;let m=f(),d=m==null?null:m-u;u=m,c&&c({action:o,location:x.location,delta:d})}function p(m,d){o=Pi.Push;let g=Wu(x.location,m,d);n&&n(g,m),u=f()+1;let v=Ah(g,u),S=x.createHref(g);try{a.pushState(v,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&c&&c({action:o,location:x.location,delta:1})}function _(m,d){o=Pi.Replace;let g=Wu(x.location,m,d);n&&n(g,m),u=f();let v=Ah(g,u),S=x.createHref(g);a.replaceState(v,"",S),s&&c&&c({action:o,location:x.location,delta:0})}function y(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:fl(m);return g=g.replace(/ $/,"%20"),_t(d,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,d)}let x={get action(){return o},get location(){return t(r,a)},listen(m){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(wh,h),c=m,()=>{r.removeEventListener(wh,h),c=null}},createHref(m){return e(r,m)},createURL:y,encodeLocation(m){let d=y(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:p,replace:_,go(m){return a.go(m)}};return x}var Nh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Nh||(Nh={}));function G0(t,e,n){return n===void 0&&(n="/"),V0(t,e,n)}function V0(t,e,n,i){let r=typeof e=="string"?Nr(e):e,s=Jd(r.pathname||"/",n);if(s==null)return null;let a=mv(t);W0(a);let o=null;for(let c=0;o==null&&c<a.length;++c){let u=iy(s);o=ey(a[c],u)}return o}function mv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(_t(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=Hi([i,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(_t(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mv(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Q0(u,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let c of gv(s.path))r(s,a,c)}),e}function gv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=gv(i.join("/")),o=[];return o.push(...a.map(c=>c===""?s:[s,c].join("/"))),r&&o.push(...a),o.map(c=>t.startsWith("/")&&c===""?"/":c)}function W0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:J0(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const X0=/^:[\w-]+$/,q0=3,Y0=2,$0=1,K0=10,Z0=-2,Rh=t=>t==="*";function Q0(t,e){let n=t.split("/"),i=n.length;return n.some(Rh)&&(i+=Z0),e&&(i+=Y0),n.filter(r=>!Rh(r)).reduce((r,s)=>r+(X0.test(s)?q0:s===""?$0:K0),i)}function J0(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function ey(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let c=i[o],u=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=ty({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),p=c.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Hi([s,h.pathname]),pathnameBase:ly(Hi([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=Hi([s,h.pathnameBase]))}return a}function ty(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ny(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,f,h)=>{let{paramName:p,isOptional:_}=f;if(p==="*"){let x=o[h]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=o[h];return _&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function ny(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,c)=>(i.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function iy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sy=t=>ry.test(t);function ay(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Nr(t):t,s;if(n)if(sy(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Fl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Ch(n.substring(1),"/"):s=Ch(n,e)}else s=e;return{pathname:s,search:cy(i),hash:uy(r)}}function Ch(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function yc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vv(t,e){let n=oy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function _v(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Nr(t):(r=Ma({},t),_t(!r.pathname||!r.pathname.includes("?"),yc("?","pathname","search",r)),_t(!r.pathname||!r.pathname.includes("#"),yc("#","pathname","hash",r)),_t(!r.search||!r.search.includes("#"),yc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),h-=1;r.pathname=p.join("/")}o=h>=0?e[h]:"/"}let c=ay(r,o),u=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Hi=t=>t.join("/").replace(/\/\/+/g,"/"),ly=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function dy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xv=["post","put","patch","delete"];new Set(xv);const fy=["get",...xv];new Set(fy);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ta.apply(this,arguments)}const ef=le.createContext(null),hy=le.createContext(null),Rr=le.createContext(null),Ol=le.createContext(null),Cr=le.createContext({outlet:null,matches:[],isDataRoute:!1}),yv=le.createContext(null);function py(t,e){let{relative:n}=e===void 0?{}:e;La()||_t(!1);let{basename:i,navigator:r}=le.useContext(Rr),{hash:s,pathname:a,search:o}=Ev(t,{relative:n}),c=a;return i!=="/"&&(c=a==="/"?i:Hi([i,a])),r.createHref({pathname:c,search:o,hash:s})}function La(){return le.useContext(Ol)!=null}function kl(){return La()||_t(!1),le.useContext(Ol).location}function Sv(t){le.useContext(Rr).static||le.useLayoutEffect(t)}function my(){let{isDataRoute:t}=le.useContext(Cr);return t?Ry():gy()}function gy(){La()||_t(!1);let t=le.useContext(ef),{basename:e,future:n,navigator:i}=le.useContext(Rr),{matches:r}=le.useContext(Cr),{pathname:s}=kl(),a=JSON.stringify(vv(r,n.v7_relativeSplatPath)),o=le.useRef(!1);return Sv(()=>{o.current=!0}),le.useCallback(function(u,f){if(f===void 0&&(f={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let h=_v(u,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Hi([e,h.pathname])),(f.replace?i.replace:i.push)(h,f.state,f)},[e,i,a,s,t])}function Ev(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=le.useContext(Rr),{matches:r}=le.useContext(Cr),{pathname:s}=kl(),a=JSON.stringify(vv(r,i.v7_relativeSplatPath));return le.useMemo(()=>_v(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function vy(t,e){return _y(t,e)}function _y(t,e,n,i){La()||_t(!1);let{navigator:r}=le.useContext(Rr),{matches:s}=le.useContext(Cr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=kl(),f;if(e){var h;let m=typeof e=="string"?Nr(e):e;c==="/"||(h=m.pathname)!=null&&h.startsWith(c)||_t(!1),f=m}else f=u;let p=f.pathname||"/",_=p;if(c!=="/"){let m=c.replace(/^\//,"").split("/");_="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=G0(t,{pathname:_}),x=My(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Hi([c,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:Hi([c,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?le.createElement(Ol.Provider,{value:{location:Ta({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Pi.Pop}},x):x}function xy(){let t=Ny(),e=dy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),n?le.createElement("pre",{style:r},n):null,null)}const yy=le.createElement(xy,null);class Sy extends le.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?le.createElement(Cr.Provider,{value:this.props.routeContext},le.createElement(yv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ey(t){let{routeContext:e,match:n,children:i}=t,r=le.useContext(ef);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),le.createElement(Cr.Provider,{value:e},i)}function My(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);f>=0||_t(!1),a=a.slice(0,Math.min(a.length,f+1))}let c=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let h=a[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=f),h.route.id){let{loaderData:p,errors:_}=n,y=h.route.loader&&p[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,h,p)=>{let _,y=!1,x=null,m=null;n&&(_=o&&h.route.id?o[h.route.id]:void 0,x=h.route.errorElement||yy,c&&(u<0&&p===0?(Cy("route-fallback"),y=!0,m=null):u===p&&(y=!0,m=h.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,p+1)),g=()=>{let v;return _?v=x:y?v=m:h.route.Component?v=le.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=f,le.createElement(Ey,{match:h,routeContext:{outlet:f,matches:d,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?le.createElement(Sy,{location:n.location,revalidation:n.revalidation,component:x,error:_,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var Mv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Mv||{}),Tv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Tv||{});function Ty(t){let e=le.useContext(ef);return e||_t(!1),e}function wy(t){let e=le.useContext(hy);return e||_t(!1),e}function Ay(t){let e=le.useContext(Cr);return e||_t(!1),e}function wv(t){let e=Ay(),n=e.matches[e.matches.length-1];return n.route.id||_t(!1),n.route.id}function Ny(){var t;let e=le.useContext(yv),n=wy(),i=wv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Ry(){let{router:t}=Ty(Mv.UseNavigateStable),e=wv(Tv.UseNavigateStable),n=le.useRef(!1);return Sv(()=>{n.current=!0}),le.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ta({fromRouteId:e},s)))},[t,e])}const bh={};function Cy(t,e,n){bh[t]||(bh[t]=!0)}function by(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ti(t){_t(!1)}function Py(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Pi.Pop,navigator:s,static:a=!1,future:o}=t;La()&&_t(!1);let c=e.replace(/^\/*/,"/"),u=le.useMemo(()=>({basename:c,navigator:s,static:a,future:Ta({v7_relativeSplatPath:!1},o)}),[c,o,s,a]);typeof i=="string"&&(i=Nr(i));let{pathname:f="/",search:h="",hash:p="",state:_=null,key:y="default"}=i,x=le.useMemo(()=>{let m=Jd(f,c);return m==null?null:{location:{pathname:m,search:h,hash:p,state:_,key:y},navigationType:r}},[c,f,h,p,_,y,r]);return x==null?null:le.createElement(Rr.Provider,{value:u},le.createElement(Ol.Provider,{children:n,value:x}))}function Ly(t){let{children:e,location:n}=t;return vy(Xu(e),n)}new Promise(()=>{});function Xu(t,e){e===void 0&&(e=[]);let n=[];return le.Children.forEach(t,(i,r)=>{if(!le.isValidElement(i))return;let s=[...e,r];if(i.type===le.Fragment){n.push.apply(n,Xu(i.props.children,s));return}i.type!==Ti&&_t(!1),!i.props.index||!i.props.children||_t(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Xu(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qu.apply(this,arguments)}function Dy(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Uy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Iy(t,e){return t.button===0&&(!e||e==="_self")&&!Uy(t)}const Fy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Oy="6";try{window.__reactRouterVersion=Oy}catch{}const ky="startTransition",Ph=R_[ky];function zy(t){let{basename:e,children:n,future:i,window:r}=t,s=le.useRef();s.current==null&&(s.current=B0({window:r,v5Compat:!0}));let a=s.current,[o,c]=le.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},f=le.useCallback(h=>{u&&Ph?Ph(()=>c(h)):c(h)},[c,u]);return le.useLayoutEffect(()=>a.listen(f),[a,f]),le.useEffect(()=>by(i),[i]),le.createElement(Py,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const By=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mi=le.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:c,to:u,preventScrollReset:f,viewTransition:h}=e,p=Dy(e,Fy),{basename:_}=le.useContext(Rr),y,x=!1;if(typeof u=="string"&&jy.test(u)&&(y=u,By))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=Jd(S.pathname,_);S.origin===v.origin&&C!=null?u=C+S.search+S.hash:x=!0}catch{}let m=py(u,{relative:r}),d=Hy(u,{replace:a,state:o,target:c,preventScrollReset:f,relative:r,viewTransition:h});function g(v){i&&i(v),v.defaultPrevented||d(v)}return le.createElement("a",qu({},p,{href:y||m,onClick:x||s?i:g,ref:n,target:c}))});var Lh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Lh||(Lh={}));var Dh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dh||(Dh={}));function Hy(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,c=my(),u=kl(),f=Ev(t,{relative:a});return le.useCallback(h=>{if(Iy(h,n)){h.preventDefault();let p=i!==void 0?i:fl(u)===fl(f);c(t,{replace:p,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,c,f,i,r,n,t,s,a,o])}function br({showPortfolioLink:t=!1}){const[e,n]=le.useState(!1);return le.useEffect(()=>{const i=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),l.jsx("nav",{className:`navbar ${e?"scrolled":""}`,children:l.jsxs("div",{className:"container",children:[l.jsx(mi,{className:"navbar-brand",to:"/",children:"Dhruv Shah"}),l.jsx("button",{className:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav",children:l.jsx("span",{className:"navbar-toggler-icon"})}),l.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:l.jsx("ul",{className:"navbar-nav ms-auto",children:t?l.jsx("li",{className:"nav-item",children:l.jsx(mi,{className:"nav-link",to:"/",children:"Portfolio"})}):l.jsxs(l.Fragment,{children:[l.jsx("li",{className:"nav-item",children:l.jsx("a",{className:"nav-link",href:"#home",children:"Home"})}),l.jsx("li",{className:"nav-item",children:l.jsx("a",{className:"nav-link",href:"#experience",children:"Experience"})}),l.jsx("li",{className:"nav-item",children:l.jsx("a",{className:"nav-link",href:"#projects",children:"Projects"})})]})})})]})})}function Gy(){le.useEffect(()=>{const e=r=>{const s=r.target.getAttribute("href");if(s&&s.startsWith("#")){r.preventDefault();const a=document.querySelector(s);a&&a.scrollIntoView({behavior:"smooth",block:"start"})}};document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",e)});const n={threshold:.1,rootMargin:"0px 0px -50px 0px"},i=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&(s.target.style.opacity="1",s.target.style.transform="translateY(0)")})},n);return document.querySelectorAll(".project-item").forEach(r=>{r.style.opacity="0",r.style.transform="translateY(20px)",r.style.transition="opacity 0.6s ease, transform 0.6s ease",i.observe(r)}),()=>{document.querySelectorAll('a[href^="#"]').forEach(r=>{r.removeEventListener("click",e)})}},[]);const t=[{id:"speech-trainer",title:"Speech Trainer",description:"A machine learning-based application that provides real-time feedback on presentation skills, analyzing posture, filler words, speaking pace, and confidence levels to help users improve their public speaking abilities.",icon:"fas fa-microphone",tags:["Machine Learning","Computer Vision","OpenCV","Python"],link:"/speech-trainer"},{id:"presto",title:"Presto",description:"An AI-powered restaurant customer service platform that revolutionizes ordering by creating intelligent agents that can process PDF menus, extract nutrition information, and provide personalized recommendations using Google Gemini AI.",icon:"fas fa-utensils",image:"/portfolio/logo.png",tags:["Next.js","AI/ML","Supabase","Vercel"],link:"/presto"},{id:"netra-ai",title:"Netra AI",description:"An AI-powered video stream security app that transforms space monitoring with instant event querying and real-time alerts, built for Cal Hacks 11.0 using computer vision and speech recognition.",icon:"fas fa-video",tags:["Python","Computer Vision","AI/ML","Reflex"],link:"/netra-ai"},{id:"smart-parking",title:"Smart Parking",description:"An innovative drone-based parking detection system that uses aerial imagery and OCR to identify available parking spots in real-time, helping reduce traffic congestion and parking-related stress in urban areas.",icon:"fas fa-car",tags:["Computer Vision","OCR","Flask","IoT"],link:"/smart-parking"},{id:"moods-metrics",title:"Moods and Metrics",description:"An AI-powered mental health analysis tool that uses audio, video, and transcription sentiment analysis to help users understand and visualize their emotional states in real-time.",icon:"fas fa-brain",tags:["React","Python","AI/ML","FastAPI"],link:"/moods-metrics"},{id:"pong-ai",title:"Pong Game with Neural Network AI",description:"A Pong implementation featuring an AI opponent trained via genetic algorithm. The AI learns through evolution, playing matches and improving over generations. Includes local gameplay, training system, and web deployment with real-time multiplayer.",icon:"fas fa-gamepad",tags:["Python","PyTorch","Genetic Algorithm","Flask","Pygame"],link:"/pong-ai"}];return l.jsxs(l.Fragment,{children:[l.jsx(br,{}),l.jsx("section",{id:"home",className:"hero",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{className:"fade-in-up",children:"Dhruv Shah"}),l.jsx("h2",{className:"fade-in-up delay-1",children:"UC Berkeley EECS"}),l.jsx("p",{className:"fade-in-up delay-2",children:"Hey everyone! I'm Dhruv, I like building full-stack applications and working with AI. Feel free to reach out to me."}),l.jsxs("div",{className:"hero-contact fade-in-up delay-3",children:[l.jsx("a",{href:"https://github.com/dpshah1",target:"_blank",rel:"noopener noreferrer",className:"contact-link","aria-label":"GitHub",children:l.jsx("i",{className:"fab fa-github"})}),l.jsx("a",{href:"https://www.linkedin.com/in/dhruv-shah-489668263",target:"_blank",rel:"noopener noreferrer",className:"contact-link","aria-label":"LinkedIn",children:l.jsx("i",{className:"fab fa-linkedin"})}),l.jsx("a",{href:"mailto:dhruvshah5@berkeley.edu",className:"contact-link","aria-label":"Email",children:l.jsx("i",{className:"fas fa-envelope"})})]}),l.jsxs("a",{href:"#projects",className:"cta-button fade-in-up delay-3",children:["View work",l.jsx("i",{className:"fas fa-arrow-right"})]})]})})}),l.jsx("section",{id:"experience",className:"experience",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title fade-in-up",children:"Experience"}),l.jsxs("div",{className:"experience-card fade-in-up delay-1",children:[l.jsxs("div",{className:"experience-header",children:[l.jsxs("div",{className:"experience-title",children:[l.jsx("h3",{children:"Product Manager"}),l.jsx("span",{className:"company",children:"Web Development at Berkeley (WDB)"})]}),l.jsxs("div",{className:"experience-meta",children:[l.jsx("span",{className:"location",children:"Berkeley, CA"}),l.jsx("span",{className:"duration",children:"Jan 2025 — Present"})]})]}),l.jsx("div",{className:"experience-content",children:l.jsxs("ul",{className:"experience-list",children:[l.jsx("li",{children:"Led a cross-functional team of 12 developers and designers to build ProductPals, a full-stack AI recommendation system for a startup client, managing the complete product lifecycle from initial requirements gathering to production deployment."}),l.jsx("li",{children:"Built an AI-powered tool recommendation engine using RAG architecture with Pinecone vector database, DynamoDB, S3, and Next.js that analyzes team workflows to suggest optimal productivity tools, reducing software evaluation time for teams."})]})})]}),l.jsxs("div",{className:"experience-card fade-in-up delay-1",children:[l.jsxs("div",{className:"experience-header",children:[l.jsxs("div",{className:"experience-title",children:[l.jsx("h3",{children:"Computer Vision & Cloud Infrastructure Intern"}),l.jsx("span",{className:"company",children:"Anchor Logics"})]}),l.jsxs("div",{className:"experience-meta",children:[l.jsx("span",{className:"location",children:"Berkeley, CA"}),l.jsx("span",{className:"duration",children:"May 2025 — September 2025"})]})]}),l.jsx("div",{className:"experience-content",children:l.jsxs("ul",{className:"experience-list",children:[l.jsx("li",{children:"Developing gait analysis pipeline using OpenPose, YOLOv12, DeepSORT, and OpenCV to extract stride length, cadence, and gait speed metrics."}),l.jsx("li",{children:"Architected AWS infrastructure (EC2, S3) for automated video processing and data storage."}),l.jsx("li",{children:"Built web platform with React and FastAPI enabling patients to upload videos and receive automated gait analysis results."})]})})]})]})}),l.jsx("section",{id:"projects",className:"projects",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title",children:"Projects"}),l.jsx("div",{className:"projects-list",children:t.map(e=>l.jsxs(mi,{to:e.link,className:"project-item",children:[l.jsx("div",{className:"project-icon",children:e.image?l.jsx("img",{src:e.image,alt:e.title}):l.jsx("i",{className:e.icon})}),l.jsxs("div",{className:"project-content",children:[l.jsx("h3",{className:"project-title",children:e.title}),l.jsx("p",{className:"project-description",children:e.description}),l.jsx("div",{className:"project-tags",children:e.tags.map((n,i)=>l.jsx("span",{className:"project-tag",children:n},i))})]}),l.jsx("div",{className:"project-arrow",children:l.jsx("i",{className:"fas fa-chevron-right"})})]},e.id))})]})}),l.jsx("footer",{className:"footer",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"social-links",children:[l.jsx("a",{href:"https://github.com/dpshah1",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:l.jsx("i",{className:"fab fa-github"})}),l.jsx("a",{href:"https://www.linkedin.com/in/dhruv-shah-489668263",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:l.jsx("i",{className:"fab fa-linkedin"})}),l.jsx("a",{href:"mailto:dhruvshah5@berkeley.edu",className:"social-link",children:l.jsx("i",{className:"fas fa-envelope"})})]}),l.jsx("p",{children:"© 2024 Dhruv Shah"})]})})]})}function Vy(){return le.useEffect(()=>{const t=()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),l.jsxs(l.Fragment,{children:[l.jsx(br,{showPortfolioLink:!0}),l.jsx("section",{className:"project-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"project-icon",children:l.jsx("i",{className:"fas fa-car"})}),l.jsx("h1",{children:"Smart Parking"}),l.jsx("p",{className:"subtitle",children:"Drone-Based Intelligent Parking Detection System"}),l.jsxs(mi,{to:"/",className:"back-button",children:[l.jsx("i",{className:"fas fa-arrow-left"}),"Back to Portfolio"]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-exclamation-triangle section-icon"}),"The Problem"]}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"17"}),l.jsx("div",{className:"stat-label",children:"Hours per year spent looking for parking"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"$1,000"}),l.jsx("div",{className:"stat-label",children:"Average annual cost per driver"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"63%"}),l.jsx("div",{className:"stat-label",children:"Drivers avoid destinations due to parking"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"30%"}),l.jsx("div",{className:"stat-label",children:"Traffic caused by parking searches"})]})]}),l.jsx("p",{className:"content-text",children:"Parking challenges have become a significant urban problem affecting millions of drivers daily. A comprehensive study from INRIX collected data from 6,000 drivers across the 10 largest cities in the US, revealing the staggering impact of parking inefficiencies on our daily lives."}),l.jsxs("div",{className:"problem-solution-grid",children:[l.jsxs("div",{className:"problem-card",children:[l.jsx("h3",{className:"card-title",children:"Economic Impact"}),l.jsx("p",{className:"content-text",children:"Drivers spend up to $2,000 annually in fuel costs in major cities, with the average driver spending $1,000 per year just looking for parking spots."})]}),l.jsxs("div",{className:"problem-card",children:[l.jsx("h3",{className:"card-title",children:"Environmental Impact"}),l.jsx("p",{className:"content-text",children:"Parking searches generate approximately 730 million vehicle miles traveled annually, creating 47,000 tons of carbon dioxide emissions."})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-search section-icon"}),"Current Solutions"]}),l.jsx("p",{className:"content-text",children:"Some parking garages have sensors over each parking stall to detect availability. However, this approach has high installation and maintenance costs, making it impractical and cost-prohibitive for street parking applications."}),l.jsx("div",{className:"image-gallery",children:l.jsxs("div",{className:"gallery-item",children:[l.jsx("img",{src:"/portfolio/current_solution.png",alt:"Current parking sensor solution",className:"gallery-image"}),l.jsx("div",{className:"gallery-caption",children:"Traditional parking stall sensors - expensive and limited to garages"})]})})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-lightbulb section-icon"}),"Our Solution"]}),l.jsx("p",{className:"content-text",children:"Smart Parking is an innovative drone-based system that takes aerial pictures of city blocks and processes them to identify available parking stalls in real-time. Users can then use a mobile app to find parking near their desired location or reserve parking ahead of time."}),l.jsxs("div",{className:"implementation-steps",children:[l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Unique Identifiers"}),l.jsx("div",{className:"step-description",children:"Each parking stall is assigned a unique identifier (UID) - either a numeric code, QR code, or barcode."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Aerial Imaging"}),l.jsx("div",{className:"step-description",children:"Drones capture aerial images of parking areas at regular intervals."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Image Processing"}),l.jsx("div",{className:"step-description",children:"OCR algorithms identify visible UIDs to determine parking availability."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"4"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Mobile App"}),l.jsx("div",{className:"step-description",children:"Users access real-time parking availability and can reserve spots through a mobile application."})]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-cogs section-icon"}),"Implementation"]}),l.jsxs("div",{className:"technologies-grid",children:[l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-cube tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Prototype Model:"})," 20 parking stalls on a city block"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-camera tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Webcam System:"})," Simulates drone aerial imaging"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-eye tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"OCR Technology:"})," Optical Character Recognition for UID detection"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-globe tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Flask Web App:"})," Admin interface for system management"]})]})]}),l.jsxs("div",{className:"image-gallery",children:[l.jsxs("div",{className:"gallery-item",children:[l.jsx("img",{src:"/portfolio/smart-parking-flowchart.png",alt:"Smart Parking System Architecture",className:"gallery-image"}),l.jsx("div",{className:"gallery-caption",children:"System architecture showing the complete flow from image capture to availability display"})]}),l.jsxs("div",{className:"gallery-item",children:[l.jsx("img",{src:"/portfolio/img1.jpg",alt:"Webcam setup for parking detection",className:"gallery-image"}),l.jsx("div",{className:"gallery-caption",children:"Lenovo webcam mounted on a sliding wooden beam to simulate drone movement"})]}),l.jsxs("div",{className:"gallery-item",children:[l.jsx("img",{src:"/portfolio/img2.jpg",alt:"Tabletop parking model",className:"gallery-image"}),l.jsx("div",{className:"gallery-caption",children:"Tabletop model with 20 parking stalls, each with unique two-digit identifiers"})]}),l.jsxs("div",{className:"gallery-item",children:[l.jsx("img",{src:"/portfolio/map.png",alt:"Parking availability map",className:"gallery-image"}),l.jsx("div",{className:"gallery-caption",children:"Admin interface showing real-time parking availability map after image processing"})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-exclamation-circle section-icon"}),"Limitations & Challenges"]}),l.jsxs("div",{className:"limitations",children:[l.jsxs("div",{className:"limitation-item",children:[l.jsx("i",{className:"fas fa-car limitation-icon"}),l.jsx("div",{className:"limitation-text",children:"Cars with numbers on the roof can deceive the system into thinking that number is an open parking stall."})]}),l.jsxs("div",{className:"limitation-item",children:[l.jsx("i",{className:"fas fa-user limitation-icon"}),l.jsx("div",{className:"limitation-text",children:"People can take others' reserved parking spots without consequences."})]}),l.jsxs("div",{className:"limitation-item",children:[l.jsx("i",{className:"fas fa-clock limitation-icon"}),l.jsx("div",{className:"limitation-text",children:"Pre-programmed drone routes may cause delays in updating availability data for specific areas."})]}),l.jsxs("div",{className:"limitation-item",children:[l.jsx("i",{className:"fas fa-snowflake limitation-icon"}),l.jsx("div",{className:"limitation-text",children:"Identifiers can be covered by snow or damaged, affecting system reliability."})]})]}),l.jsxs("div",{className:"image-gallery",children:[l.jsxs("div",{className:"gallery-item",children:[l.jsx("img",{src:"/portfolio/car-with-number.png",alt:"Car with number on roof",className:"gallery-image"}),l.jsx("div",{className:"gallery-caption",children:"Example of how cars with numbers on the roof could confuse the system"})]}),l.jsxs("div",{className:"gallery-item",children:[l.jsx("img",{src:"/portfolio/car-with-snow.png",alt:"Car covered in snow",className:"gallery-image"}),l.jsx("div",{className:"gallery-caption",children:"Weather conditions like snow can obscure parking identifiers"})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"achievement",children:[l.jsx("div",{className:"achievement-icon",children:l.jsx("i",{className:"fas fa-trophy"})}),l.jsx("div",{className:"achievement-title",children:"Science Fair Recognition"}),l.jsx("div",{className:"achievement-description",children:"Successfully participated in the Alameda County Science and Engineering Fair (ACSEF) with this innovative parking solution project."})]})})})]})}function Wy(){return le.useEffect(()=>{const t=()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),l.jsxs(l.Fragment,{children:[l.jsx(br,{showPortfolioLink:!0}),l.jsx("section",{className:"project-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"project-icon",children:l.jsx("i",{className:"fas fa-microphone"})}),l.jsx("h1",{children:"Speech Trainer"}),l.jsx("p",{className:"subtitle",children:"AI-Powered Presentation Skills Enhancement Platform"}),l.jsxs(mi,{to:"/",className:"back-button",children:[l.jsx("i",{className:"fas fa-arrow-left"}),"Back to Portfolio"]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-exclamation-triangle section-icon"}),"The Problem"]}),l.jsxs("div",{className:"problem-solution-grid",children:[l.jsxs("div",{className:"problem-card",children:[l.jsx("h3",{className:"card-title",children:"Public Speaking Anxiety"}),l.jsx("p",{className:"content-text",children:"Public speaking is a fear that about 74% of people share. However, public speaking has a tremendous impact on our lives. People who are better speakers are generally more successful and have happier lives."}),l.jsxs("p",{className:"content-text",children:["The challenge is: ",l.jsx("strong",{children:"How can a computer analyze the quality of a speech automatically?"})]})]}),l.jsxs("div",{className:"solution-card",children:[l.jsx("h3",{className:"card-title",children:"Our Solution"}),l.jsx("p",{className:"content-text",children:"Speech Trainer is a machine learning-based software application that provides users with comprehensive feedback scores to improve their presentation skills."}),l.jsx("p",{className:"content-text",children:"By analyzing six key presentation qualities, we help users develop confidence and effectiveness in public speaking."})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-lightbulb section-icon"}),"Solution Overview"]}),l.jsx("p",{className:"content-text",children:"I researched several TED talk videos and noticed that verbal delivery and body language are very important to make a presentation effective. From this research, I identified six key presentation qualities that significantly impact speech effectiveness:"}),l.jsxs("div",{className:"technologies-grid",children:[l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-user tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Posture:"})," Facial landmark tracking"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-comment tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Filler Words:"}),' "um", "like", "basically" detection']})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-tachometer-alt tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Talking Speed:"})," Words per minute analysis"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-volume-up tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Clarity:"})," Word pronunciation assessment"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-pause tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Pause Quality:"})," Length and frequency analysis"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-star tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Confidence:"})," Overall presentation scoring"]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-cogs section-icon"}),"Implementation"]}),l.jsxs("div",{className:"implementation-steps",children:[l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Research & Analysis"}),l.jsx("div",{className:"step-description",children:"Identified six presentation qualities and wrote Python functions to evaluate any user video on these metrics."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Data Collection"}),l.jsx("div",{className:"step-description",children:"Collected 30-second clips from TED talks and other prominent speakers to train the machine learning model."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Model Development"}),l.jsx("div",{className:"step-description",children:"Created a machine learning model that predicts presentation quality scores for any headshot video."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"4"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Web Application"}),l.jsx("div",{className:"step-description",children:"Built a website that evaluates and scores user videos on the six presentation qualities in real-time."})]})]})]}),l.jsxs("div",{className:"project-image",children:[l.jsx("img",{src:"/portfolio/speech-trainer-flowchart.png",alt:"Speech Trainer Project Architecture"}),l.jsx("p",{className:"image-caption",children:"System architecture showing the flow from video input to scoring output"})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-tools section-icon"}),"Technologies Used"]}),l.jsxs("div",{className:"technologies-grid",children:[l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-eye tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"OpenCV:"})," Facial landmark detection and computer vision"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-database tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"PostgreSQL:"})," Data storage and management"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-table tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Pandas:"})," Data manipulation and analysis"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-brain tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Scikit-learn:"})," Machine learning algorithms"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-plug tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Psycopg2:"})," PostgreSQL connection library"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-book tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Jupyter Notebook:"})," Interactive data analysis"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-chart-bar tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Seaborn:"})," Data visualization and graphing"]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"achievement",children:[l.jsx("div",{className:"achievement-icon",children:l.jsx("i",{className:"fas fa-trophy"})}),l.jsx("div",{className:"achievement-title",children:"Science Fair Success"}),l.jsxs("div",{className:"achievement-description",children:["Participated in the Alameda County Science and Engineering Fair (ACSEF) and won ",l.jsx("strong",{children:"Second Place"})," for this innovative project."]})]})})})]})}function Xy(){return le.useEffect(()=>{const t=()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),l.jsxs(l.Fragment,{children:[l.jsx(br,{showPortfolioLink:!0}),l.jsx("section",{className:"project-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"project-icon",children:l.jsx("i",{className:"fas fa-utensils"})}),l.jsx("h1",{children:"Presto"}),l.jsx("p",{className:"subtitle",children:"AI-Powered Restaurant Customer Service Platform"}),l.jsxs("div",{className:"project-links",children:[l.jsxs("a",{href:"https://drive-thru-ai.vercel.app",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fas fa-external-link-alt"}),"Live Demo"]}),l.jsxs("a",{href:"https://github.com/dpshah1/drive-thru-ai",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fab fa-github"}),"GitHub"]})]}),l.jsxs(mi,{to:"/",className:"back-button",children:[l.jsx("i",{className:"fas fa-arrow-left"}),"Back to Portfolio"]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-exclamation-triangle section-icon"}),"The Problem"]}),l.jsx("p",{className:"content-text",children:"Traditional restaurant customer service faces significant challenges in the digital age. Manual menu processing, limited accessibility to nutrition information, and the inability to provide personalized recommendations create friction in the ordering experience. Restaurants need a modern solution that can automate menu processing and provide intelligent customer service."}),l.jsxs("div",{className:"problem-solution-grid",children:[l.jsxs("div",{className:"problem-card",children:[l.jsx("h3",{className:"card-title",children:"Manual Menu Processing"}),l.jsx("p",{className:"content-text",children:"Restaurants struggle with manually digitizing PDF menus, which is time-consuming and error-prone. This creates delays in updating menu information and makes it difficult to provide accurate, up-to-date information to customers."})]}),l.jsxs("div",{className:"solution-card",children:[l.jsx("h3",{className:"card-title",children:"AI-Powered Solution"}),l.jsx("p",{className:"content-text",children:"Presto revolutionizes this process by using Google Gemini AI to automatically extract menu items, prices, nutrition facts, and allergen information from PDF menus, creating intelligent customer service agents for each restaurant."})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-star section-icon"}),"Key Features"]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-store"})}),l.jsx("div",{className:"feature-title",children:"Restaurant Management"}),l.jsx("div",{className:"feature-description",children:"Create and manage restaurant profiles with location and comprehensive menu information"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-file-pdf"})}),l.jsx("div",{className:"feature-title",children:"PDF Menu Processing"}),l.jsx("div",{className:"feature-description",children:"Upload PDF menus and automatically extract menu items using Google Gemini AI"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-robot"})}),l.jsx("div",{className:"feature-title",children:"AI Customer Service"}),l.jsx("div",{className:"feature-description",children:"Generate intelligent customer service agents that handle orders and answer questions"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-apple-alt"})}),l.jsx("div",{className:"feature-title",children:"Nutrition Information"}),l.jsx("div",{className:"feature-description",children:"Extract and store detailed nutrition facts, ingredients, and allergen information"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-lightbulb"})}),l.jsx("div",{className:"feature-title",children:"Smart Recommendations"}),l.jsx("div",{className:"feature-description",children:"AI agents provide personalized recommendations based on dietary restrictions"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-mobile-alt"})}),l.jsx("div",{className:"feature-title",children:"Responsive Design"}),l.jsx("div",{className:"feature-description",children:"Modern, mobile-friendly interface optimized for all devices and screen sizes"})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-cogs section-icon"}),"How It Works"]}),l.jsxs("div",{className:"implementation-steps",children:[l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Restaurant Creation"}),l.jsx("div",{className:"step-description",children:"Restaurants create profiles through the add-store interface, entering name, location, and uploading PDF menu files. Multiple PDFs can be combined for comprehensive processing."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"PDF Processing Pipeline"}),l.jsx("div",{className:"step-description",children:"PDFs are uploaded to the server, analyzed by Google Gemini AI, and menu items, prices, nutrition facts, and ingredients are automatically extracted and stored in Supabase."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"AI Customer Service Generation"}),l.jsx("div",{className:"step-description",children:"Each restaurant gets its own AI customer service agent that can answer questions about menu items, ingredients, allergens, and provide personalized recommendations."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"4"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Customer Interaction"}),l.jsx("div",{className:"step-description",children:"Customers can browse menus, ask questions about ingredients and allergens, get personalized recommendations, and place orders through the AI agent."})]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-sitemap section-icon"}),"Technical Architecture"]}),l.jsxs("div",{className:"technologies-grid",children:[l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-code tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Frontend - Next.js 15:"})," React framework with App Router, Tailwind CSS for styling"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-server tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Backend - Next.js API Routes:"})," Serverless API endpoints for file uploads and processing"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-brain tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"AI Processing - Google Gemini AI:"})," Advanced AI model for PDF processing"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-database tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Database - Supabase:"})," PostgreSQL database with real-time capabilities"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-cloud tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Deployment - Vercel:"})," Fully optimized for Vercel deployment"]})]})]})]})})]})}function qy(){return le.useEffect(()=>{const t=()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),l.jsxs(l.Fragment,{children:[l.jsx(br,{showPortfolioLink:!0}),l.jsx("section",{className:"project-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"project-icon",children:l.jsx("i",{className:"fas fa-video"})}),l.jsx("h1",{children:"Netra AI"}),l.jsx("p",{className:"subtitle",children:"AI-Powered Video Stream Security Application"}),l.jsxs("div",{className:"project-links",children:[l.jsxs("a",{href:"https://devpost.com/software/netra-ai",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fas fa-external-link-alt"}),"Devpost"]}),l.jsxs("a",{href:"https://github.com/Vaddala06/calhacks",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fab fa-github"}),"GitHub"]})]}),l.jsxs(mi,{to:"/",className:"back-button",children:[l.jsx("i",{className:"fas fa-arrow-left"}),"Back to Portfolio"]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-exclamation-triangle section-icon"}),"The Problem"]}),l.jsx("p",{className:"content-text",children:"Traditional video surveillance systems require manual review of hours of footage to find specific events, making them inefficient and time-consuming. When incidents occur, users often need to sift through extensive video recordings to understand what happened, which is both frustrating and impractical."}),l.jsxs("div",{className:"problem-solution-grid",children:[l.jsxs("div",{className:"problem-card",children:[l.jsx("h3",{className:"card-title",children:"Manual Video Review"}),l.jsx("p",{className:"content-text",children:"Users often need to manually review hours of surveillance footage to find specific events, which is time-consuming and inefficient. This was the exact challenge faced when someone stole something in front of a family member's house."})]}),l.jsxs("div",{className:"solution-card",children:[l.jsx("h3",{className:"card-title",children:"AI-Powered Solution"}),l.jsx("p",{className:"content-text",children:"Netra AI transforms video monitoring with instant event querying and real-time alerts. Users can ask natural language questions about events and receive immediate, detailed responses."})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-star section-icon"}),"Key Features"]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-search"})}),l.jsx("div",{className:"feature-title",children:"Instant Event Querying"}),l.jsx("div",{className:"feature-description",children:"Ask natural language questions about events in your video feed and get immediate answers"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-bell"})}),l.jsx("div",{className:"feature-title",children:"Real-Time Alerts"}),l.jsx("div",{className:"feature-description",children:"Receive instant notifications with detailed descriptions of important events as they happen"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-microphone"})}),l.jsx("div",{className:"feature-title",children:"Speech Recognition"}),l.jsx("div",{className:"feature-description",children:"Voice-to-text functionality for easy communication with the system, making it accessible for all users"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-eye"})}),l.jsx("div",{className:"feature-title",children:"Motion Detection"}),l.jsx("div",{className:"feature-description",children:"Automatic detection and recording of motion events with configurable sensitivity settings"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-brain"})}),l.jsx("div",{className:"feature-title",children:"AI Analysis"}),l.jsx("div",{className:"feature-description",children:"Advanced AI processing using Google Gemini to analyze video content and extract meaningful insights"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-database"})}),l.jsx("div",{className:"feature-title",children:"Smart Storage"}),l.jsx("div",{className:"feature-description",children:"Efficient storage and retrieval of alert messages using ChromaDB for quick access to historical data"})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-cogs section-icon"}),"How It Works"]}),l.jsxs("div",{className:"implementation-steps",children:[l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Video Processing"}),l.jsx("div",{className:"step-description",children:"The system continuously monitors video streams using OpenCV for motion detection and records 5-second clips when activity is detected."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"AI Analysis"}),l.jsx("div",{className:"step-description",children:"Google Gemini AI analyzes the video content to understand what's happening and generates detailed descriptions of events."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Natural Language Queries"}),l.jsx("div",{className:"step-description",children:'Users can ask questions like "Did someone come to my house?" and receive instant, accurate responses based on the analyzed video data.'})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"4"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Real-Time Alerts"}),l.jsx("div",{className:"step-description",children:"Important events trigger immediate alerts with detailed descriptions, keeping users informed of significant activities in real-time."})]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-tools section-icon"}),"Technologies Used"]}),l.jsxs("div",{className:"technologies-grid",children:[l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fab fa-python tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Python:"})," Core programming language for the application"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-brain tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Google Gemini:"})," AI model for video analysis and content understanding"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-eye tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"OpenCV:"})," Computer vision library for motion detection and video processing"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-microphone tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"DeepGram:"})," Speech-to-text functionality for voice interactions"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-database tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"ChromaDB:"})," Vector database for storing and retrieving alert messages"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-code tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Reflex:"})," Full-stack framework for frontend and backend development"]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-rocket section-icon"}),"Future Plans"]}),l.jsxs("div",{className:"future-plans",children:[l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-mobile-alt plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Real-Time Text Alerts:"}),' Send detailed event descriptions via text messages, such as "Your daughter has arrived home" or "There is a fire outside your home."']})]}),l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-globe plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Enhanced AI Training:"})," Train the AI model on video data from different countries and diverse populations for better global applicability."]})]}),l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-shield-alt plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Improved Security:"})," Implement Multi-Factor Authentication and encryption to enhance privacy and security of user data."]})]})]})]})})]})}function Yy(){return le.useEffect(()=>{const t=()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),l.jsxs(l.Fragment,{children:[l.jsx(br,{showPortfolioLink:!0}),l.jsx("section",{className:"project-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"project-icon",children:l.jsx("i",{className:"fas fa-brain"})}),l.jsx("h1",{children:"Moods and Metrics"}),l.jsx("p",{className:"subtitle",children:"AI-Powered Mental Health Analysis Tool"}),l.jsx("div",{className:"award-badge",children:"🏆 Winner - Otsuka Valuenex Award at TreeHacks 2025"}),l.jsxs("div",{className:"project-links",children:[l.jsxs("a",{href:"https://devpost.com/software/moodmap-ai",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fas fa-external-link-alt"}),"Devpost"]}),l.jsxs("a",{href:"https://github.com/corey-shen/stress-level-audio-analysis",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fab fa-github"}),"GitHub"]})]}),l.jsxs(mi,{to:"/",className:"back-button",children:[l.jsx("i",{className:"fas fa-arrow-left"}),"Back to Portfolio"]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-exclamation-triangle section-icon"}),"The Problem"]}),l.jsx("p",{className:"content-text",children:"In today's world, stress and anxiety are increasingly prevalent, yet many people struggle to understand and quantify their emotional states. Traditional mental health monitoring often relies on subjective self-reporting, making it difficult to get accurate, real-time insights into one's emotional well-being."}),l.jsxs("div",{className:"problem-solution-grid",children:[l.jsxs("div",{className:"problem-card",children:[l.jsx("h3",{className:"card-title",children:"Limited Self-Awareness"}),l.jsx("p",{className:"content-text",children:"People often struggle to accurately assess their own emotional states and stress levels, leading to poor mental health management and delayed intervention when needed."})]}),l.jsxs("div",{className:"solution-card",children:[l.jsx("h3",{className:"card-title",children:"AI-Powered Analysis"}),l.jsx("p",{className:"content-text",children:"Moods and Metrics provides objective, multi-modal analysis of emotional states through audio, video, and transcription sentiment analysis, helping users gain deeper insights into their mental well-being."})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-star section-icon"}),"Analysis Modalities"]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-microphone"})}),l.jsx("div",{className:"feature-title",children:"Audio Analysis"}),l.jsx("div",{className:"feature-description",children:"Utilizes a fine-tuned wav2vec2 transformer to capture arousal, valence, and dominance values, mapping them to stress scores through advanced sentiment analysis"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-video"})}),l.jsx("div",{className:"feature-title",children:"Video Analysis"}),l.jsx("div",{className:"feature-description",children:"Sends video clips to Google Gemini AI for facial expression analysis, evaluating calm/stress levels with detailed reasoning"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-file-alt"})}),l.jsx("div",{className:"feature-title",children:"Transcription Analysis"}),l.jsx("div",{className:"feature-description",children:"Performs sentiment analysis on video transcription data, providing comprehensive emotional insights through text analysis"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-chart-line"})}),l.jsx("div",{className:"feature-title",children:"2D & 3D Visualization"}),l.jsx("div",{className:"feature-description",children:"Interactive data visualization using three.js to map valence, dominance, and arousal in both 2D and 3D formats"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-brain"})}),l.jsx("div",{className:"feature-title",children:"AI-Driven Insights"}),l.jsx("div",{className:"feature-description",children:"Advanced AI models provide real-time emotional analysis and personalized insights for better mental health understanding"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-mobile-alt"})}),l.jsx("div",{className:"feature-title",children:"User-Friendly Interface"}),l.jsx("div",{className:"feature-description",children:"Clean React frontend with intuitive UI design, making complex emotional analysis accessible to everyone"})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-cogs section-icon"}),"How It Works"]}),l.jsxs("div",{className:"implementation-steps",children:[l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Multi-Modal Input"}),l.jsx("div",{className:"step-description",children:"Users can provide audio recordings, video clips, or text transcriptions for analysis, allowing flexibility in how they want to assess their emotional state."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"AI Processing"}),l.jsx("div",{className:"step-description",children:"Advanced AI models (wav2vec2 for audio, Gemini for video/text) analyze the input to extract emotional indicators like arousal, valence, and dominance."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Emotional Mapping"}),l.jsx("div",{className:"step-description",children:"Using a tri-dimensional model of core affect, the system maps emotional data to comprehensive stress scores and emotional states."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"4"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Interactive Visualization"}),l.jsx("div",{className:"step-description",children:"Results are presented through interactive 2D and 3D visualizations, helping users understand their emotional patterns and trends over time."})]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-tools section-icon"}),"Technologies Used"]}),l.jsxs("div",{className:"technologies-grid",children:[l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fab fa-react tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"React:"})," Frontend framework for interactive UI components"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fab fa-python tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Python:"})," Backend development and AI model integration"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-brain tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Hugging Face:"})," Fine-tuned wav2vec2 transformer for audio analysis"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-cogs tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"PyTorch:"})," Deep learning framework for model training and inference"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-cloud tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"FastAPI:"})," High-performance backend API framework"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-chart-bar tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Three.js:"})," 3D visualization library for interactive emotion mapping"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-palette tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Tailwind CSS:"})," Utility-first CSS framework for modern styling"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-chart-line tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"D3.js:"})," Data visualization library for 2D charts and graphs"]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-rocket section-icon"}),"Future Plans"]}),l.jsxs("div",{className:"future-plans",children:[l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-heartbeat plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Enhanced AI Models:"})," Integrate additional modalities such as heartbeat monitoring, EKG signals, and other biometric data for more comprehensive emotional analysis."]})]}),l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-microphone plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Custom Model Training:"})," Collect and train models on breathing audio to stress score data for more accurate local emotional tracking."]})]}),l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-video plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Real-Time Analysis:"})," Implement live video analysis without requiring pre-recorded clips for immediate emotional feedback."]})]}),l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-lightbulb plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Personalized Recommendations:"})," Add AI-powered stress relief suggestions and personalized wellness recommendations based on emotional patterns."]})]}),l.jsxs("div",{className:"plan-item",children:[l.jsx("i",{className:"fas fa-mobile-alt plan-icon"}),l.jsxs("div",{className:"plan-text",children:[l.jsx("strong",{children:"Mobile Application:"})," Develop a mobile version for on-the-go emotional tracking with fully local processing capabilities."]})]})]})]})})]})}function $y(){return le.useEffect(()=>{const t=()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(15, 23, 42, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.3)"):(e.style.background="rgba(15, 23, 42, 0.95)",e.style.boxShadow="none")};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),l.jsxs(l.Fragment,{children:[l.jsx(br,{showPortfolioLink:!0}),l.jsx("section",{className:"project-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"project-icon",children:l.jsx("i",{className:"fas fa-gamepad"})}),l.jsx("h1",{children:"Pong Game with Neural Network AI"}),l.jsx("p",{className:"subtitle",children:"Evolution-Based AI Training System"}),l.jsxs("div",{className:"project-links",children:[l.jsxs("a",{href:"https://neural-net-pong-ai.onrender.com",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fas fa-external-link-alt"}),"Live Demo"]}),l.jsxs("a",{href:"https://github.com/dpshah1/neural-net-pong-ai",target:"_blank",rel:"noopener noreferrer",className:"project-link",children:[l.jsx("i",{className:"fab fa-github"}),"GitHub"]})]}),l.jsxs(mi,{to:"/",className:"back-button",children:[l.jsx("i",{className:"fas fa-arrow-left"}),"Back to Portfolio"]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-info-circle section-icon"}),"Overview"]}),l.jsx("p",{className:"content-text",children:"A complete Pong implementation featuring an AI opponent trained via genetic algorithm. The AI learns through evolution, playing matches and improving over generations without any labeled data. Includes local gameplay, AI training system, and web deployment with real-time multiplayer support."})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-cogs section-icon"}),"Architecture"]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-gamepad"})}),l.jsx("div",{className:"feature-title",children:"Core Game Engine"}),l.jsx("div",{className:"feature-description",children:"Three game modes: two-player classic Pong, headless AI-compatible engine for training, and human vs AI gameplay. Features 60 FPS with angle-based ball physics and dynamic speed multiplier (increases after each hit, max 3x)."})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-brain"})}),l.jsx("div",{className:"feature-title",children:"Neural Network"}),l.jsx("div",{className:"feature-description",children:"PongNet architecture with 10 normalized input features, two hidden layers (64→64 neurons), and continuous action output [-1, 1]. Features state mirroring for both paddle sides and speed-invariant learning through normalized inputs."})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-dna"})}),l.jsx("div",{className:"feature-title",children:"Genetic Algorithm"}),l.jsx("div",{className:"feature-description",children:"Population of 50 neural networks evolving through elite selection, tournament selection, uniform crossover (70% rate), and adaptive mutation. Maintains Hall of Fame with top 50 models ever seen for stronger opponents."})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-graduation-cap"})}),l.jsx("div",{className:"feature-title",children:"Curriculum Learning"}),l.jsx("div",{className:"feature-description",children:"Progressive difficulty: Generations 1-20 play mostly against teacher, 21-50 mix teacher and population, 51+ focus on population and Hall of Fame matches for advanced learning."})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-chart-line section-icon"}),"Fitness Function"]}),l.jsx("p",{className:"content-text",children:"Multi-component fitness function that encourages active, strategic play while discouraging passive strategies. The system rewards scoring, hitting, and returning while penalizing missed balls, idle behavior, and edge camping."}),l.jsxs("div",{className:"problem-solution-grid",children:[l.jsxs("div",{className:"solution-card",children:[l.jsx("h3",{className:"card-title",children:"Rewards"}),l.jsxs("ul",{className:"content-list",children:[l.jsx("li",{children:"+75 per point scored"}),l.jsx("li",{children:"+20 per ball hit"}),l.jsx("li",{children:"+30 per successful return"})]})]}),l.jsxs("div",{className:"problem-card",children:[l.jsx("h3",{className:"card-title",children:"Penalties"}),l.jsxs("ul",{className:"content-list",children:[l.jsx("li",{children:"-150 per missed ball"}),l.jsx("li",{children:"-0.1 per idle frame"}),l.jsx("li",{children:"-100 × mean distance when ball approaching"}),l.jsx("li",{children:"-300 if never hits ball"}),l.jsx("li",{children:"-200 × low movement variance"})]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-sitemap section-icon"}),"Technical Architecture"]}),l.jsxs("div",{className:"technologies-grid",children:[l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-gamepad tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Game Engine - Pygame:"})," Classic Pong implementation with angle-based physics and dynamic speed scaling"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-brain tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Neural Networks - PyTorch:"})," Deep learning models with 10 input features and continuous action output"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-dna tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Evolution - Genetic Algorithm:"})," Population-based training with elite selection, crossover, and adaptive mutation"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-server tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Backend - Flask:"})," Web server with Flask-SocketIO for real-time WebSocket communication"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-globe tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Frontend - HTML5 Canvas:"})," Real-time game rendering with 60 FPS fixed timestep"]})]}),l.jsxs("div",{className:"tech-item",children:[l.jsx("i",{className:"fas fa-cloud tech-icon"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Deployment - Render.com:"})," Production-ready web deployment with headless mode support"]})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-star section-icon"}),"Key Features"]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-dna"})}),l.jsx("div",{className:"feature-title",children:"Evolution-Based Learning"}),l.jsx("div",{className:"feature-description",children:"No labeled data required. AI learns through self-play and genetic evolution, developing strategies naturally over generations."})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-chess"})}),l.jsx("div",{className:"feature-title",children:"Emergent Strategies"}),l.jsx("div",{className:"feature-description",children:"AI develops strategic positioning, adaptive play styles, and competitive techniques through evolutionary pressure."})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-rocket"})}),l.jsx("div",{className:"feature-title",children:"Production Ready"}),l.jsx("div",{className:"feature-description",children:"Full web deployment with real-time multiplayer support, WebSocket communication, and scalable architecture."})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-desktop"})}),l.jsx("div",{className:"feature-title",children:"Cross-Platform"}),l.jsx("div",{className:"feature-description",children:"Works seamlessly on macOS, Linux, Windows, and web browsers with consistent performance across platforms."})]})]})]})}),l.jsx("section",{className:"content-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx("i",{className:"fas fa-trophy section-icon"}),"Training Results"]}),l.jsx("p",{className:"content-text",children:"Trained for 300+ generations with a population of 50 neural networks. The final model demonstrates remarkable capabilities:"}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"300+"}),l.jsx("div",{className:"stat-label",children:"Generations Trained"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"50"}),l.jsx("div",{className:"stat-label",children:"Population Size"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"64→64"}),l.jsx("div",{className:"stat-label",children:"Neural Network Architecture"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-number",children:"10"}),l.jsx("div",{className:"stat-label",children:"Input Features"})]})]}),l.jsxs("div",{className:"implementation-steps",children:[l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Consistent Shot Returns"}),l.jsx("div",{className:"step-description",children:"The AI reliably returns shots with high accuracy, demonstrating learned paddle control and ball tracking capabilities."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Strategic Positioning"}),l.jsx("div",{className:"step-description",children:"AI develops optimal paddle positioning strategies, anticipating ball trajectories and maximizing return opportunities."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Speed Adaptation"}),l.jsx("div",{className:"step-description",children:"Successfully adapts to dynamic ball speed changes, maintaining performance as speed multiplier increases up to 3x."})]})]}),l.jsxs("div",{className:"step",children:[l.jsx("div",{className:"step-number",children:"4"}),l.jsxs("div",{className:"step-content",children:[l.jsx("div",{className:"step-title",children:"Competitive Play"}),l.jsx("div",{className:"step-description",children:"Provides challenging gameplay against human opponents, demonstrating emergent strategic thinking and adaptive behavior."})]})]})]})]})})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="160",Ky=0,Uh=1,Zy=2,Av=1,Qy=2,ii=3,Yi=0,rn=1,ai=2,Gi=0,ps=1,Ih=2,Fh=3,Oh=4,Jy=5,lr=100,eS=101,tS=102,kh=103,zh=104,nS=200,iS=201,rS=202,sS=203,Yu=204,$u=205,aS=206,oS=207,lS=208,cS=209,uS=210,dS=211,fS=212,hS=213,pS=214,mS=0,gS=1,vS=2,hl=3,_S=4,xS=5,yS=6,SS=7,Nv=0,ES=1,MS=2,Vi=0,TS=1,wS=2,AS=3,NS=4,RS=5,CS=6,Rv=300,Ms=301,Ts=302,Ku=303,Zu=304,zl=306,Qu=1e3,On=1001,Ju=1002,Xt=1003,Bh=1004,Sc=1005,En=1006,bS=1007,wa=1008,Wi=1009,PS=1010,LS=1011,nf=1012,Cv=1013,Li=1014,Di=1015,Aa=1016,bv=1017,Pv=1018,mr=1020,DS=1021,kn=1023,US=1024,IS=1025,gr=1026,ws=1027,FS=1028,Lv=1029,OS=1030,Dv=1031,Uv=1033,Ec=33776,Mc=33777,Tc=33778,wc=33779,jh=35840,Hh=35841,Gh=35842,Vh=35843,Iv=36196,Wh=37492,Xh=37496,qh=37808,Yh=37809,$h=37810,Kh=37811,Zh=37812,Qh=37813,Jh=37814,ep=37815,tp=37816,np=37817,ip=37818,rp=37819,sp=37820,ap=37821,Ac=36492,op=36494,lp=36495,kS=36283,cp=36284,up=36285,dp=36286,Fv=3e3,vr=3001,zS=3200,BS=3201,jS=0,HS=1,Tn="",bt="srgb",gi="srgb-linear",rf="display-p3",Bl="display-p3-linear",pl="linear",it="srgb",ml="rec709",gl="p3",Lr=7680,fp=519,GS=512,VS=513,WS=514,Ov=515,XS=516,qS=517,YS=518,$S=519,hp=35044,pp="300 es",ed=1035,ci=2e3,vl=2001;class bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,td=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function KS(t,e){return(t%e+e)%e}function Rc(t,e,n){return(1-n)*t+n*e}function mp(t){return(t&t-1)===0&&t!==0}function nd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,c,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],f=i[4],h=i[7],p=i[2],_=i[5],y=i[8],x=r[0],m=r[3],d=r[6],g=r[1],v=r[4],S=r[7],C=r[2],R=r[5],A=r[8];return s[0]=a*x+o*g+c*C,s[3]=a*m+o*v+c*R,s[6]=a*d+o*S+c*A,s[1]=u*x+f*g+h*C,s[4]=u*m+f*v+h*R,s[7]=u*d+f*S+h*A,s[2]=p*x+_*g+y*C,s[5]=p*m+_*v+y*R,s[8]=p*d+_*S+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=f*a-o*u,p=o*c-f*s,_=u*s-a*c,y=n*h+i*p+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=p*x,e[4]=(f*n-r*c)*x,e[5]=(r*s-o*n)*x,e[6]=_*x,e[7]=(i*c-u*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new je;function kv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZS(){const t=_l("canvas");return t.style.display="block",t}const gp={};function sa(t){t in gp||(gp[t]=!0,console.warn(t))}const vp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_p=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[gi]:{transfer:pl,primaries:ml,toReference:t=>t,fromReference:t=>t},[bt]:{transfer:it,primaries:ml,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Bl]:{transfer:pl,primaries:gl,toReference:t=>t.applyMatrix3(_p),fromReference:t=>t.applyMatrix3(vp)},[rf]:{transfer:it,primaries:gl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(_p),fromReference:t=>t.applyMatrix3(vp).convertLinearToSRGB()}},QS=new Set([gi,Bl]),Ze={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!QS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=io[e].toReference,r=io[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return io[t].primaries},getTransfer:function(t){return t===Tn?pl:io[t].transfer}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=_l("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ms(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Da(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pc(r[a].image)):s.push(Pc(r[a]))}else s=Pc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eE=0;class fn extends bs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=On,r=On,s=En,a=wa,o=kn,c=Wi,u=fn.DEFAULT_ANISOTROPY,f=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Da(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===vr?bt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qu:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qu:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?vr:Fv}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vr?bt:Tn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Rv;fn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],f=c[4],h=c[8],p=c[1],_=c[5],y=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(f-p)<.01&&Math.abs(h-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+x)<.1&&Math.abs(y+m)<.1&&Math.abs(u+_+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(_+1)/2,C=(d+1)/2,R=(f+p)/4,A=(h+x)/4,D=(y+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=D/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-y)*(m-y)+(h-x)*(h-x)+(p-f)*(p-f));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(h-x)/g,this.z=(p-f)/g,this.w=Math.acos((u+_+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tE extends bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?bt:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends tE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jv extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nE extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const p=s[a+0],_=s[a+1],y=s[a+2],x=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=p,e[n+1]=_,e[n+2]=y,e[n+3]=x;return}if(h!==x||c!==p||u!==_||f!==y){let m=1-o;const d=c*p+u*_+f*y+h*x,g=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,d*g);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const S=o*g;if(c=c*m+p*S,u=u*m+_*S,f=f*m+y*S,h=h*m+x*S,m===1-o){const C=1/Math.sqrt(c*c+u*u+f*f+h*h);c*=C,u*=C,f*=C,h*=C}}e[n]=c,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a],p=s[a+1],_=s[a+2],y=s[a+3];return e[n]=o*y+f*h+c*_-u*p,e[n+1]=c*y+f*p+u*h-o*_,e[n+2]=u*y+f*_+o*p-c*h,e[n+3]=f*y-o*h-c*p-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),f=o(r/2),h=o(s/2),p=c(i/2),_=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=p*f*h+u*_*y,this._y=u*_*h-p*f*y,this._z=u*f*y+p*_*h,this._w=u*f*h-p*_*y;break;case"YXZ":this._x=p*f*h+u*_*y,this._y=u*_*h-p*f*y,this._z=u*f*y-p*_*h,this._w=u*f*h+p*_*y;break;case"ZXY":this._x=p*f*h-u*_*y,this._y=u*_*h+p*f*y,this._z=u*f*y+p*_*h,this._w=u*f*h-p*_*y;break;case"ZYX":this._x=p*f*h-u*_*y,this._y=u*_*h+p*f*y,this._z=u*f*y-p*_*h,this._w=u*f*h+p*_*y;break;case"YZX":this._x=p*f*h+u*_*y,this._y=u*_*h+p*f*y,this._z=u*f*y-p*_*h,this._w=u*f*h-p*_*y;break;case"XZY":this._x=p*f*h-u*_*y,this._y=u*_*h-p*f*y,this._z=u*f*y+p*_*h,this._w=u*f*h+p*_*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],f=n[6],h=n[10],p=i+o+h;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(f-c)*_,this._y=(s-u)*_,this._z=(a-r)*_}else if(i>o&&i>h){const _=2*Math.sqrt(1+i-o-h);this._w=(f-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+u)/_}else if(o>h){const _=2*Math.sqrt(1+o-i-h);this._w=(s-u)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+f)/_}else{const _=2*Math.sqrt(1+h-i-o);this._w=(a-r)/_,this._x=(s+u)/_,this._y=(c+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*c,this._y=r*f+a*c+s*o-i*u,this._z=s*f+a*u+i*c-r*o,this._w=a*f-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-n;return this._w=_*a+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),h=Math.sin((1-n)*f)/u,p=Math.sin(n*f)/u;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*u+a*h-o*f,this.y=i+c*f+o*u-s*h,this.z=r+c*h+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new O,xp=new Ua;class Ia{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),so.subVectors(this.max,Hs),Ur.subVectors(e.a,Hs),Ir.subVectors(e.b,Hs),Fr.subVectors(e.c,Hs),xi.subVectors(Ir,Ur),yi.subVectors(Fr,Ir),er.subVectors(Ur,Fr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-er.z,er.y,xi.z,0,-xi.x,yi.z,0,-yi.x,er.z,0,-er.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-er.y,er.x,0];return!Dc(n,Ur,Ir,Fr,so)||(n=[1,0,0,0,1,0,0,0,1],!Dc(n,Ur,Ir,Fr,so))?!1:(ao.crossVectors(xi,yi),n=[ao.x,ao.y,ao.z],Dc(n,Ur,Ir,Fr,so))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new O,new O,new O,new O,new O,new O,new O,new O],bn=new O,ro=new Ia,Ur=new O,Ir=new O,Fr=new O,xi=new O,yi=new O,er=new O,Hs=new O,so=new O,ao=new O,tr=new O;function Dc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);const o=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),c=e.dot(tr),u=n.dot(tr),f=i.dot(tr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const iE=new Ia,Gs=new O,Uc=new O;class jl{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Uc)),this.expandByPoint(Gs.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new O,Ic=new O,oo=new O,Si=new O,Fc=new O,lo=new O,Oc=new O;class Hv{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ic.copy(e).add(n).multiplyScalar(.5),oo.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Ic);const s=e.distanceTo(n)*.5,a=-this.direction.dot(oo),o=Si.dot(this.direction),c=-Si.dot(oo),u=Si.lengthSq(),f=Math.abs(1-a*a);let h,p,_,y;if(f>0)if(h=a*c-o,p=a*o-c,y=s*f,h>=0)if(p>=-y)if(p<=y){const x=1/f;h*=x,p*=x,_=h*(h+a*p+2*o)+p*(a*h+p+2*c)+u}else p=s,h=Math.max(0,-(a*p+o)),_=-h*h+p*(p+2*c)+u;else p=-s,h=Math.max(0,-(a*p+o)),_=-h*h+p*(p+2*c)+u;else p<=-y?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-c),s),_=-h*h+p*(p+2*c)+u):p<=y?(h=0,p=Math.min(Math.max(-s,-c),s),_=p*(p+2*c)+u):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-c),s),_=-h*h+p*(p+2*c)+u);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),_=-h*h+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ic).addScaledVector(oo,p),_}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Fc.subVectors(n,e),lo.subVectors(i,e),Oc.crossVectors(Fc,lo);let a=this.direction.dot(Oc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const c=o*this.direction.dot(lo.crossVectors(Si,lo));if(c<0)return null;const u=o*this.direction.dot(Fc.cross(Si));if(u<0||c+u>a)return null;const f=-o*Si.dot(Oc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,a,o,c,u,f,h,p,_,y,x,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,f,h,p,_,y,x,m)}set(e,n,i,r,s,a,o,c,u,f,h,p,_,y,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=f,d[10]=h,d[14]=p,d[3]=_,d[7]=y,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*f,_=a*h,y=o*f,x=o*h;n[0]=c*f,n[4]=-c*h,n[8]=u,n[1]=_+y*u,n[5]=p-x*u,n[9]=-o*c,n[2]=x-p*u,n[6]=y+_*u,n[10]=a*c}else if(e.order==="YXZ"){const p=c*f,_=c*h,y=u*f,x=u*h;n[0]=p+x*o,n[4]=y*o-_,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=_*o-y,n[6]=x+p*o,n[10]=a*c}else if(e.order==="ZXY"){const p=c*f,_=c*h,y=u*f,x=u*h;n[0]=p-x*o,n[4]=-a*h,n[8]=y+_*o,n[1]=_+y*o,n[5]=a*f,n[9]=x-p*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const p=a*f,_=a*h,y=o*f,x=o*h;n[0]=c*f,n[4]=y*u-_,n[8]=p*u+x,n[1]=c*h,n[5]=x*u+p,n[9]=_*u-y,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const p=a*c,_=a*u,y=o*c,x=o*u;n[0]=c*f,n[4]=x-p*h,n[8]=y*h+_,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=_*h+y,n[10]=p-x*h}else if(e.order==="XZY"){const p=a*c,_=a*u,y=o*c,x=o*u;n[0]=c*f,n[4]=-h,n[8]=u*f,n[1]=p*h+x,n[5]=a*f,n[9]=_*h-y,n[2]=y*h-_,n[6]=o*f,n[10]=x*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rE,e,sE)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),co.crossVectors(on,Ei),r[0]=Ei.x,r[4]=co.x,r[8]=on.x,r[1]=Ei.y,r[5]=co.y,r[9]=on.y,r[2]=Ei.z,r[6]=co.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],f=i[1],h=i[5],p=i[9],_=i[13],y=i[2],x=i[6],m=i[10],d=i[14],g=i[3],v=i[7],S=i[11],C=i[15],R=r[0],A=r[4],D=r[8],M=r[12],T=r[1],z=r[5],Y=r[9],re=r[13],L=r[2],V=r[6],k=r[10],q=r[14],P=r[3],I=r[7],F=r[11],K=r[15];return s[0]=a*R+o*T+c*L+u*P,s[4]=a*A+o*z+c*V+u*I,s[8]=a*D+o*Y+c*k+u*F,s[12]=a*M+o*re+c*q+u*K,s[1]=f*R+h*T+p*L+_*P,s[5]=f*A+h*z+p*V+_*I,s[9]=f*D+h*Y+p*k+_*F,s[13]=f*M+h*re+p*q+_*K,s[2]=y*R+x*T+m*L+d*P,s[6]=y*A+x*z+m*V+d*I,s[10]=y*D+x*Y+m*k+d*F,s[14]=y*M+x*re+m*q+d*K,s[3]=g*R+v*T+S*L+C*P,s[7]=g*A+v*z+S*V+C*I,s[11]=g*D+v*Y+S*k+C*F,s[15]=g*M+v*re+S*q+C*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],h=e[6],p=e[10],_=e[14],y=e[3],x=e[7],m=e[11],d=e[15];return y*(+s*c*h-r*u*h-s*o*p+i*u*p+r*o*_-i*c*_)+x*(+n*c*_-n*u*p+s*a*p-r*a*_+r*u*f-s*c*f)+m*(+n*u*h-n*o*_-s*a*h+i*a*_+s*o*f-i*u*f)+d*(-r*o*f-n*c*h+n*o*p+r*a*h-i*a*p+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=e[9],p=e[10],_=e[11],y=e[12],x=e[13],m=e[14],d=e[15],g=h*m*u-x*p*u+x*c*_-o*m*_-h*c*d+o*p*d,v=y*p*u-f*m*u-y*c*_+a*m*_+f*c*d-a*p*d,S=f*x*u-y*h*u+y*o*_-a*x*_-f*o*d+a*h*d,C=y*h*c-f*x*c-y*o*p+a*x*p+f*o*m-a*h*m,R=n*g+i*v+r*S+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(x*p*s-h*m*s-x*r*_+i*m*_+h*r*d-i*p*d)*A,e[2]=(o*m*s-x*c*s+x*r*u-i*m*u-o*r*d+i*c*d)*A,e[3]=(h*c*s-o*p*s-h*r*u+i*p*u+o*r*_-i*c*_)*A,e[4]=v*A,e[5]=(f*m*s-y*p*s+y*r*_-n*m*_-f*r*d+n*p*d)*A,e[6]=(y*c*s-a*m*s-y*r*u+n*m*u+a*r*d-n*c*d)*A,e[7]=(a*p*s-f*c*s+f*r*u-n*p*u-a*r*_+n*c*_)*A,e[8]=S*A,e[9]=(y*h*s-f*x*s-y*i*_+n*x*_+f*i*d-n*h*d)*A,e[10]=(a*x*s-y*o*s+y*i*u-n*x*u-a*i*d+n*o*d)*A,e[11]=(f*o*s-a*h*s-f*i*u+n*h*u+a*i*_-n*o*_)*A,e[12]=C*A,e[13]=(f*x*r-y*h*r+y*i*p-n*x*p-f*i*m+n*h*m)*A,e[14]=(y*o*r-a*x*r-y*i*c+n*x*c+a*i*m-n*o*m)*A,e[15]=(a*h*r-f*o*r+f*i*c-n*h*c-a*i*p+n*o*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+i,f*c-r*a,0,u*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,f=a+a,h=o+o,p=s*u,_=s*f,y=s*h,x=a*f,m=a*h,d=o*h,g=c*u,v=c*f,S=c*h,C=i.x,R=i.y,A=i.z;return r[0]=(1-(x+d))*C,r[1]=(_+S)*C,r[2]=(y-v)*C,r[3]=0,r[4]=(_-S)*R,r[5]=(1-(p+d))*R,r[6]=(m+g)*R,r[7]=0,r[8]=(y+v)*A,r[9]=(m-g)*A,r[10]=(1-(p+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const a=Or.set(r[4],r[5],r[6]).length(),o=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,f=1/a,h=1/o;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ci){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,y;if(o===ci)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===vl)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ci){const c=this.elements,u=1/(n-e),f=1/(i-r),h=1/(a-s),p=(n+e)*u,_=(i+r)*f;let y,x;if(o===ci)y=(a+s)*h,x=-2*h;else if(o===vl)y=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=x,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new O,Pn=new Rt,rE=new O(0,0,0),sE=new O(1,1,1),Ei=new O,co=new O,on=new O,yp=new Rt,Sp=new Ua;class Hl{constructor(e=0,n=0,i=0,r=Hl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],f=r[9],h=r[2],p=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hl.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aE=0;const Ep=new O,kr=new Ua,ei=new Rt,uo=new O,Vs=new O,oE=new O,lE=new Ua,Mp=new O(1,0,0),Tp=new O(0,1,0),wp=new O(0,0,1),cE={type:"added"},uE={type:"removed"};class sn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new O,n=new Hl,i=new Ua,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new je}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(Mp,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,n){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mp,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?uo.copy(e):uo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Vs,uo,this.up):ei.lookAt(uo,Vs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(ei),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,oE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,lE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),p=a(e.skeletons),_=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new O,ti=new O,kc=new O,ni=new O,zr=new O,Br=new O,Ap=new O,zc=new O,Bc=new O,jc=new O;let fo=!1;class Fn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ti.subVectors(i,n),kc.subVectors(e,n);const a=Ln.dot(Ln),o=Ln.dot(ti),c=Ln.dot(kc),u=ti.dot(ti),f=ti.dot(kc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,_=(u*c-o*f)*p,y=(a*f-o*c)*p;return s.set(1-_-y,y,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,n,i,r,s,a,o,c){return fo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fo=!0),this.getInterpolation(e,n,i,r,s,a,o,c)}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ti.subVectors(e,n),Ln.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ln.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return fo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fo=!0),Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;zr.subVectors(r,i),Br.subVectors(s,i),zc.subVectors(e,i);const c=zr.dot(zc),u=Br.dot(zc);if(c<=0&&u<=0)return n.copy(i);Bc.subVectors(e,r);const f=zr.dot(Bc),h=Br.dot(Bc);if(f>=0&&h<=f)return n.copy(r);const p=c*h-f*u;if(p<=0&&c>=0&&f<=0)return a=c/(c-f),n.copy(i).addScaledVector(zr,a);jc.subVectors(e,s);const _=zr.dot(jc),y=Br.dot(jc);if(y>=0&&_<=y)return n.copy(s);const x=_*u-c*y;if(x<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(Br,o);const m=f*y-_*h;if(m<=0&&h-f>=0&&_-y>=0)return Ap.subVectors(s,r),o=(h-f)/(h-f+(_-y)),n.copy(r).addScaledVector(Ap,o);const d=1/(m+x+p);return a=x*d,o=p*d,n.copy(i).addScaledVector(zr,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=KS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hc(a,s,e+1/3),this.g=Hc(a,s,e),this.b=Hc(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bt){const i=Vv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Ze.fromWorkingColorSpace(kt.copy(this),e),Math.round(Qt(kt.r*255,0,255))*65536+Math.round(Qt(kt.g*255,0,255))*256+Math.round(Qt(kt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=bt){Ze.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(ho);const i=Rc(Mi.h,ho.h,n),r=Rc(Mi.s,ho.s,n),s=Rc(Mi.l,ho.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new He;He.NAMES=Vv;let dE=0;class Fa extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=ps,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=$u,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yu&&(i.blendSrc=this.blendSrc),this.blendDst!==$u&&(i.blendDst=this.blendDst),this.blendEquation!==lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xl extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,po=new qe;class hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)po.fromBufferAttribute(this,n),po.applyMatrix3(e),this.setXY(n,po.x,po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hp&&(e.usage=this.usage),e}}class Wv extends hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Xv extends hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fE=0;const xn=new Rt,Gc=new sn,jr=new O,ln=new Ia,Ws=new Ia,wt=new O;class Hn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?Xv:Wv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(ln.min,Ws.min),ln.expandByPoint(wt),wt.addVectors(ln.max,Ws.max),ln.expandByPoint(wt)):(ln.expandByPoint(Ws.min),ln.expandByPoint(Ws.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)wt.fromBufferAttribute(o,u),c&&(jr.fromBufferAttribute(e,u),wt.add(jr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<o;T++)u[T]=new O,f[T]=new O;const h=new O,p=new O,_=new O,y=new qe,x=new qe,m=new qe,d=new O,g=new O;function v(T,z,Y){h.fromArray(r,T*3),p.fromArray(r,z*3),_.fromArray(r,Y*3),y.fromArray(a,T*2),x.fromArray(a,z*2),m.fromArray(a,Y*2),p.sub(h),_.sub(h),x.sub(y),m.sub(y);const re=1/(x.x*m.y-m.x*x.y);isFinite(re)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(_,-x.y).multiplyScalar(re),g.copy(_).multiplyScalar(x.x).addScaledVector(p,-m.x).multiplyScalar(re),u[T].add(d),u[z].add(d),u[Y].add(d),f[T].add(g),f[z].add(g),f[Y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,z=S.length;T<z;++T){const Y=S[T],re=Y.start,L=Y.count;for(let V=re,k=re+L;V<k;V+=3)v(i[V+0],i[V+1],i[V+2])}const C=new O,R=new O,A=new O,D=new O;function M(T){A.fromArray(s,T*3),D.copy(A);const z=u[T];C.copy(z),C.sub(A.multiplyScalar(A.dot(z))).normalize(),R.crossVectors(D,z);const re=R.dot(f[T])<0?-1:1;c[T*4]=C.x,c[T*4+1]=C.y,c[T*4+2]=C.z,c[T*4+3]=re}for(let T=0,z=S.length;T<z;++T){const Y=S[T],re=Y.start,L=Y.count;for(let V=re,k=re+L;V<k;V+=3)M(i[V+0]),M(i[V+1]),M(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,u=new O,f=new O,h=new O;if(e)for(let p=0,_=e.count;p<_;p+=3){const y=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),o.add(f),c.add(f),u.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,_=n.count;p<_;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,h=o.normalized,p=new u.constructor(c.length*f);let _=0,y=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?_=c[x]*o.data.stride+o.offset:_=c[x]*f;for(let d=0;d<f;d++)p[y++]=u[_++]}return new hn(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const p=u[f],_=e(p,i);c.push(_)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let h=0,p=u.length;h<p;h++){const _=u[h];f.push(_.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let p=0,_=h.length;p<_;p++)f.push(h[p].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new Rt,nr=new Hv,mo=new jl,Rp=new O,Hr=new O,Gr=new O,Vr=new O,Vc=new O,go=new O,vo=new qe,_o=new qe,xo=new qe,Cp=new O,bp=new O,Pp=new O,yo=new O,So=new O;class Yn extends sn{constructor(e=new Hn,n=new xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){go.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],h=s[c];f!==0&&(Vc.fromBufferAttribute(h,e),a?go.addScaledVector(Vc,f):go.addScaledVector(Vc.sub(n),f))}n.add(go)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(mo.containsPoint(nr.origin)===!1&&(nr.intersectSphere(mo,Rp)===null||nr.origin.distanceToSquared(Rp)>(e.far-e.near)**2))&&(Np.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,x=p.length;y<x;y++){const m=p[y],d=a[m.materialIndex],g=Math.max(m.start,_.start),v=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let S=g,C=v;S<C;S+=3){const R=o.getX(S),A=o.getX(S+1),D=o.getX(S+2);r=Eo(this,d,e,i,u,f,h,R,A,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let m=y,d=x;m<d;m+=3){const g=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=Eo(this,a,e,i,u,f,h,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,x=p.length;y<x;y++){const m=p[y],d=a[m.materialIndex],g=Math.max(m.start,_.start),v=Math.min(c.count,Math.min(m.start+m.count,_.start+_.count));for(let S=g,C=v;S<C;S+=3){const R=S,A=S+1,D=S+2;r=Eo(this,d,e,i,u,f,h,R,A,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,_.start),x=Math.min(c.count,_.start+_.count);for(let m=y,d=x;m<d;m+=3){const g=m,v=m+1,S=m+2;r=Eo(this,a,e,i,u,f,h,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function hE(t,e,n,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Yi,o),c===null)return null;So.copy(o),So.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(So);return u<n.near||u>n.far?null:{distance:u,point:So.clone(),object:t}}function Eo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Hr),t.getVertexPosition(c,Gr),t.getVertexPosition(u,Vr);const f=hE(t,e,n,i,Hr,Gr,Vr,yo);if(f){r&&(vo.fromBufferAttribute(r,o),_o.fromBufferAttribute(r,c),xo.fromBufferAttribute(r,u),f.uv=Fn.getInterpolation(yo,Hr,Gr,Vr,vo,_o,xo,new qe)),s&&(vo.fromBufferAttribute(s,o),_o.fromBufferAttribute(s,c),xo.fromBufferAttribute(s,u),f.uv1=Fn.getInterpolation(yo,Hr,Gr,Vr,vo,_o,xo,new qe),f.uv2=f.uv1),a&&(Cp.fromBufferAttribute(a,o),bp.fromBufferAttribute(a,c),Pp.fromBufferAttribute(a,u),f.normal=Fn.getInterpolation(yo,Hr,Gr,Vr,Cp,bp,Pp,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new O,materialIndex:0};Fn.getNormal(Hr,Gr,Vr,h.normal),f.face=h}return f}class Oa extends Hn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],h=[];let p=0,_=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(h,2));function y(x,m,d,g,v,S,C,R,A,D,M){const T=S/A,z=C/D,Y=S/2,re=C/2,L=R/2,V=A+1,k=D+1;let q=0,P=0;const I=new O;for(let F=0;F<k;F++){const K=F*z-re;for(let $=0;$<V;$++){const X=$*T-Y;I[x]=X*g,I[m]=K*v,I[d]=L,u.push(I.x,I.y,I.z),I[x]=0,I[m]=0,I[d]=R>0?1:-1,f.push(I.x,I.y,I.z),h.push($/A),h.push(1-F/D),q+=1}}for(let F=0;F<D;F++)for(let K=0;K<A;K++){const $=p+K+V*F,X=p+K+V*(F+1),Z=p+(K+1)+V*(F+1),ne=p+(K+1)+V*F;c.push($,X,ne),c.push(X,Z,ne),P+=6}o.addGroup(_,P,M),_+=P,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function pE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function qv(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const mE={clone:As,merge:Vt};var gE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gE,this.fragmentShader=vE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=pE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Yv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mn extends Yv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class _E extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new Mn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new Mn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const c=new Mn(Wr,Xr,e,n);c.layers=this.layers,this.add(c);const u=new Mn(Wr,Xr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,p,_),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class $v extends fn{constructor(e,n,i,r,s,a,o,c,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ms,super(e,n,i,r,s,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xE extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vr?bt:Tn),this.texture=new $v(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oa(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Gi});s.uniforms.tEquirect.value=n;const a=new Yn(r,s),o=n.minFilter;return n.minFilter===wa&&(n.minFilter=En),new _E(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Wc=new O,yE=new O,SE=new je;class ar{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wc.subVectors(i,n).cross(yE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||SE.getNormalMatrix(e),r=this.coplanarPoint(Wc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new jl,Mo=new O;class Kv{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,a=new ar){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],y=r[9],x=r[10],m=r[11],d=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-s,p-u,m-_,S-d).normalize(),i[1].setComponents(c+s,p+u,m+_,S+d).normalize(),i[2].setComponents(c+a,p+f,m+y,S+g).normalize(),i[3].setComponents(c-a,p-f,m-y,S-g).normalize(),i[4].setComponents(c-o,p-h,m-x,S-v).normalize(),n===ci)i[5].setComponents(c+o,p+h,m+x,S+v).normalize();else if(n===vl)i[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Mo.x=r.normal.x>0?e.max.x:e.min.x,Mo.y=r.normal.y>0?e.max.y:e.min.y,Mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function EE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,p=u.usage,_=h.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:_}}function s(u,f,h){const p=f.array,_=f._updateRange,y=f.updateRanges;if(t.bindBuffer(h,u),_.count===-1&&y.length===0&&t.bufferSubData(h,0,p),y.length!==0){for(let x=0,m=y.length;x<m;x++){const d=y[x];n?t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(h,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count):t.bufferSubData(h,_.offset*p.BYTES_PER_ELEMENT,p.subarray(_.offset,_.offset+_.count)),_.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:c}}class sf extends Hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,f=c+1,h=e/o,p=n/c,_=[],y=[],x=[],m=[];for(let d=0;d<f;d++){const g=d*p-a;for(let v=0;v<u;v++){const S=v*h-s;y.push(S,-g,0),x.push(0,0,1),m.push(v/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let g=0;g<o;g++){const v=g+u*d,S=g+u*(d+1),C=g+1+u*(d+1),R=g+1+u*d;_.push(v,S,R),_.push(S,C,R)}this.setIndex(_),this.setAttribute("position",new pn(y,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.width,e.height,e.widthSegments,e.heightSegments)}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,RE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,DE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JE="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_M=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ST=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ew=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:ME,alphahash_pars_fragment:TE,alphamap_fragment:wE,alphamap_pars_fragment:AE,alphatest_fragment:NE,alphatest_pars_fragment:RE,aomap_fragment:CE,aomap_pars_fragment:bE,batching_pars_vertex:PE,batching_vertex:LE,begin_vertex:DE,beginnormal_vertex:UE,bsdfs:IE,iridescence_fragment:FE,bumpmap_pars_fragment:OE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:zE,clipping_planes_pars_vertex:BE,clipping_planes_vertex:jE,color_fragment:HE,color_pars_fragment:GE,color_pars_vertex:VE,color_vertex:WE,common:XE,cube_uv_reflection_fragment:qE,defaultnormal_vertex:YE,displacementmap_pars_vertex:$E,displacementmap_vertex:KE,emissivemap_fragment:ZE,emissivemap_pars_fragment:QE,colorspace_fragment:JE,colorspace_pars_fragment:eM,envmap_fragment:tM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:gM,envmap_vertex:sM,fog_vertex:aM,fog_pars_vertex:oM,fog_fragment:lM,fog_pars_fragment:cM,gradientmap_pars_fragment:uM,lightmap_fragment:dM,lightmap_pars_fragment:fM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:vM,lights_toon_pars_fragment:_M,lights_phong_fragment:xM,lights_phong_pars_fragment:yM,lights_physical_fragment:SM,lights_physical_pars_fragment:EM,lights_fragment_begin:MM,lights_fragment_maps:TM,lights_fragment_end:wM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:CM,map_fragment:bM,map_pars_fragment:PM,map_particle_fragment:LM,map_particle_pars_fragment:DM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:IM,morphcolor_vertex:FM,morphnormal_vertex:OM,morphtarget_pars_vertex:kM,morphtarget_vertex:zM,normal_fragment_begin:BM,normal_fragment_maps:jM,normal_pars_fragment:HM,normal_pars_vertex:GM,normal_vertex:VM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:$M,opaque_fragment:KM,packing:ZM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:eT,dithering_pars_fragment:tT,roughnessmap_fragment:nT,roughnessmap_pars_fragment:iT,shadowmap_pars_fragment:rT,shadowmap_pars_vertex:sT,shadowmap_vertex:aT,shadowmask_pars_fragment:oT,skinbase_vertex:lT,skinning_pars_vertex:cT,skinning_vertex:uT,skinnormal_vertex:dT,specularmap_fragment:fT,specularmap_pars_fragment:hT,tonemapping_fragment:pT,tonemapping_pars_fragment:mT,transmission_fragment:gT,transmission_pars_fragment:vT,uv_pars_fragment:_T,uv_pars_vertex:xT,uv_vertex:yT,worldpos_vertex:ST,background_vert:ET,background_frag:MT,backgroundCube_vert:TT,backgroundCube_frag:wT,cube_vert:AT,cube_frag:NT,depth_vert:RT,depth_frag:CT,distanceRGBA_vert:bT,distanceRGBA_frag:PT,equirect_vert:LT,equirect_frag:DT,linedashed_vert:UT,linedashed_frag:IT,meshbasic_vert:FT,meshbasic_frag:OT,meshlambert_vert:kT,meshlambert_frag:zT,meshmatcap_vert:BT,meshmatcap_frag:jT,meshnormal_vert:HT,meshnormal_frag:GT,meshphong_vert:VT,meshphong_frag:WT,meshphysical_vert:XT,meshphysical_frag:qT,meshtoon_vert:YT,meshtoon_frag:$T,points_vert:KT,points_frag:ZT,shadow_vert:QT,shadow_frag:JT,sprite_vert:ew,sprite_frag:tw},ae={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Xn={basic:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Vt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Vt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Vt([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Vt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Vt([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Vt([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Vt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Vt([ae.lights,ae.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Xn.physical={uniforms:Vt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const To={r:0,b:0,g:0};function nw(t,e,n,i,r,s,a){const o=new He(0);let c=s===!0?0:1,u,f,h=null,p=0,_=null;function y(m,d){let g=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===zl)?(f===void 0&&(f=new Yn(new Oa(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:As(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=Ze.getTransfer(v.colorSpace)!==it,(h!==v||p!==v.version||_!==t.toneMapping)&&(f.material.needsUpdate=!0,h=v,p=v.version,_=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Yn(new sf(2,2),new Tr({name:"BackgroundMaterial",uniforms:As(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||_!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,_=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,d){m.getRGB(To,qv(t)),i.buffers.color.setClear(To.r,To.g,To.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:y}}function iw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null);let u=c,f=!1;function h(L,V,k,q,P){let I=!1;if(a){const F=x(q,k,V);u!==F&&(u=F,_(u.object)),I=d(L,q,k,P),I&&g(L,q,k,P)}else{const F=V.wireframe===!0;(u.geometry!==q.id||u.program!==k.id||u.wireframe!==F)&&(u.geometry=q.id,u.program=k.id,u.wireframe=F,I=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,D(L,V,k,q),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function y(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,V,k){const q=k.wireframe===!0;let P=o[L.id];P===void 0&&(P={},o[L.id]=P);let I=P[V.id];I===void 0&&(I={},P[V.id]=I);let F=I[q];return F===void 0&&(F=m(p()),I[q]=F),F}function m(L){const V=[],k=[],q=[];for(let P=0;P<r;P++)V[P]=0,k[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:k,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,V,k,q){const P=u.attributes,I=V.attributes;let F=0;const K=k.getAttributes();for(const $ in K)if(K[$].location>=0){const Z=P[$];let ne=I[$];if(ne===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;F++}return u.attributesNum!==F||u.index!==q}function g(L,V,k,q){const P={},I=V.attributes;let F=0;const K=k.getAttributes();for(const $ in K)if(K[$].location>=0){let Z=I[$];Z===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),P[$]=ne,F++}u.attributes=P,u.attributesNum=F,u.index=q}function v(){const L=u.newAttributes;for(let V=0,k=L.length;V<k;V++)L[V]=0}function S(L){C(L,0)}function C(L,V){const k=u.newAttributes,q=u.enabledAttributes,P=u.attributeDivisors;k[L]=1,q[L]===0&&(t.enableVertexAttribArray(L),q[L]=1),P[L]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),P[L]=V)}function R(){const L=u.newAttributes,V=u.enabledAttributes;for(let k=0,q=V.length;k<q;k++)V[k]!==L[k]&&(t.disableVertexAttribArray(k),V[k]=0)}function A(L,V,k,q,P,I,F){F===!0?t.vertexAttribIPointer(L,V,k,P,I):t.vertexAttribPointer(L,V,k,q,P,I)}function D(L,V,k,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const P=q.attributes,I=k.getAttributes(),F=V.defaultAttributeValues;for(const K in I){const $=I[K];if($.location>=0){let X=P[K];if(X===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const Z=X.normalized,ne=X.itemSize,oe=n.get(X);if(oe===void 0)continue;const pe=oe.buffer,Ne=oe.type,be=oe.bytesPerElement,we=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||X.gpuType===Cv);if(X.isInterleavedBufferAttribute){const We=X.data,B=We.stride,jt=X.offset;if(We.isInstancedInterleavedBuffer){for(let Se=0;Se<$.locationSize;Se++)C($.location+Se,We.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Se=0;Se<$.locationSize;Se++)S($.location+Se);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Se=0;Se<$.locationSize;Se++)A($.location+Se,ne/$.locationSize,Ne,Z,B*be,(jt+ne/$.locationSize*Se)*be,we)}else{if(X.isInstancedBufferAttribute){for(let We=0;We<$.locationSize;We++)C($.location+We,X.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let We=0;We<$.locationSize;We++)S($.location+We);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let We=0;We<$.locationSize;We++)A($.location+We,ne/$.locationSize,Ne,Z,ne*be,ne/$.locationSize*We*be,we)}}else if(F!==void 0){const Z=F[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv($.location,Z);break;case 3:t.vertexAttrib3fv($.location,Z);break;case 4:t.vertexAttrib4fv($.location,Z);break;default:t.vertexAttrib1fv($.location,Z)}}}}R()}function M(){Y();for(const L in o){const V=o[L];for(const k in V){const q=V[k];for(const P in q)y(q[P].object),delete q[P];delete V[k]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const V=o[L.id];for(const k in V){const q=V[k];for(const P in q)y(q[P].object),delete q[P];delete V[k]}delete o[L.id]}function z(L){for(const V in o){const k=o[V];if(k[L.id]===void 0)continue;const q=k[L.id];for(const P in q)y(q[P].object),delete q[P];delete k[L.id]}}function Y(){re(),f=!0,u!==c&&(u=c,_(u.object))}function re(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:re,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function rw(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function c(f,h,p){if(p===0)return;let _,y;if(r)_=t,y="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[y](s,f,h,p),n.update(h,s,p)}function u(f,h,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<p;y++)this.render(f[y],h[y]);else{_.multiDrawArraysWEBGL(s,f,0,h,0,p);let y=0;for(let x=0;x<p;x++)y+=h[x];n.update(y,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function sw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=a||e.has("OES_texture_float"),C=v&&S,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:R}}function aw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ar,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const _=h.length!==0||p||i!==0||r;return r=p,i=h.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=f(h,p,0)},this.setState=function(h,p,_){const y=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?f(null):u();else{const g=s?0:i,v=g*4;let S=d.clippingState||null;c.value=S,S=f(y,p,v,_);for(let C=0;C!==v;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,_,y){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,y!==!0||m===null){const d=_+x*4,g=p.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=_;v!==x;++v,S+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ow(t){let e=new WeakMap;function n(a,o){return o===Ku?a.mapping=Ms:o===Zu&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ku||o===Zu)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new xE(c.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lw extends Yv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,Lp=[.125,.215,.35,.446,.526,.582],cr=20,Xc=new lw,Dp=new He;let qc=null,Yc=0,$c=0;const or=(1+Math.sqrt(5))/2,qr=1/or,Up=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,or,qr),new O(0,or,-qr),new O(qr,0,or),new O(-qr,0,or),new O(or,qr,0),new O(-or,qr,0)];class Ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,$c),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ms||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Aa,format:kn,colorSpace:gi,depthBuffer:!1},r=Fp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(s)),this._blurMaterial=uw(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Dp),f.toneMapping=Vi,f.autoClear=!1;const _=new xl({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),y=new Yn(new Oa,_);let x=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,x=!0):(_.color.copy(Dp),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):g===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;wo(r,g*v,d>2?v:0,v,v),f.setRenderTarget(r),x&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ms||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;wo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Up[(r-1)%Up.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Yn(this._lodPlanes[r],u),p=u.uniforms,_=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*cr-1),x=s/y,m=isFinite(s)?1+Math.floor(f*x):cr;m>cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);const d=[];let g=0;for(let A=0;A<cr;++A){const D=A/x,M=Math.exp(-D*D/2);d.push(M),A===0?g+=M:A<m&&(g+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=y,p.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-as?r-v+as:0),R=4*(this._cubeSize-S);wo(n,C,R,3*S,2*S),c.setRenderTarget(n),c.render(h,Xc)}}function cw(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+Lp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-as?c=Lp[a-t+as-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],_=6,y=6,x=3,m=2,d=1,g=new Float32Array(x*y*_),v=new Float32Array(m*y*_),S=new Float32Array(d*y*_);for(let R=0;R<_;R++){const A=R%3*2/3-1,D=R>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];g.set(M,x*y*R),v.set(p,m*y*R);const T=[R,R,R,R,R,R];S.set(T,d*y*R)}const C=new Hn;C.setAttribute("position",new hn(g,x)),C.setAttribute("uv",new hn(v,m)),C.setAttribute("faceIndex",new hn(S,d)),e.push(C),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fp(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uw(t,e,n){const i=new Float32Array(cr),r=new O(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Op(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function kp(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===Ku||c===Zu,f=c===Ms||c===Ts;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Ip(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Ip(t));const p=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function fw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hw(t,e,n,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const x=p.morphAttributes[y];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}p.removeEventListener("dispose",a),delete r[p.id];const _=s.get(p);_&&(e.remove(_),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function c(h){const p=h.attributes;for(const y in p)e.update(p[y],t.ARRAY_BUFFER);const _=h.morphAttributes;for(const y in _){const x=_[y];for(let m=0,d=x.length;m<d;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(h){const p=[],_=h.index,y=h.attributes.position;let x=0;if(_!==null){const g=_.array;x=_.version;for(let v=0,S=g.length;v<S;v+=3){const C=g[v+0],R=g[v+1],A=g[v+2];p.push(C,R,R,A,A,C)}}else if(y!==void 0){const g=y.array;x=y.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const C=v+0,R=v+1,A=v+2;p.push(C,R,R,A,A,C)}}else return;const m=new(kv(p)?Xv:Wv)(p,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const p=s.get(h);if(p){const _=h.index;_!==null&&p.version<_.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function pw(t,e,n,i){const r=i.isWebGL2;let s;function a(_){s=_}let o,c;function u(_){o=_.type,c=_.bytesPerElement}function f(_,y){t.drawElements(s,y,o,_*c),n.update(y,s,1)}function h(_,y,x){if(x===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,y,o,_*c,x),n.update(y,s,x)}function p(_,y,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(_[d]/c,y[d]);else{m.multiDrawElementsWEBGL(s,y,0,o,_,0,x);let d=0;for(let g=0;g<x;g++)d+=y[g];n.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function mw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gw(t,e){return t[0]-e[0]}function vw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function _w(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,f,h){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=y!==void 0?y.length:0;let m=s.get(f);if(m===void 0||m.count!==x){let V=function(){re.dispose(),s.delete(f),f.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let T=f.attributes.position.count*M,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*z*4*x),re=new jv(Y,T,z,x);re.type=Di,re.needsUpdate=!0;const L=M*4;for(let k=0;k<x;k++){const q=R[k],P=A[k],I=D[k],F=T*z*4*k;for(let K=0;K<q.count;K++){const $=K*L;v===!0&&(a.fromBufferAttribute(q,K),Y[F+$+0]=a.x,Y[F+$+1]=a.y,Y[F+$+2]=a.z,Y[F+$+3]=0),S===!0&&(a.fromBufferAttribute(P,K),Y[F+$+4]=a.x,Y[F+$+5]=a.y,Y[F+$+6]=a.z,Y[F+$+7]=0),C===!0&&(a.fromBufferAttribute(I,K),Y[F+$+8]=a.x,Y[F+$+9]=a.y,Y[F+$+10]=a.z,Y[F+$+11]=I.itemSize===4?a.w:1)}}m={count:x,texture:re,size:new qe(T,z)},s.set(f,m),f.addEventListener("dispose",V)}let d=0;for(let v=0;v<p.length;v++)d+=p[v];const g=f.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",p),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=p===void 0?0:p.length;let x=i[f.id];if(x===void 0||x.length!==y){x=[];for(let S=0;S<y;S++)x[S]=[S,0];i[f.id]=x}for(let S=0;S<y;S++){const C=x[S];C[0]=S,C[1]=p[S]}x.sort(vw);for(let S=0;S<8;S++)S<y&&x[S][1]?(o[S][0]=x[S][0],o[S][1]=x[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(gw);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const C=o[S],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&f.getAttribute("morphTarget"+S)!==m[R]&&f.setAttribute("morphTarget"+S,m[R]),d&&f.getAttribute("morphNormal"+S)!==d[R]&&f.setAttribute("morphNormal"+S,d[R]),r[S]=A,g+=A):(m&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),d&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function xw(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Qv extends fn{constructor(e,n,i,r,s,a,o,c,u,f){if(f=f!==void 0?f:gr,f!==gr&&f!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===gr&&(i=Li),i===void 0&&f===ws&&(i=mr),super(null,r,s,a,o,c,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jv=new fn,e_=new Qv(1,1);e_.compareFunction=Ov;const t_=new jv,n_=new nE,i_=new $v,zp=[],Bp=[],jp=new Float32Array(16),Hp=new Float32Array(9),Gp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zp[r];if(s===void 0&&(s=new Float32Array(r),zp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gl(t,e){let n=Bp[e];n===void 0&&(n=new Int32Array(e),Bp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function Tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;Gp.set(i),t.uniformMatrix2fv(this.addr,!1,Gp),Et(n,i)}}function ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;Hp.set(i),t.uniformMatrix3fv(this.addr,!1,Hp),Et(n,i)}}function Aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;jp.set(i),t.uniformMatrix4fv(this.addr,!1,jp),Et(n,i)}}function Nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function Pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?e_:Jv;n.setTexture2D(e||s,r)}function Fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||n_,r)}function Ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||i_,r)}function kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||t_,r)}function zw(t){switch(t){case 5126:return yw;case 35664:return Sw;case 35665:return Ew;case 35666:return Mw;case 35674:return Tw;case 35675:return ww;case 35676:return Aw;case 5124:case 35670:return Nw;case 35667:case 35671:return Rw;case 35668:case 35672:return Cw;case 35669:case 35673:return bw;case 5125:return Pw;case 36294:return Lw;case 36295:return Dw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return kw}}function Bw(t,e){t.uniform1fv(this.addr,e)}function jw(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function Hw(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function Gw(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function Vw(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ww(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Xw(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qw(t,e){t.uniform1iv(this.addr,e)}function Yw(t,e){t.uniform2iv(this.addr,e)}function $w(t,e){t.uniform3iv(this.addr,e)}function Kw(t,e){t.uniform4iv(this.addr,e)}function Zw(t,e){t.uniform1uiv(this.addr,e)}function Qw(t,e){t.uniform2uiv(this.addr,e)}function Jw(t,e){t.uniform3uiv(this.addr,e)}function e1(t,e){t.uniform4uiv(this.addr,e)}function t1(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Jv,s[a])}function n1(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||n_,s[a])}function i1(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||i_,s[a])}function r1(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||t_,s[a])}function s1(t){switch(t){case 5126:return Bw;case 35664:return jw;case 35665:return Hw;case 35666:return Gw;case 35674:return Vw;case 35675:return Ww;case 35676:return Xw;case 5124:case 35670:return qw;case 35667:case 35671:return Yw;case 35668:case 35672:return $w;case 35669:case 35673:return Kw;case 5125:return Zw;case 36294:return Qw;case 36295:return Jw;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}class a1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zw(n.type)}}class o1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s1(n.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Vp(t,e){t.seq.push(e),t.map[e.id]=e}function c1(t,e,n){const i=t.name,r=i.length;for(Kc.lastIndex=0;;){const s=Kc.exec(i),a=Kc.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Vp(n,u===void 0?new a1(o,t,e):new o1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new l1(o),Vp(n,h)),n=h}}}class jo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);c1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const u1=37297;let d1=0;function f1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function h1(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===gl&&n===ml?i="LinearDisplayP3ToLinearSRGB":e===ml&&n===gl&&(i="LinearSRGBToLinearDisplayP3"),t){case gi:case Bl:return[i,"LinearTransferOETF"];case bt:case rf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Xp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+f1(t.getShaderSource(e),a)}else return r}function p1(t,e){const n=h1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function m1(t,e){let n;switch(e){case TS:n="Linear";break;case wS:n="Reinhard";break;case AS:n="OptimizedCineon";break;case NS:n="ACESFilmic";break;case CS:n="AgX";break;case RS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function g1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function v1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(os).join(`
`)}function _1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function x1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function os(t){return t!==""}function qp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(y1,E1)}const S1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function E1(t,e){let n=Ie[e];if(n===void 0){const i=S1.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(t){return t.replace(M1,T1)}function T1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function A1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ms:case Ts:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function R1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Nv:e="ENVMAP_BLENDING_MULTIPLY";break;case ES:e="ENVMAP_BLENDING_MIX";break;case MS:e="ENVMAP_BLENDING_ADD";break}return e}function C1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function b1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=w1(n),u=A1(n),f=N1(n),h=R1(n),p=C1(n),_=n.isWebGL2?"":g1(n),y=v1(n),x=_1(s),m=r.createProgram();let d,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(os).join(`
`),d.length>0&&(d+=`
`),g=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(os).join(`
`),g.length>0&&(g+=`
`)):(d=[Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),g=[_,Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Vi?m1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,p1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(os).join(`
`)),a=id(a),a=qp(a,n),a=Yp(a,n),o=id(o),o=qp(o,n),o=Yp(o,n),a=$p(a),o=$p(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=v+d+a,C=v+g+o,R=Wp(r,r.VERTEX_SHADER,S),A=Wp(r,r.FRAGMENT_SHADER,C);r.attachShader(m,R),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(Y){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(A).trim();let k=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,A);else{const P=Xp(r,R,"vertex"),I=Xp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+P+`
`+I)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(L===""||V==="")&&(q=!1);q&&(Y.diagnostics={runnable:k,programLog:re,vertexShader:{log:L,prefix:d},fragmentShader:{log:V,prefix:g}})}r.deleteShader(R),r.deleteShader(A),M=new jo(r,m),T=x1(r,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,u1)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let P1=0;class L1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new D1(e),n.set(e,i)),i}}class D1{constructor(e){this.id=P1++,this.code=e,this.usedTimes=0}}function U1(t,e,n,i,r,s,a){const o=new Gv,c=new L1,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,z,Y,re){const L=Y.fog,V=re.geometry,k=M.isMeshStandardMaterial?Y.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||k),P=q&&q.mapping===zl?q.image.height:null,I=y[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const F=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,K=F!==void 0?F.length:0;let $=0;V.morphAttributes.position!==void 0&&($=1),V.morphAttributes.normal!==void 0&&($=2),V.morphAttributes.color!==void 0&&($=3);let X,Z,ne,oe;if(I){const Ht=Xn[I];X=Ht.vertexShader,Z=Ht.fragmentShader}else X=M.vertexShader,Z=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),oe=c.getFragmentShaderID(M);const pe=t.getRenderTarget(),Ne=re.isInstancedMesh===!0,be=re.isBatchedMesh===!0,we=!!M.map,We=!!M.matcap,B=!!q,jt=!!M.aoMap,Se=!!M.lightMap,Pe=!!M.bumpMap,ve=!!M.normalMap,at=!!M.displacementMap,Fe=!!M.emissiveMap,N=!!M.metalnessMap,E=!!M.roughnessMap,H=M.anisotropy>0,te=M.clearcoat>0,J=M.iridescence>0,ie=M.sheen>0,_e=M.transmission>0,de=H&&!!M.anisotropyMap,me=te&&!!M.clearcoatMap,Te=te&&!!M.clearcoatNormalMap,Oe=te&&!!M.clearcoatRoughnessMap,Q=J&&!!M.iridescenceMap,Ke=J&&!!M.iridescenceThicknessMap,Ge=ie&&!!M.sheenColorMap,Ce=ie&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ge=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Ye=_e&&!!M.transmissionMap,dt=_e&&!!M.thicknessMap,ze=!!M.gradientMap,se=!!M.alphaMap,b=M.alphaTest>0,ce=!!M.alphaHash,ue=!!M.extensions,Ae=!!V.attributes.uv1,Ee=!!V.attributes.uv2,Qe=!!V.attributes.uv3;let Je=Vi;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Je=t.toneMapping),{isWebGL2:f,shaderID:I,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:Z,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:be,instancing:Ne,instancingColor:Ne&&re.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:gi,map:we,matcap:We,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:P,aoMap:jt,lightMap:Se,bumpMap:Pe,normalMap:ve,displacementMap:p&&at,emissiveMap:Fe,normalMapObjectSpace:ve&&M.normalMapType===HS,normalMapTangentSpace:ve&&M.normalMapType===jS,metalnessMap:N,roughnessMap:E,anisotropy:H,anisotropyMap:de,clearcoat:te,clearcoatMap:me,clearcoatNormalMap:Te,clearcoatRoughnessMap:Oe,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:Ke,sheen:ie,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:ge,specularIntensityMap:Ue,transmission:_e,transmissionMap:Ye,thicknessMap:dt,gradientMap:ze,opaque:M.transparent===!1&&M.blending===ps,alphaMap:se,alphaTest:b,alphaHash:ce,combine:M.combine,mapUv:we&&x(M.map.channel),aoMapUv:jt&&x(M.aoMap.channel),lightMapUv:Se&&x(M.lightMap.channel),bumpMapUv:Pe&&x(M.bumpMap.channel),normalMapUv:ve&&x(M.normalMap.channel),displacementMapUv:at&&x(M.displacementMap.channel),emissiveMapUv:Fe&&x(M.emissiveMap.channel),metalnessMapUv:N&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:de&&x(M.anisotropyMap.channel),clearcoatMapUv:me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:ge&&x(M.specularColorMap.channel),specularIntensityMapUv:Ue&&x(M.specularIntensityMap.channel),transmissionMapUv:Ye&&x(M.transmissionMap.channel),thicknessMapUv:dt&&x(M.thicknessMap.channel),alphaMapUv:se&&x(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ve||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Ee,vertexUv3s:Qe,pointsUvs:re.isPoints===!0&&!!V.attributes.uv&&(we||se),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:re.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:$,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ai,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(g(T,M),v(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const T=y[M.type];let z;if(T){const Y=Xn[T];z=mE.clone(Y.uniforms)}else z=M.uniforms;return z}function C(M,T){let z;for(let Y=0,re=u.length;Y<re;Y++){const L=u[Y];if(L.cacheKey===T){z=L,++z.usedTimes;break}}return z===void 0&&(z=new b1(t,T,M,s),u.push(z)),z}function R(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:D}}function I1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function F1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,p,_,y,x,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:_,groupOrder:y,renderOrder:h.renderOrder,z:x,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=_,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,p,_,y,x,m){const d=a(h,p,_,y,x,m);_.transmission>0?i.push(d):_.transparent===!0?r.push(d):n.push(d)}function c(h,p,_,y,x,m){const d=a(h,p,_,y,x,m);_.transmission>0?i.unshift(d):_.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,p){n.length>1&&n.sort(h||F1),i.length>1&&i.sort(p||Zp),r.length>1&&r.sort(p||Zp)}function f(){for(let h=e,p=t.length;h<p;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:u}}function O1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Qp,t.set(i,[a])):r>=s.length?(a=new Qp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function k1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new He};break;case"SpotLight":n={position:new O,direction:new O,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function z1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B1=0;function j1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function H1(t,e){const n=new k1,i=z1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new O);const s=new O,a=new Rt,o=new Rt;function c(f,h){let p=0,_=0,y=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,m=0,d=0,g=0,v=0,S=0,C=0,R=0,A=0,D=0,M=0;f.sort(j1);const T=h===!0?Math.PI:1;for(let Y=0,re=f.length;Y<re;Y++){const L=f[Y],V=L.color,k=L.intensity,q=L.distance,P=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=V.r*k*T,_+=V.g*k*T,y+=V.b*k*T;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],k);M++}else if(L.isDirectionalLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const F=L.shadow,K=i.get(L);K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=P,r.directionalShadowMatrix[x]=L.shadow.matrix,S++}r.directional[x]=I,x++}else if(L.isSpotLight){const I=n.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(V).multiplyScalar(k*T),I.distance=q,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[d]=I;const F=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,F.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[d]=F.matrix,L.castShadow){const K=i.get(L);K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,r.spotShadow[d]=K,r.spotShadowMap[d]=P,R++}d++}else if(L.isRectAreaLight){const I=n.get(L);I.color.copy(V).multiplyScalar(k),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=I,g++}else if(L.isPointLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*T),I.distance=L.distance,I.decay=L.decay,L.castShadow){const F=L.shadow,K=i.get(L);K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,K.shadowCameraNear=F.camera.near,K.shadowCameraFar=F.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=L.shadow.matrix,C++}r.point[m]=I,m++}else if(L.isHemisphereLight){const I=n.get(L);I.skyColor.copy(L.color).multiplyScalar(k*T),I.groundColor.copy(L.groundColor).multiplyScalar(k*T),r.hemi[v]=I,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==d||z.rectAreaLength!==g||z.hemiLength!==v||z.numDirectionalShadows!==S||z.numPointShadows!==C||z.numSpotShadows!==R||z.numSpotMaps!==A||z.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=g,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,z.directionalLength=x,z.pointLength=m,z.spotLength=d,z.rectAreaLength=g,z.hemiLength=v,z.numDirectionalShadows=S,z.numPointShadows=C,z.numSpotShadows=R,z.numSpotMaps=A,z.numLightProbes=M,r.version=B1++)}function u(f,h){let p=0,_=0,y=0,x=0,m=0;const d=h.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const S=f[g];if(S.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),p++}else if(S.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),y++}else if(S.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),_++}else if(S.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:c,setupView:u,state:r}}function Jp(t,e){const n=new H1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function c(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function G1(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let c;return o===void 0?(c=new Jp(t,e),n.set(s,[c])):a>=o.length?(c=new Jp(t,e),o.push(c)):c=o[a],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class V1 extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W1 extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y1(t,e,n){let i=new Kv;const r=new qe,s=new qe,a=new Pt,o=new V1({depthPacking:BS}),c=new W1,u={},f=n.maxTextureSize,h={[Yi]:rn,[rn]:Yi,[ai]:ai},p=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:X1,fragmentShader:q1}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const y=new Hn;y.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yn(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av;let d=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Gi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=d!==ii&&this.type===ii,L=d===ii&&this.type!==ii;for(let V=0,k=R.length;V<k;V++){const q=R[V],P=q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const I=P.getFrameExtents();if(r.multiply(I),s.copy(P.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/I.x),r.x=s.x*I.x,P.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/I.y),r.y=s.y*I.y,P.mapSize.y=s.y)),P.map===null||re===!0||L===!0){const K=this.type!==ii?{minFilter:Xt,magFilter:Xt}:{};P.map!==null&&P.map.dispose(),P.map=new Mr(r.x,r.y,K),P.map.texture.name=q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const F=P.getViewportCount();for(let K=0;K<F;K++){const $=P.getViewport(K);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),Y.viewport(a),P.updateMatrices(q,K),i=P.getFrustum(),S(A,D,P.camera,q,this.type)}P.isPointLightShadow!==!0&&this.type===ii&&g(P,D),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(M,T,z)};function g(R,A){const D=e.update(x);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mr(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,D,p,x,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,D,_,x,null)}function v(R,A,D,M){let T=null;const z=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)T=z;else if(T=D.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=T.uuid,re=A.uuid;let L=u[Y];L===void 0&&(L={},u[Y]=L);let V=L[re];V===void 0&&(V=T.clone(),L[re]=V,A.addEventListener("dispose",C)),T=V}if(T.visible=A.visible,T.wireframe=A.wireframe,M===ii?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=t.properties.get(T);Y.light=D}return T}function S(R,A,D,M,T){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===ii)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const re=e.update(R),L=R.material;if(Array.isArray(L)){const V=re.groups;for(let k=0,q=V.length;k<q;k++){const P=V[k],I=L[P.materialIndex];if(I&&I.visible){const F=v(R,I,M,T);R.onBeforeShadow(t,R,A,D,re,F,P),t.renderBufferDirect(D,null,re,F,R,P),R.onAfterShadow(t,R,A,D,re,F,P)}}}else if(L.visible){const V=v(R,L,M,T);R.onBeforeShadow(t,R,A,D,re,V,null),t.renderBufferDirect(D,null,re,V,R,null),R.onAfterShadow(t,R,A,D,re,V,null)}}const Y=R.children;for(let re=0,L=Y.length;re<L;re++)S(Y[re],A,D,M,T)}function C(R){R.target.removeEventListener("dispose",C);for(const D in u){const M=u[D],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function $1(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const ce=new Pt;let ue=null;const Ae=new Pt(0,0,0,0);return{setMask:function(Ee){ue!==Ee&&!b&&(t.colorMask(Ee,Ee,Ee,Ee),ue=Ee)},setLocked:function(Ee){b=Ee},setClear:function(Ee,Qe,Je,Mt,Ht){Ht===!0&&(Ee*=Mt,Qe*=Mt,Je*=Mt),ce.set(Ee,Qe,Je,Mt),Ae.equals(ce)===!1&&(t.clearColor(Ee,Qe,Je,Mt),Ae.copy(ce))},reset:function(){b=!1,ue=null,Ae.set(-1,0,0,0)}}}function s(){let b=!1,ce=null,ue=null,Ae=null;return{setTest:function(Ee){Ee?be(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Ee){ce!==Ee&&!b&&(t.depthMask(Ee),ce=Ee)},setFunc:function(Ee){if(ue!==Ee){switch(Ee){case mS:t.depthFunc(t.NEVER);break;case gS:t.depthFunc(t.ALWAYS);break;case vS:t.depthFunc(t.LESS);break;case hl:t.depthFunc(t.LEQUAL);break;case _S:t.depthFunc(t.EQUAL);break;case xS:t.depthFunc(t.GEQUAL);break;case yS:t.depthFunc(t.GREATER);break;case SS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Ee}},setLocked:function(Ee){b=Ee},setClear:function(Ee){Ae!==Ee&&(t.clearDepth(Ee),Ae=Ee)},reset:function(){b=!1,ce=null,ue=null,Ae=null}}}function a(){let b=!1,ce=null,ue=null,Ae=null,Ee=null,Qe=null,Je=null,Mt=null,Ht=null;return{setTest:function(et){b||(et?be(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!b&&(t.stencilMask(et),ce=et)},setFunc:function(et,Gt,Gn){(ue!==et||Ae!==Gt||Ee!==Gn)&&(t.stencilFunc(et,Gt,Gn),ue=et,Ae=Gt,Ee=Gn)},setOp:function(et,Gt,Gn){(Qe!==et||Je!==Gt||Mt!==Gn)&&(t.stencilOp(et,Gt,Gn),Qe=et,Je=Gt,Mt=Gn)},setLocked:function(et){b=et},setClear:function(et){Ht!==et&&(t.clearStencil(et),Ht=et)},reset:function(){b=!1,ce=null,ue=null,Ae=null,Ee=null,Qe=null,Je=null,Mt=null,Ht=null}}}const o=new r,c=new s,u=new a,f=new WeakMap,h=new WeakMap;let p={},_={},y=new WeakMap,x=[],m=null,d=!1,g=null,v=null,S=null,C=null,R=null,A=null,D=null,M=new He(0,0,0),T=0,z=!1,Y=null,re=null,L=null,V=null,k=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=I>=1):F.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=I>=2);let K=null,$={};const X=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),ne=new Pt().fromArray(X),oe=new Pt().fromArray(Z);function pe(b,ce,ue,Ae){const Ee=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(b,Qe),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<ue;Je++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,Ae,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(ce+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Qe}const Ne={};Ne[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),be(t.DEPTH_TEST),c.setFunc(hl),Fe(!1),N(Uh),be(t.CULL_FACE),ve(Gi);function be(b){p[b]!==!0&&(t.enable(b),p[b]=!0)}function we(b){p[b]!==!1&&(t.disable(b),p[b]=!1)}function We(b,ce){return _[b]!==ce?(t.bindFramebuffer(b,ce),_[b]=ce,i&&(b===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=ce),b===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function B(b,ce){let ue=x,Ae=!1;if(b)if(ue=y.get(ce),ue===void 0&&(ue=[],y.set(ce,ue)),b.isWebGLMultipleRenderTargets){const Ee=b.texture;if(ue.length!==Ee.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,Je=Ee.length;Qe<Je;Qe++)ue[Qe]=t.COLOR_ATTACHMENT0+Qe;ue.length=Ee.length,Ae=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Ae=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Ae=!0);Ae&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function jt(b){return m!==b?(t.useProgram(b),m=b,!0):!1}const Se={[lr]:t.FUNC_ADD,[eS]:t.FUNC_SUBTRACT,[tS]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[kh]=t.MIN,Se[zh]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Se[kh]=b.MIN_EXT,Se[zh]=b.MAX_EXT)}const Pe={[nS]:t.ZERO,[iS]:t.ONE,[rS]:t.SRC_COLOR,[Yu]:t.SRC_ALPHA,[uS]:t.SRC_ALPHA_SATURATE,[lS]:t.DST_COLOR,[aS]:t.DST_ALPHA,[sS]:t.ONE_MINUS_SRC_COLOR,[$u]:t.ONE_MINUS_SRC_ALPHA,[cS]:t.ONE_MINUS_DST_COLOR,[oS]:t.ONE_MINUS_DST_ALPHA,[dS]:t.CONSTANT_COLOR,[fS]:t.ONE_MINUS_CONSTANT_COLOR,[hS]:t.CONSTANT_ALPHA,[pS]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(b,ce,ue,Ae,Ee,Qe,Je,Mt,Ht,et){if(b===Gi){d===!0&&(we(t.BLEND),d=!1);return}if(d===!1&&(be(t.BLEND),d=!0),b!==Jy){if(b!==g||et!==z){if((v!==lr||R!==lr)&&(t.blendEquation(t.FUNC_ADD),v=lr,R=lr),et)switch(b){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ih:t.blendFunc(t.ONE,t.ONE);break;case Fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Oh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ih:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Oh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}S=null,C=null,A=null,D=null,M.set(0,0,0),T=0,g=b,z=et}return}Ee=Ee||ce,Qe=Qe||ue,Je=Je||Ae,(ce!==v||Ee!==R)&&(t.blendEquationSeparate(Se[ce],Se[Ee]),v=ce,R=Ee),(ue!==S||Ae!==C||Qe!==A||Je!==D)&&(t.blendFuncSeparate(Pe[ue],Pe[Ae],Pe[Qe],Pe[Je]),S=ue,C=Ae,A=Qe,D=Je),(Mt.equals(M)===!1||Ht!==T)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Ht),M.copy(Mt),T=Ht),g=b,z=!1}function at(b,ce){b.side===ai?we(t.CULL_FACE):be(t.CULL_FACE);let ue=b.side===rn;ce&&(ue=!ue),Fe(ue),b.blending===ps&&b.transparent===!1?ve(Gi):ve(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),o.setMask(b.colorWrite);const Ae=b.stencilWrite;u.setTest(Ae),Ae&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),H(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?be(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(b){Y!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),Y=b)}function N(b){b!==Ky?(be(t.CULL_FACE),b!==re&&(b===Uh?t.cullFace(t.BACK):b===Zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),re=b}function E(b){b!==L&&(P&&t.lineWidth(b),L=b)}function H(b,ce,ue){b?(be(t.POLYGON_OFFSET_FILL),(V!==ce||k!==ue)&&(t.polygonOffset(ce,ue),V=ce,k=ue)):we(t.POLYGON_OFFSET_FILL)}function te(b){b?be(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function J(b){b===void 0&&(b=t.TEXTURE0+q-1),K!==b&&(t.activeTexture(b),K=b)}function ie(b,ce,ue){ue===void 0&&(K===null?ue=t.TEXTURE0+q-1:ue=K);let Ae=$[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},$[ue]=Ae),(Ae.type!==b||Ae.texture!==ce)&&(K!==ue&&(t.activeTexture(ue),K=ue),t.bindTexture(b,ce||Ne[b]),Ae.type=b,Ae.texture=ce)}function _e(){const b=$[K];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Te(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Oe(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ue(b){ne.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),ne.copy(b))}function Ye(b){oe.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),oe.copy(b))}function dt(b,ce){let ue=h.get(ce);ue===void 0&&(ue=new WeakMap,h.set(ce,ue));let Ae=ue.get(b);Ae===void 0&&(Ae=t.getUniformBlockIndex(ce,b.name),ue.set(b,Ae))}function ze(b,ce){const Ae=h.get(ce).get(b);f.get(ce)!==Ae&&(t.uniformBlockBinding(ce,Ae,b.__bindingPointIndex),f.set(ce,Ae))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},K=null,$={},_={},y=new WeakMap,x=[],m=null,d=!1,g=null,v=null,S=null,C=null,R=null,A=null,D=null,M=new He(0,0,0),T=0,z=!1,Y=null,re=null,L=null,V=null,k=null,ne.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:be,disable:we,bindFramebuffer:We,drawBuffers:B,useProgram:jt,setBlending:ve,setMaterial:at,setFlipSided:Fe,setCullFace:N,setLineWidth:E,setPolygonOffset:H,setScissorTest:te,activeTexture:J,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:de,compressedTexImage3D:me,texImage2D:ye,texImage3D:ge,updateUBOMapping:dt,uniformBlockBinding:ze,texStorage2D:Ge,texStorage3D:Ce,texSubImage2D:Te,texSubImage3D:Oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:Ue,viewport:Ye,reset:se}}function K1(t,e,n,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,E){return _?new OffscreenCanvas(N,E):_l("canvas")}function x(N,E,H,te){let J=1;if((N.width>te||N.height>te)&&(J=te/Math.max(N.width,N.height)),J<1||E===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const ie=E?nd:Math.floor,_e=ie(J*N.width),de=ie(J*N.height);h===void 0&&(h=y(_e,de));const me=H?y(_e,de):h;return me.width=_e,me.height=de,me.getContext("2d").drawImage(N,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+_e+"x"+de+")."),me}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function m(N){return mp(N.width)&&mp(N.height)}function d(N){return o?!1:N.wrapS!==On||N.wrapT!==On||N.minFilter!==Xt&&N.minFilter!==En}function g(N,E){return N.generateMipmaps&&E&&N.minFilter!==Xt&&N.minFilter!==En}function v(N){t.generateMipmap(N)}function S(N,E,H,te,J=!1){if(o===!1)return E;if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ie=E;if(E===t.RED&&(H===t.FLOAT&&(ie=t.R32F),H===t.HALF_FLOAT&&(ie=t.R16F),H===t.UNSIGNED_BYTE&&(ie=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.R8UI),H===t.UNSIGNED_SHORT&&(ie=t.R16UI),H===t.UNSIGNED_INT&&(ie=t.R32UI),H===t.BYTE&&(ie=t.R8I),H===t.SHORT&&(ie=t.R16I),H===t.INT&&(ie=t.R32I)),E===t.RG&&(H===t.FLOAT&&(ie=t.RG32F),H===t.HALF_FLOAT&&(ie=t.RG16F),H===t.UNSIGNED_BYTE&&(ie=t.RG8)),E===t.RGBA){const _e=J?pl:Ze.getTransfer(te);H===t.FLOAT&&(ie=t.RGBA32F),H===t.HALF_FLOAT&&(ie=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ie=_e===it?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function C(N,E,H){return g(N,H)===!0||N.isFramebufferTexture&&N.minFilter!==Xt&&N.minFilter!==En?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function R(N){return N===Xt||N===Bh||N===Sc?t.NEAREST:t.LINEAR}function A(N){const E=N.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&f.delete(E)}function D(N){const E=N.target;E.removeEventListener("dispose",D),z(E)}function M(N){const E=i.get(N);if(E.__webglInit===void 0)return;const H=N.source,te=p.get(H);if(te){const J=te[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(N),Object.keys(te).length===0&&p.delete(H)}i.remove(N)}function T(N){const E=i.get(N);t.deleteTexture(E.__webglTexture);const H=N.source,te=p.get(H);delete te[E.__cacheKey],a.memory.textures--}function z(N){const E=N.texture,H=i.get(N),te=i.get(E);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let ie=0;ie<H.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(H.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)t.deleteFramebuffer(H.__webglFramebuffer[J]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let J=0,ie=E.length;J<ie;J++){const _e=i.get(E[J]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(E[J])}i.remove(E),i.remove(N)}let Y=0;function re(){Y=0}function L(){const N=Y;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),Y+=1,N}function V(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function k(N,E){const H=i.get(N);if(N.isVideoTexture&&at(N),N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(H,N,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function q(N,E){const H=i.get(N);if(N.version>0&&H.__version!==N.version){ne(H,N,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function P(N,E){const H=i.get(N);if(N.version>0&&H.__version!==N.version){ne(H,N,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function I(N,E){const H=i.get(N);if(N.version>0&&H.__version!==N.version){oe(H,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const F={[Qu]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[Ju]:t.MIRRORED_REPEAT},K={[Xt]:t.NEAREST,[Bh]:t.NEAREST_MIPMAP_NEAREST,[Sc]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[bS]:t.LINEAR_MIPMAP_NEAREST,[wa]:t.LINEAR_MIPMAP_LINEAR},$={[GS]:t.NEVER,[$S]:t.ALWAYS,[VS]:t.LESS,[Ov]:t.LEQUAL,[WS]:t.EQUAL,[YS]:t.GEQUAL,[XS]:t.GREATER,[qS]:t.NOTEQUAL};function X(N,E,H){if(H?(t.texParameteri(N,t.TEXTURE_WRAP_S,F[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,F[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,F[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,K[E.minFilter])):(t.texParameteri(N,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(N,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==On||E.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(N,t.TEXTURE_MAG_FILTER,R(E.magFilter)),t.texParameteri(N,t.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==Xt&&E.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Xt||E.minFilter!==Sc&&E.minFilter!==wa||E.type===Di&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Aa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Z(N,E){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",A));const te=E.source;let J=p.get(te);J===void 0&&(J={},p.set(te,J));const ie=V(E);if(ie!==N.__cacheKey){J[ie]===void 0&&(J[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[ie].usedTimes++;const _e=J[N.__cacheKey];_e!==void 0&&(J[N.__cacheKey].usedTimes--,_e.usedTimes===0&&T(E)),N.__cacheKey=ie,N.__webglTexture=J[ie].texture}return H}function ne(N,E,H){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const J=Z(N,E),ie=E.source;n.bindTexture(te,N.__webglTexture,t.TEXTURE0+H);const _e=i.get(ie);if(ie.version!==_e.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const de=Ze.getPrimaries(Ze.workingColorSpace),me=E.colorSpace===Tn?null:Ze.getPrimaries(E.colorSpace),Te=E.colorSpace===Tn||de===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Oe=d(E)&&m(E.image)===!1;let Q=x(E.image,Oe,!1,r.maxTextureSize);Q=Fe(E,Q);const Ke=m(Q)||o,Ge=s.convert(E.format,E.colorSpace);let Ce=s.convert(E.type),ye=S(E.internalFormat,Ge,Ce,E.colorSpace,E.isVideoTexture);X(te,E,Ke);let ge;const Ue=E.mipmaps,Ye=o&&E.isVideoTexture!==!0&&ye!==Iv,dt=_e.__version===void 0||J===!0,ze=C(E,Q,Ke);if(E.isDepthTexture)ye=t.DEPTH_COMPONENT,o?E.type===Di?ye=t.DEPTH_COMPONENT32F:E.type===Li?ye=t.DEPTH_COMPONENT24:E.type===mr?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:E.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===gr&&ye===t.DEPTH_COMPONENT&&E.type!==nf&&E.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Li,Ce=s.convert(E.type)),E.format===ws&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,E.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=mr,Ce=s.convert(E.type))),dt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,ye,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,ye,Q.width,Q.height,0,Ge,Ce,null));else if(E.isDataTexture)if(Ue.length>0&&Ke){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Ue[0].width,Ue[0].height);for(let se=0,b=Ue.length;se<b;se++)ge=Ue[se],Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Ge,Ce,ge.data):n.texImage2D(t.TEXTURE_2D,se,ye,ge.width,ge.height,0,Ge,Ce,ge.data);E.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,Ge,Ce,Q.data)):n.texImage2D(t.TEXTURE_2D,0,ye,Q.width,Q.height,0,Ge,Ce,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,ye,Ue[0].width,Ue[0].height,Q.depth);for(let se=0,b=Ue.length;se<b;se++)ge=Ue[se],E.format!==kn?Ge!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,Q.depth,Ge,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,ye,ge.width,ge.height,Q.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,Q.depth,Ge,Ce,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,ye,ge.width,ge.height,Q.depth,0,Ge,Ce,ge.data)}else{Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Ue[0].width,Ue[0].height);for(let se=0,b=Ue.length;se<b;se++)ge=Ue[se],E.format!==kn?Ge!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Ge,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,se,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Ge,Ce,ge.data):n.texImage2D(t.TEXTURE_2D,se,ye,ge.width,ge.height,0,Ge,Ce,ge.data)}else if(E.isDataArrayTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,ye,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Ce,Q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,Ge,Ce,Q.data);else if(E.isData3DTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_3D,ze,ye,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Ce,Q.data)):n.texImage3D(t.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,Ge,Ce,Q.data);else if(E.isFramebufferTexture){if(dt)if(Ye)n.texStorage2D(t.TEXTURE_2D,ze,ye,Q.width,Q.height);else{let se=Q.width,b=Q.height;for(let ce=0;ce<ze;ce++)n.texImage2D(t.TEXTURE_2D,ce,ye,se,b,0,Ge,Ce,null),se>>=1,b>>=1}}else if(Ue.length>0&&Ke){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Ue[0].width,Ue[0].height);for(let se=0,b=Ue.length;se<b;se++)ge=Ue[se],Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ge,Ce,ge):n.texImage2D(t.TEXTURE_2D,se,ye,Ge,Ce,ge);E.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,Ce,Q)):n.texImage2D(t.TEXTURE_2D,0,ye,Ge,Ce,Q);g(E,Ke)&&v(te),_e.__version=ie.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function oe(N,E,H){if(E.image.length!==6)return;const te=Z(N,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+H);const ie=i.get(J);if(J.version!==ie.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const _e=Ze.getPrimaries(Ze.workingColorSpace),de=E.colorSpace===Tn?null:Ze.getPrimaries(E.colorSpace),me=E.colorSpace===Tn||_e===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,Oe=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let se=0;se<6;se++)!Te&&!Oe?Q[se]=x(E.image[se],!1,!0,r.maxCubemapSize):Q[se]=Oe?E.image[se].image:E.image[se],Q[se]=Fe(E,Q[se]);const Ke=Q[0],Ge=m(Ke)||o,Ce=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),ge=S(E.internalFormat,Ce,ye,E.colorSpace),Ue=o&&E.isVideoTexture!==!0,Ye=ie.__version===void 0||te===!0;let dt=C(E,Ke,Ge);X(t.TEXTURE_CUBE_MAP,E,Ge);let ze;if(Te){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,ge,Ke.width,Ke.height);for(let se=0;se<6;se++){ze=Q[se].mipmaps;for(let b=0;b<ze.length;b++){const ce=ze[b];E.format!==kn?Ce!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,0,0,ce.width,ce.height,Ce,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,0,0,ce.width,ce.height,Ce,ye,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,ge,ce.width,ce.height,0,Ce,ye,ce.data)}}}else{ze=E.mipmaps,Ue&&Ye&&(ze.length>0&&dt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,ge,Q[0].width,Q[0].height));for(let se=0;se<6;se++)if(Oe){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Q[se].width,Q[se].height,Ce,ye,Q[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,Q[se].width,Q[se].height,0,Ce,ye,Q[se].data);for(let b=0;b<ze.length;b++){const ue=ze[b].image[se].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,0,0,ue.width,ue.height,Ce,ye,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,ge,ue.width,ue.height,0,Ce,ye,ue.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,ye,Q[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,Ce,ye,Q[se]);for(let b=0;b<ze.length;b++){const ce=ze[b];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,0,0,Ce,ye,ce.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,ge,Ce,ye,ce.image[se])}}}g(E,Ge)&&v(t.TEXTURE_CUBE_MAP),ie.__version=J.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function pe(N,E,H,te,J,ie){const _e=s.convert(H.format,H.colorSpace),de=s.convert(H.type),me=S(H.internalFormat,_e,de,H.colorSpace);if(!i.get(E).__hasExternalTextures){const Oe=Math.max(1,E.width>>ie),Q=Math.max(1,E.height>>ie);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ie,me,Oe,Q,E.depth,0,_e,de,null):n.texImage2D(J,ie,me,Oe,Q,0,_e,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),ve(E)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(H).__webglTexture,0,Pe(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(H).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(N,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer&&!E.stencilBuffer){let te=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ve(E)){const J=E.depthTexture;J&&J.isDepthTexture&&(J.type===Di?te=t.DEPTH_COMPONENT32F:J.type===Li&&(te=t.DEPTH_COMPONENT24));const ie=Pe(E);ve(E)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,te,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,te,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,N)}else if(E.depthBuffer&&E.stencilBuffer){const te=Pe(E);H&&ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):ve(E)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,N)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0;J<te.length;J++){const ie=te[J],_e=s.convert(ie.format,ie.colorSpace),de=s.convert(ie.type),me=S(ie.internalFormat,_e,de,ie.colorSpace),Te=Pe(E);H&&ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,me,E.width,E.height):ve(E)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,J=Pe(E);if(E.depthTexture.format===gr)ve(E)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(E.depthTexture.format===ws)ve(E)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(N){const E=i.get(N),H=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");be(E.__webglFramebuffer,N)}else if(H){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=t.createRenderbuffer(),Ne(E.__webglDepthbuffer[te],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Ne(E.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(N,E,H){const te=i.get(N);E!==void 0&&pe(te.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&we(N)}function B(N){const E=N.texture,H=i.get(N),te=i.get(E);N.addEventListener("dispose",D),N.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,a.memory.textures++);const J=N.isWebGLCubeRenderTarget===!0,ie=N.isWebGLMultipleRenderTargets===!0,_e=m(N)||o;if(J){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let me=0;me<E.mipmaps.length;me++)H.__webglFramebuffer[de][me]=t.createFramebuffer()}else H.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)H.__webglFramebuffer[de]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const de=N.texture;for(let me=0,Te=de.length;me<Te;me++){const Oe=i.get(de[me]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&ve(N)===!1){const de=ie?E:[E];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<de.length;me++){const Te=de[me];H.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const Oe=s.convert(Te.format,Te.colorSpace),Q=s.convert(Te.type),Ke=S(Te.internalFormat,Oe,Q,Te.colorSpace,N.isXRRenderTarget===!0),Ge=Pe(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ke,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,H.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),X(t.TEXTURE_CUBE_MAP,E,_e);for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)pe(H.__webglFramebuffer[de][me],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else pe(H.__webglFramebuffer[de],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(E,_e)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const de=N.texture;for(let me=0,Te=de.length;me<Te;me++){const Oe=de[me],Q=i.get(Oe);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),X(t.TEXTURE_2D,Oe,_e),pe(H.__webglFramebuffer,N,Oe,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),g(Oe,_e)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?de=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,te.__webglTexture),X(de,E,_e),o&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)pe(H.__webglFramebuffer[me],N,E,t.COLOR_ATTACHMENT0,de,me);else pe(H.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,de,0);g(E,_e)&&v(de),n.unbindTexture()}N.depthBuffer&&we(N)}function jt(N){const E=m(N)||o,H=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let te=0,J=H.length;te<J;te++){const ie=H[te];if(g(ie,E)){const _e=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(ie).__webglTexture;n.bindTexture(_e,de),v(_e),n.unbindTexture()}}}function Se(N){if(o&&N.samples>0&&ve(N)===!1){const E=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],H=N.width,te=N.height;let J=t.COLOR_BUFFER_BIT;const ie=[],_e=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(N),me=N.isWebGLMultipleRenderTargets===!0;if(me)for(let Te=0;Te<E.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){ie.push(t.COLOR_ATTACHMENT0+Te),N.depthBuffer&&ie.push(_e);const Oe=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Oe===!1&&(N.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Te]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),me){const Q=i.get(E[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,J,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Te=0;Te<E.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,de.__webglColorRenderbuffer[Te]);const Oe=i.get(E[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Pe(N){return Math.min(r.maxSamples,N.samples)}function ve(N){const E=i.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function at(N){const E=a.render.frame;f.get(N)!==E&&(f.set(N,E),N.update())}function Fe(N,E){const H=N.colorSpace,te=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===ed||H!==gi&&H!==Tn&&(Ze.getTransfer(H)===it?o===!1?e.has("EXT_sRGB")===!0&&te===kn?(N.format=ed,N.minFilter=En,N.generateMipmaps=!1):E=zv.sRGBToLinear(E):(te!==kn||J!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=L,this.resetTextureUnits=re,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=P,this.setTextureCube=I,this.rebindTextures=We,this.setupRenderTarget=B,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function Z1(t,e,n){const i=n.isWebGL2;function r(s,a=Tn){let o;const c=Ze.getTransfer(a);if(s===Wi)return t.UNSIGNED_BYTE;if(s===bv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Pv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===PS)return t.BYTE;if(s===LS)return t.SHORT;if(s===nf)return t.UNSIGNED_SHORT;if(s===Cv)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===Di)return t.FLOAT;if(s===Aa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===DS)return t.ALPHA;if(s===kn)return t.RGBA;if(s===US)return t.LUMINANCE;if(s===IS)return t.LUMINANCE_ALPHA;if(s===gr)return t.DEPTH_COMPONENT;if(s===ws)return t.DEPTH_STENCIL;if(s===ed)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===FS)return t.RED;if(s===Lv)return t.RED_INTEGER;if(s===OS)return t.RG;if(s===Dv)return t.RG_INTEGER;if(s===Uv)return t.RGBA_INTEGER;if(s===Ec||s===Mc||s===Tc||s===wc)if(c===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ec)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ec)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jh||s===Hh||s===Gh||s===Vh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Iv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wh||s===Xh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Wh)return c===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xh)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qh||s===Yh||s===$h||s===Kh||s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===qh)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$h)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zh)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tp)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===np)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ip)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rp)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ap)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ac||s===op||s===lp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ac)return c===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===op)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kS||s===cp||s===up||s===dp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ac)return o.COMPRESSED_RED_RGTC1_EXT;if(s===cp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===up)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Q1 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=f.position.distanceTo(h.position),_=.02,y=.005;u.inputState.pinching&&p>_+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=_-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class eA extends bs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,f=null,h=null,p=null,_=null,y=null;const x=n.getContextAttributes();let m=null,d=null;const g=[],v=[],S=new qe;let C=null;const R=new Mn;R.layers.enable(1),R.viewport=new Pt;const A=new Mn;A.layers.enable(2),A.viewport=new Pt;const D=[R,A],M=new Q1;M.layers.enable(1),M.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=g[X];return Z===void 0&&(Z=new Zc,g[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=g[X];return Z===void 0&&(Z=new Zc,g[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=g[X];return Z===void 0&&(Z=new Zc,g[X]=Z),Z.getHandSpace()};function Y(X){const Z=v.indexOf(X.inputSource);if(Z===-1)return;const ne=g[Z];ne!==void 0&&(ne.update(X.inputSource,X.frame,u||a),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function re(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",L);for(let X=0;X<g.length;X++){const Z=v[X];Z!==null&&(v[X]=null,g[X].disconnect(Z))}T=null,z=null,e.setRenderTarget(m),_=null,p=null,h=null,r=null,d=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",re),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),d=new Mr(_.framebufferWidth,_.framebufferHeight,{format:kn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,ne=null,oe=null;x.depth&&(oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=x.stencil?ws:gr,ne=x.stencil?mr:Li);const pe={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(pe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Mr(p.textureWidth,p.textureHeight,{format:kn,type:Wi,depthTexture:new Qv(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ne=e.properties.get(d);Ne.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(X){for(let Z=0;Z<X.removed.length;Z++){const ne=X.removed[Z],oe=v.indexOf(ne);oe>=0&&(v[oe]=null,g[oe].disconnect(ne))}for(let Z=0;Z<X.added.length;Z++){const ne=X.added[Z];let oe=v.indexOf(ne);if(oe===-1){for(let Ne=0;Ne<g.length;Ne++)if(Ne>=v.length){v.push(ne),oe=Ne;break}else if(v[Ne]===null){v[Ne]=ne,oe=Ne;break}if(oe===-1)break}const pe=g[oe];pe&&pe.connect(ne)}}const V=new O,k=new O;function q(X,Z,ne){V.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const oe=V.distanceTo(k),pe=Z.projectionMatrix.elements,Ne=ne.projectionMatrix.elements,be=pe[14]/(pe[10]-1),we=pe[14]/(pe[10]+1),We=(pe[9]+1)/pe[5],B=(pe[9]-1)/pe[5],jt=(pe[8]-1)/pe[0],Se=(Ne[8]+1)/Ne[0],Pe=be*jt,ve=be*Se,at=oe/(-jt+Se),Fe=at*-jt;Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(at),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const N=be+at,E=we+at,H=Pe-Fe,te=ve+(oe-Fe),J=We*we/E*N,ie=B*we/E*N;X.projectionMatrix.makePerspective(H,te,J,ie,N,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function P(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.near=A.near=R.near=X.near,M.far=A.far=R.far=X.far,(T!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,z=M.far);const Z=X.parent,ne=M.cameras;P(M,Z);for(let oe=0;oe<ne.length;oe++)P(ne[oe],Z);ne.length===2?q(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),I(X,M,Z)};function I(X,Z,ne){ne===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=td*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)};let F=null;function K(X,Z){if(f=Z.getViewerPose(u||a),y=Z,f!==null){const ne=f.views;_!==null&&(e.setRenderTargetFramebuffer(d,_.framebuffer),e.setRenderTarget(d));let oe=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let pe=0;pe<ne.length;pe++){const Ne=ne[pe];let be=null;if(_!==null)be=_.getViewport(Ne);else{const We=h.getViewSubImage(p,Ne);be=We.viewport,pe===0&&(e.setRenderTargetTextures(d,We.colorTexture,p.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(d))}let we=D[pe];we===void 0&&(we=new Mn,we.layers.enable(pe),we.viewport=new Pt,D[pe]=we),we.matrix.fromArray(Ne.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ne.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(we)}}for(let ne=0;ne<g.length;ne++){const oe=v[ne],pe=g[ne];oe!==null&&pe!==void 0&&pe.update(oe,Z,u||a)}F&&F(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),y=null}const $=new Zv;$.setAnimationLoop(K),this.setAnimationLoop=function(X){F=X},this.dispose=function(){}}}function tA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,qv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&_(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,g,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,g,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function _(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function u(g,v){let S=r[g.id];S===void 0&&(y(g),S=f(g),r[g.id]=S,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const R=e.render.frame;s[g.id]!==R&&(p(g),s[g.id]=R)}function f(g){const v=h();g.__bindingPointIndex=v;const S=t.createBuffer(),C=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const v=r[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,A=S.length;R<A;R++){const D=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,T=D.length;M<T;M++){const z=D[M];if(_(z,R,M,C)===!0){const Y=z.__offset,re=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let V=0;V<re.length;V++){const k=re[V],q=x(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,Y+L,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(g,v,S,C){const R=g.value,A=v+"_"+S;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const D=C[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function y(g){const v=g.uniforms;let S=0;const C=16;for(let A=0,D=v.length;A<D;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let T=0,z=M.length;T<z;T++){const Y=M[T],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,V=re.length;L<V;L++){const k=re[L],q=x(k),P=S%C;P!==0&&C-P<q.boundary&&(S+=C-P),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=q.storage}}}const R=S%C;return R>0&&(S+=C-R),g.__size=S,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class r_{constructor(e={}){const{canvas:n=ZS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const _=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const v=this;let S=!1,C=0,R=0,A=null,D=-1,M=null;const T=new Pt,z=new Pt;let Y=null;const re=new He(0);let L=0,V=n.width,k=n.height,q=1,P=null,I=null;const F=new Pt(0,0,V,k),K=new Pt(0,0,V,k);let $=!1;const X=new Kv;let Z=!1,ne=!1,oe=null;const pe=new Rt,Ne=new qe,be=new O,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?q:1}let B=i;function jt(w,U){for(let G=0;G<w.length;G++){const W=w[G],j=n.getContext(W,U);if(j!==null)return j}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tf}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",ce,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),B=jt(U,w),B===null)throw jt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,Pe,ve,at,Fe,N,E,H,te,J,ie,_e,de,me,Te,Oe,Q,Ke,Ge,Ce,ye,ge,Ue,Ye;function dt(){Se=new fw(B),Pe=new sw(B,Se,e),Se.init(Pe),ge=new Z1(B,Se,Pe),ve=new $1(B,Se,Pe),at=new mw(B),Fe=new I1,N=new K1(B,Se,ve,Fe,Pe,ge,at),E=new ow(v),H=new dw(v),te=new EE(B,Pe),Ue=new iw(B,Se,te,Pe),J=new hw(B,te,at,Ue),ie=new xw(B,J,te,at),Ge=new _w(B,Pe,N),Oe=new aw(Fe),_e=new U1(v,E,H,Se,Pe,Ue,Oe),de=new tA(v,Fe),me=new O1,Te=new G1(Se,Pe),Ke=new nw(v,E,H,ve,ie,p,c),Q=new Y1(v,ie,Pe),Ye=new nA(B,at,Pe,ve),Ce=new rw(B,Se,at,Pe),ye=new pw(B,Se,at,Pe),at.programs=_e.programs,v.capabilities=Pe,v.extensions=Se,v.properties=Fe,v.renderLists=me,v.shadowMap=Q,v.state=ve,v.info=at}dt();const ze=new eA(v,B);this.xr=ze,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(V,k,!1))},this.getSize=function(w){return w.set(V,k)},this.setSize=function(w,U,G=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,k=U,n.width=Math.floor(w*q),n.height=Math.floor(U*q),G===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(V*q,k*q).floor()},this.setDrawingBufferSize=function(w,U,G){V=w,k=U,q=G,n.width=Math.floor(w*G),n.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,U,G,W){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,U,G,W),ve.viewport(T.copy(F).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,U,G,W){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,U,G,W),ve.scissor(z.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(w){ve.setScissorTest($=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(w=!0,U=!0,G=!0){let W=0;if(w){let j=!1;if(A!==null){const fe=A.texture.format;j=fe===Uv||fe===Dv||fe===Lv}if(j){const fe=A.texture.type,xe=fe===Wi||fe===Li||fe===nf||fe===mr||fe===bv||fe===Pv,Me=Ke.getClearColor(),Re=Ke.getClearAlpha(),ke=Me.r,Le=Me.g,De=Me.b;xe?(_[0]=ke,_[1]=Le,_[2]=De,_[3]=Re,B.clearBufferuiv(B.COLOR,0,_)):(y[0]=ke,y[1]=Le,y[2]=De,y[3]=Re,B.clearBufferiv(B.COLOR,0,y))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),me.dispose(),Te.dispose(),Fe.dispose(),E.dispose(),H.dispose(),ie.dispose(),Ue.dispose(),Ye.dispose(),_e.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Ht),ze.removeEventListener("sessionend",et),oe&&(oe.dispose(),oe=null),Gt.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=at.autoReset,U=Q.enabled,G=Q.autoUpdate,W=Q.needsUpdate,j=Q.type;dt(),at.autoReset=w,Q.enabled=U,Q.autoUpdate=G,Q.needsUpdate=W,Q.type=j}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const U=w.target;U.removeEventListener("dispose",ue),Ae(U)}function Ae(w){Ee(w),Fe.remove(w)}function Ee(w){const U=Fe.get(w).programs;U!==void 0&&(U.forEach(function(G){_e.releaseProgram(G)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,W,j,fe){U===null&&(U=we);const xe=j.isMesh&&j.matrixWorld.determinant()<0,Me=o_(w,U,G,W,j);ve.setMaterial(W,xe);let Re=G.index,ke=1;if(W.wireframe===!0){if(Re=J.getWireframeAttribute(G),Re===void 0)return;ke=2}const Le=G.drawRange,De=G.attributes.position;let pt=Le.start*ke,an=(Le.start+Le.count)*ke;fe!==null&&(pt=Math.max(pt,fe.start*ke),an=Math.min(an,(fe.start+fe.count)*ke)),Re!==null?(pt=Math.max(pt,0),an=Math.min(an,Re.count)):De!=null&&(pt=Math.max(pt,0),an=Math.min(an,De.count));const Tt=an-pt;if(Tt<0||Tt===1/0)return;Ue.setup(j,W,Me,G,Re);let Zn,ot=Ce;if(Re!==null&&(Zn=te.get(Re),ot=ye,ot.setIndex(Zn)),j.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*We()),ot.setMode(B.LINES)):ot.setMode(B.TRIANGLES);else if(j.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),ve.setLineWidth(Be*We()),j.isLineSegments?ot.setMode(B.LINES):j.isLineLoop?ot.setMode(B.LINE_LOOP):ot.setMode(B.LINE_STRIP)}else j.isPoints?ot.setMode(B.POINTS):j.isSprite&&ot.setMode(B.TRIANGLES);if(j.isBatchedMesh)ot.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ot.renderInstances(pt,Tt,j.count);else if(G.isInstancedBufferGeometry){const Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Vl=Math.min(G.instanceCount,Be);ot.renderInstances(pt,Tt,Vl)}else ot.render(pt,Tt)};function Qe(w,U,G){w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,za(w,U,G),w.side=Yi,w.needsUpdate=!0,za(w,U,G),w.side=ai):za(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),m=Te.get(G),m.init(),g.push(m),G.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),w!==G&&w.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(v._useLegacyLights);const W=new Set;return w.traverse(function(j){const fe=j.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const Me=fe[xe];Qe(Me,G,j),W.add(Me)}else Qe(fe,G,j),W.add(fe)}),g.pop(),m=null,W},this.compileAsync=function(w,U,G=null){const W=this.compile(w,U,G);return new Promise(j=>{function fe(){if(W.forEach(function(xe){Fe.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){j(w);return}setTimeout(fe,10)}Se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Je=null;function Mt(w){Je&&Je(w)}function Ht(){Gt.stop()}function et(){Gt.start()}const Gt=new Zv;Gt.setAnimationLoop(Mt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(w){Je=w,ze.setAnimationLoop(w),w===null?Gt.stop():Gt.start()},ze.addEventListener("sessionstart",Ht),ze.addEventListener("sessionend",et),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(U),U=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),m=Te.get(w,g.length),m.init(),g.push(m),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(pe),ne=this.localClippingEnabled,Z=Oe.init(this.clippingPlanes,ne),x=me.get(w,d.length),x.init(),d.push(x),Gn(w,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(P,I),this.info.render.frame++,Z===!0&&Oe.beginShadows();const G=m.state.shadowsArray;if(Q.render(G,w,U),Z===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(x,w),m.setupLights(v._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let j=0,fe=W.length;j<fe;j++){const xe=W[j];uf(x,w,xe,xe.viewport)}}else uf(x,w,U);A!==null&&(N.updateMultisampleRenderTarget(A),N.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),Ue.resetDefaultState(),D=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Gn(w,U,G,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const xe=ie.update(w),Me=w.material;Me.visible&&x.push(w,xe,Me,G,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const xe=ie.update(w),Me=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),be.copy(xe.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(Me)){const Re=xe.groups;for(let ke=0,Le=Re.length;ke<Le;ke++){const De=Re[ke],pt=Me[De.materialIndex];pt&&pt.visible&&x.push(w,xe,pt,G,be.z,De)}}else Me.visible&&x.push(w,xe,Me,G,be.z,null)}}const fe=w.children;for(let xe=0,Me=fe.length;xe<Me;xe++)Gn(fe[xe],U,G,W)}function uf(w,U,G,W){const j=w.opaque,fe=w.transmissive,xe=w.transparent;m.setupLightsView(G),Z===!0&&Oe.setGlobalState(v.clippingPlanes,G),fe.length>0&&a_(j,fe,U,G),W&&ve.viewport(T.copy(W)),j.length>0&&ka(j,U,G),fe.length>0&&ka(fe,U,G),xe.length>0&&ka(xe,U,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function a_(w,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const fe=Pe.isWebGL2;oe===null&&(oe=new Mr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Aa:Wi,minFilter:wa,samples:fe?4:0})),v.getDrawingBufferSize(Ne),fe?oe.setSize(Ne.x,Ne.y):oe.setSize(nd(Ne.x),nd(Ne.y));const xe=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(re),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=Vi,ka(w,G,W),N.updateMultisampleRenderTarget(oe),N.updateRenderTargetMipmap(oe);let Re=!1;for(let ke=0,Le=U.length;ke<Le;ke++){const De=U[ke],pt=De.object,an=De.geometry,Tt=De.material,Zn=De.group;if(Tt.side===ai&&pt.layers.test(W.layers)){const ot=Tt.side;Tt.side=rn,Tt.needsUpdate=!0,df(pt,G,W,an,Tt,Zn),Tt.side=ot,Tt.needsUpdate=!0,Re=!0}}Re===!0&&(N.updateMultisampleRenderTarget(oe),N.updateRenderTargetMipmap(oe)),v.setRenderTarget(xe),v.setClearColor(re,L),v.toneMapping=Me}function ka(w,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let j=0,fe=w.length;j<fe;j++){const xe=w[j],Me=xe.object,Re=xe.geometry,ke=W===null?xe.material:W,Le=xe.group;Me.layers.test(G.layers)&&df(Me,U,G,Re,ke,Le)}}function df(w,U,G,W,j,fe){w.onBeforeRender(v,U,G,W,j,fe),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,U,G,W,w,fe),j.transparent===!0&&j.side===ai&&j.forceSinglePass===!1?(j.side=rn,j.needsUpdate=!0,v.renderBufferDirect(G,U,W,j,w,fe),j.side=Yi,j.needsUpdate=!0,v.renderBufferDirect(G,U,W,j,w,fe),j.side=ai):v.renderBufferDirect(G,U,W,j,w,fe),w.onAfterRender(v,U,G,W,j,fe)}function za(w,U,G){U.isScene!==!0&&(U=we);const W=Fe.get(w),j=m.state.lights,fe=m.state.shadowsArray,xe=j.state.version,Me=_e.getParameters(w,j.state,fe,U,G),Re=_e.getProgramCacheKey(Me);let ke=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?H:E).get(w.envMap||W.environment),ke===void 0&&(w.addEventListener("dispose",ue),ke=new Map,W.programs=ke);let Le=ke.get(Re);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===xe)return hf(w,Me),Le}else Me.uniforms=_e.getUniforms(w),w.onBuild(G,Me,v),w.onBeforeCompile(Me,v),Le=_e.acquireProgram(Me,Re),ke.set(Re,Le),W.uniforms=Me.uniforms;const De=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Oe.uniform),hf(w,Me),W.needsLights=c_(w),W.lightsStateVersion=xe,W.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function ff(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=jo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function hf(w,U){const G=Fe.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function o_(w,U,G,W,j){U.isScene!==!0&&(U=we),N.resetTextureUnits();const fe=U.fog,xe=W.isMeshStandardMaterial?U.environment:null,Me=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gi,Re=(W.isMeshStandardMaterial?H:E).get(W.envMap||xe),ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!G.morphAttributes.position,pt=!!G.morphAttributes.normal,an=!!G.morphAttributes.color;let Tt=Vi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const Zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=Zn!==void 0?Zn.length:0,Be=Fe.get(W),Vl=m.state.lights;if(Z===!0&&(ne===!0||w!==M)){const _n=w===M&&W.id===D;Oe.setState(W,w,_n)}let ft=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Vl.state.version||Be.outputColorSpace!==Me||j.isBatchedMesh&&Be.batching===!1||!j.isBatchedMesh&&Be.batching===!0||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||j.isInstancedMesh&&Be.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Be.instancingColor===!1&&j.instanceColor!==null||Be.envMap!==Re||W.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Oe.numPlanes||Be.numIntersection!==Oe.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Le||Be.morphTargets!==De||Be.morphNormals!==pt||Be.morphColors!==an||Be.toneMapping!==Tt||Pe.isWebGL2===!0&&Be.morphTargetsCount!==ot)&&(ft=!0):(ft=!0,Be.__version=W.version);let Qi=Be.currentProgram;ft===!0&&(Qi=za(W,U,j));let pf=!1,Ls=!1,Wl=!1;const Ut=Qi.getUniforms(),Ji=Be.uniforms;if(ve.useProgram(Qi.program)&&(pf=!0,Ls=!0,Wl=!0),W.id!==D&&(D=W.id,Ls=!0),pf||M!==w){Ut.setValue(B,"projectionMatrix",w.projectionMatrix),Ut.setValue(B,"viewMatrix",w.matrixWorldInverse);const _n=Ut.map.cameraPosition;_n!==void 0&&_n.setValue(B,be.setFromMatrixPosition(w.matrixWorld)),Pe.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ls=!0,Wl=!0)}if(j.isSkinnedMesh){Ut.setOptional(B,j,"bindMatrix"),Ut.setOptional(B,j,"bindMatrixInverse");const _n=j.skeleton;_n&&(Pe.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ut.setValue(B,"boneTexture",_n.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Ut.setOptional(B,j,"batchingTexture"),Ut.setValue(B,"batchingTexture",j._matricesTexture,N));const Xl=G.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0&&Pe.isWebGL2===!0)&&Ge.update(j,G,Qi),(Ls||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,Ut.setValue(B,"receiveShadow",j.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ji.envMap.value=Re,Ji.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Ls&&(Ut.setValue(B,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&l_(Ji,Wl),fe&&W.fog===!0&&de.refreshFogUniforms(Ji,fe),de.refreshMaterialUniforms(Ji,W,q,k,oe),jo.upload(B,ff(Be),Ji,N)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(jo.upload(B,ff(Be),Ji,N),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(B,"center",j.center),Ut.setValue(B,"modelViewMatrix",j.modelViewMatrix),Ut.setValue(B,"normalMatrix",j.normalMatrix),Ut.setValue(B,"modelMatrix",j.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _n=W.uniformsGroups;for(let ql=0,u_=_n.length;ql<u_;ql++)if(Pe.isWebGL2){const mf=_n[ql];Ye.update(mf,Qi),Ye.bind(mf,Qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qi}function l_(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function c_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,G){Fe.get(w.texture).__webglTexture=U,Fe.get(w.depthTexture).__webglTexture=G;const W=Fe.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const G=Fe.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){A=w,C=U,R=G;let W=!0,j=null,fe=!1,xe=!1;if(w){const Re=Fe.get(w);Re.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Re.__webglFramebuffer===void 0?N.setupRenderTarget(w):Re.__hasExternalTextures&&N.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const Le=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?j=Le[U][G]:j=Le[U],fe=!0):Pe.isWebGL2&&w.samples>0&&N.useMultisampledRTT(w)===!1?j=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?j=Le[G]:j=Le,T.copy(w.viewport),z.copy(w.scissor),Y=w.scissorTest}else T.copy(F).multiplyScalar(q).floor(),z.copy(K).multiplyScalar(q).floor(),Y=$;if(ve.bindFramebuffer(B.FRAMEBUFFER,j)&&Pe.drawBuffers&&W&&ve.drawBuffers(w,j),ve.viewport(T),ve.scissor(z),ve.setScissorTest(Y),fe){const Re=Fe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,G)}else if(xe){const Re=Fe.get(w.texture),ke=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,G||0,ke)}D=-1},this.readRenderTargetPixels=function(w,U,G,W,j,fe,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){ve.bindFramebuffer(B.FRAMEBUFFER,Me);try{const Re=w.texture,ke=Re.format,Le=Re.type;if(ke!==kn&&ge.convert(ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Aa&&(Se.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Le!==Wi&&ge.convert(Le)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Di&&(Pe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&G>=0&&G<=w.height-j&&B.readPixels(U,G,W,j,ge.convert(ke),ge.convert(Le),fe)}finally{const Re=A!==null?Fe.get(A).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,U,G=0){const W=Math.pow(2,-G),j=Math.floor(U.image.width*W),fe=Math.floor(U.image.height*W);N.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,w.x,w.y,j,fe),ve.unbindTexture()},this.copyTextureToTexture=function(w,U,G,W=0){const j=U.image.width,fe=U.image.height,xe=ge.convert(G.format),Me=ge.convert(G.type);N.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,w.x,w.y,j,fe,xe,Me,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,w.x,w.y,xe,Me,U.image),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G,W,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=w.max.x-w.min.x+1,xe=w.max.y-w.min.y+1,Me=w.max.z-w.min.z+1,Re=ge.convert(W.format),ke=ge.convert(W.type);let Le;if(W.isData3DTexture)N.setTexture3D(W,0),Le=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)N.setTexture2DArray(W,0),Le=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const De=B.getParameter(B.UNPACK_ROW_LENGTH),pt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),an=B.getParameter(B.UNPACK_SKIP_PIXELS),Tt=B.getParameter(B.UNPACK_SKIP_ROWS),Zn=B.getParameter(B.UNPACK_SKIP_IMAGES),ot=G.isCompressedTexture?G.mipmaps[j]:G.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?B.texSubImage3D(Le,j,U.x,U.y,U.z,fe,xe,Me,Re,ke,ot.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Le,j,U.x,U.y,U.z,fe,xe,Me,Re,ot.data)):B.texSubImage3D(Le,j,U.x,U.y,U.z,fe,xe,Me,Re,ke,ot),B.pixelStorei(B.UNPACK_ROW_LENGTH,De),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,an),B.pixelStorei(B.UNPACK_SKIP_ROWS,Tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Zn),j===0&&W.generateMipmaps&&B.generateMipmap(Le),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?N.setTextureCube(w,0):w.isData3DTexture?N.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?N.setTexture2DArray(w,0):N.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,ve.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rf?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?vr:Fv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vr?bt:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iA extends r_{}iA.prototype.isWebGL1Renderer=!0;class rA extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class s_ extends Fa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const em=new Rt,rd=new Hv,No=new jl,Ro=new O;class sA extends sn{constructor(e=new Hn,n=new s_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;em.copy(r).invert(),rd.copy(e.ray).applyMatrix4(em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=p,x=_;y<x;y++){const m=u.getX(y);Ro.fromBufferAttribute(h,m),tm(Ro,m,c,r,e,n,this)}}else{const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=p,x=_;y<x;y++)Ro.fromBufferAttribute(h,y),tm(Ro,y,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tm(t,e,n,i,r,s,a){const o=rd.distanceSqToPoint(t);if(o<n){const c=new O;rd.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class of extends Hn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),f(),this.setAttribute("position",new pn(s,3)),this.setAttribute("normal",new pn(s.slice(),3)),this.setAttribute("uv",new pn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new O,S=new O,C=new O;for(let R=0;R<n.length;R+=3)_(n[R+0],v),_(n[R+1],S),_(n[R+2],C),c(v,S,C,g)}function c(g,v,S,C){const R=C+1,A=[];for(let D=0;D<=R;D++){A[D]=[];const M=g.clone().lerp(S,D/R),T=v.clone().lerp(S,D/R),z=R-D;for(let Y=0;Y<=z;Y++)Y===0&&D===R?A[D][Y]=M:A[D][Y]=M.clone().lerp(T,Y/z)}for(let D=0;D<R;D++)for(let M=0;M<2*(R-D)-1;M++){const T=Math.floor(M/2);M%2===0?(p(A[D][T+1]),p(A[D+1][T]),p(A[D][T])):(p(A[D][T+1]),p(A[D+1][T+1]),p(A[D+1][T]))}}function u(g){const v=new O;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(g),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function f(){const g=new O;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const S=m(g)/2/Math.PI+.5,C=d(g)/Math.PI+.5;a.push(S,1-C)}y(),h()}function h(){for(let g=0;g<a.length;g+=6){const v=a[g+0],S=a[g+2],C=a[g+4],R=Math.max(v,S,C),A=Math.min(v,S,C);R>.9&&A<.1&&(v<.2&&(a[g+0]+=1),S<.2&&(a[g+2]+=1),C<.2&&(a[g+4]+=1))}}function p(g){s.push(g.x,g.y,g.z)}function _(g,v){const S=g*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function y(){const g=new O,v=new O,S=new O,C=new O,R=new qe,A=new qe,D=new qe;for(let M=0,T=0;M<s.length;M+=9,T+=6){g.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),R.set(a[T+0],a[T+1]),A.set(a[T+2],a[T+3]),D.set(a[T+4],a[T+5]),C.copy(g).add(v).add(S).divideScalar(3);const z=m(C);x(R,T+0,g,z),x(A,T+2,v,z),x(D,T+4,S,z)}}function x(g,v,S,C){C<0&&g.x===1&&(a[v]=g.x-1),S.x===0&&S.z===0&&(a[v]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.vertices,e.indices,e.radius,e.details)}}class lf extends of{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new lf(e.radius,e.detail)}}class cf extends Hn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const f=[],h=new O,p=new O,_=[],y=[],x=[],m=[];for(let d=0;d<=i;d++){const g=[],v=d/i;let S=0;d===0&&a===0?S=.5/n:d===i&&c===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const R=C/n;h.x=-e*Math.cos(r+R*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+R*s)*Math.sin(a+v*o),y.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(R+S,1-v),g.push(u++)}f.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const v=f[d][g+1],S=f[d][g],C=f[d+1][g],R=f[d+1][g+1];(d!==0||a>0)&&_.push(v,S,R),(d!==i-1||c<Math.PI)&&_.push(S,C,R)}this.setIndex(_),this.setAttribute("position",new pn(y,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);function aA(){const t=le.useRef(null),e=le.useRef(null),n=le.useRef(null);return le.useEffect(()=>{if(!t.current)return;const i=new rA;e.current=i;const r=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=8;const s=new r_({alpha:!0,antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(s.domElement);const a=new He(6583435),o=new He(9741240),c=new He(13358561),u=1500,f=new Hn,h=new Float32Array(u*3),p=new Float32Array(u*3),_=new Float32Array(u);for(let k=0;k<u;k++){const q=k*3;h[q]=(Math.random()-.5)*30,h[q+1]=(Math.random()-.5)*30,h[q+2]=(Math.random()-.5)*20;const P=Math.random();let I;P<.4?I=a:P<.7?I=o:I=c,p[q]=I.r*.6,p[q+1]=I.g*.6,p[q+2]=I.b*.6,_[k]=Math.random()*.03+.01}f.setAttribute("position",new hn(h,3)),f.setAttribute("color",new hn(p,3)),f.setAttribute("size",new hn(_,1));const y=new s_({size:.02,vertexColors:!0,transparent:!0,opacity:.3,sizeAttenuation:!0}),x=new sA(f,y);i.add(x);const m=new lf(3,0),d=new xl({color:9741240,wireframe:!0,transparent:!0,opacity:.15}),g=new Yn(m,d);i.add(g);const v=g.clone();v.scale.set(1.8,1.8,1.8),v.material=d.clone(),v.material.color=new He(13358561),v.material.opacity=.1,i.add(v);const S=new He(9741240),C=new He(13358561),R=new He(3900150),A=[],D=30,M=new He(16739125),T=new He(16747586);for(let k=0;k<D;k++){const q=Math.random()*.15+.08,P=new cf(q,16,16),I=new xl({color:M,transparent:!0,opacity:.8,emissive:T,emissiveIntensity:.5}),F=new Yn(P,I);F.position.x=(Math.random()-.5)*25,F.position.y=(Math.random()-.5)*30,F.position.z=(Math.random()-.5)*15-5,F.userData={initialX:F.position.x,initialY:F.position.y,initialZ:F.position.z,speedX:(Math.random()-.5)*.002,speedY:(Math.random()-.5)*.002,speedZ:(Math.random()-.5)*.001,rotationSpeed:(Math.random()-.5)*.02},i.add(F),A.push(F)}let z=0,Y=0;const re=()=>{Y=window.scrollY};window.addEventListener("scroll",re,{passive:!0});const L=()=>{n.current=requestAnimationFrame(L),z+=(Y-z)*.1;const k=Date.now()*5e-4,q=z*.001,P=Math.min(z/1e3,1);g.rotation.x=q*.8+k*.1,g.rotation.y=q*.6+k*.15,g.rotation.z=q*.3,v.rotation.x=-q*.6-k*.08,v.rotation.y=-q*.5-k*.12,v.rotation.z=-q*.2;const I=1+P*.2,F=1+P*.15;g.scale.set(I,I,I),v.scale.set(F*1.8,F*1.8,F*1.8);const K=Math.min(P*.5,.3);g.material.color.lerpColors(S,R,K),v.material.color.lerpColors(C,R,K*.5),g.material.opacity=.15+P*.1,v.material.opacity=.1+P*.05;const $=x.geometry.attributes.position.array,X=q*2;for(let ne=0;ne<u;ne++){const oe=ne*3;$[oe+1]+=Math.sin(k*.5+ne*.01)*2e-4+X*.01,$[oe]+=Math.cos(k*.3+ne*.015)*1e-4+X*.005,$[oe+2]+=Math.sin(k*.4+ne*.02)*1e-4,Math.abs($[oe+1])>20&&($[oe+1]=(Math.random()-.5)*30),Math.abs($[oe])>20&&($[oe]=(Math.random()-.5)*30),Math.abs($[oe+2])>15&&($[oe+2]=(Math.random()-.5)*20)}x.geometry.attributes.position.needsUpdate=!0,r.position.y=z*.002,r.position.x=Math.sin(q*.5)*.5,r.rotation.z=z*1e-4;const Z=8-P*2;r.position.z=Math.max(Z,5),x.rotation.y=q*.2,A.forEach((ne,oe)=>{const pe=ne.userData;ne.position.x=pe.initialX+q*2+Math.sin(k+oe)*.5,ne.position.y=pe.initialY-z*.003+Math.cos(k*.7+oe)*.5,ne.position.z=pe.initialZ+q*1.5+Math.sin(k*.5+oe)*.3,ne.rotation.x+=pe.rotationSpeed,ne.rotation.y+=pe.rotationSpeed*.7;const Ne=Math.sin(k*2+oe)*.1+1;ne.scale.set(Ne,Ne,Ne);const be=.5+P*.3+Math.sin(k+oe)*.2;ne.material.emissiveIntensity=Math.max(.3,Math.min(1,be)),ne.material.opacity=.7+P*.2+Math.sin(k*.5+oe)*.1}),s.render(i,r)};L();const V=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",V,{passive:!0}),()=>{window.removeEventListener("scroll",re),window.removeEventListener("resize",V),n.current&&cancelAnimationFrame(n.current),t.current&&s.domElement&&t.current.removeChild(s.domElement),s.dispose(),f.dispose(),y.dispose(),d.dispose(),A.forEach(k=>{k.geometry.dispose(),k.material.dispose()})}},[]),l.jsx("div",{ref:t,className:"three-background"})}function oA(){return l.jsxs(l.Fragment,{children:[l.jsx(aA,{}),l.jsx(zy,{children:l.jsxs(Ly,{children:[l.jsx(Ti,{path:"/",element:l.jsx(Gy,{})}),l.jsx(Ti,{path:"/smart-parking",element:l.jsx(Vy,{})}),l.jsx(Ti,{path:"/speech-trainer",element:l.jsx(Wy,{})}),l.jsx(Ti,{path:"/presto",element:l.jsx(Xy,{})}),l.jsx(Ti,{path:"/netra-ai",element:l.jsx(qy,{})}),l.jsx(Ti,{path:"/moods-metrics",element:l.jsx(Yy,{})}),l.jsx(Ti,{path:"/pong-ai",element:l.jsx($y,{})})]})})]})}Qc.createRoot(document.getElementById("root")).render(l.jsx(fm.StrictMode,{children:l.jsx(oA,{})}));

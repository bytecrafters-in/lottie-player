/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("lottie-web")):"function"==typeof define&&define.amd?define("lottie-player",["react","lottie-web"],t):"object"==typeof exports?exports["lottie-player"]=t(require("react"),require("lottie-web")):e["lottie-player"]=t(e.React,e.Lottie)}(this,((e,t)=>(()=>{"use strict";var r={20:(e,t,r)=>{var o=r(12),n=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var o,u={},f=null,p=null;for(o in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(u[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===u[o]&&(u[o]=t[o]);return{$$typeof:n,type:e,key:f,ref:p,props:u,_owner:a.current}}},848:(e,t,r)=>{e.exports=r(20)},515:e=>{e.exports=t},12:t=>{t.exports=e}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};n.r(i),n.d(i,{default:()=>p});var a=n(848),l=n(12),u=n(515),f=n.n(u);const p=function(e){var t=e.animationData,r=e.loop,o=void 0===r||r,n=e.autoplay,i=void 0===n||n,u=e.height,p=void 0===u?"100%":u,d=e.width,c=void 0===d?"100%":d,s=(0,l.useRef)(null);return(0,l.useEffect)((function(){var e;return s.current&&(e=f().loadAnimation({container:s.current,renderer:"svg",loop:o,autoplay:i,animationData:t})),function(){e&&e.destroy()}}),[t,o,i]),(0,a.jsx)("div",{ref:s,style:{width:c,height:p}})};return i})()));
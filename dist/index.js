!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("lottie-web")):"function"==typeof define&&define.amd?define("lottie-player",["react","lottie-web"],t):"object"==typeof exports?exports["lottie-player"]=t(require("react"),require("lottie-web")):e["lottie-player"]=t(e.React,e.Lottie)}(this,((e,t)=>(()=>{"use strict";var r={515:e=>{e.exports=t},12:t=>{t.exports=e}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};i.r(n),i.d(n,{default:()=>p});var a=i(12),l=i.n(a),u=i(515),d=i.n(u);const p=function(e){var t=e.animationData,r=e.loop,o=void 0===r||r,i=e.autoplay,n=void 0===i||i,u=e.height,p=void 0===u?"100%":u,c=e.width,f=void 0===c?"100%":c,s=e.className,y=void 0===s?"":s,v=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e;return v.current&&(e=d().loadAnimation({container:v.current,renderer:"svg",loop:o,autoplay:n,animationData:t})),function(){e&&e.destroy()}}),[t,o,n]),l().createElement("div",{ref:v,style:{width:f,height:p},className:y})};return n})()));
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=f||c||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return u.Date.now()};function m(e,t,n){var o,r,i,a,f,c,u=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,u=t,a=e.apply(i,n)}function h(e){return u=e,f=setTimeout(S,t),l?y(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-u>=i}function S(){var e=g();if(O(e))return j(e);f=setTimeout(S,function(e){var n=t-(e-c);return m?d(n,i-(e-u)):n}(e))}function j(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function w(){var e=g(),n=O(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return h(c);if(m)return f=setTimeout(S,t),y(c)}return void 0===f&&(f=setTimeout(S,t)),a}return t=v(t)||0,p(n)&&(l=!!n.leading,i=(m="maxWait"in n)?s(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=c=r=f=void 0},w.flush=function(){return void 0===f?a:j(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");(()=>{try{let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{b.elements[e].value=t})))}catch(e){console.log(e)}})(),b.addEventListener("change",t((e=>{const{target:t}=e;try{let e=localStorage.getItem("feedback-form-state");e=e?JSON.parse(e):{},e[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}catch(e){console.log(e)}}),500)),b.addEventListener("submit",(e=>{e.preventDefault(),b.reset();try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e)}catch(e){console.log(e)}localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.511f9572.js.map
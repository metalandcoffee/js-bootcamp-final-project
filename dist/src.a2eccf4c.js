parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"s8eH":[function(require,module,exports) {

},{}],"IwFA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setState=exports.state=void 0;const e={searchTerm:null,searchBy:null,drinks:null,currentDrink:null};exports.state=e;const t=(t,s)=>{e[t]=s};exports.setState=t;
},{}],"vpnQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchDrinksByName=t,exports.fetchDrinksByIngredient=r;var e=require("./state");function t(){const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.state.searchTerm}`;return fetch(t).then(e=>e.json()).then(e=>e.drinks).catch(e=>console.error(e))}function r(){const t=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.state.searchTerm}`;return fetch(t).then(e=>e.json()).then(e=>e.drinks).catch(e=>console.error(e))}
},{"./state":"IwFA"}],"j2DS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.modal=n,exports.open=r;var e=require("../../state");function n(){return'\n    <div id="overlay">\n        <div id="modal">\n            <article>\n                <h3></h3>\n                <img src="" alt="" />\n                <h5>Ingredients</h5>\n                <ul class="ingredients"></ul>\n                <h5>Instructions</h5>\n                <p class="instructions"></p>\n            </article>\n            <button id="close" href="#">X</button>\n        </div>\n    </div>\n    '}function t(){const n=e.state.drinks[e.state.currentDrink];console.log(n);const t=n.strDrink,r=n.strDrinkThumb,o=[];let c="";const i=n.strInstructions;for(let e=1;e<=15;e++){const t="strIngredient"+e;if(null===n[t])break;o.push(n[t])}for(const e of o)console.log(`${e}`),c+=`<li>${e}</li>`;const s=document.querySelector("#modal h3"),l=document.querySelector("#modal img"),u=document.querySelector("#modal .ingredients"),d=document.querySelector("#modal .instructions");s.innerHTML=t,l.src=r,l.alt=t,u.innerHTML=c,d.innerHTML=i}function r(){document.querySelector("#app").insertAdjacentHTML("beforeend",n()),t(),c()}function o(){document.querySelector("#overlay").remove()}function c(){document.querySelector("#modal #close").addEventListener("click",o),document.querySelector("#overlay").addEventListener("click",i),document.addEventListener("keyup",s)}function i(e){"overlay"==e.target.id&&o()}function s(e){"Escape"===e.key&&o()}require("./index.css");
},{"../../state":"IwFA","./index.css":"s8eH"}],"ZATX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r,exports.init=n,exports.clearLightbox=c;var e=require("../../state"),t=require("../modal");function r(){let t='<div class="lightbox">';return e.state.drinks.forEach(e=>{const r=e.strDrinkThumb,n=e.strDrink;t+=`<div class="thumbnail">\n            <div class="img-container">\n                <img src="${r}" alt="${n}" />\n            </div>\n            <h6>${n}</h6>\n        </div>`}),t+="</div>"}function n(){Array.from(document.querySelectorAll(".lightbox img")).forEach(e=>{e.addEventListener("click",i)})}function i(r){r.preventDefault();const n=o(event.target);(0,e.setState)("currentDrink",n),console.log(e.state.currentDrink),(0,t.open)()}function o(e){return Array.from(document.querySelectorAll(".lightbox img")).map(e=>e.outerHTML).findIndex(t=>t==e.outerHTML)}function c(){const e=document.querySelector(".lightbox");e&&e.remove()}require("./index.css");
},{"../../state":"IwFA","../modal":"j2DS","./index.css":"s8eH"}],"UHbq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=s,exports.default=o,require("./index.css");var e=require("../../state"),t=require("../../data"),r=a(require("../lightbox"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}function s(){document.getElementById("search").addEventListener("submit",c)}function o(){return'\n        <h1>Find Your Cocktail 🍸</h1>\n        <form name="search" id="search">\n            <input id="search-field" name="search-term" type="search" placeholder="Search here..." />\n            <select id="search-select" name="search-type">\n                <option value="name">By Cocktail Name</option>\n                <option value="ingredient">By Ingredient</option>\n            </select>\n            <input class="button-primary" type="submit" id="submit" value="Search Cocktails" />\n        </form>\n    '}async function c(n){n.preventDefault(),(0,r.clearLightbox)(),i();const a=document.getElementById("search-field").value.toLowerCase(),s=document.getElementById("search-select").value.toLowerCase();(0,e.setState)("searchTerm",a),(0,e.setState)("searchBy",s);let o={};if(o="name"===s?await(0,t.fetchDrinksByName)():await(0,t.fetchDrinksByIngredient)(),(0,e.setState)("drinks",o),null===e.state.drinks||void 0===e.state.drinks){const t=`<h4 class="no-results">There are no results for <strong>${e.state.searchTerm}</strong> when searching for cocktails by ${e.state.searchBy}.</h4>`;document.getElementById("app").insertAdjacentHTML("beforeend",t),(0,e.setState)("searchTerm",null),document.getElementById("search-field").value=e.state.searchTerm}else{const e=(0,r.default)();document.getElementById("app").insertAdjacentHTML("beforeend",e),(0,r.init)()}}function i(){const e=document.querySelector(".no-results");e&&e.remove()}
},{"./index.css":"s8eH","../../state":"IwFA","../../data":"vpnQ","../lightbox":"ZATX"}],"H99C":[function(require,module,exports) {
"use strict";require("./index.css");var e=r(require("./components/search"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function n(){let t=(0,e.default)();document.getElementById("app").insertAdjacentHTML("beforeend",t),(0,e.init)()}n();
},{"./index.css":"s8eH","./components/search":"UHbq"}]},{},["H99C"], null)
//# sourceMappingURL=src.a2eccf4c.js.map
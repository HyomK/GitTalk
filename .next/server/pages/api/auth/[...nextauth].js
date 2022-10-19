"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/kakao":
/*!********************************************!*\
  !*** external "next-auth/providers/kakao" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/kakao");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/kakao */ \"next-auth/providers/kakao\");\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    secret: \"gittalkbyhyominsecret\",\n    providers: [\n        next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.KAKAO_RESTAPI_KEY,\n            clientSecret: process.env.KAKAO_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }), \n    ],\n    pages: {\n        signIn: \"/\"\n    },\n    jwt: {\n        maxAge: 60 * 60 * 24 * 30\n    },\n    callbacks: {\n        jwt: async ({ token , user , profile  })=>{\n            if (user && profile && Object.keys(profile).includes(\"login\")) {\n                user.login = profile.login;\n            }\n            user && (token.user = user);\n            return token;\n        },\n        session: async ({ session , token  })=>{\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ1E7QUFDRTtBQUl4RCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUNwQkcsTUFBTSxFQUFFQyx1QkFBOEI7SUFDdENHLFNBQVMsRUFBRTtRQUNQTixnRUFBYSxDQUFDO1lBQ1ZPLFFBQVEsRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLGlCQUFpQjtZQUN2Q0MsWUFBWSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sWUFBWTtTQUN6QyxDQUFDO1FBQ0ZULGlFQUFjLENBQUM7WUFDWE0sUUFBUSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sU0FBUztZQUMvQkYsWUFBWSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsYUFBYTtTQUMxQyxDQUFDO0tBQ0w7SUFFREMsS0FBSyxFQUFFO1FBQ0hDLE1BQU0sRUFBRSxHQUFHO0tBQ2Q7SUFDREMsR0FBRyxFQUFFO1FBQ0RDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0tBQzVCO0lBRURDLFNBQVMsRUFBRTtRQUNQRixHQUFHLEVBQUUsT0FBTyxFQUFFRyxLQUFLLEdBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFLEdBQUs7WUFDckMsSUFBSUQsSUFBSSxJQUFJQyxPQUFPLElBQUlDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixPQUFPLENBQUMsQ0FBQ0csUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzREosSUFBSSxDQUFDSyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0ksS0FBSyxDQUFXO2FBQ3hDO1lBQ0RMLElBQUksSUFBSSxDQUFDRCxLQUFLLENBQUNDLElBQUksR0FBR0EsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBT0QsS0FBSyxDQUFDO1NBQ2hCO1FBQ0RPLE9BQU8sRUFBRSxPQUFPLEVBQUVBLE9BQU8sR0FBRVAsS0FBSyxHQUFFLEdBQUs7WUFDbkNPLE9BQU8sQ0FBQ04sSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUksQ0FBQztZQUMxQixPQUFPTSxPQUFPLENBQUM7U0FDbEI7S0FDSjtDQUNKLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdFRhbGsvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEtha2FvUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMva2FrYW9cIjtcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgdXNlckFnZW50IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFQ1JFVCxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgS2FrYW9Qcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuS0FLQU9fUkVTVEFQSV9LRVkhLFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5LQUtBT19TRUNSRVQhLFxuICAgICAgICB9KSxcbiAgICAgICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgICAgfSksXG4gICAgXSxcblxuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogXCIvXCIsXG4gICAgfSxcbiAgICBqd3Q6IHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICB9LFxuXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGp3dDogYXN5bmMgKHsgdG9rZW4sIHVzZXIsIHByb2ZpbGUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIgJiYgcHJvZmlsZSAmJiBPYmplY3Qua2V5cyhwcm9maWxlKS5pbmNsdWRlcyhcImxvZ2luXCIpKSB7XG4gICAgICAgICAgICAgICAgdXNlci5sb2dpbiA9IHByb2ZpbGUubG9naW4gYXMgc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlciAmJiAodG9rZW4udXNlciA9IHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiS2FrYW9Qcm92aWRlciIsIkdpdEh1YlByb3ZpZGVyIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFQ1JFVCIsInByb3ZpZGVycyIsImNsaWVudElkIiwiS0FLQU9fUkVTVEFQSV9LRVkiLCJjbGllbnRTZWNyZXQiLCJLQUtBT19TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJqd3QiLCJtYXhBZ2UiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJwcm9maWxlIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwibG9naW4iLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
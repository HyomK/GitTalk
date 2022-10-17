"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,606];
exports.modules = {

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(755);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(649);
;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
// EXTERNAL MODULE: ./src/pages/styles/themes/GlobalStyle.tsx
var GlobalStyle = __webpack_require__(770);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/layouts/MainLayout/MainLayout.tsx


const StyledMain = (styled_default()).main`
    position: relative;
    max-width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;
const MainLayout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledMain, {
        children: children
    });
};
/* harmony default export */ const MainLayout_MainLayout = (MainLayout);

;// CONCATENATED MODULE: ./src/components/layouts/MainLayout/index.ts


;// CONCATENATED MODULE: ./src/pages/_app.tsx






const queryClient = new external_react_query_namespaceObject.QueryClient();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_namespaceObject.QueryClientProvider, {
                client: queryClient,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SessionProvider, {
                    session: pageProps.session,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle["default"], {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainLayout_MainLayout, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps
                                }),
                                ";"
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [770], () => (__webpack_exec__(545)));
module.exports = __webpack_exports__;

})();
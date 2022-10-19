"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 166:
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
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(805);
;// CONCATENATED MODULE: ./src/themes/GlobalStyle.tsx


function GlobalStyle() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_.Global, {
        styles: global
    });
};
const global = external_emotion_react_.css`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: inherit;
    }

    html {
        background: #134e5e; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to top,
            #00b9ff,
            #7ef9c2
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to top,
            #00b9ff,
            #7ef9c2
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
            Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
            "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-size: 62.5%;
        font-weight: 400;
    }

    html,
    body {
        height: 100%;
    }

    a {
        margin: 0;
        background: transparent;
        cursor: pointer;
        padding: 0;
        vertical-align: baseline;
        text-decoration: none;
        color: inherit;
        font-size: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
    }

    input {
        outline: none;
        border: none;
        background-color: transparent;
    }

    button {
        margin: 0;
        border: none;
        border-radius: 0;
        box-shadow: none;
        background: inherit;
        cursor: pointer;
        padding: 0;
        overflow: visible;
    }

    img {
        border: none;
        max-width: 100%;
        vertical-align: middle;
    }

    ol,
    ul,
    li {
        list-style: none;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
`;

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
                        /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
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
var __webpack_exports__ = (__webpack_exec__(166));
module.exports = __webpack_exports__;

})();
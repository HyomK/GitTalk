"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342,985];
exports.modules = {

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ gitTalk)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@octokit/core"
const core_namespaceObject = require("@octokit/core");
;// CONCATENATED MODULE: external "@octokit/auth-token"
const auth_token_namespaceObject = require("@octokit/auth-token");
;// CONCATENATED MODULE: ./src/pages/api/github/api.ts


const instance = async ()=>{
    const auth = (0,auth_token_namespaceObject.createTokenAuth)("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");
    const authentication = await auth();
    const octokit = new core_namespaceObject.Octokit({
        auth: authentication.token,
        headers: {
            Authorization: `Bearer ${authentication.token}`
        }
    });
    return octokit;
};

;// CONCATENATED MODULE: ./src/pages/api/github/user.ts

const getProfile = async ()=>{
    const user = localStorage.getItem("persist:recoil@recoil@github-user-state");
    const data = user ? JSON.parse(user) : null;
    if (data === null) return null;
    const octokit = await instance();
    return await octokit.request("GET /users/{username}", {
        username: data.login
    }).then((res)=>{
        const data = {
            id: res.data.id,
            name: res.data.name,
            login: res.data.login,
            profileImg: res.data.avatar_url
        };
        return data;
    }).catch((e)=>console.log(e));
};

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./src/pages/styles/themes/colors.ts
var colors = __webpack_require__(926);
;// CONCATENATED MODULE: ./src/components/tabList/TabList.style.tsx


const StyledTabContainer = (styled_default()).div`
    height: 80vh;
    width: 23vw;
    background-color: ${colors["default"].white};
    opacity: 0.75;
    border-radius: 1.3rem;
`;
const StyledTabWrapper = (styled_default()).ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
`;
const StyledTab = (styled_default()).li`
    width: 80%;
    text-align: center;
    padding: 0.3rem;
    border-bottom: ${(p)=>p.isSelected ? "1px solid black" : "none'"};
    button {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`;

;// CONCATENATED MODULE: ./src/components/tabList/TabList.tsx



const TabList = ({ tabItems =[] , children , outerActivatedIndex =0 , onChange =()=>null  })=>{
    const { 0: activatedIndex , 1: setActivatedIndex  } = (0,external_react_.useState)(outerActivatedIndex);
    const tabItemRefs = (0,external_react_.useRef)([]);
    (0,external_react_.useEffect)(()=>{
        setActivatedIndex(outerActivatedIndex);
    }, [
        outerActivatedIndex
    ]);
    (0,external_react_.useEffect)(()=>{
        onChange(activatedIndex);
        tabItemRefs.current[activatedIndex];
    }, [
        activatedIndex,
        onChange
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTabContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledTabWrapper, {
                    children: tabItems.map((tabItem, index)=>{
                        const isSelected = activatedIndex === index;
                        return /*#__PURE__*/ jsx_runtime_.jsx(StyledTab, {
                            ref: (element)=>tabItemRefs.current[index] = element,
                            isSelected: isSelected,
                            onClick: ()=>setActivatedIndex(index),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                children: tabItem
                            })
                        }, tabItem);
                    })
                }),
                Array.isArray(children) ? children[activatedIndex] : children
            ]
        })
    });
};
/* harmony default export */ const tabList_TabList = (TabList);

;// CONCATENATED MODULE: ./src/pages/gitTalk/index.tsx




const GitTalk = ()=>{
    const { 0: user , 1: setUser  } = (0,external_react_.useState)(null);
    const initPage = async ()=>{
        const data = await getProfile();
        setUser(data);
    };
    (0,external_react_.useEffect)(()=>{
        initPage();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(tabList_TabList, {
                tabItems: [
                    "My",
                    "Organization"
                ],
                outerActivatedIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "first"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "second"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "hello",
                    user ? user.name : "unknown"
                ]
            })
        ]
    });
};
/* harmony default export */ const gitTalk = (GitTalk);


/***/ }),

/***/ 926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = {
    blue100: "#00B9FF",
    blue50: "#00D3F9",
    blue30: "#00DEEE",
    green50: "#7EF9C2",
    green30: "A9F88B",
    yellow: "#F9F871",
    black100: "#050E19",
    black70: "#384955",
    black30: "#67727B",
    white: "#FAF7F7"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);


/***/ }),

/***/ 193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(621));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,606,985];
exports.modules = {

/***/ 776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/GitTalk.de2cb56a.svg","height":24,"width":120});

/***/ }),

/***/ 231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo.2c9b43f8.svg","height":170,"width":170});

/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Modal_LoginModal)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./src/pages/styles/themes/colors.ts
var colors = __webpack_require__(926);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(805);
;// CONCATENATED MODULE: ./src/components/Modal/LoginModal.style.tsx
/** @jsxImportSource @emotion/react */ 


const StyledModal = (styled_default()).div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    padding: 2rem 2rem 2.2rem 2rem;
    border-radius: 12px;
    background-color: ${(p)=>colors["default"].white};

    ${(p)=>!p.open && `display:none;`}
`;
const LoginModalStyle = react_.css`
    .login-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
    .login-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        gap: 1.2rem;
        align-items: center;
    }

    .back-btn {
        float: left;
        width: 20px;
    }
    .back-btn:hover {
        opacity: 0.5;
    }
    .kakao-btn {
        width: 50%;
        align-self: center;
    }
    .kakao-btn:hover {
        filter: brightness(0.6);
    }
    .github-btn {
        background-color: black;
        width: 50%;
        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 3px;
        padding: 7px;
        font-size: 1.3rem;
    }
    .github-btn:hover {
        filter: brightness(0.6);
    }
    .github-icon {
        width: 20px;
        height: 100%;
        float: left;
        margin-right: 20px;
        align-self: center;
        padding: 0;
    }
    button {
        align-self: center;
        font-size: 2rem;
        font-weight: 500;
        margin: 1rem;
    }
`;

;// CONCATENATED MODULE: ./src/components/layouts/ModalLayout/ModalLayout.tsx




const StyledContainer = (styled_default()).div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100vh;
    width: 100vw;
    z-index: 101;

    overflow: hidden;
    z-index: 100;
`;
const fadeIn = react_.keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;
const fadeOut = react_.keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
  }
`;
const StyledDim = (styled_default()).div`
    width: 100%;
    height: 100%;

    background-color: rgba(51, 51, 51, 0.8);
    z-index: 100;
    ${(p)=>react_.css`
            animation: ${p.open ? fadeIn : fadeOut} 0.3s forwards;
        `};
`;
const ModalLayout = ({ open , children  })=>{
    const dimRef = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledContainer, {
        open: open,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledDim, {
                ref: dimRef,
                open: open
            }),
            children
        ]
    });
};
/* harmony default export */ const ModalLayout_ModalLayout = (ModalLayout);

;// CONCATENATED MODULE: ./src/components/layouts/ModalLayout/index.ts

/* harmony default export */ const layouts_ModalLayout = (ModalLayout_ModalLayout);

;// CONCATENATED MODULE: ./public/image/Back.svg
/* harmony default export */ const Back = ({"src":"/_next/static/media/Back.c171b5d0.svg","height":20,"width":20});
;// CONCATENATED MODULE: ./public/image/kakaoLogin.svg
/* harmony default export */ const kakaoLogin = ({"src":"/_next/static/media/kakaoLogin.95381ed4.svg","height":17,"width":128});
;// CONCATENATED MODULE: ./public/image/github.png
/* harmony default export */ const github = ({"src":"/_next/static/media/github.2ea095bc.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42iXIsQ0BYQCG4a+4SCRUWolbQi0aC2htoyBR20F5hRFcqbhI2EHBAjznT+Rp3rwRU41n0ZRK1Dpv3+KlU0frLmZFPFyitxN/e30ZDqIqYquMq5uNgcraRxcLZ0cjE30xj1g5GRprLeUHIedcRYs6lEMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/image/checked.svg
/* harmony default export */ const checked = ({"src":"/_next/static/media/checked.17ee3e3d.svg","height":15,"width":13});
;// CONCATENATED MODULE: ./public/image/unchecked.svg
/* harmony default export */ const unchecked = ({"src":"/_next/static/media/unchecked.5f00a7ae.svg","height":15,"width":13});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(649);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(755);
// EXTERNAL MODULE: ./src/recoil/atoms/userState.ts + 1 modules
var userState = __webpack_require__(530);
;// CONCATENATED MODULE: ./src/components/Modal/LoginModal.tsx
/** @jsxImportSource @emotion/react */ 













const LoginModal = (props)=>{
    const { openModal , closeModal , isOpen  } = props;
    const router = (0,router_namespaceObject.useRouter)();
    const resetInitState = (0,external_recoil_.useResetRecoilState)(userState/* default */.ZP);
    const loginState = (0,external_recoil_.useRecoilValue)(userState/* $loginState */.ND);
    const [githubSigned, setGithubSigned] = (0,external_recoil_.useRecoilState)(userState/* $githubState */.iv);
    const [kakaoState, setKakaoSigned] = (0,external_recoil_.useRecoilState)(userState/* $kakoState */.rW);
    return /*#__PURE__*/ jsx_runtime_.jsx(layouts_ModalLayout, {
        open: isOpen,
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledModal, {
            open: isOpen,
            css: LoginModalStyle,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "login-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "back-btn",
                        onClick: closeModal,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Back,
                            height: 20,
                            width: 20
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "login-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "kakao-btn",
                                onClick: ()=>{
                                    (0,external_next_auth_react_.signIn)("kakao", {
                                    }).then((res)=>{
                                        setKakaoSigned(true);
                                    });
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: kakaoLogin,
                                    layout: "responsive"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "25px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: kakaoState ? checked : unchecked,
                                    layout: "responsive"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "login-wrapper",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "github-btn",
                                onClick: ()=>(0,external_next_auth_react_.signIn)("github").then((res)=>{
                                        setGithubSigned(true);
                                    }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "github-icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            layout: "responsive",
                                            src: github,
                                            height: 20,
                                            width: 20
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Log in with GitHub"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "25px",
                                    alignSelf: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: githubSigned ? checked : unchecked,
                                    layout: "responsive"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        disabled: loginState !== "logined",
                        onClick: ()=>{
                            router.push("/gitTalk");
                            resetInitState();
                        },
                        children: "Get Start!"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Modal_LoginModal = (LoginModal);


/***/ }),

/***/ 337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(926);



function Button({ children , selected , onClick  }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Btn, {
        selected: selected,
        onClick: onClick,
        children: children
    });
}
const Btn = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    background-color: ${(props)=>props.selected ? _src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black70 : _src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black30};
    padding: 1.2rem 1.6rem;
    font-size: 1.7rem;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    color: white;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            transition-duration: 200ms;
            transition-property: background-color, color;
            transition-timing-function: ease;
            background-color: ${_src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black70};
            color: white;
        }
    }

    @media (max-width: 300px) {
        font-size: 1.2rem;
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MP": () => (/* binding */ LoginBoxContainer),
/* harmony export */   "uc": () => (/* binding */ LoginWrapper)
/* harmony export */ });
/* unused harmony export loginDiv */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(926);



const loginDiv = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background-color: ${_src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__["default"].white};
    box-shadow: 0px 38px 36px rgba(0, 0, 0, 0.1),
        0px 24.6296px 21.0833px rgba(0, 0, 0, 0.0759259),
        0px 14.637px 11.4667px rgba(0, 0, 0, 0.0607407),
        0px 7.6px 5.85px rgba(0, 0, 0, 0.05),
        0px 3.0963px 2.93333px rgba(0, 0, 0, 0.0392593),
        0px 0.703704px 1.41667px rgba(0, 0, 0, 0.0240741);
    label: "loginDiv";
    h1 {
        font-size: 2rem;
        color: ${_src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black30};
        text-align: center;
        padding: 5rem 0;
    }
`;
const LoginBoxContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().section)`
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const LoginWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
    width: 100%;
    height: 100%;
    padding: 3rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background-color: ${_src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__["default"].white};
    box-shadow: 0px 38px 36px rgba(0, 0, 0, 0.1),
        0px 24.6296px 21.0833px rgba(0, 0, 0, 0.0759259),
        0px 14.637px 11.4667px rgba(0, 0, 0, 0.0607407),
        0px 7.6px 5.85px rgba(0, 0, 0, 0.05),
        0px 3.0963px 2.93333px rgba(0, 0, 0, 0.0392593),
        0px 0.703704px 1.41667px rgba(0, 0, 0, 0.0240741);

    h1 {
        font-size: 2rem;
        color: ${_src_pages_styles_themes_colors__WEBPACK_IMPORTED_MODULE_2__["default"].black30};
        text-align: center;
        padding: 5rem 0;
    }
`;


/***/ }),

/***/ 123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(197);
/* harmony import */ var _LoginContainer_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(554);
/* harmony import */ var _public_image_Logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(231);
/* harmony import */ var _public_image_GitTalk_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(776);
/* harmony import */ var _src_components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(337);
/* harmony import */ var _Modal_LoginModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(238);
/* harmony import */ var _src_recoil_atoms_userState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const LoginContainer = ()=>{
    const initState = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_src_recoil_atoms_userState__WEBPACK_IMPORTED_MODULE_11__/* .$loginState */ .ND);
    const resetInitState = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useResetRecoilState)(_src_recoil_atoms_userState__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP);
    const [kakaoUser, setKakaoUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_src_recoil_atoms_userState__WEBPACK_IMPORTED_MODULE_11__/* .$kakaoInfo */ .UE);
    const [githubUser, setGithubUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_src_recoil_atoms_userState__WEBPACK_IMPORTED_MODULE_11__/* .$githubInfo */ .$s);
    const resetKakao = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useResetRecoilState)(_src_recoil_atoms_userState__WEBPACK_IMPORTED_MODULE_11__/* .$kakaoInfo */ .UE);
    const { 0: isModalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initState !== "none");
    const { data , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    if (status === "loading") {
        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    } else {
        console.log(initState);
        if (initState !== "githubSigned" && kakaoUser == null) {
            if (githubUser == null || githubUser !== null && githubUser.id !== data?.user.id) setKakaoUser(data?.user);
        } else if (initState !== "kakaoSigned" && githubUser == null) {
            if (kakaoUser == null || kakaoUser !== null && kakaoUser.id !== data?.user.id) setGithubUser(data?.user);
        }
    }
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginContainer_style__WEBPACK_IMPORTED_MODULE_6__/* .LoginBoxContainer */ .MP, {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                    initial: initState === "none" || status != "authenticated",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        className: "loginDiv",
                        initial: {
                            opacity: 0,
                            scale: 0.7
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            default: {
                                duration: 0.2,
                                ease: [
                                    0,
                                    0.71,
                                    0.2,
                                    1.01
                                ]
                            },
                            scale: {
                                type: "spring",
                                damping: 4,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        },
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LoginContainer_style__WEBPACK_IMPORTED_MODULE_6__/* .LoginWrapper */ .uc, {
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: _public_image_Logo_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: _public_image_GitTalk_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "카톡으로 작업 내용을 쉽게 알리자!"
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    selected: false,
                                    onClick: ()=>setModalOpen(true),
                                    children: "Login"
                                })
                            ]
                        })
                    })
                })
            }),
            isModalOpen || isModalOpen && initState == "none" && status == "authenticated" ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_LoginModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                openModal: ()=>setModalOpen(true),
                closeModal: ()=>{
                    setModalOpen(false);
                    resetInitState();
                },
                isOpen: isModalOpen || initState == "none" && status == "authenticated"
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_containers_LoginContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_containers_LoginContainer__WEBPACK_IMPORTED_MODULE_1__]);
_src_components_containers_LoginContainer__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Home = ()=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_containers_LoginContainer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$s": () => (/* binding */ $githubInfo),
  "iv": () => (/* binding */ $githubState),
  "UE": () => (/* binding */ $kakaoInfo),
  "rW": () => (/* binding */ $kakoState),
  "ND": () => (/* binding */ $loginState),
  "ZP": () => (/* binding */ userState)
});

// UNUSED EXPORTS: $userState

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(755);
;// CONCATENATED MODULE: ./src/recoil/effects/persist.ts
const persistRecoilEffect = ({ recoilAtomKey  })=>({ setSelf , onSet  })=>{
        if (true) {
            return;
        }
        const persistRecoilKey = `persist:recoil@${recoilAtomKey}`;
        const savedValue = localStorage.getItem(persistRecoilKey);
        if (savedValue) {
            const parsedValue = JSON.parse(savedValue);
            setSelf(parsedValue);
        }
        onSet((newValue, _, isReset)=>{
            isReset ? localStorage.removeItem(persistRecoilKey) : localStorage.setItem(persistRecoilKey, JSON.stringify(newValue));
        });
    };
/* harmony default export */ const persist = (persistRecoilEffect);

;// CONCATENATED MODULE: ./src/recoil/atoms/userState.ts


const $userState = (0,external_recoil_.atom)({
    key: "recoil@user-state-atom",
    default: {
        isKakaoLogined: false,
        isGithubLogined: false
    },
    effects: [
        persist({
            recoilAtomKey: "recoil@user-state"
        })
    ]
});
const $kakaoInfo = (0,external_recoil_.atom)({
    key: "recoil@kakao-user-state-atom",
    default: null,
    effects: [
        persist({
            recoilAtomKey: "recoil@kakao-user-state"
        }), 
    ]
});
const $githubInfo = (0,external_recoil_.atom)({
    key: "recoil@github-user-state-atom",
    default: null,
    effects: [
        persist({
            recoilAtomKey: "recoil@github-user-state"
        }), 
    ]
});
const $kakoState = (0,external_recoil_.selector)({
    key: "recoil@Kakao-selector",
    get: ({ get  })=>{
        const state = get($userState);
        return state?.isKakaoLogined;
    },
    set: ({ set , get  }, newValue)=>{
        const state = get($userState);
        set($userState, {
            isKakaoLogined: newValue instanceof external_recoil_.DefaultValue ? false : newValue,
            isGithubLogined: state.isGithubLogined
        });
    }
});
const $githubState = (0,external_recoil_.selector)({
    key: "recoil@Github-selector",
    get: ({ get  })=>{
        const state = get($userState);
        return state?.isGithubLogined;
    },
    set: ({ set , get  }, newValue)=>{
        const state = get($userState);
        set($userState, {
            isKakaoLogined: state.isKakaoLogined,
            isGithubLogined: newValue instanceof external_recoil_.DefaultValue ? false : newValue
        });
    }
});
const $loginState = (0,external_recoil_.selector)({
    key: "recoil@login-selector",
    get: ({ get  })=>{
        const state = get($userState);
        if (state.isKakaoLogined && !state.isGithubLogined) return "kakaoSigned";
        else if (state.isGithubLogined && !state.isKakaoLogined) return "githubSigned";
        else if (state.isGithubLogined && state.isKakaoLogined) return "logined";
        else return "none";
    }
});
/* harmony default export */ const userState = ($userState);


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

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();
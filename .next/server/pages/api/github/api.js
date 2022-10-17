"use strict";
(() => {
var exports = {};
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "instance": () => (/* binding */ instance)
});

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(49));
module.exports = __webpack_exports__;

})();
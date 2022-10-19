// webpack.config.js
const path = require("path");

module.exports = {
    mode: "development",
    rules: [test],

    resolve: {
        alias: {
            "@/": path.resolve(__dirname, "/"),
        },
    },
};

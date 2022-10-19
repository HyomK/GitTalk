/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    resolve: {
        alias: {
            "@/": path.resolve(__dirname, "/"),
        },
        extensions: [".js", ".jsx", ".css"],
    },
};

module.exports = nextConfig;

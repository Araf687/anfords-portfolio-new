const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
})



/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    serverRuntimeConfig: {
        headers: {
            'Content-Security-Policy': 'frame-ancestors \'none\';',
        },
    },
}

module.exports = withPWA(nextConfig)

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
    images: {
        domains: ['dummyimage.com','i5.walmartimages.com','assets.unileversolutions.com'], // Add your image domains here
    },
}

module.exports = withPWA(nextConfig)

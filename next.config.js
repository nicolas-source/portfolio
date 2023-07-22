// https://github.com/gregrickaby/nextjs-github-pages

/**
 * @type {import('next').NextConfig}
 **/

// const repo = "portfolio";
// const assetPrefix = `/${repo}/`;
// const basePath = `/${repo}`;
//
// const nextConfig = {
//     trailingSlash: true,
//
//     output: "export",
//     basePath: basePath,
//     assetPrefix: assetPrefix,
//     images: {
//         unoptimized: true,
//     },
// };

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    output: 'export',
    assetPrefix: isProd ? '/portfolio/' : '',
    // assetPrefix: '',
    images: {
        unoptimized: true,
    },
}


/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
//     // output: 'export',
//     // Optional: Add a trailing slash to all paths `/about` -> `/about/`
//     // trailingSlash: true,
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
// }

// module.exports = nextConfig
import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import path from 'path';
// import packageJson from './package.json' assert { type: 'json' };

const __dirname = path.resolve();
console.log(__dirname);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com'
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos'
            }
        ]
    },
    transpilePackages: ["../../packages"],
    webpack: (config, options) => {
        const { isServer } = options;
        config.experiments = { topLevelAwait: true };
        config.devServer = {
            allowedHosts: 'all',
            liveReload: true,
            crossOriginIsolated: false,
            cors: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
        };
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                'state': path.resolve(__dirname, '../state/src/stores/index.ts')
            },
        };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'products',
                filename: 'static/chunks/remoteEntry.js',
                dts: false,
                // runtimePlugins: [resolve('./src/middleware.ts')],
                remotes: {
                    cart: `cart@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                    stores: `stores@http://localhost:3030/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
                },
                shared: {},
            })
        );

        return config;
    }
};

export default nextConfig;

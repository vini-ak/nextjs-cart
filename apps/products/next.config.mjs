import { NextFederationPlugin } from '@module-federation/nextjs-mf';

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
    webpack: (config, options) => {
        const { isServer } = options;
        config.experiments = { topLevelAwait: true };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'products',
                remotes: {
                    cart: `cart@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
                },
                filename: 'static/chunks/primaryEntry.js'
            })
        );

        return config;
    }
};

export default nextConfig;

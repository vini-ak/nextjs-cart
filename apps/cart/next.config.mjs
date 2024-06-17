import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        const { isServer } = options;
        config.experiments = { topLevelAwait: true };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'cart',
                remotes: {
                    products: `products@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
                },
                filename: 'static/chunks/primaryEntry.js'
            })
        );

        return config;
    }

};

export default nextConfig;

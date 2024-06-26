import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["../../packages"],
    webpack: (config, options) => {
        const { isServer } = options;
        config.experiments = { topLevelAwait: true };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'cart',
                filename: 'static/chunks/primaryEntry.js',
                dts: false,
                remotes: {
                    products: `products@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
                },
                exposes: {
                    "./cart": "./src/pages/index.tsx"
                },
                shared: {},
                extraOptions: {
                    exposePages: true
                },
            })
        );

        return config;
    }

};

export default nextConfig;

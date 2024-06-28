import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import packageJson from './package.json' assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["../../packages"],
    webpack: (config, options) => {
        const { isServer } = options;
        config.experiments = { topLevelAwait: true };
        config.devServer = {
            allowedHosts: 'all',
            liveReload: true
        };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'cart',
                filename: 'static/chunks/primaryEntry.js',
                dts: false,
                remotes: {
                    products: `products@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/primaryEntry.js`
                },
                exposes: {
                    "./cart": "./src/pages/index.tsx"
                },
                shared: {
                    react: { singleton: true, eager: true },
                    "styled-components": { singleton: true, eager: true },
                    "react-dom": { singleton: true, eager: true },

                },
                extraOptions: {
                    exposePages: true
                },
            })
        );

        return config;
    }

};

export default nextConfig;

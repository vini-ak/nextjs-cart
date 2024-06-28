import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import packageJson from './package.json' assert { type: 'json' };

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
            liveReload: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
              }
        };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'products',
                remotes: {
                    cart: `cart@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/primaryEntry.js`
                },
                filename: 'static/chunks/primaryEntry.js',
                dts: false,
                shared: {
                    react: { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
                    "styled-components": { singleton: true, eager: true, requiredVersion: packageJson.dependencies["styled-components"] },
                    "react-dom": { singleton: true, eager: true, requiredVersion: packageJson.dependencies["react-dom"] }
                },
            })
        );

        return config;
    }
};

export default nextConfig;

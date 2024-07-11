import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import packageJson from './package.json' assert { type: 'json' };

const deps = packageJson.dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["../../packages"],
    compiler: {
        styledComponents: true
    },
    env: {
        API_URL: 'http://localhost:4000'
    },
    webpack: (config, options) => {
        const { isServer } = options;
        config.experiments = { topLevelAwait: true };
        config.devServer = {
            allowedHosts: 'all',
            cors: true,
            liveReload: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
        };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'cart',
                filename: 'static/chunks/remoteEntry.js',
                dts: false,
                remotes: {
                    products: `products@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
                },
                exposes: {
                    "./cart": "./src/pages/index.tsx"
                },
                shared: {
                    // react: { singleton: true, eager: true },
                    // "react-dom": { singleton: true, eager: true },
                    "styled-components": { 
                        singleton: true, 
                        eager: true, 
                        requiredVersion: deps["styled-components"] 
                    },
                },
                extraOptions: {
                    exposePages: true,
                },
            })
        );

        return config;
    }

};
''
export default nextConfig;

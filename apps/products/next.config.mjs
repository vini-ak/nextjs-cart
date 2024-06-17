/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;

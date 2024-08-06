/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com'],
    },
    experimental:{
        serverActions: true,
        serverComponentsExternalPackages:['mongoose']
    }
};

export default nextConfig;

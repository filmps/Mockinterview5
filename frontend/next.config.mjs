/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.squarespace-cdn.com',
        },
        {
          protocol: 'https',
          hostname: 'theladders.com'
        },
        {
          protocol: 'https',
          hostname: 'www.shutterstock.com',
        },
      ],
    },
  }
  
  export default nextConfig
  
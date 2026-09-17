/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  allowedDevOrigins: ['192.168.18.75'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
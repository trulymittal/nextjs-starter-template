/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  webpack(config) {
    return config;
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  reactStrictMode: false,
  poweredByHeader: false,
};

export default nextConfig;

import type { NextConfig } from "next";
const withNextIntl = require("next-intl/plugin")();

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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

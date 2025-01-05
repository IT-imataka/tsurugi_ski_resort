import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/portfolio",
        destination: "/portfolio/index.html",
      },
    ];
  },
};

export default nextConfig;

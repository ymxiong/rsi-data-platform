import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/horsecoder-storage/**",
      },
    ],
  },
  async rewrites() {
    if (process.env.NODE_ENV !== "development") {
      return [];
    }

    return [
      {
        source: "/dataTesting-core/:path*",
        destination: "http://127.0.0.1:30845/:path*",
      }
    ];
  },
};

export default nextConfig;

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
        source: "/mall-dialogue/:path*",
        destination: "http://127.0.0.1:30432/:path*",
      },
      {
        source: "/app-im/:path*",
        destination: "http://127.0.0.1:41229/:path*",
      },
      {
        source: "/horsecoder-storage/:path*",
        destination: "http://192.168.3.221:10104/:path*",
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*"
            }
        ]
    },
    experimental: {
        ppr: "incremental"
    },
    devIndicators: {
        position: "top-left"
    }
};

export default nextConfig;

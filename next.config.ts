import type { NextConfig } from "next";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL;
const strapiHost = strapiUrl ? new URL(strapiUrl).hostname : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      ...(strapiHost
        ? [
            {
              protocol: "http" as const,
              hostname: strapiHost,
            },
            {
              protocol: "https" as const,
              hostname: strapiHost,
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;

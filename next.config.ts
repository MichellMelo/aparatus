import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  async headers() {
    return [
      {
        // aplica a todos os caminhos; ajuste se quiser restringir
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: "clipboard-read=(self), clipboard-write=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

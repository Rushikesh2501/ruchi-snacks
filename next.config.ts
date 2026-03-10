import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/ruchi-snacks" : "",
  assetPrefix: isProd ? "/ruchi-snacks/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

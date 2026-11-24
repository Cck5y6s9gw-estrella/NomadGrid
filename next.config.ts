import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  async redirects() {
    return [{ source: "/presupuesto", destination: "/calculadora", permanent: true }];
  },
};

export default nextConfig;

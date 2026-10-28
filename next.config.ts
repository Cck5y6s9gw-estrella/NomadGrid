import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/presupuesto", destination: "/calculadora", permanent: true }];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from LAN devices (e.g. http://192.168.1.7:3000)
  allowedDevOrigins: ["192.168.1.7"],
};

export default nextConfig;

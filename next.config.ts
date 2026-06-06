import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from LAN devices. The machine's DHCP IP
  // changes (was .7, now .2), so allow the whole home subnet.
  allowedDevOrigins: ["192.168.1.*"],
  experimental: {
    // Next 16 enables Turbopack's .next filesystem cache for dev by default.
    // It kept serving STALE compiled output after restarts (404s on all routes,
    // old CSS without new edits) — disable it; cold start is a bit slower but
    // every dev session compiles fresh from disk.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;

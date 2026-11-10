import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // The ESP-Countdown setup tool is a standalone static page in public/esp-countdown/.
      // Next.js doesn't serve directory indexes from public/, so map the clean URL to the file.
      { source: "/esp-countdown", destination: "/esp-countdown/index.html" },
    ];
  },
};

export default nextConfig;

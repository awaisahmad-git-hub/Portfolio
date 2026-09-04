import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Hide the floating dev-tools badge. Error overlays still appear.
  devIndicators: false,
  images: {
    // The hero portrait is rendered at a higher quality than the default.
    qualities: [75, 92],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

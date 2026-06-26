/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Inline critical CSS into the <head> and defer (preload + async-swap) the
    // rest of the stylesheet via Beasties, so CSS is no longer render-blocking.
    optimizeCss: true,
  },
};

export default nextConfig;

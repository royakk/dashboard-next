import type { NextConfig } from "next";
import withPWA from 'next-pwa';

// ✅ Correctly pass PWA options inside withPWA(...)
const withPWAConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pokeapi.co",
        pathname: "/api/v2/pokemon/**", // Just note this doesn’t return actual images.
      },
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        pathname: "/artwork/large/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  },
};


// ✅ Export using withPWA
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default withPWAConfig(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Type checking runs during the build. ESLint is not configured (no .eslintrc),
  // so it is skipped — set one up and remove this line.
  eslint: { ignoreDuringBuilds: true },
  // Security headers.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;

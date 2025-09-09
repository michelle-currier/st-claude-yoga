import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config redirect delete lines 5-14 to remove redirect */
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://saintclaudeyogacenter.union.site/', // Replace with your desired external URL
        permanent: true,
        basePath: false, // Set to false if not using basePath
      },
    ];
  },
};

export default nextConfig;

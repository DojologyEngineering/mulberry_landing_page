/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'about | Mulberry International Preschool, Cambodia',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

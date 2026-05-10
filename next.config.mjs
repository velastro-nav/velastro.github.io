/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export if you use the Next.js <Image> component
  },
};

export default nextConfig;

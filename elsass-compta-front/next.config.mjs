/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "admin.elsass-compta.fr",
            pathname: "/**",
         },
         {
            protocol: "http",
            hostname: "localhost",
            pathname: "**",
         },
         {
            protocol: "https",
            hostname: "*.elsass-compta.fr",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;

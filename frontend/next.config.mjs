/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "admin.elsass-compta.fr",
            pathname: "/uploads/**",
         },
         {
            protocol: "http",
            hostname: "localhost",
            pathname: "**",
         },
      ],
   },
};

export default nextConfig;

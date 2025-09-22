/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["localhost", "admin.elsass-compta.fr"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "admin.elsass-compta.fr",
            pathname: "/uploads/**",
         },
      ],
   },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["localhost", "strapiback.graphandco.com"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "strapiback.graphandco.com",
            pathname: "/uploads/**",
         },
      ],
   },
};

export default nextConfig;

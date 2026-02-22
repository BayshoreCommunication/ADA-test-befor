/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_BLOG_API_URL: process.env.NEXT_PUBLIC_BLOG_API_URL,
  },

  // Workaround for V8 invalid size error on Windows/Node 20 with Next 13.x
  // Disable SWC minify to avoid build crash
  swcMinify: false,

  // images: {
  //   domains: ["cdn-icons-png.flaticon.com"],
  // },
  images: {
    unoptimized: true,
    domains: ["cdn-icons-png.flaticon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "backend-bayshore.vercel.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "bayshore.nyc3.digitaloceanspaces.com",
        // hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

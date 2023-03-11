const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.js"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "themes.potenzaglobalsolutions.com",
      "potenzaglobalsolutions.com",
      "www.bugatti.com",
      "images.unsplash.com",
      "wallpaperaccess.com",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;

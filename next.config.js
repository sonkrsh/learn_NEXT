const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.js"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;

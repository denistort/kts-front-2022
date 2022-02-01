const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.join(path.resolve(__dirname, "./src")),
			"@Components": path.join(path.resolve(__dirname, "./src/Components")),
			"@Assets": path.join(path.resolve(__dirname, "./src/assets")),
    },
  },
};
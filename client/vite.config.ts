import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "client", // Set `client/` as the root directory
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for `src/` directory
    },
  },
  base: "./", // Use relative paths for assets
  build: {
    outDir: "../dist", // Output directory for production build
    emptyOutDir: true, // Clear output directory before building
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Entry HTML file
    },
  },
});

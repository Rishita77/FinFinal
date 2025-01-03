import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Updated alias to match your structure
    },
  },
  root: "client", // Specify `client` as the root directory
  base: "./", // Ensures relative paths for assets in production
  build: {
    outDir: "../dist", // Build output will be outside the `client` directory
    emptyOutDir: true, // Clears the output directory before building
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client/index.html"), // Entry point for the app
      },
    },
  },
});

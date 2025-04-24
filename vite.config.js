import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import lightningcss from "vite-plugin-lightningcss";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/Vita__Villas/",
  root: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "sass"), // Alias for the sass directory
    },
  },
  plugins: [
    ViteImageOptimizer({
      exclude: ["**/gallery-img-*.jpg", "**/house-*.jpg"],
      png: { quality: 60 },
      jpeg: { quality: 60 },
      webp: { quality: 50, lossless: false },
      avif: { quality: 50 },
      svg: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: true },
        ],
      },
      convertTo: "webp",
      skipIfLarger: true,
      includePublic: true,
      logStats: true,
    }),
    lightningcss({
      browserslist: "last 2 versions",
      minify: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/_variables" as *;`, // Comment out if _variables.scss doesn't exist
      },
    },
    devSourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: "public",
});

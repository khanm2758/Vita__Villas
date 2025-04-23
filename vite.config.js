import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
  plugins: [
    ViteImageOptimizer({
      png: { quality: 70 },
      jpeg: { quality: 70 },
      webp: { quality: 80 },
      avif: { quality: 60 },
      svg: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: true },
        ],
      },
      includePublic: true,
      logStats: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        //  additionalData: `@use "./sass/variables" as *;`,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: "public",
});

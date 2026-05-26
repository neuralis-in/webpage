import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// The site is served behind GitHub Pages at `/webpage/` (the apex domain
// `neuralis.in` frame-forwards to `https://neuralis-in.github.io/webpage/`).
// We only need that base path for the production build; dev keeps `/` so
// `localhost:5173/blog` continues to work without a prefix.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/webpage/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        deck: resolve(__dirname, "deck/index.html")
      }
    }
  }
}));

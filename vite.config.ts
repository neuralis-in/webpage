import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const repoName = "neuralis-website";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${repoName}/` : "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
}));

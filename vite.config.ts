import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  // Allow deployments to override the public base path explicitly.
  // Default to a relative path for production so bundles work from both root
  // domains (neuralis.in) and nested deployments (GitHub Pages).
  const base =
    process.env.VITE_BASE_PATH ??
    (command === "build" ? "./" : "/");

  return {
    base,
    plugins: [react()],
    server: {
      port: 5173,
      open: true
    }
  };
});

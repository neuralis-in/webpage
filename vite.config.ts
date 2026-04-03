import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const base =
    process.env.VITE_BASE_PATH ??
    (command === "build" ? "/webpage/" : "/");

  return {
    base,
    plugins: [react()],
    server: {
      port: 5173,
      open: true
    }
  };
});

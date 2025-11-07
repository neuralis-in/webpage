import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const repoName =
    process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
  const base =
    mode === "production" && repoName ? `/${repoName}/` : "/";

  return {
    base,
    plugins: [react()],
    server: {
      port: 5173,
      open: true
    }
  };
});

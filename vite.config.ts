import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        deck: resolve(__dirname, "deck/index.html"),
        blog: resolve(__dirname, "blog.html"),
        blogMultiAgent: resolve(__dirname, "blog/building-multi-agent-systems.html"),
        blogLLVM: resolve(__dirname, "blog/llvm-for-compiler-engineering.html"),
        blogBeyondCUDA: resolve(__dirname, "blog/beyond-cuda-heterogeneous-gpu.html"),
        blogRAG: resolve(__dirname, "blog/hidden-cost-of-rag.html")
      }
    }
  }
});

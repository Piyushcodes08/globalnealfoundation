import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "wouter"],
          "vendor-framer": ["framer-motion"],
          "vendor-icons": ["lucide-react"],
          "vendor-ui": [
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-slot",
            "@radix-ui/react-select",
            "@radix-ui/react-label",
            "react-hook-form",
            "zod",
          ],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});

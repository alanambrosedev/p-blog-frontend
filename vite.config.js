import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://p-blog.test",
        changeOrigin: "true",
        headers: {
          Accept: "application/json",
        },
      },
    },
  },
});

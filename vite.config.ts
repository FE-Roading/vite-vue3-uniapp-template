import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 2021,
    host: "0.0.0.0"
  }
});

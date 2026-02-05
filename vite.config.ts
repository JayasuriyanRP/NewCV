import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  // Load env variables based on the current mode (development, production, etc.)
  return {
    plugins: [react(), tailwindcss(), svgr()],
    server: {},
  };
});

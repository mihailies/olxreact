import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify your custom output directory here
    outDir: "dist",
    // Recommended: ensures the folder is cleared before each build
    emptyOutDir: true,
  },
  // server:{
  //   port:8080
  // },
});

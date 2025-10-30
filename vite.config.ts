import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ✅ Fix: Set correct base for GitHub Pages deployment
  // When building for production, use your repo name as the base
  base: mode === "production" ? "/AshirbadLawFirm-/" : "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // Only use componentTagger in development
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lemcorian-conglomerate-hub/",
=======
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
  build: {
    // Enable minification (default: true)
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-select"],
        },
      },
    },
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
=======
}));
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da

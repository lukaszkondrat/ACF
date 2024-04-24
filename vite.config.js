import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      'react': 'https://cdn.skypack.dev/react@17',
      'react-dom': 'https://cdn.skypack.dev/react-dom@17'
    }
  },
});


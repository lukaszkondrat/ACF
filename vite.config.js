import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cdn } from "vite-plugin-cdn2";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions: {
      external: ['/@supabase/supabase-js']
    }
  },
  plugins: [cdn({modules:[react(), eslint()]})]
});

// export default defineConfig({
//   resolve: {
//     alias: {
//       'react': 'https://cdn.skypack.dev/react@17',
//       'react-dom': 'https://cdn.skypack.dev/react-dom@17'
//     }
//   },
//   plugins: [react(), eslint()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import importToCDN from 'vite-plugin-cdn-import';
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default {
    plugins: [
        importToCDN({
            modules: [
                {
                    name: 'react',
                    var: 'React',
                    path: `umd/react.production.min.js`,
                },
                {
                    name: 'react-dom',
                    var: 'ReactDOM',
                    path: `umd/react-dom.production.min.js`,
                },
            ],
        }),
    ],
}




// export default defineConfig({
//   resolve: {
//     alias: {
//       'react': 'https://cdn.skypack.dev/react@17',
//       'react-dom': 'https://cdn.skypack.dev/react-dom@17'
//     }
//   },
//   plugins: [react(), eslint()],
// });


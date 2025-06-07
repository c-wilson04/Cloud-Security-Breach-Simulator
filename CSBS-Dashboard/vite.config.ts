import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), {
    name: 'ignore-css-during-ssr',
    enforce: 'pre',
    resolveId(id) {
      if (id.endsWith('.css')) return id;
    },
    load(id) {
      if (id.endsWith('.css')) return '';
    },
  },],
  ssr: {
    noExternal: ["@mui/x-data-grid"], // Ensure MUI Data Grid is processed in SSR
  },
});

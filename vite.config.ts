import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import inject from "@rollup/plugin-inject"; 

export default defineConfig({
  plugins: [
    react(),
    inject({
      window: ["global/window", "*"],
      HTMLElement: ["html-element", "Element"]
    }),
  ],
  build: {
    target: "node16",
    lib: {
      entry: resolve(__dirname, "src/DocumentReview.tsx"),
      name: "DocumentReview",
      fileName: "document-review",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/namrata-ajmeri-portfolio", // IMPORTANT for username.github.io
});

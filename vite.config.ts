import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/03-react-movies/",
  plugins: [react()],
});

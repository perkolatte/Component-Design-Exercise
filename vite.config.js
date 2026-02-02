import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages under a repository subpath,
  // set `base` to the repo name so asset URLs are correct.
  base: "/Component-Design-Exercise/",
  plugins: [react()],
});

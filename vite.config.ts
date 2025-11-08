import { defineConfig } from "vite";

// Allow Render preview host(s) so `vite preview` accepts requests from the deployed domain.
export default defineConfig({
  preview: {
    // add the exact host Render reported (and any variants you use)
    allowedHosts: [
      "lab2web23520724-4.onrender.com",
      "lab2web23520724.onrender.com",
      "localhost",
    ],
  },
});

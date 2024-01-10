import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";

/// <reference types="vitest" />
export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    globals: true,
    css: false,
    include: [
      'src/**/*.test.tsx',
    ],
  }
});

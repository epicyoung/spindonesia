import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

// Keystatic integration only for development
// For production, we build static site without Keystatic admin
export default defineConfig({
  integrations: [react(), markdoc()],
  output: 'static',
});

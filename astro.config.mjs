import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig(
    /** @type {import('astro').AstroUserConfig} */
    {
      vite:{
        ssr:{
          noExternal: ['@fontsource/*']
        }
      }
    },
    {
      site: 'http://localhost:3000/'
    });
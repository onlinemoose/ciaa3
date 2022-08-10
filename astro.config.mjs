import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

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
    },
    {
      output: 'server',
      adapter: netlify(),
    });
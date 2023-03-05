import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

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
      site: 'https://www.taichiforeverybody.com/'
    }, 
    {
      output: 'server',
      adapter: vercel(),
    });
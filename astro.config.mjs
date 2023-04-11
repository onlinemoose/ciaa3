import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

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
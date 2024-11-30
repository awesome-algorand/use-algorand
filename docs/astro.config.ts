import tutorialkit from '@tutorialkit/astro';
import {defineConfig} from 'astro/config';
import starlight from "@astrojs/starlight";

import expressiveCode from "astro-expressive-code";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
      enabled: false
  },

  integrations: [
      tutorialkit({
          components: {
              TopBar: './src/components/TopBar.astro',
          },
          defaultRoutes: "tutorial-only"
      }),
      starlight({
          title: '@awesome-algorand',
          favicon: '/favicon.ico',
          logo: {
              src: './public/logo.png',
              replacesTitle: true
          },
          customCss: ['./starlight.css'],
          social: {
              github: 'https://github.com/withastro/starlight'
          },
          sidebar: [
              {
                  label: 'Get Started',
                  items: [
                      {
                          label: 'Introduction',
                          link: '/introduction'
                      },{
                          label: 'Configuration',
                          link: '/get-started'
                      },
                      {
                          label: 'Using Algod',
                          link: '/algod-introduction'
                      },
                  ]
              },
              {
                  label: 'Reference',
                  collapsed: false,
                  items: [
                      {
                          label: "Clients",
                          collapsed: true,
                          badge: { text: 'WIP', variant: "caution" },
                          autogenerate: { directory: 'reference/clients' },
                      },
                      {
                          label: "Queries",
                          collapsed: true,
                          badge: "New",
                          autogenerate: { collapsed: false, directory: 'reference/queries' },
                      },
                      {
                          label: "Mutations",
                          collapsed: true,
                          badge: { text: 'WIP', variant: "caution" },
                          autogenerate: { directory: 'reference/mutations' },
                      }
                  ]
              },
          ]
      }),
  ],

  output: 'server',
  adapter: cloudflare()
});
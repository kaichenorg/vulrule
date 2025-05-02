import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Vulrule',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/antivirus.png',

  // Set the production url of your site here
  url: "https://kaichen.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vulrule/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaichenorg', // Usually your GitHub org/user name.
  projectName: 'vulrule', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Vulrule',
      logo: {
        alt: 'Vulrule Logo',
        src: 'img/antivirus.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'rules',
        },
        {
          to: '/category/projects',
          position: 'left',
          label: 'projects',
        },
        {
          to: '/category/tools',
          position: 'left',
          label: 'tools',
        },
        {
          to: '/category/types',
          position: 'left',
          label: 'type',
        },
        {
          href: 'https://github.com/kaichenorg/vulrule',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} kiachen.org. Built with Docusaurus.`,
    },
    sidebar: {
      autoCollapseCategories: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

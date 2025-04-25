import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "漏洞规则库",
  tagline: "帮助开发者避免常见的安全漏洞",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kaichenorg.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/vulrule/",

  // GitHub pages deployment config.
  organizationName: "kaichenorg",
  projectName: "vulrule",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  // Add docusaurus-lunr-search plugin here
  plugins: [
    // Add docusaurus-plugin-dotenv plugin here
    [
      require.resolve("docusaurus-plugin-dotenv"),
      {
        path: "./.env", // Path to your .env file
        systemvars: true, // Load all system variables as well
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          routeBasePath: "/", // Serve the docs at the site's root
        },
        blog: false, // Disable the blog feature
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/vulnerability-rules-card.jpg",
    navbar: {
      title: "漏洞规则库",
      logo: {
        alt: "漏洞规则库 Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          position: "left",
          label: "首页",
        },
        {
          to: "/libraries",
          position: "left",
          label: "代码库",
        },
        {
          to: "/rules",
          position: "left",
          label: "规则分类",
        },
        {
          to: "/tools",
          position: "left",
          label: "规则生成工具",
        },
        // 将登录状态从HTML组件改为常规navbar item
        {
          to: "#login",
          position: "right",
          label: "登录",
          className: "navbar-login-button",
        },
        {
          href: "https://github.com/kaichenorg/vulrule",
          label: "GitHub",
          position: "right",
        },
        {
          to: "/about",
          position: "right",
          label: "关于我们",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "首页",
              to: "/",
            },
            {
              label: "代码库",
              to: "/libraries",
            },
            {
              label: "规则分类",
              to: "/rules",
            },
            {
              label: "规则生成工具",
              to: "/tools",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "关于我们",
              to: "/about",
            },
            {
              label: "GitHub Issues",
              href: "https://github.com/kaichenorg/vulrule/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 漏洞规则库. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "漏洞规则库",
  tagline: "帮助开发者避免常见的安全漏洞",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://5c4lar.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/vulrule/",

  // GitHub pages deployment config.
  organizationName: "5c4lar",
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
    [
      require.resolve("docusaurus-lunr-search"),
      {
        // 中文分词配置
        languages: ["zh", "en"],
        // 这里可以使用 jieba 分词器来提高中文搜索质量
        language: ["en", "zh"],
        // 为汉语指定分词器
        languageTokenizer: {
          zh: (data) => {
            try {
              // 检查是否安装了 jieba 分词
              const { cut } = require("@node-rs/jieba");
              // 使用 jieba 分词进行中文分词
              return cut(data, true);
            } catch (e) {
              // 如果没有安装 jieba，使用默认方法
              return data.split(/[\s\p{Punctuation}]+/u);
            }
          },
        },
      },
    ],
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
        // 添加登录状态组件作为HTML项
        {
          type: "html",
          position: "right",
          value: '<div id="login-status-container"></div>',
          className: "navbar-login-item",
        },
        {
          href: "https://github.com/5c4lar/vulrule",
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
              href: "https://github.com/5c4lar/vulrule/issues",
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

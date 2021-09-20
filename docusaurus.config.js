const dotenv = require("dotenv");
dotenv.config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Nouns Docs",
  tagline: "Live, Laugh, Nouns.",
  url: "https://nouns-docs.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "NounsDAO",
  projectName: "Nouns Docs",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        switchConfig: {
          darkIcon: "🕶",
          lightIcon: "👓",
        },
      },
      navbar: {
        title: "Nouns Docs",
        logo: {
          alt: "Nouns",
          src: "img/head.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/docs/faq", label: "FAQ", position: "left" },
          {
            href: "https://github.com/christiandavidturner/Nouns-Docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      algolia: {
        apiKey: "88a8183c8c9397b2098462512fa44b21",
        indexName: "nouns",
        contextualSearch: true,
        placeholder: "Quick search for anything.",
        APPLICATION_ID: "2Z9R9UYHLR",
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Start Here",
                to: "/docs/intro",
              },
              {
                label: "FAQ",
                to: "/docs/faq",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Nouns.com",
                href: "https://nouns.com/",
              },
              {
                label: "Discord",
                href: "http://discord.gg/nouns",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/nounsdao",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Nouns Auction",
                href: "https://nouns.wtf/",
              },
              {
                label: "Auction Repo",
                href: "https://github.com/nounsDAO/nouns-monorepo",
              },
              {
                label: "Docs Repo",
                href: "https://github.com/christiandavidturner/Nouns-Docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NounsDAO. Built by Christian.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
